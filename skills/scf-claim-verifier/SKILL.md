---
name: scf-claim-verifier
description: "Check the factual claims in an SCF submission against live ecosystem data — prior art and duplication, the applicant's own funding history, whether a linked repo is real and recent code, whether a project is still alive, and whether a mainnet claim shows on-chain activity. Use when reviewing, scoring, or prescreening an SCF application, and whenever a submission asserts 'first', 'only', 'live on mainnet', or 'we built X' and you need evidence rather than the applicant's word."
---

# SCF Claim Verifier

## What this is for

Reviewing an SCF round means reading a lot of confident prose. Applicants say *"the first lending protocol on Stellar"*, *"live on mainnet"*, *"our repo"* — and a reviewer has no time to check each one by hand across GitHub, the explorer, and the directory.

This skill turns those claims into queries against an open, no-key data layer, so a score rests on evidence instead of assertion. It is written for **reviewers** — Pilots, Navigators, and anyone scoring or prescreening a round.

**Read the honesty rules at the bottom before you use any result to lower a score.** Absence of a record is not evidence of absence, and treating it that way will produce unfair reviews.

## The five checks

### 1. Prior art — is this actually novel?

For any "first" / "only" / "no one else is doing this" claim:

```bash
curl -s "https://stellarlight.xyz/api/projects/search?q=lending&limit=10"
```

Returns matching projects with `status`, `types`, and `scf` history. Searching `lending` today returns Blend, YieldBack.Cash, Untangled, Trilobyte and Lumen Later — all `status: Live`. A "first lending protocol" claim does not survive that.

Search the *capability*, not the project's own name — an applicant's brand won't match incumbents. Try two or three phrasings (`lending`, `borrow collateral`, `money market`) before concluding anything is novel.

### 2. Funding history — has this team been funded before?

```bash
curl -s "https://stellarlight.xyz/api/projects/search?q=<project>&limit=1"
```

Read these fields off the project row (they are flat, not nested):

| Field | Meaning |
|---|---|
| `scfAwarded` | `true` if our records show any SCF award |
| `scfAwardedRounds` | which rounds, e.g. `[38, 41]` — **empty array is common, see coverage below** |
| `scfTotalAwardedUSD` | total awarded across rounds |
| `scfAmountStatus` | `disclosed` / otherwise — some rounds are XLM-denominated or undisclosed |

Relevant to resubmission rules, to "we've never received SCF support" claims, and to sizing a request against what the team has already drawn.

Round-level totals across the whole program:

```bash
curl -s "https://stellarlight.xyz/api/analyze?dimension=funding"
```

### 3. Repo reality — is the linked code real?

The project row carries a `repos[]` array (`fullName`, `url`, `lastCommitAt`) plus a `lastActivityAt` field.

**Use `lastActivityAt` to judge whether a team is still working. Never `repos[0].lastCommitAt`.** `repos[]` is sorted by score, not recency, so `repos[0]` is the flagship repo — often the most stable and least recently touched. `lastActivityAt` is the newest commit across *all* the project's repos.

The difference is not cosmetic. Blend's `repos[0]` (`blend-contracts`) last moved 2024-05-01, which reads as two years abandoned; its `lastActivityAt` is 2026-06-19 — 35 days — because `blend-sdk-js` is active, and its contracts carry 1.17M on-chain events. Judging Blend on `repos[0]` would tell a Pilot that a live, heavily-used protocol took its award and stopped working. Cross-check any inactivity finding against `onchain` events before raising it.

If `repos[]` is empty, search directly:

```bash
curl -s "https://stellarlight.xyz/api/repos/search?q=<project-or-topic>&limit=5"
```

Gives `fullName` and `lastCommitAt` — enough to see whether a repo has been touched this year. For whether it is genuinely Soroban code rather than a README with ambition:

```bash
curl -s "https://stellarlight.xyz/api/repos/explain?q=what+does+this+contract+do&repo=<owner>/<name>"
```

Returns `codeVerified` — real `soroban-sdk` imports, whether the crate is a deployable contract, which SDK version and whether that version is still supported, exported symbols, and any mainnet contract ID. `answerSource` tells you whether the explanation came from DeepWiki or from a direct source scan.

