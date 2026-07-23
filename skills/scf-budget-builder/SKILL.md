---
name: scf-budget-builder
description: "Validate and analyze budgets for SCF Build Award submissions. Use when reviewing whether a submission's budget is proportional, justified, and well-structured based on patterns from 215 funded Build Awards."
---

# SCF Budget Validator

## Overview

Validates submission budgets against funded project benchmarks. Used during the review process to assess whether a budget is proportional to scope, properly broken down, and realistic.

## Budget Benchmarks — compute these live, don't read them off a table

**Award medians move every round, and a stale benchmark costs a builder real money.** Checked 2026-07-23: the frozen table this skill used to carry was off by 27% on Tooling, 32% on Infrastructure, and 20% *low* on financial protocols. Someone sizing an infrastructure ask at the old $116K figure would have been $28K above the actual median — a rejection risk created by the skill itself.

So derive them from awards that actually landed:

```bash
curl -s "https://stellarlight.xyz/api/projects/search?q=infrastructure&limit=25"
```

Every row carries `scfAwarded`, `scfTotalAwardedUSD` and `category`. Pull two or three category-relevant queries, keep the rows where `scfAwarded` is true and `scfTotalAwardedUSD` is set, and take the **median** — not the mean. The spread is enormous (real awards run $2,500 to $490,160), so a mean is dragged upward by a handful of large grants and will tell a first-time applicant to ask for far too much.

Program-wide totals for context:

```bash
curl -s "https://stellarlight.xyz/api/analyze?dimension=funding"
```

**Indicative medians as of 2026-07-23** (n=99 awarded projects with disclosed amounts) — a sanity check on your own computation, not a substitute for it:

| Category | Median | Observed range |
|---|---|---|
| User-Facing App | $86,000 | $5,000–$490,160 |
| Protocol/Contract | $136,000 | $2,500–$394,500 |
| Infrastructure | $88,000 | $10,000–$444,840 |
| Tooling | $55,000 | $14,000–$225,000 |

Two honest caveats. These categories are **our** directory taxonomy, which does not map 1:1 onto SCF's own track names — "Financial Protocols" in SCF's language sits closest to Protocol/Contract here. And amounts are only counted where disclosed; XLM-denominated and undisclosed awards are excluded, so treat these as the shape of the distribution rather than a precise figure.

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
