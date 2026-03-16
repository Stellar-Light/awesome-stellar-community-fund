# Skills

This folder contains reusable skills for the Stellar Community Fund (SCF) — covering application review, drafting, budgeting, prescreening, and more.

## Available Skills

| Skill | Description |
|-------|-------------|
| [scf-round-reviewer](scf-round-reviewer.md) | Review and rank an entire SCF round end-to-end from a CSV export. Supports Open Track, Integration Track, and RFP Track with track-specific scoring dimensions. Orchestrates parallel batch reviews, calibration, and final ranking. |
| [scf-reviewer](scf-reviewer.md) | Review SCF Build Award applications across Integration, Open, and RFP tracks. Covers project fit, technical architecture, team readiness, traction, budget analysis, and funding recommendations. |
| [fetch-external-doc](fetch-external-doc.md) | Fetch external documents linked in SCF submissions — Google Docs, Google Drive PDFs, GitHub, Notion, IPFS. Handles URL transformation and uses `curl` for reliable Google Docs/Drive fetching. |
| [scf-prescreen-checker](scf-prescreen-checker.md) | Simulate the SCF prescreen filter before submission. Catches the issues that eliminate 18.7% of Build Award applications before human review. |
| [scf-budget-builder](scf-budget-builder.md) | Build bottom-up budgets with role-based rates, per-deliverable cost breakdowns, and tranche mapping. Validates against benchmarks from 215 funded Build Awards. |
| [scf-competitor-analyst](scf-competitor-analyst.md) | Analyze the competitive landscape — similar projects on Stellar and other chains — and articulate differentiation for the application. |
| [scf-submission-drafter](scf-submission-drafter.md) | Draft Build Award applications interactively. Walks through project description, Stellar integration, architecture, team, deliverables, budget, and traction. |
| [scf-interest-form-drafter](scf-interest-form-drafter.md) | Draft a strong Interest Form — the first filter that determines whether a team gets invited to submit a full application. |
| [scf-tranche-reporter](scf-tranche-reporter.md) | Help funded teams write tranche submission reports with deliverable documentation, completion evidence, and the format reviewers expect. |
| [scf-referral-preparer](scf-referral-preparer.md) | Prepare materials for an SCF referral. Covers what referrers evaluate and assembles a package that makes it easy for a Pilot or SDF staff member to endorse the team. |

## Required External Skills (for reviewing)

When using the review skills (`scf-round-reviewer`, `scf-reviewer`), you should also install these external skills for Stellar domain knowledge:

- **[stellar/stellar-dev-skill](https://github.com/stellar/stellar-dev-skill)** — Soroban, RPC, Horizon, SEPs, Smart Accounts, ecosystem context
- **[OpenZeppelin/openzeppelin-skills](https://github.com/OpenZeppelin/openzeppelin-skills)** — Smart contract security patterns, Stellar contract setup/upgrades

These significantly improve scoring accuracy for Technical Depth, Stellar Integration, and smart contract architecture evaluation. In SCF #42 testing, adding these skills changed 40% of recommendation outcomes.

## Usage

Each skill is defined as a Markdown file with YAML frontmatter (`name` and `description`) followed by the full instruction set. Point your AI tool or workflow at a skill file to load its review framework.

For a turnkey review setup with CSV input and all skills pre-configured, see [scf-review-boilerplate](https://github.com/lumenloop/scf-review-boilerplate).

## Adding a New Skill

1. Create a new `.md` file in this folder.
2. Include YAML frontmatter with `name` and `description`.
3. Write the skill body using the same structure: overview, process, evaluation criteria, output formats, red flags/strengths, and references.
4. Update the table above.
