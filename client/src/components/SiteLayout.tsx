import { Link, useLocation } from 'wouter';
import { Menu, X, ExternalLink, ShieldCheck } from 'lucide-react';
import { useState } from 'react';
import { siteSettings } from '@/lib/siteData';

const links = [
  ['HOME', '/'], ['ABOUT', '/about'], ['ROLEPLAY', '/roleplay'], ['DEPARTMENTS', '/departments'], ['OWNERSHIP', '/ownership'], ['RULES', '/rules'], ['APPLICATIONS', '/applications'], ['STATUS', '/status'],
];

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [location] = useLocation();

  return <div className="site-shell redesign-shell">
    <header className="masthead redesign-masthead">
      <div className="masthead-inner">
        <Link href="/" className="brand-lockup redesign-brand" onClick={() => setOpen(false)}>
          <img src="/springfield-logo.webp" alt="Springfield 1980 Roleplay" className="brand-logo" />
          <span className="brand-name redesign-brand-name">Springfield 1980 Roleplay</span>
        </Link>
        <button className="mobile-menu redesign-menu" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}>{open ? <X size={32} /> : <Menu size={32} />}</button>
        <nav id="primary-navigation" className={`main-nav redesign-nav ${open ? 'is-open' : ''}`} aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={location === href ? 'active' : ''} aria-current={location === href ? 'page' : undefined}>{label}</Link>)}
          <a href={siteSettings.discordUrl} target="_blank" rel="noreferrer" className="discord-link">DISCORD <ExternalLink size={12} /></a>
        </nav>
      </div>
    </header>
    <main id="main-content">{children}</main>
    <footer className="footer redesign-footer" aria-label="Site information">
      <div className="footer-inner">
        <div><div className="footer-brand"><img src="/springfield-logo.webp" alt="" className="footer-logo" /><div className="footer-title">Springfield 1980 Roleplay</div></div><p>A Roblox ERLC roleplay community built around 1980s scenes, regular sessions, and people who want something to do when they join.</p></div>
        <div className="footer-meta"><span>ROBLOX ERLC</span><span>SPRINGFIELD 1980</span><span><ShieldCheck size={13} /> COMMUNITY SITE</span></div>
      </div>
      <div className="footer-bottom">© 1980's Springfield RP · A community website for a Roblox experience. Not affiliated with Roblox Corporation.</div>
    </footer>
  </div>;
}

export function SectionHeading({ kicker, title, intro }: { kicker: string; title: string; intro?: string }) {
  return <div className="section-heading"><div className="section-heading-top"><div className="section-kicker">{kicker}</div><div className="section-seal" aria-hidden="true"><span>★</span></div></div><h1>{title}</h1>{intro && <p>{intro}</p>}<div className="section-record-line"><span>SPRINGFIELD COMMUNITY</span><span>1980 ROLEPLAY</span></div></div>;
}

export function PageFrame({ children, kicker, title, intro }: { children: React.ReactNode; kicker: string; title: string; intro?: string }) {
  return <SiteLayout><div className="page-frame">{<SectionHeading kicker={kicker} title={title} intro={intro} />}{children}</div></SiteLayout>;
}
