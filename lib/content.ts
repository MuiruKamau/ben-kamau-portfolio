export type Highlight = { t: string; d: string };
export type Stat = { v: string; l: string };

export type CaseStudy = {
  slug: string;
  name: string;
  cardTag: string;
  year: string;
  blurb: string;
  chips: string[];
  tag: string;
  title: string;
  subtitle: string;
  role: string;
  client: string;
  status: string;
  stack: string;
  problem: string[];
  archNote: string;
  top: string[];
  services: string[];
  bottom: string[];
  highlights: Highlight[];
  stats: Stat[];
  outcome: string[];
  skills: string[];
};

export const profile = {
  name: "Benson Kamau",
  email: "muirubensonkamau@gmail.com",
  github: "https://github.com/MuiruKamau",
  linkedin: "https://www.linkedin.com/in/benkamau/",
  photo: "/benson.jpg",
  location: "Nairobi, Kenya",
  cv: "/Benson_Kamau_CV.pdf",
};

export const studies: CaseStudy[] = [
  {
    slug: "bodaplus",
    name: "BodaPlus",
    cardTag: "CORE BANKING · TECH LEAD",
    year: "2026",
    blurb:
      "A 14-service, multi-tenant core-banking platform for savings cooperatives serving motorcycle-taxi riders: onboarding, KYC, wallets, loans and welfare on an append-only ledger.",
    chips: ["Spring Boot", "Kafka", "PostgreSQL", "Redis", "Grafana"],
    tag: "CORE BANKING",
    title: "BodaPlus: core banking for motorcycle-taxi savings cooperatives",
    subtitle:
      "Replacing paper, WhatsApp screenshots and cash with an auditable, multi-tenant banking platform.",
    role: "Tech lead & architect",
    client: "Financial-inclusion initiative for SACCOs",
    status: "Heading to production rollout",
    stack: "Java 25, Spring Boot 4, Spring Cloud, Kafka, PostgreSQL, Redis",
    problem: [
      "Boda boda (motorcycle-taxi) riders across Kenya pool their savings through SACCOs: member-owned cooperatives that collect contributions, issue loans and run welfare funds. Most run on paper records, WhatsApp screenshots and cash, so balances are hard to audit and loans take days.",
      "The platform had to give every SACCO a full banking back end on shared infrastructure, without any tenant's data ever touching another's.",
    ],
    archNote:
      "All traffic enters through one gateway, the only place tokens are verified. Services discover each other via Eureka, publish events through a transactional outbox to Kafka, and every business service gets its own database per tenant.",
    top: ["Rider, SACCO & bank apps", "M-Pesa (STK Push, paybill, QR)", "Agency banking"],
    services: ["Identity & access", "CRM & KYC", "Finance & loans", "Tenant provisioning", "Audit & reporting"],
    bottom: ["Double-entry ledger", "Kafka outbox events", "DB per tenant per service"],
    highlights: [
      {
        t: "A ledger engine with five invariants",
        d: "Every money movement goes through one posting engine that enforces idempotency (M-Pesa IDs as keys), balanced debits and credits, row locks on accounts and wallets, atomicity with the caller's transaction, and immutability: a database trigger blocks edits, so corrections are reversals.",
      },
      {
        t: "Hard multi-tenancy, provisioned automatically",
        d: "Onboarding a SACCO creates a database for each service and announces it over Kafka so services seed roles and templates. At runtime, the tenant code from the gateway routes each request to its database; pools and Flyway migrations are created on first use. Offboarding blocks the tenant at the gateway before tearing down.",
      },
      {
        t: "A gateway built as the trust boundary",
        d: "ECDSA-signed tokens verified against cached public keys, sessions bound to device fingerprint and IP subnet in Redis, client-injected identity headers stripped before trusted ones are written, plus Redis rate limiting and retries with exponential backoff.",
      },
      {
        t: "Reliable events with a transactional outbox",
        d: "Events are saved in the same transaction as the business change, published immediately after commit, and swept by a poller across all tenants every five seconds. Row locks guarantee exactly one publisher per event.",
      },
      {
        t: "A loan engine with pluggable rules",
        d: "Full lifecycle from application to disbursement, schedule, repayment and penalties. Eligibility and guarantor checks are composable rule chains, guarantees lock part of the guarantor's savings, and members are verified against the national ID and tax registries.",
      },
      {
        t: "Observability and safe delivery",
        d: "Metrics, logs and traces in Prometheus, Loki, Tempo and Grafana, with trace IDs returned in every API response. Jenkins builds and ships only the services that changed, and a pre-commit hook stops anyone editing an applied migration.",
      },
    ],
    stats: [
      { v: "14", l: "microservices designed and led" },
      { v: "5", l: "invariants enforced on every ledger posting" },
      { v: "4", l: "notification channels: email, SMS, push, in-app" },
    ],
    outcome: [
      "I lead the engineering team through service design, the financial engine and mobile-money integration, taking the platform from initial build toward production rollout.",
      "Cash-and-paper record-keeping becomes an auditable digital bank: every balance can be rebuilt from the ledger at any point in its history.",
    ],
    skills: [
      "Microservices architecture",
      "Multi-tenancy",
      "Double-entry accounting",
      "Event-driven design",
      "Application security",
      "Observability",
      "CI/CD",
      "Technical leadership",
    ],
  },
  {
    slug: "mifugo360",
    name: "Mifugo360",
    cardTag: "BIOMETRICS · BACKEND ARCHITECT",
    year: "2025",
    blurb:
      "Biometric identity for livestock: muzzle prints detected, embedded and matched by cosine similarity, giving close to 2 million cattle a unique digital ID.",
    chips: ["Spring Boot", "Computer vision", "Vector search", "AWS"],
    tag: "BIOMETRIC IDENTITY",
    title: "Mifugo360: a digital identity for close to 2 million cattle",
    subtitle:
      "Muzzle-print biometrics that let a World Bank-supported vaccine subsidy programme verify every animal.",
    role: "Backend architect",
    client: "World Bank-supported vaccine subsidy programme",
    status: "Nationwide onboarding",
    stack: "Java 17, Spring Boot 3, MariaDB, AWS S3 & EC2, Python ML services",
    problem: [
      "A subsidy programme needs to know every vaccinated animal is real and counted once. Ear tags are easy to fake, remove or transfer. A cattle muzzle print, like a fingerprint, is unique, stable for life, and can be photographed with a smartphone.",
      "Identification had to be fast and reliable in the field, scale to close to 2 million cattle across Kenya, and connect to dairy cooperatives, banks and county veterinary offices.",
    ],
    archNote:
      "A Spring Boot backend orchestrates the biometric pipeline; detection and embedding models run as Python services on AWS. Images live in S3, animal records and embeddings in MariaDB.",
    top: ["Field app (vets & animal health assistants)", "Partner SDK", "Dairy co-op & bank sync"],
    services: ["Muzzle detection", "Crop normalisation", "768-d embedding", "Duplicate check", "Re-identification"],
    bottom: ["Animal registry", "Cosine similarity", "Unique digital ID"],
    highlights: [
      {
        t: "An end-to-end biometric pipeline",
        d: "Muzzles are located on-device or by a YOLO detection service (with a fallback model and cooldown), cropped to a normalised square, converted to a 768-dimension embedding, and matched by cosine similarity. I also built the in-process Java/PyTorch path that serves as a fallback.",
      },
      {
        t: "Two matching problems, two thresholds",
        d: "Registration flags probable duplicates only at high similarity (0.87), so real animals aren't blocked; field re-identification accepts more variation (0.3) for light, angle and mud. Flagged duplicates go to veterinary supervisors through a review workflow.",
      },
      {
        t: "Concurrency for busy onboarding days",
        d: "A vet and an assistant can register animals for the same farmer at the same moment from different phones. A per-farmer lock, a database row lock, a separate transaction for ID assignment and deadlock retries with backoff keep IDs unique and registrations complete.",
      },
      {
        t: "Designing vector search for millions of animals",
        d: "I designed the move to a dedicated FAISS index service: outbox-based sync so index and database never drift, farmer-, ward- and national-scoped indexes, and a feature-flag rollout from shadow mode to primary with database fallback.",
      },
      {
        t: "A partner ecosystem",
        d: "An SDK with long-lived partner tokens for external onboarding organisations, asynchronous sync to a dairy cooperative so milk payments trace back to a verified animal, bank account opening via the core banking system, and resilient Excel imports of field workers.",
      },
      {
        t: "Every identification is traceable",
        d: "Each lookup records the original and cropped images, match, confidence, GPS location and the field agent who made it, and an AOP aspect logs per-endpoint latency without touching controller code.",
      },
    ],
    stats: [
      { v: "~2M", l: "cattle onboarded with a verifiable identity" },
      { v: "768", l: "dimensions in every muzzle embedding" },
      { v: "5", l: "stages from photo to digital ID" },
    ],
    outcome: [
      "Close to 2 million cattle onboarded across Kenya, each with a verifiable identity for subsidy disbursement and tracking.",
      "The registry connects to a livestock research body, a dairy partner, a bank and the E-Voucher subsidy platform.",
    ],
    skills: [
      "ML pipeline integration",
      "Computer vision",
      "Vector similarity search",
      "Concurrency control",
      "AWS (S3, EC2)",
      "Partner APIs & SDKs",
      "Java ↔ Python services",
    ],
  },
  {
    slug: "e-voucher",
    name: "E-Voucher",
    cardTag: "GOVTECH PAYMENTS · TEAM LEAD",
    year: "2025",
    blurb:
      "Digital vaccine-subsidy vouchers: farmers co-pay by M-Pesa, and an allocation engine splits every vaccination across nine stakeholder types and pays them through a partner bank.",
    chips: ["Spring Boot", "M-Pesa", "Bank APIs", "MariaDB"],
    tag: "GOVTECH PAYMENTS",
    title: "E-Voucher: paying nine parties correctly for every vaccinated animal",
    subtitle:
      "A World Bank-supported programme that collected and distributed over KES 10 million in vaccine subsidies.",
    role: "Team lead & backend architect",
    client: "National livestock agency & county programme",
    status: "Live",
    stack: "Java 17, Spring Boot 3, MariaDB, M-Pesa, partner bank API",
    problem: [
      "Kenya subsidises Foot-and-Mouth Disease vaccines for cattle farmers. Paying out that subsidy across nine parties (field agents, vets, cooperatives, the vaccine supplier, county government, professional bodies and the platform) was manual and slow.",
      "The platform had to issue each farmer a digital voucher, collect their co-payment by phone, calculate every stakeholder's share, pay them by bank transfer or M-Pesa, and stay in sync with the national farmer registry and the Mifugo360 field app.",
    ],
    archNote:
      "A deliberately simple monolith for a small team and a focused rollout. It collects via M-Pesa STK Push, allocates through a strategy-based engine, and disburses through a signed partner bank API.",
    top: ["Farmer (M-Pesa STK Push)", "National farmer registry", "Mifugo360 field app"],
    services: ["Vouchers", "Redemptions", "Allocation engine", "Disbursement", "Callback processing"],
    bottom: ["9 typed allocation tables", "Bank transfers & M-Pesa B2C", "Idempotency guards"],
    highlights: [
      {
        t: "Two ways to onboard farmers",
        d: "A bulk import from the national registry (fetched sequentially to respect its rate limits, processed in parallel with each record in its own transaction, and matched with fallbacks for messy registry data), and real-time activation from the Mifugo360 field app that issues a voucher and texts the farmer their code.",
      },
      {
        t: "Collecting at the point of vaccination",
        d: "The field agent redeems a voucher, the farmer gets an M-Pesa STK Push for their co-payment, and the async callback is matched by its checkout request ID before the balance moves. Partial redemptions keep the voucher open.",
      },
      {
        t: "An allocation engine for nine stakeholders",
        d: "One strategy per stakeholder type, one orchestrator, and typed tables for fast reporting. Wards are processed in parallel; national totals are queued and written serially so there's no contention.",
      },
      {
        t: "Secure bank disbursement",
        d: "OAuth2 plus SHA-512 request signing on every bank call, AES-encrypted credentials per county account, M-Pesa B2C for individuals and internal transfers for institutions, and large payments split automatically to stay within bank limits.",
      },
      {
        t: "Built so no one is paid twice",
        d: "Three separate idempotency guards make every step safe to re-run, bank callbacks are logged and processed by a retrying job, and allocation is triggered by an admin after review so auditors see the data before money moves.",
      },
    ],
    stats: [
      { v: "KES 10M+", l: "collected and distributed" },
      { v: "9", l: "stakeholder types paid per vaccination" },
      { v: "3", l: "idempotency guards between a vaccination and a payout" },
    ],
    outcome: [
      "Over KES 10 million collected from farmers and distributed to vaccine providers, county and national bodies, and the field workers who vaccinated the animals.",
      "I led the team end to end: technical architecture, sprint planning, and coordination with stakeholders and integration partners.",
    ],
    skills: [
      "Payment integrations",
      "M-Pesa (STK Push, B2C)",
      "Bank APIs & request signing",
      "Batch & parallel processing",
      "Idempotency",
      "Encryption at rest",
      "Team leadership",
    ],
  },
  {
    slug: "supply-chain-finance",
    name: "Supply Chain Finance",
    cardTag: "TRADE FINANCE · BACKEND ARCHITECT",
    year: "2025",
    blurb:
      "Reverse factoring for a commercial bank: suppliers get paid early on approved invoices, with digital KYC, a configurable fee engine, USSD access and four-eyes approval throughout.",
    chips: ["Spring Cloud", "Keycloak", "AWS S3", "USSD"],
    tag: "SUPPLY CHAIN FINANCE",
    title: "Supply Chain Finance: getting suppliers paid in days, not months",
    subtitle:
      "A 10-service reverse-factoring platform connecting banks, anchor buyers and suppliers.",
    role: "Backend architect",
    client: "A commercial bank in the DRC",
    status: "Delivered & accepted by client",
    stack: "Java, Spring Boot 3, Spring Cloud, MySQL 8, AWS S3, Keycloak",
    problem: [
      "SME suppliers wait 30 to 90 days to be paid by large buyers. That gap limits the stock they can carry, the staff they can hire and the orders they can take.",
      "Reverse factoring lets a bank pay the supplier a discounted amount today while the buyer settles on the due date. The platform had to digitise the whole flow: onboarding all three parties, programmes, invoices, early payment, disbursement, repayment and reconciliation.",
    ],
    archNote:
      "Ten services behind a gateway, discovered via Eureka and calling each other through Feign. KYC runs against identity, business-registry and telco checks; disbursement is confirmed by callbacks from the bank's core system.",
    top: ["Web & mobile apps", "USSD", "Bank core system callbacks"],
    services: ["Onboarding & KYC", "Programmes & pricing", "Invoices", "Early payment engine", "Reconciliation"],
    bottom: ["6-entry transaction ledger", "Maker-checker", "Versioned documents"],
    highlights: [
      {
        t: "The full financing lifecycle",
        d: "Onboarding, programme setup, invoice approval, early-payment request, disbursement callback, bulk repayment and reconciliation, with credit limits tracked and restored at programme, financier and per-supplier level.",
      },
      {
        t: "A configurable fee engine",
        d: "Percentage pricing (fixed, revenue share, or time-value discount rate), flat fees, and tiered rate slabs uploaded from Excel. Tax rates are configuration, so the platform adapts to DRC rules without redeployment.",
      },
      {
        t: "Payments as a ledger",
        d: "Every early payment writes six records (platform fee, bank fee, VAT, excise duty, disbursed amount, remittance charges), each with a readable transaction ID, giving finance teams an exact per-invoice trail.",
      },
      {
        t: "Generic four-eyes approval",
        d: "Any create, update or delete on any controlled entity is held as a pending change and applied only when a different user approves. Adding approval to a new entity is a one-line change.",
      },
      {
        t: "USSD for suppliers without smartphones",
        d: "The full early-payment flow (login, invoice lookup, amount, payout channel and fee summary) works on any phone, built as a state machine where each menu step is a small, testable handler.",
      },
      {
        t: "Digital KYC, documents and notifications",
        d: "Business and individual verification with SIM-swap fraud checks, versioned document storage that switches between S3 and on-premises by config, and 50+ notification templates across email, SMS and push.",
      },
    ],
    stats: [
      { v: "10", l: "services in the platform" },
      { v: "6", l: "ledger entries per early payment" },
      { v: "50+", l: "notification templates across 3 channels" },
    ],
    outcome: [
      "Delivered and accepted by the client, pending production deployment.",
      "Manual onboarding replaced with multi-level digital KYC and role-based access, and the same codebase runs in two environments through feature flags.",
    ],
    skills: [
      "Trade finance",
      "Pricing & fee engines",
      "Workflow state machines",
      "KYC / KYB integration",
      "USSD",
      "Microservices",
      "Document management",
    ],
  },
  {
    slug: "dealer-finance",
    name: "Dealer Finance",
    cardTag: "LENDING · BACKEND ARCHITECT",
    year: "2025",
    blurb:
      "Working-capital loans for vehicle dealers at a licensed microfinance bank: three-step approval, tax-compliant fees, fine-grained authorization and a full audit trail.",
    chips: ["Spring Cloud Gateway", "Keycloak UMA", "Kafka", "Jenkins + Ansible"],
    tag: "LENDING",
    title: "Dealer Finance: auditable stock loans for vehicle dealers",
    subtitle:
      "A loan engine with approval at both the dealer and the bank, fees computed to the Kenya Finance Act, and security you can prove with tests.",
    role: "Backend architect",
    client: "A licensed Kenyan microfinance bank",
    status: "Delivered, pre-deployment",
    stack: "Java 17, Spring Boot 3, Spring Cloud, Keycloak, MySQL, Kafka",
    problem: [
      "Dealers need short-term capital to order vehicles before they've sold them. The bank needs to know each loan went to the manufacturer and nowhere else.",
      "The existing process was manual and slow. The bank needed structured credit facilities, approval at two levels, automatic overdue handling and a clean audit trail for every lending decision.",
    ],
    archNote:
      "Nine services behind Spring Cloud Gateway with central token validation; services trust each other via signed API keys. A shared audit library runs in every service and publishes to the database or Kafka.",
    top: ["Dealer portal", "Bank portal", "Manufacturer portal"],
    services: ["Auth (Keycloak UMA)", "Onboarding", "Programmes & pricing", "Loan engine", "Notifications"],
    bottom: ["5-entry ledger on disbursement", "Audit events", "Email, SMS, push"],
    highlights: [
      {
        t: "Three-step approval without over-lending",
        d: "A dealer maker requests, a dealer checker approves, and the bank's credit team gives final approval. Available credit counts every loan still in the pipeline, so concurrent requests can't over-commit a facility.",
      },
      {
        t: "Tax-compliant fees and overdue handling",
        d: "Fees matched to the repayment tenure, with interest, excise duty, VAT and remittance charges. A daily scheduler applies grace periods, a one-time penalty and daily past-due interest, capped at the principal as the law requires.",
      },
      {
        t: "Fine-grained authorization",
        d: "Keycloak UMA permissions with data scopes for borrower, buyer and lender views. An ownership guard on every query prevents users reading each other's data (IDOR) and blocks privilege escalation, and caller-supplied filters are silently replaced by the caller's scope.",
      },
      {
        t: "An audit library every service shares",
        d: "One annotation audits an action. Every event carries correlation and trace IDs, personal data is stripped from failure messages, every allowed or denied permission check is recorded, and audit writes commit even if the business transaction rolls back.",
      },
      {
        t: "Security proven by tests",
        d: "Tests assert that a denied permission returns 403 and the underlying service is never called, that scopes override user input, and that no combination of token claims grants extra access. Refresh tokens are stored hashed and compared in constant time.",
      },
      {
        t: "Automated delivery",
        d: "A seven-stage Jenkins pipeline builds only the services that changed, versions and pushes images, and deploys with Ansible to on-premises servers. Secrets never enter the repository.",
      },
    ],
    stats: [
      { v: "9", l: "services in the platform" },
      { v: "3", l: "approval steps from request to disbursement" },
      { v: "5", l: "ledger entries generated per disbursement" },
    ],
    outcome: [
      "Delivered production-ready to the bank; currently pre-deployment.",
      "Bulk repayment via Excel upload, two-phase bank statement reconciliation, and notifications by email, SMS and push.",
    ],
    skills: [
      "Lending domain",
      "Authorization design",
      "Application security",
      "Audit & compliance",
      "Automated testing",
      "CI/CD (Jenkins, Ansible)",
      "Microservices",
    ],
  },
];

export function getStudy(slug: string) {
  return studies.find((s) => s.slug === slug);
}

export function nextStudy(slug: string) {
  const i = studies.findIndex((s) => s.slug === slug);
  return studies[(i + 1) % studies.length];
}
