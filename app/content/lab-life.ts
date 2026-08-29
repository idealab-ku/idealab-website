import type { FeaturedEvent, LabLifeEvent } from "./types";
import { assertUniqueIds } from "./guards";

export const featuredEvents: FeaturedEvent[] = [
  { id:"joint-workshop-2026-08", category:"workshop", date:"August 28, 2026", dateTime:"2026-08-28", title:"IDEA × DAIS Joint Workshop", subtitle:"Korea University", href:"/events/joint-workshop#workshop-2026-08", image:"/media/brand/korea-university-logo.png" },
  { id:"dasfaa-2026", category:"tutorial", date:"April 27, 2026", dateTime:"2026-04-27", title:"DASFAA 2026 Tutorial", subtitle:"Continual Recommender Systems: A Focus on LLMs and Evolving Trends", href:"/research/dasfaa26-tutorial-continual-recommender-systems", image:"/media/publications/2026/2026-dasfaa-tutorial.png" },
  { id:"joint-workshop-2026", category:"workshop", date:"February 23, 2026", dateTime:"2026-02-23", title:"IDEA × DAIS Joint Workshop", subtitle:"Korea University", href:"/events/joint-workshop", image:"/media/brand/korea-university-logo.png" },
  { id:"cikm-2025", category:"tutorial", date:"November 10, 2025", dateTime:"2025-11-10", title:"CIKM 2025 Tutorial", subtitle:"Continual Recommender Systems", href:"/research/cikm25-tutorial-continual-recommender-systems", image:"/media/publications/2025/2025-cikm-tutorial.png" },
  { id:"joint-workshop-2025", category:"workshop", date:"August 27, 2025", dateTime:"2025-08-27", title:"IDEA × DAIS Joint Workshop", subtitle:"Korea University", href:"/events/joint-workshop#workshop-2025", image:"/media/brand/korea-university-logo.png" },
];

export const labLifeEvents: LabLifeEvent[] = [
  { id: "joint-workshop-2026-08", title: "Joint workshop · 2026.08", image: "/media/lab-life/2026-08-joint-workshop.jpg" },
  { id: "sigir-2026", title: "SIGIR 2026", image: "/media/lab-life/2026-sigir-conference.jpg" },
  { id: "dasfaa-2026", title: "DASFAA 2026", image: "/media/lab-life/2026-dasfaa-photo-booth.jpg" },
  { id: "itrc-2026-04", title: "ITRC Talent Development Exhibition · 2026.04", image: "/media/lab-life/2026-04-itrc-exhibition.jpg" },
  { id: "group-dinner-2026-03", title: "Group dinner · 2026.03", image: "/media/lab-life/2026-03-group-dinner.jpg" },
  { id: "joint-workshop-2026-02", title: "Joint workshop · 2026.02", image: "/media/lab-life/2026-02-joint-workshop.jpg" },
  { id: "naver-talk-2025-12", title: "Invited talk at NAVER · 2025.12", image: "/media/lab-life/2025-12-naver-invited-talk.jpg" },
  { id: "cikm-2025-tutorial", title: "CIKM 2025 · Tutorial", image: "/media/lab-life/2025-cikm-tutorial.jpg" },
  { id: "cikm-2025-dinner", title: "CIKM 2025", image: "/media/lab-life/2025-cikm-dinner.jpg" },
];

assertUniqueIds("featured events", featuredEvents);
assertUniqueIds("lab life events", labLifeEvents);
