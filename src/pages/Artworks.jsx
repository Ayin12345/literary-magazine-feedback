import { useEffect } from 'react';
import '../styles/Artworks.css';

const submissionTypes = [
  '[Poetry]',
  '[Short Fiction]',
  '[Photography]',
  '[Visual Art]',
  '[Essay]',
];

const artworkCards = [
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
  { title: '[Artwork Title]', author: '[Author Name]' },
];

const formatRequirements = [
  { type: '[Poetry]',       requirements: '[Length and format requirements.]' },
  { type: '[Short Fiction]', requirements: '[Word count and file format.]' },
  { type: '[Photography]',  requirements: '[Resolution and accepted formats.]' },
  { type: '[Visual Art]',   requirements: '[File format and resolution.]' },
  { type: '[Essay]',        requirements: '[Word count and citation style.]' },
];

export default function Artworks() {
  useEffect(() => {
    document.title = 'Example Artworks — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">Example Artworks &amp; Submission Requirements</h1>

      {/* ── Accepted Submission Types ── */}
      <h2 className="section-heading">Accepted Submission Types</h2>
      <div className="artworks-badges">
        {submissionTypes.map((type, i) => (
          <span className="artworks-badge" key={i}>{type}</span>
        ))}
      </div>

      {/* ── Example Artworks Grid ── */}
      <h2 className="section-heading">Example Artworks</h2>
      <div className="artworks-grid">
        {artworkCards.map((card, i) => (
          <div className="artworks-card" key={i}>
            <div className="artworks-card__image">Artwork Placeholder</div>
            <div className="artworks-card__body">
              <p className="artworks-card__title">{card.title}</p>
              <p className="artworks-card__author">{card.author}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Formatting Requirements Table ── */}
      <h2 className="section-heading">Formatting Requirements</h2>
      <div className="artworks-table-wrapper">
        <table className="artworks-table">
          <thead>
            <tr>
              <th>Submission Type</th>
              <th>Requirements</th>
            </tr>
          </thead>
          <tbody>
            {formatRequirements.map((row, i) => (
              <tr key={i}>
                <td>{row.type}</td>
                <td>{row.requirements}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
