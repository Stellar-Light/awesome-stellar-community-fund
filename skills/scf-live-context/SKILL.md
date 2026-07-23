---
name: scf-live-context
description: "Fetch the CURRENT SCF round, deadline, open RFP categories, and handbook rules from a live open API. Use when starting any SCF workflow — reviewing a round, drafting a submission or interest form, building a budget, prescreening, or preparing a referral — and use it before quoting any round number, deadline, RFP name, or award figure, because these rotate every quarter and stale values produce confidently wrong advice."
---

# SCF Live Context

## Why this exists

Every other skill in this repo carries the same warning in some form: *"RFP names rotate every quarter — never assume which RFPs are open. Always fetch the live spec."* That instruction was correct but not actionable — the agent was pointed at GitBook and left to parse prose.

This skill makes it a query. The facts that rotate — round number, submission deadline, open RFP categories, award rules — come from an open, no-key API so a stale example can never become the answer.

**Rule: never state a round number, deadline, or RFP category from memory or from an example in another skill. Fetch it here first.**

## Current round, deadline, and open RFPs

```bash
curl -s "https://stellarlight.xyz/api/rfps?limit=20"
```

Returns each RFP with `status` (`open` / `closed`), its round, and the submission deadline. The row with `status: "open"` is the current round — read the deadline off it rather than assuming a quarter boundary.

To narrow to what is open right now:

```bash
curl -s "https://stellarlight.xyz/api/rfps?status=open"
```

Use this before drafting an RFP-track submission, before naming a track category, and before telling anyone a deadline. If the open row disagrees with an example in `scf-round-reviewer` or `scf-submission-drafter`, **the API wins** — those examples are dated by design.

**Why you cannot eyeball whether an example is stale.** Checked 2026-07-23: the five RFP categories `scf-round-reviewer` lists as its "Q2 2026 / SCF #43" example — Trustline Onboarder, Passkey UI Kit, Account Demolisher, Contract Source Verification Service, OZ Accounts Policy Builder — are *still exactly the open set*. The categories carried forward. The **round did not** (now #45) and neither did the **deadline** (now 2026-08-16). An agent that trusted the example because the RFP names looked right would have quoted a round two behind and a dead deadline. Partial staleness is the normal case; that is what makes the query non-optional.

## Handbook rules (caps, tracks, tranches, eligibility)

```bash
curl -s "https://stellarlight.xyz/api/research?source=scf-handbook&q=build+award+budget+cap"
curl -s "https://stellarlight.xyz/api/research?source=scf-handbook&q=liquidity+award"
curl -s "https://stellarlight.xyz/api/research?source=scf-handbook&q=growth+program"
curl -s "https://stellarlight.xyz/api/research?source=scf-handbook&q=neural+quorum+governance"
```

The corpus is refreshed daily from the handbook and covers every track — Build, RFP, Integration, Liquidity, Growth, Grassroots — plus NQG voting and tranche rules. Each result carries its source URL, so cite the handbook page, not this skill.

**Verify, don't trust a number in prose.** If a figure matters to someone's application (a cap, a tranche split, an eligibility threshold), pull it from the corpus and cite the page. Award caps are stable but not immutable, and a wrong cap costs a builder a submission.

## Award figures that are currently stable

These are checked against the handbook and correct as of 2026-07-23. They are *not* a substitute for the query above — re-verify before quoting:

- Build Award hard cap: **$150,000** (all Build awards, confirmed in `scf-awards/build-award/README.md`)
- Award values are denominated in USD but paid in XLM — the handbook carries a valuation disclaimer that changed in July 2026. Pull `q=XLM+valuation+disclaimer` rather than paraphrasing.

## Cross-checking a real submission

Round membership, award history and per-round funding for existing projects:

```bash
curl -s "https://stellarlight.xyz/api/analyze?dimension=funding"          # byRound: counts + totals
curl -s "https://stellarlight.xyz/api/projects/search?q=<project>&limit=1" # scf.awarded, awardedRounds
```

Useful for `scf-competitor-analyst` (has this team been funded before, and in which rounds?) and for `scf-prescreen-checker` (resubmission rules depend on prior award history).

## Failure modes

- **The API is unreachable.** Say so and fall back to the handbook URL — never fill the gap with a remembered number.
- **A query returns nothing.** That means no matching handbook passage, not that the rule doesn't exist. Broaden the query before concluding anything, and never report absence as a negative finding.
- **An example in another skill contradicts the API.** The API is current; the example is dated. Follow the API and ignore the example.

## Provenance

Served by [StellarLight](https://stellarlight.xyz) — open, no key, CORS-enabled. Handbook corpus refreshed daily; RFP list tracks the live SCF round. Freshness per source is visible at `https://stellarlight.xyz/api/status`.
