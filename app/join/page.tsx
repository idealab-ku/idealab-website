import { PageHero, SiteFrame } from "../components";
import { application, faqItems } from "../content/join";
import { sitePath } from "../site-path";
import { pageMetadata } from "../seo";

export const metadata = pageMetadata({ title: "Join IDEA Lab", description: "Graduate and undergraduate research opportunities at IDEA Lab, Korea University, in recommender systems, information retrieval, data mining, and AI.", path: "/join" });

export default function Join() {
  return <SiteFrame>
    <PageHero
      index="06"
      eyebrow="Join us"
      title="Join us"
      intro="Graduate student and undergraduate research internship information."
    />

    <aside className="admission-status shell" aria-label="현재 모집 현황">
      {application.statusNotices.map((notice) => <p key={notice}>
        <span aria-hidden="true">※</span> {notice}
      </p>)}
    </aside>

    <section className="application-section shell">
      <h2>Application</h2>
      <div className="application-content">
        <p>{application.recruiting}</p>
        <p className="application-instructions">
          {application.instructions}{" "}
          <span>{application.email}</span>.
        </p>
      </div>
    </section>

    <section className="faq shell">
      <h2>FAQ</h2>
      <div className="faq-list">
        {faqItems.map((item) => <article className="faq-item" key={item.id}>
          <h3>{item.question}</h3>
          <div className="faq-answer">
            {item.content.map((block, blockIndex) => block.type === "paragraph"
              ? <p key={blockIndex}>{block.text}</p>
              : <ul className="faq-requirements" key={blockIndex}>{block.items.map((entry) => <li key={entry}>{entry}</li>)}</ul>)}
            {item.link && <a
              href={item.link.href.startsWith("/") ? sitePath(item.link.href) : item.link.href}
              target={item.link.href.startsWith("/") ? undefined : "_blank"}
              rel={item.link.href.startsWith("/") ? undefined : "noreferrer"}
            >{item.link.label} <span className="link-arrow" aria-hidden="true">↗︎</span></a>}
          </div>
        </article>)}
      </div>
    </section>
  </SiteFrame>;
}
