// ============================================================
// Mock SFDC Outcome Data (simulates polling Salesforce for deal closure)
// ============================================================
const MOCK_OUTCOMES = {
  "DoorDash": {
    closed: true,
    outcome: "expanded",
    closedArr: 720000,
    closeDate: "2026-04-12"
  },
  "Spotify": {
    closed: true,
    outcome: "won",
    closedArr: 825000,
    closeDate: "2026-09-20"
  },
  "Instacart": {
    closed: true,
    outcome: "renewed",
    closedArr: 580000,
    closeDate: "2026-06-28"
  },
  "Bank of America": {
    closed: true,
    outcome: "won",
    closedArr: 650000,
    closeDate: "2026-11-15"
  },
  "Figma": {
    closed: true,
    outcome: "won",
    closedArr: 425000,
    closeDate: "2026-10-01"
  },
  "Stripe": {
    closed: true,
    outcome: "won",
    closedArr: 475000,
    closeDate: "2026-10-15"
  },
  "Rivian": {
    closed: true,
    outcome: "lost",
    closedArr: 0,
    closeDate: "2026-12-01"
  }
};

// ============================================================
// Mock Salesforce Account Data
// ============================================================
const MOCK_ACCOUNTS = [
  {
    name: "Bank of America",
    ae: "Cameron Curran",
    se: "Adam Yapkowitz",
    region: "NAMER",
    industry: "Financial Services",
    dealType: "land",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000bmcyZYAQ",
    oppName: "Bank of America | Land | Analytics for AI COE",
    arr: "500000",
    dealStage: "2 – Qualification",
    expectedClose: "2026-11-20",
    healthScore: 12,
    customerSince: null,
    renewalDate: null,
    renewalArr: null,
    champion: "Anthony",
    championRole: "AI COE Lead (title unverified)",
    contacts: ["Will Kawalek", "Marc Berardi", "David Russell", "Josh Lee", "Mary Ellen Davenport"]
  },
  {
    name: "Spotify",
    ae: "Jessica Martinez",
    se: "Ryan Chen",
    region: "NAMER",
    industry: "Media & Entertainment",
    dealType: "expansion",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000abc123",
    oppName: "Spotify | Expansion | Podcast Analytics",
    arr: "750000",
    dealStage: "3 – Discovery",
    expectedClose: "2026-09-15",
    healthScore: 72,
    customerSince: "2022-03-01",
    renewalDate: "2026-12-01",
    renewalArr: "420000",
    champion: "Elena Vasquez",
    championRole: "VP Product Analytics",
    contacts: ["Elena Vasquez", "Marcus Johnson", "Priya Patel"]
  },
  {
    name: "Peloton",
    ae: "David Kim",
    se: "Sarah Thompson",
    region: "NAMER",
    industry: "Consumer / Fitness",
    dealType: "renewal",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000def456",
    oppName: "Peloton | Renewal | Connected Fitness Platform",
    arr: "320000",
    dealStage: "4 – Proposal",
    expectedClose: "2026-08-30",
    healthScore: 55,
    customerSince: "2023-06-15",
    renewalDate: "2026-09-15",
    renewalArr: "320000",
    champion: "Mike Torres",
    championRole: "Director of Product",
    contacts: ["Mike Torres", "Amanda Lee", "Chris Wallace"]
  },
  {
    name: "Stripe",
    ae: "Lauren Park",
    se: "James O'Brien",
    region: "NAMER",
    industry: "Financial Services / Fintech",
    dealType: "land",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000ghi789",
    oppName: "Stripe | Land | Developer Platform Analytics",
    arr: "400000",
    dealStage: "2 – Qualification",
    expectedClose: "2026-10-01",
    healthScore: 45,
    customerSince: null,
    renewalDate: null,
    renewalArr: null,
    champion: "Rachel Ng",
    championRole: "Head of Developer Experience",
    contacts: ["Rachel Ng", "Tom Harrington", "Sanjay Gupta"]
  },
  {
    name: "DoorDash",
    ae: "Michael Santos",
    se: "Aisha Patel",
    region: "NAMER",
    industry: "Marketplace / Logistics",
    dealType: "expansion",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000jkl012",
    oppName: "DoorDash | Expansion | Merchant Analytics Suite",
    arr: "600000",
    dealStage: "3 – Discovery",
    expectedClose: "2026-07-15",
    healthScore: 68,
    customerSince: "2021-11-01",
    renewalDate: "2027-01-15",
    renewalArr: "350000",
    champion: "Lisa Chang",
    championRole: "VP Merchant Experience",
    contacts: ["Lisa Chang", "Derek Williams", "Nadia Kowalski"]
  },
  {
    name: "Rivian",
    ae: "Alex Hernandez",
    se: "Natalie Wu",
    region: "NAMER",
    industry: "Automotive / EV",
    dealType: "land",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000mno345",
    oppName: "Rivian | Land | Connected Vehicle Analytics",
    arr: "280000",
    dealStage: "1 – Prospecting",
    expectedClose: "2026-12-15",
    healthScore: 30,
    customerSince: null,
    renewalDate: null,
    renewalArr: null,
    champion: "Jordan Blake",
    championRole: "Director of Digital Products",
    contacts: ["Jordan Blake", "Samantha Reed"]
  },
  {
    name: "Instacart",
    ae: "Rachel Foster",
    se: "Brian Choi",
    region: "NAMER",
    industry: "Marketplace / Grocery",
    dealType: "renewal",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000pqr678",
    oppName: "Instacart | Renewal | Shopper & Consumer Analytics",
    arr: "520000",
    dealStage: "5 – Negotiation",
    expectedClose: "2026-06-30",
    healthScore: 82,
    customerSince: "2022-07-01",
    renewalDate: "2026-07-01",
    renewalArr: "520000",
    champion: "Kevin Liu",
    championRole: "Sr. Director of Analytics",
    contacts: ["Kevin Liu", "Maria Gonzalez", "Patrick O'Malley", "Diana Chen"]
  },
  {
    name: "Figma",
    ae: "Tyler Brooks",
    se: "Emily Sato",
    region: "NAMER",
    industry: "Design / SaaS",
    dealType: "land",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000stu901",
    oppName: "Figma | Land | Product-Led Growth Analytics",
    arr: "350000",
    dealStage: "3 – Discovery",
    expectedClose: "2026-09-30",
    healthScore: 58,
    customerSince: null,
    renewalDate: null,
    renewalArr: null,
    champion: "Olivia Park",
    championRole: "Head of Growth",
    contacts: ["Olivia Park", "Daniel Kim", "Sophie Martin"]
  }
];

