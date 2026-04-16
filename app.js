// ============================================================
// State
// ============================================================
let requests = JSON.parse(localStorage.getItem('vc-requests-v2') || 'null') || [...SEED_REQUESTS];

function saveRequests() {
  localStorage.setItem('vc-requests-v2', JSON.stringify(requests));
}

// Backfill competitive landscape & success stories on existing requests (called after all functions are defined)
function migrateRequests() {
  let changed = false;
  requests.forEach(r => {
    if (!r.competitiveLandscape && typeof MOCK_COMPETITIVE !== 'undefined') {
      const cl = MOCK_COMPETITIVE[r.customerName];
      if (cl) {
        r.competitiveLandscape = { deployed: cl.deployed || [], rfpCompetitors: cl.rfpCompetitors || [], summary: cl.summary || '' };
        changed = true;
      }
    }
    if (r.useCases && r.useCases.length > 0 && !r.useCases[0].successStories && typeof MOCK_SUCCESS_STORIES !== 'undefined') {
      r.useCases = matchSuccessStories(r.useCases, r.industry || '');
      changed = true;
    }
  });
  if (changed) saveRequests();
}

// ============================================================
// VC Team
// ============================================================
const VC_TEAM = [
  { name: 'Kevin Colston', segment: 'Majors & Emerging (NAMER)' },
  { name: 'Rob Helegda', segment: 'Strategic' },
  { name: 'Riley Streit', segment: 'Strategic' },
  { name: 'Ali Bhamani', segment: 'EMEA' }
];

// AE-to-VC mapping for auto-assignment (Strategic accounts)
// This will be populated once Rob/Riley's AE assignments are shared
const AE_VC_MAP = {
  // 'AE Name': 'VC Name'
  // Example: 'Michael Santos': 'Rob Helegda'
};

// ============================================================
// Auto-Assignment Engine
// ============================================================
function autoAssignVc(region, ae, arr) {
  // 1. Check explicit AE-to-VC mapping (Strategic accounts)
  if (AE_VC_MAP[ae]) return AE_VC_MAP[ae];

  // 2. Region-based assignment
  if (region === 'EMEA') return 'Ali Bhamani';

  // 3. NAMER: Majors & Emerging (Kevin) vs Strategic (Rob/Riley)
  // For now, Kevin handles Majors & Emerging; Strategic mapping TBD
  return 'Kevin Colston';
}

// ============================================================
// Slack Notification System
// ============================================================
// In production, these call slack_send_message via MCP.
// For now, they log to a notification history and show toasts.
// ============================================================

function getNotificationLog(requestId) {
  const req = requests.find(r => r.id === requestId);
  return req?.notifications || [];
}

async function notifyVcOnSubmit(request) {
  // In production: mcp slack_send_message to VC's DM or #vc-requests channel
  const vcName = request.assignedVc || 'VC Team';
  const notification = {
    type: 'vc-new-request',
    to: vcName,
    channel: request.assignedVc ? `DM to ${vcName}` : '#vc-intake-requests',
    message: `New VC request: ${request.customerName} | ${request.dealType === 'land' ? 'New Logo' : capitalize(request.dealType)} | $${request.arr.toLocaleString()} ARR\nAE: ${request.ae}\nAsk: ${truncate(request.helpNeeded, 100)}\nTriage: ${TRIAGE_CONFIG[request.triage.verdict].label}`,
    timestamp: new Date().toISOString(),
    status: 'sent'
  };
  if (!request.notifications) request.notifications = [];
  request.notifications.push(notification);
  saveRequests();
  console.log(`[Slack] Notification sent to ${notification.channel}:`, notification.message);
}

async function notifyAeOnStatusChange(request, oldStatus, newStatus) {
  // In production: mcp slack_send_message to AE's DM
  const notification = {
    type: 'ae-status-update',
    to: request.ae,
    channel: `DM to ${request.ae}`,
    message: `Your VC request for ${request.customerName} (${request.id}) has been updated: ${STATUS_CONFIG[oldStatus].label} → ${STATUS_CONFIG[newStatus].label}${request.assignedVc ? '\nAssigned VC: ' + request.assignedVc : ''}`,
    timestamp: new Date().toISOString(),
    status: 'sent'
  };
  if (!request.notifications) request.notifications = [];
  request.notifications.push(notification);
  saveRequests();
  console.log(`[Slack] Notification sent to ${notification.channel}:`, notification.message);
}

async function notifyVcOnAssignment(request, vcName) {
  // In production: mcp slack_send_message to the assigned VC's DM
  const notification = {
    type: 'vc-assignment',
    to: vcName,
    channel: `DM to ${vcName}`,
    message: `You've been assigned to: ${request.customerName} | $${request.arr.toLocaleString()} ARR\nAE: ${request.ae}\nAsk: ${truncate(request.helpNeeded, 100)}\nDeadline: ${formatDate(request.neededBy)}`,
    timestamp: new Date().toISOString(),
    status: 'sent'
  };
  if (!request.notifications) request.notifications = [];
  request.notifications.push(notification);
  saveRequests();
  console.log(`[Slack] Notification sent to ${notification.channel}:`, notification.message);
}

// ============================================================
// Navigation
// ============================================================
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const page = link.dataset.page;
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById('page-' + page).classList.add('active');
    if (page === 'tracker') renderTracker();
    if (page === 'analytics') renderAnalytics();
  });
});

// ============================================================
// Collapsible sections
// ============================================================
document.querySelectorAll('.collapsible-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const icon = header.querySelector('.collapse-icon');
    body.classList.toggle('hidden');
    icon.textContent = body.classList.contains('hidden') ? '+' : '−';
  });
});

// ============================================================
// "Other" help-type toggle
// ============================================================
const helpOtherCheckbox = document.getElementById('help-type-other');
if (helpOtherCheckbox) {
  helpOtherCheckbox.addEventListener('change', () => {
    const otherField = document.getElementById('help-other-field');
    if (otherField) {
      otherField.classList.toggle('hidden', !helpOtherCheckbox.checked);
      if (helpOtherCheckbox.checked) {
        document.getElementById('help-other-text')?.focus();
      }
    }
  });
}

// ============================================================
// Default date
// ============================================================
document.getElementById('needed-by').valueAsDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000); // 2 weeks out

// ============================================================
// Status & Triage Config
// ============================================================
const STATUS_CONFIG = {
  'submitted':   { label: 'Submitted',   color: '#6366f1' },
  'in-review':   { label: 'In Review',   color: '#f59e0b' },
  'accepted':    { label: 'Accepted',    color: '#10b981' },
  'in-progress': { label: 'In Progress', color: '#3b82f6' },
  'completed':   { label: 'Completed',   color: '#059669' },
  'on-hold':     { label: 'On Hold',     color: '#94a3b8' }
};
const STATUS_ORDER = ['submitted', 'in-review', 'accepted', 'in-progress', 'completed', 'on-hold'];

const TRIAGE_CONFIG = {
  'auto-approved': { label: 'Auto-Approved', icon: '✅', color: '#059669', bg: '#ecfdf5', border: '#a7f3d0' },
  'needs-review':  { label: 'Needs Review',  icon: '🟡', color: '#d97706', bg: '#fffbeb', border: '#fde68a' },
  'out-of-scope':  { label: 'Out of Scope',  icon: '🔴', color: '#dc2626', bg: '#fef2f2', border: '#fecaca' }
};

const JUSTIFICATION_LABELS = {
  'well-known-brand': 'Well-Known Brand',
  'strategic-imperative': 'Strategic Imperative',
  'competitive-boxout': 'Competitive Boxout',
  'expansion-potential': 'Large Expansion Potential',
  'exec-sponsorship': 'Executive Sponsorship',
  'reference-potential': 'Reference / Case Study'
};

const SCOPE_IN = [
  'Financial modeling / ROI quantification',
  'Executive-level business case or value narrative',
  'Strategic positioning in business terms',
  'Value realization or renewal business case',
  'Stakeholder interviews (discovery, value validation, EBC/EBR prep)',
  'EBC or EBR preparation and delivery',
  'Discovery support where AE hasn\'t identified a business value angle'
];

const SCOPE_OUT = [
  'Competitive analysis or battlecard work',
  'Product demos, feature walkthroughs, technical POCs',
  'Implementation, instrumentation, or data architecture',
  '"How do I use Amplitude to do X" questions',
  'Pricing / packaging questions',
  'Customer success check-ins not tied to renewal/expansion'
];

// ============================================================
// Outcome Tracking
// ============================================================
const OUTCOME_CONFIG = {
  'won':      { label: 'Won',              color: '#059669', bg: '#ecfdf5', icon: '🏆' },
  'lost':     { label: 'Lost',             color: '#dc2626', bg: '#fef2f2', icon: '❌' },
  'expanded': { label: 'Expansion Closed',  color: '#2563eb', bg: '#eff6ff', icon: '📈' },
  'renewed':  { label: 'Renewal Closed',    color: '#7c3aed', bg: '#f5f3ff', icon: '🔄' },
  'pending':  { label: 'Pending Outcome',   color: '#94a3b8', bg: '#f8fafc', icon: '⏳' }
};

// ============================================================
// Time Estimate Details
// ============================================================
const TIME_ESTIMATE_CONFIG = {
  'LIGHT':        { label: 'Light',        hours: '2-4 hrs',  color: '#059669', bg: '#ecfdf5', desc: 'Quick turnaround. Likely a templated deliverable with minor customization — e.g., a standard value narrative, lightweight outside-in model, or renewal talking points. Minimal discovery needed.' },
  'MEDIUM':       { label: 'Medium',       hours: '4-8 hrs',  color: '#2563eb', bg: '#eff6ff', desc: 'Standard VC engagement. Requires some custom analysis and stakeholder alignment — e.g., a tailored business case, collaborative BVA with 1-2 stakeholders, or value realization summary. May involve 1-2 internal calls.' },
  'MEDIUM-HEAVY': { label: 'Medium-Heavy', hours: '8-16 hrs', color: '#d97706', bg: '#fffbeb', desc: 'Substantial engagement. Multi-stakeholder work requiring original financial modeling, custom ROI analysis, or deep discovery synthesis — e.g., outside-in financial model for exec audience, comprehensive BVA across multiple use cases. Expect 2-4 internal meetings.' },
  'HEAVY':        { label: 'Heavy',        hours: '16-30 hrs', color: '#dc2626', bg: '#fef2f2', desc: 'Major VC initiative. Full end-to-end value engagement — e.g., multi-week BVA with C-level deliverable, complex financial model with multiple scenarios, EBC/EBR preparation with original content. Expect 4+ meetings, deep research, and executive-quality output.' }
};

// ============================================================
// GTM Team Directory (for @mentions)
// ============================================================
const GTM_TEAM = [
  // VC Team
  { name: 'Kevin Colston', role: 'Sr. Value Consultant', team: 'VC' },
  { name: 'Rob Helegda', role: 'Value Consultant', team: 'VC' },
  { name: 'Riley Streit', role: 'Value Consultant', team: 'VC' },
  { name: 'Ali Bhamani', role: 'Value Consultant', team: 'VC' },
  { name: 'Spencer Reely', role: 'VC Operations', team: 'VC' },
  // Sales (AEs from mock data)
  { name: 'Cameron Curran', role: 'Account Executive', team: 'Sales' },
  { name: 'Jessica Martinez', role: 'Account Executive', team: 'Sales' },
  { name: 'David Kim', role: 'Account Executive', team: 'Sales' },
  { name: 'Lauren Park', role: 'Account Executive', team: 'Sales' },
  { name: 'Michael Santos', role: 'Account Executive', team: 'Sales' },
  { name: 'Alex Hernandez', role: 'Account Executive', team: 'Sales' },
  { name: 'Rachel Foster', role: 'Account Executive', team: 'Sales' },
  { name: 'Tyler Brooks', role: 'Account Executive', team: 'Sales' },
  // SEs from mock data
  { name: 'Adam Yapkowitz', role: 'Solutions Engineer', team: 'SE' },
  { name: 'Ryan Chen', role: 'Solutions Engineer', team: 'SE' },
  { name: 'Sarah Thompson', role: 'Solutions Engineer', team: 'SE' },
  { name: 'James O\'Brien', role: 'Solutions Engineer', team: 'SE' },
  { name: 'Aisha Patel', role: 'Solutions Engineer', team: 'SE' },
  { name: 'Natalie Wu', role: 'Solutions Engineer', team: 'SE' },
  { name: 'Brian Choi', role: 'Solutions Engineer', team: 'SE' },
  { name: 'Emily Sato', role: 'Solutions Engineer', team: 'SE' }
];

// Simulate pulling updated deal outcome from Salesforce
async function checkSfdcOutcome(request) {
  // In production: call salesforce_run_soql_live to check opportunity status
  // Returns: { closed: true/false, outcome: 'won'|'lost', closedArr: number, closeDate: string }
  const mock = MOCK_OUTCOMES?.[request.customerName];
  if (mock) return mock;
  return { closed: false };
}

// ============================================================
// Data Pull Engine
// ============================================================
// These functions simulate the data-pull workflow from Spencer's
// vc-intake skill. Each returns structured data that feeds into
// the triage engine and use case drafter. When MCP tools are
// wired up server-side, these become real API calls.
// ============================================================

async function pullSalesforceData(accountInput) {
  await simulateDelay(800);
  // In production: call salesforce_query_live_crm or salesforce_run_soql_live
  // Search by account name or opportunity URL
  const isUrl = accountInput.startsWith('http');
  const searchTerm = isUrl ? accountInput : accountInput.toLowerCase();

  const match = MOCK_ACCOUNTS.find(a =>
    isUrl ? a.sfdcLink === searchTerm : a.name.toLowerCase().includes(searchTerm)
  );

  if (!match) return { found: false, source: 'Salesforce' };

  return {
    found: true,
    source: 'Salesforce',
    data: { ...match }
  };
}

async function pullKaiaData(accountName) {
  await simulateDelay(600);
  // In production: call kaia_meeting_search with account filter
  const mock = MOCK_KAIA[accountName];
  if (!mock) return { found: false, source: 'Kaia / Outreach', detail: 'No calls found for this account' };
  return { found: true, source: 'Kaia / Outreach', data: mock };
}

async function pullGranolaData(accountName) {
  await simulateDelay(500);
  // In production: call query_granola_meetings or list_meetings
  const mock = MOCK_GRANOLA[accountName];
  if (!mock) return { found: false, source: 'Granola', detail: 'No meeting notes found' };
  return { found: true, source: 'Granola', data: mock };
}

async function pullSlackData(accountName) {
  await simulateDelay(700);
  // In production: call slack_search_public_and_private
  const mock = MOCK_SLACK[accountName];
  if (!mock) return { found: false, source: 'Slack', detail: 'No relevant Slack threads found' };
  return { found: true, source: 'Slack', data: mock };
}

async function pullGleanData(accountName) {
  await simulateDelay(500);
  // In production: call Glean search tool
  const mock = MOCK_GLEAN[accountName];
  if (!mock) return { found: false, source: 'Glean / Drive', detail: 'No internal documents found' };
  return { found: true, source: 'Glean / Drive', data: mock };
}

function simulateDelay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ============================================================
// Triage Engine (Spencer's logic)
// ============================================================

