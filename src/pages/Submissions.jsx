import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Submissions.css';

const requirements = [
  '[Requirement 1]',
  '[Requirement 2]',
  '[Requirement 3]',
  '[Requirement 4]',
  '[Requirement 5]',
];

export default function Submissions() {
  useEffect(() => {
    document.title = 'Submissions — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">Submissions</h1>

      {/* ── Intro ── */}
      <div className="submissions-intro">
        <p>[What the magazine accepts and how to submit.]</p>
      </div>

      {/* ── Submit CTA Card ── */}
      <div className="submissions-cta-card">
        <h3>Ready to submit your work?</h3>
        <a href="#google-form-link" className="btn">
          Submit via Google Form
        </a>
        <span className="submissions-cta-note">[Google Form link goes here]</span>
      </div>

      {/* ── Submission Requirements ── */}
      <h2 className="section-heading">Submission Requirements</h2>
      <div className="submissions-requirements">
        <ul>
          {requirements.map((req, i) => (
            <li key={i}>{req}</li>
          ))}
        </ul>
      </div>

      {/* ── Deadlines Link ── */}
      <h2 className="section-heading">Deadlines</h2>
      <Link to="/deadlines" className="submissions-deadlines-link">
        <span>See the Deadlines page for all important dates and upcoming submission windows</span>
        <span className="submissions-deadlines-arrow">→</span>
      </Link>
    </div>
  );
}
