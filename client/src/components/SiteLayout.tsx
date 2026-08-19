// County Record Office style: official civic masthead, indexed navigation, and restrained public-information framing.
import { Link, useLocation } from 'wouter';
import { Menu, X, ExternalLink, Radio, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { siteSettings } from '@/lib/siteData';

const links = [
  ['HOME', '/'], ['ABOUT', '/about'], ['ROLEPLAY', '/roleplay'], ['DEPARTMENTS', '/departments'], ['OWNERSHIP', '/ownership'], ['RULES', '/rules'], ['APPLICATIONS', '/applications'], ['STATUS', '/status'],
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();
  return <div className="site-shell">
    <div className="top-strip"><span>Made by ActiCMS</span><span className="top-strip-right">ROBLOX ERLC COMMUNITIES</span></div>
    <header className="masthead">
      <div className="masthead-inner">
        <Link href="/" className="brand-lockup" onClick={() => setOpen(false)}>
          <div className="seal-small"><span>★</span><i /></div>
          <div><div className="brand-name">SPRINGFIELD</div><div className="brand-sub">ROLEPLAY · EST. 1980</div></div>
        </Link>
        <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={`main-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={location === href ? 'active' : ''}>{label}</Link>)}
          <a href={siteSettings.discordUrl} target="_blank" rel="noreferrer" className="discord-link">DISCORD <ExternalLink size={12} /></a>
        </nav>
      </div>
    </header>
    <div className="status-bar"><div><span className="status-dot" /> ROBLOX ERLC SERVER CHECK</div><div className="status-unavailable"><Radio size={13} /> LIVE CHECK NOT CONNECTED · STATUS PENDING</div></div>
    <main>{children}</main>
    <footer className="footer"><div className="footer-inner"><div><div className="footer-brand"><div className="seal-small"><span>★</span><i /></div><div className="footer-title">SPRINGFIELD</div></div><p>1980's Springfield RP is a Roblox ERLC community where organized departments, civilian life, and regular sessions all share the same county.</p></div><div className="footer-meta"><span>SPRINGFIELD COUNTY</span><span>SPRINGFIELD COUNTY · 1980</span><span><ShieldCheck size={13} /> KEEPING THE COUNTY MOVING</span></div></div><div className="footer-bottom">© 1980's Springfield RP · A community website for a Roblox experience. Not affiliated with Roblox Corporation.</div></footer>
  </div>;
}

export function SectionHeading({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return <div className="section-heading"><div className="section-heading-top"><div className="section-kicker">{kicker}</div><div className="section-seal" aria-hidden="true"><span>★</span></div></div><h1>{title}</h1>{intro && <p>{intro}</p>}<div className="section-record-line"><span>SPRINGFIELD COUNTY FILE</span><span>PUBLIC RECORD</span></div></div>;
}

export function PageFrame({ children, kicker, title, intro }: { children: React.ReactNode; kicker: string; title: string; intro?: string }) {
  return <SiteLayout><div className="page-frame"><SectionHeading kicker={kicker} title={title} intro={intro} />{children}</div></SiteLayout>;
}
