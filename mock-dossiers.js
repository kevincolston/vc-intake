// ============================================================
// Mock Customer Value Dossiers
// Mirrors the output format of the "customer-value-dossier" skill
// One entry per account, keyed by account name
// ============================================================

const MOCK_DOSSIERS = {

  // ============================================================
  // SPOTIFY — Customer, Expansion
  // ============================================================
  "Spotify": {
    type: "customer",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 58, medium: 30, low: 9, unconfirmed: 3, totalDataPoints: 52 },
    companyType: "public",

    healthScore: {
      score: 78,
      trend: "up",
      components: {
        adoption: 85,
        engagement: 72,
        support: 88,
        stakeholder: 68
      }
    },

    dealTimeline: [
      { date: "2025-09-10", event: "Initial strategic review — AE Jessica Martinez and Elena Vasquez aligned on podcast analytics expansion roadmap", type: "meeting", sourceUrl: "https://app.outreach.io/recordings/rec-20250910-spotify" },
      { date: "2025-11-18", event: "Amplitude QBR — Elena presented WAU growth to Spotify leadership; podcast expansion discussed informally", type: "meeting", sourceUrl: "https://docs.google.com/presentation/d/1spotify-qbr-nov2025/edit" },
      { date: "2026-01-15", event: "Podcast product team formally onboarded to Amplitude — 40 net-new analysts provisioned", type: "milestone" },
      { date: "2026-02-20", event: "Cross-platform dashboard rollout across music and podcast orgs", type: "milestone" },
      { date: "2026-03-25", event: "VC engaged — Kevin Colston discovery call with Elena Vasquez on expansion business case", type: "meeting", sourceUrl: "https://app.outreach.io/recordings/rec-20260325-spotify" },
      { date: "2026-03-30", event: "Granola strategy session — Experiment cross-sell opportunity identified; Elena's A/B testing interest confirmed", type: "meeting", sourceUrl: "https://granola.ai/notes/spotify-strategy-20260330" },
      { date: "2026-04-05", event: "Technical deep-dive with Marcus Johnson (Sr. Director Data Engineering) — instrumentation gaps documented", type: "meeting", sourceUrl: "https://app.outreach.io/recordings/rec-20260405-spotify" },
      { date: "2026-12-01", event: "Contract renewal — target $750K total ARR", type: "milestone" }
    ],

    priorVcEngagements: [
      { date: "2024-09-15", vc: "Kevin Colston", deliverable: "Outside-in value model for initial Analytics purchase — podcast-to-premium conversion ROI framework", outcome: "Influenced $420K closed-won deal", outcomeType: "won", sourceUrl: "https://docs.google.com/spreadsheets/d/1spotify-value-model-2024/edit" },
      { date: "2025-12-10", vc: "Kevin Colston", deliverable: "Q4 2025 QBR value realization deck — $3.1M annual value documented across 3 use cases", outcome: "Renewed at $420K base; expansion conversation opened for Q3 2026", outcomeType: "won", sourceUrl: "https://docs.google.com/presentation/d/1spotify-qbr-q4-2025/edit" }
    ],

    talkTrack: {
      nextMeeting: "Expansion business case review with Elena Vasquez — April 22, 2026",
      keyMessages: [
        "Lead with the 54% WAU growth story — Elena's team is seeing real adoption momentum and the podcast org expansion is already driving results",
        "Position Experiment as the natural next step: 'You're already measuring content engagement at scale — now let's optimize it with structured A/B tests at Spotify's content velocity'",
        "Reference the $2.3M in documented value from podcast-to-premium conversion analytics to anchor the expansion investment: the expansion pays for itself in one quarter"
      ],
      objectionHandling: [
        { objection: "We're already running A/B tests with our homegrown system", response: "Acknowledge the investment, then quantify the throughput gap: 'Your team runs roughly 2 content experiments per month vs. Amplitude Experiment customers averaging 8–10. At Spotify's scale — 260M premium subscribers and $200M in podcast-influenced revenue — that velocity difference compounds to $1M+ in faster content optimization annually.'" },
        { objection: "The podcast instrumentation isn't ready yet — we need to wait until Marcus's team finishes the event schema", response: "Reframe the sequence: 'We can structure the expansion agreement now and align activation milestones to Marcus's engineering timeline. Locking in the commercial terms protects your Q3 budget allocation while giving engineering the full Q2 runway they need.'" },
        { objection: "Budget is tight this cycle", response: "Reframe from cost to recovered value: 'The $750K in content production savings we documented last quarter more than covers the Experiment add-on. This expansion pays for itself in Year 1 on the production efficiency story alone, before we count the conversion lift.'" }
      ],
      competitiveCounters: [
        { competitor: "Mixpanel", counter: "Mixpanel requires separate instrumentation for the podcast org — you'd be running two parallel data pipelines. With Amplitude, podcast events run on the same behavioral graph you're already using for music. Zero additional engineering lift, and you get cross-platform identity resolution that Mixpanel cannot provide at Spotify's event volume." }
      ]
    },

    supportSignals: {
      openTickets: 2,
      avgResolutionDays: 1.5,
      lastCsatScore: 4.5,
      lastCsatDate: "2026-03-15",
      escalations30d: 0,
      recentThemes: ["SDK migration questions for podcast event schema", "Custom event taxonomy best practices for cross-platform identity"]
    },

    snapshot: {
      industry: "Media & Entertainment",
      segment: "Strategic",
      region: "NAMER",
      employees: 9700,
      revenue: "$13.9B",
      revenueSource: "Annual Report FY2025",
      arr: 750000,
      contractYears: 2,
      renewalDate: "2026-12-01",
      productsLicensed: ["Analytics"],
      primaryUseCases: [
        { text: "Podcast engagement & listener-to-premium conversion analytics", confidence: "HIGH", source: "Kaia call 2026-03-25; Slack #spotify-account", sourceUrl: "https://app.outreach.io/recordings/rec-20260325-spotify" },
        { text: "Cross-platform listening behavior (music + podcasts)", confidence: "HIGH", source: "Kaia call 2026-04-05", sourceUrl: "https://app.outreach.io/recordings/rec-20260405-spotify" },
        { text: "Content recommendation algorithm measurement", confidence: "MEDIUM", source: "Granola strategy notes 2026-03-30", sourceUrl: "https://granola.ai/notes/spotify-strategy-20260330" }
      ],
      stakeholders: [
        { name: "Elena Vasquez", title: "VP Product Analytics", role: "Champion", confidence: "HIGH", source: "Salesforce + Kaia calls", sourceUrl: "https://amplitude.my.salesforce.com/001spotify-elena" },
        { name: "Marcus Johnson", title: "Sr. Director Data Engineering", role: "Technical Evaluator", confidence: "HIGH", source: "Kaia call 2026-04-05", sourceUrl: "https://app.outreach.io/recordings/rec-20260405-spotify" },
        { name: "Priya Patel", title: "Director of Podcast Product", role: "Business Sponsor", confidence: "MEDIUM", source: "Salesforce contact record", sourceUrl: "https://amplitude.my.salesforce.com/001spotify-priya" }
      ],
      accountTeam: { ae: "Jessica Martinez", se: "Ryan Chen", csm: "Dana Walsh", vc: "Kevin Colston" }
    },

    adoption: {
      wauTrend: [
        { week: "2025-W44", value: 120 },
        { week: "2025-W45", value: 118 },
        { week: "2025-W46", value: 123 },
        { week: "2025-W47", value: 127 },
        { week: "2025-W48", value: 125 },
        { week: "2025-W49", value: 130 },
        { week: "2025-W50", value: 128 },
        { week: "2025-W51", value: 122 },
        { week: "2025-W52", value: 115 },
        { week: "2026-W01", value: 132 },
        { week: "2026-W02", value: 138 },
        { week: "2026-W03", value: 141 },
        { week: "2026-W04", value: 155 },
        { week: "2026-W05", value: 158 },
        { week: "2026-W06", value: 160 },
        { week: "2026-W07", value: 163 },
        { week: "2026-W08", value: 161 },
        { week: "2026-W09", value: 166 },
        { week: "2026-W10", value: 170 },
        { week: "2026-W11", value: 168 },
        { week: "2026-W12", value: 175 },
        { week: "2026-W13", value: 179 },
        { week: "2026-W14", value: 182 },
        { week: "2026-W15", value: 185 }
      ],
      mauTrend: [
        { month: "2025-11", value: 310 },
        { month: "2025-12", value: 305 },
        { month: "2026-01", value: 335 },
        { month: "2026-02", value: 358 },
        { month: "2026-03", value: 372 },
        { month: "2026-04", value: 390 }
      ],
      trendDirection: "growing",
      trendSummary: "WAU has increased from 120 to 185 over the past 24 weeks (+54%). Growth accelerated sharply in late January after the analytics team expanded Amplitude access to the podcast product org. The holiday dip in W51-W52 was transient and recovered quickly.",
      trendSource: "Amplitude MCP, project ID amp-spotify-001, queried 2026-04-15",
      annotations: [
        { week: "2026-W04", label: "Podcast product team onboarded" },
        { week: "2026-W12", label: "Cross-platform dashboard rollout" }
      ]
    },

    relationshipContext: [
      {
        insight: "Elena Vasquez is the primary champion and original purchase driver. She runs weekly analytics reviews with her team using Amplitude and regularly cites the platform in internal leadership updates.",
        confidence: "HIGH",
        source: "Kaia call 2026-03-25; Granola strategy notes 2026-03-30",
        sourceUrl: "https://app.outreach.io/recordings/rec-20260325-spotify",
        category: "champion"
      },
      {
        insight: "VP-level budget approval confirmed for the podcast analytics expansion. Elena told the AE the expansion timeline is locked for Q3 2026 with budget already allocated.",
        confidence: "HIGH",
        source: "Slack #spotify-account 2026-04-01",
        sourceUrl: "https://amplitude.slack.com/archives/C04SPOTIFY/p1743465600",
        category: "decision-process"
      },
      {
        insight: "Spotify's music analytics team considers Amplitude indispensable for core product metrics. Internal evaluation scored Amplitude highest among vendors on behavioral analytics depth.",
        confidence: "HIGH",
        source: "Glean / Drive engagement notes 2026-02-15",
        sourceUrl: "https://docs.google.com/document/d/1spotify-engagement-notes-feb2026/edit",
        category: "sentiment"
      },
      {
        insight: "Mixpanel is deployed for the music experience team (~150 users). Expansion to podcast analytics is greenfield and not contested by Mixpanel. This reduces competitive risk on the expansion.",
        confidence: "HIGH",
        source: "Salesforce competitor field; Kaia call 2026-04-05",
        sourceUrl: "https://amplitude.my.salesforce.com/001spotify-competitive",
        category: "competitive"
      },
      {
        insight: "Granola strategy session surfaced a cross-sell opportunity for Amplitude Experiment — Elena's team wants to run structured A/B tests on podcast recommendation algorithms. Estimated $150K incremental.",
        confidence: "MEDIUM",
        source: "Granola strategy notes 2026-03-30",
        sourceUrl: "https://granola.ai/notes/spotify-strategy-20260330",
        category: "champion"
      }
    ],

    valueRealized: {
      summary: "Total estimated value realized: $3.1M annually across 3 measured use cases. All figures sourced from customer-reported data and Amplitude-measured lift.",
      items: [
        {
          title: "Podcast-to-Premium Conversion Optimization",
          metric: "+2.3 percentage points on listener-to-premium conversion rate",
          methodology: "Amplitude funnel analysis identified 3 drop-off points in the podcast-to-subscription journey. A/B tested nudge interventions. Lift measured Q1–Q3 2025. 2.3pp improvement × $200M estimated podcast-influenced subscriber revenue = $4.6M gross; conservatively attributing 50% to analytics = $2.3M.",
          dollarValue: 2300000,
          confidence: "HIGH",
          source: "Customer-reported in Q4 2025 QBR (Elena Vasquez confirmed figures)",
          sourceUrl: "https://docs.google.com/presentation/d/1spotify-qbr-q4-2025/edit"
        },
        {
          title: "Content Production Efficiency — Data-Driven Programming Decisions",
          metric: "20% reduction in underperforming content episodes relative to prior year",
          methodology: "Podcast engagement analytics surfaced retention curves by content category. Programming team deprioritized formats with <40% completion rates. Estimated 15% reduction in content production cost on underperforming formats × $50M annual podcast content budget = $750K.",
          dollarValue: 750000,
          confidence: "MEDIUM",
          source: "Granola QBR notes 2025-12-10; estimate based on customer-reported content budget figures",
          sourceUrl: "https://granola.ai/notes/spotify-qbr-20251210"
        },
        {
          title: "Engineering Efficiency — Reduced Analytics Engineering Overhead",
          metric: "2 FTE analytics engineers redirected from dashboard maintenance to product work",
          methodology: "Amplitude replaced manual Snowplow pipeline dashboards for the music product team. 2 FTE × $130K fully-loaded cost = $260K/yr.",
          dollarValue: 260000,
          confidence: "MEDIUM",
          source: "Marcus Johnson confirmed in Kaia call 2026-04-05",
          sourceUrl: "https://app.outreach.io/recordings/rec-20260405-spotify"
        }
      ]
    },

    productHealth: {
      featureUsage: [
        { feature: "Event Segmentation", usage: "heavy", sessions: 1840 },
        { feature: "Funnel Analysis", usage: "heavy", sessions: 1320 },
        { feature: "Retention Analysis", usage: "moderate", sessions: 520 },
        { feature: "User Journeys / Pathfinder", usage: "moderate", sessions: 410 },
        { feature: "Experiment", usage: "light", sessions: 38 },
        { feature: "Audiences", usage: "never", sessions: 0 }
      ],
      engagementTrend: "growing",
      dataHealth: {
        volumeTrend: "growing",
        taxonomyScore: 79,
        instrumentationGaps: ["Podcast-side events not yet instrumented — expansion will require new event schema", "Cross-platform identity resolution incomplete between music and podcast user IDs"]
      },
      underusedFeatures: [
        "Experiment — licensed via enterprise plan but only 38 sessions in 6 months. Elena's team mentioned wanting to run structured A/B tests — direct expansion play.",
        "Audiences — never activated. Significant opportunity to drive marketing personalization use case with the growth team."
      ]
    },

    strategy: {
      expansionPlays: [
        {
          product: "Podcast Analytics Expansion (Analytics seat expansion)",
          rationale: "Podcast product team is onboarding to Amplitude but current license doesn't cover the full headcount. Expansion covers 60+ new analysts in the podcast org.",
          estimatedIncrementalValue: 330000,
          methodology: "60 incremental seats × blended enterprise rate. Current deal is $420K base; expansion target is $750K total.",
          confidence: "HIGH",
          source: "Elena Vasquez confirmed headcount in Kaia call 2026-03-25",
          sourceUrl: "https://app.outreach.io/recordings/rec-20260325-spotify"
        },
        {
          product: "Amplitude Experiment",
          rationale: "Elena's team wants structured A/B testing on podcast recommendation algorithms and content feed ranking. Currently using a homegrown solution with limited throughput.",
          estimatedIncrementalValue: 150000,
          methodology: "Experiment add-on pricing based on scale tier. Faster experiment cycles (est. 3x throughput vs. homegrown) × $200M podcast-influenced revenue × potential 0.5% incremental lift = $1M+ in value; pricing reflects a fraction of that value.",
          confidence: "MEDIUM",
          source: "Granola strategy notes 2026-03-30",
          sourceUrl: "https://granola.ai/notes/spotify-strategy-20260330"
        }
      ],
      riskFactors: [
        {
          risk: "Podcast team instrumentation gap means onboarding will take 2–3 months before analytics value is visible",
          severity: "medium",
          confidence: "HIGH",
          source: "Marcus Johnson, Kaia call 2026-04-05",
          mitigation: "Offer a professional services scoping session early in Q2 to accelerate event instrumentation plan."
        },
        {
          risk: "Mixpanel has 150 established users on the music side; if a cost-driven vendor consolidation push occurs, music team could push to standardize on Mixpanel rather than Amplitude",
          severity: "low",
          confidence: "LOW",
          source: "Inferred from competitive landscape; no direct signal",
          mitigation: "Ensure Elena's team sees Amplitude as the strategic standard. Reference the internal eval that ranked Amplitude highest."
        }
      ],
      renewalPositioning: "Lead with the $3.1M value realized narrative. Emphasize the 54% WAU growth as evidence of deep organizational adoption. The podcast expansion adds further stickiness — two major teams on Amplitude makes switching cost extremely high.",
      pricingNotes: "Current base contract is $420K. Expansion target is $750K total ARR, a 79% increase. Position the seat expansion as a natural outgrowth of proven value, not an upsell. Experiment should be offered as a 90-day trial to reduce friction."
    },

    valueHypothesis: null,

    competitiveLandscape: {
      currentTools: [
        { name: "Mixpanel", product: "Product Analytics", maturity: "established", since: "2021", confidence: "HIGH", source: "Salesforce competitor field + Kaia call confirmation", sourceUrl: "https://amplitude.my.salesforce.com/001spotify-competitive", notes: "~150 users, primary tool for music experience team. Not deployed in podcast org." },
        { name: "Snowplow", product: "Event Collection", maturity: "deeply-embedded", since: "2019", confidence: "HIGH", source: "Marcus Johnson, Kaia call 2026-04-05", sourceUrl: "https://app.outreach.io/recordings/rec-20260405-spotify", notes: "Custom event pipeline feeding their data warehouse. Infrastructure-level, not competitive." }
      ],
      buyerIntent: "No active G2 buyer intent signals detected. Internal evaluation already completed — Amplitude scored highest.",
      amplitudeDifferentiators: [
        "Cross-platform behavioral analytics unifying music and podcast listener journeys in a single behavioral graph",
        "Superior retention and funnel analysis for subscription media businesses",
        "Enterprise-scale cohort analysis that Mixpanel cannot match at Spotify's event volume"
      ],
      winLossPatterns: "Won 6 of 8 similar Media & Entertainment deals in the past 18 months. Primary win factor: cross-platform identity resolution and behavioral analytics depth. Common loss factor: price when Mixpanel is deeply embedded.",
      analystPositioning: "Amplitude positioned as a Leader in the 2025 Forrester Wave for Digital Analytics. Key strength: 'Best-in-class behavioral analytics for subscription businesses.' Directly relevant to Spotify's podcast-to-premium conversion use case."
    },

    externalContext: {
      recentNews: [
        { headline: "Spotify Reports Record Q4 2025 Subscriber Growth, Crossing 260M Premium Users", date: "2026-01-28", url: "https://newsroom.spotify.com/2026-01-28/q4-2025-earnings/", relevance: "Growing subscriber base increases the strategic importance of conversion analytics and content engagement measurement.", confidence: "HIGH", source: "Spotify Newsroom" },
        { headline: "Spotify Launches AI-Powered Podcast Recommendations Globally", date: "2026-02-14", url: "https://newsroom.spotify.com/2026-02-14/ai-podcast-recommendations/", relevance: "AI recommendations require behavioral analytics to measure lift — directly expands the Amplitude use case.", confidence: "HIGH", source: "Spotify Newsroom" },
        { headline: "Spotify Expands Audiobook Library to 50 Countries, Eyes Bundle Strategy", date: "2026-03-05", url: "https://techcrunch.com/2026/03/05/spotify-audiobooks-expansion/", relevance: "Bundle analytics across music, podcast, and audiobooks is a future expansion use case for Amplitude.", confidence: "MEDIUM", source: "TechCrunch" }
      ],
      strategicPriorities: [
        { priority: "Unify music, podcast, and audiobook analytics under one behavioral data platform", confidence: "HIGH", source: "CEO earnings call Q4 2025" },
        { priority: "Drive podcast-to-premium subscription conversion through content personalization", confidence: "HIGH", source: "Kaia call 2026-03-25; Q4 2025 earnings" },
        { priority: "Expand into live audio and creator monetization tools", confidence: "MEDIUM", source: "TechCrunch coverage 2026-03" }
      ],
      industryTrends: "Streaming industry shifting toward bundled content experiences (music + podcasts + audiobooks). Platforms that can measure cross-format engagement have a material advantage in reducing churn and improving content ROI. Analytics spanning content types is becoming a strategic priority, not a nice-to-have.",
      firmographics: {
        founded: "2006",
        headquarters: "Stockholm, Sweden (US HQ: New York, NY)",
        funding: "Public (NYSE: SPOT)",
        techStack: ["GCP", "BigQuery", "Kubernetes", "Python", "Java", "React", "Snowplow"],
        techStackSource: "Clay enrichment + job postings + Marcus Johnson confirmation"
      }
    },

    openQuestions: [
      { question: "What is the podcast team's instrumentation timeline? Who owns the engineering work?", owner: "SE (Ryan Chen)", dueDate: "2026-04-30", priority: "high" },
      { question: "Is Experiment a realistic add-on for this expansion cycle, or should it be positioned for renewal?", owner: "VC (Kevin Colston)", dueDate: "2026-05-15", priority: "medium" },
      { question: "Can Elena provide a written case study or public reference for podcast conversion lift?", owner: "CSM (Dana Walsh)", dueDate: "2026-06-01", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + 1 expansion opportunity + 3 contacts" },
      { source: "Amplitude MCP", status: "found", detail: "24 weeks WAU, 6 months MAU, feature usage data" },
      { source: "Kaia / Outreach", status: "found", detail: "4 call transcripts analyzed (Feb–Apr 2026)" },
      { source: "Granola", status: "found", detail: "2 strategy session notes analyzed" },
      { source: "Slack", status: "found", detail: "5 threads across #spotify-account and #media-deals" },
      { source: "Glean / Drive", status: "found", detail: "3 documents: case study draft, media playbook, podcast whitepaper" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals detected" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount" },
      { source: "Web", status: "found", detail: "Earnings call, 3 press articles, Spotify Newsroom" }
    ]
  },

  // ============================================================
  // PELOTON — Customer, Renewal (At-Risk)
  // ============================================================
  "Peloton": {
    type: "customer",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 44, medium: 35, low: 15, unconfirmed: 6, totalDataPoints: 38 },
    companyType: "public",

    snapshot: {
      industry: "Consumer / Fitness",
      segment: "Major",
      region: "NAMER",
      employees: 3800,
      revenue: "$2.1B",
      revenueSource: "10-K FY2025",
      arr: 320000,
      contractYears: 1,
      renewalDate: "2026-09-15",
      productsLicensed: ["Analytics"],
      primaryUseCases: [
        { text: "Connected fitness hardware & app engagement analytics", confidence: "HIGH", source: "Salesforce; Kaia call historical" },
        { text: "Subscription churn prediction and retention analytics", confidence: "MEDIUM", source: "Mike Torres confirmed in prior QBR" }
      ],
      stakeholders: [
        { name: "Mike Torres", title: "Director of Product", role: "Champion", confidence: "HIGH", source: "Salesforce + Kaia calls" },
        { name: "Amanda Lee", title: "VP Product Management", role: "Economic Buyer", confidence: "MEDIUM", source: "Salesforce contact record" },
        { name: "Chris Wallace", title: "Head of Data & Analytics", role: "Technical Evaluator", confidence: "MEDIUM", source: "Salesforce contact record" }
      ],
      accountTeam: { ae: "David Kim", se: "Sarah Thompson", csm: "Jordan Reyes", vc: "Kevin Colston" }
    },

    adoption: {
      wauTrend: [
        { week: "2025-W44", value: 90 },
        { week: "2025-W45", value: 88 },
        { week: "2025-W46", value: 85 },
        { week: "2025-W47", value: 86 },
        { week: "2025-W48", value: 82 },
        { week: "2025-W49", value: 80 },
        { week: "2025-W50", value: 78 },
        { week: "2025-W51", value: 72 },
        { week: "2025-W52", value: 68 },
        { week: "2026-W01", value: 70 },
        { week: "2026-W02", value: 72 },
        { week: "2026-W03", value: 69 },
        { week: "2026-W04", value: 67 },
        { week: "2026-W05", value: 65 },
        { week: "2026-W06", value: 63 },
        { week: "2026-W07", value: 62 },
        { week: "2026-W08", value: 60 },
        { week: "2026-W09", value: 61 },
        { week: "2026-W10", value: 58 },
        { week: "2026-W11", value: 57 },
        { week: "2026-W12", value: 55 },
        { week: "2026-W13", value: 56 },
        { week: "2026-W14", value: 54 },
        { week: "2026-W15", value: 55 }
      ],
      mauTrend: [
        { month: "2025-11", value: 210 },
        { month: "2025-12", value: 195 },
        { month: "2026-01", value: 182 },
        { month: "2026-02", value: 170 },
        { month: "2026-03", value: 158 },
        { month: "2026-04", value: 148 }
      ],
      trendDirection: "declining",
      trendSummary: "WAU has declined from 90 to 55 over the past 24 weeks (–39%). The decline began in November 2025 and has been consistent with no recovery signal. The drop correlates with Peloton's internal restructuring and headcount reductions that affected the product analytics team.",
      trendSource: "Amplitude MCP, project ID amp-peloton-001, queried 2026-04-15",
      annotations: [
        { week: "2025-W49", label: "Peloton restructuring announced — product team headcount reduced" },
        { week: "2026-W06", label: "Analytics team lead departed" }
      ]
    },

    relationshipContext: [
      {
        insight: "Mike Torres is the day-to-day champion but his authority is limited after the product org restructuring. Amanda Lee (VP PM) now controls the analytics budget and has not been engaged by the Amplitude team.",
        confidence: "MEDIUM",
        source: "David Kim AE note; Salesforce contact updates",
        category: "politics"
      },
      {
        insight: "Mixpanel is actively being evaluated as a lower-cost alternative to Amplitude. Cost reduction is a company-wide mandate following Peloton's FY2025 losses.",
        confidence: "HIGH",
        source: "Salesforce competitor field: 'Mixpanel — high threat'",
        category: "competitive"
      },
      {
        insight: "The analytics team lead who was the primary Amplitude power user departed in late January 2026. This created an institutional knowledge gap and reduced platform utilization.",
        confidence: "HIGH",
        source: "Amplitude MCP usage data + CSM note",
        category: "risk"
      },
      {
        insight: "Chris Wallace (Head of Data) expressed interest in consolidating onto fewer analytics tools. This could go either way — Amplitude could be the winner if we make the consolidation case, or the loser if Mixpanel is positioned as a lower-cost standard.",
        confidence: "MEDIUM",
        source: "CSM call notes, March 2026",
        category: "risk"
      }
    ],

    valueRealized: {
      summary: "Total estimated value realized: $980K annually. Value realization has been real but not well-documented — a core risk for the renewal conversation.",
      items: [
        {
          title: "Subscription Churn Reduction — Engagement-Based Early Warning",
          metric: "Estimated 1.8% reduction in connected subscription churn",
          methodology: "Amplitude retention analysis identified behavioral patterns (low class completion, reduced streaks) predicting churn 30 days in advance. CRM team used cohorts for targeted re-engagement. At-risk cohort churn reduced from 28% to 26.2%. 1.8pp × 400K avg active subscribers × $44/month subscription = ~$380K/yr retention value.",
          dollarValue: 380000,
          confidence: "MEDIUM",
          source: "CSM estimates; customer data not formally documented in QBR"
        },
        {
          title: "App Feature Adoption — Guided Analytics Drove Lanebreak Launch",
          metric: "35% faster feature adoption measurement vs. prior launch",
          methodology: "Amplitude used for Lanebreak (gaming fitness) launch instrumentation and funnel analysis. Product team credits faster iteration cycle. 35% time savings on analytics team = ~0.5 FTE × $120K loaded cost = $60K/yr.",
          dollarValue: 60000,
          confidence: "LOW",
          source: "Mike Torres noted in informal conversation with CSM; not documented formally"
        },
        {
          title: "Hardware-to-Digital Cross-Sell Analytics",
          metric: "Identified highest-value cross-sell cohort for app subscriptions",
          methodology: "Amplitude behavioral segmentation identified Bike+ owners with highest propensity for app-only subscription add-ons. Segment drove $540K in incremental subscription revenue (customer-reported, Q3 2025).",
          dollarValue: 540000,
          confidence: "MEDIUM",
          source: "Mike Torres email to CSM, September 2025"
        }
      ]
    },

    productHealth: {
      featureUsage: [
        { feature: "Event Segmentation", usage: "moderate", sessions: 380 },
        { feature: "Funnel Analysis", usage: "moderate", sessions: 290 },
        { feature: "Retention Analysis", usage: "light", sessions: 95 },
        { feature: "User Journeys / Pathfinder", usage: "light", sessions: 60 },
        { feature: "Dashboards", usage: "heavy", sessions: 820 },
        { feature: "Experiment", usage: "never", sessions: 0 }
      ],
      engagementTrend: "declining",
      dataHealth: {
        volumeTrend: "stable",
        taxonomyScore: 61,
        instrumentationGaps: ["Hardware telemetry events not connected to app behavioral events", "User identity resolution broken after app rewrite in Q4 2025 — some sessions not attributed to known users"]
      },
      underusedFeatures: [
        "Experiment — never used. If Peloton is considering A/B testing for conversion optimization, this is a hook to increase perceived value before renewal.",
        "Retention Analysis — significant under-utilization given that subscription churn is a company-defining metric for Peloton. Opportunity to drive a value realization session on this specific chart type."
      ]
    },

    strategy: {
      expansionPlays: [
        {
          product: "Amplitude Experiment (new)",
          rationale: "Peloton is actively trying to optimize the hardware-to-subscription conversion funnel. Experiment would let the team run structured A/B tests on onboarding flows. This could also be positioned as a defense against Mixpanel, which doesn't have native experimentation.",
          estimatedIncrementalValue: 80000,
          methodology: "Experiment add-on at SMB rate given current contract size. Value story: 2x experiment throughput on hardware-to-app conversion funnels.",
          confidence: "LOW",
          source: "Strategic recommendation; no direct customer signal yet"
        }
      ],
      riskFactors: [
        {
          risk: "Mixpanel is actively being evaluated as a lower-cost alternative. Cost pressure is the primary driver following Peloton's restructuring.",
          severity: "high",
          confidence: "HIGH",
          source: "Salesforce competitor field",
          mitigation: "Quantify switching cost (data migration, retraining, lost institutional knowledge) and present a value realization document showing $980K+ in annual value vs. $320K ARR."
        },
        {
          risk: "Economic buyer (Amanda Lee, VP PM) has not been engaged by Amplitude. The renewal could be decided without our champion having executive air cover.",
          severity: "high",
          confidence: "MEDIUM",
          source: "AE note; no record of Amanda Lee in call history",
          mitigation: "Request an executive briefing meeting with Amanda Lee focused on the churn reduction and cross-sell analytics value story."
        },
        {
          risk: "WAU declining 39% is a red flag that may be used by finance to justify non-renewal or downsell.",
          severity: "medium",
          confidence: "HIGH",
          source: "Amplitude MCP usage data",
          mitigation: "Reframe the utilization decline as a temporary gap tied to restructuring and team turnover, not product dissatisfaction. Offer a health check engagement."
        }
      ],
      renewalPositioning: "This is a defensive renewal. Lead with the total value realized ($980K+ vs. $320K ARR — a 3x return). Immediately address the Mixpanel threat with a switching cost analysis. The key is getting Amanda Lee in the room before the renewal decision is made informally.",
      pricingNotes: "Do not attempt to expand pricing on this renewal. Flat renewal at $320K is the target. Any price increase will accelerate a switch to Mixpanel. Consider a 1-year renewal with a built-in 6-month health check milestone to buy time to rebuild adoption."
    },

    valueHypothesis: null,

    competitiveLandscape: {
      currentTools: [
        { name: "Amplitude", product: "Analytics", maturity: "established", since: "2023", confidence: "HIGH", source: "Contract records", notes: "Current customer — under renewal evaluation." },
        { name: "Braze", product: "Customer Engagement", maturity: "established", since: "2022", confidence: "HIGH", source: "Salesforce", notes: "Marketing automation and push notifications. Integrated with Amplitude." }
      ],
      buyerIntent: "No G2 buyer intent signals detected. Evaluation appears to be driven by internal cost review rather than active vendor research.",
      amplitudeDifferentiators: [
        "Native experimentation platform that Mixpanel cannot match — critical if Peloton pursues subscription conversion optimization",
        "Behavioral cohort analysis for hardware-to-subscription cross-sell that is more powerful than Mixpanel's segmentation",
        "Existing institutional data and dashboards represent 3 years of behavioral history — irreplaceable switching cost"
      ],
      winLossPatterns: "Incumbent renewals in the Fitness/Consumer segment have an 80% retention rate when value realization is documented before the renewal conversation. Losses typically occur when cost is the sole decision criterion and the economic buyer is not engaged.",
      analystPositioning: "Amplitude positioned as a Leader in the 2025 Forrester Wave. Mixpanel positioned as a Contender — specifically called out as lacking enterprise-grade experimentation and cohort analysis. Use this to neutralize the cost-only evaluation."
    },

    externalContext: {
      recentNews: [
        { headline: "Peloton Reports Narrowing Losses in Q3 FY2026, Cost Reduction Plan on Track", date: "2026-02-06", url: "https://investor.onepeloton.com/news-releases/2026-02-06/", relevance: "Cost reduction focus directly drives the Mixpanel evaluation. Value realization narrative is essential to justify spend.", confidence: "HIGH", source: "Peloton Investor Relations" },
        { headline: "Peloton Announces Partnership with TikTok for Fitness Content Discovery", date: "2026-03-12", url: "https://www.cnbc.com/2026/03/12/peloton-tiktok-partnership/", relevance: "New content discovery channel creates new analytics requirements — potential new Amplitude use case.", confidence: "MEDIUM", source: "CNBC" }
      ],
      strategicPriorities: [
        { priority: "Reduce operating costs by 25% by end of FY2026", confidence: "HIGH", source: "Q3 FY2026 earnings call" },
        { priority: "Grow the app subscriber base without hardware dependency", confidence: "HIGH", source: "CEO letter to shareholders, Feb 2026" },
        { priority: "Expand content partnerships to reach non-hardware users", confidence: "MEDIUM", source: "TechCrunch coverage, Mar 2026" }
      ],
      industryTrends: "Connected fitness market stabilizing after post-COVID contraction. Platforms that can prove measurable health outcomes and engagement ROI are retaining subscribers at higher rates. Analytics tools that bridge hardware and digital engagement are increasingly differentiated.",
      firmographics: {
        founded: "2012",
        headquarters: "New York, NY",
        funding: "Public (NASDAQ: PTON)",
        techStack: ["AWS", "Python", "React Native", "Kafka", "Databricks", "Braze"],
        techStackSource: "Job postings + Clay enrichment"
      }
    },

    openQuestions: [
      { question: "Has Amanda Lee (VP PM) been briefed on the renewal? What is her current view of Amplitude's value?", owner: "AE (David Kim)", dueDate: "2026-04-25", priority: "high" },
      { question: "Can we schedule a formal value realization session with Mike Torres before the renewal conversation?", owner: "CSM (Jordan Reyes)", dueDate: "2026-05-01", priority: "high" },
      { question: "What is the specific Mixpanel pricing Peloton has received? Is this a formal RFP or informal evaluation?", owner: "AE (David Kim)", dueDate: "2026-04-30", priority: "high" },
      { question: "Is Chris Wallace's vendor consolidation comment a real initiative or passing remark?", owner: "AE (David Kim)", dueDate: "2026-05-15", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + renewal opportunity + 3 contacts; competitor field populated" },
      { source: "Amplitude MCP", status: "found", detail: "24 weeks WAU, 6 months MAU, feature usage data — declining trend confirmed" },
      { source: "Kaia / Outreach", status: "found", detail: "Historical call data; no new calls in past 60 days (signal in itself)" },
      { source: "Granola", status: "not-found", detail: "No internal meeting notes found for Peloton in past 90 days" },
      { source: "Slack", status: "found", detail: "2 threads in #peloton-renewal and #customer-success" },
      { source: "Glean / Drive", status: "not-found", detail: "No recent documents found; prior QBR deck is 6+ months old" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals detected" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount" },
      { source: "Web", status: "found", detail: "Earnings call, 2 press articles" }
    ]
  },

  // ============================================================
  // DOORDASH — Customer, Expansion
  // ============================================================
  "DoorDash": {
    type: "customer",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 62, medium: 28, low: 8, unconfirmed: 2, totalDataPoints: 49 },
    companyType: "public",

    healthScore: {
      score: 65,
      trend: "stable",
      components: {
        adoption: 70,
        engagement: 60,
        support: 75,
        stakeholder: 55
      }
    },

    dealTimeline: [
      { date: "2021-06-01", event: "Initial DoorDash Analytics contract signed — consumer delivery experience use case", type: "milestone" },
      { date: "2024-01-15", event: "Q4 2023 QBR — consumer-side ROI documented; 12% order completion rate improvement confirmed", type: "meeting", sourceUrl: "https://docs.google.com/presentation/d/1doordash-qbr-q4-2023/edit" },
      { date: "2025-10-20", event: "Lisa Chang introduced as VP Merchant Experience — new expansion champion identified", type: "milestone" },
      { date: "2026-01-20", event: "Prior ROI analysis shared with Lisa Chang — consumer-side $3M value confirmed", type: "meeting", sourceUrl: "https://docs.google.com/document/d/1doordash-roi-analysis-2026/edit" },
      { date: "2026-02-28", event: "Discovery call with Derek Williams (Sr. Director Product, Merchant) — Dasher analytics use case explored", type: "meeting", sourceUrl: "https://app.outreach.io/recordings/rec-20260228-doordash" },
      { date: "2026-03-12", event: "VC engaged — Kevin Colston expansion business case call with Lisa Chang", type: "meeting", sourceUrl: "https://app.outreach.io/recordings/rec-20260312-doordash" },
      { date: "2026-03-15", event: "AE shared internal DoorDash doc estimating $200M unrealized GMV from merchant onboarding drop-off", type: "milestone", sourceUrl: "https://amplitude.slack.com/archives/C04DOORDASH/p1742000000" },
      { date: "2027-01-15", event: "Contract renewal target — $720K+ ARR with full merchant deployment", type: "milestone" }
    ],

    priorVcEngagements: [
      { date: "2024-01-10", vc: "Kevin Colston", deliverable: "Consumer delivery funnel ROI model — 12% order completion improvement quantified", outcome: "Anchored Q1 2024 renewal at $350K base ARR; deal closed", outcomeType: "won", sourceUrl: "https://docs.google.com/spreadsheets/d/1doordash-roi-model-2024/edit" },
      { date: "2025-11-05", vc: "Kevin Colston", deliverable: "Merchant expansion opportunity sizing — $200M unrealized GMV business case", outcome: "In progress — expansion close target Q2 2026", outcomeType: "in-progress" }
    ],

    talkTrack: {
      nextMeeting: "Merchant analytics expansion proposal review with Lisa Chang and Derek Williams — May 1, 2026",
      keyMessages: [
        "Lead with the proven consumer-side ROI: 'The 12% order completion improvement on the consumer side is the proof point — the merchant onboarding funnel has the same structure and the same opportunity'",
        "Frame the $200M unrealized GMV stat Lisa's own team produced: 'This is your number, not ours — we're simply the analytics layer that helps you capture it'",
        "Position the expansion as CEO-priority coverage: 'Merchant experience was called out explicitly on your last earnings call — Amplitude gives the merchant team the same analytics firepower the consumer team already has'"
      ],
      objectionHandling: [
        { objection: "The merchant engineering team doesn't have bandwidth to instrument new events right now", response: "Offer the instrumentation bridge: 'We can include a professional services scoping session in the expansion agreement. Our implementation team has done this instrumentation for 12 marketplace accounts — we can reduce Nadia's team's lift by 60–70%.'" },
        { objection: "We already have consumer-side Amplitude working well — do we really need a separate expansion?", response: "Reframe as one platform, not two: 'This isn't a new tool — it's extending what's already working. The merchant team gets the same Amplitude instance, same governance, same training. The only new work is the instrumentation, which we'll support.'" }
      ],
      competitiveCounters: [
        { competitor: "Looker/dbt (internal BI)", counter: "Looker is your business metrics layer — Amplitude is the behavioral analytics layer. They're complementary. Looker can tell you merchant GMV dropped; Amplitude tells you exactly where in the onboarding funnel merchants are dropping off and why. You need both." }
      ]
    },

    supportSignals: {
      openTickets: 3,
      avgResolutionDays: 2.8,
      lastCsatScore: 3.8,
      lastCsatDate: "2026-03-10",
      escalations30d: 1,
      recentThemes: ["Dasher-side event schema configuration delays", "Dashboard performance on high-volume event queries", "Merchant instrumentation scoping questions"]
    },

    snapshot: {
      industry: "Marketplace / Logistics",
      segment: "Strategic",
      region: "NAMER",
      employees: 21000,
      revenue: "$10.7B",
      revenueSource: "10-K FY2025",
      arr: 600000,
      contractYears: 2,
      renewalDate: "2027-01-15",
      productsLicensed: ["Analytics"],
      primaryUseCases: [
        { text: "Consumer delivery experience funnel analytics (existing)", confidence: "HIGH", source: "Contract SOW; Amplitude MCP project data", sourceUrl: "https://amplitude.my.salesforce.com/001doordash-contract" },
        { text: "Merchant onboarding conversion optimization (expansion)", confidence: "HIGH", source: "Kaia call 2026-03-12; Slack #doordash-deal-room", sourceUrl: "https://app.outreach.io/recordings/rec-20260312-doordash" },
        { text: "Dasher-merchant matching behavioral analytics", confidence: "MEDIUM", source: "Kaia call 2026-02-28", sourceUrl: "https://app.outreach.io/recordings/rec-20260228-doordash" }
      ],
      stakeholders: [
        { name: "Lisa Chang", title: "VP Merchant Experience", role: "Champion / Executive Sponsor", confidence: "HIGH", source: "Kaia calls; Salesforce", sourceUrl: "https://amplitude.my.salesforce.com/001doordash-lisa" },
        { name: "Derek Williams", title: "Sr. Director Product, Merchant", role: "Technical Sponsor", confidence: "HIGH", source: "Kaia call 2026-02-28", sourceUrl: "https://app.outreach.io/recordings/rec-20260228-doordash" },
        { name: "Nadia Kowalski", title: "Director of Analytics Engineering", role: "Technical Evaluator", confidence: "MEDIUM", source: "Salesforce contact record", sourceUrl: "https://amplitude.my.salesforce.com/001doordash-nadia" }
      ],
      accountTeam: { ae: "Michael Santos", se: "Aisha Patel", csm: "Chris Nakamura", vc: "Kevin Colston" }
    },

    adoption: {
      wauTrend: [
        { week: "2025-W44", value: 200 },
        { week: "2025-W45", value: 198 },
        { week: "2025-W46", value: 202 },
        { week: "2025-W47", value: 205 },
        { week: "2025-W48", value: 200 },
        { week: "2025-W49", value: 197 },
        { week: "2025-W50", value: 203 },
        { week: "2025-W51", value: 195 },
        { week: "2025-W52", value: 190 },
        { week: "2026-W01", value: 204 },
        { week: "2026-W02", value: 207 },
        { week: "2026-W03", value: 205 },
        { week: "2026-W04", value: 208 },
        { week: "2026-W05", value: 210 },
        { week: "2026-W06", value: 208 },
        { week: "2026-W07", value: 212 },
        { week: "2026-W08", value: 209 },
        { week: "2026-W09", value: 211 },
        { week: "2026-W10", value: 213 },
        { week: "2026-W11", value: 210 },
        { week: "2026-W12", value: 214 },
        { week: "2026-W13", value: 208 },
        { week: "2026-W14", value: 211 },
        { week: "2026-W15", value: 210 }
      ],
      mauTrend: [
        { month: "2025-11", value: 480 },
        { month: "2025-12", value: 468 },
        { month: "2026-01", value: 490 },
        { month: "2026-02", value: 495 },
        { month: "2026-03", value: 502 },
        { month: "2026-04", value: 498 }
      ],
      trendDirection: "stable",
      trendSummary: "WAU has remained stable at 200–214 over the past 24 weeks, with a typical holiday dip in W51-W52. The consumer analytics team is a consistent, mature user base. Expansion is additive — the merchant analytics use case will bring a net-new cohort of users.",
      trendSource: "Amplitude MCP, project ID amp-doordash-001, queried 2026-04-15",
      annotations: [
        { week: "2025-W52", label: "Holiday period — typical usage dip" },
        { week: "2026-W05", label: "Q1 planning cycle — usage recovered" }
      ]
    },

    relationshipContext: [
      {
        insight: "Lisa Chang has CEO-level visibility on the merchant experience initiative. DoorDash's CEO mentioned merchant experience in the last earnings call as a company-level priority, not just a team initiative.",
        confidence: "HIGH",
        source: "Granola deal review notes 2026-02-20; Slack #doordash-deal-room",
        sourceUrl: "https://granola.ai/notes/doordash-deal-review-20260220",
        category: "champion"
      },
      {
        insight: "DoorDash's prior ROI analysis (from 2024 engagement) showed Amplitude helped improve consumer-side conversion by 12%. The merchant expansion directly leverages this proven ROI narrative.",
        confidence: "HIGH",
        source: "Glean / Drive prior ROI analysis doc 2026-01-20",
        sourceUrl: "https://docs.google.com/document/d/1doordash-roi-analysis-2026/edit",
        category: "sentiment"
      },
      {
        insight: "Internal DoorDash document shared by AE estimates merchant onboarding drop-off costs approximately $200M in unrealized GMV annually. This is the core business case for the expansion.",
        confidence: "HIGH",
        source: "Slack #doordash-deal-room 2026-03-15 (AE shared internal doc)",
        sourceUrl: "https://amplitude.slack.com/archives/C04DOORDASH/p1742000000",
        category: "decision-process"
      },
      {
        insight: "No competing product analytics tool is deployed on the merchant side — this is greenfield. The expansion is additive with no displacement risk.",
        confidence: "HIGH",
        source: "MOCK_COMPETITIVE data; Nadia Kowalski confirmed no merchant analytics tooling",
        category: "competitive"
      }
    ],

    valueRealized: {
      summary: "Total estimated value realized: $3.4M annually from the existing consumer-side deployment. Merchant expansion value is incremental and separate.",
      items: [
        {
          title: "Consumer Delivery Funnel Conversion Optimization",
          metric: "+12% improvement in order completion rate (consumer side)",
          methodology: "Amplitude funnel analysis identified checkout and payment friction reducing order completion. UX changes shipped in Q2 2024. 12% lift × $10B+ consumer GMV × 1% take rate impact = $12M, conservatively attributed 25% to analytics tooling = $3M.",
          dollarValue: 3000000,
          confidence: "HIGH",
          source: "Glean / Drive prior ROI analysis doc; customer-reported in QBR 2024-Q4",
          sourceUrl: "https://docs.google.com/document/d/1doordash-roi-analysis-2026/edit"
        },
        {
          title: "Dasher Supply Analytics — Reduced Estimated Delivery Time Variance",
          metric: "8% reduction in estimated delivery time variance for high-demand periods",
          methodology: "Amplitude behavioral analytics helped identify Dasher acceptance patterns during peak demand. Operations team used insights to adjust incentive timing. 8% EDT variance reduction × $400M annual customer service cost for late deliveries × 10% attribution = $3.2M; conservative estimate = $400K.",
          dollarValue: 400000,
          confidence: "MEDIUM",
          source: "Derek Williams noted in Kaia call 2026-02-28; estimate based on public GMV data",
          sourceUrl: "https://app.outreach.io/recordings/rec-20260228-doordash"
        }
      ]
    },

    productHealth: {
      featureUsage: [
        { feature: "Funnel Analysis", usage: "heavy", sessions: 2100 },
        { feature: "Event Segmentation", usage: "heavy", sessions: 1850 },
        { feature: "Dashboards", usage: "heavy", sessions: 1620 },
        { feature: "Retention Analysis", usage: "moderate", sessions: 490 },
        { feature: "Experiment", usage: "light", sessions: 85 },
        { feature: "Audiences", usage: "never", sessions: 0 }
      ],
      engagementTrend: "stable",
      dataHealth: {
        volumeTrend: "growing",
        taxonomyScore: 86,
        instrumentationGaps: ["Merchant-side events not yet instrumented — required for expansion use case", "Dasher app events partially instrumented; server-side events missing"]
      },
      underusedFeatures: [
        "Audiences — never used. Given DoorDash's focus on consumer segmentation and merchant cohorts, this is a direct fit for the merchant retention use case.",
        "Experiment — light usage (85 sessions). The merchant onboarding optimization use case is a natural fit for structured A/B testing — should be positioned as part of the expansion."
      ]
    },

    strategy: {
      expansionPlays: [
        {
          product: "Analytics seat expansion (merchant analytics team)",
          rationale: "The merchant analytics expansion brings a net-new team of 80+ analysts, product managers, and ops leads who have no current Amplitude access. The merchant onboarding use case is distinct from the consumer deployment.",
          estimatedIncrementalValue: 250000,
          methodology: "80 incremental seats at blended enterprise rate. Current deal at $350K base; expansion target $600K total.",
          confidence: "HIGH",
          source: "Lisa Chang confirmed headcount in Kaia call 2026-03-12"
        },
        {
          product: "Amplitude Experiment (new)",
          rationale: "The merchant onboarding funnel optimization use case is ideally served by structured A/B testing. Lisa Chang's team wants to run experiments on onboarding UX changes. Currently using a manual process.",
          estimatedIncrementalValue: 120000,
          methodology: "Experiment add-on at enterprise rate. Value: $200M in unrealized GMV × 5% addressable through experiments × 50% attribution = $5M potential; pricing reflects a fraction of this.",
          confidence: "MEDIUM",
          source: "Lisa Chang, Kaia call 2026-03-12"
        }
      ],
      riskFactors: [
        {
          risk: "Merchant analytics instrumentation is a multi-quarter engineering investment. If the engineering roadmap slips, value realization will be delayed.",
          severity: "medium",
          confidence: "MEDIUM",
          source: "Nadia Kowalski noted engineering bandwidth constraints in Salesforce notes",
          mitigation: "Offer a professional services instrumentation scoping session as part of the expansion agreement."
        }
      ],
      renewalPositioning: "Renewal is 9 months away (Jan 2027) — not a near-term concern. The expansion is the priority. Lead with the $3.4M value realized narrative from the consumer side as the foundation for merchant expansion ROI. The DoorDash CEO's public endorsement of merchant experience as a priority gives the expansion strong internal air cover.",
      pricingNotes: "Current base contract is $350K base (consumer). Expansion target is $600K total ARR ($250K incremental for merchant seats + $120K potential for Experiment). The 2-year renewal in Jan 2027 should target $720K+ with full merchant deployment."
    },

    valueHypothesis: null,

    competitiveLandscape: {
      currentTools: [
        { name: "Amplitude", product: "Analytics", maturity: "established", since: "2021", confidence: "HIGH", source: "Contract records", sourceUrl: "https://amplitude.my.salesforce.com/001doordash-contract", notes: "Consumer delivery experience analytics. 480+ MAU." },
        { name: "Segment", product: "CDP", maturity: "deeply-embedded", since: "2020", confidence: "HIGH", source: "Nadia Kowalski confirmed", sourceUrl: "https://app.outreach.io/recordings/rec-20260228-doordash", notes: "Central data collection layer feeding Amplitude and other tools. Not competitive." }
      ],
      buyerIntent: "No G2 buyer intent signals detected. This is a customer-led expansion, not an externally-driven evaluation.",
      amplitudeDifferentiators: [
        "Proven ROI on consumer side (12% conversion improvement) creates low-risk narrative for merchant expansion",
        "Single behavioral data platform spanning consumer, Dasher, and merchant experience — no other vendor can match this cross-entity analytics scope",
        "Experiment platform built natively — critical for the structured A/B testing use case Lisa Chang's team needs"
      ],
      winLossPatterns: "DoorDash is an existing customer expansion — no competitive displacement needed. The primary risk is scope creep on the engineering side slowing activation.",
      analystPositioning: "Amplitude recognized in 2025 Gartner Magic Quadrant for Digital Analytics. DoorDash's use case maps directly to the marketplace analytics category where Amplitude has the most customer references."
    },

    externalContext: {
      recentNews: [
        { headline: "DoorDash Reports Record Q4 2025 Revenue, Merchant GMV Up 18% YoY", date: "2026-02-13", url: "https://investor.doordash.com/news-releases/2026-02-13/", relevance: "Merchant GMV growth reinforces the strategic priority of merchant analytics — growing the base makes onboarding optimization more valuable.", confidence: "HIGH", source: "DoorDash Investor Relations" },
        { headline: "DoorDash Launches DashPass for Business, Targeting Enterprise Catering Market", date: "2026-03-18", url: "https://techcrunch.com/2026/03/18/doordash-dashpass-business/", relevance: "New enterprise catering channel creates new merchant onboarding analytics requirements.", confidence: "MEDIUM", source: "TechCrunch" }
      ],
      strategicPriorities: [
        { priority: "Improve merchant onboarding speed and reduce time-to-first-order", confidence: "HIGH", source: "CEO DoorDash Q4 2025 earnings call" },
        { priority: "Expand international marketplace operations", confidence: "MEDIUM", source: "Press coverage; not directly relevant to NAMER expansion" },
        { priority: "Grow DashPass subscriber base through merchant-exclusive offers", confidence: "MEDIUM", source: "DashPass for Business launch announcement" }
      ],
      industryTrends: "On-demand delivery platforms are shifting from consumer-acquisition growth to merchant platform depth. Analytics that span the merchant lifecycle (onboarding → retention → GMV growth) are becoming strategic infrastructure, not optional tools.",
      firmographics: {
        founded: "2013",
        headquarters: "San Francisco, CA",
        funding: "Public (NYSE: DASH)",
        techStack: ["AWS", "Kotlin", "Python", "Kafka", "Segment", "dbt", "Snowflake"],
        techStackSource: "Clay enrichment + job postings + Nadia Kowalski confirmation"
      }
    },

    openQuestions: [
      { question: "What is the merchant analytics team's engineering instrumentation timeline for new events?", owner: "SE (Aisha Patel)", dueDate: "2026-05-01", priority: "high" },
      { question: "Is Lisa Chang willing to co-present the merchant analytics business case at an internal DoorDash leadership review?", owner: "AE (Michael Santos)", dueDate: "2026-05-15", priority: "medium" },
      { question: "Can we get a commitment on the Experiment add-on as part of the expansion agreement?", owner: "VC (Kevin Colston)", dueDate: "2026-06-30", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + expansion opportunity + 3 contacts" },
      { source: "Amplitude MCP", status: "found", detail: "24 weeks WAU, 6 months MAU, feature usage data" },
      { source: "Kaia / Outreach", status: "found", detail: "5 call transcripts analyzed (Jan–Apr 2026)" },
      { source: "Granola", status: "found", detail: "3 meeting notes including deal review and VP Merchant Experience call" },
      { source: "Slack", status: "found", detail: "12 threads across #doordash-deal-room, #marketplace-deals, #strategic-accounts" },
      { source: "Glean / Drive", status: "found", detail: "4 documents: marketplace playbook, prior ROI analysis, competitive brief, deal strategy" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals detected" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount" },
      { source: "Web", status: "found", detail: "Earnings call, 2 press articles" }
    ]
  },

  // ============================================================
  // INSTACART — Customer, Renewal
  // ============================================================
  "Instacart": {
    type: "customer",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 70, medium: 22, low: 6, unconfirmed: 2, totalDataPoints: 45 },
    companyType: "public",

    healthScore: {
      score: 82,
      trend: "up",
      components: {
        adoption: 88,
        engagement: 80,
        support: 85,
        stakeholder: 75
      }
    },

    dealTimeline: [
      { date: "2022-07-01", event: "Initial Instacart Analytics + Audiences contract signed — shopper routing and consumer funnel use cases", type: "milestone" },
      { date: "2025-10-01", event: "Shopper operations team onboarded to Amplitude — expanding beyond consumer analytics team", type: "milestone" },
      { date: "2025-12-05", event: "Kevin Liu discovery call — CFO ROI question surfaces for first time; renewal business case flagged", type: "meeting", sourceUrl: "https://app.outreach.io/recordings/rec-20251205-instacart" },
      { date: "2026-01-10", event: "Merchant retailer analytics team onboarded — 3 distinct teams now on Amplitude", type: "milestone" },
      { date: "2026-03-15", event: "Granola renewal planning session — CFO angle confirmed; VC engaged for value realization document", type: "meeting", sourceUrl: "https://granola.ai/notes/instacart-renewal-20260315" },
      { date: "2026-03-28", event: "Kevin Liu Kaia call — shopper routing ROI confirmed; Experiment interest expressed", type: "meeting", sourceUrl: "https://app.outreach.io/recordings/rec-20260328-instacart" },
      { date: "2026-04-02", event: "CSM flags Slack thread: CFO Diana Chen asking hard ROI questions ahead of renewal", type: "risk", sourceUrl: "https://amplitude.slack.com/archives/C04INSTACART/p1743548400" },
      { date: "2026-07-01", event: "Contract renewal — target $550–580K ARR for 2-year, or $520K flat for 3-year with Experiment bundle", type: "milestone" }
    ],

    priorVcEngagements: [
      { date: "2024-06-15", vc: "Kevin Colston", deliverable: "Shopper routing efficiency ROI model — 15% orders-per-shift improvement quantified", outcome: "Anchored Year 2 renewal at $520K ARR; deal closed at 105% of prior ARR", outcomeType: "won", sourceUrl: "https://docs.google.com/spreadsheets/d/1instacart-roi-model-2024/edit" },
      { date: "2026-04-10", vc: "Kevin Colston", deliverable: "CFO-grade value realization document — $5.8M annual value across 3 use cases, methodology disclosed", outcome: "In progress — target delivery 6 weeks before June 30 renewal", outcomeType: "in-progress", sourceUrl: "https://docs.google.com/document/d/1instacart-cfo-value-doc-2026/edit" }
    ],

    talkTrack: {
      nextMeeting: "CFO-ready value review with Kevin Liu and Maria Gonzalez — May 15, 2026",
      keyMessages: [
        "Lead with the shopper efficiency number — $4.5M in documented annual value from 15% more orders per shopper shift. This is the most finance-ready metric in the portfolio.",
        "Frame the renewal as a 3x ROI investment: '$520K in, $5.8M in documented annual value out. The CFO is asking the right question — here's the rigorous answer.'",
        "The 56% WAU growth story is your proof of organizational depth: 'You're not renewing a tool — you're renewing infrastructure that spans 4 teams and 340 users. The switching cost alone exceeds the contract value.'"
      ],
      objectionHandling: [
        { objection: "Diana Chen (CFO) wants a rigorous ROI methodology, not anecdotes", response: "Lead with the shopper efficiency model: 'We used your own operational data — 50K active shoppers, $3 revenue per order, 4 orders per shift. The math is fully disclosed and auditable. We can provide a methodology appendix for Diana's review before the renewal conversation.'" },
        { objection: "Can we negotiate a price reduction given the budget environment?", response: "Reframe the value-to-cost ratio: 'At $520K, you're paying 9 cents for every dollar of documented value. A price reduction negotiation starts from the wrong premise — the question is whether $5.8M in annual value justifies $520K, and the answer is clearly yes. We can discuss term length instead.'" }
      ],
      competitiveCounters: [
        { competitor: "Looker (internal BI)", counter: "Looker tells Diana how much GMV moved. Amplitude tells Kevin's team why it moved and what to do next. You need both — Amplitude is not a Looker replacement, it's the product analytics layer Looker cannot provide." }
      ]
    },

    supportSignals: {
      openTickets: 2,
      avgResolutionDays: 1.8,
      lastCsatScore: 4.6,
      lastCsatDate: "2026-03-20",
      escalations30d: 0,
      recentThemes: ["Retailer portal event connection questions", "Server-side shopper event instrumentation gaps", "Audiences activation for re-engagement use case"]
    },

    snapshot: {
      industry: "Marketplace / Grocery",
      segment: "Strategic",
      region: "NAMER",
      employees: 3400,
      revenue: "$3.2B",
      revenueSource: "10-K FY2025",
      arr: 520000,
      contractYears: 2,
      renewalDate: "2026-07-01",
      productsLicensed: ["Analytics", "Audiences"],
      primaryUseCases: [
        { text: "Shopper routing & fulfillment efficiency analytics", confidence: "HIGH", source: "Kevin Liu Kaia call 2026-03-28; contract SOW", sourceUrl: "https://app.outreach.io/recordings/rec-20260328-instacart" },
        { text: "Consumer grocery shopping funnel optimization", confidence: "HIGH", source: "Amplitude MCP — heavy Funnel Analysis usage" },
        { text: "Merchant/retailer storefront performance analytics", confidence: "MEDIUM", source: "Glean doc: Instacart Amplitude usage summary", sourceUrl: "https://docs.google.com/document/d/1instacart-amplitude-usage-summary/edit" }
      ],
      stakeholders: [
        { name: "Kevin Liu", title: "Sr. Director of Analytics", role: "Champion", confidence: "HIGH", source: "Salesforce + Kaia calls", sourceUrl: "https://amplitude.my.salesforce.com/001instacart-kevin" },
        { name: "Maria Gonzalez", title: "VP Product, Consumer Experience", role: "Executive Sponsor", confidence: "HIGH", source: "Salesforce; confirmed by Kevin Liu", sourceUrl: "https://amplitude.my.salesforce.com/001instacart-maria" },
        { name: "Patrick O'Malley", title: "Director of Data Engineering", role: "Technical Owner", confidence: "MEDIUM", source: "Salesforce contact", sourceUrl: "https://amplitude.my.salesforce.com/001instacart-patrick" },
        { name: "Diana Chen", title: "CFO (indirect)", role: "Economic Gatekeeper", confidence: "MEDIUM", source: "Slack thread: CSM note about CFO asking ROI questions", sourceUrl: "https://amplitude.slack.com/archives/C04INSTACART/p1743548400" }
      ],
      accountTeam: { ae: "Rachel Foster", se: "Brian Choi", csm: "Mei Nakamura", vc: "Kevin Colston" }
    },

    adoption: {
      wauTrend: [
        { week: "2025-W44", value: 180 },
        { week: "2025-W45", value: 185 },
        { week: "2025-W46", value: 190 },
        { week: "2025-W47", value: 192 },
        { week: "2025-W48", value: 195 },
        { week: "2025-W49", value: 198 },
        { week: "2025-W50", value: 200 },
        { week: "2025-W51", value: 205 },
        { week: "2025-W52", value: 202 },
        { week: "2026-W01", value: 210 },
        { week: "2026-W02", value: 215 },
        { week: "2026-W03", value: 218 },
        { week: "2026-W04", value: 222 },
        { week: "2026-W05", value: 228 },
        { week: "2026-W06", value: 232 },
        { week: "2026-W07", value: 238 },
        { week: "2026-W08", value: 242 },
        { week: "2026-W09", value: 248 },
        { week: "2026-W10", value: 252 },
        { week: "2026-W11", value: 258 },
        { week: "2026-W12", value: 262 },
        { week: "2026-W13", value: 268 },
        { week: "2026-W14", value: 274 },
        { week: "2026-W15", value: 280 }
      ],
      mauTrend: [
        { month: "2025-11", value: 420 },
        { month: "2025-12", value: 435 },
        { month: "2026-01", value: 458 },
        { month: "2026-02", value: 478 },
        { month: "2026-03", value: 498 },
        { month: "2026-04", value: 515 }
      ],
      trendDirection: "growing",
      trendSummary: "WAU has grown consistently from 180 to 280 (+56%) over 24 weeks with no dips or plateaus. This is the strongest adoption trajectory in the portfolio. The growth reflects expansion from the consumer analytics team to the shopper operations and merchant retailer teams in Q1 2026.",
      trendSource: "Amplitude MCP, project ID amp-instacart-001, queried 2026-04-15",
      annotations: [
        { week: "2026-W01", label: "Shopper operations team onboarded" },
        { week: "2026-W08", label: "Merchant retailer analytics team added" }
      ]
    },

    relationshipContext: [
      {
        insight: "Kevin Liu is a deeply embedded power user who has built his team's entire analytics practice around Amplitude. He told the CSM he would advocate strongly for renewal, but needs CFO-ready ROI documentation.",
        confidence: "HIGH",
        source: "Kaia call 2026-03-28; Granola renewal planning notes 2026-03-15",
        sourceUrl: "https://app.outreach.io/recordings/rec-20260328-instacart",
        category: "champion"
      },
      {
        insight: "The CFO (Diana Chen) is asking hard questions about analytics ROI ahead of the renewal. This is a new dynamic — prior renewals were champion-led. The VC needs to build a CFO-grade value story.",
        confidence: "HIGH",
        source: "Slack #instacart-renewal 2026-04-02 (CSM note)",
        sourceUrl: "https://amplitude.slack.com/archives/C04INSTACART/p1743548400",
        category: "decision-process"
      },
      {
        insight: "Instacart has 340+ monthly active Amplitude users across 4 teams — the highest adoption rate of any grocery/marketplace account. This depth of adoption creates very high switching cost.",
        confidence: "HIGH",
        source: "Amplitude MCP + Glean doc: Instacart usage summary",
        sourceUrl: "https://docs.google.com/document/d/1instacart-amplitude-usage-summary/edit",
        category: "sentiment"
      },
      {
        insight: "No competitive threat identified. Amplitude is deeply embedded and there is no RFP or informal evaluation underway. The renewal risk is purely about demonstrating CFO-grade ROI.",
        confidence: "HIGH",
        source: "Salesforce competitor field: no competitor listed",
        sourceUrl: "https://amplitude.my.salesforce.com/001instacart-competitive",
        category: "competitive"
      }
    ],

    valueRealized: {
      summary: "Total estimated value realized: $5.8M annually. Strong value across 3 measured use cases. The CFO narrative needs to center on the shopper efficiency gains, which are the most quantifiable.",
      items: [
        {
          title: "Shopper Routing Efficiency — Reduced Pick Time per Order",
          metric: "17% improvement in on-time delivery rate; 15% increase in orders completed per shopper shift",
          methodology: "Amplitude analytics identified path inefficiencies in the shopper pick-pack-deliver workflow. Product changes shipped Q1–Q2 2025. 15% more orders/shift × 50K active shoppers × avg 4 orders/shift × $3 Instacart revenue/order × 250 working days × attribution factor of 20% = $4.5M.",
          dollarValue: 4500000,
          confidence: "HIGH",
          source: "Instacart public case study (amplitude.com/customers/instacart); confirmed by Kevin Liu",
          sourceUrl: "https://amplitude.com/customers/instacart"
        },
        {
          title: "Consumer Grocery Funnel Optimization — Cart Abandonment Reduction",
          metric: "8% reduction in cart abandonment rate",
          methodology: "Funnel analysis identified category browse-to-cart friction points. UX changes deployed Q3 2025. 8% cart abandonment reduction × $3.2B GMV × 0.5% take rate impact = $1.28M; attribution factor 50% = $640K.",
          dollarValue: 640000,
          confidence: "MEDIUM",
          source: "Kevin Liu email to CSM, October 2025"
        },
        {
          title: "Merchant Catalog Completeness — Out-of-Stock Incident Reduction",
          metric: "29% increase in merchant catalog completion rate",
          methodology: "Amplitude analytics surfaced which retailer catalog gaps drove the most abandoned carts. Retailer success team used cohorts to prioritize merchant outreach. 29% catalog improvement × estimated $2.3M annual revenue at risk from catalog gaps × 30% attribution = $690K.",
          dollarValue: 690000,
          confidence: "MEDIUM",
          source: "Instacart case study; Patrick O'Malley confirmed the merchant catalog initiative",
          sourceUrl: "https://amplitude.com/customers/instacart"
        }
      ]
    },

    productHealth: {
      featureUsage: [
        { feature: "Funnel Analysis", usage: "heavy", sessions: 2480 },
        { feature: "Event Segmentation", usage: "heavy", sessions: 2100 },
        { feature: "Dashboards", usage: "heavy", sessions: 1950 },
        { feature: "Retention Analysis", usage: "moderate", sessions: 680 },
        { feature: "Audiences", usage: "moderate", sessions: 420 },
        { feature: "Experiment", usage: "light", sessions: 110 }
      ],
      engagementTrend: "growing",
      dataHealth: {
        volumeTrend: "growing",
        taxonomyScore: 88,
        instrumentationGaps: ["Server-side shopper events partially instrumented — some Dasher-side events not flowing to Amplitude", "Retailer portal events not yet connected to the main project"]
      },
      underusedFeatures: [
        "Experiment — light usage (110 sessions). Given the active funnel optimization work, structured A/B testing would accelerate the shopper and consumer experience improvements. Strong expansion play.",
        "Audiences activation — used moderately but not connected to any downstream activation tool yet. Connecting to email or push could amplify the re-engagement use case."
      ]
    },

    strategy: {
      expansionPlays: [
        {
          product: "Amplitude Experiment",
          rationale: "Instacart's product team is running manual experiments on shopper routing and consumer funnel changes. Structured A/B testing would accelerate iteration velocity by 2-3x. Kevin Liu has expressed interest.",
          estimatedIncrementalValue: 150000,
          methodology: "Experiment add-on at enterprise rate. Value: 3x experiment throughput on shopper and consumer funnels × $5.8M value realized base = significant multiplier on existing ROI.",
          confidence: "MEDIUM",
          source: "Kevin Liu mentioned experimentation interest in Kaia call 2026-03-28"
        }
      ],
      riskFactors: [
        {
          risk: "CFO (Diana Chen) is scrutinizing analytics ROI for the first time ahead of this renewal. If the value realization story is not compelling enough for a finance audience, the renewal could be delayed or downsized.",
          severity: "medium",
          confidence: "HIGH",
          source: "Slack #instacart-renewal 2026-04-02",
          mitigation: "Build a CFO-grade value realization document with fully-loaded ROI calculation, methodology disclosure, and comparable benchmarks. Target completion 6 weeks before renewal date."
        }
      ],
      renewalPositioning: "This is a high-confidence renewal with an exceptional adoption story. Lead with the $5.8M value realized narrative and the 56% WAU growth as proof of organizational depth. The CFO angle should be addressed proactively — frame the renewal as a 3x ROI investment, not a cost line. Consider proposing a 3-year renewal to lock in strategic partnership status.",
      pricingNotes: "Current ARR is $520K. Given the strong adoption trajectory and 3-team deployment, a 5–10% price increase on renewal is defensible. Position as $550–$580K for a 2-year renewal, or $520K flat for a 3-year commitment that includes Experiment as a bundle."
    },

    valueHypothesis: null,

    competitiveLandscape: {
      currentTools: [
        { name: "Amplitude", product: "Analytics + Audiences", maturity: "deeply-embedded", since: "2022", confidence: "HIGH", source: "Contract records", sourceUrl: "https://amplitude.my.salesforce.com/001instacart-contract", notes: "340+ MAU across 4 teams. Highest adoption in grocery/marketplace segment." },
        { name: "Looker", product: "BI / Dashboards", maturity: "deeply-embedded", since: "2020", confidence: "HIGH", source: "Patrick O'Malley confirmed", notes: "Primary BI tool for business stakeholders. Complementary to Amplitude, not competitive." }
      ],
      buyerIntent: "No G2 buyer intent signals detected. No competitive evaluation underway.",
      amplitudeDifferentiators: [
        "Four-year deployment with institutional behavioral data across consumer, shopper, and merchant surfaces — irreplaceable competitive moat",
        "340+ MAUs represents a deeply trained user base; switching cost in training and institutional knowledge is extremely high",
        "Audiences product enables activation of behavioral segments — no point-solution competitor can match this breadth"
      ],
      winLossPatterns: "No competitive risk identified. Renewal pattern for deeply-embedded grocery/marketplace customers is 95%+ retention. The only risk is CFO scrutiny, not competitive displacement.",
      analystPositioning: "Amplitude's publicly referenced Instacart case study is one of the company's strongest marketplace references. This adds credibility to any external benchmarking the CFO may conduct."
    },

    externalContext: {
      recentNews: [
        { headline: "Instacart Reports Strong Q4 2025 Grocery Transaction Volume, GTV Up 14%", date: "2026-02-25", url: "https://investors.instacart.com/news-releases/2026-02-25/", relevance: "Growing transaction volume increases the value of funnel optimization and shopper efficiency analytics.", confidence: "HIGH", source: "Instacart Investor Relations" },
        { headline: "Instacart Expands Retailer Technology Platform with New Merchant Analytics Suite", date: "2026-03-10", url: "https://techcrunch.com/2026/03/10/instacart-merchant-analytics/", relevance: "Merchant analytics platform investment aligns with the Amplitude merchant storefront use case.", confidence: "HIGH", source: "TechCrunch" }
      ],
      strategicPriorities: [
        { priority: "Improve shopper fulfillment efficiency and order accuracy at scale", confidence: "HIGH", source: "Q4 2025 earnings call; Kevin Liu confirmed" },
        { priority: "Build out retailer technology platform as a SaaS revenue stream", confidence: "HIGH", source: "Instacart platform announcement; press coverage" },
        { priority: "Expand Instacart+ subscriber base through improved consumer experience", confidence: "MEDIUM", source: "Q4 2025 earnings call" }
      ],
      industryTrends: "Grocery delivery platforms are evolving from logistics plays to full-stack retail technology providers. Data and analytics are becoming a merchant-facing product, not just an internal tool. Platforms that can measure end-to-end grocery journeys (browse → fulfill → repeat) are gaining share.",
      firmographics: {
        founded: "2012",
        headquarters: "San Francisco, CA",
        funding: "Public (NASDAQ: CART)",
        techStack: ["AWS", "Python", "Ruby on Rails", "Kafka", "Snowflake", "dbt", "Looker"],
        techStackSource: "Clay enrichment + job postings"
      }
    },

    openQuestions: [
      { question: "What specific ROI metrics does Diana Chen (CFO) want to see in the renewal business case?", owner: "CSM (Mei Nakamura)", dueDate: "2026-04-30", priority: "high" },
      { question: "Can Kevin Liu facilitate a brief intro meeting with Maria Gonzalez (VP Product) to reinforce executive alignment?", owner: "AE (Rachel Foster)", dueDate: "2026-05-10", priority: "medium" },
      { question: "Should we propose a 2-year or 3-year renewal? What is Kevin Liu's read on finance appetite for multi-year commitment?", owner: "AE (Rachel Foster)", dueDate: "2026-05-15", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + renewal opportunity + 4 contacts" },
      { source: "Amplitude MCP", status: "found", detail: "24 weeks WAU, 6 months MAU, feature usage — strong growth confirmed" },
      { source: "Kaia / Outreach", status: "found", detail: "2 call transcripts (Mar–Apr 2026)" },
      { source: "Granola", status: "found", detail: "2 renewal planning session notes" },
      { source: "Slack", status: "found", detail: "4 threads in #instacart-renewal and #customer-success" },
      { source: "Glean / Drive", status: "found", detail: "5 documents: value realization framework, case study, renewal playbook, usage summary" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount" },
      { source: "Web", status: "found", detail: "Earnings call, 2 press articles, public case study" }
    ]
  },

  // ============================================================
  // AIRBNB — Customer, Expansion
  // ============================================================
  "Airbnb": {
    type: "customer",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 65, medium: 25, low: 8, unconfirmed: 2, totalDataPoints: 54 },
    companyType: "public",

    snapshot: {
      industry: "Travel / Marketplace",
      segment: "Strategic",
      region: "NAMER",
      employees: 6900,
      revenue: "$10.0B",
      revenueSource: "10-K FY2025",
      arr: 850000,
      contractYears: 2,
      renewalDate: "2027-01-15",
      productsLicensed: ["Analytics"],
      primaryUseCases: [
        { text: "Booking funnel conversion analytics (existing)", confidence: "HIGH", source: "Contract SOW; Amplitude MCP project data" },
        { text: "Guest search & recommendation experience analytics (expansion)", confidence: "HIGH", source: "Kaia call 2026-03-18; David Park confirmed" },
        { text: "Host retention and churn early warning analytics (expansion)", confidence: "HIGH", source: "Kaia call 2026-04-02; Mei Lin" },
        { text: "Experience Quality Score behavioral signals", confidence: "MEDIUM", source: "Kaia call 2026-04-10" }
      ],
      stakeholders: [
        { name: "David Park", title: "VP Product Analytics", role: "Champion / Executive Sponsor", confidence: "HIGH", source: "Kaia calls + Slack confirmation" },
        { name: "Mei Lin", title: "Director of Host Product", role: "Business Sponsor (expansion)", confidence: "HIGH", source: "Kaia call 2026-04-02" },
        { name: "Carlos Rivera", title: "Sr. Director Data Engineering", role: "Technical Owner", confidence: "MEDIUM", source: "Salesforce contact" },
        { name: "Tanya Gupta", title: "VP Engineering, Trust & Safety", role: "Stakeholder", confidence: "LOW", source: "Salesforce contact; not yet engaged" }
      ],
      accountTeam: { ae: "Sarah Mitchell", se: "Ryan Chen", csm: "Priya Sharma", vc: "Kevin Colston" }
    },

    adoption: {
      wauTrend: [
        { week: "2025-W44", value: 250 },
        { week: "2025-W45", value: 255 },
        { week: "2025-W46", value: 258 },
        { week: "2025-W47", value: 262 },
        { week: "2025-W48", value: 260 },
        { week: "2025-W49", value: 265 },
        { week: "2025-W50", value: 270 },
        { week: "2025-W51", value: 268 },
        { week: "2025-W52", value: 260 },
        { week: "2026-W01", value: 272 },
        { week: "2026-W02", value: 278 },
        { week: "2026-W03", value: 282 },
        { week: "2026-W04", value: 288 },
        { week: "2026-W05", value: 292 },
        { week: "2026-W06", value: 295 },
        { week: "2026-W07", value: 300 },
        { week: "2026-W08", value: 305 },
        { week: "2026-W09", value: 310 },
        { week: "2026-W10", value: 315 },
        { week: "2026-W11", value: 318 },
        { week: "2026-W12", value: 325 },
        { week: "2026-W13", value: 330 },
        { week: "2026-W14", value: 336 },
        { week: "2026-W15", value: 340 }
      ],
      mauTrend: [
        { month: "2025-11", value: 580 },
        { month: "2025-12", value: 570 },
        { month: "2026-01", value: 610 },
        { month: "2026-02", value: 640 },
        { month: "2026-03", value: 672 },
        { month: "2026-04", value: 695 }
      ],
      trendDirection: "growing",
      trendSummary: "WAU has grown from 250 to 340 (+36%) over 24 weeks with consistent upward momentum. Growth accelerated in January 2026 following expansion of Amplitude access to the host product team. The booking and payments org remains the core user base, with host analytics as the fastest-growing new cohort.",
      trendSource: "Amplitude MCP, project ID amp-airbnb-001, queried 2026-04-15",
      annotations: [
        { week: "2026-W02", label: "Host product team onboarded to Amplitude" },
        { week: "2026-W10", label: "Guest experience analytics expansion kicked off" }
      ]
    },

    relationshipContext: [
      {
        insight: "David Park has CEO-level visibility on the guest experience analytics initiative, which was called out in Airbnb's Q1 2026 earnings as a key investment area. This gives the expansion CEO-level air cover.",
        confidence: "HIGH",
        source: "Slack #airbnb-deal-room 2026-04-05 (AE Sarah Mitchell note)",
        category: "champion"
      },
      {
        insight: "The host analytics team evaluated Amplitude in 2024 but the deal stalled due to budget constraints. The new 2026 budget cycle and Mei Lin's active sponsorship have removed that blocker.",
        confidence: "HIGH",
        source: "Glean / Drive prior engagement notes 2026-03-05",
        category: "decision-process"
      },
      {
        insight: "Airbnb has a strong in-house analytics platform (Minerva) but it is expensive to maintain and requires dedicated engineering resources. Amplitude is positioned as augmenting Minerva for behavioral product analytics, not replacing it.",
        confidence: "HIGH",
        source: "Carlos Rivera confirmed in Kaia call; competitive data",
        category: "competitive"
      },
      {
        insight: "Mixpanel was briefly evaluated for specific team use cases but David Park has ruled it out — he told the AE he wants Amplitude as the standard, not a fragmented multi-tool environment.",
        confidence: "MEDIUM",
        source: "Slack #airbnb-deal-room 2026-03-28",
        category: "competitive"
      },
      {
        insight: "Airbnb hosts who churn cost 3x more to replace than to retain. Mei Lin's host retention use case has strong internal ROI framing that is already accepted by leadership.",
        confidence: "HIGH",
        source: "Slack #airbnb-deal-room 2026-04-01 (host team internal data shared by AE)",
        category: "decision-process"
      }
    ],

    valueRealized: {
      summary: "Total estimated value realized: $4.6M annually from the existing booking and payments deployment. Guest experience and host retention are incremental expansion value on top of this base.",
      items: [
        {
          title: "Booking Funnel Optimization — Search-to-Book Conversion Improvement",
          metric: "+0.4 percentage points on search-to-book conversion rate",
          methodology: "Amplitude funnel analysis identified 5 drop-off points in the search → listing view → booking flow. UX changes shipped in Q2–Q3 2025. 0.4pp improvement × $10B+ estimated total booking value on Airbnb's platform × 1% net revenue margin impact = $4M; conservative 50% attribution to analytics tooling = $2M.",
          dollarValue: 2000000,
          confidence: "HIGH",
          source: "David Park QBR presentation December 2025 (Google Drive)"
        },
        {
          title: "Payment Flow Friction Reduction",
          metric: "12% reduction in payment abandonment on the checkout step",
          methodology: "Funnel analysis identified payment method friction. UX and copy changes reduced abandonment. 12% reduction × estimated $500M annual payment abandonment impact × 30% attribution = $18M gross value; conservative 10% attribution to analytics = $1.8M.",
          dollarValue: 1800000,
          confidence: "MEDIUM",
          source: "Carlos Rivera noted in Kaia call; estimate based on public transaction data"
        },
        {
          title: "Feature Adoption Analytics — New Host Tools Launch",
          metric: "40% faster adoption measurement cycle vs. prior launch process",
          methodology: "Amplitude replaced manual SQL dashboards for the host tools launch team. 40% time savings on 3-person analytics team × $150K loaded cost per analyst = $180K/yr in productivity.",
          dollarValue: 180000,
          confidence: "MEDIUM",
          source: "Mei Lin confirmed in Kaia call 2026-04-02"
        }
      ]
    },

    productHealth: {
      featureUsage: [
        { feature: "Funnel Analysis", usage: "heavy", sessions: 2650 },
        { feature: "Event Segmentation", usage: "heavy", sessions: 2200 },
        { feature: "Dashboards", usage: "heavy", sessions: 1980 },
        { feature: "Retention Analysis", usage: "moderate", sessions: 620 },
        { feature: "User Journeys / Pathfinder", usage: "moderate", sessions: 480 },
        { feature: "Experiment", usage: "light", sessions: 65 }
      ],
      engagementTrend: "growing",
      dataHealth: {
        volumeTrend: "growing",
        taxonomyScore: 83,
        instrumentationGaps: ["Host-side events not yet fully instrumented — expansion requires new event schema for host dashboard interactions", "Cross-entity identity (guest ↔ host for dual-sided marketplace) not resolved in current setup"]
      },
      underusedFeatures: [
        "Experiment — only 65 sessions despite active funnel optimization work. The guest experience initiative is a natural fit for structured A/B testing on search ranking and listing recommendations.",
        "Audiences — not deployed. Host retention use case is an ideal first use of Audiences for behavioral cohort-based outreach to at-risk hosts."
      ]
    },

    strategy: {
      expansionPlays: [
        {
          product: "Analytics seat expansion (guest experience + host teams)",
          rationale: "The guest experience and host analytics teams represent 120+ net-new users who are not currently licensed. The expansion formalizes what is already happening informally — the host team has been asking for access.",
          estimatedIncrementalValue: 370000,
          methodology: "Current base contract $480K. Expansion target $850K total — $370K incremental for guest experience and host analytics seats.",
          confidence: "HIGH",
          source: "David Park confirmed headcount and budget availability in Kaia call 2026-04-10"
        },
        {
          product: "Amplitude Experiment",
          rationale: "The guest experience initiative involves A/B testing search ranking, listing recommendations, and personalization features. Currently using Airbnb's internal Minerva-based experiment framework, which lacks the behavioral analytics integration Amplitude provides.",
          estimatedIncrementalValue: 180000,
          methodology: "Experiment add-on at strategic account rate. Value: $200M potential in search-to-book conversion improvement × 2pp addressable through experiments × 50% attribution = $2M value delivered; pricing at ~9% of value.",
          confidence: "MEDIUM",
          source: "David Park mentioned experimentation needs in Kaia call 2026-04-10"
        }
      ],
      riskFactors: [
        {
          risk: "Airbnb's Minerva platform is deeply embedded across 500+ users. If the data engineering team decides to extend Minerva for behavioral analytics rather than expand Amplitude, the expansion opportunity shrinks.",
          severity: "medium",
          confidence: "MEDIUM",
          source: "Carlos Rivera comment in Kaia call; inferred from competitive data",
          mitigation: "Reinforce that Amplitude complements Minerva — behavioral product analytics vs. business metrics dashboards. Avoid any framing that positions Amplitude as a Minerva replacement."
        },
        {
          risk: "Host analytics use case requires new event instrumentation. If Carlos Rivera's engineering team deprioritizes this work, the expansion timeline slips.",
          severity: "low",
          confidence: "MEDIUM",
          source: "Glean / Drive account plan note",
          mitigation: "Include professional services instrumentation support in the expansion proposal to reduce the engineering burden on Airbnb's team."
        }
      ],
      renewalPositioning: "Renewal is 9 months away. The expansion is the immediate priority. Lead with the $4.6M value realized story and the guest experience + host retention business cases. David Park's CEO-level air cover makes this expansion highly likely to close in Q3 2026.",
      pricingNotes: "Current base $480K. Expansion target $850K. A 3-year commitment at $850K would add $370K ARR. Given the strategic importance and CEO visibility, do not discount the expansion. Experiment should be priced as an add-on at the renewal, not bundled into the expansion."
    },

    valueHypothesis: null,

    competitiveLandscape: {
      currentTools: [
        { name: "In-house (Minerva)", product: "Custom Metrics Layer", maturity: "deeply-embedded", since: "2016", confidence: "HIGH", source: "Carlos Rivera confirmed; public engineering blog", notes: "Proprietary metrics layer on Spark/Hive. 500+ users. Complementary to Amplitude, not competitive." },
        { name: "Tableau", product: "BI / Visualization", maturity: "deeply-embedded", since: "2017", confidence: "HIGH", source: "Salesforce; confirmed in prior engagements", notes: "Primary dashboarding tool for business teams." }
      ],
      buyerIntent: "No G2 buyer intent signals detected. David Park has ruled out Mixpanel. This is a single-vendor expansion.",
      amplitudeDifferentiators: [
        "Purpose-built behavioral product analytics that complements Airbnb's Minerva business metrics layer — not a replacement",
        "Cross-entity identity resolution for dual-sided marketplace (guest + host) in a single project",
        "Built-in experimentation platform that integrates behavioral cohorts with A/B test assignment — superior to Airbnb's manual experiment reporting"
      ],
      winLossPatterns: "Won 5 of 7 similar Travel/Marketplace expansion deals in the past 12 months. Key win factor: behavioral analytics depth and Experiment platform. No direct loss to Mixpanel on Airbnb — David Park has internally ruled out the fragmented tool approach.",
      analystPositioning: "Amplitude cited in 2025 Forrester Wave as the leading platform for marketplace behavioral analytics. Booking.com reference case (customer) is directly comparable to Airbnb's guest experience use case."
    },

    externalContext: {
      recentNews: [
        { headline: "Airbnb Q1 2026 Earnings: Guest Experience and AI Personalization Named as Top Investment Priorities", date: "2026-04-08", url: "https://investors.airbnb.com/news-releases/2026-04-08/", relevance: "CEO-level investment priority directly validates the expansion use case.", confidence: "HIGH", source: "Airbnb Investor Relations" },
        { headline: "Airbnb Launches 'Rooms' Host Analytics Dashboard to Combat Host Churn", date: "2026-03-02", url: "https://techcrunch.com/2026/03/02/airbnb-host-analytics/", relevance: "Host analytics is a board-level initiative — reinforces Mei Lin's use case.", confidence: "HIGH", source: "TechCrunch" },
        { headline: "Airbnb Invests $200M in AI-Powered Search Personalization for 2026", date: "2026-02-18", url: "https://www.wsj.com/tech/airbnb-ai-search/", relevance: "AI personalization investment requires behavioral analytics to measure lift — core Amplitude use case.", confidence: "HIGH", source: "WSJ" }
      ],
      strategicPriorities: [
        { priority: "Improve guest search-to-book conversion through AI personalization", confidence: "HIGH", source: "Q1 2026 earnings call; David Park confirmed" },
        { priority: "Reduce host churn by 20% through better data-driven host success tools", confidence: "HIGH", source: "Mei Lin Kaia call 2026-04-02" },
        { priority: "Expand into Experiences and co-hosting marketplace", confidence: "MEDIUM", source: "CEO interview, Bloomberg 2026-03" }
      ],
      industryTrends: "Short-term rental platforms are investing heavily in personalization and behavioral analytics to improve search conversion and host retention. The shift from commodity booking to curated experience requires data infrastructure that bridges guest preferences with host supply. Dual-sided marketplace analytics is a growing capability requirement.",
      firmographics: {
        founded: "2008",
        headquarters: "San Francisco, CA",
        funding: "Public (NASDAQ: ABNB)",
        techStack: ["AWS", "Kotlin", "React", "Python", "Spark", "Kafka", "Tableau", "Minerva (in-house)"],
        techStackSource: "Airbnb engineering blog + Clay enrichment + job postings"
      }
    },

    openQuestions: [
      { question: "Can Carlos Rivera commit to a Q2 2026 instrumentation timeline for host-side events?", owner: "SE (Ryan Chen)", dueDate: "2026-05-01", priority: "high" },
      { question: "Is Experiment a Q3 2026 add-on or should it be deferred to the Jan 2027 renewal?", owner: "VC (Kevin Colston)", dueDate: "2026-05-15", priority: "medium" },
      { question: "Can David Park provide a public-facing case study anchor around the booking funnel conversion improvement?", owner: "CSM (Priya Sharma)", dueDate: "2026-06-01", priority: "low" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + expansion opportunity + 4 contacts" },
      { source: "Amplitude MCP", status: "found", detail: "24 weeks WAU, 6 months MAU, feature usage data" },
      { source: "Kaia / Outreach", status: "found", detail: "4 call transcripts (Feb–Apr 2026)" },
      { source: "Granola", status: "found", detail: "3 meeting notes: account planning, deal strategy, expansion scoping" },
      { source: "Slack", status: "found", detail: "7 threads across #airbnb-deal-room, #travel-marketplace-deals, #strategic-accounts" },
      { source: "Glean / Drive", status: "found", detail: "4 documents: account plan, travel playbook, prior engagement summary, benchmark report" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals detected" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount" },
      { source: "Web", status: "found", detail: "Q1 2026 earnings, WSJ article, TechCrunch" }
    ]
  },

  // ============================================================
  // NOTION — Customer, Expansion
  // ============================================================
  "Notion": {
    type: "customer",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 60, medium: 30, low: 8, unconfirmed: 2, totalDataPoints: 41 },
    companyType: "private-funded",

    snapshot: {
      industry: "SaaS / Productivity",
      segment: "Major",
      region: "NAMER",
      employees: 800,
      revenue: "$250M",
      revenueSource: "Estimated based on funding and growth rate (private company; not disclosed)",
      arr: 380000,
      contractYears: 1,
      renewalDate: "2027-06-01",
      productsLicensed: ["Analytics"],
      primaryUseCases: [
        { text: "Workspace collaboration depth analytics", confidence: "HIGH", source: "Kaia call 2026-03-22; Amy Chen confirmed" },
        { text: "PLG free-to-team conversion funnel optimization", confidence: "HIGH", source: "Kaia call 2026-04-05; Jordan Reeves" },
        { text: "Notion AI feature adoption and impact measurement", confidence: "HIGH", source: "Kaia call 2026-04-12; board-level priority" }
      ],
      stakeholders: [
        { name: "Amy Chen", title: "Head of Growth", role: "Champion / Power User", confidence: "HIGH", source: "Kaia calls; Slack #notion-account" },
        { name: "Jordan Reeves", title: "Sr. Product Manager, PLG", role: "Day-to-Day User", confidence: "HIGH", source: "Kaia call 2026-04-05" },
        { name: "Samira Okafor", title: "Director of Product, AI", role: "New Stakeholder (AI use case)", confidence: "MEDIUM", source: "Salesforce contact; introduced via Amy Chen" }
      ],
      accountTeam: { ae: "Lauren Park", se: "Emily Sato", csm: "Alex Torres", vc: "Kevin Colston" }
    },

    adoption: {
      wauTrend: [
        { week: "2025-W44", value: 150 },
        { week: "2025-W45", value: 153 },
        { week: "2025-W46", value: 156 },
        { week: "2025-W47", value: 158 },
        { week: "2025-W48", value: 160 },
        { week: "2025-W49", value: 163 },
        { week: "2025-W50", value: 166 },
        { week: "2025-W51", value: 162 },
        { week: "2025-W52", value: 158 },
        { week: "2026-W01", value: 168 },
        { week: "2026-W02", value: 172 },
        { week: "2026-W03", value: 176 },
        { week: "2026-W04", value: 180 },
        { week: "2026-W05", value: 184 },
        { week: "2026-W06", value: 188 },
        { week: "2026-W07", value: 192 },
        { week: "2026-W08", value: 196 },
        { week: "2026-W09", value: 200 },
        { week: "2026-W10", value: 206 },
        { week: "2026-W11", value: 210 },
        { week: "2026-W12", value: 215 },
        { week: "2026-W13", value: 218 },
        { week: "2026-W14", value: 224 },
        { week: "2026-W15", value: 230 }
      ],
      mauTrend: [
        { month: "2025-11", value: 340 },
        { month: "2025-12", value: 335 },
        { month: "2026-01", value: 368 },
        { month: "2026-02", value: 392 },
        { month: "2026-03", value: 415 },
        { month: "2026-04", value: 438 }
      ],
      trendDirection: "growing",
      trendSummary: "WAU has grown from 150 to 230 (+53%) over 24 weeks with consistent weekly gains. Amy Chen is a daily active user who has pulled in adjacent team members over the measurement period. The Notion AI launch in April is expected to add a new analytics cohort from the AI product team.",
      trendSource: "Amplitude MCP, project ID amp-notion-001, queried 2026-04-15",
      annotations: [
        { week: "2026-W01", label: "PLG team expanded Amplitude access to data team" },
        { week: "2026-W10", label: "Notion AI launched — new measurement workstream initiated" }
      ]
    },

    relationshipContext: [
      {
        insight: "Amy Chen is a daily Amplitude power user and internal advocate. She has already trained her team independently and regularly presents Amplitude data in Notion leadership meetings. This is the deepest champion relationship in the portfolio.",
        confidence: "HIGH",
        source: "Granola strategy notes 2026-03-30; Slack #notion-account",
        category: "champion"
      },
      {
        insight: "Notion's CEO cited collaboration depth as the #1 product team metric in the last all-hands. This gives Amy's Amplitude work top-of-house visibility without requiring additional executive sponsorship.",
        confidence: "HIGH",
        source: "Slack #notion-account 2026-04-01 (Amy Chen shared)",
        category: "decision-process"
      },
      {
        insight: "The Notion AI launch has created a 90-day board-level deadline for adoption metrics. This urgency is accelerating the expansion timeline — Amy Chen needs the AI analytics workstream live within 60 days.",
        confidence: "HIGH",
        source: "Kaia call 2026-04-12; Granola deal review 2026-04-10",
        category: "decision-process"
      },
      {
        insight: "Statsig (experimentation) is a complementary tool being adopted by the product org. It is not competitive with Amplitude — the two tools are expected to coexist, with Amplitude owning behavioral analytics and Statsig owning A/B test assignment.",
        confidence: "MEDIUM",
        source: "Salesforce competitive data; Amy Chen confirmed in Kaia call",
        category: "competitive"
      }
    ],

    valueRealized: {
      summary: "Total estimated value realized: $1.9M annually. Notion is a 2-year-old customer with a growing value story. The AI feature measurement use case will add a new measurable value dimension in the next 90 days.",
      items: [
        {
          title: "PLG Funnel Optimization — Free-to-Team Conversion Lift",
          metric: "Identified 3 high-predictive behaviors for team plan upgrade intent",
          methodology: "Amplitude behavioral analysis surfaced that users who create their 3rd shared page and invite 2+ collaborators within 14 days convert to team plan at 3x the base rate. Surfacing this insight enabled a targeted in-app nudge campaign. Estimated 1.2% lift in free-to-team conversion × $18M ARR impact per 1% point = $1.08M incremental ARR impact; conservative 50% attribution = $540K.",
          dollarValue: 540000,
          confidence: "MEDIUM",
          source: "Jordan Reeves confirmed behavioral cohort insight in Kaia call 2026-04-05"
        },
        {
          title: "Collaboration Feature Adoption Analytics — Onboarding Optimization",
          metric: "28% improvement in team activation rate within first 30 days",
          methodology: "Amplitude analytics identified that new teams who completed the 'shared workspace template' step had 2.8x higher 30-day retention. Onboarding changes shipped Q3 2025. 28% activation improvement × 45% initial activation rate baseline × 100K new teams/year × $16 avg revenue per activated team = $1.01M; conservative 40% attribution = $404K.",
          dollarValue: 404000,
          confidence: "MEDIUM",
          source: "Amy Chen noted in Kaia call 2026-03-22"
        },
        {
          title: "Engineering Efficiency — Analytics Self-Service Displacement",
          metric: "4 fewer ad-hoc analytics requests per week to data team",
          methodology: "Amy's team absorbed analytics requests that previously went to the central data team. 4 requests/week × 3 hours per request × 50 weeks × $120/hr data analyst loaded cost = $72K/yr. Additionally, 1 analyst FTE redeployed to strategic work = $130K/yr; total engineering efficiency value = $202K.",
          dollarValue: 202000,
          confidence: "MEDIUM",
          source: "Amy Chen confirmed in Granola strategy notes 2026-03-30"
        }
      ]
    },

    productHealth: {
      featureUsage: [
        { feature: "Event Segmentation", usage: "heavy", sessions: 1420 },
        { feature: "Funnel Analysis", usage: "heavy", sessions: 1180 },
        { feature: "Dashboards", usage: "heavy", sessions: 1050 },
        { feature: "Retention Analysis", usage: "moderate", sessions: 480 },
        { feature: "User Journeys / Pathfinder", usage: "light", sessions: 120 },
        { feature: "Experiment", usage: "never", sessions: 0 }
      ],
      engagementTrend: "growing",
      dataHealth: {
        volumeTrend: "growing",
        taxonomyScore: 76,
        instrumentationGaps: ["Notion AI events not yet instrumented — critical gap given the 90-day board deadline", "Collaboration depth events (co-editing sessions, comment threads) partially captured but not standardized"]
      },
      underusedFeatures: [
        "Experiment — never used. Statsig is handling A/B test assignment but Amplitude Experiment's behavioral analytics integration would give the PLG team richer behavioral segmentation for experiment targeting. Position as a Statsig complement, not replacement.",
        "User Journeys / Pathfinder — light usage. Collaboration depth analytics (how users navigate between pages, comments, databases) is an ideal Pathfinder use case. Could unlock the collaboration analytics workstream."
      ]
    },

    strategy: {
      expansionPlays: [
        {
          product: "Amplitude Experiment",
          rationale: "The PLG team runs experiments using Statsig but lacks the behavioral cohort integration that Amplitude Experiment provides. Positioning as a complementary tool, Amplitude Experiment enables behavioral-segment-based targeting that Statsig cannot replicate.",
          estimatedIncrementalValue: 120000,
          methodology: "Experiment add-on at growth company rate. Value: 1% PLG conversion improvement × $18M ARR impact = $180M; Experiment enables faster experiment cycles to unlock this faster.",
          confidence: "MEDIUM",
          source: "Jordan Reeves mentioned interest in behavioral experiment targeting in Kaia call 2026-04-05"
        },
        {
          product: "Notion AI Analytics Workstream (expanded seat scope)",
          rationale: "The AI product team (Samira Okafor's org) needs access to Amplitude for the AI adoption measurement initiative. This is a net-new org coming onto the platform — incremental seat expansion.",
          estimatedIncrementalValue: 80000,
          methodology: "20–25 incremental seats from the AI product team at current contract rate. Net impact on ARR: $80K incremental.",
          confidence: "HIGH",
          source: "Amy Chen confirmed AI team will need seats in Kaia call 2026-04-12"
        }
      ],
      riskFactors: [
        {
          risk: "Notion is pre-IPO and private. Any funding round pressure or cost-cutting could put analytics budget at risk, especially since Amy Chen is the sole internal advocate without a named executive buyer above her.",
          severity: "low",
          confidence: "LOW",
          source: "General risk for private-company customers",
          mitigation: "Introduce the expansion framing to Samira Okafor (Director, AI) as a second executive stakeholder to reduce single-champion concentration risk."
        }
      ],
      renewalPositioning: "Renewal is 14 months away — not a near-term concern. The expansion is the immediate priority, driven by the 90-day AI analytics deadline. Lead with the $1.9M value realized story and the Notion AI measurement urgency to accelerate the expansion decision.",
      pricingNotes: "Current contract is $220K base. Expansion with AI team seats and Experiment add-on targets $380K. Given Amy Chen's strong advocacy and the urgency around AI metrics, there is limited need to discount. Hold pricing on the seat expansion; offer Experiment at a 15% first-year discount to drive adoption."
    },

    valueHypothesis: null,

    competitiveLandscape: {
      currentTools: [
        { name: "Amplitude", product: "Analytics", maturity: "established", since: "2022", confidence: "HIGH", source: "Contract records", notes: "Primary product analytics platform. Amy Chen's team are daily active users." },
        { name: "Statsig", product: "Experimentation / Feature Flags", maturity: "emerging", since: "2024", confidence: "HIGH", source: "Amy Chen confirmed", notes: "Recently adopted for A/B test assignment. Complementary, not competitive." }
      ],
      buyerIntent: "No G2 buyer intent signals. No competitive evaluation underway — this is a champion-driven expansion.",
      amplitudeDifferentiators: [
        "Behavioral cohort segmentation for PLG analysis that Statsig cannot match at the granularity needed for collaboration depth metrics",
        "AI feature adoption measurement framework built for SaaS companies — directly applicable to Notion AI measurement board deadline",
        "Deep champion (Amy Chen) with proven internal advocacy reduces adoption risk to near-zero"
      ],
      winLossPatterns: "No competitive risk. Notion is an existing customer expansion with a deeply embedded champion. The only scenario for loss of scope is if funding constraints force a product rationalization.",
      analystPositioning: "Atlassian (public case study) is the closest comparable to Notion's PLG use case — similar collaboration tool, similar PLG motion, similar collaboration depth measurement need. Use this reference directly in the expansion conversation."
    },

    externalContext: {
      recentNews: [
        { headline: "Notion Launches Notion AI 2.0 with Research Mode and Automated Workflows", date: "2026-04-08", url: "https://www.notion.so/blog/notion-ai-2-launch/", relevance: "AI 2.0 launch creates immediate need for behavioral analytics to measure adoption — Amy Chen's 90-day board deadline.", confidence: "HIGH", source: "Notion Blog" },
        { headline: "Notion Raises $300M Series D at $12B Valuation", date: "2026-01-15", url: "https://techcrunch.com/2026/01/15/notion-series-d/", relevance: "Strong funding round signals financial health and growth investment — reduces renewal risk.", confidence: "HIGH", source: "TechCrunch" },
        { headline: "Notion Reports 50M+ Registered Users Globally, Teams Up 40% YoY", date: "2026-02-22", url: "https://www.notion.so/blog/50m-users/", relevance: "User growth reinforces the PLG analytics use case — more users means more funnel optimization opportunity.", confidence: "HIGH", source: "Notion Blog" }
      ],
      strategicPriorities: [
        { priority: "Measure and improve Notion AI adoption and retention across paid plans", confidence: "HIGH", source: "Amy Chen Kaia call 2026-04-12; board-level priority" },
        { priority: "Improve team workspace activation rate from 45% to 65% within 12 months", confidence: "HIGH", source: "Amy Chen confirmed target in Kaia call 2026-03-22" },
        { priority: "Expand into enterprise with Notion for Teams and Admin controls", confidence: "MEDIUM", source: "Notion Blog; TechCrunch coverage" }
      ],
      industryTrends: "SaaS productivity tools are converging on AI-augmented workflows. Measuring which AI features drive retention vs. novelty engagement is becoming a board-level analytics requirement across the category. PLG companies that can identify the 'aha moment' for AI feature adoption have a material advantage in reducing churn for AI add-ons.",
      firmographics: {
        founded: "2016",
        headquarters: "San Francisco, CA",
        funding: "Private — $800M raised, $12B valuation (Series D, Jan 2026)",
        techStack: ["AWS", "TypeScript", "React", "Go", "PostgreSQL", "Kafka", "Statsig"],
        techStackSource: "Notion engineering blog + job postings + Amy Chen confirmation"
      }
    },

    openQuestions: [
      { question: "Can the AI team events be instrumented within 30 days to meet the 90-day board deadline?", owner: "SE (Emily Sato)", dueDate: "2026-04-25", priority: "high" },
      { question: "Is Samira Okafor ready to be an executive sponsor for the AI analytics workstream?", owner: "AE (Lauren Park)", dueDate: "2026-05-01", priority: "medium" },
      { question: "What is the specific collaboration depth metric the CEO is expecting in the board update?", owner: "VC (Kevin Colston)", dueDate: "2026-05-15", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + expansion opportunity + 3 contacts" },
      { source: "Amplitude MCP", status: "found", detail: "24 weeks WAU, 6 months MAU, feature usage data" },
      { source: "Kaia / Outreach", status: "found", detail: "3 call transcripts (Mar–Apr 2026)" },
      { source: "Granola", status: "found", detail: "2 strategy session notes" },
      { source: "Slack", status: "found", detail: "5 threads across #notion-account, #plg-deals, #saas-vertical" },
      { source: "Glean / Drive", status: "found", detail: "3 documents: PLG playbook, collaboration benchmark, AI adoption framework" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals" },
      { source: "Clay", status: "found", detail: "Firmographics, funding, headcount" },
      { source: "Web", status: "found", detail: "Series D announcement, Notion Blog posts, TechCrunch" }
    ]
  },

  // ============================================================
  // COINBASE — Customer, Renewal
  // ============================================================
  "Coinbase": {
    type: "customer",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 55, medium: 30, low: 12, unconfirmed: 3, totalDataPoints: 48 },
    companyType: "public",

    snapshot: {
      industry: "Financial Services / Crypto",
      segment: "Strategic",
      region: "NAMER",
      employees: 3400,
      revenue: "$6.6B",
      revenueSource: "10-K FY2025",
      arr: 700000,
      contractYears: 2,
      renewalDate: "2026-10-01",
      productsLicensed: ["Analytics"],
      primaryUseCases: [
        { text: "Trading interface UX analytics and behavioral optimization", confidence: "HIGH", source: "Jason Liu Kaia call 2026-03-10" },
        { text: "KYC / onboarding funnel optimization", confidence: "HIGH", source: "Omar Hassan Kaia call 2026-04-08" },
        { text: "Regulatory compliance behavioral audit trails", confidence: "HIGH", source: "Rebecca Tran Kaia call 2026-03-28; SEC urgency confirmed" }
      ],
      stakeholders: [
        { name: "Jason Liu", title: "VP of Product", role: "Champion / Economic Buyer", confidence: "HIGH", source: "Kaia calls + Granola notes" },
        { name: "Rebecca Tran", title: "Director of Compliance Analytics", role: "New Stakeholder (compliance use case)", confidence: "HIGH", source: "Kaia call 2026-03-28; legal team introduced" },
        { name: "Omar Hassan", title: "Sr. Director Product, Onboarding", role: "Technical Sponsor", confidence: "HIGH", source: "Kaia call 2026-04-08" },
        { name: "Nate Gibbons", title: "CFO (indirect)", role: "Economic Gatekeeper", confidence: "LOW", source: "AE note; not yet engaged directly" }
      ],
      accountTeam: { ae: "David Kim", se: "Brian Choi", csm: "Leila Patel", vc: "Kevin Colston" }
    },

    adoption: {
      wauTrend: [
        { week: "2025-W44", value: 160 },
        { week: "2025-W45", value: 162 },
        { week: "2025-W46", value: 158 },
        { week: "2025-W47", value: 165 },
        { week: "2025-W48", value: 160 },
        { week: "2025-W49", value: 155 },
        { week: "2025-W50", value: 158 },
        { week: "2025-W51", value: 150 },
        { week: "2025-W52", value: 145 },
        { week: "2026-W01", value: 152 },
        { week: "2026-W02", value: 148 },
        { week: "2026-W03", value: 150 },
        { week: "2026-W04", value: 147 },
        { week: "2026-W05", value: 148 },
        { week: "2026-W06", value: 145 },
        { week: "2026-W07", value: 148 },
        { week: "2026-W08", value: 144 },
        { week: "2026-W09", value: 146 },
        { week: "2026-W10", value: 148 },
        { week: "2026-W11", value: 143 },
        { week: "2026-W12", value: 146 },
        { week: "2026-W13", value: 144 },
        { week: "2026-W14", value: 147 },
        { week: "2026-W15", value: 145 }
      ],
      mauTrend: [
        { month: "2025-11", value: 360 },
        { month: "2025-12", value: 348 },
        { month: "2026-01", value: 338 },
        { month: "2026-02", value: 330 },
        { month: "2026-03", value: 322 },
        { month: "2026-04", value: 318 }
      ],
      trendDirection: "stable",
      trendSummary: "WAU has declined slightly from 160 to 145 (–9%) over 24 weeks, but the decline is modest and represents normal variance, not a usage crisis. MAU has drifted down from 360 to 318 over the same period, likely reflecting Coinbase's headcount reductions in 2025. The core trading and onboarding teams remain active. The compliance analytics workstream, when activated, is expected to add 20–30 net-new users.",
      trendSource: "Amplitude MCP, project ID amp-coinbase-001, queried 2026-04-15",
      annotations: [
        { week: "2025-W50", label: "Coinbase headcount reduction — some Amplitude users off-boarded" },
        { week: "2026-W06", label: "Compliance team introduced to Amplitude — new use case initiated" }
      ]
    },

    relationshipContext: [
      {
        insight: "Jason Liu has been a strong champion for 4 years and wants to expand Amplitude's scope during the renewal, not just renew flat. He told the AE the platform is underutilized relative to its potential.",
        confidence: "HIGH",
        source: "Kaia call 2026-03-10; Granola renewal strategy 2026-03-15",
        category: "champion"
      },
      {
        insight: "The SEC inquiry has created genuine urgency for the compliance dashboard use case. Rebecca Tran's legal team is now actively involved in the renewal conversation, and compliance has a separate budget line — this is additive ARR, not a trade-off.",
        confidence: "HIGH",
        source: "Slack #coinbase-renewal 2026-04-05 (AE David Kim note)",
        category: "decision-process"
      },
      {
        insight: "An internal platform team is pushing to build KYC analytics in-house, while the product team (Jason Liu's org) prefers buying. This build-vs-buy tension is a real risk for the KYC use case, though it is not expected to affect the core trading analytics scope.",
        confidence: "MEDIUM",
        source: "Slack #coinbase-renewal 2026-04-10",
        category: "risk"
      },
      {
        insight: "Mixpanel is being explored by some teams for specific use cases, likely driven by cost pressure following Coinbase's headcount reductions. Jason Liu is aware and has told AE he prefers to stay on Amplitude, but cannot guarantee it without CFO support.",
        confidence: "MEDIUM",
        source: "Granola renewal planning 2026-03-15; Coinbase competitive data",
        category: "competitive"
      },
      {
        insight: "Jason Liu mentioned the upcoming Base (Layer 2 blockchain) wallet experience as a potential new expansion vector. This is separate from the renewal and represents a significant future opportunity.",
        confidence: "MEDIUM",
        source: "Slack #coinbase-renewal 2026-04-12 (Jason Liu direct comment)",
        category: "champion"
      }
    ],

    valueRealized: {
      summary: "Total estimated value realized: $4.2M annually. Prior value realization report (2024) documented $12M in retained trading volume from Amplitude-informed UX changes. New compliance use case adds measurable risk-mitigation value.",
      items: [
        {
          title: "Trading UX Optimization — Retained Volume During Market Correction",
          metric: "$12M in retained trading volume attributed to Amplitude-informed UX changes (2024)",
          methodology: "Prior value realization report: Amplitude behavioral dashboards identified that retail traders who saw the 'portfolio context' widget during volatility had 2x lower panic-sell rate. UX change shipped in Q2 2024. Customer-reported $12M in retained trading volume. Extrapolating forward at 60% confidence = $7.2M ongoing annual value.",
          dollarValue: 7200000,
          confidence: "HIGH",
          source: "Glean / Drive prior value realization report (February 2024); Jason Liu confirmed"
        },
        {
          title: "KYC Funnel Optimization — Increased Onboarding Completion",
          metric: "Estimated 4% improvement in KYC completion rate (from 62% to 66%)",
          methodology: "Amplitude funnel analysis identified the identity document upload step as the primary KYC drop-off (38% abandonment). UX simplification shipped Q4 2025. 4pp improvement × 500K new users/month × $8 revenue per completed user in Year 1 = $1.92M/yr. Conservative 50% attribution = $960K.",
          dollarValue: 960000,
          confidence: "MEDIUM",
          source: "Omar Hassan noted improvement in Kaia call 2026-04-08; estimated based on public user growth data"
        },
        {
          title: "Compliance Analytics — Reduced Audit Preparation Time",
          metric: "60% reduction in quarterly compliance audit preparation time (projected)",
          methodology: "Amplitude behavioral audit trails replace manual transaction-level review for SEC disclosure comprehension analysis. 6-week quarterly process reduced to 2.5 weeks. 2 compliance analysts × 3.5 weeks saved × 4 quarters × $200/hr loaded rate = $168K/yr in efficiency.",
          dollarValue: 168000,
          confidence: "LOW",
          source: "Industry benchmark (Glean doc); compliance use case not yet fully activated — projection based on comparable fintech customer"
        }
      ]
    },

    productHealth: {
      featureUsage: [
        { feature: "Funnel Analysis", usage: "heavy", sessions: 1480 },
        { feature: "Event Segmentation", usage: "heavy", sessions: 1250 },
        { feature: "Dashboards", usage: "heavy", sessions: 1820 },
        { feature: "Retention Analysis", usage: "moderate", sessions: 380 },
        { feature: "Data Tables", usage: "moderate", sessions: 290 },
        { feature: "Experiment", usage: "never", sessions: 0 }
      ],
      engagementTrend: "stable",
      dataHealth: {
        volumeTrend: "stable",
        taxonomyScore: 72,
        instrumentationGaps: ["Compliance-related events (risk disclosure interactions, session duration on legal screens) not yet instrumented for the compliance use case", "Base (L2) wallet events not in scope yet — future expansion instrumentation needed"],
      },
      underusedFeatures: [
        "Experiment — never used in 4 years of deployment. Jason Liu mentioned wanting to run volatility-period UX experiments. This is the clearest expansion play for Experiment in the portfolio.",
        "Compliance audit trail dashboards — the infrastructure exists in Amplitude but the compliance-specific dashboard template has not been built. Rebecca Tran needs this within 60 days."
      ]
    },

    strategy: {
      expansionPlays: [
        {
          product: "Compliance Analytics expansion (new seat scope + services)",
          rationale: "The SEC urgency means Rebecca Tran's compliance team needs Amplitude access and a compliance-specific dashboard within 60 days. This is net-new scope with its own budget line in the legal/compliance org.",
          estimatedIncrementalValue: 120000,
          methodology: "15 compliance team seats + professional services for compliance dashboard template. Compliance budget is separate from product analytics budget.",
          confidence: "HIGH",
          source: "Rebecca Tran Kaia call 2026-03-28; Slack AE note 2026-04-05"
        },
        {
          product: "Amplitude Experiment",
          rationale: "Jason Liu's team wants to run UX experiments during volatile market periods — a use case that requires behavioral cohort targeting that basic A/B tools cannot provide. Experiment has never been activated in 4 years; this is the moment.",
          estimatedIncrementalValue: 150000,
          methodology: "Experiment add-on at enterprise rate. Value story: 1 UX experiment on the volatility-period interface × $50M affected trading volume × 5% behavioral improvement = $2.5M value per experiment cycle.",
          confidence: "MEDIUM",
          source: "Jason Liu Kaia call 2026-03-10"
        }
      ],
      riskFactors: [
        {
          risk: "Mixpanel is being evaluated by some teams, potentially as a lower-cost alternative. Jason Liu's support may not be enough if the CFO drives a cost-only decision.",
          severity: "medium",
          confidence: "MEDIUM",
          source: "Granola renewal planning; competitive data",
          mitigation: "Build a CFO-grade ROI document anchored on the $7.2M trading volume retention value. Compliance use case adds a second, independent budget justification line."
        },
        {
          risk: "Build-vs-buy tension on KYC analytics. If the internal platform team wins the argument, it reduces the KYC use case value story and could lower Amplitude's perceived indispensability.",
          severity: "medium",
          confidence: "MEDIUM",
          source: "Slack #coinbase-renewal 2026-04-10",
          mitigation: "Quantify the build cost (engineering time, maintenance, compliance certification) vs. Amplitude's all-in cost. Frame Amplitude as already compliance-certified for financial services."
        }
      ],
      renewalPositioning: "Lead with the $7.2M annual value retained from trading UX optimization — this is the strongest ROI narrative in the crypto/fintech segment. The compliance dashboard add-on creates a second independent business justification. Position the renewal as an expansion, not a flat renewal.",
      pricingNotes: "Current ARR is $700K. Compliance seat expansion adds $120K; Experiment adds $150K. Target renewal at $850K–$900K total. Given the SEC urgency, the compliance scope may be able to close before the formal renewal date — treat it as a separate order to accelerate revenue recognition."
    },

    valueHypothesis: null,

    competitiveLandscape: {
      currentTools: [
        { name: "Amplitude", product: "Analytics", maturity: "established", since: "2022", confidence: "HIGH", source: "Contract records", notes: "Current customer. 280 MAU across 6 product teams. Trading, KYC, and onboarding use cases." },
        { name: "Chainalysis", product: "Blockchain Analytics", maturity: "deeply-embedded", since: "2019", confidence: "HIGH", source: "Salesforce", notes: "Compliance and transaction monitoring. Not a product analytics competitor." },
        { name: "Looker", product: "BI / Dashboards", maturity: "established", since: "2021", confidence: "HIGH", source: "Salesforce", notes: "Business intelligence for finance and operations. Complementary." }
      ],
      buyerIntent: "No G2 buyer intent signals. Mixpanel evaluation appears informal and driven by cost pressure, not an active RFP.",
      amplitudeDifferentiators: [
        "4 years of institutional behavioral data across trading, KYC, and onboarding — switching cost is extremely high",
        "Compliance-grade audit trail capabilities built into the platform — directly addresses the SEC requirement that Mixpanel cannot match",
        "Trading-specific behavioral analytics (volatility correlation, session depth during market events) that no other platform has been configured to provide at Coinbase"
      ],
      winLossPatterns: "Incumbent renewals in Crypto/Fintech have a 78% retention rate when compliance value is documented. Lost renewals typically involve a CFO-driven cost-only decision where the analytics ROI story was not presented proactively.",
      analystPositioning: "Amplitude's anonymized crypto exchange case study (amplitude.com) is one of the most-cited references in the FinTech vertical. The 41% KYC improvement metric is directly comparable to Coinbase's use case."
    },

    externalContext: {
      recentNews: [
        { headline: "Coinbase Reports Record FY2025 Revenue of $6.6B, Driven by Institutional Trading Volume", date: "2026-02-12", url: "https://investor.coinbase.com/news-releases/2026-02-12/", relevance: "Revenue growth validates the trading analytics investment — a strong year makes the renewal easier to justify.", confidence: "HIGH", source: "Coinbase Investor Relations" },
        { headline: "SEC Launches Formal Inquiry into Coinbase Retail User Disclosure Practices", date: "2026-03-15", url: "https://www.wsj.com/finance/crypto/sec-coinbase-inquiry-2026/", relevance: "SEC inquiry directly drives urgency for the compliance analytics dashboard use case.", confidence: "HIGH", source: "WSJ" },
        { headline: "Coinbase Launches Base (L2) Wallet for Retail Users — 5M Downloads in 30 Days", date: "2026-04-02", url: "https://www.coinbase.com/blog/base-wallet-launch/", relevance: "Base wallet is a future Amplitude expansion vector — 5M new users creating new behavioral analytics requirements.", confidence: "HIGH", source: "Coinbase Blog" }
      ],
      strategicPriorities: [
        { priority: "Build compliance infrastructure to satisfy SEC requirements and operate in all 50 US states", confidence: "HIGH", source: "Q4 2025 earnings call; Rebecca Tran confirmed" },
        { priority: "Grow Base (L2) wallet adoption and developer ecosystem", confidence: "HIGH", source: "Coinbase Blog; Jason Liu mentioned in Kaia call" },
        { priority: "Improve retail user onboarding and KYC completion to recover post-regulatory headwinds", confidence: "HIGH", source: "Omar Hassan Kaia call 2026-04-08; earnings commentary" }
      ],
      industryTrends: "Crypto exchanges are under increased regulatory scrutiny globally. Behavioral analytics that provide compliance-grade audit trails are becoming mandatory infrastructure, not optional. Simultaneously, the L2 scaling wave is creating a new generation of on-chain UX products that require product analytics tooling comparable to traditional web/mobile products.",
      firmographics: {
        founded: "2012",
        headquarters: "San Francisco, CA (remote-first)",
        funding: "Public (NASDAQ: COIN)",
        techStack: ["AWS", "Go", "TypeScript", "React Native", "Kafka", "BigQuery", "Looker"],
        techStackSource: "Clay enrichment + Coinbase engineering blog + job postings"
      }
    },

    openQuestions: [
      { question: "Can we separate the compliance dashboard order from the main renewal to close it in Q2 before the SEC inquiry deadline?", owner: "AE (David Kim)", dueDate: "2026-04-30", priority: "high" },
      { question: "What is the CFO's (Nate Gibbons) current view of analytics spend? Has Jason Liu briefed him on the ROI story?", owner: "AE (David Kim)", dueDate: "2026-05-10", priority: "high" },
      { question: "Is the Base wallet analytics scope a Year 2 expansion or could it be pulled into the renewal?", owner: "VC (Kevin Colston)", dueDate: "2026-06-01", priority: "medium" },
      { question: "What is the internal platform team's build cost estimate for KYC analytics? We need this for the build-vs-buy analysis.", owner: "SE (Brian Choi)", dueDate: "2026-05-15", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + renewal opportunity + 4 contacts; competitor field populated" },
      { source: "Amplitude MCP", status: "found", detail: "24 weeks WAU, 6 months MAU, feature usage data — stable trend confirmed" },
      { source: "Kaia / Outreach", status: "found", detail: "3 call transcripts (Feb–Apr 2026)" },
      { source: "Granola", status: "found", detail: "2 renewal strategy session notes" },
      { source: "Slack", status: "found", detail: "6 threads across #coinbase-renewal, #fintech-deals, #customer-success" },
      { source: "Glean / Drive", status: "found", detail: "4 documents: fintech playbook, trading UX research, compliance framework, prior value report" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals detected" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount" },
      { source: "Web", status: "found", detail: "Earnings call, SEC inquiry article, Base wallet launch, WSJ" }
    ]
  },

  // ============================================================
  // BANK OF AMERICA — Prospect, Land
  // ============================================================
  "Bank of America": {
    type: "prospect",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 40, medium: 38, low: 16, unconfirmed: 6, totalDataPoints: 44 },
    companyType: "public",

    healthScore: {
      score: 45,
      trend: "up",
      components: {
        stakeholder: 60,
        engagement: 30
      }
    },

    dealTimeline: [
      { date: "2025-12-10", event: "AE Cameron Curran identified BofA AI COE as a target — initial outreach to Anthony (AI COE Lead)", type: "milestone" },
      { date: "2026-01-20", event: "BofA commits $4B to AI innovation — validates the AI measurement use case and creates urgency", type: "milestone", sourceUrl: "https://investor.bankofamerica.com/news-releases/2026-01-20/" },
      { date: "2026-03-18", event: "First discovery call with Mary Ellen Davenport (Digital Banking Analytics Lead) — digital banking journey use case surfaced", type: "meeting", sourceUrl: "https://app.outreach.io/recordings/rec-20260318-bofa" },
      { date: "2026-04-02", event: "Call with Anthony (AI COE Lead) — board pushback on AI metrics creates personal urgency; strong buying signal", type: "meeting", sourceUrl: "https://app.outreach.io/recordings/rec-20260402-bofa" },
      { date: "2026-04-09", event: "Kevin Colston internal note: Charlotte onsite trip scheduled for June — CDO Marc Berardi is the target", type: "milestone", sourceUrl: "https://amplitude.slack.com/archives/C04BOFA/p1744195200" },
      { date: "2026-06-01", event: "Planned Charlotte onsite — AI COE leadership presentation to Marc Berardi (CDO)", type: "meeting" },
      { date: "2026-10-01", event: "Target: initial contract signed — $500K for AI COE Analytics deployment", type: "milestone" }
    ],

    priorVcEngagements: [
      { date: "2026-04-09", vc: "Kevin Colston", deliverable: "Outside-in value hypothesis — $28M annual value across AI feature ROI and digital banking optimization", outcome: "In progress — supporting Charlotte onsite preparation and CDO presentation", outcomeType: "in-progress", sourceUrl: "https://docs.google.com/document/d/1bofa-value-hypothesis-2026/edit" }
    ],

    talkTrack: {
      nextMeeting: "Charlotte onsite — AI COE leadership presentation with Marc Berardi and Anthony — June 2026",
      keyMessages: [
        "Lead with Anthony's board problem, not the product: 'You presented to the BofA board on AI ROI without measurement data. Amplitude gives you the behavioral analytics layer that turns your $4B AI investment into a board-ready performance dashboard.'",
        "Reference the comparable customer proof point: 'A Top 3 US Bank documented 31% improvement in digital account opening using Amplitude behavioral analytics — $4.2M in recovered revenue. BofA's scale is 10x larger.'",
        "Address the governance requirement early: 'We have SOC 2 Type II certification and GDPR compliance built in — not as an add-on. This clears your security review before it starts.'"
      ],
      objectionHandling: [
        { objection: "Adobe Analytics already covers our digital properties — why do we need another tool?", response: "Position for the gap Adobe cannot fill: 'Adobe is your marketing analytics layer — it tells you where traffic comes from. Amplitude measures what users do with your AI features after they arrive. The AI COE use case — measuring feature adoption funnels, AI recommendation performance, board-level ROI — is a different problem that Adobe Analytics was not built to solve.'" },
        { objection: "Quantum Metric is already in a PoC for this use case", response: "Differentiate on enterprise AI measurement depth: 'Quantum Metric is optimized for session replay and UX diagnostics. Amplitude is purpose-built for measuring behavioral funnels and feature adoption at enterprise scale — exactly what your board is asking for. We can show a direct feature-by-feature comparison.'" },
        { objection: "Our security review will take 12+ weeks", response: "Get ahead of it: 'We can start the security documentation package now — SOC 2 Type II, GDPR, CCPA compliance docs are ready to submit. Financial services security reviews are a normal part of our sales process and we have a dedicated team for it. Starting this week, we can be through review before your June onsite.'" }
      ],
      competitiveCounters: [
        { competitor: "Quantum Metric", counter: "Quantum Metric is a session replay tool with some analytics capabilities. Amplitude is a behavioral analytics platform with enterprise-grade feature adoption measurement — the specific capability your AI COE needs to answer board questions about ROI." },
        { competitor: "Adobe Analytics", counter: "Adobe is your web marketing analytics standard and we're not here to displace it. The AI COE use case — measuring internal AI tool adoption, feature funnels, and user behavior across your AI product suite — is greenfield that Adobe was not built for." }
      ]
    },

    snapshot: {
      industry: "Financial Services",
      segment: "Strategic",
      region: "NAMER",
      employees: 213000,
      revenue: "$98.6B",
      revenueSource: "10-K FY2025",
      arr: 500000,
      contractYears: 2,
      renewalDate: null,
      productsLicensed: null,
      primaryUseCases: [
        { text: "AI feature adoption measurement and ROI tracking for the AI Center of Excellence", confidence: "HIGH", source: "Anthony (AI COE Lead), Kaia call 2026-04-02", sourceUrl: "https://app.outreach.io/recordings/rec-20260402-bofa" },
        { text: "Digital banking customer journey optimization — cross-channel mobile-to-web", confidence: "HIGH", source: "Mary Ellen Davenport, Kaia call 2026-03-18", sourceUrl: "https://app.outreach.io/recordings/rec-20260318-bofa" }
      ],
      stakeholders: [
        { name: "Anthony", title: "AI COE Lead (title unverified)", role: "Champion", confidence: "MEDIUM", source: "Kaia calls — last name not confirmed in Salesforce", sourceUrl: "https://app.outreach.io/recordings/rec-20260402-bofa" },
        { name: "Mary Ellen Davenport", title: "Digital Banking Analytics Lead", role: "Business Sponsor", confidence: "MEDIUM", source: "Kaia call 2026-03-18; Salesforce contact", sourceUrl: "https://app.outreach.io/recordings/rec-20260318-bofa" },
        { name: "Will Kawalek", title: "VP Technology Architecture", role: "Technical Evaluator", confidence: "LOW", source: "Salesforce contact record only", sourceUrl: "https://amplitude.my.salesforce.com/001bofa-will" },
        { name: "Marc Berardi", title: "Chief Data Officer", role: "Economic Gatekeeper", confidence: "LOW", source: "Salesforce contact record; not yet engaged", sourceUrl: "https://amplitude.my.salesforce.com/001bofa-marc" }
      ],
      accountTeam: { ae: "Cameron Curran", se: "Adam Yapkowitz", csm: null, vc: "Kevin Colston" }
    },

    adoption: null,

    relationshipContext: [
      {
        insight: "Anthony (AI COE Lead) presented to the BofA board last quarter with no quantitative AI feature performance metrics and received significant pushback. This has created personal urgency to find a measurement solution quickly.",
        confidence: "HIGH",
        source: "Slack #bofa-deal-room 2026-04-05 (AE Cameron Curran note)",
        sourceUrl: "https://amplitude.slack.com/archives/C04BOFA/p1744195200",
        category: "champion"
      },
      {
        insight: "Pendo is actively being evaluated for the digital banking use case. The AI COE use case is where Amplitude has the clearest differentiation — Pendo's product analytics story is less compelling at enterprise AI measurement scale.",
        confidence: "HIGH",
        source: "Slack #bofa-deal-room 2026-04-03",
        sourceUrl: "https://amplitude.slack.com/archives/C04BOFA/p1743984000",
        category: "competitive"
      },
      {
        insight: "BofA's AI COE spans 3 business units (retail banking, wealth management, capital markets). The initial land is for retail banking only, but the account plan shows $2M+ total opportunity if we prove the AI analytics use case.",
        confidence: "MEDIUM",
        source: "Granola account planning notes 2026-03-22",
        sourceUrl: "https://granola.ai/notes/bofa-account-plan-20260322",
        category: "decision-process"
      },
      {
        insight: "Adobe Analytics is deeply embedded across BofA's digital properties (200+ users since 2018). Amplitude is not displacing Adobe — it is positioning for the net-new AI COE use case where Adobe has no solution.",
        confidence: "HIGH",
        source: "Competitive data; confirmed in Kaia calls",
        category: "competitive"
      },
      {
        insight: "An onsite visit to Charlotte is scheduled for June 2026. This is the critical step — getting in front of Marc Berardi (CDO) and the AI COE leadership team to present the business case.",
        confidence: "HIGH",
        source: "Kevin Colston note 2026-04-09",
        sourceUrl: "https://amplitude.slack.com/archives/C04BOFA/p1744195200",
        category: "decision-process"
      }
    ],

    valueRealized: null,

    productHealth: null,

    strategy: {
      recommendedProducts: ["Analytics"],
      scopeRecommendation: "Land with Analytics for the AI COE team (est. 30–50 users across retail banking AI product teams). Year 2 expansion into the digital banking customer journey use case adds the broader product analytics team.",
      landAndExpand: "Year 1: Analytics for AI COE (retail banking). Measure AI feature adoption, build ROI reporting for board. Year 2: Expand to digital banking analytics — replace 2–3 point solutions to consolidate onto Amplitude. Year 3: Wealth management and capital markets AI teams if Year 1 proves the model.",
      multiYearRationale: "A 2-year commitment gives the AI COE team time to build the measurement framework, demonstrate board-level ROI, and expand to adjacent use cases. Financial services procurement moves slowly — a 1-year deal risks non-renewal before value is proven."
    },

    valueHypothesis: {
      summary: "Based on BofA's stated priority of measuring AI feature performance and optimizing digital banking journeys, Amplitude can deliver an estimated $28M in annual value across 2 use cases.",
      items: [
        {
          title: "AI Feature ROI Measurement — Reduced Misallocated AI Development Spend",
          projection: 10000000,
          methodology: "BofA's AI initiative is a $50M+ annual investment with no measurement framework. Industry benchmark: companies with data-driven AI prioritization misallocate 20–30% less development spend. Conservative 20% reduction in misallocated spend × $50M total AI investment = $10M/yr in recovered value from better prioritization. Attribution factor: 40% to analytics tooling = $4M direct Amplitude impact.",
          comparableCustomer: "Top 3 US Bank (Amplitude case study): 31% improvement in digital account opening using behavioral analytics. $4.2M in recovered revenue documented.",
          confidence: "MEDIUM",
          source: "Industry benchmarks; Glean financial services research doc; BofA public AI investment disclosures"
        },
        {
          title: "Digital Banking Customer Journey Optimization",
          projection: 18000000,
          methodology: "BofA's digital banking conversion rates are 15% below industry benchmark (Kaia call data). Benchmark improvement to industry median: 15% conversion improvement × $120B digital banking annual transaction value × 0.1% net revenue impact = $120M potential; conservative 15% attribution to analytics = $18M. Amplitude has documented similar digital banking improvements at comparable institutions.",
          comparableCustomer: "Top 3 US Bank: 31% improvement in digital account opening; $4.2M in annual revenue recovered. BofA's scale is 10x larger — the value is proportionally larger.",
          confidence: "LOW",
          source: "Kaia call: Mary Ellen Davenport stated conversion gap; estimate extrapolated from comparable customer benchmark"
        }
      ]
    },

    competitiveLandscape: {
      currentTools: [
        { name: "Adobe Analytics", product: "Adobe Experience Platform", maturity: "deeply-embedded", since: "2018", confidence: "HIGH", source: "Salesforce competitor field + Kaia call confirmation", sourceUrl: "https://amplitude.my.salesforce.com/001bofa-competitive", notes: "Enterprise-wide deployment across all digital properties. 200+ users. Not being displaced." },
        { name: "Google Analytics 360", product: "GA360", maturity: "established", since: "2020", confidence: "MEDIUM", source: "Salesforce competitive data", notes: "Marketing org, campaign attribution. Not relevant to AI COE use case." },
        { name: "Quantum Metric", product: "Digital Analytics", maturity: "pilot", since: "2025", confidence: "MEDIUM", source: "Kaia call context; Salesforce competitor field", sourceUrl: "https://amplitude.my.salesforce.com/001bofa-competitive", notes: "AI COE running a PoC for AI feature analytics. Direct competitor for the AI COE use case." }
      ],
      buyerIntent: "No active G2 buyer intent signals detected. Evaluation is internally-driven from the AI COE's board pressure.",
      amplitudeDifferentiators: [
        "Enterprise behavioral analytics purpose-built for measuring feature adoption funnels — directly applicable to AI feature measurement that Adobe and Quantum Metric cannot replicate",
        "Financial services-grade data governance with SOC 2 Type II and GDPR compliance — required for BofA's security review",
        "Documented ROI framework for AI feature analytics in financial services — comparable customer case study reduces risk for the CDO"
      ],
      winLossPatterns: "Won 3 of 5 financial services AI analytics deals in the past 12 months. Key win factor: enterprise compliance posture and comparable customer reference. Key loss factor: security review timeline; recommend getting ahead of security audit process early.",
      analystPositioning: "Amplitude recognized in 2025 Gartner Magic Quadrant for Digital Analytics. Directly cited for enterprise behavioral analytics strength — relevant for BofA's IT governance review."
    },

    externalContext: {
      recentNews: [
        { headline: "Bank of America Commits $4B to AI Innovation in 2026, Largest Tech Investment in Company History", date: "2026-01-20", url: "https://investor.bankofamerica.com/news-releases/2026-01-20/", relevance: "AI investment at this scale makes measurement infrastructure a strategic priority — validates the AI COE use case.", confidence: "HIGH", source: "BofA Investor Relations" },
        { headline: "BofA Digital Banking Platform Crosses 45M Active Digital Users", date: "2026-02-15", url: "https://newsroom.bankofamerica.com/2026-02-15/", relevance: "45M digital users amplifies the value of even small conversion improvements in the digital banking journey.", confidence: "HIGH", source: "BofA Newsroom" }
      ],
      strategicPriorities: [
        { priority: "Demonstrate measurable ROI on the $4B AI investment to the board and shareholders", confidence: "HIGH", source: "Kaia call: Anthony stated board pushback on AI metrics; Q4 2025 earnings" },
        { priority: "Reduce digital banking friction through cross-channel journey optimization", confidence: "HIGH", source: "Kaia call: Mary Ellen Davenport; BofA Digital Report 2025" },
        { priority: "Consolidate analytics tooling from 4 point solutions to 1–2 strategic platforms", confidence: "MEDIUM", source: "Granola account plan notes; Mary Ellen Davenport mentioned consolidation as a budget justification angle" }
      ],
      industryTrends: "Financial services firms are under intense pressure to demonstrate AI ROI to regulators and shareholders. Behavioral analytics that measure AI feature adoption and downstream outcomes are becoming a compliance and governance requirement, not just a product analytics tool. 73% of financial services firms cite 'measuring AI ROI' as a top-3 challenge in 2026.",
      firmographics: {
        founded: "1904",
        headquarters: "Charlotte, NC",
        funding: "Public (NYSE: BAC)",
        techStack: ["Azure (primary cloud)", "Java", "Python", "React", "Adobe Experience Platform", "Teradata", "Hadoop"],
        techStackSource: "Clay enrichment + job postings + BofA Tech Blog"
      }
    },

    openQuestions: [
      { question: "Can we confirm Anthony's full name and title before the Charlotte onsite?", owner: "AE (Cameron Curran)", dueDate: "2026-04-25", priority: "high" },
      { question: "What is the BofA security review process timeline? Do we need to start SOC 2 / compliance docs now?", owner: "SE (Adam Yapkowitz)", dueDate: "2026-05-01", priority: "high" },
      { question: "Has Marc Berardi (CDO) been made aware of the Amplitude evaluation? Can Anthony facilitate an intro?", owner: "AE (Cameron Curran)", dueDate: "2026-05-15", priority: "high" },
      { question: "Is Quantum Metric still in active PoC evaluation? What is their current standing with the AI COE team?", owner: "VC (Kevin Colston)", dueDate: "2026-05-01", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + opportunity + 5 contacts (champion title unverified)" },
      { source: "Amplitude MCP", status: "not-found", detail: "No active subscription — prospect only" },
      { source: "Kaia / Outreach", status: "found", detail: "3 call transcripts (Mar–Apr 2026)" },
      { source: "Granola", status: "found", detail: "4 internal meeting notes including account planning and deal strategy" },
      { source: "Slack", status: "found", detail: "8 threads across #bofa-deal-room, #enterprise-deals, #ae-internal" },
      { source: "Glean / Drive", status: "found", detail: "6 documents: account plan, competitive landscape doc, financial services research, prior VC notes" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals detected" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount" },
      { source: "Web", status: "found", detail: "BofA earnings, newsroom, investor relations" }
    ]
  },

  // ============================================================
  // STRIPE — Prospect, Land
  // ============================================================
  "Stripe": {
    type: "prospect",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 35, medium: 38, low: 20, unconfirmed: 7, totalDataPoints: 36 },
    companyType: "private-funded",

    snapshot: {
      industry: "Financial Services / Fintech",
      segment: "Strategic",
      region: "NAMER",
      employees: 8500,
      revenue: "$5.5B",
      revenueSource: "Estimated from press coverage and funding (private company; not disclosed)",
      arr: 400000,
      contractYears: 2,
      renewalDate: null,
      productsLicensed: null,
      primaryUseCases: [
        { text: "Developer platform analytics — time-to-first-transaction and API adoption funnels", confidence: "HIGH", source: "Rachel Ng, Kaia call 2026-04-08" },
        { text: "Developer documentation effectiveness measurement", confidence: "MEDIUM", source: "Rachel Ng, Kaia call 2026-04-08" }
      ],
      stakeholders: [
        { name: "Rachel Ng", title: "Head of Developer Experience", role: "Champion", confidence: "HIGH", source: "Kaia call 2026-04-08; Salesforce" },
        { name: "Tom Harrington", title: "Director of Platform Product", role: "Business Sponsor", confidence: "MEDIUM", source: "Salesforce contact" },
        { name: "Sanjay Gupta", title: "VP Engineering, Developer Platform", role: "Technical Evaluator", confidence: "LOW", source: "Salesforce contact record only; not yet engaged" }
      ],
      accountTeam: { ae: "Lauren Park", se: "James O'Brien", csm: null, vc: "Kevin Colston" }
    },

    adoption: null,

    relationshipContext: [
      {
        insight: "Rachel Ng is a motivated champion — developer experience is her team's core mission and time-to-first-transaction is her personal north star metric. She described the current measurement gap as 'professionally embarrassing for a company that builds developer tools.'",
        confidence: "HIGH",
        source: "Kaia call 2026-04-08",
        category: "champion"
      },
      {
        insight: "Heap is the incumbent product analytics tool with 80+ users in the product org. Displacement requires a strong differentiation story on developer analytics depth — Heap's auto-capture works for standard web products but falls short for API-first developer journey tracking.",
        confidence: "HIGH",
        source: "Salesforce competitive data; AE note",
        category: "competitive"
      },
      {
        insight: "PostHog is a dark horse competitor with strong developer-culture appeal. Stripe's engineering team is open-source-friendly and PostHog's self-hosted option resonates. This is a real risk if the evaluation becomes engineering-led rather than champion-led.",
        confidence: "MEDIUM",
        source: "Salesforce competitive data — PostHog listed as medium threat",
        category: "competitive"
      },
      {
        insight: "The deal is in early stages (Qualification). Only 1 call has occurred. Rachel is engaged but the buying process has not started. There is no confirmed budget or timeline beyond a general interest in Q4 2026 close.",
        confidence: "HIGH",
        source: "Salesforce deal stage; Kaia call count",
        category: "decision-process"
      }
    ],

    valueRealized: null,

    productHealth: null,

    strategy: {
      recommendedProducts: ["Analytics"],
      scopeRecommendation: "Land with Analytics for the Developer Experience team (est. 30–40 users: developer advocates, platform PMs, DevEx engineers). If successful, expand to the broader product org (Heap displacement) in Year 2.",
      landAndExpand: "Year 1: Analytics for Developer Experience — measure API adoption funnels, time-to-first-transaction, and documentation effectiveness. Year 2: Expand to replace Heap for the broader product org (marketing, growth, and product teams). Year 3: Add Experiment for structured A/B testing on developer onboarding flows.",
      multiYearRationale: "A 2-year commitment gives Stripe's developer experience team time to build the measurement infrastructure, demonstrate impact on developer activation rates, and build the internal advocacy needed for a broader org expansion."
    },

    valueHypothesis: {
      summary: "Based on Stripe's stated priority of improving developer activation and reducing time-to-first-transaction, Amplitude can deliver an estimated $15M in annual value across 2 use cases.",
      items: [
        {
          title: "Developer Platform Analytics — Improved Developer Activation Rate",
          projection: 12000000,
          methodology: "Stripe's current median time-to-first-transaction is 4 days vs. a 2-day target. Industry benchmark (Fortune 100 Fintech Amplitude case study): 38% reduction in time-to-first-integration, 52% improvement in API activation rate. Applied conservatively at 25% improvement to Stripe's estimated 500K monthly developer signups × $24 average annual revenue per activated developer (based on Stripe's take rate) × 25% improvement = $3M direct; broader platform activation multiplier lifts to $12M when applied to full developer cohort.",
          comparableCustomer: "Fortune 100 Fintech (Amplitude case study): 38% reduction in developer time-to-first-integration, 52% improvement in API activation rate. PayPal: 44% improvement in checkout completion through developer UX optimization.",
          confidence: "MEDIUM",
          source: "Kaia call: Rachel Ng stated 4-day vs. 2-day target gap; Fortune 100 Fintech case study; industry developer activation benchmarks"
        },
        {
          title: "Documentation Effectiveness — Reduced Developer Support Burden",
          projection: 3000000,
          methodology: "Amplitude analytics on documentation engagement identifies which pages correlate with successful API integration vs. developer drop-off. Industry benchmark: 30–40% reduction in developer support tickets when documentation is behaviorally optimized. Stripe handles an estimated 50K developer support interactions/month at an estimated $20 loaded cost each = $12M/yr. 25% reduction × $12M = $3M/yr support cost savings.",
          comparableCustomer: "Similar to the developer platform documentation optimization use case at Fortune 100 Fintech — documentation behavioral analytics reduced time-to-integration by 38%.",
          confidence: "LOW",
          source: "Industry benchmark; Rachel Ng mentioned documentation effectiveness as a secondary use case; support cost estimate based on public developer forum activity"
        }
      ]
    },

    competitiveLandscape: {
      currentTools: [
        { name: "Heap", product: "Digital Insights", maturity: "established", since: "2021", confidence: "HIGH", source: "Salesforce competitor field", notes: "80+ users in the product org. Auto-capture deployed across Stripe Dashboard. Incumbent." },
        { name: "Datadog", product: "RUM / APM", maturity: "deeply-embedded", since: "2019", confidence: "HIGH", source: "Salesforce competitive data; Clay enrichment", notes: "Infrastructure monitoring. Some overlap with product analytics use cases but not directly competitive." }
      ],
      buyerIntent: "No active G2 buyer intent signals. Early-stage deal driven by champion outreach, not vendor research.",
      amplitudeDifferentiators: [
        "API-first developer journey analytics purpose-built for platform companies — Heap's auto-capture cannot track developer API interactions at the funnel level Stripe needs",
        "Enterprise-scale cohort analysis for developer segmentation (e.g., activated vs. abandoned, by API product, by company size) that Heap cannot match",
        "Fortune 100 Fintech comparable customer reference with documented 38% improvement in developer time-to-integration"
      ],
      winLossPatterns: "Won 4 of 7 similar developer platform analytics deals in the past 18 months when Heap was the incumbent. Key win: behavioral analytics depth for non-standard (API-first) developer journeys. Key risk: PostHog's open-source appeal when engineering team drives the evaluation.",
      analystPositioning: "Amplitude cited in 2025 Forrester Wave as the strongest platform for behavioral product analytics in complex, multi-surface products — directly applicable to Stripe's API + Dashboard + documentation analytics need."
    },

    externalContext: {
      recentNews: [
        { headline: "Stripe Announces $700B in Total Payment Volume Processed in 2025", date: "2026-02-04", url: "https://stripe.com/newsroom/news/2026-payments-volume", relevance: "Scale of developer ecosystem reinforces the value of improving developer activation — each percentage point of activation improvement is worth hundreds of millions.", confidence: "HIGH", source: "Stripe Newsroom" },
        { headline: "Stripe Expands Developer Platform with AI-Powered API Tools", date: "2026-03-18", url: "https://stripe.com/blog/ai-api-tools-2026", relevance: "New AI API products create new developer activation measurement requirements — directly expands the Amplitude use case.", confidence: "MEDIUM", source: "Stripe Blog" }
      ],
      strategicPriorities: [
        { priority: "Reduce developer time-to-first-transaction from 4 days to 2 days", confidence: "HIGH", source: "Rachel Ng Kaia call 2026-04-08" },
        { priority: "Expand Stripe's developer platform beyond payments into financial infrastructure (banking, lending, crypto)", confidence: "MEDIUM", source: "Press coverage; Stripe website" },
        { priority: "Improve documentation quality and developer portal experience", confidence: "HIGH", source: "Rachel Ng Kaia call 2026-04-08" }
      ],
      industryTrends: "Developer platforms are the fastest-growing segment of B2B software. Companies that reduce time-to-first-integration and optimize the developer activation funnel have a measurable advantage in market share. Analytics tools that can instrument non-standard (API-first, SDK-based) developer journeys are becoming strategic infrastructure for platform companies.",
      firmographics: {
        founded: "2010",
        headquarters: "San Francisco, CA / Dublin, Ireland",
        funding: "Private — $8.7B raised, $65B valuation (last round 2024)",
        techStack: ["AWS", "Ruby", "Go", "TypeScript", "React", "Datadog", "Heap", "PostgreSQL"],
        techStackSource: "Clay enrichment + job postings + Stripe engineering blog"
      }
    },

    openQuestions: [
      { question: "Can Rachel Ng facilitate a second discovery call with Tom Harrington (Director Platform Product) to expand the buying group?", owner: "AE (Lauren Park)", dueDate: "2026-04-30", priority: "high" },
      { question: "What is Heap's current contract renewal timeline at Stripe? Are we in a replacement window?", owner: "AE (Lauren Park)", dueDate: "2026-05-01", priority: "high" },
      { question: "Has Sanjay Gupta (VP Engineering) been introduced to the evaluation? We need to neutralize PostHog's engineering appeal before the eval goes technical.", owner: "SE (James O'Brien)", dueDate: "2026-05-15", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + opportunity + 3 contacts" },
      { source: "Amplitude MCP", status: "not-found", detail: "No active subscription — prospect only" },
      { source: "Kaia / Outreach", status: "found", detail: "1 call transcript (Apr 2026)" },
      { source: "Granola", status: "not-found", detail: "No internal meeting notes for Stripe yet" },
      { source: "Slack", status: "not-found", detail: "No Stripe deal room channel yet — early stage" },
      { source: "Glean / Drive", status: "not-found", detail: "No Stripe documents found in Drive" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount, funding" },
      { source: "Web", status: "found", detail: "Payment volume announcement, Stripe Blog, engineering blog" }
    ]
  },

  // ============================================================
  // RIVIAN — Prospect, Land
  // ============================================================
  "Rivian": {
    type: "prospect",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 28, medium: 35, low: 25, unconfirmed: 12, totalDataPoints: 28 },
    companyType: "public",

    healthScore: {
      score: 38,
      trend: "stable",
      components: {
        stakeholder: 45,
        engagement: 30
      }
    },

    dealTimeline: [
      { date: "2026-01-10", event: "Rivian annual delivery report — software subscription revenue focus confirmed; VC target flagged by AE Alex Hernandez", type: "milestone", sourceUrl: "https://rivian.com/newsroom/2025-annual-deliveries" },
      { date: "2026-02-15", event: "AE prospecting outreach to Jordan Blake (Director of Digital Products) — no response yet", type: "milestone" },
      { date: "2026-03-05", event: "Rivian-Amazon fleet software partnership announced — additional analytics requirements identified", type: "milestone", sourceUrl: "https://techcrunch.com/2026/03/05/rivian-amazon-software/" },
      { date: "2026-04-10", event: "Salesforce opportunity created — RFP identified; Mixpanel and Pendo confirmed as competitors", type: "milestone" },
      { date: "2026-04-25", event: "Target: first discovery call with Jordan Blake", type: "meeting" },
      { date: "2026-05-15", event: "Target: Global Automotive OEM reference call arranged for Jordan Blake before RFP scoring", type: "milestone" },
      { date: "2026-07-01", event: "Target: RFP submission deadline — business case and value hypothesis required", type: "deliverable" }
    ],

    priorVcEngagements: [],

    talkTrack: {
      nextMeeting: "First discovery call with Jordan Blake (Director of Digital Products) — April 25, 2026",
      keyMessages: [
        "Open with curiosity, not pitch: 'Rivian is building a software-defined vehicle business on top of a hardware company — that's a fundamentally different analytics problem than traditional auto. What's the biggest measurement gap your team is hitting right now?'",
        "Reference the comparable customer early: 'We have a published case study with a Global Automotive OEM that documented 48% increase in connected feature engagement after deploying Amplitude — directly comparable to your companion app use case.'",
        "Establish the RFP differentiation before scoring starts: 'Before you finalize your RFP criteria, I'd like to show you one thing Mixpanel and Pendo can't do at your scale — behavioral identity resolution across mobile app, web portal, and vehicle API in a single user journey.'"
      ],
      objectionHandling: [
        { objection: "We're running a formal RFP — can you just submit a proposal?", response: "Request a discovery call first: 'We can absolutely submit to your RFP, and we want to. Before we do, 30 minutes with Jordan and Samantha would let us tailor the proposal to your specific connected vehicle use case rather than a generic response. The OEM case study alone is worth the conversation.'" },
        { objection: "Mixpanel looks simpler and cheaper for what we need right now", response: "Quantify the velocity gap: 'Mixpanel is a good starting point for basic event analytics. The question is whether you want a tool that can grow with your connected vehicle ambitions — or one you'll outgrow when the Amazon fleet analytics requirements come in. At Rivian's connected services revenue trajectory, the difference in platform depth is worth $1M+ in faster iteration on OTA updates alone.'" }
      ],
      competitiveCounters: [
        { competitor: "Mixpanel", counter: "Mixpanel has no native identity resolution across mobile, web, and API surfaces — a critical gap for an EV company where the same owner interacts across your companion app, configurator, and connected vehicle API. Amplitude handles multi-surface identity natively." },
        { competitor: "Pendo", counter: "Pendo is built for SaaS product tours and in-app guidance. Rivian's companion app and connected vehicle analytics require behavioral funnel analysis and cohort segmentation at a depth Pendo cannot provide for a hardware-plus-software product experience." }
      ]
    },

    snapshot: {
      industry: "Automotive / EV",
      segment: "Major",
      region: "NAMER",
      employees: 14000,
      revenue: "$4.1B",
      revenueSource: "10-K FY2025",
      arr: 280000,
      contractYears: 2,
      renewalDate: null,
      productsLicensed: null,
      primaryUseCases: [
        { text: "Connected vehicle companion app analytics and in-vehicle UX measurement", confidence: "MEDIUM", source: "Jordan Blake, Salesforce contact notes", sourceUrl: "https://amplitude.my.salesforce.com/001rivian-jordan" },
        { text: "EV owner onboarding and software adoption analytics", confidence: "MEDIUM", source: "Inferred from MOCK_KAIA signals; not confirmed in calls" }
      ],
      stakeholders: [
        { name: "Jordan Blake", title: "Director of Digital Products", role: "Champion", confidence: "MEDIUM", source: "Salesforce contact; no call transcripts yet", sourceUrl: "https://amplitude.my.salesforce.com/001rivian-jordan" },
        { name: "Samantha Reed", title: "Head of Connected Vehicle Software", role: "Technical Evaluator", confidence: "LOW", source: "Salesforce contact record only", sourceUrl: "https://amplitude.my.salesforce.com/001rivian-samantha" }
      ],
      accountTeam: { ae: "Alex Hernandez", se: "Natalie Wu", csm: null, vc: "Kevin Colston" }
    },

    adoption: null,

    relationshipContext: [
      {
        insight: "This is the earliest-stage deal in the pipeline (Stage 1 – Prospecting). No discovery calls have occurred yet. All intelligence is from Salesforce contact records, web research, and AE prospecting notes.",
        confidence: "LOW",
        source: "Salesforce deal stage; Kaia: 0 calls",
        sourceUrl: "https://amplitude.my.salesforce.com/001rivian-opportunity",
        category: "decision-process"
      },
      {
        insight: "Rivian is in a formal RFP with Mixpanel as the primary competitor for the mobile app analytics use case. Pendo is also in the evaluation. Amplitude needs to establish differentiation before the RFP scoring begins.",
        confidence: "MEDIUM",
        source: "Salesforce competitive data — Mixpanel listed as high threat, Pendo as medium",
        sourceUrl: "https://amplitude.my.salesforce.com/001rivian-competitive",
        category: "competitive"
      },
      {
        insight: "Rivian has no product analytics tool deployed beyond GA4 for basic web analytics. This is a greenfield opportunity. Palantir Foundry is used for manufacturing and supply chain but is not competitive for product analytics.",
        confidence: "HIGH",
        source: "Salesforce competitive data; Clay enrichment confirms GA4 as only web analytics tool",
        sourceUrl: "https://amplitude.my.salesforce.com/001rivian-competitive",
        category: "competitive"
      },
      {
        insight: "Health score is 30 — lowest in the portfolio. Deal is in very early stages with limited engagement signals. The formal RFP timeline and Mixpanel's strong pitch make this a challenging close.",
        confidence: "HIGH",
        source: "Salesforce health score; deal stage",
        sourceUrl: "https://amplitude.my.salesforce.com/001rivian-opportunity",
        category: "risk"
      }
    ],

    valueRealized: null,

    productHealth: null,

    strategy: {
      recommendedProducts: ["Analytics"],
      scopeRecommendation: "Land with Analytics for the Digital Products team (est. 20–30 users: connected vehicle PMs, UX researchers, digital product analysts). Focus on the companion app and OTA update measurement use case, not the in-vehicle telemetry use case (which is better served by Palantir or custom IoT tooling).",
      landAndExpand: "Year 1: Analytics for connected vehicle companion app and EV owner onboarding funnel. Year 2: Expand to the marketing team for digital-to-dealer journey analytics. Year 3: Add Experiment for OTA software update A/B testing if the software platform matures.",
      multiYearRationale: "Rivian is in a growth phase with software subscription revenue becoming increasingly important. A 2-year commitment allows time to prove value on the companion app before expanding to in-vehicle and marketing analytics."
    },

    valueHypothesis: {
      summary: "Based on Rivian's connected vehicle software strategy and EV owner onboarding gaps, Amplitude can deliver an estimated $6M in annual value across 2 use cases.",
      items: [
        {
          title: "EV Owner Onboarding — Improved Software Feature Adoption",
          projection: 4000000,
          methodology: "Rivian's connected services subscription revenue is growing. Industry benchmark from Global Automotive OEM case study: 48% increase in connected feature engagement after behavioral analytics deployment. Applied conservatively at 25% to Rivian's estimated 100K connected vehicle fleet × $800/yr average connected services revenue × 25% adoption improvement = $20M potential; 20% attribution to analytics tooling = $4M.",
          comparableCustomer: "Global Automotive OEM (Amplitude case study): 48% increase in connected feature engagement, 35% improvement in app session depth, 22% reduction in in-vehicle UX support tickets.",
          confidence: "LOW",
          source: "Industry benchmark; Global Automotive OEM case study; Rivian connected fleet size estimated from public delivery data"
        },
        {
          title: "Companion App Funnel Optimization — Improved EV Owner Activation",
          projection: 2000000,
          methodology: "Rivian's companion app is the primary interface for vehicle control, charging management, and software updates. Improving 30-day feature activation from an estimated 45% to 60% × 100K vehicles × $200 incremental connected service value per activated vehicle = $3M; conservative 65% attribution = $1.95M, rounded to $2M.",
          comparableCustomer: "Under Armour (Amplitude case study): 45% increase in cross-app engagement through behavioral analytics-driven feature discovery improvements.",
          confidence: "LOW",
          source: "Rivian app store reviews suggest low feature discoverability; activation estimate is analyst inference, not customer-confirmed"
        }
      ]
    },

    competitiveLandscape: {
      currentTools: [
        { name: "Google Analytics 4", product: "GA4", maturity: "emerging", since: "2024", confidence: "MEDIUM", source: "Salesforce competitive data; Clay enrichment", sourceUrl: "https://amplitude.my.salesforce.com/001rivian-competitive", notes: "Basic web analytics only. No product analytics for connected vehicle or companion app." },
        { name: "Palantir Foundry", product: "Data Platform", maturity: "established", since: "2022", confidence: "HIGH", source: "Rivian public disclosures; AE research", notes: "Manufacturing and supply chain data platform. Not competitive for product analytics." }
      ],
      buyerIntent: "No G2 buyer intent signals detected. RFP is an internally-driven process, not externally triggered.",
      amplitudeDifferentiators: [
        "Purpose-built behavioral product analytics for companion app and connected services — GA4 cannot provide the funnel depth or cohort analysis needed",
        "Global Automotive OEM case study provides a directly comparable connected vehicle reference with documented outcomes",
        "Enterprise-scale identity resolution across mobile app, web portal, and API interactions — critical for the multi-surface EV owner journey"
      ],
      winLossPatterns: "Limited automotive vertical data. Won 2 of 3 connected vehicle deals in past 12 months when Mixpanel was the primary competitor. Mixpanel won on price in the third deal. Rivian's RFP nature makes the business case quality critical.",
      analystPositioning: "Amplitude referenced in 2025 Gartner IoT Analytics research as a platform for behavioral analytics in connected product companies. Relevant for Rivian's connected vehicle positioning."
    },

    externalContext: {
      recentNews: [
        { headline: "Rivian Delivers 51,000 Vehicles in 2025, Targets Software Subscription Revenue Growth in 2026", date: "2026-01-10", url: "https://rivian.com/newsroom/2025-annual-deliveries", relevance: "Software subscription revenue focus makes connected services analytics a strategic priority, not a nice-to-have.", confidence: "HIGH", source: "Rivian Newsroom" },
        { headline: "Rivian Partners with Amazon to Expand Fleet Software Capabilities", date: "2026-03-05", url: "https://techcrunch.com/2026/03/05/rivian-amazon-software/", relevance: "Fleet software expansion creates additional product analytics requirements for the commercial vehicle segment.", confidence: "MEDIUM", source: "TechCrunch" }
      ],
      strategicPriorities: [
        { priority: "Grow connected services subscription revenue through improved software feature adoption", confidence: "HIGH", source: "Q4 2025 earnings call; Rivian investor day 2025" },
        { priority: "Improve EV owner app experience to reduce service calls and increase feature engagement", confidence: "MEDIUM", source: "Inferred from public app store reviews and Rivian product roadmap announcements" },
        { priority: "Expand commercial fleet with Amazon partnership — software analytics required for fleet management", confidence: "MEDIUM", source: "TechCrunch; Rivian newsroom" }
      ],
      industryTrends: "EV manufacturers are transitioning from hardware companies to software companies. Recurring revenue from connected services and OTA software updates is becoming a primary growth lever. Product analytics for in-vehicle and companion app experiences is a nascent but rapidly growing category.",
      firmographics: {
        founded: "2009",
        headquarters: "Normal, IL (HQ) / Palo Alto, CA (tech office)",
        funding: "Public (NASDAQ: RIVN)",
        techStack: ["AWS", "Python", "Kotlin", "Swift", "Palantir Foundry", "Google Analytics 4"],
        techStackSource: "Clay enrichment + job postings + Rivian engineering blog"
      }
    },

    openQuestions: [
      { question: "Has a first discovery call been scheduled with Jordan Blake? This is the critical first step.", owner: "AE (Alex Hernandez)", dueDate: "2026-04-25", priority: "high" },
      { question: "What is the RFP timeline and scoring criteria? We need to understand the evaluation framework before submitting.", owner: "AE (Alex Hernandez)", dueDate: "2026-05-01", priority: "high" },
      { question: "Can we get a Global Automotive OEM reference call arranged for Jordan Blake before the RFP scoring?", owner: "VC (Kevin Colston)", dueDate: "2026-05-15", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + opportunity + 2 contacts; very thin — early stage" },
      { source: "Amplitude MCP", status: "not-found", detail: "No active subscription — prospect only" },
      { source: "Kaia / Outreach", status: "not-found", detail: "No calls logged yet — prospecting stage" },
      { source: "Granola", status: "not-found", detail: "No internal meeting notes" },
      { source: "Slack", status: "not-found", detail: "No deal room channel yet" },
      { source: "Glean / Drive", status: "not-found", detail: "No Rivian documents found" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, delivery data, headcount" },
      { source: "Web", status: "found", detail: "Delivery report, TechCrunch, Rivian newsroom, investor day" }
    ]
  },

  // ============================================================
  // FIGMA — Prospect, Land
  // ============================================================
  "Figma": {
    type: "prospect",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 48, medium: 35, low: 12, unconfirmed: 5, totalDataPoints: 38 },
    companyType: "private-funded",

    snapshot: {
      industry: "Design / SaaS",
      segment: "Major",
      region: "NAMER",
      employees: 1600,
      revenue: "$850M",
      revenueSource: "Estimated from funding and growth rate (private company; not disclosed); Bloomberg reported $800M–$1B ARR range",
      arr: 350000,
      contractYears: 2,
      renewalDate: null,
      productsLicensed: null,
      primaryUseCases: [
        { text: "PLG free-to-paid conversion funnel optimization", confidence: "HIGH", source: "Olivia Park, Kaia call 2026-03-20" },
        { text: "Collaboration analytics — team virality and workspace adoption", confidence: "HIGH", source: "Daniel Kim, Kaia call 2026-04-01" }
      ],
      stakeholders: [
        { name: "Olivia Park", title: "Head of Growth", role: "Champion", confidence: "HIGH", source: "Kaia calls; Granola account plan" },
        { name: "Daniel Kim", title: "Sr. Product Manager, Collaboration", role: "Technical Sponsor", confidence: "HIGH", source: "Kaia call 2026-04-01" },
        { name: "Sophie Martin", title: "VP Product", role: "Economic Buyer", confidence: "LOW", source: "Salesforce contact record; not yet engaged" }
      ],
      accountTeam: { ae: "Tyler Brooks", se: "Emily Sato", csm: null, vc: "Kevin Colston" }
    },

    adoption: null,

    relationshipContext: [
      {
        insight: "Olivia Park is a motivated champion — free-to-paid conversion improvement is tied to her team's bonus structure. She described Figma's current 3.2% conversion as 'embarrassingly below what we know is possible.'",
        confidence: "HIGH",
        source: "Kaia call 2026-03-20",
        category: "champion"
      },
      {
        insight: "PostHog is the incumbent with 60+ engineering team users and strong internal loyalty due to its open-source positioning. Displacement requires winning Olivia Park's growth team independent of engineering's PostHog preference.",
        confidence: "HIGH",
        source: "Salesforce competitive data; Slack #figma-deal-room",
        category: "competitive"
      },
      {
        insight: "Following the failed Adobe acquisition, Figma is operating as a fully independent company with a renewed growth mandate and an IPO expected in 2026–2027. This creates motivation for the growth team to show measurable PLG metrics.",
        confidence: "HIGH",
        source: "Public press coverage; AE research",
        category: "decision-process"
      },
      {
        insight: "Team-based accounts have 4x higher LTV than individual accounts at Figma. Daniel Kim's collaboration analytics use case (measuring virality and team adoption patterns) is directly tied to Figma's highest-value segment.",
        confidence: "HIGH",
        source: "Kaia call 2026-04-01; Daniel Kim shared internal data",
        category: "champion"
      },
      {
        insight: "Figma is concerned about migration cost from PostHog. Olivia says the engineering team will resist switching tools even if the growth team prefers Amplitude. The champion needs executive air cover to proceed.",
        confidence: "HIGH",
        source: "Slack #figma-deal-room 2026-03-28",
        category: "risk"
      }
    ],

    valueRealized: null,

    productHealth: null,

    strategy: {
      recommendedProducts: ["Analytics"],
      scopeRecommendation: "Land with Analytics for the Growth team only (est. 20–30 users: growth PMs, data analysts, marketing ops). Explicitly do not attempt to displace PostHog for engineering — allow both tools to coexist. Grow from growth team into product team over time.",
      landAndExpand: "Year 1: Analytics for Growth team — PLG funnel, cohort analysis, collaboration depth measurement. Year 2: Expand to product managers across core design features as Amplitude proves superior depth vs. PostHog for behavioral analytics. Year 3: Add Experiment for structured conversion optimization testing once the growth team is fully onboarded.",
      multiYearRationale: "Figma's PLG motion requires sustained measurement over multiple funnel optimization cycles. A 2-year commitment ensures continuity through the expected IPO preparation period where conversion metrics will be under investor scrutiny."
    },

    valueHypothesis: {
      summary: "Based on Figma's PLG growth model and stated conversion gap, Amplitude can deliver an estimated $75M+ in annual value by improving free-to-paid conversion and accelerating team-based adoption.",
      items: [
        {
          title: "PLG Funnel Optimization — Free-to-Paid Conversion Improvement",
          projection: 40000000,
          methodology: "Figma's current free-to-paid conversion is 3.2%; Olivia Park believes the ceiling is 5%+. Industry top-quartile is 5–7%. Conservative target: improve from 3.2% to 4.5% (1.3pp) using Amplitude behavioral analytics to identify upgrade predictors and optimize conversion moments. 1.3pp improvement × estimated $3B ARR base × 1% conversion impact factor = $39M incremental ARR potential. Amplitude attribution factor: 50% = $19.5M; reported as total addressable value = $40M.",
          comparableCustomer: "Calm (Amplitude case study): 19% lift in free-to-paid conversion using Amplitude Experimentation. Atlassian: 33% improvement in free-to-paid conversion. Both are SaaS PLG companies with similar funnel structures.",
          confidence: "MEDIUM",
          source: "Olivia Park Kaia call: '3.2% current, 5%+ possible'; Glean PLG playbook: top-quartile SaaS achieves 5–7%; Atlassian and Calm comparable customer data"
        },
        {
          title: "Collaboration Analytics — Team Virality Loop Optimization",
          projection: 15000000,
          methodology: "Teams with high collaboration depth (measured by shared pages, comment threads, co-editing sessions) have 4x higher LTV at Figma. Improving team activation from the current estimated 40% to 55% (15pp improvement) × 500K teams in free tier × $200 avg incremental revenue per activated team = $15M. Attribution factor: 60% to analytics-driven product changes = $9M direct; total addressable value stated as $15M.",
          comparableCustomer: "Atlassian (Amplitude case study): 2.4x increase in cross-product expansion rate; 33% free-to-paid conversion improvement driven by collaboration analytics. Notion: 28% team activation improvement through Amplitude-informed onboarding changes.",
          confidence: "MEDIUM",
          source: "Daniel Kim shared 4x LTV data in Kaia call 2026-04-01; team activation estimate is analyst inference; Atlassian comparable"
        }
      ]
    },

    competitiveLandscape: {
      currentTools: [
        { name: "PostHog", product: "Product Analytics", maturity: "established", since: "2023", confidence: "HIGH", source: "Salesforce competitor field; Olivia Park confirmed", notes: "Engineering team deployed PostHog for PLG tracking. 60+ users. Strong open-source loyalty." },
        { name: "LaunchDarkly", product: "Feature Flags", maturity: "established", since: "2022", confidence: "MEDIUM", source: "Salesforce competitive data", notes: "Feature management. Potential future integration point with Amplitude Experiment." }
      ],
      buyerIntent: "No G2 buyer intent signals detected. Evaluation is champion-driven by Olivia Park's growth team.",
      amplitudeDifferentiators: [
        "Enterprise-grade behavioral analytics with advanced cohort and funnel analysis that PostHog cannot match at the sophistication level Olivia Park's team needs for PLG optimization",
        "Collaboration-specific analytics templates built for SaaS virality loops — directly applicable to Figma's team activation use case",
        "Non-technical user accessibility — Olivia's growth team can work in Amplitude without engineering support; PostHog requires technical setup for advanced analysis"
      ],
      winLossPatterns: "Won 4 of 6 PLG-focused SaaS deals where PostHog was the incumbent in the past 12 months. Key win factor: non-technical user accessibility and advanced cohort analysis for growth teams. Key risk: engineering team veto when open-source culture is strong.",
      analystPositioning: "Amplitude specifically cited by Forrester as the leading solution for Product-Led Growth analytics. PLG is a named use case category where Amplitude has more published references than any competitor."
    },

    externalContext: {
      recentNews: [
        { headline: "Figma Files Confidential IPO Registration, Targets 2026 Public Listing", date: "2026-02-28", url: "https://www.wsj.com/tech/figma-ipo-filing-2026/", relevance: "IPO preparation creates urgency to demonstrate strong PLG metrics — directly motivates Olivia Park's conversion optimization mandate.", confidence: "HIGH", source: "WSJ" },
        { headline: "Figma Launches Dev Mode Pro for Enterprise — Targets 2M Developer Users", date: "2026-03-15", url: "https://www.figma.com/blog/dev-mode-pro-launch/", relevance: "Developer user expansion creates new analytics requirements for developer-specific onboarding and feature adoption.", confidence: "MEDIUM", source: "Figma Blog" }
      ],
      strategicPriorities: [
        { priority: "Improve free-to-paid conversion rate from 3.2% to 5%+ before IPO", confidence: "HIGH", source: "Olivia Park Kaia call 2026-03-20; IPO preparation context" },
        { priority: "Deepen team workspace collaboration to drive enterprise expansion revenue", confidence: "HIGH", source: "Daniel Kim Kaia call 2026-04-01" },
        { priority: "Expand developer user base through Dev Mode Pro and API integrations", confidence: "MEDIUM", source: "Figma Blog launch announcement" }
      ],
      industryTrends: "Design tools are evolving from individual creative tools to enterprise collaboration platforms. The ability to measure team collaboration depth and virality is becoming a core competency for the category. PLG companies approaching IPO face intense scrutiny on conversion metrics and sustainable revenue growth — analytics tools that demonstrate measurable conversion lift become strategically important.",
      firmographics: {
        founded: "2012",
        headquarters: "San Francisco, CA",
        funding: "Private — $750M raised (independent after Adobe acquisition fell through); IPO expected 2026",
        techStack: ["AWS", "TypeScript", "React", "Rust", "PostgreSQL", "PostHog", "LaunchDarkly"],
        techStackSource: "Clay enrichment + Figma engineering blog + job postings"
      }
    },

    openQuestions: [
      { question: "Can Olivia Park get Sophie Martin (VP Product) involved in the evaluation? We need executive sponsorship to overcome PostHog's engineering support.", owner: "AE (Tyler Brooks)", dueDate: "2026-05-01", priority: "high" },
      { question: "What is the current PostHog contract term? Is Figma in a renewal window that creates a natural switching moment?", owner: "AE (Tyler Brooks)", dueDate: "2026-04-30", priority: "high" },
      { question: "Can we run a 2-week proof of concept with Olivia's team before the formal evaluation to demonstrate collaboration analytics depth?", owner: "SE (Emily Sato)", dueDate: "2026-05-10", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + opportunity + 3 contacts" },
      { source: "Amplitude MCP", status: "not-found", detail: "No active subscription — prospect only" },
      { source: "Kaia / Outreach", status: "found", detail: "2 call transcripts (Mar–Apr 2026)" },
      { source: "Granola", status: "found", detail: "1 account planning session note" },
      { source: "Slack", status: "found", detail: "3 threads in #figma-deal-room and #plg-deals" },
      { source: "Glean / Drive", status: "found", detail: "2 documents: PLG analytics playbook, SaaS conversion benchmark report" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals detected" },
      { source: "Clay", status: "found", detail: "Firmographics, funding, headcount" },
      { source: "Web", status: "found", detail: "IPO filing report, Figma Blog, WSJ" }
    ]
  },

  // ============================================================
  // SHOPIFY — Prospect, Land
  // ============================================================
  "Shopify": {
    type: "prospect",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 45, medium: 35, low: 15, unconfirmed: 5, totalDataPoints: 40 },
    companyType: "public",

    snapshot: {
      industry: "E-Commerce / SaaS",
      segment: "Strategic",
      region: "NAMER",
      employees: 11000,
      revenue: "$8.9B",
      revenueSource: "10-K FY2025",
      arr: 450000,
      contractYears: 2,
      renewalDate: null,
      productsLicensed: null,
      primaryUseCases: [
        { text: "Merchant admin experience analytics and merchant onboarding funnel optimization", confidence: "HIGH", source: "Lena Torres, Kaia call 2026-03-25" },
        { text: "Checkout conversion optimization — Shop Pay vs. standard checkout behavioral comparison", confidence: "HIGH", source: "Matt Hensley, Kaia call 2026-04-08" }
      ],
      stakeholders: [
        { name: "Lena Torres", title: "Director of Growth", role: "Champion", confidence: "HIGH", source: "Kaia calls; Granola account plan" },
        { name: "Matt Hensley", title: "Sr. Product Manager, Checkout", role: "Technical Sponsor", confidence: "HIGH", source: "Kaia call 2026-04-08" },
        { name: "Priya Sharma", title: "VP Product, Merchant Experience", role: "Economic Buyer", confidence: "MEDIUM", source: "Salesforce contact; introduced by Lena Torres" }
      ],
      accountTeam: { ae: "Tyler Brooks", se: "James O'Brien", csm: null, vc: "Kevin Colston" }
    },

    adoption: null,

    relationshipContext: [
      {
        insight: "Lena Torres has high personal motivation — checkout conversion is a KPI tied to her team's bonus structure. She described the measurement gap as 'unacceptable for a company that sells commerce infrastructure to 2M merchants.'",
        confidence: "HIGH",
        source: "Slack #shopify-deal-room 2026-03-30 (Lena Torres direct comment to AE)",
        category: "champion"
      },
      {
        insight: "Heap has an active pilot in the merchant admin experience team (20 users) and has a head start. The autocapture story resonates with Shopify's speed-of-deployment culture. We need to demonstrate superior analytics depth before Heap converts the pilot to a full contract.",
        confidence: "HIGH",
        source: "Salesforce competitive data; Slack #shopify-deal-room 2026-04-10",
        category: "competitive"
      },
      {
        insight: "Shopify's data platform team has raised concerns about data residency for Canadian merchant data. This is a potential procurement blocker that must be addressed proactively with Amplitude's Canadian data center capability.",
        confidence: "MEDIUM",
        source: "Slack #shopify-deal-room 2026-04-02 (AE Tyler Brooks flagged)",
        category: "risk"
      },
      {
        insight: "Merchant churn was cited in 34% of merchant exit surveys as analytics-related — merchants who can't see ROI from their Shopify investment churn. This gives the merchant analytics use case company-level strategic importance beyond Lena's team.",
        confidence: "HIGH",
        source: "Kaia call 2026-03-25: Lena Torres shared internal churn survey data",
        category: "decision-process"
      }
    ],

    valueRealized: null,

    productHealth: null,

    strategy: {
      recommendedProducts: ["Analytics"],
      scopeRecommendation: "Land with Analytics for the Growth and Merchant Experience teams (est. 40–50 users: growth PMs, checkout PMs, merchant analytics analysts). Displace or expand beyond the Heap pilot by demonstrating funnel analytics depth for the checkout optimization use case.",
      landAndExpand: "Year 1: Analytics for internal product and growth teams — merchant admin funnel, checkout conversion analysis. Year 2: Expand to merchant-facing analytics features — Shopify builds analytics dashboards for merchants powered by Amplitude data. Year 3: Add Experiment for merchant checkout A/B testing at scale.",
      multiYearRationale: "The merchant-facing analytics expansion in Year 2 has the potential to 3x the ARR as it becomes embedded in Shopify's product rather than just internal tooling. A 2-year commitment creates the foundation for this higher-value expansion."
    },

    valueHypothesis: {
      summary: "Based on Shopify's stated merchant analytics gaps and checkout conversion opportunity, Amplitude can deliver an estimated $380M+ in annual value across 2 use cases.",
      items: [
        {
          title: "Merchant Churn Reduction Through Better Analytics",
          projection: 180000000,
          methodology: "Merchant churn cited as analytics-related in 34% of exit surveys (Lena Torres confirmed). Reducing merchant churn by 2% through better internal and merchant-facing analytics: Shopify has ~2M merchants; estimated annual merchant GMV at risk from churn is ~$9B. 2% churn reduction × $9B GMV × 2% Shopify take rate = $3.6B GMV protected × 2% platform fee = $72M revenue protected; with indirect network effects and acquisition cost avoidance, total value = $180M. Attribution factor: 25% to analytics tooling = $45M direct Amplitude impact.",
          comparableCustomer: "Burger King (Amplitude case study): 18% lift in mobile order conversion through funnel analytics. Rappi: 42% improvement in merchant onboarding completion, 25% increase in merchant GMV in first 30 days.",
          confidence: "LOW",
          source: "Lena Torres shared 34% churn survey stat; merchant count from Shopify public filings; GMV estimates from analyst reports; churn reduction estimate is analyst inference"
        },
        {
          title: "Checkout Conversion Optimization — Shop Pay Advantage Quantification and Expansion",
          projection: 200000000,
          methodology: "Shop Pay converts 12% better than standard checkout (Shopify public data). Understanding the exact behavioral drivers allows Shopify to extend this advantage to more checkout flows and markets. Each 1% improvement in checkout conversion across $220B annual GMV × 1% Shopify take rate = $2.2B merchant GMV → $22M Shopify revenue. Achieving 0.5% net improvement via analytics-informed optimization = $11M direct; with merchant LTV effects = $200M total addressable. Attribution: 15% = $30M.",
          comparableCustomer: "Burger King: 18% checkout conversion lift. PayPal: 44% checkout completion improvement using Amplitude for behavioral UX analysis.",
          confidence: "LOW",
          source: "Shopify public data on Shop Pay conversion advantage; Matt Hensley Kaia call 2026-04-08; PayPal and Burger King comparable customers"
        }
      ]
    },

    competitiveLandscape: {
      currentTools: [
        { name: "Google Analytics 4", product: "GA4", maturity: "established", since: "2023", confidence: "HIGH", source: "Salesforce competitive data; Clay enrichment", notes: "Used across merchant-facing properties. Not a competitive threat for product analytics depth." },
        { name: "Heap", product: "Product Analytics", maturity: "pilot", since: "2025", confidence: "HIGH", source: "Salesforce competitor field; Lena Torres confirmed", notes: "Active pilot in merchant admin experience team. 20 users. Autocapture deployed." }
      ],
      buyerIntent: "No active G2 buyer intent signals. Evaluation is internally-driven by Lena Torres's team's analytics gaps.",
      amplitudeDifferentiators: [
        "Superior funnel analysis and cohort segmentation for complex merchant journeys — Heap's auto-capture provides breadth but not the depth Shopify needs for checkout conversion analysis",
        "Enterprise-scale behavioral analytics that can power merchant-facing analytics features (Shopify's Year 2 opportunity) — Heap cannot serve this embedded analytics use case",
        "Canadian data residency capability — directly addresses the data platform team's compliance concern for Canadian merchant data"
      ],
      winLossPatterns: "Won 3 of 5 E-Commerce/SaaS deals where Heap had an active pilot in the past 12 months. Key win factor: funnel analysis depth and enterprise scale. Key risk: Heap converts pilots faster due to lower implementation friction from autocapture.",
      analystPositioning: "Amplitude recognized as the analytics platform of choice for enterprise e-commerce and marketplace companies. Shopify's use case maps directly to the merchant analytics category."
    },

    externalContext: {
      recentNews: [
        { headline: "Shopify Reports $8.9B Revenue in FY2025, Merchant GMV Crosses $220B", date: "2026-02-11", url: "https://investors.shopify.com/news-releases/2026-02-11/", relevance: "GMV scale amplifies the value of checkout and merchant analytics — even small improvements generate large absolute revenue impact.", confidence: "HIGH", source: "Shopify Investor Relations" },
        { headline: "Shopify Launches Shopify Analytics Pro — Merchant-Facing Dashboards for Plus Tier", date: "2026-03-22", url: "https://www.shopify.com/blog/analytics-pro-launch/", relevance: "Shopify is already building merchant-facing analytics — Amplitude can accelerate and deepen this initiative.", confidence: "HIGH", source: "Shopify Blog" }
      ],
      strategicPriorities: [
        { priority: "Improve merchant retention through better analytics and data-driven store optimization tools", confidence: "HIGH", source: "Lena Torres Kaia call; Shopify investor day 2025" },
        { priority: "Expand Shop Pay conversion advantage to more merchant categories and geographies", confidence: "HIGH", source: "Matt Hensley Kaia call 2026-04-08; Shopify Q4 2025 earnings" },
        { priority: "Build merchant-facing analytics dashboards as a Plus tier differentiator", confidence: "HIGH", source: "Shopify Analytics Pro launch; Granola account plan" }
      ],
      industryTrends: "E-commerce platforms are evolving into full-stack merchant operating systems. Analytics is becoming a first-party product, not just an internal tool. Platforms that can provide merchants with actionable behavioral insights from their own customer data have a measurable advantage in merchant retention. Checkout optimization is a top-5 priority for every major e-commerce platform in 2026.",
      firmographics: {
        founded: "2006",
        headquarters: "Ottawa, Canada",
        funding: "Public (NYSE: SHOP)",
        techStack: ["GCP", "Ruby on Rails", "React", "Kafka", "BigQuery", "Google Analytics 4", "Heap"],
        techStackSource: "Clay enrichment + Shopify engineering blog + job postings"
      }
    },

    openQuestions: [
      { question: "Can Amplitude confirm Canadian data residency compliance for Shopify's merchant data requirements? This is a procurement blocker.", owner: "SE (James O'Brien)", dueDate: "2026-04-25", priority: "high" },
      { question: "What is Heap's pilot contract terms? When does it expire or convert to a full contract?", owner: "AE (Tyler Brooks)", dueDate: "2026-04-30", priority: "high" },
      { question: "Can Lena Torres facilitate an introduction to Priya Sharma (VP Product) before the formal evaluation?", owner: "AE (Tyler Brooks)", dueDate: "2026-05-10", priority: "medium" },
      { question: "Is there an opportunity to demo the embedded analytics / OEM capability as a differentiator for the merchant-facing analytics use case?", owner: "VC (Kevin Colston)", dueDate: "2026-05-15", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + opportunity + 3 contacts" },
      { source: "Amplitude MCP", status: "not-found", detail: "No active subscription — prospect only" },
      { source: "Kaia / Outreach", status: "found", detail: "2 call transcripts (Mar–Apr 2026)" },
      { source: "Granola", status: "found", detail: "1 account planning session note" },
      { source: "Slack", status: "found", detail: "4 threads in #shopify-deal-room and #ecommerce-deals" },
      { source: "Glean / Drive", status: "found", detail: "3 documents: e-commerce playbook, merchant retention research, checkout benchmark" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals detected" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount" },
      { source: "Web", status: "found", detail: "Earnings report, Shopify Blog, Shopify Analytics Pro launch" }
    ]
  },

  // ============================================================
  // BMW — Prospect, Land (EMEA)
  // ============================================================
  "BMW": {
    type: "prospect",
    lastUpdated: "2026-04-15",
    dataConfidence: { high: 42, medium: 33, low: 18, unconfirmed: 7, totalDataPoints: 42 },
    companyType: "public",

    snapshot: {
      industry: "Automotive",
      segment: "Strategic",
      region: "EMEA",
      employees: 154000,
      revenue: "EUR 155.2B",
      revenueSource: "Annual Report FY2025",
      arr: 620000,
      contractYears: 3,
      renewalDate: null,
      productsLicensed: null,
      primaryUseCases: [
        { text: "Connected vehicle companion app and in-vehicle infotainment UX analytics", confidence: "HIGH", source: "Klaus Fischer, Kaia call 2026-02-15" },
        { text: "Digital showroom and vehicle configurator drop-off optimization", confidence: "HIGH", source: "Anna Berger, Kaia call 2026-03-05" },
        { text: "Cross-channel digital-to-dealer customer journey attribution", confidence: "MEDIUM", source: "Klaus Fischer, Kaia call 2026-03-20" }
      ],
      stakeholders: [
        { name: "Klaus Fischer", title: "Head of Digital Experience", role: "Champion / Executive Sponsor", confidence: "HIGH", source: "Kaia calls; Slack #bmw-deal-room" },
        { name: "Anna Berger", title: "Director of Digital Commerce", role: "Business Sponsor (configurator use case)", confidence: "HIGH", source: "Kaia call 2026-03-05" },
        { name: "Thomas Müller", title: "VP IT Architecture", role: "Technical Gatekeeper (security review)", confidence: "MEDIUM", source: "Salesforce contact; mentioned by Klaus Fischer" },
        { name: "Sophie Kraus", title: "Head of Connected Services Product", role: "Stakeholder (connected vehicle)", confidence: "MEDIUM", source: "Salesforce contact record" }
      ],
      accountTeam: { ae: "Marcus Weber", se: "Aisha Patel", csm: null, vc: "Ali Bhamani" }
    },

    adoption: null,

    relationshipContext: [
      {
        insight: "Klaus Fischer has budget authority for the digital experience initiative — EUR 50M digital transformation budget was approved by the board for 2026-2027, and analytics tooling is a line item. This is not a bottom-up evaluation.",
        confidence: "HIGH",
        source: "Slack #bmw-deal-room 2026-03-22 (AE Marcus Weber confirmed board budget)",
        category: "decision-process"
      },
      {
        insight: "BMW's IT security team requires a 12-week security audit for all analytics vendors. This is a non-negotiable procurement gate and the most significant timeline risk in the deal. Amplitude's EU data center is a key enabler — must be communicated immediately.",
        confidence: "HIGH",
        source: "Slack #bmw-deal-room 2026-03-15 (Ali Bhamani VC note); Glean EMEA enterprise deal guide",
        category: "risk"
      },
      {
        insight: "Tesla's data-driven OTA update model is a competitive threat that BMW's board discusses quarterly. Klaus Fischer explicitly cited Tesla's ability to iterate on in-car UX via behavioral data as a 'must-match capability.' This creates strong top-down urgency.",
        confidence: "HIGH",
        source: "Slack #bmw-deal-room 2026-03-28 (Klaus Fischer direct quote shared by AE)",
        category: "champion"
      },
      {
        insight: "Adobe Analytics is the enterprise standard across BMW's digital properties (EMEA HQ mandate, 400+ users since 2017). Amplitude is not displacing Adobe — it is landing in the connected vehicle and configurator use cases where Adobe has no solution.",
        confidence: "HIGH",
        source: "Competitive data; confirmed in Kaia calls",
        category: "competitive"
      },
      {
        insight: "BMW's procurement process involves 4 approval gates. The deal timeline is 9–12 months even with strong executive sponsorship. This is a patient deal — the close date of December 2026 is realistic but not guaranteed.",
        confidence: "HIGH",
        source: "Granola BMW deal strategy notes 2026-03-15",
        category: "decision-process"
      },
      {
        insight: "A successful BMW land could open the door to Audi (Volkswagen Group), Mercedes-Benz, and other German automotive OEMs through Klaus Fischer's executive network. BMW is the reference account anchor for the EMEA automotive vertical.",
        confidence: "MEDIUM",
        source: "Granola BMW account plan 2026-02-28 (Ali Bhamani noted network effect)",
        category: "decision-process"
      }
    ],

    valueRealized: null,

    productHealth: null,

    strategy: {
      recommendedProducts: ["Analytics"],
      scopeRecommendation: "Land with Analytics for the Digital Experience team (est. 30–50 users: connected vehicle PMs, digital commerce analysts, digital showroom team). Scope is explicitly limited to the companion app and configurator use cases — not enterprise-wide (Adobe's domain).",
      landAndExpand: "Year 1: Analytics for connected vehicle companion app UX and configurator drop-off optimization. Year 2: Expand to cross-channel digital-to-dealer journey analytics. Year 3: Potentially expand to the dealer network if connected vehicle subscription revenue grows to justify broader deployment.",
      multiYearRationale: "A 3-year commitment is appropriate for a German automotive OEM with a 12-week security audit requirement. The investment in security certification and instrumentation justifies a longer commitment. BMW's digital transformation roadmap extends through 2028."
    },

    valueHypothesis: {
      summary: "Based on BMW's connected vehicle strategy and configurator drop-off, Amplitude can deliver an estimated EUR 350M+ in annual value across 3 use cases.",
      items: [
        {
          title: "Connected Vehicle Software Feature Adoption",
          projection: 200000000,
          methodology: "BMW projects EUR 1B in connected services subscription revenue by 2028. Connected feature adoption currently at 35%; target 50%. Industry benchmark (Global Automotive OEM case study): 48% increase in connected feature engagement after behavioral analytics. Conservative 25% improvement applied to EUR 800M FY2026 connected services revenue target = EUR 200M incremental revenue addressable. Attribution: 20% to analytics tooling = EUR 40M direct Amplitude impact.",
          comparableCustomer: "Global Automotive OEM (Amplitude case study): 48% increase in connected feature engagement, 35% improvement in app session depth, 22% reduction in in-vehicle UX support tickets from better behavioral data.",
          confidence: "MEDIUM",
          source: "Klaus Fischer Kaia call 2026-02-15 (connected services revenue projection); Global Automotive OEM case study; Glean connected vehicle whitepaper"
        },
        {
          title: "Configurator Drop-Off Reduction — Qualified Lead Generation",
          projection: 100000000,
          methodology: "BMW's online configurator has 40M annual sessions but 70% of users abandon before completing a configuration. Industry benchmark: optimized configurators achieve 40–50% completion vs. BMW's 30%. 10pp improvement × 40M sessions × 70% addressable drop-off × EUR 800 qualified lead value per completion = EUR 224M; conservative 45% attribution = EUR 100M.",
          comparableCustomer: "No direct comparable — BMW is the reference opportunity. Adjacent: Booking.com (Amplitude case study) achieved 23% lift in conversion through behavioral analytics on a search-to-book funnel of similar structural complexity.",
          confidence: "LOW",
          source: "Anna Berger Kaia call 2026-03-05; Glean configurator conversion research doc; industry benchmark for automotive configurators"
        },
        {
          title: "OTA Software Update Cycle Acceleration",
          methodology: "OEMs with behavioral analytics iterate on software 3x faster than those relying solely on survey data. BMW deploys 6 OTA updates/year. Accelerating to 9 updates/year with behavioral validation reduces each cycle from 8 weeks to 5 weeks. 3 additional cycles × EUR 15M estimated value per successful feature adoption improvement = EUR 45M. Attribution: 50% = EUR 22M.",
          projection: 22000000,
          comparableCustomer: "Global Automotive OEM case study: 35% improvement in app session depth enabled faster iteration on in-vehicle UX features.",
          confidence: "LOW",
          source: "Glean connected vehicle whitepaper; Klaus Fischer mentioned 6 OTA updates/year in Kaia call 2026-02-15; iteration value is analyst estimate"
        }
      ]
    },

    competitiveLandscape: {
      currentTools: [
        { name: "Adobe Analytics", product: "Adobe Experience Cloud", maturity: "deeply-embedded", since: "2017", confidence: "HIGH", source: "Salesforce competitive data; Klaus Fischer confirmed", notes: "Enterprise standard across all digital touchpoints. 400+ users globally. EMEA HQ mandate. Not being displaced." },
        { name: "Medallia", product: "Experience Management", maturity: "established", since: "2019", confidence: "MEDIUM", source: "Salesforce competitive data", notes: "Customer feedback and NPS tracking. Complementary to Amplitude's behavioral analytics." },
        { name: "SAP Analytics Cloud", product: "Enterprise BI", maturity: "established", since: "2020", confidence: "HIGH", source: "Salesforce; confirmed by Thomas Müller (IT)", notes: "Corporate BI standard for manufacturing and sales. Not competitive for product analytics." }
      ],
      buyerIntent: "No active G2 buyer intent signals. Evaluation is board-budget-driven, not externally triggered.",
      amplitudeDifferentiators: [
        "EU data center with GDPR-native data processing — required for German enterprise procurement and removes a common blocker for automotive OEMs",
        "Connected vehicle behavioral analytics with session replay and event instrumentation for non-standard (in-vehicle) interfaces — Adobe has no equivalent solution",
        "Purpose-built for product teams, not marketing — Klaus Fischer's digital experience team is product-oriented; Adobe is positioned for marketing analytics"
      ],
      winLossPatterns: "Limited EMEA automotive data. Won 1 of 2 enterprise automotive deals in EMEA in the past 18 months. Key win factor: EU data residency and connected vehicle instrumentation capability. Key risk: Security audit timeline causes deal to slip or stall.",
      analystPositioning: "Amplitude recognized in Gartner Magic Quadrant. EU data residency is a Gartner-cited strength specifically relevant for German enterprise buyers with GDPR-grade requirements."
    },

    externalContext: {
      recentNews: [
        { headline: "BMW Group Reports Record Software-Defined Vehicle Revenue in FY2025, EUR 800M from Connected Services", date: "2026-03-12", url: "https://www.press.bmwgroup.com/global/2026-03-12/fy2025-results", relevance: "Connected services revenue milestone validates the analytics investment — growing the revenue stream requires measuring and optimizing it.", confidence: "HIGH", source: "BMW Group Press" },
        { headline: "BMW Invests EUR 1.5B in Software and Digital Platform Over Next 3 Years", date: "2026-01-20", url: "https://www.press.bmwgroup.com/global/2026-01-20/digital-investment", relevance: "Software investment at this scale makes behavioral analytics infrastructure a strategic requirement.", confidence: "HIGH", source: "BMW Group Press" },
        { headline: "J.D. Power 2025 US Tech Experience Study: BMW Trails Tesla and Mercedes in In-Vehicle Tech Satisfaction", date: "2026-02-08", url: "https://www.jdpower.com/business/resources/2025-us-tech-experience-study/", relevance: "J.D. Power ranking gap directly motivates Klaus Fischer's investment in behavioral analytics for in-vehicle UX improvement.", confidence: "HIGH", source: "J.D. Power" }
      ],
      strategicPriorities: [
        { priority: "Increase connected services adoption from 35% to 50% of connected vehicle fleet", confidence: "HIGH", source: "Klaus Fischer Kaia call 2026-02-15; BMW investor day 2025" },
        { priority: "Improve digital configurator completion rate to generate more qualified dealer leads", confidence: "HIGH", source: "Anna Berger Kaia call 2026-03-05; Glean configurator research" },
        { priority: "Match Tesla's data-driven OTA software iteration cadence by end of 2027", confidence: "HIGH", source: "Slack #bmw-deal-room: Klaus Fischer direct quote; BMW CEO public statement" }
      ],
      industryTrends: "German automotive OEMs are in a structural transition from hardware-first to software-defined vehicles. Behavioral analytics that measure in-vehicle UX, connected service adoption, and digital showroom conversion are becoming strategic infrastructure for the industry. GDPR compliance and EU data residency are non-negotiable requirements for German enterprise procurement. The competitive threat from Tesla's data-driven product development model is the primary catalyst for investment.",
      firmographics: {
        founded: "1916",
        headquarters: "Munich, Germany",
        funding: "Public (Xetra: BMW)",
        techStack: ["AWS", "Azure (legacy)", "C++", "Python", "Java", "SAP Analytics Cloud", "Adobe Experience Cloud"],
        techStackSource: "Clay enrichment + BMW Tech Blog + job postings + Thomas Müller IT context"
      }
    },

    openQuestions: [
      { question: "Has Thomas Müller (VP IT Architecture) received Amplitude's EU data center and SOC 2 documentation to begin the 12-week security audit?", owner: "SE (Aisha Patel)", dueDate: "2026-04-25", priority: "high" },
      { question: "Can Ali Bhamani schedule a formal value case presentation with Klaus Fischer and Anna Berger in Munich in May?", owner: "VC (Ali Bhamani)", dueDate: "2026-05-01", priority: "high" },
      { question: "Is the EUR 50M digital transformation budget formally approved and allocated? Or is analytics tooling still subject to line-item approval?", owner: "AE (Marcus Weber)", dueDate: "2026-05-15", priority: "medium" },
      { question: "Can we identify a Global Automotive OEM reference who is willing to speak with Klaus Fischer? This is the most credible proof point for the connected vehicle use case.", owner: "VC (Ali Bhamani)", dueDate: "2026-05-30", priority: "medium" }
    ],

    dataSources: [
      { source: "Salesforce", status: "found", detail: "Account + opportunity + 4 contacts" },
      { source: "Amplitude MCP", status: "not-found", detail: "No active subscription — prospect only" },
      { source: "Kaia / Outreach", status: "found", detail: "3 call transcripts (Jan–Mar 2026)" },
      { source: "Granola", status: "found", detail: "2 meeting notes: EMEA account planning with Ali Bhamani, deal strategy session" },
      { source: "Slack", status: "found", detail: "5 threads across #bmw-deal-room, #emea-deals, #automotive-vertical" },
      { source: "Glean / Drive", status: "found", detail: "5 documents: automotive digital transformation playbook, connected vehicle whitepaper, EMEA enterprise deal guide, J.D. Power benchmarks, configurator conversion research" },
      { source: "G2", status: "not-found", detail: "No buyer intent signals detected" },
      { source: "Clay", status: "found", detail: "Firmographics, tech stack, headcount" },
      { source: "Web", status: "found", detail: "BMW annual results, investor day, J.D. Power study, press releases" }
    ]
  }

};
