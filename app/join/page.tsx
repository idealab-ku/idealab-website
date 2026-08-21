import { PageHero, SiteFrame } from "../components";
import { application, faqItems } from "../content/join";
import { sitePath } from "../site-path";

export default function Join() {
  return <SiteFrame>
    <PageHero
      index="06"
      eyebrow="Join us"
      title="Join us"
      intro="Graduate student and undergraduate research internship information."
    />

    <aside className="admission-status shell" aria-label="현재 모집 현황">
      <p><span aria-hidden="true">※</span> {application.statusNotice}</p>
    </aside>

    <section className="application-section shell">
      <h2>Application</h2>
      <div className="application-content">
        <h3>Graduate students &amp; undergraduate research interns</h3>
        <p>{application.recruiting}</p>
        <p className="application-instructions">
          {application.instructions}{" "}
          <a href={`mailto:${application.email}`}>{application.email}</a>.
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
              : <ol key={blockIndex}>{block.items.map((entry) => <li key={entry}>{entry}</li>)}</ol>)}
            {item.link && <a
              href={item.link.href.startsWith("/") ? sitePath(item.link.href) : item.link.href}
              target={item.link.href.startsWith("/") ? undefined : "_blank"}
              rel={item.link.href.startsWith("/") ? undefined : "noreferrer"}
            >{item.link.label} <span aria-hidden="true">↗</span></a>}
          </div>
        </article>)}
      </div>
    </section>
  </SiteFrame>;
}
