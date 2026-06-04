import { useEffect } from 'react';
import '../styles/Achievements.css';

const timelineEntries = [
  { year: '[Year]', title: '[Achievement Name]', desc: '[Award or milestone.]' },
  { year: '[Year]', title: '[Achievement Name]', desc: '[Award or milestone.]' },
  { year: '[Year]', title: '[Achievement Name]', desc: '[Award or milestone.]' },
  { year: '[Year]', title: '[Achievement Name]', desc: '[Award or milestone.]' },
  { year: '[Year]', title: '[Achievement Name]', desc: '[Award or milestone.]' },
];

const publicationCards = [
  {
    label: 'Publication',
    title: '[Publication or Recognition Title]',
    detail: '[Organization or sponsor name] — [Year]',
  },
  {
    label: 'Recognition',
    title: '[Publication or Recognition Title]',
    detail: '[Organization or sponsor name] — [Year]',
  },
  {
    label: 'Award',
    title: '[Publication or Recognition Title]',
    detail: '[Organization or sponsor name] — [Year]',
  },
];

export default function Achievements() {
  useEffect(() => {
    document.title = 'Achievements — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">Achievements</h1>

      {/* ── Intro ── */}
      <div className="achievements-intro">
        <p>[Awards and recognition received by the magazine.]</p>
      </div>

      {/* ── Timeline ── */}
      <h2 className="section-heading">Timeline</h2>
      <div className="achievements-timeline">
        {timelineEntries.map((entry, i) => (
          <div className="achievements-timeline__entry" key={i}>
            <div className="achievements-timeline__year">
              <span>{entry.year}</span>
            </div>
            <div className="achievements-timeline__content">
              <p className="achievements-timeline__title">{entry.title}</p>
              <p className="achievements-timeline__desc">{entry.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Publications & Recognition ── */}
      <h2 className="section-heading">Publications &amp; Recognition</h2>
      <div className="achievements-publications-grid">
        {publicationCards.map((card, i) => (
          <div className="achievements-pub-card" key={i}>
            <p className="achievements-pub-card__label">{card.label}</p>
            <p className="achievements-pub-card__title">{card.title}</p>
            <p className="achievements-pub-card__detail">{card.detail}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
