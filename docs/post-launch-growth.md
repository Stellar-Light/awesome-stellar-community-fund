# Post-Launch and Growth Hack Preparation

> SCF 7.0 doesn't end at mainnet launch. Teams that ship and demonstrate traction can move into supporting programs — the Growth Hack competition, the Public Goods Award, and the Stellar Liquidity Award — which bridge toward SDF Marketing Grants and the Matching Fund. This guide covers how to qualify, how to prepare, and how to set yourself up for growth from day one.

## What's Available After Launch

SCF 7.0 offers several supporting programs for teams that are live on mainnet and demonstrating real usage. These are separate programs from the Build Award, each with its own application and eligibility rules:

| Program | What You Get |
|---------|-------------|
| **Growth Hack** | An 8-week, competition-style go-to-market cohort: $20K (in XLM) upfront to each of ~10–15 selected mainnet teams, with the top 5 sharing up to $200K in performance-based awards |
| **Public Goods Award** | Up to $50K (in XLM) per proposal per quarter for community-maintained public goods (SDKs, infra, governance/data tooling); governed by Neural Quorum Governance via Soroban Governor; invitation-only |
| **Stellar Liquidity Award** | Up to $100K total (in XLM) for audited financial protocols live on mainnet, to bootstrap initial liquidity ($50K Base + a $50K Supplemental) |
| **Bridge to further support** | The Growth Hack is designed as a bridge from Build-stage funding toward SDF Marketing Grants and the Matching Fund (Investment Readiness) |

### Who Qualifies

