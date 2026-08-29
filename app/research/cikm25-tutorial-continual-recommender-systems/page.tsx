import { TutorialPage } from "../../tutorial-page";
import { tutorials } from "../../content/tutorials";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata({ title: "CIKM 2025 Tutorial — Continual Recommender Systems", description: "CIKM 2025 tutorial on continual recommender systems, replay-based and regularization-based methods, deployment settings, and future directions.", path: "/research/cikm25-tutorial-continual-recommender-systems", image: "/media/publications/2025/2025-cikm-tutorial.png" });
export default function CikmTutorial(){return <TutorialPage tutorial={tutorials.cikm}/>}
