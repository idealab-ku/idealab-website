import { PageHero, SiteFrame } from "../components";

const students = [
  { name: "Seunghyun Baek", degree: "M.S.–Ph.D.", email: "seunghb320@korea.ac.kr", image: "/media/seunghyun.png" },
  { name: "Seunghan Lee", degree: "M.S.–Ph.D.", email: "seunghanlee@korea.ac.kr", image: "/media/seunghan.jpg" },
  { name: "Dojun Hwang", degree: "B.S.–M.S.", email: "dojun2006@korea.ac.kr", image: "/media/dojun.jpg", website: "https://repo2x.com" },
  { name: "Yoonseo Kim", degree: "B.S.–M.S.", email: "seo3167@korea.ac.kr", image: "/media/yoonseo.jpg", website: "https://hiyseo.com" },
  { name: "Youngjune Lee", degree: "Ph.D.", email: "yjlee511@gmail.com", image: "/media/youngjune.jpg", website: "https://dudwns511.github.io/" },
];

const interns = [
  { name: "Jeyun Lee", image: "/media/jeyun.jpg" },
  { name: "Jeongwoo Choi", image: "/media/jeongwoo.jpg" },
  { name: "Donghyeok Kang", image: "/media/donghyeok.png" },
  { name: "Seongeun Lee", image: "/media/seongeun.jpg" },
  { name: "Hobeom Kim", image: "/media/hobeom.jpg" },
];

export default function People() {
  return <SiteFrame>
    <PageHero index="02" eyebrow="People" title="People" intro="Meet the researchers and students of IDEA Lab at Korea University." />
    <section className="people-block shell">
      <h2>Principal Investigator</h2>
      <article className="pi-card">
        <img src="/media/seongku.jpg" alt="SeongKu Kang" />
        <div><h3>SeongKu Kang <span>강성구</span></h3><p className="role">Assistant Professor</p><p>Computer Science &amp; Engineering<br />College of Informatics, Korea University</p><a href="mailto:seongkukang@korea.ac.kr">seongkukang@korea.ac.kr</a><div className="pill-row"><span>Recommender Systems</span><span>Information Retrieval</span><span>Data Mining</span></div></div>
      </article>
    </section>
    <section className="people-block shell">
      <div className="block-heading"><h2>Students</h2><span>{students.length} members</span></div>
      <div className="member-grid">{students.map((person) => <article className="member-card" key={person.name}><img src={person.image} alt={person.name} /><h3>{person.name}</h3><p className="role">{person.degree}</p><a href={`mailto:${person.email}`}>{person.email}</a>{person.website && <a className="website" href={person.website} target="_blank" rel="noreferrer">Website ↗</a>}</article>)}</div>
    </section>
    <section className="people-block shell interns-block">
      <div className="block-heading"><h2>Undergraduate Research Interns</h2><span>{interns.length} members</span></div>
      <div className="member-grid intern-grid">{interns.map((person) => <article className="member-card" key={person.name}><img src={person.image} alt={person.name} /><h3>{person.name}</h3><p className="role">Undergraduate Research Intern</p></article>)}</div>
    </section>
  </SiteFrame>;
}
