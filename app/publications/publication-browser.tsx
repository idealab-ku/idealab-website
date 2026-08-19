"use client";

import { Fragment, useEffect, useMemo, useState, type ReactNode } from "react";
import { publicationGroups, publications, publicationsForGroup, publicationTopics } from "../content/publications";
import type { PublicationTopic } from "../content/types";
import { sitePath } from "../site-path";

function markedAuthors(authors: string): ReactNode[] {
  return authors.split(/([*†])/g).filter(Boolean).map((part, index) =>
    part === "*" || part === "†"
      ? <sup className={part === "*" ? "author-mark-equal" : "author-mark-corresponding"} key={`${part}-${index}`}>{part}</sup>
      : <Fragment key={`${part}-${index}`}>{part}</Fragment>,
  );
}

const externalProps = (href: string) => href.startsWith("http")
  ? { target: "_blank" as const, rel: "noreferrer" }
  : {};

function readTopicsFromUrl(): PublicationTopic[] {
  if (typeof window === "undefined") return [];
  const values = new URLSearchParams(window.location.search).get("topics")?.split(",") ?? [];
  return publicationTopics.map((topic) => topic.id).filter((topic) => values.includes(topic));
}

export function PublicationBrowser() {
  const [selectedTopics, setSelectedTopics] = useState<PublicationTopic[]>([]);

  useEffect(() => {
    const syncFromUrl = () => setSelectedTopics(readTopicsFromUrl());
    syncFromUrl();
    window.addEventListener("popstate", syncFromUrl);
    return () => window.removeEventListener("popstate", syncFromUrl);
  }, []);

  const visibleIds = useMemo(() => new Set(
    publications
      .filter((paper) => selectedTopics.length === 0 || selectedTopics.every((topic) => paper.topics.includes(topic)))
      .map((paper) => paper.id),
  ), [selectedTopics]);

  const setTopics = (topics: PublicationTopic[]) => {
    setSelectedTopics(topics);
    const url = new URL(window.location.href);
    if (topics.length) url.searchParams.set("topics", topics.join(","));
    else url.searchParams.delete("topics");
    window.history.pushState({}, "", `${url.pathname}${url.search}${url.hash}`);
  };

  const toggleTopic = (topic: PublicationTopic) => {
    const requested = selectedTopics.includes(topic)
      ? selectedTopics.filter((selected) => selected !== topic)
      : [...selectedTopics, topic];
    setTopics(publicationTopics.map((item) => item.id).filter((id) => requested.includes(id)));
  };

  return <>
    <section className="publication-filter shell" id="publication-filter" aria-labelledby="publication-filter-title">
      <div className="publication-filter-heading">
        <div>
          <h2 id="publication-filter-title">Filter by research topic</h2>
          <p className="publication-filter-help">Multiple selections match all selected topics.</p>
        </div>
        <p><strong>{visibleIds.size}</strong> of {publications.length} publications</p>
      </div>
      <div className="publication-filter-options" role="group" aria-label="Filter publications; all selected topics must match">
        <button type="button" className={selectedTopics.length === 0 ? "is-active" : ""} aria-pressed={selectedTopics.length === 0} onClick={() => setTopics([])}>
          All <span>{publications.length}</span>
        </button>
        {publicationTopics.map((topic) => {
          const count = publications.filter((paper) => paper.topics.includes(topic.id)).length;
          const active = selectedTopics.includes(topic.id);
          return <button type="button" className={active ? "is-active" : ""} aria-pressed={active} onClick={() => toggleTopic(topic.id)} key={topic.id}>
            {topic.label} <span>{count}</span>
          </button>;
        })}
      </div>
      {selectedTopics.length > 0 && <button type="button" className="publication-filter-clear" onClick={() => setTopics([])}>Clear filters</button>}
    </section>

    <section className="publication-list shell" aria-live="polite">
      {publicationGroups.map((group) => {
        const groupPublications = publicationsForGroup(group.years).filter((paper) => visibleIds.has(paper.id));
        if (!groupPublications.length) return null;
        return <Fragment key={group.label}>
          <div className="publication-year"><h2>{group.label}</h2><span>{groupPublications.length} publications</span></div>
          {groupPublications.map((paper) => <article className="paper-row" key={paper.id} id={paper.id}>
            <div className="paper-image"><img src={sitePath(paper.thumbnail)} alt={`Figure for ${paper.title}`} loading="lazy" /></div>
            <div className="paper-copy">
              <h3>{paper.link || paper.page
                ? <a href={sitePath((paper.link ?? paper.page)!)} {...externalProps((paper.link ?? paper.page)!)}>{paper.title} <span className="paper-title-arrow" aria-hidden="true">↗</span></a>
                : paper.title}</h3>
              <p className="paper-authors">{markedAuthors(paper.authors)}</p>
              <p className="paper-venue-full">{paper.venue}</p>
              {paper.recognition && <p className="paper-recognition">
                <span className="paper-recognition-mark" aria-hidden="true">★</span>
                {paper.recognition.href
                  ? <a href={sitePath(paper.recognition.href)} {...externalProps(paper.recognition.href)}>{paper.recognition.label}</a>
                  : paper.recognition.label}
              </p>}
              {paper.link && paper.page && <div className="paper-actions">
                <a className="paper-link" href={sitePath(paper.page)} {...externalProps(paper.page)}>Page <span aria-hidden="true">↗</span></a>
              </div>}
            </div>
          </article>)}
        </Fragment>;
      })}
    </section>
  </>;
}
