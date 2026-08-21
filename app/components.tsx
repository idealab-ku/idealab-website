import Link from "next/link";
import { primaryNavigation, siteInfo } from "./content/site";
import { sitePath } from "./site-path";

export function Header() {
  return <header className="site-header"><div className="site-header-inner shell"><Link className="brand" href="/"><img src={sitePath("/media/brand/idea-logo-horizontal-tight.png")} alt={siteInfo.shortName} /></Link><nav aria-label="Primary navigation">{primaryNavigation.map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}</nav><details className="mobile-menu"><summary>Menu</summary><div>{primaryNavigation.map(({ label, href }) => <Link href={href} key={href}>{label}</Link>)}</div></details></div></header>;
}

export function Footer() {
  return <footer className="footer"><div className="shell footer-inner"><div><h3>Contact</h3><p><a href={`mailto:${siteInfo.contactEmail}`}>{siteInfo.contactEmail}</a><br />{siteInfo.university}, Seoul</p></div><div className="footer-brands"><Link href="/" aria-label={`${siteInfo.shortName} home`}><img className="footer-idea-logo" src={sitePath("/media/brand/idea-logo-fullname.png")} alt={`${siteInfo.shortName} — ${siteInfo.fullName}`} /></Link><a href={siteInfo.universityUrl} target="_blank" rel="noreferrer" aria-label={`${siteInfo.university} official website`}><img className="footer-ku-logo" src={sitePath("/media/brand/korea-university-logo.png")} alt={siteInfo.university} /></a></div><span>© {new Date().getFullYear()} {siteInfo.shortName}, {siteInfo.university}.</span></div></footer>;
}

export function PageHero({ index, eyebrow, title, intro }: { index:string; eyebrow:string; title:string; intro:string }) {
  return <section className="page-hero shell"><span className="page-index">{index}</span>{eyebrow !== title && <span className="page-eyebrow">{eyebrow}</span>}<h1>{title}</h1><p>{intro}</p></section>;
}

export function SiteFrame({ children }: { children: React.ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }
