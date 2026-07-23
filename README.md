# Stellar Community Fund Resources

A collection of tools, skills, and reference materials for participating in the [Stellar Community Fund](https://communityfund.stellar.org) (SCF).

> Created by [LumenLoop](https://lumenloop.com) and now maintained by [Stellar Light](https://stellarlight.xyz), which serves the SCF handbook and the live RFP list as an open API — so the round-specific facts these skills depend on can be resolved rather than remembered.

## Install as a Claude Code plugin

The skills in this repo are packaged as a [Claude Code](https://docs.claude.com/en/docs/claude-code) plugin:

```
/plugin marketplace add Stellar-Light/awesome-stellar-community-fund
/plugin install awesome-stellar-community-fund@awesome-scf
```

This makes all twelve SCF skills available in your session. You can also point any AI tool directly at an individual `skills/<name>/SKILL.md`, or read the [`docs/`](docs/) guides on their own.

## What's Inside

### [skills/](skills/)

Reusable AI skills for SCF applications — reviewing, drafting, budgeting, prescreening, and more:

**For reviewers (Pilots, Navigators, anyone scoring a round):**

- **[scf-claim-verifier](skills/scf-claim-verifier/SKILL.md)** — Check the factual claims in a submission against live ecosystem data: prior art and duplication, the applicant's own funding history, whether a linked repo is real and recent Soroban code, whether a project is still alive, and whether a mainnet claim shows on-chain activity. Works standalone or [inside Raven](https://agents.stellar.buzz), which calls the same data layer. Ships with honesty rules — absence of a record is never evidence of absence.
- **[scf-live-context](skills/scf-live-context/SKILL.md)** — **Use this first.** Resolve the current round, submission deadline, open RFP categories, and handbook rules from a live open API, so a dated example in another skill can never become the answer.

**For applicants and reviewers both:**

- **[scf-round-reviewer](skills/scf-round-reviewer/SKILL.md)** — Review and rank an entire SCF round end-to-end from a CSV export. Supports Open Track, Integration Track, and RFP Track with track-specific scoring. Orchestrates parallel batch reviews, calibration, and final ranking.
- **[scf-reviewer](skills/scf-reviewer/SKILL.md)** — Review Build Award applications with structured evaluation across integration fit, architecture, team, traction, budget, and ecosystem commitment.
- **[fetch-external-doc](skills/fetch-external-doc/SKILL.md)** — Fetch external documents linked in submissions — Google Docs, Google Drive PDFs, GitHub, Notion, IPFS. Uses `curl` for reliable Google Docs/Drive fetching.
- **[scf-prescreen-checker](skills/scf-prescreen-checker/SKILL.md)** — Simulate the SCF team's manual prescreen (completeness + eligibility) before you submit.
- **[scf-budget-builder](skills/scf-budget-builder/SKILL.md)** — Build bottom-up budgets with rates, per-deliverable breakdowns, and tranche mapping.
- **[scf-competitor-analyst](skills/scf-competitor-analyst/SKILL.md)** — Research the competitive landscape and articulate differentiation.
- **[scf-submission-drafter](skills/scf-submission-drafter/SKILL.md)** — Draft a complete Build Award application interactively, section by section.
- **[scf-interest-form-drafter](skills/scf-interest-form-drafter/SKILL.md)** — Draft a strong Interest Form to get invited to apply.
- **[scf-tranche-reporter](skills/scf-tranche-reporter/SKILL.md)** — Write tranche submission reports with deliverable evidence and completion documentation.
- **[scf-referral-preparer](skills/scf-referral-preparer/SKILL.md)** — Prepare materials for an SCF referral from an approved Referrer (Ambassador, Navigator, Pilot, partner, or SDF personnel).

> **For a turnkey review setup**, see [scf-review-boilerplate](https://github.com/lumenloop/scf-review-boilerplate) — drop a CSV and run.

### [docs/](docs/)

Guides and reference documentation for SCF applicants and reviewers:

See [docs/README.md](docs/README.md) for a suggested reading order.

- **[SCF History](docs/scf-history.md)** — Deep dive into every SCF version (1.0–7.0), all award types, special programs, and cumulative funding statistics from 3,301 submissions and $49.3M in payouts.
- **[SCF 7.0 Guide](docs/scf-7-guide.md)** — Program overview, all three Build Award tracks, Instawards, evaluation criteria, and best practices.
- **[Tips for Applying](docs/tips-for-applying.md)** — Data-driven advice on what gets funded and what gets rejected, with stats from 1,048 Build Award submissions.
- **[Getting a Referral](docs/getting-a-referral.md)** — How the SCF Referral Program works, what referrers evaluate, and how to earn a referral without burning relationships.
- **[Interest Form Tips](docs/interest-form-tips.md)** — How to write a strong Interest Form and get invited to apply.
- **[Submission Template](docs/submission-template.md)** — Fill-in-the-blank Build Award application template connecting all guides.
- **[Technical Architecture](docs/technical-architecture.md)** — Best practices for the architecture section: diagrams, Soroban details, data flow, security.
- **[Writing Deliverables](docs/writing-deliverables.md)** — How to structure deliverables across the milestone system (three milestones — MVP, Testnet, Mainnet — mapped to four tranches T0–T3), with category-specific examples from funded projects.
- **[Writing Budgets](docs/writing-budgets.md)** — Bottom-up budget construction, rate benchmarks, tranche mapping, and budget statistics from 215 funded Build Awards.
- **[Proving Traction](docs/proving-traction.md)** — On-chain metrics, usage data, demand signals, and adoption targets.
- **[UX Readiness](docs/ux-readiness.md)** — UX expectations for funded builds and the optional UX support available — not a hard payout gate.
- **[Submitting Tranches](docs/submitting-tranches.md)** — How to submit tranche deliverables for review: what to include, format, and common delays.
- **[Post-Launch and Growth](docs/post-launch-growth.md)** — Growth Hack, Public Goods Award, Stellar Liquidity Award, BD support, and additional Build Awards.
- **[RFP Response Guide](docs/rfp-response-guide.md)** — RFP-specific guidance: spec compliance, DX, maintenance, and domain expertise.

## SCF Official Resources

| Resource | Link |
|---|---|
| SCF Homepage | [communityfund.stellar.org](https://communityfund.stellar.org) |
| SCF Handbook | [stellar.gitbook.io/scf-handbook](https://stellar.gitbook.io/scf-handbook) |
| Build Award (Handbook) | [stellar.gitbook.io/scf-handbook/scf-awards/build-award](https://stellar.gitbook.io/scf-handbook/scf-awards/build-award) |
| Awards & Funded Projects | [communityfund.stellar.org/awards](https://communityfund.stellar.org/awards) |
| Community Voting (Neural Quorum Governance) | [stellar.gitbook.io/scf-handbook/governance/neural-quorum-governance](https://stellar.gitbook.io/scf-handbook/governance/neural-quorum-governance) |
| FAQ | [stellar.gitbook.io/scf-handbook/additional-support/faq](https://stellar.gitbook.io/scf-handbook/additional-support/faq) |
| Grants & Funding (SDF) | [stellar.org/grants-and-funding](https://stellar.org/grants-and-funding) |

## Stellar Developer Resources

### Documentation & SDKs

| Resource | Link |
|---|---|
| Stellar Developer Docs | [developers.stellar.org](https://developers.stellar.org) |
| Soroban Smart Contracts | [developers.stellar.org/docs/build/smart-contracts](https://developers.stellar.org/docs/build/smart-contracts/overview) |
| SDKs (JS, Python, Rust, Go, Java, PHP, Swift, Dart) | [developers.stellar.org/docs/tools/sdks](https://developers.stellar.org/docs/tools/sdks) |
| Stellar RPC API | [developers.stellar.org/docs/data/apis/rpc](https://developers.stellar.org/docs/data/apis/rpc) |
| Networks (Mainnet, Testnet, Futurenet) | [developers.stellar.org/docs/networks](https://developers.stellar.org/docs/networks) |
| Stellar Dev Skill (AI reference for Stellar development) | [github.com/stellar/stellar-dev-skill](https://github.com/stellar/stellar-dev-skill) |
| OpenZeppelin Skills (AI smart contract skills) | [github.com/OpenZeppelin/openzeppelin-skills](https://github.com/OpenZeppelin/openzeppelin-skills) |

### Developer Tools

| Tool | Link | Description |
|---|---|---|
| Stellar Laboratory | [lab.stellar.org](https://lab.stellar.org) | Build/sign/submit transactions, interact with RPC and Horizon, test contracts |
| Friendbot (Testnet Faucet) | [friendbot.stellar.org](https://friendbot.stellar.org) | Fund test accounts with 10,000 XLM on Testnet |
| Scaffold Stellar | [scaffoldstellar.org](https://scaffoldstellar.org) | CLI tools, Rust contract templates, React frontend for full-stack dApps |
| Freighter Wallet | [freighter.app](https://www.freighter.app) | Official SDF browser extension wallet for development and testing |

### Block Explorers

| Explorer | Link |
|---|---|
| StellarExpert | [stellar.expert](https://stellar.expert) |
| StellarChain | [stellarchain.io](https://stellarchain.io) |
| Lumenscan | [lumenscan.io](https://lumenscan.io) |
| Steexp | [steexp.com](https://steexp.com) |

### Learning

| Resource | Link | Description |
|---|---|---|
| Getting Started Guide | [developers.stellar.org/docs/build/smart-contracts/getting-started](https://developers.stellar.org/docs/build/smart-contracts/getting-started) | Step-by-step smart contract development |
| Stellar Quest | [quest.stellar.org](https://quest.stellar.org/soroban) | Gamified challenges — compete, learn, earn rewards |
| dApp Development Guide | [developers.stellar.org/docs/build/guides/dapps](https://developers.stellar.org/docs/build/guides/dapps) | Build full applications on Stellar |
| EVM Migration Guide | [developers.stellar.org/docs/learn/migrate/evm](https://developers.stellar.org/docs/learn/migrate/evm/smart-contract-deployment) | For developers coming from Ethereum/Solidity |
| Soroban Example dApp | [github.com/stellar/soroban-example-dapp](https://github.com/stellar/soroban-example-dapp) | Full end-to-end example application |
| Awesome Stellar | [github.com/stellar/awesome-stellar](https://github.com/stellar/awesome-stellar) | Curated master list of Stellar apps, tools, and resources |

### GitHub

| Organization | Link | Description |
|---|---|---|
| stellar | [github.com/stellar](https://github.com/stellar) | Core protocol, SDKs, Freighter, Laboratory, docs |
| stellar-expert | [github.com/stellar-expert](https://github.com/stellar-expert) | StellarExpert explorer |
| OpenZeppelin/stellar-contracts | [github.com/OpenZeppelin/stellar-contracts](https://github.com/OpenZeppelin/stellar-contracts) | OpenZeppelin contract library for Soroban |

## Ecosystem & Community

### Community Data

| Resource | Link | Description |
|---|---|---|
| Stellar Ecosystem DB | [github.com/lumenloop/stellar-ecosystem-db](https://github.com/lumenloop/stellar-ecosystem-db) | Structured data on 646+ Stellar projects — categories, SCF awards, contracts, links |
| Stellar Events Calendar | [luma.com/lumenloop](https://luma.com/lumenloop) | Upcoming Stellar ecosystem events |

### Discord Servers

| Server | Invite | Description |
|---|---|---|
| Stellar Developers | [discord.gg/stellardev](https://discord.gg/stellardev) | Primary dev hub (~28K members) — SCF discussions, feedback, mentoring, expert guidance |
| Stellar Global | [discord.com/invite/stellar-global](https://discord.com/invite/stellar-global-761985725453303838) | Community-driven education, AMAs, and ecosystem conversations |
| Stellar Community | [discord.com/invite/stellar-community](https://discord.com/invite/stellar-community-discord-650133450552115222) | General Stellar community server |

### Community Platforms

| Platform | Link | Description |
|---|---|---|
| GalacticTalk | [galactictalk.org](https://galactictalk.org) | Stellar community forum — development, announcements, discussions |
| Reddit r/Stellar | [reddit.com/r/Stellar](https://www.reddit.com/r/Stellar/) | Stellar subreddit — news, questions, ecosystem updates |
| Stellar Global | [stellar.global](https://stellar.global) | Community org focused on education and advocacy worldwide |

### Social Media

| Account | Platform | Description |
|---|---|---|
| [@StellarOrg](https://x.com/StellarOrg) | X | Official Stellar Development Foundation account |
| [@BuildOnStellar](https://x.com/BuildOnStellar) | X | Official Stellar developer and builder community |
| [@lumenloop](https://x.com/lumenloop) | X | Stellar ecosystem coverage, SCF highlights, events |
| [Stellar Development Foundation](https://www.linkedin.com/company/stellar-development-foundation) | LinkedIn | Official SDF company page |
| [stellar.org/blog](https://stellar.org/blog) | Blog | Official SDF blog — announcements, technical posts |

## About the SCF

The Stellar Community Fund awards grants to projects that grow the Stellar ecosystem. Reviewers evaluate applications across dimensions like integration fit, technical architecture, team readiness, traction, and budget proportionality. The resources in this repo help standardize and streamline that review process.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for the full guide. In short:

1. Fork the repo and create a feature branch.
2. Add your resource — skills go in `skills/<name>/SKILL.md`, guides in `docs/`. Keep factual claims aligned with the [SCF Handbook](https://stellar.gitbook.io/scf-handbook).
3. Update the relevant README, then run `node scripts/validate_skills.mjs`.
4. Open a pull request.

This project follows a [Code of Conduct](CODE_OF_CONDUCT.md) and is released under the [MIT License](LICENSE).
