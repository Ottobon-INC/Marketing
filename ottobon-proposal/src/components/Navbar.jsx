import { useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      navRef.current?.classList.toggle('nav--scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav className="nav" ref={navRef}>
      <div className="container nav__inner">
        <div className="nav__brand" onClick={() => go('hero')}>
          <div className="nav__logo-group">
            <img src="/ottobon-logo.png" alt="Ottobon" className="nav__logo-icon" />
            <div className="nav__brand-text">
              <strong className="nav__brand-name">OTTOBON ACADEMY</strong>
              <small className="nav__brand-sub">MARKETING SERVICES</small>
            </div>
          </div>
        </div>

        <div className="nav__menu">
          <button className="nav__link" onClick={() => go('services')}>Services</button>
          <button className="nav__link" onClick={() => go('journey')}>How It Works</button>
          <button className="nav__link" onClick={() => go('pricing')}>Pricing</button>
          <button className="nav__cta" onClick={() => go('cta')}>
            Get Started
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