// ============================================================
// Mock Kaia / Outreach Data
// ============================================================
const MOCK_KAIA = {
  "Bank of America": {
    callCount: 3,
    dateRange: "Mar 2026 – Apr 2026",
    summary: "Three discovery calls with AI COE team. Champion (Anthony) described need to measure AI feature adoption and outcomes.",
    signals: [
      {
        theme: "AI Product Performance & Feature Measurement",
        type: "pain",
        text: "No way to measure which AI features drive engagement vs. which are ignored. Team is flying blind on AI investments.",
        stakeholder: "Anthony (AI COE Lead)",
        date: "2026-04-02",
        url: "https://app.outreach.io/meetings/rec_bofa_001",
        verbatim: true,
        businessImpact: "AI initiative is a $50M+ investment with no ROI measurement framework",
        userImpact: "Product managers can't iterate on AI features without adoption data",
        internalImpact: "Board is asking for AI ROI metrics; leadership has no answers",
        proposedSolution: "Behavioral analytics to instrument AI feature usage, adoption funnels, and outcome tracking",
        valueHyp: "Reducing AI feature iteration cycles by 40% through data-driven prioritization could save $5-10M annually in misallocated dev spend"
      },
      {
        theme: "Digital Banking Customer Journey Optimization",
        type: "priority",
        text: "Customer journey visibility is a top priority for 2026. Currently stitching together 4 different tools with no unified view.",
        stakeholder: "Mary Ellen Davenport",
        date: "2026-03-18",
        url: "https://app.outreach.io/meetings/rec_bofa_002",
        verbatim: true,
        businessImpact: "Digital banking conversion rates are 15% below industry benchmark",
        userImpact: "Customers experience friction in mobile-to-web handoffs",
        internalImpact: "Analytics team spends 60% of time on data wrangling instead of insights"
      }
    ]
  },
  "Spotify": {
    callCount: 4,
    dateRange: "Feb 2026 – Apr 2026",
    summary: "Four calls covering podcast analytics expansion. Elena pushing for unified listener analytics across music and podcasts.",
    signals: [
      {
        theme: "Podcast Engagement & Monetization Analytics",
        type: "pain",
        text: "Podcast team can't connect listener behavior to subscription conversions. We're essentially guessing which content drives paid upgrades.",
        stakeholder: "Elena Vasquez (VP Product Analytics)",
        date: "2026-03-25",
        url: "https://app.outreach.io/meetings/rec_spotify_001",
        verbatim: true,
        businessImpact: "Podcast division needs to prove $200M+ content investment ROI to leadership",
        userImpact: "Content creators lack data on what resonates with audiences",
        internalImpact: "Podcast and music analytics are siloed, creating duplicate work",
        proposedSolution: "Unified behavioral analytics across podcast and music experiences",
        valueHyp: "Improving podcast-to-premium conversion by 2 percentage points could drive $30M+ in incremental ARR"
      },
      {
        theme: "Cross-Platform Listening Experience",
        type: "initiative",
        text: "We're redesigning the listening experience to blend music and podcasts. Need to understand cross-format behavior at scale.",
        stakeholder: "Marcus Johnson",
        date: "2026-04-05",
        url: "https://app.outreach.io/meetings/rec_spotify_002",
        businessImpact: "Cross-platform engagement is a key metric for investor story",
        userImpact: "Listeners who engage with both formats have 3x higher retention"
      }
    ]
  },
  "DoorDash": {
    callCount: 5,
    dateRange: "Jan 2026 – Apr 2026",
    summary: "Five calls with merchant experience team. Strong interest in merchant onboarding analytics and Dasher matching optimization.",
    signals: [
      {
        theme: "Merchant Onboarding Conversion",
        type: "pain",
        text: "Our merchant sign-up funnel has a 40% drop-off between application start and first order. We don't know where or why.",
        stakeholder: "Lisa Chang (VP Merchant Experience)",
        date: "2026-03-12",
        url: "https://app.outreach.io/meetings/rec_doordash_001",
        verbatim: true,
        businessImpact: "Each 1% improvement in merchant activation = ~$8M revenue impact",
        userImpact: "New merchants are confused by onboarding steps, abandon before first order",
        internalImpact: "Ops team manually follows up with dropped merchants, costing $2M/yr",
        proposedSolution: "Funnel analytics to identify and remove friction in merchant onboarding",
        valueHyp: "Reducing merchant onboarding drop-off by 10% could accelerate $80M in merchant GMV"
      },
      {
        theme: "Dasher-Merchant Matching Optimization",
        type: "challenge",
        text: "Improving matching algorithm requires understanding merchant engagement patterns, but we lack behavioral data on the merchant side.",
        stakeholder: "Derek Williams",
        date: "2026-02-28",
        url: "https://app.outreach.io/meetings/rec_doordash_002",
        businessImpact: "Better matching = faster delivery times = higher customer satisfaction scores",
        userImpact: "Merchants with poor Dasher matches see 25% more late deliveries"
      }
    ]
  },
  "Instacart": {
    callCount: 2,
    dateRange: "Mar 2026 – Apr 2026",
    summary: "Two calls focused on renewal value realization. Kevin Liu wants to quantify ROI from current Amplitude deployment.",
    signals: [
      {
        theme: "Shopper Efficiency & Fulfillment Optimization",
        type: "priority",
        text: "We need to show the board that Amplitude drove measurable improvements in shopper routing and order accuracy this year.",
        stakeholder: "Kevin Liu (Sr. Director of Analytics)",
        date: "2026-03-28",
        url: "https://app.outreach.io/meetings/rec_instacart_001",
        verbatim: true,
        businessImpact: "Renewal at risk if team can't demonstrate concrete ROI to CFO",
        userImpact: "Shoppers using data-driven routing complete 15% more orders per shift",
        internalImpact: "Analytics team adopted Amplitude as primary tool; losing it would set back roadmap 6 months",
        proposedSolution: "Value realization assessment documenting measurable outcomes from Amplitude deployment",
        valueHyp: "Documented $4-6M in operational savings from analytics-driven shopper optimization"
      }
    ]
  },
  "Stripe": {
    callCount: 1,
    dateRange: "Apr 2026",
    summary: "Single intro call. Rachel Ng described developer experience measurement needs.",
    signals: [
      {
        theme: "Developer Experience Measurement",
        type: "priority",
        text: "We need to understand how developers interact with our APIs and documentation. Time-to-first-transaction is our north star metric.",
        stakeholder: "Rachel Ng (Head of Developer Experience)",
        date: "2026-04-08",
        url: "https://app.outreach.io/meetings/rec_stripe_001",
        businessImpact: "Developer activation rate directly correlates to payment volume growth",
        userImpact: "Developers struggle with API integration; median time-to-first-transaction is 4 days vs. 2-day target",
        proposedSolution: "Behavioral analytics on developer portal, API usage patterns, and documentation effectiveness"
      }
    ]
  },
  "Figma": {
    callCount: 2,
    dateRange: "Mar 2026 – Apr 2026",
    summary: "Two calls with growth team. Focused on PLG funnel optimization and collaboration analytics.",
    signals: [
      {
        theme: "Product-Led Growth Funnel Optimization",
        type: "pain",
        text: "Our free-to-paid conversion is 3.2% but we think it should be 5%+. We can't see what behaviors predict upgrade intent.",
        stakeholder: "Olivia Park (Head of Growth)",
        date: "2026-03-20",
        url: "https://app.outreach.io/meetings/rec_figma_001",
        verbatim: true,
        businessImpact: "Each 0.5% improvement in conversion = ~$15M ARR uplift",
        userImpact: "Free users hit feature walls that feel arbitrary; conversion moments aren't optimized",
        internalImpact: "Growth team is running experiments blind without behavioral segmentation",
        proposedSolution: "Behavioral analytics to identify upgrade predictors and optimize conversion triggers",
        valueHyp: "Improving free-to-paid conversion from 3.2% to 4.5% could drive $40M+ incremental ARR"
      },
      {
        theme: "Collaboration Analytics",
        type: "initiative",
        text: "Collaboration features are our moat. Need to measure team adoption patterns and virality loops.",
        stakeholder: "Daniel Kim",
        date: "2026-04-01",
        url: "https://app.outreach.io/meetings/rec_figma_002",
        businessImpact: "Team-based accounts have 4x higher LTV than individual accounts"
      }
    ]
  }
};

