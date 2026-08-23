import { Fragment } from "react";
import { PageHero, SiteFrame } from "../components";
import { newsItems, newsYears } from "../content/news";
import { sitePath } from "../site-path";

export default function News() {
  return <SiteFrame>
    <PageHero index="" eyebrow="News" title="News" intro="Research, awards, talks, and lab updates." />
    <section className="news-archive shell">
      {newsYears.map((year) => <Fragment key={year}>
        <div className="publication-year"><h2>{year}</h2><span>{newsItems.filter((item) => item.year === year).length} updates</span></div>
        <div className="news-list">{newsItems.filter((item) => item.year === year).sort((a,b)=>a.order-b.order).map((item) =>
          <article key={item.id} id={item.id}>
            <div><div className="news-meta"><span className="news-type">{item.category}</span><span className="news-meta-separator" aria-hidden="true">·</span><span className="news-date">{item.venueLabel ?? (item.venue ? `${item.venue} ${item.year}` : item.year)}</span></div><p>{item.href ? <a href={sitePath(item.href)}>{item.title}</a> : item.title}</p></div>
            {item.image && <img src={sitePath(item.image)} alt="" />}
          </article>
        )}</div>
      </Fragment>)}
    </section>
  </SiteFrame>;
}
