import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { githubPagesBasePath, publicRoutes } from "../site.config.mjs";

const developmentPreviewMeta =
  /<meta(?=[^>]*\bname=["']codex-preview["'])(?=[^>]*\bcontent=["']development["'])[^>]*>/i;
const basePath = githubPagesBasePath();
const deployedPath = (value) => `${basePath}${value}`;
const escapedPath = (value) => deployedPath(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

test("normalizes GitHub Pages deployment base paths", () => {
  assert.equal(githubPagesBasePath({ PAGES_BASE_PATH: "" }), "");
  assert.equal(githubPagesBasePath({ PAGES_BASE_PATH: "/" }), "");
  assert.equal(githubPagesBasePath({ PAGES_BASE_PATH: "/idea-lab-website/" }), "/idea-lab-website");
  assert.equal(githubPagesBasePath({ GITHUB_ACTIONS: "true", GITHUB_REPOSITORY: "idea/website" }), "/website");
});

async function render(path = "/") {
  const file = path === "/" ? "../out/index.html" : `../out${path}/index.html`;
  const html = await readFile(new URL(file, import.meta.url), "utf8");
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}

test("server-renders the IDEA Lab home page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>IDEA Lab — Korea University<\/title>/i);
  assert.match(html, /<header class="site-header"><div class="site-header-inner shell">/);
  assert.match(html, /Intelligent Data Science/);
  assert.match(html, /Recent News/);
  assert.match(html, /Research Areas/);
  for (const area of ["recommender-systems", "information-retrieval", "data-web-mining"]) {
    assert.match(html, new RegExp(`${escapedPath("/research")}#${area}`));
  }
  assert.equal((html.match(/class="home-research-topics"/g) ?? []).length, 3);
  assert.match(html, /Agentic Search/);
  assert.match(html, /User Simulation/);
  assert.doesNotMatch(html, /Learning preferences and long-term interests|Search and retrieval for scientific literature|Extracting useful knowledge from large-scale/);
  assert.doesNotMatch(html, /We are looking for passionate researchers|Meet the Team/);
  assert.match(html, new RegExp(escapedPath("/media/brand/idea-logo-horizontal-tight.png")));
  assert.match(html, new RegExp(escapedPath("/media/lab-life/home-hero-dasfaa-context.png")));
  assert.match(html, new RegExp(escapedPath("/media/brand/korea-university-logo.png")));
  assert.match(html, new RegExp(escapedPath("/favicon.ico")));
  assert.match(html, new RegExp(escapedPath("/apple-touch-icon.png")));
  assert.doesNotMatch(html, /media\/brand\/idea-logo-square\.png|favicon\.svg/);
  assert.match(html, /https:\/\/www\.korea\.ac\.kr\//);
  assert.doesNotMatch(html, developmentPreviewMeta);
  assert.doesNotMatch(html, /react-loading-skeleton|Building your site/);
});

test("keeps visible interface text at a readable minimum size", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const undersized = [...css.matchAll(/([^{}]+)\{[^{}]*font-size:\s*(\d+)px/g)]
    .map((match) => ({ selector: match[1].trim(), size: Number(match[2]) }))
    .filter(({ size }) => size < 15);

  assert.deepEqual(undersized, [
    { selector: ".paper-recognition-mark", size: 11 },
  ]);
});

test("server-renders every public route", async () => {
  for (const path of publicRoutes) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i, path);
    const html = await response.text();
    assert.match(html, /IDEA Lab/, path);
    assert.doesNotMatch(html, developmentPreviewMeta, path);
  }
});

test("keeps required people and publication records visible", async () => {
  const peopleResponse = await render("/people");
  const peopleHtml = await peopleResponse.text();
  const requiredPeople = [
    "SeongKu Kang",
    "Seunghyun Baek",
    "Seunghan Lee",
    "Dojun Hwang",
    "Yoonseo Kim",
    "Youngjune Lee",
    "Jeyun Lee",
    "Jeongwoo Choi",
    "Donghyeok Kang",
    "Seongeun Lee",
    "Hobeom Kim",
  ];

  for (const name of requiredPeople) {
    assert.match(peopleHtml, new RegExp(name), name);
  }

  assert.match(peopleHtml, /href="mailto:seongkukang@korea\.ac\.kr"[^>]*>Email/);
  assert.doesNotMatch(peopleHtml, /Recommender Systems/);
  assert.doesNotMatch(peopleHtml, /class="role">Undergraduate Research Intern/);
  assert.match(peopleHtml, /aria-label="Dojun Hwang website"[^>]*>↗/);
  assert.match(peopleHtml, /aria-label="Yoonseo Kim website"[^>]*>↗/);
  assert.match(peopleHtml, /aria-label="Youngjune Lee website"[^>]*>↗/);
  assert.doesNotMatch(peopleHtml, />Website ↗</);
  assert.match(peopleHtml, /Google Scholar <span class="link-arrow" aria-hidden="true">↗︎<\/span>/);
for (const name of ["권순률", "서정범", "민채정", "이람", "김병준", "조강훈", "김동혁"]) {
  assert.match(peopleHtml, new RegExp(name), name);
}
assert.match(peopleHtml, /SNOW/);
assert.match(
  peopleHtml,
  /Multi-negative Softmax와 Popularity Adjustment를 결합한 Long-tail 순차 추천/,
);
assert.match(peopleHtml, /Alumni/);
assert.match(peopleHtml, /Gyuseok Lee/);
assert.match(peopleHtml, /Visiting Scholar/);
assert.match(peopleHtml, /Ph\.D\. @ UIUC/);

  const piResponse = await render("/people/pi");
  const piHtml = await piResponse.text();
  assert.match(piHtml, /Major R&amp;D Projects/);
  assert.match(piHtml, /Professional Services/);
  assert.match(piHtml, /Area Chair \/ Senior Program Committee/);
  assert.match(piHtml, /Program Committee \/ Reviewer/);
  assert.match(piHtml, /Journal Reviewer/);
  assert.match(piHtml, /Tutorial Organizer, DASFAA/);
  assert.match(piHtml, /Neural Computing and Applications/);
  assert.match(piHtml, /겸임 교수, 인공지능학과, 고려대학교/);
  assert.match(piHtml, /인공지능 \(2025S, 2026S\)/);
  assert.doesNotMatch(piHtml, /AI최고급 신진 연구자 지원 사업|Scientific AI를 위한 과학 도메인 특화 계층적 Knowledge Graph 기반 RAG 기술/);
  assert.doesNotMatch(piHtml, /기계학습 기반 의사결정 지원/);
  assert.match(piHtml, /<span>2026–2029<\/span><p>비공개 저자원 환경/);
  assert.match(piHtml, /class="profile-entry-full"[^>]*><a[^>]*>인공지능/);
  assert.match(piHtml, new RegExp(escapedPath("/teaching/aai112-natural-language-processing")));

  const scheduleResponse = await render("/people/schedule");
  const scheduleHtml = await scheduleResponse.text();
  assert.match(scheduleHtml, /Zoom meeting <span class="link-arrow" aria-hidden="true">↗︎<\/span>/);
  assert.ok(scheduleHtml.indexOf("Zoom meeting ") < scheduleHtml.indexOf("<iframe"));
  assert.doesNotMatch(scheduleHtml, /Conference deadlines|Business trip|Weekday evenings/);

  const publicationsResponse = await render("/publications");
  const publicationsHtml = await publicationsResponse.text();
  assert.equal((publicationsHtml.match(/class="paper-row"/g) ?? []).length, 61);
  assert.match(publicationsHtml, /hoBIT: A Profile-Aware Retrieval-Augmented Chatbot for University Academic Advising/);
  assert.match(publicationsHtml, /PEARL: Front-Loading Relational Chains for Multi-Hop Table Retrieval/);
  assert.match(publicationsHtml, /Conference on Empirical Methods in Natural Language Processing \(EMNLP\), Demonstration/);
  assert.match(publicationsHtml, /Conference on Empirical Methods in Natural Language Processing \(EMNLP\), Main/);
  assert.ok(publicationsHtml.indexOf("2026-emnlp-hobit") < publicationsHtml.indexOf("2026-emnlp-pearl"));
  assert.match(publicationsHtml, new RegExp(escapedPath("/media/publications/2026/2026-emnlp-hobit.png")));
  assert.match(publicationsHtml, new RegExp(escapedPath("/media/publications/2026/2026-emnlp-pearl.png")));
  assert.match(publicationsHtml, new RegExp(escapedPath("/media/publications/2026/2026-cikm-environment-conditioned.jpg")));
  assert.match(publicationsHtml, /2020 and before/);
  assert.doesNotMatch(publicationsHtml, /Densifying a Trust Network for Effective Collaborative Filtering|2017-kdbc-trust-network/);
  assert.match(publicationsHtml, /<sup class="author-mark-corresponding">†<\/sup>/);
  assert.doesNotMatch(publicationsHtml, /Paper \/ page/);
  assert.match(publicationsHtml, /https:\/\/arxiv\.org\/pdf\/2106\.08700/);
  assert.match(publicationsHtml, /https:\/\/arxiv\.org\/pdf\/2608\.19998/);
  assert.match(publicationsHtml, /Filter by research topic/);
  assert.match(publicationsHtml, /id="publication-filter"/);
  assert.match(publicationsHtml, /AI for Science/);
  assert.match(publicationsHtml, /Search &amp; Retrieval/);
  assert.match(publicationsHtml, /Data &amp; Knowledge Mining/);
  assert.match(publicationsHtml, /RAG &amp; Grounding/);
  assert.match(publicationsHtml, /Knowledge Distillation/);
  assert.match(publicationsHtml, /Efficiency &amp; Scalability/);
  assert.match(publicationsHtml, /Bias &amp; Robustness/);
  assert.match(publicationsHtml, /Multiple selections match all selected topics/);
  assert.match(publicationsHtml, /aria-pressed="true"[^>]*>All/);

  const domesticResponse = await render("/publication/domestic-conference");
  const domesticHtml = await domesticResponse.text();
  assert.equal((domesticHtml.match(/<article/g) ?? []).length, 4);
  assert.match(domesticHtml, /효과적인 협업 필터링을 위한 신뢰 네트워크 밀도 강화 방안/);
  assert.match(domesticHtml, /강성구, 왕재민, 이연창, 김상욱/);
  assert.match(domesticHtml, /KDBC 2017[^]*?Best Paper Award/);
  assert.match(domesticHtml, /https:\/\/scholarworks\.bwise\.kr\/hanyang\/handle\/2021\.sw\.hanyang\/151151/);
});

test("restores the complete news archive and related links", async () => {
  const response = await render("/news");
  const html = await response.text();
  assert.equal((html.match(/<article/g) ?? []).length, 42);
  assert.match(html, new RegExp(escapedPath("/publications#2026-emnlp-hobit")));
  assert.match(html, new RegExp(escapedPath("/publications#2026-emnlp-pearl")));
  assert.match(html, /EMNLP 2026 Demo/);
  assert.match(html, /EMNLP 2026/);
  assert.match(html, /ACL 2026 Findings/);
  assert.match(html, /EMNLP 2025 Findings/);
  assert.doesNotMatch(html, /EMNLP Demo 2026|EMNLP Main 2026|ACL Findings 2026|EMNLP Findings 2025/);
  assert.ok(html.indexOf("2026-emnlp-hobit") < html.indexOf("2026-emnlp-pearl"));
  assert.match(html, /AI SeoulTech Scholarship/);
  assert.match(html, new RegExp(escapedPath("/publications#2026-cikm-environment-conditioned")));
  assert.match(html, new RegExp(escapedPath("/media/publications/2026/2026-cikm-environment-conditioned.jpg")));
  assert.match(html, new RegExp(escapedPath("/media/publications/2026/2026-dasfaa-tutorial.png")));
  assert.match(html, new RegExp(escapedPath("/media/publications/2025/2025-cikm-tutorial.png")));
  assert.doesNotMatch(html, /\/media\/publications\/pub-\d+/);
  assert.doesNotMatch(html, /\/media\/lab-life\/event-/);
  assert.doesNotMatch(html, /\/media\/people\/(?:seongku|seunghan)\.jpg/);
  assert.doesNotMatch(html, /hero-ship/);
});

test("presents research areas, major projects, and verified collaborators", async () => {
  const response = await render("/research");
  const html = await response.text();

  assert.equal((html.match(/class="research-area-summary"/g) ?? []).length, 3);
  for (const topic of ["recommendation", "search-retrieval", "knowledge-mining"]) {
    assert.match(html, new RegExp(`${escapedPath("/publications")}\\?topics=${topic}#publication-filter`));
  }
  assert.equal((html.match(/class="research-project-item"/g) ?? []).length, 4);
  assert.equal((html.match(/class="collaborator-logo"/g) ?? []).length, 10);
  assert.match(html, /We are always open to a wide range of collaborations/);
  assert.doesNotMatch(html, /Industry &amp; public R&amp;D|Discuss collaboration/);
  assert.match(html, /Microsoft Research Asia/);
  for (const period of ["2026–2029", "2025–2026", "2023–2024"]) {
    assert.match(html, new RegExp(period));
  }
  assert.doesNotMatch(html, /Scientific AI를 위한 과학 도메인 특화 계층적 Knowledge Graph 기반 RAG 기술/);
  assert.doesNotMatch(html, /AI최고급 신진 연구자 지원 사업/);
  assert.match(html, /Samsung Electronics/);
  assert.match(html, /Mohamed bin Zayed University of Artificial Intelligence/);
  assert.match(html, /Academic and Industry Collaborators/);
  assert.doesNotMatch(html, /기술 개발|>Collaborators<|Institutions and companies with which/);
  assert.doesNotMatch(html, /기계학습 기반 의사결정 지원 기술/);
  assert.match(html, /University of Illinois Urbana-Champaign/);
  assert.match(html, /We research personalized intelligent systems that integrate multimodal knowledge sources and update effectively over time/);
  assert.equal((html.match(/>Multimodal Learning</g) ?? []).length, 3);
  for (const topic of [
    "Agentic Search",
    "Graph RAG",
    "Ontology Construction",
    "User Simulation",
    "Personalization",
    "Multimodal Learning",
  ]) {
    assert.match(html, new RegExp(topic));
  }
  assert.match(html, new RegExp(escapedPath("/media/collaborators/postech.jpg")));
  assert.match(html, new RegExp(escapedPath("/media/collaborators/kt.png")));
  assert.match(html, new RegExp(escapedPath("/media/collaborators/samsung-electronics.svg")));
  assert.match(html, new RegExp(escapedPath("/media/collaborators/mbzuai.png")));
});

test("keeps event captions matched to the verified local photographs", async () => {
  const response = await render("/events");
  const html = await response.text();
  const expectedPairs = [
    ["2026-sigir-conference.jpg", "SIGIR 2026"],
    ["2026-dasfaa-photo-booth.jpg", "DASFAA 2026"],
    ["2026-04-itrc-exhibition.jpg", "ITRC Talent Development Exhibition"],
    ["2026-03-group-dinner.jpg", "Group dinner"],
    ["2026-02-joint-workshop.jpg", "Joint workshop"],
    ["2025-12-naver-invited-talk.jpg", "Invited talk at NAVER"],
    ["2025-cikm-tutorial.jpg", "CIKM 2025 · Tutorial"],
    ["2025-cikm-dinner.jpg", "CIKM 2025"],
  ];

  for (const [image, title] of expectedPairs) {
    assert.match(html, new RegExp(`${image}[^<]*[^]*?${title}`), `${image} should render with ${title}`);
  }

  assert.match(html, /DASFAA 2026/);
  assert.match(html, /CIKM 2025/);
  assert.match(html, /IDEA × DAIS Joint Workshop/);
  assert.match(html, /Tutorials &amp; Workshops/);
  assert.match(html, />Gallery</);
  assert.match(html, /DASFAA 2026 Tutorial[^]*?2026-04-27[^]*?Continual Recommender Systems: A Focus on LLMs and Evolving Trends/);
  assert.match(html, new RegExp(escapedPath("/media/publications/2026/2026-dasfaa-tutorial.png")));
  assert.match(html, new RegExp(escapedPath("/media/publications/2025/2025-cikm-tutorial.png")));
  assert.match(html, new RegExp(escapedPath("/media/brand/korea-university-logo.png")));
  assert.doesNotMatch(html, /<figure[^>]*class="wide"/);
  assert.doesNotMatch(html, /Invited talk at UIUC/);
  assert.doesNotMatch(html, /DAIS Lab @ Korea University/);
});

test("restores teaching years, course pages, embeds, and archive links", async () => {
  const teachingResponse = await render("/teaching");
  const teachingHtml = await teachingResponse.text();
  assert.match(teachingHtml, />2026</);
  assert.match(teachingHtml, />2025</);
  assert.match(teachingHtml, /AAI112/);
  assert.match(teachingHtml, new RegExp(escapedPath("/teaching/aai112-natural-language-processing")));
  assert.doesNotMatch(teachingHtml, /Teaching philosophy|Understand the foundations/);

  const courseChecks = [
    ["/teaching/cose361-artificial-intelligence", "1bm0oxt1Nl86ZwyuzjfpQzLhugG6ZOT6vbVt28KQZwTI", "15xjHH5Z6uTp7tyi5zwjG0GKvxEEK06e3"],
    ["/teaching/data304-bigdata-analysis", "1CXKAnsssss9O5C0SDDXdy7tiMbZHFB6fO8uhWiy7OH8", "1B-zQeTbjYU3OwjJ-KYkm8rEEpW5z9ADv"],
    ["/teaching/aai114-text-mining", "1GkP2mwVJvbws56CyoB1GSVN1LHLZxKwdcQg8P4leFi0", "2025 Fall"],
  ];

  for (const [path, embedId, linkedContent] of courseChecks) {
    const response = await render(path);
    const html = await response.text();
    assert.match(html, new RegExp(embedId), path);
    assert.match(html, new RegExp(linkedContent), path);
  }

  const data304Response = await render("/teaching/data304-bigdata-analysis");
  const data304Html = await data304Response.text();
  assert.match(data304Html, /2PACX-1vSlXLl2tBjqCMPqy2uSqaNclrII9dSEJfOv_jsMYN3NB-t6IPL1zq67gue6YUkusg/);
  assert.match(data304Html, new RegExp(escapedPath("/teaching/data304_fall_2025")));

  const reviewChecks = [
    ["/teaching/cose361_spring_2026", 78, /This was my favorite class this semster/],
    ["/teaching/cose361_spring_2025", 89, /AI is a rapidly growing field/],
    ["/teaching/data304_fall_2025", 82, /The course extremely well planned and executed/],
  ];
  for (const [path, count, excerpt] of reviewChecks) {
    const response = await render(path);
    const html = await response.text();
    assert.equal((html.match(/class="student-review"/g) ?? []).length, count, path);
    assert.match(html, excerpt, path);
    assert.doesNotMatch(html, /<iframe/i, path);
  }
});

test("restores complete tutorial content and preserves public route aliases", async () => {
  const dasfaaResponse = await render("/research/dasfaa26-tutorial-continual-recommender-systems");
  const dasfaaHtml = await dasfaaResponse.text();
  assert.match(dasfaaHtml, /A Focus on LLMs and Evolving Trends/);
  assert.match(dasfaaHtml, /Expected audience/);
  assert.match(dasfaaHtml, /Part V: Open Challenges and Future Directions/);
  assert.match(dasfaaHtml, /Seunghan Lee/);
  assert.match(dasfaaHtml, /Continual low-rank adapters/);
  assert.match(dasfaaHtml, /16(?:<!-- -->)? works/);

  const cikmResponse = await render("/research/cikm25-tutorial-continual-recommender-systems");
  const cikmHtml = await cikmResponse.text();
  assert.match(cikmHtml, /Hanghang Tong/);
  assert.match(cikmHtml, /1bzkX5wuiQe5hh5RmBdHKKEbRFbD0bjvV/);
  assert.match(cikmHtml, /1Ki2arohAZ9JZUBLa1Hf5_W5vROW0_bER/);
  assert.match(cikmHtml, /13(?:<!-- -->)? works/);

  const aliases = [
    ["/events/dasfaa26-tutorial-continual-recommender-systems", /DASFAA 2026/],
    ["/events/cikm25-tutorial-continual-recommender-systems", /CIKM 2025/],
    ["/research/tutorial-continual-recommender-systems", /CIKM 2025/],
  ];
  for (const [path, expected] of aliases) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    assert.match(await response.text(), expected, path);
  }
});

