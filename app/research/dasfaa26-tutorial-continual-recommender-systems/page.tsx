import { TutorialPage } from "../../tutorial-page";
import { tutorials } from "../../content/tutorials";
import { pageMetadata } from "../../seo";
export const metadata = pageMetadata({ title: "DASFAA 2026 Tutorial — Continual Recommender Systems", description: "DASFAA 2026 tutorial on continual recommender systems, LLMs, evolving user interests, replay, regularization, and future research directions.", path: "/research/dasfaa26-tutorial-continual-recommender-systems", image: "/media/publications/2026/2026-dasfaa-tutorial.png" });
export default function DasfaaTutorial(){return <TutorialPage tutorial={tutorials.dasfaa}/>}