// ============================================================
// Mock Slack Data
// ============================================================
const MOCK_SLACK = {
  "Bank of America": {
    threadCount: 8,
    channels: ["#bofa-deal-room", "#enterprise-deals", "#ae-internal"],
    summary: "Active deal room with 8 threads. AE flagged security review as potential blocker. Champion engagement strong.",
    signals: [
      {
        theme: "AI Product Performance & Feature Measurement",
        type: "pain",
        text: "AE shared that BofA's AI COE team presented to their board last month with no quantitative metrics on AI feature performance. Board pushed back hard.",
        date: "2026-04-05",
        url: "https://amplitude.slack.com/archives/C_bofa_001/p1712300000",
        stakeholder: "Cameron Curran (AE, internal note)"
      },
      {
        theme: "Digital Banking Customer Journey Optimization",
        type: "challenge",
        text: "Competitor (Pendo) is in the mix for the digital banking use case. BofA comparing Amplitude's journey analytics capabilities head-to-head.",
        date: "2026-04-03",
        url: "https://amplitude.slack.com/archives/C_bofa_001/p1712100000"
      }
    ]
  },
  "Spotify": {
    threadCount: 5,
    channels: ["#spotify-account", "#media-deals"],
    summary: "Five threads tracking expansion. Elena's team ran an internal eval and Amplitude scored highest on behavioral analytics depth.",
    signals: [
      {
        theme: "Podcast Engagement & Monetization Analytics",
        type: "priority",
        text: "Elena told AE that the podcast analytics expansion has VP-level sponsorship. Budget approved, timeline is Q3 2026.",
        date: "2026-04-01",
        url: "https://amplitude.slack.com/archives/C_spotify_001/p1711900000",
        stakeholder: "Elena Vasquez"
      }
    ]
  },
  "DoorDash": {
    threadCount: 12,
    channels: ["#doordash-deal-room", "#marketplace-deals", "#strategic-accounts"],
    summary: "Very active deal room. Lisa Chang has exec sponsorship. Multiple workstreams being discussed.",
    signals: [
      {
        theme: "Merchant Onboarding Conversion",
        type: "pain",
        text: "AE shared internal DoorDash doc showing merchant onboarding drop-off costs them approximately $200M in unrealized GMV annually.",
        date: "2026-03-15",
        url: "https://amplitude.slack.com/archives/C_doordash_001/p1710500000"
      }
    ]
  },
  "Instacart": {
    threadCount: 4,
    channels: ["#instacart-renewal", "#customer-success"],
    summary: "Renewal threads active. CSM flagged that Instacart wants to see quantified value before signing renewal.",
    signals: [
      {
        theme: "Shopper Efficiency & Fulfillment Optimization",
        type: "pain",
        text: "CSM reported Instacart CFO is asking hard questions about analytics ROI. Need value realization deck before renewal conversation.",
        date: "2026-04-02",
        url: "https://amplitude.slack.com/archives/C_instacart_001/p1712000000",
        stakeholder: "Kevin Liu"
      }
    ]
  },
  "Figma": {
    threadCount: 3,
    channels: ["#figma-deal-room", "#plg-deals"],
    summary: "Three threads. Figma growth team is evaluating Amplitude against Mixpanel. Price and PLG-specific features are key differentiators.",
    signals: [
      {
        theme: "Product-Led Growth Funnel Optimization",
        type: "challenge",
        text: "Figma currently uses Mixpanel. Olivia says they've outgrown it for funnel analysis but migration cost is a concern.",
        date: "2026-03-28",
        url: "https://amplitude.slack.com/archives/C_figma_001/p1711400000",
        stakeholder: "Olivia Park"
      }
    ]
  }
};