function runTriage(sfData, aeAsk, slackData, kaiaData, granolaData, gleanData) {
  const result = {
    verdict: null,
    rationale: '',
    flags: [],
    timeEstimate: 'MEDIUM',
    scopeCheck: null
  };

  if (!sfData || !sfData.found) {
    result.verdict = 'needs-review';
    result.rationale = 'Could not pull Salesforce data for this account. Manual review required.';
    result.flags.push({ type: 'warn', text: 'SALESFORCE DATA MISSING: Could not find opportunity. AE should verify the account name or provide the SFDC URL.' });
    return result;
  }

  const d = sfData.data;
  const arr = parseInt(d.arr) || 0;
  const dealType = d.dealType || 'land';
  const isRenewal = dealType === 'renewal';
  const isExpansion = dealType === 'expansion';
  const isLand = dealType === 'land';

  // --- ARR Threshold Check ---
  let arrVerdict;
  if (isLand || isExpansion) {
    if (arr >= 200000) arrVerdict = 'auto-approved';
    else if (arr >= 100000) arrVerdict = 'needs-review';
    else arrVerdict = 'out-of-scope';
  } else { // renewal
    if (arr >= 500000) arrVerdict = 'auto-approved';
    else if (arr >= 300000) arrVerdict = 'needs-review';
    else arrVerdict = 'out-of-scope';
  }

  // --- Scope Check ---
  const askLower = aeAsk.toLowerCase();
  const scopeSignals = {
    inScope: false,
    outOfScope: false,
    grayZone: false,
    matched: []
  };

  // In-scope keywords
  const inScopeKeywords = ['roi', 'financial model', 'business case', 'value narrative', 'value realization',
    'bva', 'business value', 'stakeholder interview', 'ebc', 'ebr', 'discovery support', 'executive'];
  const outScopeKeywords = ['competitive analysis', 'battlecard', 'demo', 'poc', 'implementation',
    'instrumentation', 'how do i use', 'pricing', 'packaging', 'check-in'];
  const grayKeywords = ['help me close', 'help me win', 'not sure', 'general support'];

  inScopeKeywords.forEach(kw => {
    if (askLower.includes(kw)) { scopeSignals.inScope = true; scopeSignals.matched.push(kw); }
  });
  outScopeKeywords.forEach(kw => {
    if (askLower.includes(kw)) { scopeSignals.outOfScope = true; scopeSignals.matched.push('OUT: ' + kw); }
  });
  grayKeywords.forEach(kw => {
    if (askLower.includes(kw)) { scopeSignals.grayZone = true; scopeSignals.matched.push('GRAY: ' + kw); }
  });

  result.scopeCheck = scopeSignals;

  // --- Renewal Timing Flag ---
  if (isRenewal && d.renewalDate) {
    const renewalDate = new Date(d.renewalDate);
    const today = new Date();
    const daysOut = Math.ceil((renewalDate - today) / (1000 * 60 * 60 * 24));
    if (daysOut < 100 && daysOut > 0) {
      result.flags.push({
        type: 'critical',
        text: `RENEWAL IN ${daysOut} DAYS: Less than 100 days to renewal. Why is VC being engaged now? Prior VC engagement: ${gleanData?.found ? 'Check Glean results' : 'None found'}.`
      });
    }
  }

  // --- Health Score Flag ---
  if (d.healthScore && d.healthScore < 30) {
    result.flags.push({
      type: 'warn',
      text: `HEALTH SCORE ${d.healthScore}: Low health score may reflect thin engagement signals or deal risk. Worth monitoring.`
    });
  }

  // --- Discovery Depth Flag ---
  const hasKaia = kaiaData?.found;
  const hasGranola = granolaData?.found;
  const hasSlack = slackData?.found;
  const hasGlean = gleanData?.found;
  const sourcesFound = [hasKaia, hasGranola, hasSlack, hasGlean].filter(Boolean).length;

  if (sourcesFound <= 1) {
    result.flags.push({
      type: 'warn',
      text: `THIN DISCOVERY: Only ${sourcesFound} data source(s) returned results. AE may need to complete discovery before VC engagement can be scoped.`
    });
  }

  // --- Determine Verdict ---
  if (scopeSignals.outOfScope && !scopeSignals.inScope) {
    result.verdict = 'out-of-scope';
    result.rationale = `The ask appears to be outside VC scope (matched: ${scopeSignals.matched.join(', ')}). Recommend redirecting to SE, CSM, or PS as appropriate.`;
  } else if (arrVerdict === 'auto-approved' && !scopeSignals.outOfScope && result.flags.filter(f => f.type === 'critical').length === 0) {
    result.verdict = 'auto-approved';
    const dealLabel = isLand ? 'New Logo' : isExpansion ? 'Expansion' : 'Renewal';
    const threshold = (isLand || isExpansion) ? '$200K' : '$500K';
    result.rationale = `At $${arr.toLocaleString()} ${dealLabel} ARR, this deal exceeds the ${threshold} auto-approve threshold. ${scopeSignals.inScope ? 'The ask is squarely in VC scope.' : 'The ask appears reasonable for VC engagement.'}`;
  } else {
    result.verdict = 'needs-review';
    const reasons = [];
    if (arrVerdict === 'needs-review') reasons.push('borderline ARR');
    if (arrVerdict === 'out-of-scope') reasons.push('ARR below threshold');
    if (scopeSignals.grayZone) reasons.push('vague ask');
    if (result.flags.some(f => f.type === 'critical')) reasons.push('timing flag');
    if (sourcesFound <= 1) reasons.push('thin discovery');
    result.rationale = `Needs review: ${reasons.join(', ')}. ${scopeSignals.inScope ? 'Ask appears in scope but other factors require attention.' : 'Recommend VC review before committing resources.'}`;
  }

  // --- Time Estimate ---
  if (arr >= 500000) result.timeEstimate = 'MEDIUM-HEAVY';
  if (arr >= 750000) result.timeEstimate = 'HEAVY';
  if (arr < 200000) result.timeEstimate = 'LIGHT';

  return result;
}

// ============================================================
// Use Case Auto-Drafter
// ============================================================

function draftUseCases(sfData, kaiaData, slackData, granolaData, gleanData) {
  const useCases = [];
  const signals = [];

  // Gather signals from all sources
  if (kaiaData?.found && kaiaData.data.signals) {
    kaiaData.data.signals.forEach(s => signals.push({ ...s, source: 'Kaia' }));
  }
  if (slackData?.found && slackData.data.signals) {
    slackData.data.signals.forEach(s => signals.push({ ...s, source: 'Slack' }));
  }
  if (granolaData?.found && granolaData.data.signals) {
    granolaData.data.signals.forEach(s => signals.push({ ...s, source: 'Granola' }));
  }
  if (gleanData?.found && gleanData.data.signals) {
    gleanData.data.signals.forEach(s => signals.push({ ...s, source: 'Glean' }));
  }

  // Group signals by theme and draft use cases
  const themes = {};
  signals.forEach(s => {
    const theme = s.theme || 'General';
    if (!themes[theme]) themes[theme] = [];
    themes[theme].push(s);
  });

  let ucNum = 1;
  for (const [theme, sigs] of Object.entries(themes)) {
    if (ucNum > 3) break;
    const problems = sigs.filter(s => s.type === 'pain' || s.type === 'challenge');
    const priorities = sigs.filter(s => s.type === 'priority' || s.type === 'initiative');
    const allSigs = [...problems, ...priorities, ...sigs.filter(s => !['pain','challenge','priority','initiative'].includes(s.type))];

    if (allSigs.length === 0) continue;

    const evidenceSources = [...new Set(allSigs.map(s => `${s.source}${s.date ? ' (' + s.date + ')' : ''}`))];
    const evidenceLinks = allSigs.filter(s => s.date).map(s => ({
      source: s.source,
      date: s.date,
      url: s.url || null
    }));
    // Deduplicate by source+date
    const seenEvidence = new Set();
    const uniqueEvidenceLinks = evidenceLinks.filter(e => {
      const key = `${e.source}-${e.date}`;
      if (seenEvidence.has(key)) return false;
      seenEvidence.add(key);
      return true;
    });

    const confidence = allSigs.some(s => s.verbatim) ? 'Medium-High' : allSigs.length >= 2 ? 'Medium' : 'Low';
    const stakeholders = [...new Set(allSigs.filter(s => s.stakeholder).map(s => s.stakeholder))];

    useCases.push({
      num: ucNum,
      title: theme,
      problem: allSigs.map(s => s.text).join(' '),
      impacts: {
        business: sigs.find(s => s.businessImpact)?.businessImpact || 'To be determined through discovery',
        endUser: sigs.find(s => s.userImpact)?.userImpact || 'To be determined through discovery',
        internal: sigs.find(s => s.internalImpact)?.internalImpact || 'To be determined through discovery'
      },
      solution: sigs.find(s => s.proposedSolution)?.proposedSolution || 'To be scoped during VC engagement',
      valueHypothesis: sigs.find(s => s.valueHyp)?.valueHyp || 'To be developed',
      stakeholders: stakeholders.length > 0 ? stakeholders.join(', ') : 'To be identified',
      evidence: evidenceSources.join('; '),
      evidenceLinks: uniqueEvidenceLinks,
      confidence
    });
    ucNum++;
  }

  return useCases;
}

// ============================================================
// Build Evidence Log
// ============================================================

function buildEvidenceLog(sfResult, kaiaResult, slackResult, granolaResult, gleanResult) {
  function extractLinks(result, sourceType) {
    if (!result.found || !result.data?.signals) return [];
    return result.data.signals.filter(s => s.url).map(s => ({
      label: `${sourceType === 'Kaia' ? 'Call' : sourceType === 'Slack' ? 'Thread' : sourceType === 'Granola' ? 'Notes' : 'Doc'} – ${s.date ? new Date(s.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) : 'Link'}`,
      url: s.url
    }));
  }

  return [
    {
      source: 'Salesforce',
      status: sfResult.found ? 'found' : 'not-found',
      statusLabel: sfResult.found ? '✅ Found' : '❌ Not Found',
      detail: sfResult.found
        ? `Opp: ${sfResult.data.oppName || sfResult.data.name}. ARR: $${parseInt(sfResult.data.arr).toLocaleString()}. Stage: ${sfResult.data.dealStage}.`
        : 'Could not find account or opportunity.',
      links: sfResult.found && sfResult.data.sfdcLink ? [{ label: 'Open Opportunity', url: sfResult.data.sfdcLink }] : []
    },
    {
      source: 'Kaia / Outreach',
      status: kaiaResult.found ? (kaiaResult.data.callCount > 2 ? 'found' : 'partial') : 'not-found',
      statusLabel: kaiaResult.found ? (kaiaResult.data.callCount > 2 ? '✅ Found' : '⚠️ Partial') : '❌ None',
      detail: kaiaResult.found
        ? `${kaiaResult.data.callCount} call(s) in ${kaiaResult.data.dateRange}. ${kaiaResult.data.summary || ''}`
        : kaiaResult.detail || 'No calls found.',
      links: extractLinks(kaiaResult, 'Kaia')
    },
    {
      source: 'Slack',
      status: slackResult.found ? 'found' : 'not-found',
      statusLabel: slackResult.found ? '✅ Found' : '❌ None',
      detail: slackResult.found
        ? `${slackResult.data.threadCount} thread(s) across ${slackResult.data.channels?.join(', ') || 'DMs'}. ${slackResult.data.summary || ''}`
        : slackResult.detail || 'No relevant threads found.',
      links: extractLinks(slackResult, 'Slack')
    },
    {
      source: 'Granola',
      status: granolaResult.found ? 'found' : 'not-found',
      statusLabel: granolaResult.found ? '✅ Found' : '❌ None',
      detail: granolaResult.found
        ? `${granolaResult.data.meetingCount} meeting(s). ${granolaResult.data.summary || ''}`
        : granolaResult.detail || 'No meeting notes found.',
      links: extractLinks(granolaResult, 'Granola')
    },
    {
      source: 'Glean / Drive',
      status: gleanResult.found ? 'found' : 'not-found',
      statusLabel: gleanResult.found ? '✅ Found' : '❌ None',
      detail: gleanResult.found
        ? `${gleanResult.data.docCount} document(s). ${gleanResult.data.summary || ''}`
        : gleanResult.detail || 'No internal documents found.',
      links: extractLinks(gleanResult, 'Glean')
    }
  ];
}

// ============================================================
// Competitive Landscape Lookup
// ============================================================

function lookupCompetitiveLandscape(accountName) {
  const data = (typeof MOCK_COMPETITIVE !== 'undefined') ? MOCK_COMPETITIVE[accountName] : null;
  if (!data) return null;
  return {
    deployed: data.deployed || [],
    rfpCompetitors: data.rfpCompetitors || [],
    summary: data.summary || ''
  };
}

// ============================================================
// Success Story Matching
// ============================================================

const MATURITY_LABELS = {
  'deeply-embedded': { label: 'Deeply Embedded', color: '#dc2626', bg: '#fef2f2', icon: '🔴' },
  'established': { label: 'Established', color: '#d97706', bg: '#fffbeb', icon: '🟡' },
  'emerging': { label: 'Emerging', color: '#2563eb', bg: '#eff6ff', icon: '🔵' },
  'pilot': { label: 'Pilot', color: '#7c3aed', bg: '#f5f3ff', icon: '🟣' },
  'legacy': { label: 'Legacy', color: '#6b7280', bg: '#f9fafb', icon: '⚪' }
};

function matchSuccessStories(useCases, industry) {
  if (typeof MOCK_SUCCESS_STORIES === 'undefined' || !MOCK_SUCCESS_STORIES) return useCases;

  return useCases.map(uc => {
    const stories = [];
    const ucThemeLower = (uc.title || '').toLowerCase();

    MOCK_SUCCESS_STORIES.forEach(story => {
      let score = 0;

      // Theme match: check if any story theme overlaps with use case title
      const themeMatch = story.useCaseThemes?.some(t => {
        const tLower = t.toLowerCase();
        // Check for keyword overlap (at least 2 significant words in common)
        const ucWords = ucThemeLower.split(/\s+/).filter(w => w.length > 3);
        const storyWords = tLower.split(/\s+/).filter(w => w.length > 3);
        const overlap = ucWords.filter(w => storyWords.some(sw => sw.includes(w) || w.includes(sw)));
        if (overlap.length >= 2) return true;
        // Direct substring match
        if (tLower.includes(ucThemeLower) || ucThemeLower.includes(tLower)) return true;
        return false;
      });

      if (themeMatch) score += 3;

      // Industry match
      if (industry && story.industry) {
        const indLower = industry.toLowerCase();
        const storyIndLower = story.industry.toLowerCase();
        if (indLower.includes(storyIndLower) || storyIndLower.includes(indLower)) {
          score += 2;
        } else {
          // Check for partial overlap (e.g., "Financial Services / Fintech" vs "Fintech")
          const indParts = indLower.split(/[\/,&]+/).map(s => s.trim());
          const storyParts = storyIndLower.split(/[\/,&]+/).map(s => s.trim());
          const partOverlap = indParts.some(p => storyParts.some(sp => p.includes(sp) || sp.includes(p)));
          if (partOverlap) score += 2;
        }
      }

      if (score >= 2) {
        stories.push({ ...story, relevanceScore: score });
      }
    });

    // Sort by relevance (industry+theme first), then limit to top 3
    stories.sort((a, b) => b.relevanceScore - a.relevanceScore);
    return { ...uc, successStories: stories.slice(0, 3) };
  });
}

// ============================================================
// Processing Flow
// ============================================================

const PROCESSING_STEPS = [
  { id: 'sfdc', label: 'Pulling Salesforce opportunity data', source: 'Salesforce' },
  { id: 'kaia', label: 'Searching Kaia / Outreach call transcripts', source: 'Kaia' },
  { id: 'slack', label: 'Scanning Slack threads and DMs', source: 'Slack' },
  { id: 'granola', label: 'Checking Granola meeting notes', source: 'Granola' },
  { id: 'glean', label: 'Searching Glean and Google Drive', source: 'Glean' },
  { id: 'triage', label: 'Running triage assessment', source: 'Engine' },
  { id: 'competitive', label: 'Pulling competitive landscape intel', source: 'Salesforce' },
  { id: 'usecases', label: 'Drafting use cases from discovery signals', source: 'Engine' },
  { id: 'stories', label: 'Matching relevant customer success stories', source: 'Engine' },
  { id: 'brief', label: 'Assembling intake brief', source: 'Engine' }
];

