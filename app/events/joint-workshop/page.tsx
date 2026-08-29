import { PageHero, SiteFrame } from "../../components";
import { pageMetadata } from "../../seo";

export const metadata = pageMetadata({ title: "IDEA Lab Joint Workshop", description: "Joint research workshop featuring talks on personalization, recommender systems, information retrieval, and data mining.", path: "/events/joint-workshop" });

type WorkshopProgramItem = string | {
  text: string;
  details: Array<{ label?: string; text: string }>;
};

type Workshop = {
  id: string;
  title: string;
  meta: string[];
  program: WorkshopProgramItem[];
};

const workshops: Workshop[] = [
  {
    id: "workshop-2026-08",
    title: "26.08.28 · IDEA × DAIS Joint Workshop",
    meta: ["Date: August 28, 2026 · 13:00–17:30"],
    program: [
      "13:00–13:15 · 김윤서 — Recent work on Graph RAG",
      "13:15–13:30 · 황도준 — Recent work on LLM-based Recommendation",
      "13:30–13:45 · 강동혁 — Recent work on Multimodal Personalization",
      "13:45–14:00 · 이승한 — Recent work on Multimodal Recommendation",
      "14:00–14:15 · 이성은 — Recent work on Scientific Document Retrieval",
      "14:15–14:30 · 백승현 — Recent work on Session-based Recommendation",
      "14:30–14:45 · 최정우 — Recent work on Local Citation Recommendation",
      {
        text: "15:00–16:00 · Invited talk",
        details: [
          { label: "Speaker", text: "권원빈 교수님 (성균관대학교)" },
          { label: "Title", text: "Structure Shapes the Future of Data × LLM Systems: Retrieval, Structuring, and Reasoning" },
        ],
      },
      {
        text: "16:00–17:30 · IDEA × DAIS × MIND LAB research sharing and discussion",
        details: [
          { text: "이제윤 — Recent work on Scientific RAG" },
        ],
      },
    ],
  },
  {
    id: "workshop-2026",
    title: "26.02.23 · IDEA × DAIS Joint Workshop",
    meta: ["Date: February 23, 2026", "Location: IT Building of Liberal Arts, Room 611"],
    program: ["12:00–12:50 · Lunch", "12:50–13:00 · Opening and introduction", "13:00–13:40 · 윤환 — Recent work on Traffic Forecasting", "13:40–14:20 · 승한 — Recent work on Recommender Systems", "14:20–14:30 · Break", "14:30–15:10 · 명준 — Recent work on Anomaly Detection", "15:10–15:50 · 제윤 — Recent work on Scientific Document Retrieval", "15:50–16:00 · Closing"],
  },
  {
    id: "workshop-2025",
    title: "25.08.27 · IDEA × DAIS Joint Workshop",
    meta: ["Date: August 27, 2025", "Location: IT Building of Liberal Arts, Room 610"],
    program: ["14:10–14:40 · 현구 — Recent work on Keyphrase Extraction", "14:40–15:10 · 수빈 — Recent work on Table Retrieval", "15:10–15:40 · 예빈 — Recent work on Tabular Feature Engineering", "15:40–15:50 · Break", "15:50–16:20 · 성구 — Recent work on LLMs as Zero-shot Ranker", "16:20–16:50 · 승현 — Recent work on LLM-based Recommendation", "16:50–17:20 · 도준 — Recent work on LLMs and Reinforcement Learning", "17:20–18:00 · Dinner and networking", "18:00–19:00 · Invited talk by Youngjune Lee, NAVER", "19:00–19:10 · Closing"],
  },
];

export default function JointWorkshop() {
  return <SiteFrame>
    <PageHero index="" eyebrow="Joint Workshop" title="IDEA × DAIS" intro="Joint workshops by IDEA Lab and DAIS Lab at Korea University." />
    <section className="detail-page shell">
      {workshops.map((workshop) => <article id={workshop.id} key={workshop.id}>
        <h2>{workshop.title}</h2>
        {workshop.meta.map((line) => <p key={line}>{line}</p>)}
        <h3>Program</h3>
        <ul>{workshop.program.map((item) => typeof item === "string"
          ? <li key={item}>{item}</li>
          : <li key={item.text}>{item.text}<ul className="workshop-sublist">{item.details.map((detail) => <li key={`${detail.label ?? "detail"}-${detail.text}`}>
            {detail.label && <strong>{`${detail.label}:`}</strong>} {detail.text}
          </li>)}</ul></li>)}</ul>
      </article>)}
    </section>
  </SiteFrame>;
}
