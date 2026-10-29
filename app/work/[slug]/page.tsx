import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionLink from "@/components/SectionLink";
import { getStudy, nextStudy, studies } from "@/lib/content";

export function generateStaticParams() {
  return studies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const s = getStudy(slug);
  if (!s) return {};
  return { title: `${s.name} · Benson Kamau`, description: s.subtitle };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const s = getStudy(slug);
  if (!s) notFound();
  const next = nextStudy(slug);

  const facts = [
    { label: "ROLE", value: s.role },
    { label: "CLIENT", value: s.client },
    { label: "STATUS", value: s.status },
    { label: "STACK", value: s.stack },
  ];

  return (
    <article>
      <section className="cs-hero">
        <div className="wrap">
          <SectionLink id="work" className="back-link">
            ← All work
          </SectionLink>
          <div className="eyebrow">Case study · {s.tag}</div>
          <h1>{s.title}</h1>
          <p className="cs-sub">{s.subtitle}</p>
        </div>
      </section>

      <section className="facts-band">
        <div className="facts">
          {facts.map((f) => (
            <div key={f.label} className="fact">
              <span className="fact-label">{f.label}</span>
              <span className="fact-value">{f.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap cs-row">
          <h2>The problem</h2>
          <div className="cs-prose">
            {s.problem.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap cs-col">
          <div className="cs-row">
            <h2>Architecture</h2>
            <div className="cs-prose">
              <p>{s.archNote}</p>
            </div>
          </div>
          <div className="diagram" role="img" aria-label={`Architecture of ${s.name}`}>
            <div className="diagram-row">
              {s.top.map((t) => (
                <div key={t} className="diagram-edge">
                  {t}
                </div>
              ))}
            </div>
            <div className="diagram-link" />
            <div className="diagram-services">
              {s.services.map((sv) => (
                <div key={sv} className="diagram-service">
                  {sv}
                </div>
              ))}
            </div>
            <div className="diagram-link" />
            <div className="diagram-row">
              {s.bottom.map((b) => (
                <div key={b} className="diagram-core">
                  {b}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap cs-row">
          <h2>What I built</h2>
          <ol className="decisions">
            {s.highlights.map((d, i) => (
              <li key={d.t}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <span className="item-title">{d.t}</span>
                  <span className="item-text">{d.d}</span>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap cs-col">
          <div className="cs-row">
            <h2>Outcome</h2>
            <div className="cs-prose">
              {s.outcome.map((o) => (
                <p key={o}>{o}</p>
              ))}
            </div>
          </div>
          <div className="cs-stats">
            {s.stats.map((st) => (
              <div key={st.l} className="cs-stat">
                <span className="ledger-figure">{st.v}</span>
                <span className="ledger-text">{st.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="wrap cs-row">
          <h2>Skills demonstrated</h2>
          <div className="chips chips-lg">
            {s.skills.map((sk) => (
              <span key={sk} className="chip">
                {sk}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="next-band">
        <div className="wrap">
          <div>
            <span className="bridge-label">NEXT CASE STUDY</span>
            <br />
            <Link href={`/work/${next.slug}`} className="next-link">
              {next.name} →
            </Link>
          </div>
          <SectionLink id="work" className="btn btn-light">
            Back to all work
          </SectionLink>
        </div>
      </section>
    </article>
  );
}