function showProcessingModal(accountName) {
  const modal = document.getElementById('processing-modal');
  document.getElementById('processing-account').textContent = accountName;
  const stepsContainer = document.getElementById('processing-steps');
  stepsContainer.innerHTML = PROCESSING_STEPS.map(step => `
    <div class="proc-step" id="proc-${step.id}">
      <span class="proc-icon proc-pending">○</span>
      <span class="proc-label">${step.label}</span>
      <span class="proc-source source-badge src-${step.source.toLowerCase()}">${step.source}</span>
    </div>
  `).join('');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function updateProcessingStep(stepId, status) {
  const el = document.getElementById('proc-' + stepId);
  if (!el) return;
  const icon = el.querySelector('.proc-icon');
  icon.className = 'proc-icon proc-' + status;
  if (status === 'active') icon.textContent = '◉';
  else if (status === 'done') icon.textContent = '✓';
  else if (status === 'error') icon.textContent = '✗';
}

function hideProcessingModal() {
  document.getElementById('processing-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

// ============================================================
// Form Submission
// ============================================================

document.getElementById('intake-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const accountInput = document.getElementById('account-input').value.trim();
  const neededBy = document.getElementById('needed-by').value;
  const additionalContext = document.getElementById('additional-context')?.value.trim() || '';

  // Build helpNeeded from checkbox selections
  const helpSelections = [];
  document.querySelectorAll('input[name="help-type"]:checked').forEach(cb => {
    if (cb.value === 'other') {
      const otherText = document.getElementById('help-other-text')?.value.trim();
      if (otherText) helpSelections.push(otherText);
    } else {
      helpSelections.push(cb.value);
    }
  });
  const helpNeeded = helpSelections.join('; ');

  if (!accountInput || !helpNeeded) {
    if (!accountInput) document.getElementById('account-input').focus();
    else if (helpSelections.length === 0) showToast('Please select at least one type of support needed.');
    return;
  }

  // Gather justifications
  const justifications = [];
  document.querySelectorAll('input[name="justification"]:checked').forEach(cb => {
    justifications.push(cb.value);
  });

  // Show processing modal
  showProcessingModal(accountInput);
  const btn = document.getElementById('submit-btn');
  btn.disabled = true;

  try {
    // Step 1: Salesforce
    updateProcessingStep('sfdc', 'active');
    const sfResult = await pullSalesforceData(accountInput);
    updateProcessingStep('sfdc', sfResult.found ? 'done' : 'error');

    const accountName = sfResult.found ? sfResult.data.name : accountInput;

    // Steps 2-5: Parallel data pulls
    updateProcessingStep('kaia', 'active');
    updateProcessingStep('slack', 'active');
    updateProcessingStep('granola', 'active');
    updateProcessingStep('glean', 'active');

    const [kaiaResult, slackResult, granolaResult, gleanResult] = await Promise.all([
      pullKaiaData(accountName),
      pullSlackData(accountName),
      pullGranolaData(accountName),
      pullGleanData(accountName)
    ]);

    updateProcessingStep('kaia', kaiaResult.found ? 'done' : 'error');
    updateProcessingStep('slack', slackResult.found ? 'done' : 'error');
    updateProcessingStep('granola', granolaResult.found ? 'done' : 'error');
    updateProcessingStep('glean', gleanResult.found ? 'done' : 'error');

    // Step 6: Triage
    updateProcessingStep('triage', 'active');
    await simulateDelay(400);
    const triage = runTriage(sfResult, helpNeeded, slackResult, kaiaResult, granolaResult, gleanResult);
    updateProcessingStep('triage', 'done');

    // Step 6b: Competitive landscape
    updateProcessingStep('competitive', 'active');
    await simulateDelay(350);
    const competitiveLandscape = lookupCompetitiveLandscape(accountName);
    updateProcessingStep('competitive', competitiveLandscape ? 'done' : 'error');

    // Step 7: Use cases
    updateProcessingStep('usecases', 'active');
    await simulateDelay(400);
    let useCases = draftUseCases(sfResult, kaiaResult, slackResult, granolaResult, gleanResult);
    updateProcessingStep('usecases', 'done');

    // Step 7b: Match success stories to use cases
    updateProcessingStep('stories', 'active');
    await simulateDelay(350);
    const sf = sfResult.found ? sfResult.data : {};
    useCases = matchSuccessStories(useCases, sf.industry || '');
    updateProcessingStep('stories', 'done');

    // Step 8: Assemble brief
    updateProcessingStep('brief', 'active');
    await simulateDelay(300);

    const evidenceLog = buildEvidenceLog(sfResult, kaiaResult, slackResult, granolaResult, gleanResult);

    const newRequest = {
      id: 'VC-2026-' + String(requests.length + 1).padStart(3, '0'),
      customerName: accountName,
      ae: sf.ae || '',
      se: sf.se || '',
      region: sf.region || 'NAMER',
      industry: sf.industry || '',
      dealType: sf.dealType || 'land',
      arr: parseInt(sf.arr) || 0,
      dealStage: sf.dealStage || '',
      submittedDate: new Date().toISOString().split('T')[0],
      expectedClose: sf.expectedClose || '',
      status: 'submitted',
      sfdcLink: sf.sfdcLink || '',
      oppName: sf.oppName || '',
      healthScore: sf.healthScore || null,

      // AE input
      helpNeeded,
      neededBy,
      additionalContext,
      justifications,

      // Renewal fields
      customerSince: sf.customerSince || null,
      renewalDate: sf.renewalDate || null,
      renewalArr: sf.renewalArr || null,

      // Contacts
      champion: sf.champion || '',
      championRole: sf.championRole || '',
      contacts: sf.contacts || [],

      // Triage
      triage,

      // Competitive Landscape
      competitiveLandscape,

      // Use Cases (with matched success stories)
      useCases,

      // Evidence
      evidenceLog,

      // Assignment (auto-assign based on region/AE)
      assignedVc: autoAssignVc(sf.region || 'NAMER', sf.ae || '', parseInt(sf.arr) || 0),

      // Notes / Activity Log
      notes: [],

      // Outcome Tracking
      outcome: null,
      closedArr: null,
      closeDate: null,
      projectedArr: parseInt(sf.arr) || 0,

      // Notifications
      notifications: []
    };

    updateProcessingStep('brief', 'done');
    await simulateDelay(500);

    requests.unshift(newRequest);
    saveRequests();

    // Send Slack notifications
    await notifyVcOnSubmit(newRequest);
    if (newRequest.assignedVc) {
      await notifyVcOnAssignment(newRequest, newRequest.assignedVc);
    }

    hideProcessingModal();
    const assignMsg = newRequest.assignedVc ? ` → Assigned to ${newRequest.assignedVc}` : '';
    showToast(`${newRequest.id} created for ${accountName} — ${TRIAGE_CONFIG[triage.verdict].icon} ${TRIAGE_CONFIG[triage.verdict].label}${assignMsg}`);

    // Reset form
    this.reset();
    document.getElementById('needed-by').valueAsDate = new Date(Date.now() + 14 * 24 * 60 * 60 * 1000);
    document.getElementById('help-other-field')?.classList.add('hidden');

    // Navigate to tracker
    setTimeout(() => {
      document.querySelector('[data-page="tracker"]').click();
    }, 400);

  } catch (err) {
    hideProcessingModal();
    showToast('Error generating brief. Please try again.');
    console.error(err);
  } finally {
    btn.disabled = false;
  }
});

// ============================================================
// Toast
// ============================================================
function showToast(message) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => { toast.classList.remove('show'); setTimeout(() => toast.remove(), 300); }, 3500);
}

// ============================================================
// Request Tracker (Card Layout)
// ============================================================

function populateVcFilter() {
  const select = document.getElementById('vc-filter');
  if (!select) return;
  const current = select.value;
  select.innerHTML = '<option value="all">All VCs</option>' +
    '<option value="unassigned">Unassigned</option>' +
    VC_TEAM.map(vc => `<option value="${vc.name}">${vc.name}</option>`).join('');
  select.value = current || 'all';
}

function renderTrackerMetrics() {
  const el = document.getElementById('tracker-metrics');
  if (!el) return;

  const total = requests.length;
  const open = requests.filter(r => ['submitted', 'in-review', 'accepted', 'in-progress'].includes(r.status)).length;
  const closed = requests.filter(r => r.status === 'completed').length;
  const onHold = requests.filter(r => r.status === 'on-hold').length;
  // "Requires Action" = submitted (not yet reviewed) + needs-review triage + on-hold
  const needsAction = requests.filter(r =>
    r.status === 'submitted' ||
    (r.status === 'in-review' && r.triage?.verdict === 'needs-review') ||
    r.status === 'on-hold'
  ).length;

  el.innerHTML = `
    <div class="tm-card">
      <div class="tm-value">${total}</div>
      <div class="tm-label">Total Requests</div>
    </div>
    <div class="tm-card tm-open">
      <div class="tm-value">${open}</div>
      <div class="tm-label">Open</div>
    </div>
    <div class="tm-card tm-closed">
      <div class="tm-value">${closed}</div>
      <div class="tm-label">Closed</div>
    </div>
    <div class="tm-card tm-action">
      <div class="tm-value">${needsAction}</div>
      <div class="tm-label">Needs Action</div>
    </div>
  `;
}

function renderTracker() {
  renderTrackerMetrics();

  const search = document.getElementById('tracker-search').value.toLowerCase();
  const activeFilter = document.querySelector('.pill.active')?.dataset.filter || 'all';
  const vcFilter = document.getElementById('vc-filter')?.value || 'all';

  let filtered = requests.filter(r => {
    const matchesSearch = !search ||
      r.customerName.toLowerCase().includes(search) ||
      (r.ae || '').toLowerCase().includes(search) ||
      (r.dealType || '').toLowerCase().includes(search) ||
      (r.assignedVc || '').toLowerCase().includes(search);
    const matchesFilter = activeFilter === 'all' || r.status === activeFilter;
    const matchesVc = vcFilter === 'all' ||
      (vcFilter === 'unassigned' ? !r.assignedVc : r.assignedVc === vcFilter);
    return matchesSearch && matchesFilter && matchesVc;
  });

  const container = document.getElementById('tracker-cards');
  const empty = document.getElementById('empty-state');

  if (filtered.length === 0) {
    container.innerHTML = '';
    empty.classList.remove('hidden');
    return;
  }

  empty.classList.add('hidden');
  container.innerHTML = filtered.map(r => {
    const triageInfo = r.triage ? TRIAGE_CONFIG[r.triage.verdict] || TRIAGE_CONFIG['needs-review'] : null;
    const dealLabel = r.dealType === 'land' ? 'New Logo' : capitalize(r.dealType);
    const outcomeInfo = r.outcome ? OUTCOME_CONFIG[r.outcome] : null;
    const dealDelta = (r.closedArr && r.projectedArr) ? r.closedArr - r.projectedArr : null;
    const dealDeltaPct = (dealDelta !== null && r.projectedArr > 0) ? ((dealDelta / r.projectedArr) * 100).toFixed(1) : null;
    const noteCount = r.notes?.length || 0;

    return `
    <div class="tracker-card">
      <div class="card-top-row">
        <div class="card-account">
          <span class="card-name">${r.customerName}</span>
          <span class="card-id">${r.id}</span>
        </div>
        <div class="card-top-badges">
          ${triageInfo ? `
            <span class="triage-pill" style="background:${triageInfo.bg}; color:${triageInfo.color}; border-color:${triageInfo.border}">
              ${triageInfo.icon} ${triageInfo.label}
            </span>
          ` : ''}
          ${outcomeInfo ? `
            <span class="outcome-pill" style="background:${outcomeInfo.bg}; color:${outcomeInfo.color}">
              ${outcomeInfo.icon} ${outcomeInfo.label}${r.closedArr ? ' | $' + r.closedArr.toLocaleString() : ''}
            </span>
          ` : ''}
        </div>
      </div>

      <div class="card-meta-row">
        <span class="deal-badge deal-${r.dealType}">${dealLabel}</span>
        <span class="card-arr">$${(r.arr || 0).toLocaleString()}</span>
        <span class="card-ae">${r.ae || '—'}</span>
        <span class="card-date">${formatDate(r.submittedDate)}</span>
        ${noteCount > 0 ? `<span class="card-note-count" title="${noteCount} note(s)">💬 ${noteCount}</span>` : ''}
      </div>

      ${r.helpNeeded ? `<p class="card-ask">${truncate(r.helpNeeded, 120)}</p>` : ''}

      ${dealDelta !== null ? `
        <div class="card-deal-delta ${dealDelta >= 0 ? 'delta-positive' : 'delta-negative'}">
          ${dealDelta >= 0 ? '↑' : '↓'} $${Math.abs(dealDelta).toLocaleString()} (${dealDeltaPct > 0 ? '+' : ''}${dealDeltaPct}%) vs. projected
        </div>
      ` : ''}

      ${r.triage && r.triage.flags && r.triage.flags.length > 0 ? `
        <div class="card-flags">
          ${r.triage.flags.slice(0, 3).map(f => `<span class="flag flag-${f.type}">${f.text}</span>`).join('')}
          ${r.triage.flags.length > 3 ? `<span class="flag-more">+${r.triage.flags.length - 3} more</span>` : ''}
        </div>
      ` : ''}

      <div class="card-bottom-row">
        <div class="card-controls">
          <select class="vc-assign-select" data-id="${r.id}">
            <option value="">Assign VC...</option>
            ${VC_TEAM.map(vc => `<option value="${vc.name}" ${r.assignedVc === vc.name ? 'selected' : ''}>${vc.name}</option>`).join('')}
          </select>
          <select class="status-select" data-id="${r.id}" style="--status-color: ${STATUS_CONFIG[r.status].color}">
            ${STATUS_ORDER.map(s => `<option value="${s}" ${s === r.status ? 'selected' : ''}>${STATUS_CONFIG[s].label}</option>`).join('')}
          </select>
          ${r.status === 'completed' ? `
            <select class="outcome-select" data-id="${r.id}">
              <option value="">Outcome...</option>
              ${Object.entries(OUTCOME_CONFIG).filter(([k]) => k !== 'pending').map(([k, v]) => `<option value="${k}" ${r.outcome === k ? 'selected' : ''}>${v.icon} ${v.label}</option>`).join('')}
            </select>
          ` : ''}
        </div>
        <div class="btn-with-info">
          <button class="btn-view" data-request-id="${r.id}">Intake Brief</button>
          <span class="info-tooltip" tabindex="0">
            <span class="info-icon">i</span>
            <span class="info-tooltip-text">The auto-generated intake summary created when the AE submitted their request — includes deal context, triage verdict, and recommended next steps.</span>
          </span>
        </div>
        <div class="btn-with-info">
          <button class="btn-dossier" data-account="${r.customerName}">Account Dossier</button>
          <span class="info-tooltip" tabindex="0">
            <span class="info-icon">i</span>
            <span class="info-tooltip-text">Full account intelligence report — company research, stakeholder map, product usage, value story, competitive landscape, and strategic talk track. Pulled from Salesforce, Slack, Granola, and web sources.</span>
          </span>
        </div>
      </div>
    </div>
    `;
  }).join('');

  // Event handlers
  container.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); viewRequest(btn.dataset.requestId); });
  });
  container.querySelectorAll('.btn-dossier').forEach(btn => {
    btn.addEventListener('click', e => { e.preventDefault(); e.stopPropagation(); viewDossier(btn.dataset.account); });
  });
  container.querySelectorAll('.vc-assign-select').forEach(sel => {
    sel.addEventListener('change', async function () {
      const req = requests.find(r => r.id === this.dataset.id);
      if (req) {
        const oldVc = req.assignedVc;
        req.assignedVc = this.value || null;
        saveRequests();
        showToast(`${req.customerName} assigned to ${this.value || 'Unassigned'}`);
        // Notify the newly assigned VC
        if (this.value && this.value !== oldVc) {
          await notifyVcOnAssignment(req, this.value);
          showToast(`Slack notification sent to ${this.value}`);
        }
      }
    });
  });
  container.querySelectorAll('.status-select').forEach(sel => {
    sel.addEventListener('change', async function () {
      const req = requests.find(r => r.id === this.dataset.id);
      if (req) {
        const oldStatus = req.status;
        req.status = this.value;
        this.style.setProperty('--status-color', STATUS_CONFIG[this.value].color);
        saveRequests();
        showToast(`${req.customerName} → ${STATUS_CONFIG[this.value].label}`);
        // Notify AE on status change via Slack
        if (oldStatus !== this.value && req.ae) {
          await notifyAeOnStatusChange(req, oldStatus, this.value);
          showToast(`Slack notification sent to ${req.ae}`);
        }
        // Re-render to show/hide outcome select when completed
        if (this.value === 'completed' || oldStatus === 'completed') {
          renderTracker();
        }
      }
    });
  });
  container.querySelectorAll('.outcome-select').forEach(sel => {
    sel.addEventListener('change', async function () {
      const req = requests.find(r => r.id === this.dataset.id);
      if (req) {
        req.outcome = this.value || null;
        // Pull closed ARR from SFDC when outcome is set
        if (this.value && this.value !== 'lost') {
          const sfdcOutcome = await checkSfdcOutcome(req);
          if (sfdcOutcome.closed) {
            req.closedArr = sfdcOutcome.closedArr;
            req.closeDate = sfdcOutcome.closeDate;
          }
        }
        if (this.value === 'lost') {
          req.closedArr = 0;
        }
        saveRequests();
        const outcomeLabel = OUTCOME_CONFIG[this.value]?.label || 'None';
        showToast(`${req.customerName} outcome: ${outcomeLabel}${req.closedArr ? ' — $' + req.closedArr.toLocaleString() + ' ARR' : ''}`);
        renderTracker();
      }
    });
  });
}

// Filter pills
document.querySelectorAll('.pill').forEach(pill => {
  pill.addEventListener('click', function () {
    document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
    this.classList.add('active');
    renderTracker();
  });
});
document.getElementById('tracker-search').addEventListener('input', renderTracker);
document.getElementById('vc-filter').addEventListener('change', renderTracker);

// ============================================================
// Detail Modal (Full Brief View)
// ============================================================

