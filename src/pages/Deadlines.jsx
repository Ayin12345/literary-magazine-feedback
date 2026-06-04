import { useEffect } from 'react';
import '../styles/Deadlines.css';

// Status: 'passed' | 'upcoming' | 'today'
const deadlineEntries = [
  {
    mmdd: '[MM/DD]',
    yyyy: '[YYYY]',
    title: '[Deadline Name]',
    desc: '[What this date marks.]',
    status: 'passed',
  },
  {
    mmdd: '[MM/DD]',
    yyyy: '[YYYY]',
    title: '[Deadline Name]',
    desc: '[What this date marks.]',
    status: 'passed',
  },
  {
    mmdd: '[MM/DD]',
    yyyy: '[YYYY]',
    title: '[Deadline Name]',
    desc: '[What this date marks.]',
    status: 'today',
  },
  {
    mmdd: '[MM/DD]',
    yyyy: '[YYYY]',
    title: '[Deadline Name]',
    desc: '[What this date marks.]',
    status: 'upcoming',
  },
  {
    mmdd: '[MM/DD]',
    yyyy: '[YYYY]',
    title: '[Deadline Name]',
    desc: '[What this date marks.]',
    status: 'upcoming',
  },
];

const reminders = [
  '[Reminder 1]',
  '[Reminder 2]',
  '[Reminder 3]',
];

const statusConfig = {
  passed:   { icon: '●', label: 'Passed',   className: 'status--passed'   },
  upcoming: { icon: '○', label: 'Upcoming', className: 'status--upcoming' },
  today:    { icon: '★', label: 'Today / Important', className: 'status--today' },
};

export default function Deadlines() {
  useEffect(() => {
    document.title = 'Deadlines — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">Deadlines &amp; Reminders</h1>

      {/* ── Intro ── */}
      <div className="deadlines-intro">
        <p>[Important dates for the current cycle.]</p>
      </div>

      {/* ── Status Legend ── */}
      <div className="deadlines-legend">
        {Object.values(statusConfig).map(({ icon, label, className }) => (
          <div className="deadlines-legend__item" key={label}>
            <span className={`deadlines-legend__icon ${className}`}>{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>

      {/* ── Deadline Cards ── */}
      <h2 className="section-heading">Submission Dates</h2>
      <div className="deadlines-list">
        {deadlineEntries.map((entry, i) => {
          const { icon, className } = statusConfig[entry.status];
          return (
            <div className="deadlines-card" key={i}>
              <div className="deadlines-card__date">
                <div className="deadlines-card__date-inner">
                  <span className="date-mmdd">{entry.mmdd}</span>
                  <span className="date-yyyy">{entry.yyyy}</span>
                </div>
              </div>
              <div className="deadlines-card__content">
                <p className="deadlines-card__title">{entry.title}</p>
                <p className="deadlines-card__desc">{entry.desc}</p>
              </div>
              <div className={`deadlines-card__status ${className}`}>
                {icon}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── General Reminders ── */}
      <h2 className="section-heading">General Reminders</h2>
      <div className="deadlines-reminders">
        <ul>
          {reminders.map((reminder, i) => (
            <li key={i}>{reminder}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
