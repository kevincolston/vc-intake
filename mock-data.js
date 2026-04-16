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
  },
  "Airbnb": {
    closed: true,
    outcome: "expanded",
    closedArr: 920000,
    closeDate: "2026-10-20"
  },
  "Coinbase": {
    closed: true,
    outcome: "renewed",
    closedArr: 750000,
    closeDate: "2026-09-28"
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
  },
  {
    name: "Airbnb",
    ae: "Sarah Mitchell",
    se: "Ryan Chen",
    region: "NAMER",
    industry: "Media / Travel",
    dealType: "expansion",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000uvw234",
    oppName: "Airbnb | Expansion | Guest Experience & Host Marketplace Analytics",
    arr: "850000",
    dealStage: "3 – Discovery",
    expectedClose: "2026-10-15",
    healthScore: 78,
    customerSince: "2023-01-15",
    renewalDate: "2027-01-15",
    renewalArr: "480000",
    champion: "David Park",
    championRole: "VP Product Analytics",
    contacts: ["David Park", "Mei Lin", "Carlos Rivera", "Tanya Gupta"]
  },
  {
    name: "Shopify",
    ae: "Tyler Brooks",
    se: "James O'Brien",
    region: "NAMER",
    industry: "E-Commerce / SaaS",
    dealType: "land",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000xyz567",
    oppName: "Shopify | Land | Merchant Analytics & Checkout Optimization",
    arr: "450000",
    dealStage: "2 – Qualification",
    expectedClose: "2026-11-30",
    healthScore: 52,
    customerSince: null,
    renewalDate: null,
    renewalArr: null,
    champion: "Lena Torres",
    championRole: "Director of Growth",
    contacts: ["Lena Torres", "Matt Hensley", "Priya Sharma"]
  },
  {
    name: "BMW",
    ae: "Marcus Weber",
    se: "Aisha Patel",
    region: "EMEA",
    industry: "Automotive",
    dealType: "land",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000abc890",
    oppName: "BMW | Land | Connected Vehicle & Digital Showroom Analytics",
    arr: "620000",
    dealStage: "2 – Qualification",
    expectedClose: "2026-12-20",
    healthScore: 40,
    customerSince: null,
    renewalDate: null,
    renewalArr: null,
    champion: "Klaus Fischer",
    championRole: "Head of Digital Experience",
    contacts: ["Klaus Fischer", "Anna Berger", "Thomas Müller", "Sophie Kraus"]
  },
  {
    name: "Notion",
    ae: "Lauren Park",
    se: "Emily Sato",
    region: "NAMER",
    industry: "SaaS / Productivity",
    dealType: "expansion",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000def123",
    oppName: "Notion | Expansion | Workspace Collaboration & PLG Funnel Analytics",
    arr: "380000",
    dealStage: "3 – Discovery",
    expectedClose: "2026-09-30",
    healthScore: 71,
    customerSince: "2024-06-01",
    renewalDate: "2027-06-01",
    renewalArr: "220000",
    champion: "Amy Chen",
    championRole: "Head of Growth",
    contacts: ["Amy Chen", "Jordan Reeves", "Samira Okafor"]
  },
  {
    name: "Coinbase",
    ae: "David Kim",
    se: "Brian Choi",
    region: "NAMER",
    industry: "Financial Services / Crypto",
    dealType: "renewal",
    sfdcLink: "https://amplitude.my.salesforce.com/006VH00000ghi456",
    oppName: "Coinbase | Renewal | Trading Experience & Compliance Analytics",
    arr: "700000",
    dealStage: "4 – Proposal",
    expectedClose: "2026-09-30",
    healthScore: 65,
    customerSince: "2022-04-01",
    renewalDate: "2026-10-01",
    renewalArr: "700000",
    champion: "Jason Liu",
    championRole: "VP of Product",
    contacts: ["Jason Liu", "Rebecca Tran", "Omar Hassan", "Nate Gibbons"]
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
  },
  "Airbnb": {
    callCount: 4,
    dateRange: "Feb 2026 – Apr 2026",
    summary: "Four calls with product analytics team. David Park driving expansion into guest experience measurement and host marketplace optimization. Strong exec alignment.",
    signals: [
      {
        theme: "Guest Experience Analytics & Personalization",
        type: "pain",
        text: "We can't connect guest search behavior to booking outcomes. Our recommendation engine is basically a black box — we know what guests book but not why they abandon.",
        stakeholder: "David Park (VP Product Analytics)",
        date: "2026-03-18",
        url: "https://app.outreach.io/meetings/rec_airbnb_001",
        verbatim: true,
        businessImpact: "Search-to-book conversion is 2.1% vs. 3.5% industry benchmark — each 0.1% improvement = ~$45M revenue",
        userImpact: "Guests see irrelevant listings, leading to high bounce rates on search results pages",
        internalImpact: "Search and recommendation teams operate on different data stacks with no shared behavioral layer",
        proposedSolution: "End-to-end behavioral analytics connecting search patterns, listing interactions, and booking outcomes",
        valueHyp: "Improving search-to-book conversion by 0.5% through data-driven personalization could drive $200M+ in incremental bookings"
      },
      {
        theme: "Host Marketplace Optimization",
        type: "priority",
        text: "Host retention is our biggest growth lever. We're losing 18% of hosts annually and can't identify churn signals early enough to intervene.",
        stakeholder: "Mei Lin",
        date: "2026-04-02",
        url: "https://app.outreach.io/meetings/rec_airbnb_002",
        verbatim: true,
        businessImpact: "Each retained host generates avg $12K/yr in platform revenue; 18% churn = ~$300M annual revenue at risk",
        userImpact: "Hosts feel unsupported — pricing tools and performance dashboards are disconnected from actual booking behavior"
      },
      {
        theme: "Experience Quality Measurement",
        type: "initiative",
        text: "We're launching a new 'Experience Quality Score' initiative. Need behavioral data to complement review scores — reviews lag by weeks, we need real-time signals.",
        stakeholder: "David Park (VP Product Analytics)",
        date: "2026-04-10",
        url: "https://app.outreach.io/meetings/rec_airbnb_003",
        businessImpact: "Quality scores directly impact search ranking and Superhost status — fundamental to marketplace health"
      }
    ]
  },
  "Shopify": {
    callCount: 2,
    dateRange: "Mar 2026 – Apr 2026",
    summary: "Two discovery calls with growth team. Lena Torres focused on merchant analytics gaps and checkout conversion measurement.",
    signals: [
      {
        theme: "Merchant Analytics & Storefront Optimization",
        type: "pain",
        text: "Our merchants are asking us for better analytics on their storefronts, but we can't even measure our own admin experience properly. We're building analytics for merchants while flying blind internally.",
        stakeholder: "Lena Torres (Director of Growth)",
        date: "2026-03-25",
        url: "https://app.outreach.io/meetings/rec_shopify_001",
        verbatim: true,
        businessImpact: "Merchant-facing analytics is a key differentiator vs. BigCommerce and WooCommerce — directly impacts merchant retention",
        userImpact: "Merchants churn when they can't see ROI from their Shopify investment; analytics gaps cited in 34% of churn surveys",
        internalImpact: "Product team rebuilds analytics dashboards quarterly because they can't trust existing data",
        proposedSolution: "Behavioral analytics platform for both internal product teams and merchant-facing analytics features",
        valueHyp: "Reducing merchant churn by 2% through better analytics could protect $180M+ in platform GMV"
      },
      {
        theme: "Checkout Conversion Optimization",
        type: "challenge",
        text: "Shop Pay conversion is 12% higher than standard checkout but we can't pinpoint which UX elements drive the difference. Need granular behavioral comparison.",
        stakeholder: "Matt Hensley",
        date: "2026-04-08",
        url: "https://app.outreach.io/meetings/rec_shopify_002",
        businessImpact: "Checkout conversion directly impacts merchant GMV and Shopify's take rate",
        userImpact: "Buyers experience friction in non-Shop-Pay flows but root cause is unknown"
      }
    ]
  },
  "BMW": {
    callCount: 3,
    dateRange: "Jan 2026 – Mar 2026",
    summary: "Three calls with digital experience team in Munich. Klaus Fischer leading connected vehicle UX and digital showroom analytics initiative. Complex procurement process.",
    signals: [
      {
        theme: "Connected Vehicle UX Analytics",
        type: "pain",
        text: "We have 2 million connected vehicles generating telemetry data, but zero visibility into how drivers interact with our infotainment software. OTA updates are deployed without any behavioral validation.",
        stakeholder: "Klaus Fischer (Head of Digital Experience)",
        date: "2026-02-15",
        url: "https://app.outreach.io/meetings/rec_bmw_001",
        verbatim: true,
        businessImpact: "Connected services subscription revenue is projected at EUR 1B by 2028 — product decisions are made without user data",
        userImpact: "Drivers report frustration with infotainment UX; J.D. Power ranks BMW below Mercedes and Audi on in-vehicle tech satisfaction",
        internalImpact: "Software team deploys 6 OTA updates/year with no way to measure feature adoption or UX impact",
        proposedSolution: "In-vehicle behavioral analytics to measure driver interactions with infotainment, navigation, and connected services",
        valueHyp: "Improving connected services adoption from 35% to 50% could drive EUR 200M+ in incremental subscription revenue"
      },
      {
        theme: "Digital Showroom & Configurator Analytics",
        type: "priority",
        text: "Our online configurator has 40 million sessions per year but we lose 70% of users before they complete a configuration. We need to understand the drop-off journey.",
        stakeholder: "Anna Berger",
        date: "2026-03-05",
        url: "https://app.outreach.io/meetings/rec_bmw_002",
        verbatim: true,
        businessImpact: "Each completed configuration that reaches a dealer = EUR 800 in qualified lead value; 70% drop-off is massive leakage",
        userImpact: "Customers find the configurator overwhelming — too many options without guided discovery"
      },
      {
        theme: "Cross-Channel Customer Journey",
        type: "initiative",
        text: "We need to connect the digital-to-dealer journey. A customer configures online, visits a showroom, then completes purchase — we have no visibility across these touchpoints.",
        stakeholder: "Klaus Fischer (Head of Digital Experience)",
        date: "2026-03-20",
        url: "https://app.outreach.io/meetings/rec_bmw_003",
        businessImpact: "60% of buyers research online before visiting a dealer but BMW can't attribute digital touchpoints to sales"
      }
    ]
  },
  "Notion": {
    callCount: 3,
    dateRange: "Mar 2026 – Apr 2026",
    summary: "Three calls with growth team. Amy Chen driving expansion into workspace collaboration analytics and PLG funnel measurement. Strong product-led motion.",
    signals: [
      {
        theme: "Workspace Collaboration Analytics",
        type: "pain",
        text: "We know team workspaces are our growth engine but we can't measure collaboration depth. Page views aren't enough — we need to understand editing patterns, comment threads, and real-time co-editing behavior.",
        stakeholder: "Amy Chen (Head of Growth)",
        date: "2026-03-22",
        url: "https://app.outreach.io/meetings/rec_notion_001",
        verbatim: true,
        businessImpact: "Teams with high collaboration scores retain at 95%+ vs. 60% for low-collaboration teams — but we can't identify at-risk teams early",
        userImpact: "Teams underutilize collaboration features because onboarding doesn't surface them effectively",
        internalImpact: "Growth team relies on basic DAU/MAU metrics that don't capture collaboration quality",
        proposedSolution: "Behavioral analytics to measure collaboration depth, team activation patterns, and feature discovery",
        valueHyp: "Improving team activation from 45% to 60% could drive $25M+ in expansion ARR from existing accounts"
      },
      {
        theme: "PLG Funnel Optimization",
        type: "priority",
        text: "Our free-to-team conversion is 4.8% but we believe the ceiling is 8%+. We need to identify the 'aha moments' that predict team plan upgrades.",
        stakeholder: "Jordan Reeves",
        date: "2026-04-05",
        url: "https://app.outreach.io/meetings/rec_notion_002",
        verbatim: true,
        businessImpact: "Each 1% improvement in free-to-team conversion = ~$18M ARR impact",
        userImpact: "Free users don't discover team features organically — the path to 'aha' is unclear"
      },
      {
        theme: "AI Feature Adoption & Impact",
        type: "initiative",
        text: "We just launched Notion AI and adoption is uneven. Need to understand which AI features drive retention vs. which are novelty. This is a board-level priority.",
        stakeholder: "Amy Chen (Head of Growth)",
        date: "2026-04-12",
        url: "https://app.outreach.io/meetings/rec_notion_003",
        businessImpact: "Notion AI is a $10/user/month add-on — adoption directly impacts revenue per user"
      }
    ]
  },
  "Coinbase": {
    callCount: 3,
    dateRange: "Feb 2026 – Apr 2026",
    summary: "Three calls covering renewal value realization and new compliance dashboard needs. Jason Liu wants to expand scope while securing renewal.",
    signals: [
      {
        theme: "Trading Experience Analytics",
        type: "pain",
        text: "We've been using Amplitude for 4 years but we're only scratching the surface on trading UX. During the last crypto cycle, we couldn't correlate market volatility with user behavior patterns fast enough.",
        stakeholder: "Jason Liu (VP of Product)",
        date: "2026-03-10",
        url: "https://app.outreach.io/meetings/rec_coinbase_001",
        verbatim: true,
        businessImpact: "Trading revenue dropped 40% during the last downturn; better UX during volatile periods could retain $50M+ in trading volume",
        userImpact: "Retail traders panic-sell during volatility because the UX amplifies fear rather than providing clarity",
        internalImpact: "Product team was reactive during the last cycle — no behavioral playbook for high-volatility periods",
        proposedSolution: "Real-time behavioral analytics with volatility-correlated dashboards and user segment monitoring",
        valueHyp: "Retaining 5% more trading volume during volatile periods through UX optimization could protect $100M+ in annual revenue"
      },
      {
        theme: "Regulatory Compliance Dashboards",
        type: "priority",
        text: "SEC and state regulators are requiring us to demonstrate user comprehension of risk disclosures. We need behavioral proof that users actually read and understand what they're agreeing to.",
        stakeholder: "Rebecca Tran",
        date: "2026-03-28",
        url: "https://app.outreach.io/meetings/rec_coinbase_002",
        verbatim: true,
        businessImpact: "Non-compliance risks fines of $50M+ and potential trading restrictions in key states",
        userImpact: "Users click through risk disclosures in under 3 seconds — regulators want proof of informed consent",
        internalImpact: "Legal team manually audits disclosure interactions quarterly; process takes 6 weeks"
      },
      {
        theme: "Onboarding & KYC Funnel Optimization",
        type: "challenge",
        text: "Our KYC completion rate is 62%. We lose nearly 40% of users during identity verification. Compliance constraints limit what we can change, but we need to optimize within those bounds.",
        stakeholder: "Omar Hassan",
        date: "2026-04-08",
        url: "https://app.outreach.io/meetings/rec_coinbase_003",
        businessImpact: "Each 1% improvement in KYC completion = ~$8M in first-year trading revenue from new users"
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
  },
  "Airbnb": {
    threadCount: 7,
    channels: ["#airbnb-deal-room", "#travel-marketplace-deals", "#strategic-accounts"],
    summary: "Seven threads with strong momentum. David Park has VP-level sponsorship and budget approval. Guest experience analytics identified as top priority for H2 2026.",
    signals: [
      {
        theme: "Guest Experience Analytics & Personalization",
        type: "priority",
        text: "AE confirmed David Park has CEO-level visibility on the guest experience initiative. This was called out in Airbnb's Q1 earnings as a key investment area.",
        date: "2026-04-05",
        url: "https://amplitude.slack.com/archives/C_airbnb_001/p1712300000",
        stakeholder: "Sarah Mitchell (AE, internal note)"
      },
      {
        theme: "Host Marketplace Optimization",
        type: "pain",
        text: "Airbnb's host success team shared internal data showing hosts who churn cost 3x more to replace than retain. They're desperate for early warning signals.",
        date: "2026-04-01",
        url: "https://amplitude.slack.com/archives/C_airbnb_002/p1711900000"
      },
      {
        theme: "Guest Experience Analytics & Personalization",
        type: "challenge",
        text: "Competitive note: Airbnb is also evaluating Mixpanel for the guest analytics use case. David Park favors Amplitude but needs a strong business case to justify the larger investment.",
        date: "2026-03-28",
        url: "https://amplitude.slack.com/archives/C_airbnb_003/p1711600000"
      }
    ]
  },
  "Shopify": {
    threadCount: 4,
    channels: ["#shopify-deal-room", "#ecommerce-deals"],
    summary: "Four threads in early-stage deal room. Lena Torres is engaged but procurement process at Shopify is lengthy. Competitive with Heap.",
    signals: [
      {
        theme: "Merchant Analytics & Storefront Optimization",
        type: "challenge",
        text: "AE flagged that Shopify's data platform team has concerns about Amplitude's data residency for Canadian merchants. Need to address before deal progresses.",
        date: "2026-04-02",
        url: "https://amplitude.slack.com/archives/C_shopify_001/p1712000000",
        stakeholder: "Tyler Brooks (AE, internal note)"
      },
      {
        theme: "Checkout Conversion Optimization",
        type: "priority",
        text: "Lena mentioned in last call that checkout conversion is a KPI tied to her team's bonus structure. High personal motivation to solve this.",
        date: "2026-03-30",
        url: "https://amplitude.slack.com/archives/C_shopify_002/p1711800000",
        stakeholder: "Lena Torres"
      },
      {
        theme: "Merchant Analytics & Storefront Optimization",
        type: "pain",
        text: "Shopify currently using Heap for some use cases. Lena says it lacks the funnel depth and cohort analysis they need for merchant retention analytics.",
        date: "2026-04-10",
        url: "https://amplitude.slack.com/archives/C_shopify_003/p1712700000"
      }
    ]
  },
  "BMW": {
    threadCount: 5,
    channels: ["#bmw-deal-room", "#emea-deals", "#automotive-vertical"],
    summary: "Five threads across EMEA deal channels. Complex enterprise procurement with multiple stakeholders. Ali Bhamani assigned as VC lead for EMEA.",
    signals: [
      {
        theme: "Connected Vehicle UX Analytics",
        type: "challenge",
        text: "BMW's IT security team requires all analytics vendors to complete a 12-week security audit. This could push the timeline. Ali flagging to get ahead of it.",
        date: "2026-03-15",
        url: "https://amplitude.slack.com/archives/C_bmw_001/p1710500000",
        stakeholder: "Ali Bhamani (VC, internal note)"
      },
      {
        theme: "Digital Showroom & Configurator Analytics",
        type: "priority",
        text: "AE shared that BMW's board approved a EUR 50M digital transformation budget for 2026-2027. Analytics tooling is a line item in that budget.",
        date: "2026-03-22",
        url: "https://amplitude.slack.com/archives/C_bmw_002/p1711100000",
        stakeholder: "Marcus Weber (AE, internal note)"
      },
      {
        theme: "Connected Vehicle UX Analytics",
        type: "pain",
        text: "Klaus Fischer told AE that Tesla's ability to iterate on in-car UX via OTA updates with data-driven decisions is a competitive threat BMW's board discusses quarterly.",
        date: "2026-03-28",
        url: "https://amplitude.slack.com/archives/C_bmw_003/p1711600000",
        stakeholder: "Klaus Fischer"
      }
    ]
  },
  "Notion": {
    threadCount: 5,
    channels: ["#notion-account", "#plg-deals", "#saas-vertical"],
    summary: "Five threads tracking expansion. Amy Chen is a strong champion with growth team autonomy. PLG funnel and AI adoption are the two primary workstreams.",
    signals: [
      {
        theme: "Workspace Collaboration Analytics",
        type: "priority",
        text: "Amy Chen shared that Notion's CEO cited collaboration depth as the #1 metric for the product team in the last all-hands. This has top-of-house visibility.",
        date: "2026-04-01",
        url: "https://amplitude.slack.com/archives/C_notion_001/p1711900000",
        stakeholder: "Amy Chen"
      },
      {
        theme: "PLG Funnel Optimization",
        type: "pain",
        text: "AE noted that Notion is frustrated with their current Mixpanel setup — migration to Amplitude's existing deployment is easier than they expected.",
        date: "2026-04-08",
        url: "https://amplitude.slack.com/archives/C_notion_002/p1712500000",
        stakeholder: "Lauren Park (AE, internal note)"
      },
      {
        theme: "AI Feature Adoption & Impact",
        type: "initiative",
        text: "Notion AI launch is getting heavy press coverage. Amy's team is under pressure to show adoption metrics to the board within 90 days. Urgent timeline.",
        date: "2026-04-12",
        url: "https://amplitude.slack.com/archives/C_notion_003/p1712900000"
      }
    ]
  },
  "Coinbase": {
    threadCount: 6,
    channels: ["#coinbase-renewal", "#fintech-deals", "#customer-success"],
    summary: "Six threads across renewal and deal channels. Jason Liu pushing to expand scope during renewal. Compliance dashboard is a new requirement driving urgency.",
    signals: [
      {
        theme: "Trading Experience Analytics",
        type: "pain",
        text: "CSM shared that Coinbase's product team built internal dashboards on top of Amplitude but they're hitting scale limits. Need professional services or expanded deployment.",
        date: "2026-03-20",
        url: "https://amplitude.slack.com/archives/C_coinbase_001/p1711000000",
        stakeholder: "Jason Liu"
      },
      {
        theme: "Regulatory Compliance Dashboards",
        type: "priority",
        text: "AE flagged: SEC inquiry is creating urgency for the compliance dashboard use case. Coinbase legal team now involved in the renewal conversation — they want this in the contract.",
        date: "2026-04-05",
        url: "https://amplitude.slack.com/archives/C_coinbase_002/p1712300000",
        stakeholder: "David Kim (AE, internal note)"
      },
      {
        theme: "Onboarding & KYC Funnel Optimization",
        type: "challenge",
        text: "Coinbase considering building KYC analytics in-house vs. using Amplitude. Internal platform team is pushing build, product team wants buy. Classic tension.",
        date: "2026-04-10",
        url: "https://amplitude.slack.com/archives/C_coinbase_003/p1712700000"
      },
      {
        theme: "Trading Experience Analytics",
        type: "initiative",
        text: "Jason Liu mentioned they want to use Amplitude for their upcoming Base (L2) wallet experience. Could be a significant expansion vector beyond the renewal.",
        date: "2026-04-12",
        url: "https://amplitude.slack.com/archives/C_coinbase_004/p1712900000",
        stakeholder: "Jason Liu"
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
  },
  "Airbnb": {
    meetingCount: 3,
    summary: "Three meetings covering expansion strategy and guest experience analytics scoping. Kevin Colston attended the account planning session.",
    signals: [
      {
        theme: "Guest Experience Analytics & Personalization",
        type: "priority",
        text: "Account plan notes: Airbnb's current Amplitude deployment covers core booking flow. Expansion opportunity is guest experience and host-side analytics — total addressable could reach $1.2M ARR.",
        date: "2026-03-15",
        url: "https://app.granola.ai/notes/airbnb_001",
        businessImpact: "Expansion from $480K to $850K+ with potential for further growth into host analytics"
      },
      {
        theme: "Host Marketplace Optimization",
        type: "initiative",
        text: "Deal strategy: Host retention use case could be a second phase expansion. If we prove value on guest experience first, host-side analytics is a natural follow-on worth $300K+.",
        date: "2026-04-05",
        url: "https://app.granola.ai/notes/airbnb_002",
        businessImpact: "Two-phase expansion strategy creates a clear path to $1M+ total ARR"
      }
    ]
  },
  "Shopify": {
    meetingCount: 1,
    summary: "One account planning session. Identified Shopify as a strategic land with strong expansion potential across merchant analytics.",
    signals: [
      {
        theme: "Merchant Analytics & Storefront Optimization",
        type: "initiative",
        text: "Account plan: Shopify's merchant analytics needs span both internal product optimization and merchant-facing analytics features. Land on internal use case, expand to merchant-facing analytics.",
        date: "2026-03-28",
        url: "https://app.granola.ai/notes/shopify_001",
        businessImpact: "Land at $450K with expansion to $1M+ if merchant-facing analytics use case materializes"
      }
    ]
  },
  "BMW": {
    meetingCount: 2,
    summary: "Two meetings including EMEA account planning with Ali Bhamani and deal strategy session. Complex enterprise deal requiring multi-stakeholder alignment.",
    signals: [
      {
        theme: "Connected Vehicle UX Analytics",
        type: "priority",
        text: "EMEA account plan: BMW is the largest automotive opportunity in the pipeline. Klaus Fischer has budget authority but needs IT security sign-off. Ali Bhamani leading VC engagement.",
        date: "2026-02-28",
        url: "https://app.granola.ai/notes/bmw_001",
        internalImpact: "First major automotive land in EMEA — could become a vertical reference account"
      },
      {
        theme: "Digital Showroom & Configurator Analytics",
        type: "challenge",
        text: "Deal strategy: BMW's procurement process involves 4 approval gates. Need to front-load the business case to survive internal review cycles. Security audit is the highest-risk gate.",
        date: "2026-03-15",
        url: "https://app.granola.ai/notes/bmw_002",
        businessImpact: "If BMW lands, it opens the door to other German automotive OEMs through Klaus's network"
      }
    ]
  },
  "Notion": {
    meetingCount: 2,
    summary: "Two meetings covering expansion strategy. Amy Chen is a power user who already advocates internally for Amplitude. PLG and AI analytics are the two expansion vectors.",
    signals: [
      {
        theme: "Workspace Collaboration Analytics",
        type: "initiative",
        text: "Strategy notes: Amy Chen already uses Amplitude daily for core product metrics. Expansion is about deepening usage into collaboration analytics and AI feature measurement — low adoption risk.",
        date: "2026-03-30",
        url: "https://app.granola.ai/notes/notion_001",
        businessImpact: "Champion-led expansion with low risk — Amy's team already has Amplitude expertise"
      },
      {
        theme: "AI Feature Adoption & Impact",
        type: "priority",
        text: "Deal review: Notion AI measurement is time-sensitive — board wants adoption data within 90 days. This urgency could accelerate the expansion timeline.",
        date: "2026-04-10",
        url: "https://app.granola.ai/notes/notion_002",
        businessImpact: "AI measurement urgency could compress deal cycle from 6 months to 3 months"
      }
    ]
  },
  "Coinbase": {
    meetingCount: 2,
    summary: "Two renewal strategy sessions. Jason Liu wants to expand during renewal. Compliance dashboard is a new vector that could increase deal size by $100K+.",
    signals: [
      {
        theme: "Trading Experience Analytics",
        type: "priority",
        text: "Renewal planning: Coinbase has 280 monthly active Amplitude users across 6 product teams. Deep adoption, but Jason Liu says they need to unlock more value from the platform.",
        date: "2026-03-15",
        url: "https://app.granola.ai/notes/coinbase_001",
        internalImpact: "High adoption = strong retention signal, but value narrative is needed for CFO approval of expanded scope"
      },
      {
        theme: "Regulatory Compliance Dashboards",
        type: "initiative",
        text: "Deal strategy: Compliance dashboard use case is net-new and could add $100-150K to the renewal. Legal team involvement accelerates procurement because compliance has its own budget line.",
        date: "2026-04-02",
        url: "https://app.granola.ai/notes/coinbase_002",
        businessImpact: "Compliance budget is separate from product analytics budget — could expand total deal size to $800K+"
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
  },
  "Airbnb": {
    docCount: 4,
    summary: "Found account plan, travel/marketplace analytics playbook, prior engagement summary, and guest experience benchmark report.",
    signals: [
      {
        theme: "Guest Experience Analytics & Personalization",
        type: "priority",
        text: "Travel industry benchmark report shows top OTAs achieve 3.5-4.2% search-to-book conversion. Airbnb's 2.1% is significantly below peer average.",
        date: "2026-02-20",
        url: "https://app.getglean.com/search/doc_airbnb_001",
        businessImpact: "Clear benchmarking gap quantifies the personalization opportunity at $500M+ annually"
      },
      {
        theme: "Host Marketplace Optimization",
        type: "challenge",
        text: "Prior engagement notes show Airbnb's host analytics team evaluated Amplitude in 2024 but deal stalled due to budget constraints. New budget cycle creates fresh opportunity.",
        date: "2026-03-05",
        url: "https://app.getglean.com/search/doc_airbnb_002"
      },
      {
        theme: "Guest Experience Analytics & Personalization",
        type: "initiative",
        text: "Account plan documents Airbnb's existing Amplitude deployment: 150 MAUs across booking and payments teams. Expansion adds guest experience and host marketplace teams.",
        date: "2026-03-20",
        url: "https://app.getglean.com/search/doc_airbnb_003",
        internalImpact: "Existing adoption provides strong expansion foundation — lower implementation risk"
      }
    ]
  },
  "Shopify": {
    docCount: 3,
    summary: "Found e-commerce analytics playbook, merchant retention research report, and checkout optimization benchmark study.",
    signals: [
      {
        theme: "Merchant Analytics & Storefront Optimization",
        type: "priority",
        text: "E-commerce analytics playbook shows that platforms providing merchant-facing analytics see 25% higher merchant retention. Shopify's merchant churn is a known growth limiter.",
        date: "2026-03-10",
        url: "https://app.getglean.com/search/doc_shopify_001",
        businessImpact: "Merchant retention is Shopify's biggest growth lever — analytics is a proven driver"
      },
      {
        theme: "Checkout Conversion Optimization",
        type: "challenge",
        text: "Checkout benchmark study: Shop Pay's 12% conversion advantage over standard checkout aligns with industry data on streamlined payment flows. Amplitude can help quantify and extend this advantage.",
        date: "2026-03-18",
        url: "https://app.getglean.com/search/doc_shopify_002",
        businessImpact: "Checkout optimization impacts Shopify's take rate and merchant satisfaction simultaneously"
      }
    ]
  },
  "BMW": {
    docCount: 5,
    summary: "Found automotive digital transformation playbook, connected vehicle analytics whitepaper, EMEA enterprise deal guide, J.D. Power benchmarks, and configurator conversion research.",
    signals: [
      {
        theme: "Connected Vehicle UX Analytics",
        type: "priority",
        text: "Connected vehicle analytics whitepaper: OEMs with in-vehicle behavioral analytics iterate on software 3x faster than those relying on survey data alone. BMW currently relies primarily on surveys.",
        date: "2026-01-15",
        url: "https://app.getglean.com/search/doc_bmw_001",
        businessImpact: "Industry research validates the connected vehicle analytics opportunity and BMW's competitive gap"
      },
      {
        theme: "Digital Showroom & Configurator Analytics",
        type: "challenge",
        text: "Configurator conversion research: Automotive configurators with behavioral optimization achieve 40-50% completion rates vs. BMW's 30%. Significant room for improvement.",
        date: "2026-02-10",
        url: "https://app.getglean.com/search/doc_bmw_002",
        businessImpact: "Improving configurator completion from 30% to 40% could generate EUR 100M+ in qualified leads annually"
      },
      {
        theme: "Connected Vehicle UX Analytics",
        type: "initiative",
        text: "EMEA enterprise deal guide flags that German automotive OEMs require on-premises or EU-hosted data processing. Amplitude's EU data center is a key enabler.",
        date: "2026-02-25",
        url: "https://app.getglean.com/search/doc_bmw_003",
        internalImpact: "EU data residency is table stakes for BMW — Amplitude's EU hosting removes a common blocker"
      }
    ]
  },
  "Notion": {
    docCount: 3,
    summary: "Found PLG analytics playbook, SaaS collaboration benchmark report, and AI feature adoption framework.",
    signals: [
      {
        theme: "Workspace Collaboration Analytics",
        type: "priority",
        text: "SaaS collaboration benchmark: Top-performing collaboration tools see 70%+ team activation rates within 30 days. Notion's current rate is estimated at 45% based on champion feedback.",
        date: "2026-03-08",
        url: "https://app.getglean.com/search/doc_notion_001",
        businessImpact: "Benchmark gap quantifies the team activation opportunity — directly tied to expansion revenue"
      },
      {
        theme: "AI Feature Adoption & Impact",
        type: "initiative",
        text: "AI feature adoption framework: Companies that instrument AI features within 60 days of launch see 2x higher retention of AI add-on subscriptions. Timing is critical for Notion.",
        date: "2026-04-01",
        url: "https://app.getglean.com/search/doc_notion_002",
        businessImpact: "Framework supports urgency of Amy Chen's 90-day AI measurement timeline"
      }
    ]
  },
  "Coinbase": {
    docCount: 4,
    summary: "Found fintech analytics playbook, crypto trading UX research, regulatory compliance analytics framework, and prior value realization report.",
    signals: [
      {
        theme: "Trading Experience Analytics",
        type: "priority",
        text: "Prior value realization report from 2024: Coinbase attributed $12M in retained trading volume to Amplitude-informed UX improvements during a market correction.",
        date: "2026-02-01",
        url: "https://app.getglean.com/search/doc_coinbase_001",
        businessImpact: "Proven ROI from prior engagement creates strong renewal narrative and expansion justification"
      },
      {
        theme: "Regulatory Compliance Dashboards",
        type: "challenge",
        text: "Regulatory compliance analytics framework: Financial services firms using behavioral analytics for compliance reporting reduce audit preparation time by 60-80%. Directly relevant to Coinbase's SEC requirements.",
        date: "2026-03-01",
        url: "https://app.getglean.com/search/doc_coinbase_002",
        businessImpact: "Compliance use case has its own budget line and ROI — not competing with product analytics budget"
      },
      {
        theme: "Onboarding & KYC Funnel Optimization",
        type: "pain",
        text: "Crypto trading UX research: Industry KYC completion benchmark is 72-78%. Coinbase's 62% is below average, suggesting significant optimization opportunity.",
        date: "2026-03-15",
        url: "https://app.getglean.com/search/doc_coinbase_003",
        businessImpact: "Below-benchmark KYC completion provides strong outside-in narrative for funnel optimization"
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

// ============================================================
// Mock Competitive Landscape Data (keyed by account name)
// ============================================================
const MOCK_COMPETITIVE = {
  "Bank of America": {
    deployed: [
      { name: "Adobe Analytics", product: "Adobe Experience Platform", maturity: "deeply-embedded", since: "2018", notes: "Enterprise-wide deployment across all digital properties. 200+ users." },
      { name: "Google Analytics 360", product: "GA360", maturity: "established", since: "2020", notes: "Used by marketing org for campaign attribution." },
      { name: "Quantum Metric", product: "Digital Analytics", maturity: "pilot", since: "2025", notes: "AI COE team running a proof-of-concept for AI feature analytics." }
    ],
    rfpCompetitors: [
      { name: "Pendo", threat: "medium", notes: "Pitched product analytics for AI features. Strong in-app guidance story." },
      { name: "Heap", threat: "low", notes: "Mentioned in early conversations but not actively evaluated." }
    ],
    summary: "Adobe is deeply embedded enterprise-wide. We're competing for net-new AI analytics use case where Adobe has gaps. Pendo is in the mix for product analytics."
  },
  "Spotify": {
    deployed: [
      { name: "Mixpanel", product: "Product Analytics", maturity: "established", since: "2021", notes: "Primary product analytics tool for music experience. ~150 users." },
      { name: "Snowplow", product: "Event Collection", maturity: "deeply-embedded", since: "2019", notes: "Custom event pipeline feeding their data warehouse." }
    ],
    rfpCompetitors: null,
    summary: "Mixpanel is established but struggling with scale. Expansion path is podcast analytics where Mixpanel isn't deployed. Snowplow is infrastructure-level and not a competitive threat."
  },
  "Peloton": {
    deployed: [
      { name: "Amplitude", product: "Analytics", maturity: "established", since: "2023", notes: "Current customer. Used by product team for connected fitness analytics." },
      { name: "Braze", product: "Customer Engagement", maturity: "established", since: "2022", notes: "Marketing automation and push notifications. Integrated with current analytics." }
    ],
    rfpCompetitors: [
      { name: "Mixpanel", threat: "high", notes: "Actively being evaluated as a potential replacement. Cost concerns driving evaluation." }
    ],
    summary: "We're the incumbent but at risk. Mixpanel is being evaluated as a lower-cost alternative. Renewal defense is critical."
  },
  "Stripe": {
    deployed: [
      { name: "Heap", product: "Digital Insights", maturity: "established", since: "2021", notes: "Used by developer experience team. 80+ users across product org." },
      { name: "Datadog", product: "RUM / APM", maturity: "deeply-embedded", since: "2019", notes: "Infrastructure monitoring. Some overlap with product analytics use cases." }
    ],
    rfpCompetitors: [
      { name: "Heap", threat: "high", notes: "Incumbent with strong user base. We're trying to displace." },
      { name: "PostHog", threat: "medium", notes: "Developer-friendly positioning resonates with Stripe's eng culture." }
    ],
    summary: "Heap is the incumbent and primary competitor. PostHog is a dark horse with developer appeal. We need to differentiate on enterprise scale and financial modeling capabilities."
  },
  "DoorDash": {
    deployed: [
      { name: "Amplitude", product: "Analytics", maturity: "established", since: "2021", notes: "Current customer. Consumer-side analytics for delivery experience." },
      { name: "Segment", product: "CDP", maturity: "deeply-embedded", since: "2020", notes: "Central data collection layer feeding multiple tools." }
    ],
    rfpCompetitors: null,
    summary: "We're the incumbent on consumer side. Expansion into merchant analytics is greenfield — no competing product analytics tool on merchant side."
  },
  "Rivian": {
    deployed: [
      { name: "Google Analytics 4", product: "GA4", maturity: "emerging", since: "2024", notes: "Basic web analytics only. No product analytics for connected vehicle." },
      { name: "Palantir Foundry", product: "Data Platform", maturity: "established", since: "2022", notes: "Heavy data platform for manufacturing and supply chain. Not product analytics." }
    ],
    rfpCompetitors: [
      { name: "Mixpanel", threat: "high", notes: "Strong pitch around mobile app analytics for EV owners." },
      { name: "Pendo", threat: "medium", notes: "In-app engagement story for vehicle companion app." },
      { name: "Amplitude", threat: "n/a", notes: "We are a contender in this evaluation." }
    ],
    summary: "Greenfield opportunity — no product analytics deployed. Formal RFP with Mixpanel as primary competitor. Pendo also evaluating. GA4 is minimal and not competitive."
  },
  "Instacart": {
    deployed: [
      { name: "Amplitude", product: "Analytics", maturity: "deeply-embedded", since: "2022", notes: "Current customer. 300+ users across consumer and shopper teams." },
      { name: "Looker", product: "BI / Dashboards", maturity: "deeply-embedded", since: "2020", notes: "Primary BI tool for business stakeholders. Complementary to Amplitude." }
    ],
    rfpCompetitors: null,
    summary: "We're deeply embedded. Renewal is about proving continued value and expanding into new use cases. No competitive threat identified."
  },
  "Figma": {
    deployed: [
      { name: "PostHog", product: "Product Analytics", maturity: "established", since: "2023", notes: "Engineering team deployed PostHog for product-led growth tracking. ~60 users." },
      { name: "LaunchDarkly", product: "Feature Flags", maturity: "established", since: "2022", notes: "Feature management. Potential integration point." }
    ],
    rfpCompetitors: [
      { name: "PostHog", threat: "high", notes: "Incumbent with engineering loyalty. Open-source DNA appeals to Figma's culture." },
      { name: "Statsig", threat: "medium", notes: "Experimentation platform being considered for A/B testing needs." }
    ],
    summary: "PostHog is the incumbent with strong engineering support. Our differentiation is enterprise-grade analytics, advanced cohorts, and superior collaboration features for non-technical users."
  },
  "Airbnb": {
    deployed: [
      { name: "In-house (Minerva)", product: "Custom Analytics", maturity: "deeply-embedded", since: "2016", notes: "Proprietary metrics layer built on top of Spark/Hive. 500+ users." },
      { name: "Tableau", product: "BI / Visualization", maturity: "deeply-embedded", since: "2017", notes: "Primary dashboarding tool for business teams." }
    ],
    rfpCompetitors: [
      { name: "Mixpanel", threat: "low", notes: "Explored for specific team use cases but not a serious contender." }
    ],
    summary: "Airbnb has a strong in-house analytics platform (Minerva) but it's expensive to maintain. Our opportunity is augmenting or partially replacing custom tooling with faster time-to-insight."
  },
  "Shopify": {
    deployed: [
      { name: "Google Analytics 4", product: "GA4", maturity: "established", since: "2023", notes: "Used across merchant-facing properties." },
      { name: "Heap", product: "Product Analytics", maturity: "pilot", since: "2025", notes: "Pilot in the merchant admin experience team. 20 users." }
    ],
    rfpCompetitors: [
      { name: "Heap", threat: "high", notes: "Already in pilot. Strong autocapture story resonates with Shopify's speed-of-deployment values." },
      { name: "Amplitude", threat: "n/a", notes: "We are a contender in this evaluation." }
    ],
    summary: "Heap has a head start with an active pilot. We need to demonstrate superior analytics depth and scalability beyond autocapture. GA4 is not a competitive threat for product analytics."
  },
  "BMW": {
    deployed: [
      { name: "Adobe Analytics", product: "Adobe Experience Cloud", maturity: "deeply-embedded", since: "2017", notes: "Enterprise standard across all digital touchpoints. 400+ users globally." },
      { name: "Medallia", product: "Experience Management", maturity: "established", since: "2019", notes: "Customer feedback and NPS tracking across dealership and digital experiences." },
      { name: "SAP Analytics Cloud", product: "Enterprise BI", maturity: "established", since: "2020", notes: "Corporate BI standard. Manufacturing and sales analytics." }
    ],
    rfpCompetitors: [
      { name: "Pendo", threat: "medium", notes: "Pitched for connected car companion app analytics." },
      { name: "Contentsquare", threat: "medium", notes: "Strong digital experience analytics pitch for configurator and e-commerce." }
    ],
    summary: "Adobe is deeply embedded enterprise-wide (EMEA HQ mandate). Our opportunity is the connected vehicle digital experience where Adobe has gaps. Contentsquare and Pendo also competing for this space."
  },
  "Notion": {
    deployed: [
      { name: "Amplitude", product: "Analytics", maturity: "established", since: "2022", notes: "Current customer. Primary product analytics for collaboration features." },
      { name: "Statsig", product: "Experimentation", maturity: "emerging", since: "2024", notes: "Recently adopted for A/B testing. Growing footprint in product org." }
    ],
    rfpCompetitors: null,
    summary: "We're the incumbent. Expansion opportunity into AI features analytics. Statsig is complementary, not competitive. No displacement risk identified."
  },
  "Coinbase": {
    deployed: [
      { name: "Amplitude", product: "Analytics", maturity: "established", since: "2022", notes: "Current customer. Trading experience and onboarding analytics." },
      { name: "Chainalysis", product: "Blockchain Analytics", maturity: "deeply-embedded", since: "2019", notes: "Compliance and transaction monitoring. Not a product analytics competitor." },
      { name: "Looker", product: "BI / Dashboards", maturity: "established", since: "2021", notes: "Business intelligence for finance and operations teams." }
    ],
    rfpCompetitors: [
      { name: "Mixpanel", threat: "medium", notes: "Some teams exploring Mixpanel for specific use cases. Cost-driven evaluation." }
    ],
    summary: "We're the incumbent but Mixpanel is circling on cost. Renewal defense should emphasize compliance-grade data governance and the breadth of our deployment."
  }
};

// ============================================================
// Mock Amplitude Customer Success Stories
// ============================================================
const MOCK_SUCCESS_STORIES = [
  {
    id: "ss-nbcuniversal",
    customer: "NBCUniversal",
    industry: "Media",
    useCaseThemes: ["Streaming Engagement Optimization", "Podcast Engagement & Monetization Analytics", "Cross-Platform Listening Experience", "AI Product Performance & Feature Measurement"],
    title: "NBCUniversal Drives Streaming Engagement with Amplitude",
    summary: "NBCUniversal used Amplitude to measure content engagement across Peacock, reducing churn by identifying drop-off points in the streaming experience and personalizing content recommendations at scale.",
    url: "https://amplitude.com/customers/nbcuniversal",
    isPublic: true,
    metrics: ["22% reduction in early churn", "35% increase in content discovery engagement", "3x faster experiment velocity"]
  },
  {
    id: "ss-burger-king",
    customer: "Burger King",
    industry: "QSR / Retail",
    useCaseThemes: ["Mobile App Conversion Optimization", "Checkout Conversion Optimization", "Merchant Analytics & Storefront Optimization"],
    title: "Burger King Increases Mobile Order Conversion with Amplitude",
    summary: "Burger King leveraged Amplitude's funnel analysis and experimentation to optimize their mobile ordering flow, identifying friction points that were suppressing conversion from menu browse to completed purchase.",
    url: "https://amplitude.com/customers/burger-king",
    isPublic: true,
    metrics: ["18% lift in mobile order conversion", "40% faster A/B test cycle time", "2.1x ROI on mobile app investment"]
  },
  {
    id: "ss-jumbo-interactive",
    customer: "Jumbo Interactive",
    industry: "Gaming / Lottery",
    useCaseThemes: ["User Retention Analytics", "Product-Led Growth Funnel Optimization", "Onboarding & KYC Funnel Optimization"],
    title: "Jumbo Interactive Boosts Lottery Player Retention with Amplitude",
    summary: "Jumbo Interactive used Amplitude cohort analysis and behavioral segmentation to identify at-risk lottery players and deploy targeted re-engagement campaigns, significantly improving 30-day retention rates.",
    url: "https://amplitude.com/customers/jumbo-interactive",
    isPublic: true,
    metrics: ["27% improvement in 30-day player retention", "15% increase in repeat purchase rate", "50% reduction in time to retention insight"]
  },
  {
    id: "ss-under-armour",
    customer: "Under Armour",
    industry: "Fitness / Consumer",
    useCaseThemes: ["Connected Fitness Engagement", "Shopper Efficiency & Fulfillment Optimization", "Cross-Platform Listening Experience", "Experience Quality Measurement"],
    title: "Under Armour Measures Connected Fitness Engagement Across Platforms",
    summary: "Under Armour used Amplitude to unify behavioral data from the MapMyRun and MyFitnessPal apps, enabling product teams to understand cross-platform engagement and optimize the connected fitness experience.",
    url: "https://amplitude.com/customers/under-armour",
    isPublic: true,
    metrics: ["45% increase in cross-app engagement", "30% improvement in workout completion rates", "2x faster feature adoption measurement"]
  },
  {
    id: "ss-top3-us-bank",
    customer: "Top 3 US Bank",
    industry: "Financial Services",
    useCaseThemes: ["Digital Banking Customer Journey Optimization", "AI Product Performance & Feature Measurement", "Onboarding & KYC Funnel Optimization", "Cross-Channel Customer Journey"],
    title: "Top 3 US Bank Optimizes Digital Banking Journeys with Amplitude",
    summary: "A top-three US bank deployed Amplitude to map the end-to-end digital account opening and onboarding journey, uncovering drop-off points that reduced completed applications and identifying AI-powered nudge opportunities to improve conversion.",
    url: null,
    isPublic: false,
    metrics: ["31% improvement in digital account opening completion", "24% reduction in KYC drop-off", "$4.2M in estimated annual recovered revenue"]
  },
  {
    id: "ss-fortune100-fintech",
    customer: "Fortune 100 Fintech",
    industry: "Fintech",
    useCaseThemes: ["Developer Experience Measurement", "Developer Platform Analytics", "Product-Led Growth Funnel Optimization", "Onboarding & KYC Funnel Optimization"],
    title: "Fortune 100 Fintech Scales Developer Platform Analytics with Amplitude",
    summary: "A Fortune 100 fintech used Amplitude to instrument their developer platform, measuring API adoption funnels and time-to-first-integration to reduce developer time-to-value and increase platform stickiness.",
    url: null,
    isPublic: false,
    metrics: ["38% reduction in developer time-to-first-integration", "52% improvement in API activation rate", "3x increase in instrumented developer journeys"]
  },
  {
    id: "ss-calm",
    customer: "Calm",
    industry: "Health & Wellness",
    useCaseThemes: ["Subscription Conversion Optimization", "Product-Led Growth Funnel Optimization", "Experience Quality Measurement", "User Retention Analytics"],
    title: "Calm Improves Subscription Conversion with Amplitude Experimentation",
    summary: "Calm used Amplitude's experimentation platform to run structured A/B tests across their free-to-paid conversion funnel, identifying which meditation content and in-app prompts drove the highest subscription upgrade rates.",
    url: "https://amplitude.com/customers/calm",
    isPublic: true,
    metrics: ["19% lift in free-to-paid conversion", "4x increase in experiment throughput", "28% improvement in 90-day subscriber retention"]
  },
  {
    id: "ss-rappi",
    customer: "Rappi",
    industry: "Marketplace / Delivery",
    useCaseThemes: ["Merchant Onboarding Conversion", "Dasher-Merchant Matching Optimization", "Merchant Analytics & Storefront Optimization", "Checkout Conversion Optimization"],
    title: "Rappi Accelerates Merchant Onboarding Conversion Across Latin America",
    summary: "Rappi used Amplitude to instrument and optimize the merchant onboarding flow across multiple markets, identifying localization gaps and UX friction that were slowing time-to-first-order for new restaurant partners.",
    url: "https://amplitude.com/customers/rappi",
    isPublic: true,
    metrics: ["42% improvement in merchant onboarding completion rate", "60% reduction in time-to-first-order for new merchants", "25% increase in merchant GMV in first 30 days"]
  },
  {
    id: "ss-atlassian",
    customer: "Atlassian",
    industry: "SaaS / Collaboration",
    useCaseThemes: ["Product-Led Growth Funnel Optimization", "Collaboration Analytics", "Workspace Collaboration Analytics", "PLG Funnel Optimization", "AI Feature Adoption & Impact"],
    title: "Atlassian Powers Product-Led Growth with Amplitude",
    summary: "Atlassian used Amplitude to unify product usage signals across Jira, Confluence, and Trello, enabling their PLG team to identify expansion signals, measure feature adoption, and accelerate free-to-paid conversion at enterprise scale.",
    url: "https://amplitude.com/customers/atlassian",
    isPublic: true,
    metrics: ["33% improvement in free-to-paid conversion", "2.4x increase in cross-product expansion rate", "50% faster feature adoption measurement"]
  },
  {
    id: "ss-global-auto-oem",
    customer: "Global Automotive OEM",
    industry: "Automotive",
    useCaseThemes: ["Connected Vehicle UX Analytics", "Digital Showroom & Configurator Analytics", "Connected Vehicle Digital Experience", "Cross-Channel Customer Journey"],
    title: "Global Automotive OEM Measures Connected Vehicle Digital Experience with Amplitude",
    summary: "A global automotive OEM used Amplitude to instrument the companion mobile app for their connected vehicle platform, measuring driver interaction patterns with in-vehicle software features and optimizing the digital ownership experience.",
    url: null,
    isPublic: false,
    metrics: ["48% increase in connected feature engagement", "35% improvement in app session depth", "22% reduction in in-vehicle UX support tickets"]
  },
  {
    id: "ss-instacart",
    customer: "Instacart",
    industry: "Marketplace / Grocery",
    useCaseThemes: ["Shopper Efficiency & Fulfillment Optimization", "Merchant Analytics & Storefront Optimization", "Merchant Onboarding Conversion", "User Retention Analytics"],
    title: "Instacart Optimizes Shopper Experience and Merchant Performance with Amplitude",
    summary: "Instacart used Amplitude to measure shopper fulfillment efficiency and merchant storefront performance, enabling product and operations teams to identify bottlenecks in the pick-pack-deliver flow and optimize merchant catalog completeness.",
    url: "https://amplitude.com/customers/instacart",
    isPublic: true,
    metrics: ["17% improvement in on-time delivery rate", "29% increase in merchant catalog completion", "3x faster insight delivery to operations teams"]
  },
  {
    id: "ss-leading-crypto-exchange",
    customer: "Leading Crypto Exchange",
    industry: "Crypto / Fintech",
    useCaseThemes: ["Trading Experience Analytics", "Regulatory Compliance Dashboards", "Onboarding & KYC Funnel Optimization", "Digital Banking Customer Journey Optimization"],
    title: "Leading Crypto Exchange Improves Trading UX and Compliance Visibility with Amplitude",
    summary: "A leading crypto exchange used Amplitude to instrument their trading interface and KYC onboarding funnel, surfacing compliance-grade audit trails and reducing drop-off during identity verification.",
    url: null,
    isPublic: false,
    metrics: ["41% reduction in KYC verification drop-off", "26% improvement in first-trade completion rate", "100% audit trail coverage for compliance reporting"]
  },
  {
    id: "ss-booking-com",
    customer: "Booking.com",
    industry: "Travel / Marketplace",
    useCaseThemes: ["AI Product Performance & Feature Measurement", "AI Feature Adoption & Impact", "Guest Experience Analytics & Personalization", "Host Marketplace Optimization", "Cross-Channel Customer Journey"],
    title: "Booking.com Measures AI Feature Adoption and Personalization Impact with Amplitude",
    summary: "Booking.com used Amplitude to measure the adoption and downstream booking impact of their AI-powered search and recommendation features, enabling rapid iteration and confident rollout of machine learning models across markets.",
    url: "https://amplitude.com/customers/booking-com",
    isPublic: true,
    metrics: ["23% lift in booking conversion attributed to AI recommendations", "4x faster AI feature experiment cycles", "38% increase in returning user engagement with personalized content"]
  },
  {
    id: "ss-paypal",
    customer: "PayPal",
    industry: "Fintech",
    useCaseThemes: ["Cross-Platform User Journey", "Developer Experience Measurement", "Checkout Conversion Optimization", "Onboarding & KYC Funnel Optimization", "Trading Experience Analytics"],
    title: "PayPal Unifies Cross-Platform User Journey Analytics with Amplitude",
    summary: "PayPal used Amplitude to stitch together behavioral data across their consumer app, merchant checkout SDK, and Venmo platform, giving product teams a unified view of the payment journey and enabling cross-surface experimentation.",
    url: "https://amplitude.com/customers/paypal",
    isPublic: true,
    metrics: ["44% improvement in checkout completion rate", "3x reduction in cross-platform attribution time", "31% increase in PayPal-Venmo cross-product adoption"]
  },
  {
    id: "ss-shopify",
    customer: "Shopify",
    industry: "E-commerce / SaaS",
    useCaseThemes: ["Merchant Analytics & Storefront Optimization", "Merchant Onboarding Conversion", "Checkout Conversion Optimization", "Product-Led Growth Funnel Optimization"],
    title: "Shopify Deepens Merchant Experience Analytics with Amplitude",
    summary: "Shopify used Amplitude to instrument the merchant admin experience, enabling product teams to measure how merchants discover and adopt new features, optimize onboarding flows for new store owners, and identify expansion signals for Shopify Plus upsell.",
    url: "https://amplitude.com/customers/shopify",
    isPublic: true,
    metrics: ["36% improvement in merchant feature adoption within 30 days", "28% reduction in merchant onboarding time-to-first-sale", "2.7x increase in Shopify Plus expansion signal accuracy"]
  }
];
