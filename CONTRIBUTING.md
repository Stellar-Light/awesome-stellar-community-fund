# Contributing

Thanks for helping improve the Awesome Stellar Community Fund resources.

## How to contribute

1. Fork the repo and create a feature branch.
2. Add or update a resource:
   - **Skills** live in `skills/<name>/SKILL.md` (one directory per skill). See [`skills/README.md`](skills/README.md#adding-a-new-skill).
   - **Guides** live in `docs/<name>.md`. Add a row to [`docs/README.md`](docs/README.md) and the root [`README.md`](README.md).
3. Keep factual claims aligned with the official [SCF Handbook](https://stellar.gitbook.io/scf-handbook). Cite the handbook section when you state a rule, cap, or process. Program details (budget caps, tracks, supporting programs, governance) change between rounds — verify against the handbook before adding numbers.
4. Run the validator and fix any errors:
   ```bash
   node scripts/validate_skills.mjs
   ```
5. Open a pull request describing what you changed and why.

## Skill authoring conventions

- The frontmatter `name` must equal the skill's directory name.
- The `description` should be third person and trigger-rich — include a "Use when …" clause so the skill is discoverable. Keep it under ~1024 characters.
- Put bundled resources in `skills/<name>/references/` or `skills/<name>/scripts/`.
- Cross-link sibling skills as `../<name>/SKILL.md` and shared guides as `../../docs/<file>.md`.

## Reporting issues

Open a GitHub issue for inaccuracies, dead links, or handbook drift. If a guide contradicts the current SCF Handbook, please include the handbook section that supersedes it.