These are distinct programs, so eligibility differs by program (see each program's official rules in the SCF Handbook). What they share is that they target projects **live on Stellar mainnet with verifiable on-chain usage** — they are not gated on having completed all four Build tranches.

In general, expect to need:

- A product deployed on Stellar mainnet (not just testnet)
- Real, organic on-chain activity (not manufactured or bot-driven)
- Usage that is verifiable — your public metrics and dashboards should hold up to scrutiny
- For financial protocols: a completed security audit with vulnerabilities fixed (required for both Growth Hack and the Liquidity Award)

#### Growth Hack eligibility

To apply for the Growth Hack, a company must:

- Be a financial protocol or application **live on Stellar mainnet**
- Have completed **KYC and sanctions screening** with SDF within the past two years
- Have **no other active grants** from SDF
- If a financial protocol, have completed **at least one security audit** with any identified vulnerabilities fixed
- If using Soroban, use **SAC tokens**

There is no "completed all four tranches" requirement.

---

## Setting Up for Growth from Day One

The teams that unlock post-launch support are the ones that plan for growth during their Build Award, not after it. Here's how to build growth into your project from the start.

### 1. Instrument Metrics Early

Don't wait until mainnet to start tracking. Set up measurement infrastructure during T1 or T2.

**On-chain metrics to track:**
- Transaction count and volume (daily, weekly, monthly)
- Unique active wallets
- Contract invocations
- TVL (for DeFi projects)
- Asset holders and trustline count

**Off-chain metrics to track:**
- Monthly active users (MAU)
- Retention cohorts (day 1, day 7, day 30)
- Conversion funnel (visit -> signup -> first action)
- Session frequency and duration
- Error rates and user drop-off points

**Tools:**
- On-chain: Stellar block explorers, custom indexers, Mercury, Hubble
- Off-chain: PostHog, Mixpanel, Google Analytics, Amplitude
- Dashboards: Build a public dashboard early — it demonstrates transparency and makes your traction verifiable

### 2. Define Your Growth Model

Before you launch, answer: **How will users find your product, and why will they come back?**

Common growth models for Stellar projects:

| Model | How It Works | Example |
|-------|-------------|---------|
| **Viral / referral** | Existing users invite new users through product mechanics | Payments app with send-to-anyone links |
| **Content / SEO** | Users find you through search or educational content | DeFi protocol with tutorials ranking for Stellar DeFi queries |
| **Partnership / distribution** | Partners drive users to your product | Wallet integrated into existing fintech app's menu |
| **Community / ecosystem** | Stellar community adoption and word-of-mouth | Developer tool promoted through Discord and Stellar Dev Docs |
| **Direct sales / BD** | You sell to businesses or institutions directly | B2B anchor service with direct enterprise outreach |

Pick the model that fits your product. You don't need all of them — you need one that works and can be repeated.

### 3. Plan User Acquisition Experiments

The Growth Hack is a structured user-acquisition competition, not free-form experiment funding — but the discipline of running measurable acquisition experiments is exactly what the program rewards. Come prepared with concrete acquisition tactics you can execute and measure inside an 8-week window (a 4-week acquisition campaign followed by 4 weeks of retention).

**Example experiments:**
- "If we add referral rewards (0.5% of referred user's first transaction), we expect 20% of users to refer at least one person within 30 days."
- "If we create a Stellar-specific onboarding tutorial and promote it in the Stellar Discord, we expect 200 new users within 2 weeks."
- "If we integrate with [Wallet Partner]'s discovery page, we expect 500 new users per month from that channel."

Each experiment should have:
- A hypothesis
- A metric to measure
- A timeline
- A cost estimate
- A success threshold

### 4. Build Referral and Sharing Mechanics Into the Product

Don't bolt referrals on later. Design them into your core flows:

- Shareable transaction links or receipts
- Referral codes or invite flows
- Social sharing of achievements or milestones
- Public profiles or leaderboards (if appropriate)

### 5. Engage the Stellar Community

The Stellar community is your first distribution channel. Build relationships during your Build Award so you have an audience at launch:

- Share progress updates in the Stellar Developer Discord (#scf-general, #projects)
- Write devlog posts about what you're learning building on Soroban
- Contribute to ecosystem discussions — help other builders, answer questions
- Participate in community calls and AMAs

---

## How the Growth Hack Works

The Growth Hack runs as a quarterly cohort competition rather than open-ended funding. Understanding its shape helps you apply and plan:

- **Cohort selection** — Each cohort targets **10–15 companies** already live on Stellar mainnet.
- **Upfront award** — Every selected team receives **$20K (in XLM)** upfront to fund its user-acquisition campaign.
- **8-week campaign** — A **4-week acquisition campaign** followed by a **4-week retention campaign**, preceded by a preparation phase (workshops, strategy, on-chain + off-chain dashboards).
- **Performance pool** — After the acquisition campaign, the **top 5** teams share a performance-based pool of **up to $200K (in XLM)**. The pool size scales with the cohort's combined Weekly Active Accounts growth.
- **Two performance tranches with a retention gate** — A top-5 team's performance award is split **50/50 across tranches 2 and 3**. The second 50% (tranche 3) is paid only if average WAA and weekly transaction volume stay **within 30% of competition levels** (no more than a 70% decline) through the 4-week retention period; if metrics drop more than 70%, the third tranche is not paid.
- **Judging metrics** — Top-5 ranking is based on three measured increases over the campaign: **Weekly Active Accounts (WAA)**, **weekly transaction volume**, and **weekly TVL**.

### Preparing Your Growth Hack Application

When you apply, you'll need to demonstrate:

### 1. Traction Evidence

Show that your product is live and being used:

| Metric | What to Show |
|--------|-------------|
| On-chain activity | Transaction count, unique wallets, TVL — linked to a block explorer |
| User growth | MAU trend over at least 2-3 months |
| Retention | Are users coming back? Show cohort data. |
| Product usage | Core action completion rate, session frequency |

### 2. A Credible Acquisition Plan

Come prepared with a concrete plan for moving the three judged metrics (WAA, weekly transaction volume, weekly TVL) during the campaign window:

**Format:**
- **Target audience / channel:** [Who you'll reach and where]
- **Acquisition tactic:** [What you'll do — incentives, ads, partnerships, content, quests]
- **Metric moved:** [Which of WAA / weekly txn volume / weekly TVL it drives]
- **Timeline:** [How it fits the 4-week acquisition window]
- **Budget:** [How you'll spend the $20K upfront award]
- **Retention plan:** [How you'll keep metrics within 30% of campaign levels through the retention phase]

### 3. Unit Economics (If Applicable)

If your product generates revenue or has clear cost-per-user metrics:
- Cost to acquire a user (CAC)
- Revenue per user (or value per user to the ecosystem)
- Payback period
- Lifetime value estimate

### 4. Scaling Plan

If experiments succeed, how do you scale them?
- Can the growth channel handle 10x volume?
- What infrastructure changes are needed?
- What's the marginal cost of each additional user?

---

## Public Goods Award

If your project is community-maintained infrastructure rather than a commercial product — an SDK, an indexer or data dashboard, governance or security tooling — the **Public Goods Award** may fit better than the Growth Hack.

- **Amount:** Up to **$50K (in XLM) per proposal, per quarter**. You can reapply each quarter; continued funding depends on prior deliverables being met and demonstrated impact.
- **Governance:** Funding is decided by **Neural Quorum Governance (NQG)** via Soroban Governor — SCF verified members (Pilot role or higher) propose and vote on proposals.
- **How to apply:** It is **invitation-only**. There is no open application form. If you meet the eligibility requirements, watch the #scf-governance channel in the Stellar Developers Discord for the next review period and reach out to the SCF team.
- **Eligibility note:** The project must not have an existing/planned self-sustaining revenue model, and must have no active SDF grant or outstanding Build Award tranches.

---

## Stellar Liquidity Award

For **audited financial protocols live on Stellar mainnet**, the **Stellar Liquidity Award** helps bootstrap initial liquidity.

- **Amount:** Up to **$100K total (in XLM)** — a **$50K Base Liquidity Award** plus, if you qualify, an additional **$50K Supplemental Liquidity Award**.
- **Initial eligibility:** A fully functioning financial protocol/application deployed on mainnet, a completed valid security audit (from an SDF-recognized firm, vulnerabilities resolved), and passing SDF's KYC / risk assessment / due diligence.
- **Supplemental gate:** To unlock the additional $50K, you must have already received the initial award and show **7-day consecutive TVL of recognized assets greater than $250K**.
- **How to apply:** It is **invitation-based** — eligible projects are sent an application form by email. Post-award, you commit to monthly activity reports for 6 months.

---

## Bridge to SDF Marketing Grants and the Matching Fund

These programs are stepping stones, not endpoints. The Growth Hack in particular is designed as a **bridge from Build-stage development funding toward broader marketing and investment support** — namely **SDF Marketing Grants** and the **Matching Fund (Investment Readiness)**. Strong execution in a supporting program is what makes a team a candidate for that next layer of support.

---

## Additional Build Awards

Teams that complete their tranches and demonstrate significant traction can apply for subsequent Build Awards, up to a **$150K lifetime cap** across all awards. Going beyond $150K is an **exception, not a standard option**: only after a project has already received the full $150K may it be considered for additional funding **on a case-by-case basis**, subject to a lifetime accumulated cap of **$300K** (reach out to communityfund@stellar.org, and expect additional legal and business due diligence).

To strengthen a second application:
- Show clear on-chain growth metrics from your first award
- Explain what the additional funding enables that you couldn't do with the first award
- Present concrete growth data, not just promises
- Demonstrate that the first award was used efficiently and all deliverables were met

---

## Timeline: Growth Planning Across Tranches

| Phase | Growth Actions |
|-------|---------------|
| **Pre-build** | Define growth model, identify target metrics, research distribution channels |
| **MVP (T1)** | Set up analytics infrastructure, instrument core flows, build referral mechanics |
| **Testnet (T2)** | Launch testnet to community, collect feedback, start building audience, create public dashboard |
| **Mainnet (T3)** | Launch on mainnet with onboarding flow, begin user acquisition, track metrics, prepare Growth Hack application |
| **Post-launch** | Apply for the Growth Hack (or Public Goods / Liquidity Award, if a better fit), run your acquisition campaign, pursue an additional Build Award if needed |

---

## Checklist

- [ ] Analytics infrastructure set up (on-chain + off-chain) by T2
- [ ] Public metrics dashboard built and accessible
- [ ] Growth model defined (how users find you, how they come back)
- [ ] 2-3 growth experiment hypotheses written with success thresholds
- [ ] Referral or sharing mechanics built into product
- [ ] Community engagement ongoing (Discord, devlogs, ecosystem contributions)
- [ ] Launch materials prepared (blog post, demo video, docs)
- [ ] Post-launch metrics tracked for at least 2-3 months before applying for Growth Hack
