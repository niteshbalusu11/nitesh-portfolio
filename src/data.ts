// All site content lives here. Numbers were checked against GitHub, npm and
// crates.io on 2026-10-31.

export const links = {
  github: 'https://github.com/niteshbalusu11',
  linkedin: 'https://www.linkedin.com/in/niteshbalusu/',
  x: 'https://x.com/nitesh_btc',
  resume: 'https://drive.google.com/file/d/1KqLueNHbSabJ0SqKgsTwE7QnGYk414CS/view',
}

export const pgpFingerprint = 'CC47 A0DD 451A FD54 78A6 2F52 59B4 7B65 9C06 F755'

export type Side = 'btc' | 'snow'

export const sides: Record<Side, { name: string; role: string; intro: string; facts: string[] }> = {
  btc: {
    name: 'Bitcoin',
    role: 'Bitcoin & Lightning engineer',
    intro:
      "I build self-custodial Bitcoin software: Noah, a wallet for the Ark protocol; the Rust and C++ modules that bring Bitcoin protocols to phones; and the Lightning payments backend at ZBD.",
    facts: ['938 merged PRs', '50K+ npm downloads a year', '#2 on Balance of Satoshis'],
  },
  snow: {
    name: 'ServiceNow',
    role: 'ServiceNow platform architect',
    intro:
      'Nearly ten years designing and building on ServiceNow, from federal programs at the Social Security Administration to an HR portal used in more than 100 countries. I also build AI agents and production Rust services, and I bring both to the platform.',
    facts: ['Nearly 10 years', 'Federal & Fortune 500', 'ITSM · HRSD · CSM · GRC'],
  },
}

export type Project = {
  name: string
  url: string
  site?: string
  role: string
  blurb: string
  tags: string[]
  meta: string[]
  years: string
  isNew?: boolean
  highlights?: { area: string; text: string }[]
}

export const featured: Project[] = [
  {
    name: 'Noah',
    url: 'https://github.com/smolcars/noah',
    site: 'https://beta.noahwallet.io',
    role: 'Creator & lead developer',
    blurb:
      'A trust-minimized Bitcoin wallet built on Ark, a layer-2 protocol for fast, cheap payments. I took it from the first commit to mainnet, then rewrote the app natively in Swift and Kotlin, on a Rust backend built to scale to millions of users.',
    tags: ['Ark', 'Swift', 'Kotlin', 'Rust', 'Axum', 'Postgres'],
    meta: ['66 ★', '35 releases', 'Live on mainnet'],
    years: '2025 — now',
    isNew: true,
  },
  {
    name: 'rbitcoin',
    url: 'https://github.com/reardencode/rbitcoin',
    role: 'Core contributor · #3 by commits',
    blurb:
      'A from-scratch reimplementation of Bitcoin Core in Rust, with pure-Rust consensus, a relational block archive, multi-peer sync and a built-in Electrum server. Over two weeks I landed 43 PRs so that real Bitcoin software can run against it.',
    tags: ['Rust', 'Consensus', 'P2P', 'JSON-RPC'],
    meta: ['86 ★', '43 merged PRs', '158 commits'],
    years: 'Oct 2026',
    isNew: true,
    highlights: [
      { area: 'Consensus parity', text: 'Matches Core on BIP30 duplicates, txids repeated within a batch, and OP_TUCK stack limits.' },
      { area: 'Initial block download', text: 'Fixed four ways sync could stall, made crash recovery safe, and moved tip flushes off the critical path.' },
      { area: 'Core-compatible RPC', text: 'LND can open and close channels on it, getblock v3 serves Silent Payments scanners, and miners get BIP9 templates.' },
      { area: 'Ops & hardening', text: 'Multi-arch operator images, block-relay-only peer slots, and protection against log forgery.' },
    ],
  },
  {
    name: 'react-native-nitro-ark',
    url: 'https://github.com/smolcars/react-native-nitro-ark',
    role: 'Author',
    blurb:
      "Brings Bark, Second's Rust implementation of Ark, to React Native through a pure C++ Nitro module. The engine behind Noah's mobile apps.",
    tags: ['Rust', 'C++', 'cxx', 'TypeScript'],
    meta: ['100 releases', '23K downloads / yr'],
    years: '2025 — now',
    isNew: true,
  },
  {
    name: 'react-native-nitro-tor',
    url: 'https://github.com/smolcars/react-native-nitro-tor',
    role: 'Author',
    blurb:
      'Bundles the C Tor daemon behind a Rust FFI layer in a pure C++ Turbo Module, so React Native apps on iOS and Android get a control port and a SOCKS proxy.',
    tags: ['Tor', 'Rust', 'C++', 'React Native'],
    meta: ['25 ★', '27K downloads / yr'],
    years: '2025 — now',
    isNew: true,
  },
  {
    name: 'Balance of Satoshis',
    url: 'https://github.com/alexbosworth/balanceofsatoshis',
    role: '#2 all-time contributor',
    blurb:
      'The command-line tool for running fleets of LND nodes. I built peer-to-peer channel opens and channel sales, LNURL and Lightning Address payments, an LSPS1 liquidity server, and taproot channels.',
    tags: ['Lightning', 'LND', 'Node.js'],
    meta: ['619 ★', '189 commits'],
    years: '2021 — 2024',
  },
  {
    name: 'Blixt Wallet',
    url: 'https://github.com/smolcars/blixt-wallet',
    site: 'https://blixtwallet.github.io',
    role: 'Core contributor',
    blurb:
      'A mobile Lightning wallet that runs a full LND node on the phone. I worked on zero-conf channels, bimodal pathfinding, recovery tools and the move to bun.',
    tags: ['Lightning', 'React Native', 'TypeScript'],
    meta: ['426 ★', '36 merged PRs'],
    years: '2022 — now',
  },
]