// ============================================================
// Mock Granola Data
// ============================================================
const MOCK_GRANOLA = {
  "Bank of America": {
    meetingCount: 4,
    summary: "Four internal meetings including account planning and deal strategy sessions. Kevin Colston attended two.",
    signals: [
      {
        theme: "AI Product Performance & Feature Measurement",
        type: "initiative",
        text: "Account plan notes: BofA's AI COE is a strategic initiative spanning 3 business units. Total addressable opportunity could be $2M+ if we land the initial use case.",
        date: "2026-03-22",
        url: "https://app.granola.ai/notes/bofa_001"
      },
      {
        theme: "Digital Banking Customer Journey Optimization",
        type: "pain",
        text: "Deal strategy session: AE confirmed BofA is using 4 different analytics tools with no unified customer view. Consolidation is a budget justification angle.",
        date: "2026-04-01",
        url: "https://app.granola.ai/notes/bofa_002",
        internalImpact: "Amplitude could replace 3 existing point solutions, creating strong ROI narrative"
      }
    ]
  },
  "Spotify": {
    meetingCount: 2,
    summary: "Two strategy sessions for podcast expansion. Identified cross-sell opportunity for experimentation platform.",
    signals: [
      {
        theme: "Cross-Platform Listening Experience",
        type: "initiative",
        text: "Strategy notes: Spotify is also interested in Amplitude Experiment for A/B testing cross-platform features. Could be an additional $150K expansion.",
        date: "2026-03-30",
        url: "https://app.granola.ai/notes/spotify_001",
        businessImpact: "Total expansion opportunity could reach $900K+ with Experiment add-on"
      }
    ]
  },
  "DoorDash": {
    meetingCount: 3,
    summary: "Three meetings covering merchant analytics suite scoping. VP of Merchant Experience personally attended two calls.",
    signals: [
      {
        theme: "Merchant Onboarding Conversion",
        type: "priority",
        text: "Deal review notes: DoorDash CEO mentioned merchant experience in last earnings call. This is a company-level priority, not just a team initiative.",
        date: "2026-02-20",
        url: "https://app.granola.ai/notes/doordash_001",
        businessImpact: "CEO-level visibility makes this a high-urgency deal with board-level attention"
      }
    ]
  },
  "Instacart": {
    meetingCount: 2,
    summary: "Two renewal planning sessions. CSM and AE aligned on value realization strategy.",
    signals: [
      {
        theme: "Shopper Efficiency & Fulfillment Optimization",
        type: "priority",
        text: "Renewal planning: Instacart has 4 teams using Amplitude actively. Adoption is strong but leadership needs ROI documentation for budget justification.",
        date: "2026-03-15",
        url: "https://app.granola.ai/notes/instacart_001",
        internalImpact: "High adoption = low churn risk, but value narrative is needed for CFO sign-off"
      }
    ]
  },
  "Figma": {
    meetingCount: 1,
    summary: "One account planning session. Identified Figma as high-potential PLG land.",
    signals: [
      {
        theme: "Product-Led Growth Funnel Optimization",
        type: "initiative",
        text: "Account plan: Figma's growth team is well-funded and has autonomy to choose tooling. This is a champion-led deal with potential to expand across the org.",
        date: "2026-03-25",
        url: "https://app.granola.ai/notes/figma_001",
        businessImpact: "Land and expand opportunity — growth team adoption could lead to full org rollout at $1M+ ARR"
      }
    ]
  }
};

// ============================================================
// Mock Glean / Google Drive Data
// ============================================================
const MOCK_GLEAN = {
  "Bank of America": {
    docCount: 6,
    summary: "Found account plan, competitive landscape doc, industry research (financial services analytics), and prior VC engagement notes.",
    signals: [
      {
        theme: "AI Product Performance & Feature Measurement",
        type: "challenge",
        text: "Industry research doc shows 73% of financial services firms cite 'measuring AI ROI' as top-3 challenge in 2026. BofA is squarely in this camp.",
        date: "2026-03-10",
        url: "https://app.getglean.com/search/doc_bofa_001",
        businessImpact: "Industry-wide pain point validates BofA's need and strengthens outside-in narrative"
      }
    ]
  },
  "Spotify": {
    docCount: 3,
    summary: "Found prior case study draft, media industry playbook, and podcast analytics whitepaper.",
    signals: [
      {
        theme: "Podcast Engagement & Monetization Analytics",
        type: "initiative",
        text: "Prior engagement notes show Spotify's music analytics team already considers Amplitude indispensable. Expansion to podcasts is a natural extension.",
        date: "2026-02-15",
        url: "https://app.getglean.com/search/doc_spotify_001"
      }
    ]
  },
  "DoorDash": {
    docCount: 4,
    summary: "Found marketplace analytics playbook, prior ROI analysis, merchant experience competitive brief, and deal strategy doc.",
    signals: [
      {
        theme: "Merchant Onboarding Conversion",
        type: "priority",
        text: "Prior ROI analysis from 2024 engagement showed Amplitude helped DoorDash improve consumer-side conversion by 12%. New ask is to replicate for merchant side.",
        date: "2026-01-20",
        url: "https://app.getglean.com/search/doc_doordash_001",
        businessImpact: "Proven ROI on consumer side creates credible narrative for merchant expansion"
      }
    ]
  },
  "Instacart": {
    docCount: 5,
    summary: "Found value realization framework template, shopper analytics case study, renewal playbook, and usage data summary.",
    signals: [
      {
        theme: "Shopper Efficiency & Fulfillment Optimization",
        type: "priority",
        text: "Usage data shows Instacart has 340 monthly active Amplitude users across 4 teams. Highest adoption of any grocery/marketplace customer.",
        date: "2026-03-01",
        url: "https://app.getglean.com/search/doc_instacart_001",
        internalImpact: "Very high adoption de-risks renewal but value articulation is the gap"
      }
    ]
  },
  "Figma": {
    docCount: 2,
    summary: "Found PLG analytics playbook and SaaS conversion benchmark report.",
    signals: [
      {
        theme: "Product-Led Growth Funnel Optimization",
        type: "challenge",
        text: "PLG playbook benchmarks show top-quartile SaaS companies achieve 5-7% free-to-paid conversion. Figma's 3.2% is below median.",
        date: "2026-03-05",
        url: "https://app.getglean.com/search/doc_figma_001",
        businessImpact: "Clear benchmarking gap provides strong outside-in value narrative"
      }
    ]
  }
};

