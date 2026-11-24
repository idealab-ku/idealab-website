import { Footer, Header, NewsTitle } from "./components";
import { recentNews } from "./content/news";
import { researchAreas } from "./content/research";
import { siteInfo } from "./content/site";
import { JsonLd, pageMetadata } from "./seo";
import { sitePath } from "./site-path";

export const metadata = pageMetadata({
  title: "IDEA Lab — Korea University",
  description: "IDEA Lab at Korea University researches knowledge structuring and evolution, information retrieval, and recommender systems.",
  path: "/",
  image: "/favicon-512.png",
});

export default function Home() {
  const organizationId = `${siteInfo.url}/#organization`;

  return <><JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteInfo.url}/#website`,
        url: siteInfo.url,
        name: siteInfo.shortName,
        alternateName: siteInfo.fullName,
        publisher: { "@id": organizationId },
        inLanguage: "en",
      },
      {
        "@type": "ResearchOrganization",
        "@id": organizationId,
        name: siteInfo.fullName,
        alternateName: siteInfo.shortName,
        url: siteInfo.url,
        logo: `${siteInfo.url}${sitePath("/favicon-512.png")}`,
        email: siteInfo.contactEmail,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Seoul",
          addressCountry: "KR",
        },
        parentOrganization: {
          "@type": "CollegeOrUniversity",
          name: siteInfo.university,
          url: siteInfo.universityUrl,
        },
        knowsAbout: [
          "Knowledge structuring and evolution",
          "Information retrieval",
          "Recommender systems",
          "Personalization",
          "Large language models",
        ],
      },
    ],
  }} /><Header /><main>
    <section className="home-hero shell">
      <div className="home-copy">
        <h1>Intelligent Data Science &amp;<br />Applications Lab, Korea University</h1>
        <p>We develop intelligent systems that help people navigate overwhelming information. We deliver relevant, high-quality, and actionable insights for each user’s context and needs.</p>
      </div>
      <img className="home-photo" src={sitePath("/media/lab-life/home-hero-dasfaa-context.png")} alt="IDEA Lab members at DASFAA" />
    </section>

    <section className="home-section news-section">
      <div className="shell"><div className="home-title-row"><h2>Recent News</h2><a href={sitePath("/news")}>View all →</a></div>
      <div className="home-news" role="region" aria-label="Recent news. Scroll vertically for more updates.">{recentNews.map((item)=><article className={item.image ? "" : "news-without-image"} key={item.id}><div className="news-copy"><div className="news-meta"><span className="news-type">{item.category}</span><span className="news-meta-separator" aria-hidden="true">·</span><span className="news-date">{item.venueLabel ?? (item.venue ? `${item.venue} ${item.year}` : item.year)}</span></div><p><NewsTitle title={item.title} href={item.href} linkLabel={item.linkLabel} /></p></div>{item.image && <img src={sitePath(item.image)} alt="" />}</article>)}</div></div>
    </section>

    <section className="home-section research-overview shell"><h2>Research Areas</h2><p className="section-intro">We structure and continually refine knowledge to help people find relevant information and discover what matters to them.</p><div className="area-cards">
      {researchAreas.map((area)=><a href={sitePath(`/research#${area.id}`)} key={area.id}><h3>{area.title}</h3><ul className="home-research-topics">{area.topics.map((topic)=><li key={topic}>{topic}</li>)}</ul><span>Learn more →</span></a>)}
    </div></section>

  </main><Footer /></>;
}
