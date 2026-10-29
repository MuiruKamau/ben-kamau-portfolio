import Image from "next/image";
import Link from "next/link";
import SectionLink from "@/components/SectionLink";
import { profile, studies } from "@/lib/content";

const impact = [
  { figure: "~2M", text: "cattle given a verifiable biometric ID for a World Bank-supported subsidy programme" },
  { figure: "KES 10M+", text: "in vaccine subsidies collected and distributed to nine stakeholder types" },
  { figure: "5", text: "production platforms architected: core banking, lending, trade finance, govtech payments, biometrics" },
  { figure: "14", text: "services in a multi-tenant core-banking platform I lead" },
];

const strengths = [
  {
    t: "Backend & distributed systems",
    d: "Java and Spring Boot microservices, gateways, service discovery, Kafka, transactional outboxes and multi-tenancy.",
  },
  {
    t: "Systems that move money",
    d: "Double-entry ledgers, loan engines, reconciliation, M-Pesa, and bank transfers: RTGS, EFT, B2B, B2C.",
  },
  {
    t: "Security & identity",
    d: "Keycloak, JWT and fine-grained access control; KYC against national identity, tax and credit-bureau systems.",
  },
  {
    t: "Frontend & product",
    d: "Backend-first, but I ship interfaces too: React and Next.js, designed around the APIs underneath. This site is one.",
  },
  {
    t: "Data & ML",
    d: "Python, pandas and data pipelines, plus running ML services in production behind a Java backend.",
  },
  {
    t: "Technical leadership",
    d: "Architecture, sprint planning and delivery with engineers, stakeholders and integration partners.",
  },
];

const bridge = [
  {
    from: "Idempotent, retry-safe payment APIs",
    to: "Payments an agent can make safely",
    d: "Agents retry, loop and get things wrong. A payment tool that can't charge twice is the first guardrail.",
  },
  {
    from: "Maker-checker approvals",
    to: "Permissions and human sign-off",
    d: "The four-eyes pattern I've shipped across lending platforms is exactly how an agent should propose an action and a person approve it.",
  },
  {
    from: "KYC & identity systems",
    to: "Knowing who, and what, is acting",
    d: "Verifying people against national registries and issuing IDs to 2 million animals taught me identity is the foundation of trust.",
  },
  {
    from: "Append-only ledgers & audit trails",
    to: "A record of what the agent did, and why",
    d: "When software acts on its own, the audit log stops being a compliance box and becomes the product.",
  },
];

const focus = [
  {
    t: "Agents inside regulated workflows",
    d: "Credit, payments, reconciliation and compliance: work that's repetitive and rules-heavy, where an agent with the right guardrails saves real time.",
  },
  {
    t: "Tools agents can use safely (MCP)",
    d: "Exposing ledgers, KYC checks and bank APIs as tools with scoped permissions, spending limits, idempotency and approval gates.",
  },
  {
    t: "Agent payments",
    d: "Stripe, Visa, Mastercard and others are building rails for agents that pay. I'm focused on how they meet M-Pesa and African banking.",
  },
  {
    t: "Testing before trusting",
    d: "Evaluating agent behaviour before it touches money, and logging every action so it can be explained afterwards.",
  },
  {
    t: "Shipping with agents every day",
    d: "Claude Code and Codex are part of how I build. As community manager at Nairobi AI Community, I've run meetups and webinars on data science and AI since 2023.",
  },
];

const experience = [
  {
    when: "Feb 2026 — Present",
    title: "Software Engineer · Stread Tech",
    desc: "Enterprise property management on Microsoft Business Central: architecture, module development and workflow integrations with business analysts.",
  },
  {
    when: "Feb 2025 — Present",
    title: "Software Engineer & Tech Lead · E&M Tech",
    desc: "Five platforms across core banking, trade finance, dealer lending, livestock biometrics and government payments. Bank integrations (B2B, IFT, RTGS, EFT, B2C). Team lead on E-Voucher and the Kanisa church management system; tech lead on BodaPlus.",
  },
  {
    when: "Jun — Dec 2024",
    title: "Data Engineer (freelance) · Omdena",
    desc: "Collected and cleaned large datasets and built preprocessing for ML pipelines; EDA and Tableau dashboards.",
  },
  {
    when: "Mar 2023 — Jan 2024",
    title: "Data Analyst, Bancassurance · NCBA Group",
    desc: "Reconciled premium collections worth KSh 30M a month and resolved discrepancies across KSh 200K+ in daily transactions.",
  },
  {
    when: "Jan 2023 — Present",
    title: "Community Manager · Nairobi AI Community",
    desc: "Content, webinars and meetups for data scientists, analysts and AI practitioners.",
  },
];

const skills = [
  { label: "LANGUAGES", items: ["Java", "Python", "SQL", "JavaScript", "R"] },
  { label: "FRAMEWORKS", items: ["Spring Boot", "Spring Cloud", "React", "Next.js"] },
  { label: "DATA & INFRA", items: ["PostgreSQL", "MySQL", "Kafka", "Redis", "Docker", "AWS"] },
  { label: "AI TOOLS", items: ["Claude Code", "Codex", "MCP"] },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="hero-copy">
            <div className="hero-id">
              <Image
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={72}
                height={72}
                className="avatar"
                priority
              />
              <div className="available">
                <span className="available-dot" aria-hidden="true" />
                Open to software engineering roles
              </div>
            </div>
            <h1>
              I&apos;m Ben Kamau, a software engineer who builds backend systems that can&apos;t afford to be wrong.
            </h1>
            <p className="hero-sub">
              I&apos;ve architected five production platforms for banks, government programmes and
              financial-inclusion projects in Kenya, from multi-tenant core banking to a biometric registry for
              2 million cattle. I lead teams from design to delivery, build the frontend when the product needs
              it, and I&apos;m now building AI agents on the same foundations.
            </p>
            <div className="hero-stack">Java · Spring Boot · Kafka · PostgreSQL · AWS · React · Next.js</div>
            <div className="hero-actions">
              <SectionLink id="work" className="btn btn-primary">
                See my work
              </SectionLink>
              <a href={profile.cv} className="btn btn-outline" download>
                Download CV
              </a>
            </div>
            <div className="hero-meta">
              <span>{profile.location}</span>
              <span>·</span>
              <span>UTC+3</span>
              <span>·</span>
              <span>Remote, hybrid or relocation</span>
              <span>·</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <span>·</span>
              <a href={profile.linkedin}>LinkedIn</a>
            </div>
          </div>
          <div className="ledger" aria-label="Impact">
            <div className="ledger-head">
              <span>IMPACT</span>
              <span>LEDGER</span>
            </div>
            {impact.map((row) => (
              <div key={row.figure} className="ledger-row">
                <span className="ledger-figure">{row.figure}</span>
                <span className="ledger-text">{row.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="section wash">
        <div className="wrap stack-lg">
          <div className="work-head">
            <div className="head-stack">
              <div className="eyebrow">01 · Selected work</div>
              <h2 className="h2">Case studies</h2>
            </div>
            <p className="lead">
              The code is private and client names are withheld, so each study walks through the problem, the
              architecture, what I built and the results.
            </p>
          </div>
          <div className="cards">
            {studies.map((s) => (
              <Link key={s.slug} href={`/work/${s.slug}`} className="card">
                <div className="card-meta">
                  <span>{s.cardTag}</span>
                  <span>{s.year}</span>
                </div>
                <h3>{s.name}</h3>
                <p>{s.blurb}</p>
                <div className="chips">
                  {s.chips.map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
                <span className="card-cta">Read case study →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap stack-lg">
          <div className="head-stack">
            <div className="eyebrow">02 · What I do</div>
            <h2 className="h2">Where I&apos;m strongest</h2>
          </div>
          <div className="strengths">
            {strengths.map((s) => (
              <div key={s.t} className="strength">
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ai" className="section wash">
        <div className="wrap stack-lg">
          <div className="ai-intro">
            <div className="head-stack">
              <div className="eyebrow">03 · What I&apos;m building</div>
              <h2 className="h2">AI agents that can be trusted with money</h2>
            </div>
            <div className="prose">
              <p>
                Agents are moving out of demos and into real businesses: paying, approving, underwriting and
                reconciling on someone&apos;s behalf. The hard part isn&apos;t the model. It&apos;s everything
                around it: how an agent pays, what it&apos;s allowed to do, who it is, and the record of what it
                did.
              </p>
              <p>
                That&apos;s the infrastructure I&apos;ve spent years building for banks and government programmes.
                Now I&apos;m building agents on top of it.
              </p>
            </div>
          </div>
          <div className="bridge">
            {bridge.map((b) => (
              <div key={b.from} className="bridge-card">
                <div className="bridge-from">
                  <span className="bridge-label">WHAT I&apos;VE BUILT</span>
                  <span className="bridge-title">{b.from}</span>
                </div>
                <div className="bridge-to">
                  <span className="bridge-label">WHAT AGENTS NEED</span>
                  <span className="bridge-title">{b.to}</span>
                  <span className="bridge-text">{b.d}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="learning">
            <div className="head-stack">
              <h3 className="h2 h2-sm">Where I&apos;m focused</h3>
              <p className="lead">
                Where I want to be: at a startup putting agents into production where mistakes cost real money,
                whether that&apos;s fintech, agent infrastructure, or AI built for African markets.
              </p>
            </div>
            <ol className="learning-list">
              {focus.map((l, i) => (
                <li key={l.t}>
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <span className="item-title">{l.t}</span>
                    <span className="item-text">{l.d}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="wrap exp">
          <div className="exp-side">
            <div className="eyebrow">04 · Experience</div>
            <h2 className="h2">Where I&apos;ve worked</h2>
            <p className="lead">
              B.Sc. Actuarial Science, University of Nairobi, Second Class Upper. Data Science, Moringa School.
              A quantitative foundation for financial systems.
            </p>
            <div className="skill-groups">
              {skills.map((g) => (
                <div key={g.label} className="skill-group">
                  <span>{g.label}</span>
                  <div className="chips">
                    {g.items.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="exp-list">
            {experience.map((e) => (
              <div key={e.title} className="exp-row">
                <span className="exp-when">{e.when}</span>
                <div className="exp-what">
                  <span className="exp-title">{e.title}</span>
                  <span className="exp-desc">{e.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
