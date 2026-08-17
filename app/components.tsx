const nav = [
  ["Research", "/research"], ["People", "/people"], ["Publications", "/publications"],
  ["Teaching", "/teaching"], ["Lab life", "/lab-life"], ["Join us", "/join"],
];

export function Header() {
  return <header className="site-header shell"><a className="brand" href="/"><img src="/media/idea-logo.png" alt="IDEA Lab" /></a><nav aria-label="Primary navigation">{nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</nav><details className="mobile-menu"><summary>Menu</summary><div>{nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div></details></header>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-inner"><div><h3>Contact</h3><p><a href="mailto:seongkukang@korea.ac.kr">seongkukang@korea.ac.kr</a><br />Korea University, Seoul</p></div><img src="/media/idea-logo.png" alt="IDEA Lab" /><span>© 2026 IDEA Lab, Korea University.</span></div></footer>;
}

export function PageHero({ index, eyebrow, title, intro }: { index:string; eyebrow:string; title:string; intro:string }) {
  return <section className="page-hero shell"><span className="page-index">{index}</span><h1>{eyebrow}</h1><p>{intro}</p></section>;
}

export function SiteFrame({ children }: { children: React.ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }
