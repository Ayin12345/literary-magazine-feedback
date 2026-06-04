import { useEffect } from 'react';
import '../styles/GoFan.css';

// CSS-only QR code visual hint — 5×5 grid of squares
function QRPlaceholder() {
  return (
    <div className="gofan-qr">
      <div className="gofan-qr__dots">
        {Array.from({ length: 25 }).map((_, i) => (
          <div className="gofan-qr__dot" key={i} />
        ))}
      </div>
      <span className="gofan-qr__label">[QR Code]</span>
    </div>
  );
}

export default function GoFan() {
  useEffect(() => {
    document.title = 'Get Your Copy — [Magazine Name]';
  }, []);

  return (
    <div className="page-wrapper">
      <h1 className="page-heading">Get Your Copy</h1>

      {/* ── Intro (centered) ── */}
      <div className="gofan-intro">
        <p>[Purchase a copy via GoFan or download the order form.]</p>
      </div>

      {/* ── Single CTA Card ── */}
      <div className="gofan-card-wrapper">
        <div className="gofan-card">

          {/* QR Code placeholder */}
          <QRPlaceholder />

          {/* GoFan store button */}
          <div className="gofan-action">
            <a href="#gofan-link" className="btn">
              Visit GoFan Store
            </a>
            <span className="gofan-action__note">[GoFan link goes here]</span>
          </div>

          <hr className="gofan-card__divider" />

          {/* PDF order form button */}
          <div className="gofan-action">
            <a href="#pdf-link" className="btn btn-outline">
              Download Order Form (PDF)
            </a>
            <span className="gofan-action__note">[PDF goes here]</span>
          </div>

        </div>
      </div>
    </div>
  );
}
