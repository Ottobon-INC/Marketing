import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        
        <div className="footer__brand">
          <div className="footer__logo">
            <div className="footer__logo-group">
              <img src="/ottobon-logo.png" alt="Ottobon" className="footer__logo-icon" />
              <div className="footer__logo-text">
                <span className="footer__logo-name">OTTOBON</span>
                <span className="footer__logo-sub">MARKETING SERVICES</span>
              </div>
            </div>
          </div>
          <p className="footer__tagline">
            Strategy. Creativity. Technology.
            <br />
            <span className="footer__tagline--italic">Built for long-term impact.</span>
          </p>
        </div>

        <div className="footer__meta">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Ottobon Marketing Services. All rights reserved.
          </p>
          <p className="footer__location">
            Visakhapatnam, India
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
