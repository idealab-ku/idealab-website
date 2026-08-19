import { SiteFrame } from "./components";
import { sitePath } from "./site-path";

export default function NotFound() {
  return <SiteFrame>
    <section className="page-hero shell">
      <span className="page-index">404</span>
      <h1>Page not found</h1>
      <p>The requested page does not exist or may have moved.</p>
      <a className="primary-btn" href={sitePath("/")}>Return home</a>
    </section>
  </SiteFrame>;
}