export type MiniProject = { name: string; url: string; blurb: string; note: string }

export const moreProjects: MiniProject[] = [
  {
    name: 'bark-bolt-ffi',
    url: 'https://github.com/smolcars/bark-bolt-ffi',
    blurb: 'Swift and Kotlin SDKs for the Bark Ark wallet, powered by BoltFFI.',
    note: 'Rust · 2026',
  },
  {
    name: 'Hunk',
    url: 'https://github.com/smolcars/hunk',
    blurb: 'A desktop Git diff viewer with built-in coding agents.',
    note: 'Rust · 76 ★',
  },
  {
    name: 'react-native-secure-enclave-operations',
    url: 'https://github.com/niteshbalusu11/react-native-secure-enclave-operations',
    blurb: 'Secure Enclave keys, App Attest and Play Integrity checks for React Native.',
    note: 'Swift · Kotlin',
  },
  {
    name: 'lnd_grpc_rust',
    url: 'https://github.com/niteshbalusu11/lnd-grpc-rust',
    blurb: "An async Rust client for LND's gRPC API.",
    note: '43K crate downloads',
  },
  {
    name: 'LndBoss',
    url: 'https://github.com/niteshbalusu11/lndboss',
    blurb: 'A web UI for Balance of Satoshis, shipped on the Umbrel app store.',
    note: 'Next.js · 62 releases',
  },
  {
    name: 'BOS Commands Document',
    url: 'https://github.com/niteshbalusu11/BOS-Commands-Document',
    blurb: 'The widely used guide to every Balance of Satoshis command.',
    note: 'Docs · 50 ★',
  },
  {
    name: 'bip-321',
    url: 'https://github.com/niteshbalusu11/bip-321',
    blurb: 'A TypeScript library for parsing and encoding BIP-321 Bitcoin payment URIs.',
    note: '5K downloads / yr',
  },
  {
    name: 'RustDress',
    url: 'https://github.com/niteshbalusu11/rustdress',
    blurb: 'A self-hosted Lightning Address and Nostr NIP-05 server with zaps.',
    note: 'Rust · 17 ★',
  },
]

export type Award = {
  place: string
  event: string
  host: string
  date: string
  location: string
  project: string
  blurb: string
  prize: string
  captain: string
  links: { label: string; href: string }[]
}

export const awards: Award[] = [
  {
    place: '1st',
    event: 'AI Hack for Freedom II',
    host: 'Human Rights Foundation',
    date: 'May 2026',
    location: 'Bitcoin Park, Nashville',
    project: 'Tarkus',
    blurb:
      'An open-source, self-hostable AI platform for trainers running strategic nonviolence workshops. It generates culturally relevant lessons and case studies, gives students a live interface for questions, and analyzes engagement to give trainers real-time feedback.',
    prize: '$25K, paid in bitcoin',
    captain: 'Jhanisse Vaca-Daza',
    links: [
      { label: 'Demo', href: 'https://tarkus-phi.vercel.app' },
      { label: 'Code', href: 'https://github.com/niteshbalusu11/tarkus' },
      { label: 'Announcement', href: 'https://hrf.org/latest/announcing-the-winners-of-ai-hack-for-freedom-ii/' },
    ],
  },
  {
    place: '3rd',
    event: 'AI Hack for Freedom III',
    host: 'Human Rights Foundation & NED',
    date: 'Sept 2026',
    location: 'Washington, D.C.',
    project: 'Nima',
    blurb:
      "A streaming app that preserves evidence of attacks on protesters. Footage goes to a remote server as it's recorded, or to nearby friends' phones when there's no internet, so it survives even if the phone is confiscated. A dashboard surfaces recurring faces to flag potential threats.",
    prize: '$6K',
    captain: 'Chemi Lhamo',
    links: [
      { label: 'Code', href: 'https://github.com/niteshbalusu11/nima' },
      { label: 'Announcement', href: 'https://hrf.org/latest/announcing-the-winners-of-ai-hack-for-freedom-iii/' },
    ],
  },
]

