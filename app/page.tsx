import { Footer, Header } from "./components";
import { news } from "./data";

export default function Home() {
  return <><Header /><main>
    <section className="home-hero shell">
      <div className="home-copy">
        <img src="/media/idea-logo.png" alt="IDEA Lab" className="hero-logo" />
        <h1>Intelligent Data Science &amp;<br />Applications Lab, Korea University</h1>
        <p>We develop intelligent systems that help people navigate overwhelming information—delivering relevant, high-quality, and actionable insights for each user’s context and needs.</p>
        <div className="hero-buttons"><a className="primary-btn" href="/publications">Publications <span>→</span></a><a className="secondary-btn" href="/join">Join Us</a></div>
      </div>
      <img className="home-photo" src="/media/event-2.jpg" alt="IDEA Lab team" />
    </section>

    <section className="home-section shell">
      <div className="home-title-row"><h2>Recent News</h2><a href="#all-news">View all →</a></div>
      <div className="home-news" id="all-news">{news.slice(0,4).map(([tag,title],i)=><article key={title}><div><span className="news-type">{tag}</span><span className="news-date">2026</span></div><p>{title}</p><img src={`/media/${i<3?`event-${i+1}.jpg`:`pub-08.png`}`} alt="" /></article>)}</div>
    </section>

    <section className="home-section research-overview shell"><h2>Research Areas</h2><p className="section-intro">We explore three connected research directions for intelligent information systems.</p><div className="area-cards">
      <a href="/research"><h3>Recommender Systems</h3><p>Learning preferences and long-term interests for accurate, efficient, and continually adapting recommendation.</p><span>Learn more →</span></a>
      <a href="/research"><h3>Information Retrieval</h3><p>Search and retrieval for scientific literature, specialized corpora, and knowledge-grounded language systems.</p><span>Learn more →</span></a>
      <a href="/research"><h3>Data &amp; Web Mining</h3><p>Extracting useful knowledge from large-scale, multimodal, and evolving information environments.</p><span>Learn more →</span></a>
    </div></section>

    <section className="home-cta shell"><h2>We are looking for passionate researchers.</h2><p>Join IDEA Lab and help build intelligent systems for a changing world of information.</p><a className="secondary-btn" href="/people">Meet the Team</a></section>
  </main><Footer /></>;
}
