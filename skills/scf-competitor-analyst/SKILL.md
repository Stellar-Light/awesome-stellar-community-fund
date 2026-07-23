---
name: scf-competitor-analyst
description: "Analyze the competitive landscape for an SCF submission. Identifies similar projects on Stellar and other chains, assesses overlap and differentiation. Use when reviewing or drafting an SCF submission and you need to map similar projects on Stellar and other chains and articulate the differentiation."
---

# SCF Competitor Analyst

## Overview

Researches the competitive landscape for SCF submissions during the review process. Identifies similar projects on Stellar and other chains, assesses overlap, and evaluates whether the submission fills a genuine ecosystem gap.

## Process

### Step 1: Define the Category
From the submission data, identify:
- **Category** — DeFi, payments, wallet, identity, data/oracle, infrastructure, developer tooling, etc.
- **Core function** — What specific thing does it do?
- **Target user** — Who uses it?
- **Stellar integration** — What part of the Stellar stack does it use?

### Step 2: Search Stellar Ecosystem

One call answers most of this. The directory holds ~970 curated projects with their SCF award history, lifecycle status, indexed repos and on-chain activity — so "who else is doing this, did they get funded, are they still alive" is a query, not an afternoon of browsing:

```bash
curl -s "https://stellarlight.xyz/api/projects/search?q=<core-function>&limit=20"
```

Search the **capability**, not the applicant's brand name — their name won't match incumbents. Run two or three phrasings (`lending`, `borrow collateral`, `money market`) before concluding anything is novel.

Each row gives you, directly:

| Question from the review | Field |
|---|---|
| Was it SCF-funded, and how much? | `scfAwarded`, `scfTotalAwardedUSD`, `scfAwardedRounds` |
| Is it still alive? | `status` (`Live` / `Development` / `Inactive`) |
| Are they still building? | `lastActivityAt` — newest commit across **all** their repos |
| What did they actually build? | `repos[]` (`fullName`, `url`) |
| Is it real on mainnet? | `onchain` — per-contract events, asset holders, with an `asOf` date |
| Did it launch without SCF? | `scfAwarded: false` on a `Live` project |

**Use `lastActivityAt`, never `repos[0].lastCommitAt`** — `repos[]` is sorted by score, so `[0]` is the flagship and often the least recently touched. Blend's `repos[0]` last moved 2024-05-01 while the project shipped 35 days ago and carries 1.17M on-chain events.

For the code question — is a competitor's implementation real, or a scaffold:

```bash
curl -s "https://stellarlight.xyz/api/repos/explain?q=what+does+this+do&repo=<owner>/<name>"
```

Returns `codeVerified`: genuine `soroban-sdk` imports, whether it's a deployable contract, which SDK version and whether that version is still supported.

For whether the category is genuinely underserved rather than merely unfamiliar to you:

```bash
curl -s "https://stellarlight.xyz/api/analyze?dimension=gaps"
```

**Two honesty rules.** A project missing from the directory means *not indexed*, not *does not exist* — roughly one funded project in four has no repo linked, so a blank is far more likely our coverage gap than a team with no code. And finding five incumbents does not make a sixth worthless; it makes the differentiation section the thing to scrutinise, not a reason to close the question.

Cross-chain competitors are still manual — the directory is Stellar-scoped. Use the web for those and say which half came from where.

#### Key Questions
For each competitor:
- Is it still active? Last commit, update, or transaction?
- What did it build? How mature is it?
- Was it SCF-funded? Did it deliver all tranches?
- What's the overlap with the submission?
- What's the gap — what does the submission do that this one doesn't?

### Step 3: Search Broader Ecosystem
- Ethereum/EVM equivalents, Solana, Cosmos, etc.
- Are any expanding to Stellar?
- Has the team built the same thing on another chain?
- What are the non-crypto alternatives?

### Step 4: Build Competitive Analysis

```
### Competitive Landscape

| Project | Chain | Status | Overlap | Key Difference |
|---|---|---|---|---|
| [Competitor 1] | Stellar | Active | [What overlaps] | [What's different] |
| [Competitor 2] | Stellar (SCF) | Delivered | [What overlaps] | [What's different] |
| [Competitor 3] | Ethereum | Active | [What overlaps] | [What's different] |
```

### Step 5: Assess Risk
- **Duplicate funding risk** — Would the SCF be funding the same thing twice?
- **Abandoned predecessor** — If a similar SCF-funded project failed, why will this one succeed?
- **Chain-hopping risk** — Is the team genuinely committed to Stellar or chasing grants?
- **Market saturation** — Are there already enough projects in this category?

### Integration Track Effort & Scope Check

When the submission is an **Integration Track** project, calibrate your competitive read against the handbook's Integration List guidance:

- **A qualifying integration must use at least one [Integration Partner building block](https://stellar.gitbook.io/scf-handbook/scf-awards/build-award/integration-track).** If the project doesn't meaningfully integrate one of these building blocks, it likely isn't an eligible Integration Track submission at all.
- **Most integrations are small — under roughly 40 hours of work.** They wire an existing building block (wallet, anchor, passkey, etc.) into a product; they don't build new infrastructure. Treat a competitive landscape that implies a multi-month build as a signal the scope (and budget) may be inflated.
- **Over-scoped budgets get pushed back.** Projects with bloated or over-scoped budgets relative to the integration effort are commonly asked to decrease their budget or resubmit. If comparable integrations exist (on Stellar or elsewhere) that were far cheaper or faster, flag the gap.

## Reference Links

- [SCF Awards Page](https://communityfund.stellar.org/awards)
- [SCF Handbook](https://stellar.gitbook.io/scf-handbook)
- [Stellar Expert](https://stellar.expert)
- [Build Award](https://stellar.gitbook.io/scf-handbook/scf-awards/build-award)
- [FAQ](https://stellar.gitbook.io/scf-handbook/additional-support/faq)