export type Contribution = {
  repo: string
  url: string
  prs: number
  stars: number
  range: string
  note?: string
}

// Merged PRs to projects I don't own, largest first.
export const contributions: Contribution[] = [
  { repo: 'reardencode/rbitcoin', url: 'https://github.com/reardencode/rbitcoin', prs: 43, stars: 86, range: '2026', note: '158 commits · consensus, sync, RPC' },
  { repo: 'alexbosworth/balanceofsatoshis', url: 'https://github.com/alexbosworth/balanceofsatoshis', prs: 41, stars: 619, range: '2021–2024', note: '189 commits on master' },
  { repo: 'getumbrel/umbrel-apps', url: 'https://github.com/getumbrel/umbrel-apps', prs: 9, stars: 791, range: '2022–2024', note: 'LndBoss on Umbrel' },
  { repo: 'alexbosworth/ln-telegram', url: 'https://github.com/alexbosworth/ln-telegram', prs: 7, stars: 5, range: '2022–2023' },
  { repo: 'alexbosworth/paid-services', url: 'https://github.com/alexbosworth/paid-services', prs: 6, stars: 8, range: '2021–2024', note: '64 commits' },
  { repo: 'alexbosworth/lightning', url: 'https://github.com/alexbosworth/lightning', prs: 6, stars: 131, range: '2023–2025', note: 'Signet, testnet4, inbound fees' },
  { repo: 'alexbosworth/ln-sync', url: 'https://github.com/alexbosworth/ln-sync', prs: 5, stars: 2, range: '2022–2025' },
  { repo: 'alexbosworth/run-lnd', url: 'https://github.com/alexbosworth/run-lnd', prs: 3, stars: 154, range: '2021–2025' },
  { repo: 'hsjoberg/dunder-lsp', url: 'https://github.com/hsjoberg/dunder-lsp', prs: 3, stars: 46, range: '2022–2024', note: 'Zero-conf, taproot channels' },
]

// Notable one-off contributions, shown as chips.
export const alsoContributed: { name: string; href: string; what: string }[] = [
  { name: 'ZEUS', href: 'https://github.com/ZeusLN/zeus', what: 'Core Lightning REST backend' },
  { name: 'Bark', href: 'https://gitlab.com/ark-bitcoin/bark', what: 'Lightning send fixes' },
  { name: 'LNDK', href: 'https://github.com/lndk-org/lndk', what: 'Docker setup' },
  { name: 'Polar', href: 'https://github.com/jamaljsr/polar', what: 'Lightning dev tooling' },
  { name: 'Fedimint', href: 'https://github.com/fedimint/fedimint', what: 'Federated e-cash' },
  { name: 'strfry', href: 'https://github.com/hoytech/strfry', what: 'Nostr relay' },
  { name: 'LUDs', href: 'https://github.com/lnurl/luds', what: 'LNURL specs' },
  { name: 'LSP spec', href: 'https://github.com/BitcoinAndLightningLayerSpecs/lsp', what: 'LSPS standards' },
  { name: 'LNDg', href: 'https://github.com/cryptosharks131/lndg', what: 'Node dashboard' },
  { name: 'gpui-component', href: 'https://github.com/longbridge/gpui-component', what: 'Rust UI kit' },
]

export type Role = {
  company: string
  companyUrl?: string
  title: string
  start: string // YYYY-MM
  end?: string // YYYY-MM, omitted = present
  lane: 'btc' | 'ent'
  location: string
  summary?: string
  clients?: { name: string; text: string }[]
  tags: string[]
}

