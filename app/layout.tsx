import type { Metadata } from "next";
import Link from "next/link";
import { Fraunces, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import HashCleaner from "@/components/HashCleaner";
import SectionLink from "@/components/SectionLink";
import { profile } from "@/lib/content";
import "./globals.css";

const serif = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
  axes: ["opsz"],
});

const sans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Benson Kamau · Software Engineer",
  description:
    "Backend-first software engineer in Nairobi. Distributed systems, financial infrastructure and identity platforms, now building AI agents that can be trusted with money.",
};

const nav = [
  { label: "Work", id: "work" },
  { label: "AI", id: "ai" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <HashCleaner />
        <header className="site-header">
          <div className="wrap">
            <Link href="/" className="brand">
              {profile.name}
            </Link>
            <nav className="site-nav" aria-label="Main">
              {nav.map((n) => (
                <SectionLink key={n.id} id={n.id} className="nav-link">
                  {n.label}
                </SectionLink>
              ))}
              <a href={profile.cv} className="btn btn-primary" download>
                Download CV
              </a>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer id="contact" className="site-footer">
          <div className="wrap">
            <h2>Hiring a software engineer, or building something new? Let&apos;s talk.</h2>
            <p className="lead">
              I&apos;m looking for a full-time role, ideally at a startup or on a team shipping AI into products
              where reliability matters. Remote, hybrid in Nairobi, or relocation.
            </p>
            <div className="footer-links">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={profile.linkedin}>linkedin.com/in/benkamau</a>
              <a href={profile.github}>github.com/MuiruKamau</a>
              <a href={profile.cv} download>
                CV (PDF)
              </a>
            </div>
            <div className="footer-base">
              <span>© 2026 {profile.name}</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