function viewRequest(id) {
  const r = requests.find(req => req.id === id);
  if (!r) return;

  const modal = document.getElementById('detail-modal');
  const body = document.getElementById('modal-body');
  const triageInfo = r.triage ? TRIAGE_CONFIG[r.triage.verdict] || {} : {};
  const dealLabel = r.dealType === 'land' ? 'New Logo (Land)' : capitalize(r.dealType);

  body.innerHTML = `
    <!-- Header -->
    <div class="brief-header" style="background: ${triageInfo.bg || '#f8fafc'}; border-color: ${triageInfo.border || '#e2e8f0'}">
      <div class="brief-title-row">
        <div>
          <div class="brief-label">VC INTAKE BRIEF</div>
          <h2 class="brief-account">${r.customerName}</h2>
          <div class="brief-subtitle">${r.oppName || `${dealLabel} | ${r.ae}`}  |  $${(r.arr || 0).toLocaleString()} ARR</div>
        </div>
        <div class="brief-header-actions">
          <span class="status-badge" style="background: ${STATUS_CONFIG[r.status]?.color || '#94a3b8'}">${STATUS_CONFIG[r.status]?.label || r.status}</span>
          <div class="export-buttons no-print">
            <button class="btn-export" id="export-pdf-${r.id}" title="Download as PDF">📄 PDF</button>
            <button class="btn-export" id="export-clipboard-${r.id}" title="Copy to clipboard (paste into Google Docs)">📋 Copy</button>
          </div>
        </div>
      </div>
      <div class="brief-meta">
        <span>${r.id}</span>
        <span>Submitted ${formatDate(r.submittedDate)}</span>
        <span>Assigned: ${r.assignedVc || 'Unassigned'}</span>
      </div>
    </div>

    <!-- Triage Verdict -->
    ${r.triage ? `
    <div class="brief-section">
      <div class="triage-box" style="background:${triageInfo.bg}; border-color:${triageInfo.border}">
        <div class="triage-verdict" style="color:${triageInfo.color}">
          ${triageInfo.icon} TRIAGE VERDICT: ${triageInfo.label?.toUpperCase()}
        </div>
        <p class="triage-rationale">${r.triage.rationale}</p>
        ${r.triage.timeEstimate ? (() => {
          const te = TIME_ESTIMATE_CONFIG[r.triage.timeEstimate] || {};
          return `<div class="triage-time-detail">
            <div class="time-est-header">
              <span>VC Time Estimate:</span>
              <span class="time-est-badge" style="background:${te.bg || '#f8fafc'}; color:${te.color || '#64748b'}">${te.label || r.triage.timeEstimate} (${te.hours || '?'})</span>
            </div>
            ${te.desc ? `<p class="time-est-desc">${te.desc}</p>` : ''}
          </div>`;
        })() : ''}
      </div>

      ${r.triage.flags && r.triage.flags.length > 0 ? `
        <h3 class="brief-h3">Flags</h3>
        <div class="flags-list">
          ${r.triage.flags.map(f => `
            <div class="flag-item flag-${f.type}">
              <span class="flag-icon">${f.type === 'critical' ? '🔴' : '🟡'}</span>
              <span>${f.text}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
    ` : ''}

    <!-- Deal Snapshot -->
    <div class="brief-section">
      <h3 class="brief-h3">Deal Snapshot</h3>
      <div class="brief-grid">
        <div class="brief-dl">
          <dt>Account</dt><dd>${r.customerName}</dd>
          <dt>AE</dt><dd>${r.ae || '—'} ${r.region ? '| ' + r.region : ''}</dd>
          <dt>SE</dt><dd>${r.se || '—'}</dd>
          <dt>Deal Type</dt><dd>${dealLabel}</dd>
          <dt>ARR in Scope</dt><dd>$${(r.arr || 0).toLocaleString()}</dd>
          <dt>Deal Stage</dt><dd>${r.dealStage || '—'}</dd>
          <dt>Expected Close</dt><dd>${formatDate(r.expectedClose)}</dd>
          ${r.healthScore ? `<dt>Health Score</dt><dd>${r.healthScore} / 100</dd>` : ''}
          <dt>Assigned VC</dt><dd>${r.assignedVc || 'Unassigned'}</dd>
          ${r.sfdcLink ? `<dt>SF Opportunity</dt><dd><a href="${r.sfdcLink}" target="_blank">Open in Salesforce</a></dd>` : ''}
        </div>
        ${r.industry || r.champion ? `
        <div class="brief-dl">
          ${r.industry ? `<dt>Industry</dt><dd>${r.industry}</dd>` : ''}
          ${r.champion ? `<dt>Champion</dt><dd>${r.champion}${r.championRole ? ' — ' + r.championRole : ''}</dd>` : ''}
          ${r.contacts && r.contacts.length > 0 ? `<dt>Contacts</dt><dd>${r.contacts.join(', ')}</dd>` : ''}
          ${r.customerSince ? `<dt>Customer Since</dt><dd>${formatDate(r.customerSince)}</dd>` : ''}
          ${r.renewalDate ? `<dt>Renewal Date</dt><dd>${formatDate(r.renewalDate)}</dd>` : ''}
          ${r.renewalArr ? `<dt>Renewal ARR</dt><dd>$${parseInt(r.renewalArr).toLocaleString()}</dd>` : ''}
        </div>
        ` : ''}
      </div>
    </div>

    <!-- Competitive Landscape -->
    ${r.competitiveLandscape ? `
    <div class="brief-section">
      <h3 class="brief-h3">Competitive Landscape</h3>
      <p class="brief-body comp-summary">${r.competitiveLandscape.summary}</p>

      ${r.competitiveLandscape.deployed && r.competitiveLandscape.deployed.length > 0 ? `
        <h4 class="brief-h4">Currently Deployed</h4>
        <div class="comp-deployed-grid">
          ${r.competitiveLandscape.deployed.map(c => {
            const m = MATURITY_LABELS[c.maturity] || MATURITY_LABELS['emerging'];
            return `
            <div class="comp-card">
              <div class="comp-card-header">
                <strong class="comp-name">${c.name}</strong>
                <span class="comp-maturity-badge" style="background:${m.bg}; color:${m.color}">${m.icon} ${m.label}</span>
              </div>
              <div class="comp-product">${c.product}</div>
              ${c.since ? `<div class="comp-since">Deployed since ${c.since}</div>` : ''}
              ${c.notes ? `<div class="comp-notes">${c.notes}</div>` : ''}
              ${c.maturity === 'deeply-embedded' ? '<div class="comp-warning">⚠️ High switching cost — deeply embedded in workflows</div>' : ''}
            </div>`;
          }).join('')}
        </div>
      ` : ''}

      ${r.competitiveLandscape.rfpCompetitors && r.competitiveLandscape.rfpCompetitors.length > 0 ? `
        <h4 class="brief-h4">Active RFP / Competitive Evaluation</h4>
        <div class="comp-rfp-list">
          ${r.competitiveLandscape.rfpCompetitors.map(c => {
            const threatColors = { high: '#dc2626', medium: '#d97706', low: '#16a34a' };
            const threatBg = { high: '#fef2f2', medium: '#fffbeb', low: '#f0fdf4' };
            return `
            <div class="comp-rfp-item">
              <span class="comp-rfp-name">${c.name}</span>
              <span class="comp-threat-badge" style="background:${threatBg[c.threat] || '#f8fafc'}; color:${threatColors[c.threat] || '#64748b'}">
                ${c.threat?.toUpperCase()} THREAT
              </span>
              ${c.notes ? `<span class="comp-rfp-notes">${c.notes}</span>` : ''}
            </div>`;
          }).join('')}
        </div>
      ` : '<p class="brief-meta-text" style="margin-top:8px">No active RFP or competitive evaluation identified.</p>'}
    </div>
    ` : ''}

    <!-- AE's Ask -->
    <div class="brief-section">
      <h3 class="brief-h3">AE's Ask</h3>
      <p class="brief-body">${r.helpNeeded}</p>
      ${r.neededBy ? `<p class="brief-meta-text">Deadline: ${formatDate(r.neededBy)}</p>` : ''}
      ${r.additionalContext ? `<p class="brief-meta-text">Additional context: ${r.additionalContext}</p>` : ''}
      ${r.justifications && r.justifications.length > 0 ? `
        <div class="tag-list" style="margin-top:8px">
          ${r.justifications.map(j => `<span class="tag">${JUSTIFICATION_LABELS[j] || j}</span>`).join('')}
        </div>
      ` : ''}
    </div>

    <!-- Use Cases -->
    ${r.useCases && r.useCases.length > 0 ? `
    <div class="brief-section">
      <h3 class="brief-h3">Use Cases</h3>
      ${r.useCases.map(uc => `
        <div class="uc-block">
          <h4 class="uc-title">USE CASE #${uc.num}: ${uc.title}</h4>
          <div class="uc-field"><strong>Problem Statement:</strong> ${uc.problem}</div>
          ${uc.impacts ? `
            <div class="uc-field"><strong>Business Impact:</strong></div>
            <ul class="uc-list">
              <li>Overall: ${uc.impacts.business || '—'}</li>
              <li>End User: ${uc.impacts.endUser || '—'}</li>
              <li>Internal: ${uc.impacts.internal || '—'}</li>
            </ul>
          ` : ''}
          ${uc.solution ? `<div class="uc-field"><strong>Proposed Solution:</strong> ${uc.solution}</div>` : ''}
          ${uc.valueHypothesis ? `<div class="uc-field"><strong>Value Hypothesis:</strong> ${uc.valueHypothesis}</div>` : ''}
          ${uc.stakeholders ? `<div class="uc-field"><strong>Key Stakeholders:</strong> ${uc.stakeholders}</div>` : ''}
          <div class="uc-evidence">
            <strong>Evidence:</strong>
            ${uc.evidenceLinks && uc.evidenceLinks.length > 0
              ? uc.evidenceLinks.map(el => el.url
                ? `<a href="${el.url}" target="_blank" class="evidence-link">${el.source} (${el.date})</a>`
                : `<span class="evidence-link-plain">${el.source} (${el.date})</span>`
              ).join('<span class="ev-sep">;</span> ')
              : (uc.evidence || 'None')}
            <span class="ev-confidence">— Confidence: ${uc.confidence || 'Unverified'}</span>
          </div>
          ${uc.successStories && uc.successStories.length > 0 ? `
          <div class="uc-stories">
            <strong>Related Success Stories:</strong>
            <div class="stories-list">
              ${uc.successStories.map(s => `
                <div class="story-card">
                  <div class="story-header">
                    ${s.url ? `<a href="${s.url}" target="_blank" class="story-title">${s.title}</a>` : `<span class="story-title">${s.title}</span>`}
                    <div class="story-tags">
                      <span class="story-tag story-tag-industry">${s.industry}</span>
                      ${s.isPublic ? '<span class="story-tag story-tag-public">Public</span>' : '<span class="story-tag story-tag-internal">Internal</span>'}
                      ${s.relevanceScore >= 5 ? '<span class="story-tag story-tag-match">Industry + Use Case Match</span>' : ''}
                    </div>
                  </div>
                  <div class="story-summary">${s.summary}</div>
                  ${s.metrics && s.metrics.length > 0 ? `
                    <div class="story-metrics">
                      ${s.metrics.map(m => `<span class="story-metric">${m}</span>`).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </div>
          ` : ''}
          <div class="uc-feedback-row">
            <button class="btn-feedback" data-uc="${uc.num}" data-request="${r.id}" title="Flag inaccurate data">⚑ Flag data issue</button>
          </div>
        </div>
      `).join('')}
    </div>
    ` : `
    <div class="brief-section">
      <h3 class="brief-h3">Use Cases</h3>
      <p class="brief-empty">No use cases could be auto-drafted. Discovery signals were insufficient — AE should complete discovery before VC engagement can be scoped.</p>
    </div>
    `}

    <!-- Evidence Log -->
    ${r.evidenceLog ? `
    <div class="brief-section">
      <h3 class="brief-h3">Evidence Log</h3>
      <table class="evidence-table">
        <thead>
          <tr><th>Source</th><th>Status</th><th>Detail</th><th>Links</th></tr>
        </thead>
        <tbody>
          ${r.evidenceLog.map(e => `
            <tr>
              <td class="ev-source">${e.source}</td>
              <td class="ev-status ev-${e.status}">${e.statusLabel}</td>
              <td>${e.detail}</td>
              <td class="ev-links">${e.links && e.links.length > 0
                ? e.links.map(l => `<a href="${l.url}" target="_blank" class="ev-link">${l.label}</a>`).join(' ')
                : '<span class="ev-no-link">—</span>'}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    ` : ''}

    <!-- Outcome & Deal Delta -->
    ${r.outcome || r.status === 'completed' ? `
    <div class="brief-section">
      <h3 class="brief-h3">Outcome</h3>
      ${r.outcome ? `
        <div class="outcome-box" style="background:${OUTCOME_CONFIG[r.outcome].bg}; border-color:${OUTCOME_CONFIG[r.outcome].color}">
          <span class="outcome-icon">${OUTCOME_CONFIG[r.outcome].icon}</span>
          <div class="outcome-details">
            <strong style="color:${OUTCOME_CONFIG[r.outcome].color}">${OUTCOME_CONFIG[r.outcome].label}</strong>
            ${r.closedArr ? `<span class="outcome-arr">Closed ARR: $${r.closedArr.toLocaleString()}</span>` : ''}
            ${r.closeDate ? `<span class="outcome-date">Close Date: ${formatDate(r.closeDate)}</span>` : ''}
          </div>
        </div>
        ${r.closedArr && r.projectedArr ? (() => {
          const delta = r.closedArr - r.projectedArr;
          const pct = ((delta / r.projectedArr) * 100).toFixed(1);
          return `
          <div class="deal-delta-box ${delta >= 0 ? 'delta-positive' : 'delta-negative'}">
            <div class="delta-header">${delta >= 0 ? '↑' : '↓'} Deal Delta: $${Math.abs(delta).toLocaleString()} (${pct > 0 ? '+' : ''}${pct}%)</div>
            <div class="delta-detail">
              <span>Projected ARR: $${r.projectedArr.toLocaleString()}</span>
              <span>Closed ARR: $${r.closedArr.toLocaleString()}</span>
            </div>
            ${delta > 0 ? `<p class="delta-note">VC-supported deal closed $${delta.toLocaleString()} above projected opportunity value.</p>` : ''}
          </div>`;
        })() : ''}
      ` : `<p class="brief-empty">Pending — set outcome when deal closes.</p>`}
    </div>
    ` : ''}

    <!-- Scope Check -->
    ${r.triage?.scopeCheck ? `
    <div class="brief-section">
      <h3 class="brief-h3">Scope Assessment</h3>
      <div class="scope-grid">
        <div class="scope-col scope-in">
          <h4>✅ In Scope (VC)</h4>
          <ul>${SCOPE_IN.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
        <div class="scope-col scope-out">
          <h4>❌ Out of Scope</h4>
          <ul>${SCOPE_OUT.map(s => `<li>${s}</li>`).join('')}</ul>
        </div>
      </div>
      ${r.triage.scopeCheck.matched?.length > 0 ? `<p class="brief-meta-text">Matched signals: ${r.triage.scopeCheck.matched.join(', ')}</p>` : ''}
    </div>
    ` : ''}

    <!-- Data Feedback -->
    ${r.feedback && r.feedback.length > 0 ? `
    <div class="brief-section">
      <h3 class="brief-h3">Data Feedback</h3>
      <div class="feedback-list">
        ${r.feedback.map(fb => `
          <div class="feedback-item">
            <div class="feedback-header">
              <span class="feedback-badge">⚑ ${fb.target}</span>
              <span class="feedback-time">${formatDateTime(fb.timestamp)}</span>
            </div>
            <p class="feedback-text">${fb.text}</p>
            <p class="feedback-author">— ${fb.author}</p>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <!-- Inline feedback form (hidden by default, shown when Flag button clicked) -->
    <div id="feedback-form-${r.id}" class="feedback-form hidden">
      <div class="feedback-form-inner">
        <h4>Flag Data Issue</h4>
        <p class="feedback-form-target" id="feedback-target-label-${r.id}"></p>
        <textarea id="feedback-text-${r.id}" class="note-input" rows="3" placeholder="Describe what's wrong — e.g., 'This call never happened' or 'The stakeholder name is incorrect. It should be...'"></textarea>
        <div class="feedback-form-actions">
          <button class="btn btn-primary btn-sm" id="feedback-submit-${r.id}">Submit Feedback</button>
          <button class="btn btn-ghost btn-sm" id="feedback-cancel-${r.id}">Cancel</button>
        </div>
      </div>
    </div>

    <!-- Notes -->
    <div class="brief-section">
      <h3 class="brief-h3">Notes & Activity</h3>
      <div class="notes-input-row">
        <div class="mention-wrapper" style="flex:1;position:relative">
          <textarea id="note-input-${r.id}" class="note-input" rows="2" placeholder="Add a note... Use @ to mention someone"></textarea>
          <div id="mention-dropdown-${r.id}" class="mention-dropdown hidden"></div>
        </div>
        <button class="btn btn-primary btn-add-note" data-id="${r.id}">Add Note</button>
      </div>
      <div class="notes-list" id="notes-list-${r.id}">
        ${(r.notes || []).slice().reverse().map(n => `
          <div class="note-item">
            <div class="note-header">
              <strong>${n.author}</strong>
              <span class="note-time">${formatDateTime(n.timestamp)}</span>
            </div>
            <p class="note-text">${renderMentions(n.text)}</p>
            ${n.mentions && n.mentions.length > 0 ? `<div class="note-mentions">Notified: ${n.mentions.map(m => `<span class="mention-tag">@${m}</span>`).join(' ')}</div>` : ''}
          </div>
        `).join('')}
        ${(!r.notes || r.notes.length === 0) ? '<p class="brief-empty">No notes yet.</p>' : ''}
      </div>
    </div>

    <!-- Notification Log -->
    ${r.notifications && r.notifications.length > 0 ? `
    <div class="brief-section">
      <h3 class="brief-h3">Notification History</h3>
      <div class="notification-log">
        ${r.notifications.slice().reverse().map(n => `
          <div class="notif-item">
            <span class="notif-icon">📨</span>
            <div class="notif-detail">
              <span class="notif-channel">${n.channel}</span>
              <span class="notif-time">${formatDateTime(n.timestamp)}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}
  `;

  // Wire up "Add Note" button with @mention support
  const noteBtn = body.querySelector(`.btn-add-note[data-id="${r.id}"]`);
  if (noteBtn) {
    noteBtn.addEventListener('click', () => {
      const input = document.getElementById(`note-input-${r.id}`);
      const text = input.value.trim();
      if (!text) return;
      if (!r.notes) r.notes = [];

      // Extract @mentions
      const mentionRegex = /@([\w\s']+?)(?=\s@|\s*$|[,;.!?])/g;
      const mentions = [];
      let match;
      while ((match = mentionRegex.exec(text)) !== null) {
        const name = match[1].trim();
        if (GTM_TEAM.some(p => p.name === name)) mentions.push(name);
      }

      r.notes.push({
        author: r.assignedVc || 'VC Team',
        text,
        mentions: mentions.length > 0 ? mentions : undefined,
        timestamp: new Date().toISOString()
      });

      // Simulate notifications for mentioned people
      mentions.forEach(name => {
        if (!r.notifications) r.notifications = [];
        r.notifications.push({
          type: 'mention',
          to: name,
          channel: `DM to ${name}`,
          message: `You were mentioned in a note on ${r.customerName} (${r.id})`,
          timestamp: new Date().toISOString(),
          status: 'sent'
        });
        console.log(`[Slack] @mention notification sent to ${name}`);
      });

      saveRequests();
      input.value = '';
      viewRequest(r.id);
      showToast(mentions.length > 0 ? `Note added — notified ${mentions.join(', ')}` : 'Note added');
    });
  }

  // Wire up @mention autocomplete on notes textarea
  setupMentionAutocomplete(r.id);

  // Wire up "Flag data issue" buttons
  body.querySelectorAll('.btn-feedback').forEach(btn => {
    btn.addEventListener('click', () => {
      const ucNum = btn.dataset.uc;
      const form = document.getElementById(`feedback-form-${r.id}`);
      const label = document.getElementById(`feedback-target-label-${r.id}`);
      label.textContent = `Flagging: Use Case #${ucNum}`;
      form.dataset.target = `Use Case #${ucNum}`;
      form.classList.remove('hidden');
      document.getElementById(`feedback-text-${r.id}`).focus();
    });
  });

  // Wire up feedback submit/cancel
  const feedbackSubmit = document.getElementById(`feedback-submit-${r.id}`);
  const feedbackCancel = document.getElementById(`feedback-cancel-${r.id}`);
  if (feedbackSubmit) {
    feedbackSubmit.addEventListener('click', () => {
      const form = document.getElementById(`feedback-form-${r.id}`);
      const text = document.getElementById(`feedback-text-${r.id}`).value.trim();
      if (!text) return;
      if (!r.feedback) r.feedback = [];
      r.feedback.push({
        target: form.dataset.target,
        text,
        author: r.assignedVc || 'VC Team',
        timestamp: new Date().toISOString()
      });
      saveRequests();
      viewRequest(r.id);
      showToast('Feedback submitted — this will improve future briefs');
    });
  }
  if (feedbackCancel) {
    feedbackCancel.addEventListener('click', () => {
      document.getElementById(`feedback-form-${r.id}`).classList.add('hidden');
    });
  }

  // Wire up export buttons
  const exportPdfBtn = document.getElementById(`export-pdf-${r.id}`);
  if (exportPdfBtn) {
    exportPdfBtn.addEventListener('click', () => exportBriefAsPdf(r));
  }
  const exportClipboardBtn = document.getElementById(`export-clipboard-${r.id}`);
  if (exportClipboardBtn) {
    exportClipboardBtn.addEventListener('click', () => exportBriefToClipboard(r, exportClipboardBtn));
  }

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('detail-modal').classList.add('hidden');
  document.getElementById('processing-modal').classList.add('hidden');
  document.body.style.overflow = '';
}

document.querySelectorAll('.modal-backdrop').forEach(el => el.addEventListener('click', closeModal));
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ============================================================
// Brief Export
// ============================================================

function exportBriefAsPdf(r) {
  // Clone the brief content (excluding buttons, forms, etc.)
  const modalBody = document.getElementById('modal-body');
  const clone = modalBody.cloneNode(true);

  // Remove interactive elements from clone
  clone.querySelectorAll('.no-print, .btn-feedback, .feedback-form, .notes-input-row, .export-buttons, .mention-dropdown').forEach(el => el.remove());

  // Build a standalone HTML document for printing
  const printWindow = window.open('', '_blank');
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>VC Brief — ${r.customerName} (${r.id})</title>
      <link rel="stylesheet" href="styles.css?v=7">
      <style>
        body { background: #fff; padding: 32px; max-width: 900px; margin: 0 auto; }
        .modal-close { display: none; }
        .brief-header { page-break-after: avoid; }
        .brief-section { page-break-inside: avoid; }
        .uc-block { page-break-inside: avoid; }
        .evidence-table { font-size: 11px; }
        .evidence-link { background: none; padding: 0; color: #2563eb; text-decoration: underline; }
        .ev-link { background: none; padding: 0; color: #2563eb; text-decoration: underline; font-size: 11px; }
        .flag, .flag-item { page-break-inside: avoid; }
        .btn-export, .btn-feedback, .btn-add-note, .feedback-form, .notes-input-row, .mention-dropdown { display: none !important; }
        @media print {
          body { padding: 0; }
          a { color: #2563eb; }
          .triage-box, .outcome-box, .deal-delta-box, .flag-item, .uc-block, .scope-col {
            -webkit-print-color-adjust: exact; print-color-adjust: exact;
          }
        }
        .print-footer {
          margin-top: 32px;
          padding-top: 16px;
          border-top: 1px solid #e2e8f0;
          font-size: 11px;
          color: #94a3b8;
          text-align: center;
        }
      </style>
    </head>
    <body>
      ${clone.innerHTML}
      <div class="print-footer">
        Generated by Amplitude Value Consulting Intake Tool · ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
      </div>
    </body>
    </html>
  `);
  printWindow.document.close();

  // Wait for styles to load, then trigger print
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print();
    }, 300);
  };

  showToast('Print dialog opened — select "Save as PDF" to download');
}

function exportBriefToClipboard(r, btn) {
  const modalBody = document.getElementById('modal-body');
  const clone = modalBody.cloneNode(true);

  // Remove interactive elements
  clone.querySelectorAll('.no-print, .btn-feedback, .feedback-form, .notes-input-row, .export-buttons, .mention-dropdown').forEach(el => el.remove());

  // Copy as rich HTML (for Google Docs) + plain text fallback
  const html = clone.innerHTML;
  const text = clone.innerText;

  // Use Clipboard API with both formats
  const htmlBlob = new Blob([html], { type: 'text/html' });
  const textBlob = new Blob([text], { type: 'text/plain' });

  navigator.clipboard.write([
    new ClipboardItem({
      'text/html': htmlBlob,
      'text/plain': textBlob
    })
  ]).then(() => {
    btn.textContent = '✓ Copied!';
    setTimeout(() => { btn.textContent = '📋 Copy'; }, 2000);
    showToast('Brief copied — paste into Google Docs, Notion, or any rich text editor');
  }).catch(() => {
    // Fallback: copy plain text
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '✓ Copied!';
      setTimeout(() => { btn.textContent = '📋 Copy'; }, 2000);
      showToast('Brief copied as text — paste into any document');
    });
  });
}

// ============================================================
// Dossier View
// ============================================================

const CONFIDENCE_CONFIG = {
  HIGH: { icon: '🟢', label: 'HIGH CONFIDENCE', color: '#16a34a', bg: '#f0fdf4' },
  MEDIUM: { icon: '🟡', label: 'MEDIUM', color: '#d97706', bg: '#fffbeb' },
  LOW: { icon: '🟠', label: 'LOW', color: '#ea580c', bg: '#fff7ed' },
  UNCONFIRMED: { icon: '🔴', label: 'UNCONFIRMED', color: '#dc2626', bg: '#fef2f2' }
};

function confidenceTag(confidence, source, sourceUrl) {
  const c = CONFIDENCE_CONFIG[confidence?.toUpperCase()] || CONFIDENCE_CONFIG[confidence] || CONFIDENCE_CONFIG.MEDIUM;
  const sourceHtml = sourceUrl
    ? `<a href="${sourceUrl}" target="_blank" class="conf-source-link">[${source}]</a>`
    : `<span class="conf-source">[${source}]</span>`;
  return `<span class="conf-tag" style="color:${c.color}; background:${c.bg}">${c.icon} ${c.label}</span>${source ? sourceHtml : ''}`;
}

function renderAdoptionChart(adoption) {
  if (!adoption || !adoption.wauTrend || adoption.wauTrend.length === 0) return '';
  const data = adoption.wauTrend;
  const max = Math.max(...data.map(d => d.value));
  const min = Math.min(...data.map(d => d.value));
  const range = max - min || 1;
  const trendColor = adoption.trendDirection === 'growing' ? '#16a34a' : adoption.trendDirection === 'declining' ? '#dc2626' : '#6b7280';

  // Build SVG sparkline
  const width = 600;
  const height = 160;
  const padding = 30;
  const chartW = width - padding * 2;
  const chartH = height - padding * 2;
  const points = data.map((d, i) => {
    const x = padding + (i / (data.length - 1)) * chartW;
    const y = padding + chartH - ((d.value - min) / range) * chartH;
    return `${x},${y}`;
  });

  // Annotation markers
  const annotations = (adoption.annotations || []).map(a => {
    const idx = data.findIndex(d => d.week === a.week);
    if (idx < 0) return '';
    const x = padding + (idx / (data.length - 1)) * chartW;
    const y = padding + chartH - ((data[idx].value - min) / range) * chartH;
    return `<circle cx="${x}" cy="${y}" r="4" fill="${trendColor}" stroke="#fff" stroke-width="2"/>
            <text x="${x}" y="${y - 12}" text-anchor="middle" font-size="9" fill="${trendColor}" font-weight="600">${a.label}</text>`;
  }).join('');

  return `
    <div class="dossier-chart">
      <svg viewBox="0 0 ${width} ${height}" class="adoption-svg">
        <polyline points="${points.join(' ')}" fill="none" stroke="${trendColor}" stroke-width="2.5" stroke-linejoin="round"/>
        ${annotations}
        <text x="${padding}" y="${height - 4}" font-size="10" fill="#94a3b8">${data[0].week}</text>
        <text x="${width - padding}" y="${height - 4}" font-size="10" fill="#94a3b8" text-anchor="end">${data[data.length - 1].week}</text>
        <text x="${padding - 4}" y="${padding + 4}" font-size="10" fill="#94a3b8" text-anchor="end">${max}</text>
        <text x="${padding - 4}" y="${padding + chartH + 4}" font-size="10" fill="#94a3b8" text-anchor="end">${min}</text>
      </svg>
      <div class="adoption-trend-summary" style="border-left: 3px solid ${trendColor}">
        <p>${adoption.trendSummary}</p>
        <span class="conf-source">${adoption.trendSource}</span>
      </div>
    </div>`;
}

function renderFeatureHeatmap(productHealth) {
  if (!productHealth || !productHealth.featureUsage) return '';
  const usageColors = { heavy: '#16a34a', moderate: '#d97706', light: '#ea580c', never: '#dc2626' };
  const usageLabels = { heavy: 'Heavy', moderate: 'Moderate', light: 'Light', never: 'Never Used' };
  return `
    <div class="feature-heatmap">
      ${productHealth.featureUsage.map(f => `
        <div class="heatmap-row">
          <span class="heatmap-feature">${f.feature}</span>
          <div class="heatmap-bar-track">
            <div class="heatmap-bar" style="width:${Math.min(100, (f.sessions / Math.max(...productHealth.featureUsage.map(x => x.sessions || 1))) * 100)}%; background:${usageColors[f.usage]}"></div>
          </div>
          <span class="heatmap-label" style="color:${usageColors[f.usage]}">${usageLabels[f.usage]}</span>
          <span class="heatmap-sessions">${f.sessions.toLocaleString()} sessions</span>
        </div>
      `).join('')}
    </div>`;
}

function viewDossier(accountName) {
  if (typeof MOCK_DOSSIERS === 'undefined' || !MOCK_DOSSIERS) {
    showToast('Dossier data not available.');
    return;
  }
  const d = MOCK_DOSSIERS[accountName];
  if (!d) {
    showToast(`No dossier found for ${accountName}. Generate one with: "dossier for ${accountName}"`);
    return;
  }

  const modal = document.getElementById('detail-modal');
  const body = document.getElementById('modal-body');
  const isCustomer = d.type === 'customer';
  const s = d.snapshot;

  // Health score badge
  const hs = d.healthScore;
  let healthBadgeHtml = '';
  if (hs && (hs.score !== undefined || hs.overall !== undefined)) {
    const score = hs.score ?? hs.overall;
    const scoreClass = score >= 70 ? 'score-good' : score >= 40 ? 'score-warning' : 'score-critical';
    const componentLabels = hs.components
      ? Object.entries(hs.components).map(([k, v]) => `<span class="hs-component">${k}: ${v}</span>`).join('')
      : '';
    healthBadgeHtml = `
      <div class="health-score-badge ${scoreClass}">
        <span class="score-number">${score}</span>
        <span class="score-label">Health</span>
      </div>
      ${componentLabels ? `<div class="hs-components">${componentLabels}</div>` : ''}`;
  }

  // Data confidence summary bar
  const confBar = d.dataConfidence ? `
    <div class="conf-summary-bar">
      <span class="conf-bar-segment" style="width:${d.dataConfidence.high}%; background:#16a34a" title="High: ${d.dataConfidence.high}%"></span>
      <span class="conf-bar-segment" style="width:${d.dataConfidence.medium}%; background:#d97706" title="Medium: ${d.dataConfidence.medium}%"></span>
      <span class="conf-bar-segment" style="width:${d.dataConfidence.low}%; background:#ea580c" title="Low: ${d.dataConfidence.low}%"></span>
      <span class="conf-bar-segment" style="width:${d.dataConfidence.unconfirmed}%; background:#dc2626" title="Unconfirmed: ${d.dataConfidence.unconfirmed}%"></span>
    </div>
    <div class="conf-summary-labels">
      <span>🟢 ${d.dataConfidence.high}% High</span>
      <span>🟡 ${d.dataConfidence.medium}% Med</span>
      <span>🟠 ${d.dataConfidence.low}% Low</span>
      <span>🔴 ${d.dataConfidence.unconfirmed}% Unconf</span>
      <span class="conf-total">${d.dataConfidence.totalDataPoints} data points</span>
    </div>
  ` : '';

  body.innerHTML = `

    <!-- 1. Header -->
    <div class="dossier-header ${isCustomer ? 'dossier-customer' : 'dossier-prospect'}">
      <div class="dossier-title-row">
        <div>
          <div class="dossier-type-label">${isCustomer ? 'CUSTOMER VALUE DOSSIER' : 'PROSPECT VALUE DOSSIER'}</div>
          <h2 class="dossier-account">${accountName}</h2>
          <div class="dossier-subtitle">
            ${s.industry} | ${s.segment} | ${s.region}
            ${s.employees ? ` | ${s.employees.toLocaleString()} employees` : ''}
            ${s.revenue ? ` | ${s.revenue} revenue` : ''}
          </div>
        </div>
        <div class="dossier-header-actions">
          <span class="dossier-type-badge ${isCustomer ? 'badge-customer' : 'badge-prospect'}">${isCustomer ? 'Customer' : 'Prospect'}</span>
          ${healthBadgeHtml}
        </div>
      </div>
      <div class="dossier-meta">
        <span>Updated: ${formatDate(d.lastUpdated)}</span>
        <span>Team: ${s.accountTeam?.ae || '—'} (AE) / ${s.accountTeam?.se || '—'} (SE) / ${s.accountTeam?.vc || '—'} (VC)</span>
        ${d.companyType ? `<span>${d.companyType === 'public' ? '📈 Public' : d.companyType === 'private-funded' ? '💰 Private (Funded)' : '🏢 Private'}</span>` : ''}
      </div>
      ${confBar}
    </div>

    <!-- 2. The Situation -->
    <div class="dossier-section">
      <h3 class="dossier-h3">The Situation</h3>

      <div class="situation-pills">
        ${s.arr ? `<span class="situation-pill">ARR: $${s.arr.toLocaleString()}</span>` : ''}
        ${s.renewalDate ? `<span class="situation-pill">Renewal: ${formatDate(s.renewalDate)}</span>` : ''}
        ${s.productsLicensed?.length > 0 ? `<span class="situation-pill">Products: ${s.productsLicensed.join(', ')}</span>` : ''}
        ${s.contractYears ? `<span class="situation-pill">Contract: ${s.contractYears} yr</span>` : ''}
        ${s.employees ? `<span class="situation-pill">${s.employees.toLocaleString()} employees</span>` : ''}
        ${s.revenue ? `<span class="situation-pill">${s.revenue} revenue</span>` : ''}
      </div>

      ${d.dealTimeline?.length > 0 ? `
        <h4 class="dossier-h4">Deal Timeline</h4>
        <div class="deal-timeline">
          ${d.dealTimeline.map(ev => `
            <div class="timeline-item type-${ev.type || 'milestone'}">
              <span class="timeline-date">${ev.date ? formatDate(ev.date) : ''}</span>
              <span class="timeline-dot"></span>
              <span class="timeline-event">${ev.event}</span>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${s.primaryUseCases?.length > 0 ? `
        <h4 class="dossier-h4">Primary Use Cases</h4>
        <div class="usecase-tags">
          ${s.primaryUseCases.map(uc => `
            <span class="usecase-tag">${uc.text} ${confidenceTag(uc.confidence, uc.source, uc.sourceUrl)}</span>
          `).join('')}
        </div>
      ` : ''}
    </div>

    <!-- 3. People & Relationships -->
    ${(s.stakeholders?.length > 0 || d.relationshipContext?.length > 0) ? `
    <div class="dossier-section">
      <h3 class="dossier-h3">People &amp; Relationships</h3>

      ${s.stakeholders?.length > 0 ? `
        <div class="stakeholder-cards">
          ${s.stakeholders.map(st => `
            <div class="stakeholder-card">
              <div class="stakeholder-name">${st.name}</div>
              <div class="stakeholder-title">${st.title}</div>
              <div class="stakeholder-role">${st.role}</div>
              ${confidenceTag(st.confidence, st.source, st.sourceUrl)}
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${d.relationshipContext?.length > 0 ? `
        <div class="rel-bullets">
          ${d.relationshipContext.map(rc => {
            const catIcons = { champion: '👤', politics: '🏛️', risk: '⚠️', competitive: '⚔️', sentiment: '💬', 'decision-process': '🔄' };
            return `
            <div class="rel-bullet rel-${rc.category}">
              <span class="rel-cat">${catIcons[rc.category] || '📌'} ${rc.category}</span>
              <span class="rel-text">${rc.insight}</span>
              ${confidenceTag(rc.confidence, rc.source, rc.sourceUrl)}
            </div>`;
          }).join('')}
        </div>
      ` : ''}
    </div>
    ` : ''}

    <!-- 4a. Adoption & Health (customers) -->
    ${isCustomer ? `
    <div class="dossier-section">
      <h3 class="dossier-h3">Adoption &amp; Health ${d.adoption ? `<span class="trend-indicator trend-${d.adoption.trendDirection}">${d.adoption.trendDirection === 'growing' ? '📈 Growing' : d.adoption.trendDirection === 'declining' ? '📉 Declining' : '📊 Stable'}</span>` : ''}</h3>

      ${d.adoption ? renderAdoptionChart(d.adoption) : ''}

      ${d.productHealth ? `
        <h4 class="dossier-h4">Feature Usage</h4>
        ${renderFeatureHeatmap(d.productHealth)}
        ${d.productHealth.dataHealth ? `
          <div class="data-health-row">
            <div class="health-metric">
              <span class="health-label">Volume Trend</span>
              <span class="health-value">${d.productHealth.dataHealth.volumeTrend}</span>
            </div>
            <div class="health-metric">
              <span class="health-label">Taxonomy Score</span>
              <span class="health-value">${d.productHealth.dataHealth.taxonomyScore}/100</span>
            </div>
          </div>
          ${d.productHealth.dataHealth.instrumentationGaps?.length > 0 ? `
            <div class="instrumentation-gaps">
              <strong>Instrumentation Gaps:</strong>
              <ul>${d.productHealth.dataHealth.instrumentationGaps.map(g => `<li>${g}</li>`).join('')}</ul>
            </div>
          ` : ''}
        ` : ''}
        ${d.productHealth.underusedFeatures?.length > 0 ? `
          <h4 class="dossier-h4">Expansion Signals (Underused Features)</h4>
          <div class="underused-list">
            ${d.productHealth.underusedFeatures.map(f => `<div class="underused-item">💡 ${f}</div>`).join('')}
          </div>
        ` : ''}
      ` : ''}

      ${d.supportSignals ? `
        <h4 class="dossier-h4">Support Signals</h4>
        <div class="support-signals">
          ${d.supportSignals.openTickets !== undefined ? `
            <div class="support-metric">
              <span class="support-value">${d.supportSignals.openTickets}</span>
              <span class="support-label">Open Tickets</span>
            </div>` : ''}
          ${d.supportSignals.lastCsat !== undefined ? `
            <div class="support-metric">
              <span class="support-value">${d.supportSignals.lastCsat}</span>
              <span class="support-label">Last CSAT</span>
            </div>` : ''}
          ${d.supportSignals.p1Incidents !== undefined ? `
            <div class="support-metric">
              <span class="support-value">${d.supportSignals.p1Incidents}</span>
              <span class="support-label">P1 Incidents (90d)</span>
            </div>` : ''}
          ${d.supportSignals.avgResponseHours !== undefined ? `
            <div class="support-metric">
              <span class="support-value">${d.supportSignals.avgResponseHours}h</span>
              <span class="support-label">Avg Response</span>
            </div>` : ''}
          ${Object.entries(d.supportSignals)
            .filter(([k]) => !['openTickets','lastCsat','p1Incidents','avgResponseHours'].includes(k))
            .map(([k, v]) => `
            <div class="support-metric">
              <span class="support-value">${v}</span>
              <span class="support-label">${k}</span>
            </div>`).join('')}
        </div>
      ` : ''}
    </div>
    ` : ''}

    <!-- 4b. Company Intelligence (prospects) -->
    ${!isCustomer && d.externalContext ? `
    <div class="dossier-section">
      <h3 class="dossier-h3">Company Intelligence</h3>

      ${d.externalContext.firmographics ? `
        <h4 class="dossier-h4">Firmographics</h4>
        <div class="dossier-dl">
          ${d.externalContext.firmographics.founded ? `<dt>Founded</dt><dd>${d.externalContext.firmographics.founded}</dd>` : ''}
          ${d.externalContext.firmographics.headquarters ? `<dt>HQ</dt><dd>${d.externalContext.firmographics.headquarters}</dd>` : ''}
          ${d.externalContext.firmographics.funding ? `<dt>Funding</dt><dd>${d.externalContext.firmographics.funding}</dd>` : ''}
          ${d.externalContext.firmographics.techStack ? `<dt>Tech Stack</dt><dd>${d.externalContext.firmographics.techStack.join(', ')}</dd>` : ''}
        </div>
      ` : ''}

      ${d.externalContext.strategicPriorities?.length > 0 ? `
        <h4 class="dossier-h4">Strategic Priorities</h4>
        <div class="usecase-tags">
          ${d.externalContext.strategicPriorities.map(sp => `
            <span class="usecase-tag">${sp.priority} ${confidenceTag(sp.confidence, sp.source, sp.sourceUrl)}</span>
          `).join('')}
        </div>
      ` : ''}

      ${d.externalContext.industryTrends ? `
        <h4 class="dossier-h4">Industry Trends</h4>
        <p class="dossier-body">${d.externalContext.industryTrends}</p>
      ` : ''}

      ${d.externalContext.recentNews?.length > 0 ? `
        <h4 class="dossier-h4">Recent News</h4>
        <div class="news-list">
          ${d.externalContext.recentNews.map(n => `
            <div class="news-item">
              <div class="news-headline">${n.url ? `<a href="${n.url}" target="_blank">${n.headline}</a>` : n.headline}</div>
              <div class="news-meta">${formatDate(n.date)} ${confidenceTag(n.confidence, n.source, n.sourceUrl)}</div>
              ${n.relevance ? `<div class="news-relevance">${n.relevance}</div>` : ''}
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
    ` : ''}

    <!-- 4c. External Context (customers — news only) -->
    ${isCustomer && d.externalContext?.recentNews?.length > 0 ? `
    <div class="dossier-section">
      <h3 class="dossier-h3">External Context</h3>
      <div class="news-list">
        ${d.externalContext.recentNews.map(n => `
          <div class="news-item">
            <div class="news-headline">${n.url ? `<a href="${n.url}" target="_blank">${n.headline}</a>` : n.headline}</div>
            <div class="news-meta">${formatDate(n.date)} ${confidenceTag(n.confidence, n.source, n.sourceUrl)}</div>
            ${n.relevance ? `<div class="news-relevance">${n.relevance}</div>` : ''}
          </div>
        `).join('')}
      </div>
    </div>
    ` : ''}

    <!-- 5. Value Story -->
    ${(isCustomer && d.valueRealized) || (!isCustomer && d.valueHypothesis) ? `
    <div class="dossier-section">
      <h3 class="dossier-h3">${isCustomer ? 'Value Story' : 'Value Hypothesis'}</h3>

      ${isCustomer && d.valueRealized ? `
        <div class="value-summary-banner">
          <span class="value-total">$${(d.valueRealized.items.reduce((sum, i) => sum + (i.dollarValue || 0), 0)).toLocaleString()}</span>
          <span class="value-label">Estimated Annual Value Realized</span>
        </div>
        <div class="value-items">
          ${d.valueRealized.items.map(v => `
            <div class="value-item">
              <div class="value-item-header">
                <h4 class="value-item-title">${v.title}</h4>
                <span class="value-dollar-inline">$${(v.dollarValue || 0).toLocaleString()}/year</span>
                ${confidenceTag(v.confidence, v.source, v.sourceUrl)}
              </div>
              <div class="value-metric">${v.metric}</div>
              <details class="value-details">
                <summary>View methodology</summary>
                <div class="value-methodology">${v.methodology}</div>
              </details>
            </div>
          `).join('')}
        </div>
      ` : ''}

      ${!isCustomer && d.valueHypothesis ? `
        <p class="dossier-body">${d.valueHypothesis.summary}</p>
        <div class="value-items">
          ${d.valueHypothesis.items.map(v => `
            <div class="value-item value-item-prospect">
              <div class="value-item-header">
                <h4 class="value-item-title">${v.title}</h4>
                <span class="value-dollar-inline">$${(v.projection || 0).toLocaleString()}/year</span>
                ${confidenceTag(v.confidence, v.source, v.sourceUrl)}
              </div>
              ${v.comparableCustomer ? `<div class="value-comparable">📊 ${v.comparableCustomer}</div>` : ''}
              <details class="value-details">
                <summary>View methodology</summary>
                <div class="value-methodology">${v.methodology}</div>
              </details>
            </div>
          `).join('')}
        </div>
      ` : ''}
    </div>
    ` : ''}

    <!-- 6. Prior VC Engagements -->
    ${d.priorVcEngagements?.length > 0 ? `
    <div class="dossier-section">
      <h3 class="dossier-h3">Prior VC Engagements</h3>
      <div class="vc-engagements">
        ${d.priorVcEngagements.map(eng => {
          const outcomeClass = eng.outcome?.toLowerCase().includes('won') ? 'outcome-won'
            : eng.outcome?.toLowerCase().includes('lost') ? 'outcome-lost'
            : 'outcome-pending';
          return `
          <div class="vc-engagement">
            <div class="vc-eng-header">
              <span class="vc-eng-date">${eng.date ? formatDate(eng.date) : ''}</span>
              <span class="vc-eng-vc">${eng.vc || ''}</span>
              ${eng.outcome ? `<span class="vc-eng-outcome ${outcomeClass}">${eng.outcome}</span>` : ''}
            </div>
            ${eng.deliverable ? `<div class="vc-eng-deliverable">${eng.deliverable}</div>` : ''}
            ${eng.result ? `<div class="vc-eng-result">${eng.result}</div>` : ''}
          </div>`;
        }).join('')}
      </div>
    </div>
    ` : ''}

    <!-- 7. Competitive Position -->
    ${d.competitiveLandscape ? `
    <div class="dossier-section">
      <h3 class="dossier-h3">Competitive Position</h3>

      ${d.competitiveLandscape.currentTools?.length > 0 ? `
        <h4 class="dossier-h4">Current Tools</h4>
        <div class="comp-deployed-grid">
          ${d.competitiveLandscape.currentTools.map(c => {
            const m = MATURITY_LABELS[c.maturity] || MATURITY_LABELS['emerging'];
            return `
            <div class="comp-card">
              <div class="comp-card-header">
                <strong class="comp-name">${c.name}</strong>
                <span class="comp-maturity-badge" style="background:${m.bg}; color:${m.color}">${m.icon} ${m.label}</span>
              </div>
              <div class="comp-product">${c.product}</div>
              ${c.since ? `<div class="comp-since">Deployed since ${c.since}</div>` : ''}
              ${c.notes ? `<div class="comp-notes">${c.notes}</div>` : ''}
              <div class="comp-conf">${confidenceTag(c.confidence, c.source, c.sourceUrl)}</div>
            </div>`;
          }).join('')}
        </div>
      ` : ''}

      ${d.competitiveLandscape.buyerIntent ? `<p class="dossier-body"><strong>Buyer Intent:</strong> ${d.competitiveLandscape.buyerIntent}</p>` : ''}

      ${d.competitiveLandscape.amplitudeDifferentiators?.length > 0 ? `
        <h4 class="dossier-h4">Amplitude Differentiators</h4>
        <ul class="dossier-list">${d.competitiveLandscape.amplitudeDifferentiators.map(diff => `<li>${diff}</li>`).join('')}</ul>
      ` : ''}

      ${d.competitiveLandscape.winLossPatterns ? `
        <h4 class="dossier-h4">Win/Loss Patterns</h4>
        <p class="dossier-body">${d.competitiveLandscape.winLossPatterns}</p>
      ` : ''}

      ${d.competitiveLandscape.analystPositioning ? `
        <h4 class="dossier-h4">Analyst Positioning</h4>
        <p class="dossier-body">${d.competitiveLandscape.analystPositioning}</p>
      ` : ''}
    </div>
    ` : ''}

    <!-- 8. Strategy & Talk Track -->
    <div class="dossier-section">
      <h3 class="dossier-h3">${isCustomer ? 'Strategy &amp; Talk Track' : 'Strategy &amp; Opportunity'}</h3>

      ${isCustomer && d.strategy?.expansionPlays ? `
        <h4 class="dossier-h4">Expansion Plays</h4>
        ${d.strategy.expansionPlays.map(ep => `
          <div class="expansion-play">
            <div class="ep-header">
              <strong>${ep.product}</strong>
              <span class="ep-value">+$${(ep.estimatedIncrementalValue || 0).toLocaleString()} incremental</span>
            </div>
            <p class="ep-rationale">${ep.rationale}</p>
            <details class="ep-details">
              <summary>View methodology</summary>
              <div class="ep-methodology">${ep.methodology}</div>
            </details>
            <div class="ep-confidence">${confidenceTag(ep.confidence, ep.source, ep.sourceUrl)}</div>
          </div>
        `).join('')}
      ` : ''}

      ${!isCustomer && d.strategy ? `
        ${d.strategy.recommendedProducts ? `<p class="dossier-body"><strong>Recommended Products:</strong> ${d.strategy.recommendedProducts.join(', ')}</p>` : ''}
        ${d.strategy.scopeRecommendation ? `<p class="dossier-body"><strong>Scope:</strong> ${d.strategy.scopeRecommendation}</p>` : ''}
        ${d.strategy.landAndExpand ? `
          <h4 class="dossier-h4">Land &amp; Expand Plan</h4>
          <p class="dossier-body">${d.strategy.landAndExpand}</p>
        ` : ''}
        ${d.strategy.multiYearRationale ? `<p class="dossier-body"><strong>Multi-Year Rationale:</strong> ${d.strategy.multiYearRationale}</p>` : ''}
      ` : ''}

      ${d.strategy?.renewalPositioning ? `
        <h4 class="dossier-h4">Renewal Positioning</h4>
        <p class="dossier-body">${d.strategy.renewalPositioning}</p>
      ` : ''}
      ${d.strategy?.pricingNotes ? `
        <h4 class="dossier-h4">Pricing Notes</h4>
        <p class="dossier-body">${d.strategy.pricingNotes}</p>
      ` : ''}

      ${d.talkTrack?.keyMessages?.length > 0 ? `
        <h4 class="dossier-h4">Key Messages</h4>
        <ol class="talk-track-list">
          ${d.talkTrack.keyMessages.map(msg => `<li class="talk-track-item">${msg}</li>`).join('')}
        </ol>
      ` : ''}

      ${d.talkTrack?.objectionHandling?.length > 0 ? `
        <h4 class="dossier-h4">Objection Handling</h4>
        ${d.talkTrack.objectionHandling.map(obj => `
          <details class="objection-details">
            <summary>${obj.objection}</summary>
            <div class="objection-response">${obj.response}</div>
          </details>
        `).join('')}
      ` : ''}

      ${d.strategy?.riskFactors?.length > 0 ? `
        <h4 class="dossier-h4">Risk Factors</h4>
        ${d.strategy.riskFactors.map(rf => {
          const sevColors = { high: '#dc2626', medium: '#d97706', low: '#6b7280' };
          return `
          <div class="risk-factor">
            <div class="risk-header">
              <span class="risk-severity" style="color:${sevColors[rf.severity] || '#6b7280'}">${rf.severity.toUpperCase()} RISK</span>
              <span>${rf.risk}</span>
            </div>
            <div class="risk-meta">${confidenceTag(rf.confidence, rf.source, rf.sourceUrl)}</div>
            ${rf.mitigation ? `<div class="risk-mitigation"><strong>Mitigation:</strong> ${rf.mitigation}</div>` : ''}
          </div>`;
        }).join('')}
      ` : ''}

      ${d.openQuestions?.length > 0 ? `
        <h4 class="dossier-h4">Open Questions</h4>
        <div class="action-items">
          ${d.openQuestions.map(q => {
            const prioClass = { high: 'priority-high', medium: 'priority-medium', low: 'priority-low' }[q.priority] || 'priority-medium';
            return `
            <div class="action-item ${prioClass}">
              <span class="action-priority">${q.priority?.toUpperCase() || '—'}</span>
              <span class="action-text">${q.question}</span>
              <span class="action-owner">Owner: ${q.owner}${q.dueDate ? ` · Due: ${formatDate(q.dueDate)}` : ''}</span>
            </div>`;
          }).join('')}
        </div>
      ` : ''}
    </div>

    <!-- 9. Data Sources -->
    ${d.dataSources?.length > 0 ? `
    <div class="dossier-section dossier-section-footer">
      <h3 class="dossier-h3">Data Sources</h3>
      <div class="ds-badges">
        ${d.dataSources.map(ds => {
          const statusIcon = ds.status === 'found' ? '✅' : ds.status === 'partial' ? '⚠️' : '❌';
          const badgeClass = ds.status === 'found' ? 'ds-found' : ds.status === 'partial' ? 'ds-partial' : 'ds-not-found';
          return `<span class="ds-badge ${badgeClass}" title="${ds.detail || ''}">${statusIcon} ${ds.source}</span>`;
        }).join('')}
      </div>
    </div>
    ` : ''}
  `;

  modal.classList.remove('hidden');
}

// ============================================================
// @Mention Helpers
// ============================================================

function renderMentions(text) {
  if (!text) return '';
  // Highlight @Name references
  return text.replace(/@([\w\s']+?)(?=\s@|\s*$|[,;.!?])/g, (match, name) => {
    const trimmed = name.trim();
    if (GTM_TEAM.some(p => p.name === trimmed)) {
      return `<span class="mention-highlight">@${trimmed}</span>`;
    }
    return match;
  });
}

function setupMentionAutocomplete(requestId) {
  const textarea = document.getElementById(`note-input-${requestId}`);
  const dropdown = document.getElementById(`mention-dropdown-${requestId}`);
  if (!textarea || !dropdown) return;

  let mentionStart = -1;

  textarea.addEventListener('input', () => {
    const val = textarea.value;
    const cursor = textarea.selectionStart;

    // Find the last @ before cursor
    const before = val.substring(0, cursor);
    const atIndex = before.lastIndexOf('@');

    if (atIndex === -1 || (atIndex > 0 && before[atIndex - 1] !== ' ' && before[atIndex - 1] !== '\n')) {
      dropdown.classList.add('hidden');
      mentionStart = -1;
      return;
    }

    const query = before.substring(atIndex + 1).toLowerCase();
    if (query.includes(' ') && query.split(' ').length > 3) {
      dropdown.classList.add('hidden');
      return;
    }

    mentionStart = atIndex;
    const matches = GTM_TEAM.filter(p =>
      p.name.toLowerCase().includes(query) || p.role.toLowerCase().includes(query) || p.team.toLowerCase().includes(query)
    ).slice(0, 8);

    if (matches.length === 0) {
      dropdown.classList.add('hidden');
      return;
    }

    dropdown.innerHTML = matches.map(p => `
      <div class="mention-item" data-name="${p.name}">
        <strong>${p.name}</strong>
        <span class="mention-meta">${p.role} · ${p.team}</span>
      </div>
    `).join('');
    dropdown.classList.remove('hidden');

    // Wire up click handlers
    dropdown.querySelectorAll('.mention-item').forEach(item => {
      item.addEventListener('mousedown', (e) => {
        e.preventDefault();
        const name = item.dataset.name;
        const before = textarea.value.substring(0, mentionStart);
        const after = textarea.value.substring(cursor);
        textarea.value = before + '@' + name + ' ' + after;
        textarea.focus();
        textarea.selectionStart = textarea.selectionEnd = mentionStart + name.length + 2;
        dropdown.classList.add('hidden');
      });
    });
  });

  textarea.addEventListener('blur', () => {
    setTimeout(() => dropdown.classList.add('hidden'), 200);
  });

  textarea.addEventListener('keydown', (e) => {
    if (!dropdown.classList.contains('hidden') && e.key === 'Escape') {
      dropdown.classList.add('hidden');
      e.stopPropagation();
    }
  });
}

// ============================================================
// Helpers
// ============================================================
function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : ''; }
function formatDate(d) {
  if (!d) return '—';
  const date = new Date(d + 'T00:00:00');
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}
function formatDateTime(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' at ' +
    d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
}
function truncate(s, len) { return s && s.length > len ? s.substring(0, len) + '...' : s; }

// ============================================================
// Data Export
// ============================================================

function exportDataAsJson() {
  const data = JSON.stringify(requests, null, 2);
  const blob = new Blob([data], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vc-requests-export-${new Date().toISOString().split('T')[0]}.json`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('JSON export downloaded');
}

function exportDataAsCsv() {
  const headers = [
    'Request ID', 'Account', 'AE', 'SE', 'Region', 'Industry', 'Deal Type',
    'ARR', 'Deal Stage', 'Submitted Date', 'Expected Close', 'Status',
    'Assigned VC', 'Triage Verdict', 'Time Estimate', 'Help Needed', 'Needed By',
    'Outcome', 'Closed ARR', 'Close Date', 'Projected ARR', 'Deal Delta',
    'Use Case Count', 'Use Case Themes', 'Note Count', 'Justifications'
  ];

  const rows = requests.map(r => {
    const delta = (r.closedArr && r.projectedArr) ? r.closedArr - r.projectedArr : '';
    return [
      r.id,
      r.customerName,
      r.ae || '',
      r.se || '',
      r.region || '',
      r.industry || '',
      r.dealType || '',
      r.arr || 0,
      r.dealStage || '',
      r.submittedDate || '',
      r.expectedClose || '',
      r.status || '',
      r.assignedVc || '',
      r.triage?.verdict || '',
      r.triage?.timeEstimate || '',
      (r.helpNeeded || '').replace(/"/g, '""'),
      r.neededBy || '',
      r.outcome || '',
      r.closedArr ?? '',
      r.closeDate || '',
      r.projectedArr || '',
      delta,
      r.useCases?.length || 0,
      (r.useCases || []).map(uc => uc.title).join('; '),
      r.notes?.length || 0,
      (r.justifications || []).join('; ')
    ];
  });

  const csvContent = [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vc-requests-export-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('CSV export downloaded');
}

function exportTrackerToExcel() {
  const headers = [
    'Request ID', 'Customer Name', 'Deal Type', 'ARR', 'AE', 'SE',
    'Assigned VC', 'Triage', 'Status', 'Submitted', 'Needed By'
  ];

  const rows = requests.map(r => {
    const triageLabel = r.triage?.verdict === 'auto-approved' ? 'Approved'
      : r.triage?.verdict === 'out-of-scope' ? 'Not Approved'
      : r.triage?.verdict === 'needs-review' ? 'Needs Review'
      : '';
    const dealLabel = r.dealType === 'land' ? 'New Logo' : capitalize(r.dealType);
    const statusLabel = STATUS_CONFIG[r.status]?.label || r.status;

    return [
      r.id,
      r.customerName,
      dealLabel,
      r.arr || 0,
      r.ae || '',
      r.se || '',
      r.assignedVc || 'Unassigned',
      triageLabel,
      statusLabel,
      r.submittedDate || '',
      r.neededBy || ''
    ];
  });

  // Build XML spreadsheet (opens natively in Excel)
  const xmlRows = [headers, ...rows].map((row, i) => {
    const cells = row.map((cell, j) => {
      // ARR column (index 3) as number
      if (j === 3 && i > 0) return `<Cell><Data ss:Type="Number">${cell}</Data></Cell>`;
      return `<Cell><Data ss:Type="String">${String(cell).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</Data></Cell>`;
    }).join('');
    return `<Row>${cells}</Row>`;
  }).join('\n');

  const xml = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
  xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
  <Styles>
    <Style ss:ID="header"><Font ss:Bold="1"/><Interior ss:Color="#E2E8F0" ss:Pattern="Solid"/></Style>
  </Styles>
  <Worksheet ss:Name="VC Requests">
    <Table>
      <Row ss:StyleID="header">${headers.map(h => `<Cell><Data ss:Type="String">${h}</Data></Cell>`).join('')}</Row>
      ${rows.map(row => {
        const cells = row.map((cell, j) => {
          if (j === 3) return `<Cell><Data ss:Type="Number">${cell}</Data></Cell>`;
          return `<Cell><Data ss:Type="String">${String(cell).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</Data></Cell>`;
        }).join('');
        return `<Row>${cells}</Row>`;
      }).join('\n')}
    </Table>
  </Worksheet>
</Workbook>`;

  const blob = new Blob([xml], { type: 'application/vnd.ms-excel' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vc-requests-snapshot-${new Date().toISOString().split('T')[0]}.xls`;
  a.click();
  URL.revokeObjectURL(url);
  showToast('Excel snapshot downloaded');
}

// ============================================================
// Analytics Dashboard — Filter State
// ============================================================

const analyticsFilters = {
  outcome: null,    // e.g. 'won', 'expanded', 'pending'
  vc: null,         // e.g. 'Kevin Colston'
  dealType: null,   // e.g. 'land', 'expansion'
  industry: null,   // e.g. 'Financial Services'
  timeEstimate: null, // e.g. 'MEDIUM-HEAVY'
  triage: null,     // e.g. 'auto-approved'
  status: null,     // e.g. 'completed'
  useCase: null     // e.g. 'Merchant Onboarding Conversion'
};

function toggleAnalyticsFilter(key, value) {
  // Toggle: click same value again to clear it
  if (analyticsFilters[key] === value) {
    analyticsFilters[key] = null;
  } else {
    analyticsFilters[key] = value;
  }
  renderAnalytics();
}

function clearAllAnalyticsFilters() {
  Object.keys(analyticsFilters).forEach(k => analyticsFilters[k] = null);
  renderAnalytics();
}

function getActiveFilterCount() {
  return Object.values(analyticsFilters).filter(v => v !== null).length;
}

function applyAnalyticsFilters(data) {
  return data.filter(r => {
    if (analyticsFilters.outcome) {
      if (analyticsFilters.outcome === 'pending') {
        if (r.outcome) return false;
      } else {
        if (r.outcome !== analyticsFilters.outcome) return false;
      }
    }
    if (analyticsFilters.vc) {
      const vc = r.assignedVc || 'Unassigned';
      if (vc !== analyticsFilters.vc) return false;
    }
    if (analyticsFilters.dealType && r.dealType !== analyticsFilters.dealType) return false;
    if (analyticsFilters.industry && (r.industry || 'Unknown') !== analyticsFilters.industry) return false;
    if (analyticsFilters.timeEstimate && r.triage?.timeEstimate !== analyticsFilters.timeEstimate) return false;
    if (analyticsFilters.triage && r.triage?.verdict !== analyticsFilters.triage) return false;
    if (analyticsFilters.status && r.status !== analyticsFilters.status) return false;
    if (analyticsFilters.useCase) {
      if (!(r.useCases || []).some(uc => uc.title === analyticsFilters.useCase)) return false;
    }
    return true;
  });
}

function filterLabel(key, value) {
  switch (key) {
    case 'outcome': return OUTCOME_CONFIG[value]?.label || capitalize(value);
    case 'vc': return value;
    case 'dealType': return value === 'land' ? 'New Logo' : capitalize(value);
    case 'industry': return value;
    case 'timeEstimate': return TIME_ESTIMATE_CONFIG[value]?.label || value;
    case 'triage': return TRIAGE_CONFIG[value]?.label || value;
    case 'status': return STATUS_CONFIG[value]?.label || value;
    case 'useCase': return value;
    default: return value;
  }
}

function filterIcon(key) {
  switch (key) {
    case 'outcome': return '🎯'; case 'vc': return '👤'; case 'dealType': return '📋';
    case 'industry': return '🏢'; case 'timeEstimate': return '⏱'; case 'triage': return '🔍';
    case 'status': return '📊'; case 'useCase': return '💡'; default: return '🔹';
  }
}

function isFilterActive(key, value) {
  return analyticsFilters[key] === value;
}

// ============================================================
// Analytics Dashboard — Render
// ============================================================

function renderAnalytics() {
  const all = applyAnalyticsFilters(requests);
  const completed = all.filter(r => r.status === 'completed');
  const withOutcome = all.filter(r => r.outcome);
  const won = withOutcome.filter(r => ['won', 'expanded', 'renewed'].includes(r.outcome));
  const lost = withOutcome.filter(r => r.outcome === 'lost');
  const activeCount = getActiveFilterCount();

  // --- Active Filters Bar ---
  const filterBar = document.getElementById('analytics-filter-bar');
  if (filterBar) {
    if (activeCount > 0) {
      filterBar.classList.remove('hidden');
      filterBar.innerHTML = `
        <div class="filter-bar-inner">
          <span class="filter-bar-label">Filtered by:</span>
          ${Object.entries(analyticsFilters).filter(([, v]) => v !== null).map(([key, value]) => `
            <button class="filter-chip" onclick="toggleAnalyticsFilter('${key}', '${value.replace(/'/g, "\\'")}')">
              ${filterIcon(key)} ${filterLabel(key, value)} <span class="chip-x">&times;</span>
            </button>
          `).join('')}
          <button class="filter-chip filter-chip-clear" onclick="clearAllAnalyticsFilters()">Clear all</button>
          <span class="filter-bar-count">${all.length} of ${requests.length} request(s)</span>
        </div>
      `;
    } else {
      filterBar.classList.add('hidden');
      filterBar.innerHTML = '';
    }
  }

  // Helper: highlight class if filter is active for this row
  const activeClass = (key, value) => isFilterActive(key, value) ? 'af-active' : '';
  const clickable = (key, value) => `class="af-clickable ${activeClass(key, value)}" onclick="toggleAnalyticsFilter('${key}', '${value.replace(/'/g, "\\'")}')"`;

  // --- Summary Cards ---
  const totalArr = all.reduce((sum, r) => sum + (r.arr || 0), 0);
  const influencedArr = won.reduce((sum, r) => sum + (r.closedArr || 0), 0);
  const winRate = withOutcome.length > 0 ? ((won.length / withOutcome.length) * 100).toFixed(0) : '—';
  const avgDealDelta = won.filter(r => r.closedArr && r.projectedArr).length > 0
    ? won.filter(r => r.closedArr && r.projectedArr).reduce((sum, r) => sum + (r.closedArr - r.projectedArr), 0) / won.filter(r => r.closedArr && r.projectedArr).length
    : 0;

  document.getElementById('analytics-summary').innerHTML = `
    <div class="summary-card">
      <div class="summary-value">${all.length}</div>
      <div class="summary-label">Total Requests</div>
    </div>
    <div class="summary-card">
      <div class="summary-value">$${totalArr.toLocaleString()}</div>
      <div class="summary-label">Total Pipeline ARR</div>
    </div>
    <div class="summary-card summary-highlight">
      <div class="summary-value">${winRate}${winRate !== '—' ? '%' : ''}</div>
      <div class="summary-label">Win Rate</div>
    </div>
    <div class="summary-card summary-green">
      <div class="summary-value">$${influencedArr.toLocaleString()}</div>
      <div class="summary-label">VC-Influenced ARR</div>
    </div>
    <div class="summary-card ${avgDealDelta >= 0 ? 'summary-green' : 'summary-red'}">
      <div class="summary-value">${avgDealDelta >= 0 ? '+' : '-'}$${Math.abs(Math.round(avgDealDelta)).toLocaleString()}</div>
      <div class="summary-label">Avg Deal Delta</div>
    </div>
    <div class="summary-card">
      <div class="summary-value">${completed.length}</div>
      <div class="summary-label">Completed</div>
    </div>
  `;

  // --- Deal Outcomes ---
  const outcomeCounts = {};
  Object.keys(OUTCOME_CONFIG).forEach(k => outcomeCounts[k] = 0);
  all.forEach(r => {
    if (r.outcome) outcomeCounts[r.outcome] = (outcomeCounts[r.outcome] || 0) + 1;
    else outcomeCounts['pending'] = (outcomeCounts['pending'] || 0) + 1;
  });

  document.querySelector('#analytics-outcomes .analytics-card-body').innerHTML = `
    <div class="bar-chart">
      ${Object.entries(OUTCOME_CONFIG).map(([key, cfg]) => {
        const count = outcomeCounts[key] || 0;
        const pct = all.length > 0 ? (count / all.length * 100) : 0;
        return `
          <div class="bar-row af-clickable ${activeClass('outcome', key)}" onclick="toggleAnalyticsFilter('outcome', '${key}')">
            <span class="bar-label">${cfg.icon} ${cfg.label}</span>
            <div class="bar-track">
              <div class="bar-fill" style="width:${pct}%; background:${cfg.color}"></div>
            </div>
            <span class="bar-value">${count}</span>
          </div>`;
      }).join('')}
    </div>
  `;

  // --- Deal Delta ---
  const deltaDeals = withOutcome.filter(r => r.closedArr != null && r.projectedArr);
  document.querySelector('#analytics-deal-delta .analytics-card-body').innerHTML = deltaDeals.length > 0 ? `
    <div class="delta-chart">
      ${deltaDeals.map(r => {
        const delta = r.closedArr - r.projectedArr;
        const pct = r.projectedArr > 0 ? ((delta / r.projectedArr) * 100).toFixed(1) : 0;
        const isPos = delta >= 0;
        return `
          <div class="delta-row">
            <span class="delta-account">${r.customerName}</span>
            <span class="delta-amount ${isPos ? 'delta-positive' : 'delta-negative'}">
              ${isPos ? '+' : '-'}$${Math.abs(delta).toLocaleString()} (${pct > 0 ? '+' : ''}${pct}%)
            </span>
          </div>`;
      }).join('')}
    </div>
    <div class="delta-summary">
      <span>Total: <strong>${(() => { const t = deltaDeals.reduce((s, r) => s + (r.closedArr - r.projectedArr), 0); return (t >= 0 ? '+' : '-') + '$' + Math.abs(t).toLocaleString(); })()}</strong> across ${deltaDeals.length} deal(s)</span>
    </div>
  ` : '<p class="analytics-empty">No closed deals with delta data yet.</p>';

  // --- By VC ---
  const vcStats = {};
  all.forEach(r => {
    const vc = r.assignedVc || 'Unassigned';
    if (!vcStats[vc]) vcStats[vc] = { requests: 0, arr: 0, won: 0, closed: 0, influencedArr: 0 };
    vcStats[vc].requests++;
    vcStats[vc].arr += r.arr || 0;
    if (r.outcome) {
      vcStats[vc].closed++;
      if (['won', 'expanded', 'renewed'].includes(r.outcome)) {
        vcStats[vc].won++;
        vcStats[vc].influencedArr += r.closedArr || 0;
      }
    }
  });

  document.querySelector('#analytics-by-vc .analytics-card-body').innerHTML = `
    <table class="analytics-table">
      <thead><tr><th>VC</th><th>Requests</th><th>Pipeline</th><th>Won</th><th>Influenced ARR</th></tr></thead>
      <tbody>
        ${Object.entries(vcStats).sort((a, b) => b[1].requests - a[1].requests).map(([vc, s]) => `
          <tr class="af-clickable ${activeClass('vc', vc)}" onclick="toggleAnalyticsFilter('vc', '${vc.replace(/'/g, "\\'")}')">
            <td class="at-bold">${vc}</td>
            <td>${s.requests}</td>
            <td>$${s.arr.toLocaleString()}</td>
            <td>${s.closed > 0 ? `${s.won}/${s.closed}` : '—'}</td>
            <td>$${s.influencedArr.toLocaleString()}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  // --- By Deal Type ---
  const dealTypeStats = {};
  all.forEach(r => {
    const dt = r.dealType || 'unknown';
    if (!dealTypeStats[dt]) dealTypeStats[dt] = { count: 0, arr: 0, won: 0, closed: 0 };
    dealTypeStats[dt].count++;
    dealTypeStats[dt].arr += r.arr || 0;
    if (r.outcome) {
      dealTypeStats[dt].closed++;
      if (['won', 'expanded', 'renewed'].includes(r.outcome)) dealTypeStats[dt].won++;
    }
  });

  document.querySelector('#analytics-by-deal-type .analytics-card-body').innerHTML = `
    <table class="analytics-table">
      <thead><tr><th>Deal Type</th><th>Count</th><th>Pipeline</th><th>Win Rate</th></tr></thead>
      <tbody>
        ${Object.entries(dealTypeStats).map(([dt, s]) => `
          <tr class="af-clickable ${activeClass('dealType', dt)}" onclick="toggleAnalyticsFilter('dealType', '${dt}')">
            <td><span class="deal-badge deal-${dt}">${dt === 'land' ? 'New Logo' : capitalize(dt)}</span></td>
            <td>${s.count}</td>
            <td>$${s.arr.toLocaleString()}</td>
            <td>${s.closed > 0 ? Math.round(s.won / s.closed * 100) + '%' : '—'}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;

  // --- By Industry ---
  const industryStats = {};
  all.forEach(r => {
    const ind = r.industry || 'Unknown';
    if (!industryStats[ind]) industryStats[ind] = { count: 0, arr: 0 };
    industryStats[ind].count++;
    industryStats[ind].arr += r.arr || 0;
  });

  const unfilteredTotalArr = requests.reduce((sum, r) => sum + (r.arr || 0), 0);
  document.querySelector('#analytics-by-industry .analytics-card-body').innerHTML = `
    <div class="bar-chart">
      ${Object.entries(industryStats).sort((a, b) => b[1].arr - a[1].arr).map(([ind, s]) => {
        const pct = unfilteredTotalArr > 0 ? (s.arr / unfilteredTotalArr * 100) : 0;
        return `
          <div class="bar-row af-clickable ${activeClass('industry', ind)}" onclick="toggleAnalyticsFilter('industry', '${ind.replace(/'/g, "\\'")}')">
            <span class="bar-label">${ind}</span>
            <div class="bar-track">
              <div class="bar-fill" style="width:${pct}%; background:var(--amp-blue)"></div>
            </div>
            <span class="bar-value">$${s.arr.toLocaleString()}</span>
          </div>`;
      }).join('')}
    </div>
  `;

  // --- Time Estimate Distribution ---
  const teCounts = { 'LIGHT': 0, 'MEDIUM': 0, 'MEDIUM-HEAVY': 0, 'HEAVY': 0 };
  all.forEach(r => {
    const te = r.triage?.timeEstimate;
    if (te && teCounts[te] !== undefined) teCounts[te]++;
  });

  document.querySelector('#analytics-time-estimates .analytics-card-body').innerHTML = `
    <div class="bar-chart">
      ${Object.entries(TIME_ESTIMATE_CONFIG).map(([key, cfg]) => {
        const count = teCounts[key] || 0;
        const pct = all.length > 0 ? (count / all.length * 100) : 0;
        return `
          <div class="bar-row af-clickable ${activeClass('timeEstimate', key)}" onclick="toggleAnalyticsFilter('timeEstimate', '${key}')">
            <span class="bar-label"><span class="time-est-badge" style="background:${cfg.bg}; color:${cfg.color}">${cfg.label}</span></span>
            <div class="bar-track">
              <div class="bar-fill" style="width:${pct}%; background:${cfg.color}"></div>
            </div>
            <span class="bar-value">${count} (${cfg.hours})</span>
          </div>`;
      }).join('')}
    </div>
  `;

  // --- Triage Verdicts ---
  const triageCounts = { 'auto-approved': 0, 'needs-review': 0, 'out-of-scope': 0 };
  all.forEach(r => {
    const v = r.triage?.verdict;
    if (v && triageCounts[v] !== undefined) triageCounts[v]++;
  });

  document.querySelector('#analytics-triage .analytics-card-body').innerHTML = `
    <div class="triage-donut">
      ${Object.entries(TRIAGE_CONFIG).map(([key, cfg]) => {
        const count = triageCounts[key] || 0;
        const pct = all.length > 0 ? Math.round(count / all.length * 100) : 0;
        return `
          <div class="donut-row af-clickable ${activeClass('triage', key)}" onclick="toggleAnalyticsFilter('triage', '${key}')">
            <span class="donut-swatch" style="background:${cfg.color}"></span>
            <span class="donut-label">${cfg.icon} ${cfg.label}</span>
            <span class="donut-value">${count} (${pct}%)</span>
          </div>`;
      }).join('')}
    </div>
  `;

  // --- Top Use Case Themes ---
  const themeCounts = {};
  all.forEach(r => {
    (r.useCases || []).forEach(uc => {
      const theme = uc.title;
      if (!themeCounts[theme]) themeCounts[theme] = 0;
      themeCounts[theme]++;
    });
  });

  const topThemes = Object.entries(themeCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);
  document.querySelector('#analytics-use-cases .analytics-card-body').innerHTML = topThemes.length > 0 ? `
    <div class="bar-chart">
      ${topThemes.map(([theme, count]) => {
        const maxCount = topThemes[0][1];
        const pct = maxCount > 0 ? (count / maxCount * 100) : 0;
        return `
          <div class="bar-row af-clickable ${activeClass('useCase', theme)}" onclick="toggleAnalyticsFilter('useCase', '${theme.replace(/'/g, "\\'")}')">
            <span class="bar-label bar-label-wide">${theme}</span>
            <div class="bar-track">
              <div class="bar-fill" style="width:${pct}%; background:var(--amp-indigo)"></div>
            </div>
            <span class="bar-value">${count}</span>
          </div>`;
      }).join('')}
    </div>
  ` : '<p class="analytics-empty">No use case data yet.</p>';

  // --- Support Types Requested ---
  const SUPPORT_TYPE_MAP = [
    { key: 'financial-model', label: 'Financial Model', keywords: ['financial model', 'outside-in financial'] },
    { key: 'bva', label: 'BVA / Value Assessment', keywords: ['bva', 'business value assessment', 'collaborative bva'] },
    { key: 'value-realization', label: 'Value Realization', keywords: ['value realization', 'roi recap', 'ebr', 'qbr'] },
    { key: 'expansion-roi', label: 'Expansion ROI', keywords: ['expansion business case', 'expansion roi', 'roi analysis for expansion', 'upsell', 'cross-sell'] },
    { key: 'exec-discovery', label: 'Executive Discovery', keywords: ['executive stakeholder', 'discovery support', 'exec alignment', 'stakeholder interview'] },
    { key: 'ebc-prep', label: 'EBC Prep', keywords: ['ebc', 'executive briefing', 'value narrative'] },
    { key: 'competitive', label: 'Competitive Positioning', keywords: ['competitive value', 'competitive positioning', 'differentiation'] },
    { key: 'other', label: 'Other', keywords: [] }
  ];

  const supportCounts = {};
  SUPPORT_TYPE_MAP.forEach(st => { supportCounts[st.key] = 0; });

  all.forEach(r => {
    if (!r.helpNeeded) return;
    const ask = r.helpNeeded.toLowerCase();
    let matched = false;
    SUPPORT_TYPE_MAP.forEach(st => {
      if (st.key === 'other') return;
      if (st.keywords.some(kw => ask.includes(kw))) {
        supportCounts[st.key]++;
        matched = true;
      }
    });
    if (!matched) supportCounts['other']++;
  });

  const supportEntries = SUPPORT_TYPE_MAP
    .map(st => ({ ...st, count: supportCounts[st.key] }))
    .filter(st => st.count > 0)
    .sort((a, b) => b.count - a.count);

  const supportMax = supportEntries.length > 0 ? supportEntries[0].count : 1;
  const supportColors = ['#1B1F3B', '#2563eb', '#7c3aed', '#0891b2', '#d97706', '#16a34a', '#dc2626', '#6b7280'];

  const supportEl = document.querySelector('#analytics-support-types .analytics-card-body');
  if (supportEl) {
    supportEl.innerHTML = supportEntries.length > 0 ? `
      <div class="bar-chart">
        ${supportEntries.map((st, i) => {
          const pct = supportMax > 0 ? (st.count / supportMax * 100) : 0;
          return `
            <div class="bar-row">
              <span class="bar-label bar-label-wide">${st.label}</span>
              <div class="bar-track">
                <div class="bar-fill" style="width:${pct}%; background:${supportColors[i % supportColors.length]}"></div>
              </div>
              <span class="bar-value">${st.count}</span>
            </div>`;
        }).join('')}
      </div>
      <p class="analytics-footnote" style="margin-top:12px; font-size:12px; color:var(--gray-400);">Parsed from AE support selections. A request may match multiple categories.</p>
    ` : '<p class="analytics-empty">No support type data yet.</p>';
  }

  // --- All Requests Table ---
  document.querySelector('#analytics-table .analytics-card-body').innerHTML = `
    <div class="analytics-table-wrapper">
      <table class="analytics-table analytics-table-full">
        <thead>
          <tr>
            <th>ID</th><th>Account</th><th>AE</th><th>VC</th><th>Type</th>
            <th>ARR</th><th>Status</th><th>Triage</th><th>Outcome</th><th>Closed ARR</th><th>Delta</th>
          </tr>
        </thead>
        <tbody>
          ${all.map(r => {
            const delta = (r.closedArr != null && r.projectedArr) ? r.closedArr - r.projectedArr : null;
            const outcomeInfo = r.outcome ? OUTCOME_CONFIG[r.outcome] : null;
            const triageInfo = r.triage ? TRIAGE_CONFIG[r.triage.verdict] : null;
            return `
              <tr>
                <td class="at-mono">${r.id}</td>
                <td class="at-bold">${r.customerName}</td>
                <td>${r.ae || '—'}</td>
                <td>${r.assignedVc || '—'}</td>
                <td><span class="deal-badge deal-${r.dealType}">${r.dealType === 'land' ? 'New' : capitalize(r.dealType)}</span></td>
                <td>$${(r.arr || 0).toLocaleString()}</td>
                <td><span class="status-dot" style="background:${STATUS_CONFIG[r.status]?.color || '#94a3b8'}"></span> ${STATUS_CONFIG[r.status]?.label || r.status}</td>
                <td>${triageInfo ? `<span style="color:${triageInfo.color}">${triageInfo.icon}</span>` : '—'}</td>
                <td>${outcomeInfo ? `${outcomeInfo.icon} ${outcomeInfo.label}` : '—'}</td>
                <td>${r.closedArr != null ? '$' + r.closedArr.toLocaleString() : '—'}</td>
                <td class="${delta !== null ? (delta >= 0 ? 'delta-positive' : 'delta-negative') : ''}">${delta !== null ? (delta >= 0 ? '+' : '-') + '$' + Math.abs(delta).toLocaleString() : '—'}</td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

// ============================================================
// Init
// ============================================================
migrateRequests();
populateVcFilter();
renderTracker();

// Wire up export buttons
document.getElementById('export-json-btn')?.addEventListener('click', exportDataAsJson);
document.getElementById('export-csv-btn')?.addEventListener('click', exportDataAsCsv);
document.getElementById('export-tracker-btn')?.addEventListener('click', exportTrackerToExcel);