// From the October 2026 resume.
export const roles: Role[] = [
  {
    company: 'ZBD',
    companyUrl: 'https://zbdpay.com',
    title: 'DevOps & Backend Engineer, Bitcoin and Lightning',
    start: '2024-05',
    lane: 'btc',
    location: 'Atlanta, GA',
    summary:
      'Rebuilt the Bitcoin and Lightning payments backend in Rust, operate Lightning infrastructure at enterprise scale, and built the LND accounting that finance uses for end-to-end reconciliation.',
    tags: ['Rust', 'LND', 'Terraform', 'AWS', 'PostgreSQL'],
  },
  {
    company: 'Foundry',
    companyUrl: 'https://foundrydigital.com',
    title: 'Backend & Lightning Network Engineer',
    start: '2022-08',
    end: '2023-10',
    lane: 'btc',
    location: 'Atlanta, GA',
    summary:
      "Architected and operated the mining pool's Lightning payout system, ran its Lightning infrastructure, and tuned payment routing and liquidity.",
    tags: ['Lightning', 'LND', 'Payouts', 'Liquidity'],
  },
  {
    company: 'CodeForce 360',
    companyUrl: 'https://codeforce.com',
    title: 'ServiceNow Platform Architect',
    start: '2017-09',
    end: '2026-10',
    lane: 'ent',
    location: 'Atlanta, GA',
    summary:
      'Nearly ten years designing and delivering ServiceNow for federal agencies and Fortune 500 companies, including the Social Security Administration, Otis, Equifax and Sabre.',
    clients: [
      {
        name: 'Social Security Administration · via CGI Federal',
        text: 'Architected and shipped a custom scoped app that replaced a 30-year-old PHP system for assessing physical risk at SSA buildings.',
      },
      {
        name: 'Social Security Administration · via Accenture Federal',
        text: 'Implemented GRC with risk-assessment workflows and compliance reporting, and tied the compliance frameworks into ITSM.',
      },
      {
        name: 'Otis Elevator',
        text: 'Led the HR Service Delivery rollout and built a global Employee Center portal used in 100+ countries, with automated onboarding and offboarding.',
      },
      {
        name: 'Sabre · Equifax · Northside Hospital',
        text: 'Delivered ITSM, ITBM and CMDB implementations, SAML and Okta SSO, LDAP provisioning, ATF regression suites, and platform upgrades.',
      },
    ],
    tags: ['ITSM', 'HRSD', 'GRC', 'CMDB', 'ITBM'],
  },
]

export const certifications = ['ServiceNow Administrator', 'ServiceNow HRSD Implementation']

// "Now" section: current role and what I'm hacking on.
export const now = {
  company: 'ZBD',
  companyUrl: 'https://zbdpay.com',
  title: 'DevOps & Backend Engineer',
  since: 'May 2024',
  blurb: "Bitcoin and Lightning payments infrastructure at ZBD.",
  bullets: [
    "Rebuilt ZBD's Bitcoin and Lightning payments backend in Rust as a drop-in replacement, then migrated the production nodes onto it.",
    'Run the Lightning and Bitcoin node fleet at enterprise scale with Terraform on AWS, and track down vulnerabilities across the stack.',
    'Built the LND accounting infrastructure that gives finance full end-to-end reconciliation.',
    'Designed sticky-disk, a CI caching layer that cut build times by 20×.',
    'Wrote a Rust alerting service for Lightning node and channel health, and an AI code-review bot built on Claude.',
    'Built and rolled out remote AI coding agents for every developer at the company.',
  ],
  tags: ['Rust', 'LND', 'Bitcoin Core', 'Terraform', 'AWS', 'PostgreSQL', 'RabbitMQ', 'CI/CD'],
  focus: [
    {
      label: 'Noah, native',
      text: 'Shipping the Swift and Kotlin rewrite of Noah on top of new Bark SDKs.',
      href: 'https://github.com/smolcars/noah',
    },
    {
      label: 'bark-bolt-ffi',
      text: 'Porting the Bark bindings from UniFFI to BoltFFI to power the Swift and Kotlin apps.',
      href: 'https://github.com/smolcars/bark-bolt-ffi',
    },
    {
      label: 'rbitcoin',
      text: 'Hardening a Rust reimplementation of Bitcoin Core: faster sync, Core-exact consensus, and RPC that LND, miners and wallets can use.',
      href: 'https://github.com/reardencode/rbitcoin',
    },
  ],
}

export type Talk = { event: string; date: string; location: string; title: string; blurb: string; href: string }

