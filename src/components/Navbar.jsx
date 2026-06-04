import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const navLinks = [
  { label: 'Home',         to: '/' },
  { label: 'Submissions',  to: '/submissions' },
  { label: 'About Us',     to: '/about' },
  { label: 'Achievements', to: '/achievements' },
  { label: 'Artworks',     to: '/artworks' },
  { label: 'Past Issues',  to: '/previous-issues' },
  { label: 'GoFan',        to: '/gofan' },
  { label: 'Deadlines',    to: '/deadlines' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu  = () => setMenuOpen(false);

  // Close hamburger menu if viewport grows past mobile breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="navbar__inner">
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          [Magazine Name]
        </Link>

        {/* Hamburger button (mobile only) */}
        <button
          className={`navbar__toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        {/* Nav links */}
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(({ label, to }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