test("keeps the Join us page faithful to the public admission notice and FAQ", async () => {
  const response = await render("/join");
  const html = await response.text();
  assert.match(html, /2027학년도 전기 대학원생 모집은 마감되었습니다\./);
  assert.match(html, /최대 지도 가능 인원에 도달하여, SW·AI융합대학원 논문 지도 요청은 더 이상 받고 있지 않습니다\./);
  assert.doesNotMatch(html, /id="admission-status-heading">모집 안내/);
  assert.match(html, /Please send \(1\) a self-introduction, \(2\) CV, and \(3\) your academic transcript to[^]*?seongkukang@korea\.ac\.kr/);
  assert.doesNotMatch(html, /Graduate students &amp; undergraduate research interns/);
  const applicationInstructions = html.match(/<p class="application-instructions">([^]*?)<\/p>/)?.[1] ?? "";
  assert.doesNotMatch(applicationInstructions, /<a\b|mailto:/);
  assert.match(html, /Do I need to have any qualifications to join your research group\?/);
  assert.match(html, /with a particular emphasis on large language models \(LLMs\) as reasoning agents/);
  assert.match(html, /Sufficient English proficiency to read and understand research papers/);
  assert.equal((html.match(/class="faq-requirements"/g) ?? []).length, 1);
  assert.match(html, /Undergraduate internships are offered twice a year/);
  assert.match(html, /class="application-instructions"/);
  assert.equal((html.match(/class="faq-item"/g) ?? []).length, 4);
  assert.doesNotMatch(html, /<section class="faq"[^]*?<details/);
  assert.doesNotMatch(html, /class="application-email"|class="apply-mail"|class="apply shell"/);
  assert.doesNotMatch(html, /Do meaningful work with people who care|Start with a thoughtful introduction/);
});
