import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — [Magazine Name]';
  }, []);

  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <p className="not-found__message">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
}
