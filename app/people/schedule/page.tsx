import { PageHero, SiteFrame } from "../../components";
import { publicCalendarUrl, zoomUrl } from "../../content/schedule";

export default function Schedule() {
  return <SiteFrame>
    <PageHero index="" eyebrow="Schedule" title="Schedule" intro="Public calendar for Prof. SeongKu Kang." />
    <section className="schedule-page shell">
      <a className="primary-btn schedule-zoom" href={zoomUrl} target="_blank" rel="noreferrer">Zoom meeting <span className="link-arrow" aria-hidden="true">↗︎</span></a>
      <iframe src={publicCalendarUrl} title="SeongKu Kang public schedule" loading="lazy" />
    </section>
  </SiteFrame>;
}
