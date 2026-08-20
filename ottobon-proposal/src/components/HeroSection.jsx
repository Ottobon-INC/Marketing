import './HeroSection.css';

function HeroSection() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      {/* Decorative blobs */}
      <div className="hero__decor">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
      </div>

      <div className="container hero__grid">
        {/* Left */}
        <div className="hero__content">
          <span className="pill pill--blue" style={{ animationDelay: '.1s' }}>
            <span className="pill__dot" />
            Integrated Digital Marketing <em style={{ fontFamily: 'var(--font-display)', color: 'var(--navy-500)' }}>for Educational Institutions</em>
          </span>

          <h1 className="hero__heading">
            Great Institutions.
            <br />
            <span className="hero__heading--italic">Deserve Great Visibility.</span>
          </h1>

          <p className="hero__sub">
            We specialise in digital transformation for educational institutions — 
            helping you <strong>build trust</strong>, <strong>increase visibility</strong>, 
            and <strong>generate qualified enquiries</strong>.
          </p>

          <ul className="hero__checks">
            <li>
              <span className="check check--blue">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Build trust &amp; reputation
            </li>
            <li>
              <span className="check check--teal">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Increase online visibility
            </li>
            <li>
              <span className="check check--orange">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              Drive admissions &amp; enquiries
            </li>
          </ul>

          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => go('cta')}>
              Let's Build Your Growth System
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="btn btn--ghost" onClick={() => go('services')}>Explore Services</button>
          </div>
        </div>

        {/* Right — Ecosystem Visual */}
        <div className="hero__visual">
          <div className="orbit">
            <svg className="orbit__svg-ring" viewBox="0 0 400 400">
              <circle cx="200" cy="200" r="170" className="orbit__svg-bg" />
              <circle cx="200" cy="200" r="170" className="orbit__svg-progress" />
            </svg>
            
            <div className="orbit__center">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M18 20V10M12 20V4M6 20V14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/></svg>
              <span>Business<br/>Growth</span>
            </div>

            {/* Nodes */}
            {[
              { cls: 'website', angle: 0, label: 'Website', color: 'var(--navy-500)', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { cls: 'seo', angle: 90, label: 'SEO', color: 'var(--teal-500)', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg> },
              { cls: 'gbp', angle: 180, label: 'GBP', color: '#34A853', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/></svg> },
              { cls: 'social', angle: 270, label: 'Social', color: 'var(--orange-500)', icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/></svg> },
            ].map((n) => (
              <div 
                className={`orbit__node orbit__node--${n.cls}`} 
                key={n.cls}
                style={{ '--angle': `${n.angle}deg` }}
              >
                <div className="orbit__icon" style={{ color: n.color, borderColor: `${n.color}30` }}>
                  {n.letter ? <span style={{ fontWeight: 700, fontSize: '.95rem' }}>{n.letter}</span> : n.icon}
                </div>
                <span className="orbit__label">{n.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}

export default HeroSection;