// ============================================================
// Seed Requests (with triage, use cases, evidence log)
// ============================================================
const SEED_REQUESTS = [
  {
    id: "VC-2026-001",
    customerName: "Bank of America",
    ae: "Cameron Curran",
    se: "Adam Yapkowitz",
    region: "NAMER",
    industry: "Financial Services",
    dealType: "land",
    arr: 500000,
    dealStage: "2 – Qualification",
    submittedDate: "2026-04-07",
    expectedClose: "2026-11-20",
    status: "in-review",
    assignedVc: "Kevin Colston",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000bmcyZYAQ",
    oppName: "Bank of America | Land | Analytics for AI COE",
    healthScore: 12,
    champion: "Anthony",
    championRole: "AI COE Lead (title unverified)",
    contacts: ["Will Kawalek", "Marc Berardi", "David Russell", "Josh Lee", "Mary Ellen Davenport"],
    customerSince: null,
    renewalDate: null,
    renewalArr: null,
    helpNeeded: "Outside-in financial model + business case framing ahead of onsite in Charlotte",
    neededBy: "2026-06-01",
    additionalContext: "BofA's AI COE is evaluating analytics vendors for AI feature measurement. Pendo is in the mix for digital banking use case. High-profile logo, strategic deal.",
    justifications: ["well-known-brand", "strategic-imperative"],
    triage: {
      verdict: "auto-approved",
      rationale: "At $500,000 New Logo ARR, this deal exceeds the $200K auto-approve threshold. The ask is squarely in VC scope.",
      flags: [
        { type: "warn", text: "HEALTH SCORE 12: Low health score may reflect thin engagement signals or deal risk. Worth monitoring." }
      ],
      timeEstimate: "MEDIUM-HEAVY",
      scopeCheck: { inScope: true, outOfScope: false, grayZone: false, matched: ["financial model", "business case"] }
    },
    useCases: [
      {
        num: 1,
        title: "AI Product Performance & Feature Measurement",
        problem: "No way to measure which AI features drive engagement vs. which are ignored. Team is flying blind on AI investments. BofA's AI COE team presented to their board last month with no quantitative metrics on AI feature performance. Board pushed back hard.",
        impacts: {
          business: "AI initiative is a $50M+ investment with no ROI measurement framework",
          endUser: "Product managers can't iterate on AI features without adoption data",
          internal: "Board is asking for AI ROI metrics; leadership has no answers"
        },
        solution: "Behavioral analytics to instrument AI feature usage, adoption funnels, and outcome tracking",
        valueHypothesis: "Reducing AI feature iteration cycles by 40% through data-driven prioritization could save $5-10M annually in misallocated dev spend",
        stakeholders: "Anthony (AI COE Lead), Mary Ellen Davenport",
        evidence: "Kaia (2026-04-02); Slack (2026-04-05); Granola (2026-03-22); Glean (2026-03-10)",
        evidenceLinks: [
          { source: "Kaia", date: "2026-04-02", url: "https://app.outreach.io/meetings/rec_bofa_001" },
          { source: "Slack", date: "2026-04-05", url: "https://amplitude.slack.com/archives/C_bofa_001/p1712300000" },
          { source: "Granola", date: "2026-03-22", url: "https://app.granola.ai/notes/bofa_001" },
          { source: "Glean", date: "2026-03-10", url: "https://app.getglean.com/search/doc_bofa_001" }
        ],
        confidence: "Medium-High"
      },
      {
        num: 2,
        title: "Digital Banking Customer Journey Optimization",
        problem: "Customer journey visibility is a top priority for 2026. Currently stitching together 4 different tools with no unified view. Competitor (Pendo) is in the mix for the digital banking use case.",
        impacts: {
          business: "Digital banking conversion rates are 15% below industry benchmark",
          endUser: "Customers experience friction in mobile-to-web handoffs",
          internal: "Analytics team spends 60% of time on data wrangling instead of insights"
        },
        solution: "To be scoped during VC engagement",
        valueHypothesis: "To be developed",
        stakeholders: "Mary Ellen Davenport",
        evidence: "Kaia (2026-03-18); Slack (2026-04-03); Granola (2026-04-01)",
        evidenceLinks: [
          { source: "Kaia", date: "2026-03-18", url: "https://app.outreach.io/meetings/rec_bofa_002" },
          { source: "Slack", date: "2026-04-03", url: "https://amplitude.slack.com/archives/C_bofa_001/p1712100000" },
          { source: "Granola", date: "2026-04-01", url: "https://app.granola.ai/notes/bofa_002" }
        ],
        confidence: "Medium"
      }
    ],
    evidenceLog: [
      { source: "Salesforce", status: "found", statusLabel: "\u2705 Found", detail: "Opp: Bank of America | Land | Analytics for AI COE. ARR: $500,000. Stage: 2 – Qualification.", links: [{ label: "Open Opportunity", url: "https://amplitude.my.salesforce.com/006VH00000bmcyZYAQ" }] },
      { source: "Kaia / Outreach", status: "found", statusLabel: "\u2705 Found", detail: "3 call(s) in Mar 2026 – Apr 2026. Three discovery calls with AI COE team.", links: [{ label: "Call 1 – Apr 2", url: "https://app.outreach.io/meetings/rec_bofa_001" }, { label: "Call 2 – Mar 18", url: "https://app.outreach.io/meetings/rec_bofa_002" }] },
      { source: "Slack", status: "found", statusLabel: "\u2705 Found", detail: "8 thread(s) across #bofa-deal-room, #enterprise-deals, #ae-internal.", links: [{ label: "Thread – Apr 5", url: "https://amplitude.slack.com/archives/C_bofa_001/p1712300000" }, { label: "Thread – Apr 3", url: "https://amplitude.slack.com/archives/C_bofa_001/p1712100000" }] },
      { source: "Granola", status: "found", statusLabel: "\u2705 Found", detail: "4 meeting(s). Four internal meetings including account planning and deal strategy sessions.", links: [{ label: "Notes – Mar 22", url: "https://app.granola.ai/notes/bofa_001" }, { label: "Notes – Apr 1", url: "https://app.granola.ai/notes/bofa_002" }] },
      { source: "Glean / Drive", status: "found", statusLabel: "\u2705 Found", detail: "6 document(s). Found account plan, competitive landscape doc, industry research.", links: [{ label: "Doc – Mar 10", url: "https://app.getglean.com/search/doc_bofa_001" }] }
    ],
    notes: [
      { author: "Kevin Colston", text: "Scheduled onsite in Charlotte for June. Working on outside-in financial model focusing on AI feature ROI.", timestamp: "2026-04-09T11:00:00Z" }
    ],
    outcome: null,
    closedArr: null,
    closeDate: null,
    projectedArr: 500000,
    notifications: [
      { type: "vc-new-request", to: "Kevin Colston", channel: "DM to Kevin Colston", message: "New VC request: Bank of America | Land | $500,000 ARR", timestamp: "2026-04-07T09:00:00Z", status: "sent" }
    ]
  },
  {
    id: "VC-2026-002",
    customerName: "Spotify",
    ae: "Jessica Martinez",
    se: "Ryan Chen",
    region: "NAMER",
    industry: "Media & Entertainment",
    dealType: "expansion",
    arr: 750000,
    dealStage: "3 – Discovery",
    submittedDate: "2026-04-01",
    expectedClose: "2026-09-15",
    status: "in-progress",
    assignedVc: "Kevin Colston",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000abc123",
    oppName: "Spotify | Expansion | Podcast Analytics",
    healthScore: 72,
    champion: "Elena Vasquez",
    championRole: "VP Product Analytics",
    contacts: ["Elena Vasquez", "Marcus Johnson", "Priya Patel"],
    customerSince: "2022-03-01",
    renewalDate: "2026-12-01",
    renewalArr: 420000,
    helpNeeded: "Collaborative BVA to quantify podcast analytics ROI for expansion business case",
    neededBy: "2026-05-15",
    additionalContext: "Elena's team ran internal eval — Amplitude scored highest. VP-level sponsorship confirmed. Budget approved, timeline is Q3.",
    justifications: ["well-known-brand", "expansion-potential"],
    triage: {
      verdict: "auto-approved",
      rationale: "At $750,000 Expansion ARR, this deal exceeds the $200K auto-approve threshold. The ask is squarely in VC scope.",
      flags: [],
      timeEstimate: "HEAVY",
      scopeCheck: { inScope: true, outOfScope: false, grayZone: false, matched: ["bva", "roi", "business case"] }
    },
    useCases: [
      {
        num: 1,
        title: "Podcast Engagement & Monetization Analytics",
        problem: "Podcast team can't connect listener behavior to subscription conversions. Essentially guessing which content drives paid upgrades. Elena told AE that the podcast analytics expansion has VP-level sponsorship.",
        impacts: {
          business: "Podcast division needs to prove $200M+ content investment ROI to leadership",
          endUser: "Content creators lack data on what resonates with audiences",
          internal: "Podcast and music analytics are siloed, creating duplicate work"
        },
        solution: "Unified behavioral analytics across podcast and music experiences",
        valueHypothesis: "Improving podcast-to-premium conversion by 2 percentage points could drive $30M+ in incremental ARR",
        stakeholders: "Elena Vasquez (VP Product Analytics)",
        evidence: "Kaia (2026-03-25); Slack (2026-04-01); Glean (2026-02-15)",
        evidenceLinks: [
          { source: "Kaia", date: "2026-03-25", url: "https://app.outreach.io/meetings/rec_spotify_001" },
          { source: "Slack", date: "2026-04-01", url: "https://amplitude.slack.com/archives/C_spotify_001/p1711900000" },
          { source: "Glean", date: "2026-02-15", url: "https://app.getglean.com/search/doc_spotify_001" }
        ],
        confidence: "Medium-High"
      },
      {
        num: 2,
        title: "Cross-Platform Listening Experience",
        problem: "Redesigning the listening experience to blend music and podcasts. Need to understand cross-format behavior at scale.",
        impacts: {
          business: "Cross-platform engagement is a key metric for investor story",
          endUser: "Listeners who engage with both formats have 3x higher retention",
          internal: "To be determined through discovery"
        },
        solution: "To be scoped during VC engagement",
        valueHypothesis: "To be developed",
        stakeholders: "Marcus Johnson",
        evidence: "Kaia (2026-04-05); Granola (2026-03-30)",
        evidenceLinks: [
          { source: "Kaia", date: "2026-04-05", url: "https://app.outreach.io/meetings/rec_spotify_002" },
          { source: "Granola", date: "2026-03-30", url: "https://app.granola.ai/notes/spotify_001" }
        ],
        confidence: "Medium"
      }
    ],
    evidenceLog: [
      { source: "Salesforce", status: "found", statusLabel: "\u2705 Found", detail: "Opp: Spotify | Expansion | Podcast Analytics. ARR: $750,000. Stage: 3 – Discovery.", links: [{ label: "Open Opportunity", url: "https://amplitude.my.salesforce.com/006VH00000abc123" }] },
      { source: "Kaia / Outreach", status: "found", statusLabel: "\u2705 Found", detail: "4 call(s) in Feb 2026 – Apr 2026. Four calls covering podcast analytics expansion.", links: [{ label: "Call 1 – Mar 25", url: "https://app.outreach.io/meetings/rec_spotify_001" }, { label: "Call 2 – Apr 5", url: "https://app.outreach.io/meetings/rec_spotify_002" }] },
      { source: "Slack", status: "found", statusLabel: "\u2705 Found", detail: "5 thread(s) across #spotify-account, #media-deals.", links: [{ label: "Thread – Apr 1", url: "https://amplitude.slack.com/archives/C_spotify_001/p1711900000" }] },
      { source: "Granola", status: "found", statusLabel: "\u2705 Found", detail: "2 meeting(s). Two strategy sessions for podcast expansion.", links: [{ label: "Notes – Mar 30", url: "https://app.granola.ai/notes/spotify_001" }] },
      { source: "Glean / Drive", status: "found", statusLabel: "\u2705 Found", detail: "3 document(s). Found prior case study draft, media industry playbook.", links: [{ label: "Doc – Feb 15", url: "https://app.getglean.com/search/doc_spotify_001" }] }
    ],
    notes: [
      { author: "Kevin Colston", text: "Working on collaborative BVA with Elena's team. Podcast-to-premium conversion model draft complete.", timestamp: "2026-04-15T10:00:00Z" }
    ],
    outcome: null,
    closedArr: null,
    closeDate: null,
    projectedArr: 750000,
    notifications: [
      { type: "vc-new-request", to: "Kevin Colston", channel: "DM to Kevin Colston", message: "New VC request: Spotify | Expansion | $750,000 ARR", timestamp: "2026-04-01T09:00:00Z", status: "sent" }
    ]
  },
  {
    id: "VC-2026-003",
    customerName: "Instacart",
    ae: "Rachel Foster",
    se: "Brian Choi",
    region: "NAMER",
    industry: "Marketplace / Grocery",
    dealType: "renewal",
    arr: 520000,
    dealStage: "5 – Negotiation",
    submittedDate: "2026-03-20",
    expectedClose: "2026-06-30",
    status: "accepted",
    assignedVc: "Kevin Colston",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000pqr678",
    oppName: "Instacart | Renewal | Shopper & Consumer Analytics",
    healthScore: 82,
    champion: "Kevin Liu",
    championRole: "Sr. Director of Analytics",
    contacts: ["Kevin Liu", "Maria Gonzalez", "Patrick O'Malley", "Diana Chen"],
    customerSince: "2022-07-01",
    renewalDate: "2026-07-01",
    renewalArr: 520000,
    helpNeeded: "Value realization deck showing ROI from current deployment to support renewal",
    neededBy: "2026-05-30",
    additionalContext: "CFO is asking hard ROI questions. Instacart has 340 MAUs across 4 teams — adoption is great, but leadership needs value documentation.",
    justifications: ["expansion-potential", "reference-potential"],
    triage: {
      verdict: "auto-approved",
      rationale: "At $520,000 Renewal ARR, this deal exceeds the $500K auto-approve threshold. The ask is squarely in VC scope.",
      flags: [
        { type: "critical", text: "RENEWAL IN 78 DAYS: Less than 100 days to renewal. Why is VC being engaged now? Prior VC engagement: Check Glean results." }
      ],
      timeEstimate: "MEDIUM-HEAVY",
      scopeCheck: { inScope: true, outOfScope: false, grayZone: false, matched: ["value realization", "roi"] }
    },
    useCases: [
      {
        num: 1,
        title: "Shopper Efficiency & Fulfillment Optimization",
        problem: "Need to show the board that Amplitude drove measurable improvements in shopper routing and order accuracy. CSM reported CFO is asking hard questions about analytics ROI.",
        impacts: {
          business: "Renewal at risk if team can't demonstrate concrete ROI to CFO",
          endUser: "Shoppers using data-driven routing complete 15% more orders per shift",
          internal: "Very high adoption de-risks renewal but value articulation is the gap"
        },
        solution: "Value realization assessment documenting measurable outcomes from Amplitude deployment",
        valueHypothesis: "Documented $4-6M in operational savings from analytics-driven shopper optimization",
        stakeholders: "Kevin Liu (Sr. Director of Analytics)",
        evidence: "Kaia (2026-03-28); Slack (2026-04-02); Granola (2026-03-15); Glean (2026-03-01)",
        evidenceLinks: [
          { source: "Kaia", date: "2026-03-28", url: "https://app.outreach.io/meetings/rec_instacart_001" },
          { source: "Slack", date: "2026-04-02", url: "https://amplitude.slack.com/archives/C_instacart_001/p1712000000" },
          { source: "Granola", date: "2026-03-15", url: "https://app.granola.ai/notes/instacart_001" },
          { source: "Glean", date: "2026-03-01", url: "https://app.getglean.com/search/doc_instacart_001" }
        ],
        confidence: "Medium-High"
      }
    ],
    evidenceLog: [
      { source: "Salesforce", status: "found", statusLabel: "\u2705 Found", detail: "Opp: Instacart | Renewal | Shopper & Consumer Analytics. ARR: $520,000. Stage: 5 – Negotiation.", links: [{ label: "Open Opportunity", url: "https://amplitude.my.salesforce.com/006VH00000pqr678" }] },
      { source: "Kaia / Outreach", status: "partial", statusLabel: "\u26a0\ufe0f Partial", detail: "2 call(s) in Mar 2026 – Apr 2026. Two calls focused on renewal value realization.", links: [{ label: "Call 1 – Mar 28", url: "https://app.outreach.io/meetings/rec_instacart_001" }] },
      { source: "Slack", status: "found", statusLabel: "\u2705 Found", detail: "4 thread(s) across #instacart-renewal, #customer-success.", links: [{ label: "Thread – Apr 2", url: "https://amplitude.slack.com/archives/C_instacart_001/p1712000000" }] },
      { source: "Granola", status: "found", statusLabel: "\u2705 Found", detail: "2 meeting(s). Two renewal planning sessions.", links: [{ label: "Notes – Mar 15", url: "https://app.granola.ai/notes/instacart_001" }] },
      { source: "Glean / Drive", status: "found", statusLabel: "\u2705 Found", detail: "5 document(s). Found value realization framework template, shopper analytics case study.", links: [{ label: "Doc – Mar 1", url: "https://app.getglean.com/search/doc_instacart_001" }] }
    ],
    notes: [],
    outcome: null,
    closedArr: null,
    closeDate: null,
    projectedArr: 520000,
    notifications: [
      { type: "vc-new-request", to: "Kevin Colston", channel: "#vc-intake-requests", message: "New VC request: Instacart | Renewal | $520,000 ARR", timestamp: "2026-03-20T09:00:00Z", status: "sent" }
    ]
  },
  {
    id: "VC-2026-004",
    customerName: "DoorDash",
    ae: "Michael Santos",
    se: "Aisha Patel",
    region: "NAMER",
    industry: "Marketplace / Logistics",
    dealType: "expansion",
    arr: 600000,
    dealStage: "3 – Discovery",
    submittedDate: "2026-03-10",
    expectedClose: "2026-07-15",
    status: "completed",
    assignedVc: "Rob Helegda",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000jkl012",
    oppName: "DoorDash | Expansion | Merchant Analytics Suite",
    healthScore: 68,
    champion: "Lisa Chang",
    championRole: "VP Merchant Experience",
    contacts: ["Lisa Chang", "Derek Williams", "Nadia Kowalski"],
    customerSince: "2021-11-01",
    renewalDate: "2027-01-15",
    renewalArr: 350000,
    helpNeeded: "ROI analysis for merchant analytics suite expansion — need outside-in financial model showing merchant onboarding impact",
    neededBy: "2026-04-15",
    additionalContext: "CEO mentioned merchant experience in earnings call. Lisa Chang has exec sponsorship. DoorDash already proven Amplitude ROI on consumer side.",
    justifications: ["well-known-brand", "expansion-potential", "exec-sponsorship"],
    triage: {
      verdict: "auto-approved",
      rationale: "At $600,000 Expansion ARR, this deal exceeds the $200K auto-approve threshold. The ask is squarely in VC scope.",
      flags: [],
      timeEstimate: "MEDIUM-HEAVY",
      scopeCheck: { inScope: true, outOfScope: false, grayZone: false, matched: ["roi", "financial model"] }
    },
    useCases: [
      {
        num: 1,
        title: "Merchant Onboarding Conversion",
        problem: "Merchant sign-up funnel has 40% drop-off between application start and first order. Internal doc shows this costs ~$200M in unrealized GMV annually.",
        impacts: {
          business: "Each 1% improvement in merchant activation = ~$8M revenue impact",
          endUser: "New merchants are confused by onboarding steps, abandon before first order",
          internal: "Ops team manually follows up with dropped merchants, costing $2M/yr"
        },
        solution: "Funnel analytics to identify and remove friction in merchant onboarding",
        valueHypothesis: "Reducing merchant onboarding drop-off by 10% could accelerate $80M in merchant GMV",
        stakeholders: "Lisa Chang (VP Merchant Experience)",
        evidence: "Kaia (2026-03-12); Slack (2026-03-15); Granola (2026-02-20); Glean (2026-01-20)",
        evidenceLinks: [
          { source: "Kaia", date: "2026-03-12", url: "https://app.outreach.io/meetings/rec_doordash_001" },
          { source: "Slack", date: "2026-03-15", url: "https://amplitude.slack.com/archives/C_doordash_001/p1710500000" },
          { source: "Granola", date: "2026-02-20", url: "https://app.granola.ai/notes/doordash_001" },
          { source: "Glean", date: "2026-01-20", url: "https://app.getglean.com/search/doc_doordash_001" }
        ],
        confidence: "Medium-High"
      },
      {
        num: 2,
        title: "Dasher-Merchant Matching Optimization",
        problem: "Improving matching algorithm requires understanding merchant engagement patterns, but they lack behavioral data on the merchant side.",
        impacts: {
          business: "Better matching = faster delivery times = higher customer satisfaction scores",
          endUser: "Merchants with poor Dasher matches see 25% more late deliveries",
          internal: "To be determined through discovery"
        },
        solution: "To be scoped during VC engagement",
        valueHypothesis: "To be developed",
        stakeholders: "Derek Williams",
        evidence: "Kaia (2026-02-28)",
        evidenceLinks: [
          { source: "Kaia", date: "2026-02-28", url: "https://app.outreach.io/meetings/rec_doordash_002" }
        ],
        confidence: "Medium"
      }
    ],
    evidenceLog: [
      { source: "Salesforce", status: "found", statusLabel: "\u2705 Found", detail: "Opp: DoorDash | Expansion | Merchant Analytics Suite. ARR: $600,000. Stage: 3 – Discovery.", links: [{ label: "Open Opportunity", url: "https://amplitude.my.salesforce.com/006VH00000jkl012" }] },
      { source: "Kaia / Outreach", status: "found", statusLabel: "\u2705 Found", detail: "5 call(s) in Jan 2026 – Apr 2026. Strong interest in merchant analytics.", links: [{ label: "Call 1 – Mar 12", url: "https://app.outreach.io/meetings/rec_doordash_001" }, { label: "Call 2 – Feb 28", url: "https://app.outreach.io/meetings/rec_doordash_002" }] },
      { source: "Slack", status: "found", statusLabel: "\u2705 Found", detail: "12 thread(s) across #doordash-deal-room, #marketplace-deals, #strategic-accounts.", links: [{ label: "Thread – Mar 15", url: "https://amplitude.slack.com/archives/C_doordash_001/p1710500000" }] },
      { source: "Granola", status: "found", statusLabel: "\u2705 Found", detail: "3 meeting(s). VP of Merchant Experience personally attended two calls.", links: [{ label: "Notes – Feb 20", url: "https://app.granola.ai/notes/doordash_001" }] },
      { source: "Glean / Drive", status: "found", statusLabel: "\u2705 Found", detail: "4 document(s). Found marketplace analytics playbook, prior ROI analysis.", links: [{ label: "Doc – Jan 20", url: "https://app.getglean.com/search/doc_doordash_001" }] }
    ],
    notes: [
      { author: "Rob Helegda", text: "Completed ROI analysis deck. Lisa Chang presented to CEO — very positive reception. Deal moving fast.", timestamp: "2026-04-10T14:30:00Z" },
      { author: "Rob Helegda", text: "Deal closed! Expansion signed at $720K — $120K above projected. Lisa credited the merchant onboarding ROI analysis as the tipping point.", timestamp: "2026-04-12T16:00:00Z" }
    ],
    outcome: "expanded",
    closedArr: 720000,
    closeDate: "2026-04-12",
    projectedArr: 600000,
    notifications: [
      { type: "vc-new-request", to: "Rob Helegda", channel: "DM to Rob Helegda", message: "New VC request: DoorDash | Expansion | $600,000 ARR", timestamp: "2026-03-10T09:00:00Z", status: "sent" },
      { type: "ae-status-update", to: "Michael Santos", channel: "DM to Michael Santos", message: "Your VC request for DoorDash (VC-2026-004) has been updated: Submitted → In Progress", timestamp: "2026-03-12T10:00:00Z", status: "sent" },
      { type: "ae-status-update", to: "Michael Santos", channel: "DM to Michael Santos", message: "Your VC request for DoorDash (VC-2026-004) has been updated: In Progress → Completed", timestamp: "2026-04-12T16:30:00Z", status: "sent" }
    ]
  },
  {
    id: "VC-2026-005",
    customerName: "Rivian",
    ae: "Alex Hernandez",
    se: "Natalie Wu",
    region: "NAMER",
    industry: "Automotive / EV",
    dealType: "land",
    arr: 280000,
    dealStage: "1 – Prospecting",
    submittedDate: "2026-04-10",
    expectedClose: "2026-12-15",
    status: "on-hold",
    assignedVc: null,
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000mno345",
    oppName: "Rivian | Land | Connected Vehicle Analytics",
    healthScore: 30,
    champion: "Jordan Blake",
    championRole: "Director of Digital Products",
    contacts: ["Jordan Blake", "Samantha Reed"],
    customerSince: null,
    renewalDate: null,
    renewalArr: null,
    helpNeeded: "Outside-in value narrative for connected vehicle analytics use case",
    neededBy: "2026-06-15",
    additionalContext: "Early stage — single discovery call. Competitive situation with Pendo. Brand recognition is high but deal maturity is low.",
    justifications: ["well-known-brand", "competitive-boxout"],
    triage: {
      verdict: "needs-review",
      rationale: "Needs review: borderline ARR, thin discovery. Ask appears in scope but other factors require attention.",
      flags: [
        { type: "warn", text: "HEALTH SCORE 30: Low health score may reflect thin engagement signals or deal risk. Worth monitoring." },
        { type: "warn", text: "THIN DISCOVERY: Only 1 data source(s) returned results. AE may need to complete discovery before VC engagement can be scoped." }
      ],
      timeEstimate: "LIGHT",
      scopeCheck: { inScope: true, outOfScope: false, grayZone: false, matched: ["value narrative"] }
    },
    useCases: [
      {
        num: 1,
        title: "Connected Vehicle UX Optimization",
        problem: "Need to measure driver interaction patterns with in-vehicle software to improve UX. Only one discovery call completed — limited signal depth.",
        impacts: {
          business: "To be determined through discovery",
          endUser: "To be determined through discovery",
          internal: "To be determined through discovery"
        },
        solution: "To be scoped during VC engagement",
        valueHypothesis: "To be developed",
        stakeholders: "Jordan Blake (Director of Digital Products)",
        evidence: "Kaia (2026-04-08)",
        evidenceLinks: [
          { source: "Kaia", date: "2026-04-08", url: "https://app.outreach.io/meetings/rec_rivian_001" }
        ],
        confidence: "Low"
      }
    ],
    evidenceLog: [
      { source: "Salesforce", status: "found", statusLabel: "\u2705 Found", detail: "Opp: Rivian | Land | Connected Vehicle Analytics. ARR: $280,000. Stage: 1 – Prospecting.", links: [{ label: "Open Opportunity", url: "https://amplitude.my.salesforce.com/006VH00000mno345" }] },
      { source: "Kaia / Outreach", status: "partial", statusLabel: "\u26a0\ufe0f Partial", detail: "1 call in Apr 2026. Single intro call with limited discovery.", links: [{ label: "Call 1 – Apr 8", url: "https://app.outreach.io/meetings/rec_rivian_001" }] },
      { source: "Slack", status: "not-found", statusLabel: "\u274c None", detail: "No relevant Slack threads found.", links: [] },
      { source: "Granola", status: "not-found", statusLabel: "\u274c None", detail: "No meeting notes found.", links: [] },
      { source: "Glean / Drive", status: "not-found", statusLabel: "\u274c None", detail: "No internal documents found.", links: [] }
    ],
    notes: [],
    outcome: null,
    closedArr: null,
    closeDate: null,
    projectedArr: 280000,
    notifications: []
  }
];
