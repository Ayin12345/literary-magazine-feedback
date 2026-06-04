import { useEffect } from 'react';
import '../styles/PreviousIssues.css';

const issues = [
  { title: '[Issue Name — Vol. 1]', year: '[Year]' },
  { title: '[Issue Name — Vol. 2]', year: '[Year]' },
  { title: '[Issue Name — Vol. 3]', year: '[Year]' },
  { title: '[Issue Name — Vol. 4]', year: '[Year]' },
];

function IssueCard({ title, year, volLabel }) {
  return (
    <div className="issues-card">
      {/* CSS-only magazine cover simulation */}
      <div className="issues-card__cover">
        <span className="issues-card__cover-label">Cover Placeholder</span>
        <span className="issues-card__cover-vol">{volLabel}</span>
      </div>
      <div className="issues-card__body">
        <p className="issues-card__title">{title}</p>
        <p className="issues-card__year">{year}</p>
        {/* Disabled — PDF not yet uploaded */}
        <span className="issues-card__pdf-btn" aria-disabled="true">
          View PDF
        </span>
      </div>
    </div>
  );
}

export default function PreviousIssues() {
  useEffect(() => {
    document.title = 'Previous Issues — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">Previous Issues</h1>

      {/* ── Upload Notice ── */}
      <div className="issues-notice">
        <span className="issues-notice__icon">○</span>
        <p>[PDFs will be linked once uploaded.]</p>
      </div>

      {/* ── Intro ── */}
      <div className="issues-intro">
        <p>[Past volumes of the magazine.]</p>
      </div>

      {/* ── Issues Grid ── */}
      <h2 className="section-heading">Archive</h2>
      <div className="issues-grid">
        {issues.map((issue, i) => (
          <IssueCard
            key={i}
            title={issue.title}
            year={issue.year}
            volLabel={`Vol. ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