This is the check that separates a working contract from a scaffold. Star counts do not.

### 4. Liveness — is the thing they are building on still alive?

The `status` field on any project row (`Live`, `Development`, `Pre-Release`, `Inactive`). `Inactive` means a human verified it defunct — a submission that depends on an inactive integration partner is a real risk worth raising.

**A stale repo is not a dead project.** Several actively-run projects have quiet repos. Status is set from human verification, not from commit recency.

### 5. Mainnet claims — is there on-chain activity?

```bash
curl -s "https://stellarlight.xyz/api/projects/search?q=<project>&limit=1"
```

The `onchain` block carries per-contract `events` and `subinvocations`, plus asset `assetHolders` and supply where the project issues one, all sourced from stellar.expert with an `asOf` date. A contract deployed but never called shows near-zero events — which is a fair thing to ask about, and a fair thing for the applicant to explain.

## Round context

Before scoring against a track, resolve the current round and open RFP categories with [`scf-live-context`](../scf-live-context/SKILL.md). RFP names rotate quarterly and a review written against last quarter's list will mis-score the RFP track.

## Using this inside Raven

[Raven](https://agents.stellar.buzz), SDF's assistant, already calls this same data layer as built-in tools — so a reviewer does not need to run curl at all. Ask Raven to review a submission and it can run these checks directly:

| Check | Raven tool |
|---|---|
| Prior art / duplication | `scout.searchProjects({ q: "lending" })` |
| Funding history | `scout.searchProjects({ q: "<project>" })` → `scf.awarded`, `scf.awardedRounds` |
| Repo reality | `scout.searchRepos({ q: "<project>" })` |
| Is it real Soroban code | `scout.explainRepo({ q: "...", repo: "owner/name" })` → `codeVerified` |
| Current round / open RFPs | `scout.getRfps({})` |
| Program-wide funding | `scout.analyzeEcosystem({ dimension: "funding" })` |

Because both paths read the same records, a Pilot working in Raven and a reviewer running the curls above get the same answer — and the honesty rules below apply identically in either.

## Measured coverage — what you can actually verify

Measured 2026-07-23 across 71 SCF-awarded projects sampled from eight categories. Know these before you treat a blank as meaningful:

| Check | Answerable | Blank means |
|---|---:|---|
| Award amount (`scfTotalAwardedUSD`) | 97% | undisclosed or XLM-denominated round |
| Which rounds (`scfAwardedRounds`) | 94% | attribution gap on our side — Blend is awarded with an empty rounds array |
| Repo linked (`repos[]`) | **77%** | **no repo on the row — search `/api/repos/search` before concluding anything** |

The repo gap is the one that bites: roughly one awarded project in four has no repo linked, so a blank `repos[]` is far more likely to be our coverage gap than a team with no code. Always fall back to a direct repo search, and if that also comes up empty, ask the applicant rather than scoring them down.

## Honesty rules — read before scoring

These matter more than the queries. A reviewer armed with a fast lookup can do real damage.

- **Absence of a record is not evidence of absence.** `scf: none` means *our data shows no award*, not that the team was never funded. A project missing from the directory means *not indexed*, not *does not exist*. Never lower a score because our data lacks a row — ask the applicant instead.
- **Coverage is uneven.** On-chain contract data is concentrated in DeFi; most projects have no contract rows at all. No `onchain` block is not a failed mainnet claim.
- **Dates matter.** Every on-chain figure carries `asOf`. Quote it. A metric without a date will be read as current when it may be days old.
- **Prior art is not disqualifying.** Finding five lending protocols does not make a sixth worthless — it makes the *differentiation* section the thing to scrutinise. Use the result to sharpen the question, not to close it.
- **Report what you checked.** If you raise a concern in a review, name the query and what came back, so the applicant can respond to evidence rather than a verdict.
- **When the data and the applicant disagree, ask.** They may be right and we may be stale. Our records are corrected continuously; treat a conflict as a question, not a finding.

## Provenance

Served by [StellarLight](https://stellarlight.xyz) — open, no key, CORS-enabled. Per-source freshness at `https://stellarlight.xyz/api/status`; corrections are dated at `/api/changelog`. If a record here is wrong, that is a bug worth reporting.
