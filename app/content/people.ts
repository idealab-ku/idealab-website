import type { ConvergenceStudent, Person, PersonGroup } from "./types";
import { assertUniqueIds } from "./guards";
import { siteInfo } from "./site";

export const people: Person[] = [
  {
    id: "seongku-kang",
    name: "SeongKu Kang",
    koreanName: "강성구",
    group: "principal-investigator",
    status: "current",
    order: 1,
    role: "Assistant Professor",
    email: siteInfo.contactEmail,
    image: "/media/people/seongku.jpg",
    affiliation: ["Computer Science & Engineering", "College of Informatics, Korea University"],
    interests: ["Recommender Systems", "Information Retrieval", "Data Mining"],
  },
  { id: "seunghyun-baek", name: "Seunghyun Baek", group: "student", status: "current", order: 1, role: "Graduate Student", degree: "M.S.–Ph.D.", email: "seunghb320@korea.ac.kr", image: "/media/people/seunghyun.png" },
  { id: "seunghan-lee", name: "Seunghan Lee", group: "student", status: "current", order: 2, role: "Graduate Student", degree: "M.S.–Ph.D.", email: "seunghanlee@korea.ac.kr", image: "/media/people/seunghan.jpg" },
  { id: "dojun-hwang", name: "Dojun Hwang", group: "student", status: "current", order: 3, role: "Graduate Student", degree: "B.S.–M.S.", email: "dojun2006@korea.ac.kr", website: "https://repo2x.com", image: "/media/people/dojun.jpg" },
  { id: "yoonseo-kim", name: "Yoonseo Kim", group: "student", status: "current", order: 4, role: "Graduate Student", degree: "B.S.–M.S.", email: "seo3167@korea.ac.kr", website: "https://hiyseo.com", image: "/media/people/yoonseo.jpg" },
  { id: "youngjune-lee", name: "Youngjune Lee", group: "student", status: "current", order: 5, role: "Graduate Student", degree: "Ph.D.", email: "yjlee511@gmail.com", website: "https://dudwns511.github.io/", image: "/media/people/youngjune.jpg" },
  { id: "jeyun-lee", name: "Jeyun Lee", group: "undergraduate-intern", status: "current", order: 1, role: "Undergraduate Research Intern", image: "/media/people/jeyun-lee.jpg" },
  { id: "jeongwoo-choi", name: "Jeongwoo Choi", group: "undergraduate-intern", status: "current", order: 2, role: "Undergraduate Research Intern", image: "/media/people/jeongwoo.jpg" },
  { id: "donghyeok-kang", name: "Donghyeok Kang", group: "undergraduate-intern", status: "current", order: 3, role: "Undergraduate Research Intern", image: "/media/people/donghyeok.png" },
  { id: "seongeun-lee", name: "Seongeun Lee", group: "undergraduate-intern", status: "current", order: 4, role: "Undergraduate Research Intern", image: "/media/people/seongeun.jpg" },
  { id: "hobeom-kim", name: "Hobeom Kim", group: "undergraduate-intern", status: "current", order: 5, role: "Undergraduate Research Intern", image: "/media/people/hobeom.jpg" },
  {
    id: "gyuseok-lee",
    name: "Gyuseok Lee",
    group: "student",
    status: "alumni",
    order: 1,
    role: "Visiting Scholar",
    degree: "Ph.D. @ UIUC",
    image: "/media/people/gyuseok-lee.png",
  },
];

assertUniqueIds("people", people);

const currentByGroup = (group: PersonGroup) =>
  people.filter((person) => person.group === group && person.status === "current").sort((a, b) => a.order - b.order);

const [currentPrincipalInvestigator] = currentByGroup("principal-investigator");

if (!currentPrincipalInvestigator) {
  throw new Error("People content requires one current principal investigator.");
}

export const principalInvestigator = currentPrincipalInvestigator;
export const currentStudents = currentByGroup("student");
export const currentInterns = currentByGroup("undergraduate-intern");
export const alumni = people.filter((person) => person.status === "alumni").sort((a, b) => a.order - b.order);

export const convergenceStudents: ConvergenceStudent[] = [
  {
    id: "soonryul-kwon",
    name: "권순률",
    organization: "NAVER",
    topic: "SLM-LLM 기반 스키마 매칭을 활용한 데이터 자산 가격 예측 및 가치 평가 연구",
    order: 1,
  },
  {
    id: "jeongbeom-seo",
    name: "서정범",
    organization: "CJ 4dplex",
    topic: "유튜브 트레일러 반응 기반 북미 오프닝 주말 박스오피스 예측",
    order: 2,
  },
  {
    id: "chaejeong-min",
    name: "민채정",
    organization: "우리은행",
    topic: "Temporal 특성의 질의응답 성능 향상을 위한 Graph RAG기반 프레임워크 제안 연구",
    order: 3,
  },
  {
    id: "ram-lee",
    name: "이람",
    organization: "Hyundai Autoever",
    topic: "공간 POI 정보를 활용한 전기차 충전 패턴 예측",
    order: 4,
  },
  {
    id: "byeongjun-kim",
    name: "김병준",
    organization: "JeJeSoft",
    topic: "LLM 에이전트에 대한 개입의 반사실적 가치 추정 및 학습 프레임워크",
    order: 5,
  },
  {
    id: "kanghun-jo",
    name: "조강훈",
    organization: "LINE",
    topic: "실시간 추천 SLO 충족을 위한 저지연 Generative Recommendation 프레임워크 연구",
    order: 6,
  },
  {
    id: "donghyeok-kim",
    name: "김동혁",
    organization: "SNOW",
    topic: "Multi-negative Softmax와 Popularity Adjustment를 결합한 Long-tail 순차 추천",
    order: 7,
  },
].sort((a, b) => a.order - b.order);

assertUniqueIds("convergence students", convergenceStudents);
