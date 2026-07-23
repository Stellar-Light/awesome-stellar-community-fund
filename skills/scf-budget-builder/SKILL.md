---
name: scf-budget-builder
description: "Validate and analyze budgets for SCF Build Award submissions. Use when reviewing whether a submission's budget is proportional, justified, and well-structured based on patterns from 215 funded Build Awards."
---

# SCF Budget Validator

## Overview

Validates submission budgets against funded project benchmarks. Used during the review process to assess whether a budget is proportional to scope, properly broken down, and realistic.

## Budget Benchmarks — compute these live, don't read them off a table

**Award medians move, and a stale benchmark costs a builder real money.** This skill used to carry a fixed table (Applications $85K, Developer Tooling $75K, Financial Protocols $109K, Infrastructure $116K) with no date and no way to check it. Sampling real awards on 2026-07-23 put every one of those figures materially off — in both directions, so the error wasn't a consistent drift you could mentally correct for. An applicant anchored to a wrong number either asks too high, which is a rejection risk, or too low, which leaves funding on the table.

So derive them from awards that actually landed:

```bash
curl -s "https://stellarlight.xyz/api/projects/search?q=infrastructure&limit=25"
```

Every row carries `scfAwarded`, `scfTotalAwardedUSD` and `category`. Pull two or three category-relevant queries, keep the rows where `scfAwarded` is true and `scfTotalAwardedUSD` is set, and take the **median** — not the mean. The spread is enormous (real awards run $2,500 to $490,160), so a mean is dragged upward by a handful of large grants and will tell a first-time applicant to ask for far too much.

**A warning about how you compute this.** `projects/search` returns a *relevance-ranked slice*, not a category census — so a median over "whatever came back for query X" is not a population median, and it moves depending on which queries you ran. Measured twice on 2026-07-23 from different query sets: Tooling came out $55,000 on one sample and $92,000 on another; User-Facing App $86,000 and $121,001. Same day, same data, different slice.

So do not quote a category median as a fact. Do one of these instead:

- **Widen and state the sample.** Run several distinct category-relevant queries, dedupe by slug, keep `scfAwarded` rows with a disclosed `scfTotalAwardedUSD`, and report as *"median $X across N awards I sampled"* — with N. A reviewer can then judge the weight of it.
- **Use the program-wide figures**, which are computed over the full awarded population rather than a slice:

```bash
curl -s "https://stellarlight.xyz/api/analyze?dimension=funding"
```

Either way the honest framing for an applicant is a **range with its basis**, not a single number presented as the going rate. Award sizes genuinely span $2,500 to $490,160; anyone told "the median is $X" will anchor on it, and a mis-anchored ask is the failure this section exists to prevent.

## Rate Benchmarks

*Derived from funded budget breakdowns, last reviewed 2026-06. Unlike the award medians above these are **not** computable from the API — no endpoint holds per-role rates — so they are a frozen reference. Treat them as a sanity band, not a current market rate, and say so if you quote them.*

| Role | Typical Range |
|---|---|
| Smart contract developer (Soroban/Rust) | $2,500–$5,000/week |
| Backend developer | $2,000–$4,000/week |
| Frontend developer | $1,500–$3,500/week |
| Full-stack developer | $2,000–$4,000/week |
| UI/UX designer | $1,500–$3,000/week |
| DevOps / infrastructure | $2,000–$4,000/week |
| Technical writer | $1,500–$2,500/week |
| Project management | $1,500–$2,500/week |

## Tranche Structure

SCF Build Awards use a 10% / 20% / 30% / 40% tranche structure:

| Tranche | % of Total | Milestone |
|---|---|---|
| T0 | 10% | Automatic on award approval |
| T1 | 20% | MVP — core Stellar/Soroban integration |
| T2 | 30% | Testnet — full functionality, audit readiness |
| T3 | 40% | Mainnet — production launch, UX, documentation |

## Red Flags

- Total exceeds $150K without strong justification
- Any line item over 40% of total budget without explanation
- Marketing line items (SCF funds building, not marketing)
- Audit costs as a line item (covered separately by Audit Bank for eligible projects)
- Legal fees or entity registration (ineligible)
- Contingency over 5%
- Rates significantly above benchmarks
- Top-down budget that doesn't trace to deliverables
- Budget significantly above category median without proportional scope

## Strengths

- Every line item traces to a specific deliverable
- Rates and effort are explicit
- Tranche allocation roughly follows 10/20/30/40
- Budget proportional to scope complexity
- Audit costs excluded from budget (covered separately by Audit Bank for eligible projects)
- No ineligible expenses

## Reference Links

- [SCF Handbook](https://communityfund.stellar.org/handbook)
- [Build Track](https://communityfund.stellar.org/build)
- [FAQ](https://communityfund.stellar.org/faq)
