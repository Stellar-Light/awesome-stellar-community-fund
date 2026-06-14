#!/usr/bin/env node
// validate_skills.mjs — structural validator for awesome-stellar-community-fund.
//
// Checks every skill (or one passed as argv) against the modern Claude Agent
// Skills layout: each skill is a directory skills/<name>/SKILL.md with YAML
// frontmatter (name, description) and a name that matches its directory.
// Also validates the repo packaging manifests (plugin.json, marketplace.json).
//
// Usage:
//   node scripts/validate_skills.mjs              # all skills + repo manifests
//   node scripts/validate_skills.mjs skills/foo   # one skill dir
//
// Exit 0 = clean (warnings allowed), 1 = at least one error.

import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, basename, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const SKILLS_DIR = join(ROOT, 'skills');

const MAX_BODY_LINES = 800;
const DESC_HARD_CAP = 1536;
const DESC_SOFT_CAP = 1024;

let totalErrors = 0, totalWarnings = 0;
const summary = [];

function parseFrontmatter(text, e) {
  if (!text.startsWith('---')) { e.push('SKILL.md does not start with YAML frontmatter (---).'); return { fm: {}, body: text }; }
  const end = text.indexOf('\n---', 3);
  if (end === -1) { e.push('Frontmatter block is not closed with a second ---.'); return { fm: {}, body: text }; }
  const fm = {};
  for (const line of text.slice(3, end).split('\n')) {
    const m = line.match(/^([a-zA-Z_-]+):\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    const raw = m[2].trim();
    fm[key] = raw.replace(/^["']|["']$/g, '').trim();
    // YAML-safety: catch footguns the real parser rejects (regex scraping would miss).
    const quoted = (raw.startsWith('"') && raw.endsWith('"')) || (raw.startsWith("'") && raw.endsWith("'"));
    if (raw && !quoted) {
      if (/:\s/.test(raw)) e.push(`frontmatter: value for "${key}" contains ": " — must be quoted or YAML parsing fails (skill loads with NO metadata)`);
      else if (/^[@`%|>\[\]{}*&!?#,]/.test(raw)) e.push(`frontmatter: value for "${key}" starts with a YAML-special char — quote it`);
    }
  }
  return { fm, body: text.slice(end + 4) };
}

function validateSkill(dir) {
  const name = basename(dir);
  const e = [], w = [];
  const skillPath = join(dir, 'SKILL.md');
  if (!existsSync(skillPath)) { e.push('Missing SKILL.md'); return report(name, e, w); }
  const { fm, body } = parseFrontmatter(readFileSync(skillPath, 'utf8'), e);

  if (!fm.name) e.push('frontmatter: missing `name`');
  else if (fm.name !== name) e.push(`frontmatter: name "${fm.name}" != directory "${name}"`);

  if (!fm.description) e.push('frontmatter: missing `description`');
  else {
    if (fm.description.length > DESC_HARD_CAP) e.push(`description ${fm.description.length} chars > hard cap ${DESC_HARD_CAP}`);
    else if (fm.description.length > DESC_SOFT_CAP) w.push(`description ${fm.description.length} chars > soft budget ${DESC_SOFT_CAP}`);
    if (!/use when/i.test(fm.description)) w.push('description should state WHEN to use it ("Use when ...")');
  }

  const bodyLines = body.split('\n').length;
  if (bodyLines > MAX_BODY_LINES) e.push(`body ${bodyLines} lines > ${MAX_BODY_LINES} (split into references/ files)`);
  else if (bodyLines > MAX_BODY_LINES * 0.9) w.push(`body ${bodyLines} lines (approaching ${MAX_BODY_LINES})`);

  if (!/^#\s+\S/m.test(body)) w.push('missing an H1 title');

  // Cross-links to sibling skills must resolve.
  for (const m of body.matchAll(/\.\.\/([a-z0-9-]+)\/SKILL\.md/g))
    if (!existsSync(join(SKILLS_DIR, m[1], 'SKILL.md'))) e.push(`broken cross-link ../${m[1]}/SKILL.md`);

  // Links into the shared docs/ tree must resolve.
  for (const m of body.matchAll(/\.\.\/\.\.\/docs\/([A-Za-z0-9._-]+\.md)/g))
    if (!existsSync(join(ROOT, 'docs', m[1]))) e.push(`broken doc link ../../docs/${m[1]}`);

  // Bundled resources referenced in the body must exist.
  for (const m of body.matchAll(/references\/([A-Za-z0-9._-]+\.[A-Za-z0-9]+)/g))
    if (!existsSync(join(dir, 'references', m[1]))) w.push(`mentions missing bundled file references/${m[1]}`);

  report(name, e, w);
}

function report(name, e, w) {
  totalErrors += e.length; totalWarnings += w.length;
  summary.push({ name, status: e.length ? 'FAIL' : (w.length ? 'WARN' : 'PASS') });
  console.log(`\n${e.length ? '❌ FAIL' : (w.length ? '⚠️  WARN' : '✅ PASS')}  ${name}`);
  for (const x of e) console.log(`   error:   ${x}`);
  for (const x of w) console.log(`   warning: ${x}`);
}

function validateRepo() {
  const e = [], w = [];
  for (const [file, mustHave] of [
    ['.claude-plugin/plugin.json', ['name']],
    ['.claude-plugin/marketplace.json', ['name', 'plugins']],
  ]) {
    const p = join(ROOT, file);
    if (!existsSync(p)) { e.push(`missing ${file}`); continue; }
    try {
      const j = JSON.parse(readFileSync(p, 'utf8'));
      for (const k of mustHave) if (!(k in j)) e.push(`${file}: missing key "${k}"`);
    } catch (err) { e.push(`${file}: invalid JSON (${err.message})`); }
  }
  report('repo', e, w);
}

const arg = process.argv[2];
if (arg) validateSkill(resolve(arg));
else {
  validateRepo();
  for (const d of readdirSync(SKILLS_DIR)) {
    const p = join(SKILLS_DIR, d);
    if (statSync(p).isDirectory()) validateSkill(p);
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log(`Result: ${summary.filter((s) => s.status === 'PASS').length} pass, ` +
  `${summary.filter((s) => s.status === 'WARN').length} warn, ` +
  `${summary.filter((s) => s.status === 'FAIL').length} fail  ` +
  `(${totalErrors} errors, ${totalWarnings} warnings)`);
process.exit(totalErrors ? 1 : 0);