export const talks: Talk[] = [
  {
    event: 'TABConf 8',
    date: 'Oct 2026',
    location: 'BitLab Village, Atlanta',
    title: 'Noah: a mobile wallet for Bitcoin’s Ark protocol',
    blurb:
      'What Ark is, how it differs from Lightning and where the two meet, and what it takes to put a new Bitcoin layer into a phone wallet people can actually use. Includes a live look at Noah.',
    href: 'https://github.com/TABConf/8.tabconf.com/issues/83',
  },
  {
    event: 'The AI Underground',
    date: 'Aug 2026',
    location: 'ATL BitLab, Atlanta',
    title: 'Building at the intersection of AI and Bitcoin',
    blurb: 'A session on building with AI and Bitcoin, drawing on Hunk and Noah. Working code over roadmap theater.',
    href: 'https://aiunderground.dev/2026/august/speaker/nitesh-b',
  },
]

// ---------- ServiceNow ----------
// From the October 2026 resume, with detail from the earlier public resume
// for the same engagements.

export type Engagement = {
  client: string
  via?: string
  title: string
  summary: string
  details?: string[]
  tags: string[]
}

export const engagements: Engagement[] = [
  {
    client: 'Social Security Administration',
    via: 'via CGI Federal',
    title: 'A 30-year-old system, rebuilt',
    summary:
      'Architected, built and deployed a custom scoped app that replaced a 30-year-old PHP application used to assess physical risk at SSA building locations.',
    tags: ['Scoped app', 'Federal'],
  },
  {
    client: 'Social Security Administration',
    via: 'via Accenture Federal',
    title: 'Risk and compliance',
    summary:
      'Implemented and configured GRC, built risk-assessment workflows and compliance reporting, and connected the compliance frameworks to existing ITSM processes.',
    tags: ['GRC', 'ITSM', 'Federal'],
  },
  {
    client: 'Otis Elevator',
    title: 'Global HR service delivery',
    summary:
      'Led the HR Service Delivery implementation and built a global Employee Center portal used in more than 100 countries, with custom HR workflows, an employee service catalog, and automated onboarding and offboarding.',
    details: [
      'Rebuilt the Employee Service Center portal from the ground up.',
      'Built a CSM portal where Otis customers submit and track service requests and follow elevator maintenance, designed for 10,000+ interactions a month.',
      'Maintained integrations with Workday, ADP, Snowflake and ProntoForms.',
      'Supported IRM, Business Continuity Management, and continuous-monitoring controls in CAM for ATO and NIST RMF compliance.',
      'Set coding standards, ran code reviews and mentored developers.',
    ],
    tags: ['HRSD', 'Employee Center', 'CSM', 'IRM'],
  },
  {
    client: 'Equifax',
    title: 'HR case management and consolidation',
    summary:
      'Delivered HR Case Management end to end, from roadmap to deployment, and merged the Australian instance into the global one.',
    details: [
      'Migrated 100+ Jira forms and workflows into ServiceNow.',
      'Built integrations with Workday, Bitbucket and Fortify.',
      'Technical lead for a team of 10 developers and 2 admins.',
      'Set up Edge Encryption and led the technical build of a federal ServiceNow instance.',
    ],
    tags: ['HRSD', 'Integrations', 'Migration'],
  },
  {
    client: 'Sabre',
    title: 'Change management and CSM',
    summary:
      'Rebuilt Change Management and rolled out CSM for airline and airport staff, cutting average ticket resolution time by 25%.',
    details: [
      'Moved the CMS portal to Service Portal.',
      'Built ATF regression suites and integrations with Rally and WebEx.',
      'Led an offshore development team.',
    ],
    tags: ['ITSM', 'CSM', 'ATF'],
  },
  {
    client: 'Northside Hospital',
    title: 'ITSM for a hospital system',
    summary:
      'Maintained and extended Incident, Request, Project Management and the CMDB, with Orchestration workflows, platform upgrades and automated testing.',
    tags: ['ITSM', 'CMDB', 'Orchestration'],
  },
]

export const platform: { area: string; detail: string }[] = [
  { area: 'IT Service Management', detail: 'Incident, Problem, Change, Request, Service Catalog' },
  { area: 'HR Service Delivery', detail: 'Case management, Employee Center, onboarding and offboarding' },
  { area: 'Customer Service Management', detail: 'Customer portals and case workflows' },
  { area: 'Risk and compliance', detail: 'GRC, IRM, BCM, continuous monitoring for ATO and NIST RMF' },
  { area: 'CMDB and ITOM', detail: 'CI relationships, Discovery, Orchestration' },
  { area: 'IT Business Management', detail: 'Project portfolio management' },
  { area: 'Platform engineering', detail: 'Scoped apps, ATF, upgrades and releases, SAML and Okta SSO, LDAP' },
  { area: 'Integrations', detail: 'Workday, ADP, Snowflake, ProntoForms, Bitbucket, Fortify, Rally' },
]
