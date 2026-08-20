import { useEffect, useRef } from 'react';
import './CTASection.css';

function CTASection() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta section" id="cta" ref={ref}>
      <div className="container cta__container">
        
        {/* Main Card */}
        <div className="cta__card reveal">
          <div className="cta__icon">
            <svg width="28" height="28" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div className="cta__text">
            <span className="cta__label">READY TO GROW?</span>
            <h2 className="cta__title">
              Let's Build Your{' '}
              <span className="cta__title--italic">Digital Growth System</span>
            </h2>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="cta__grid">
          {[
            {
              href: 'tel:7672024272',
              label: 'Call Us',
              value: '7672024272',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 16.92V19.92C22 20.48 21.56 20.94 21 20.97C20.09 21.04 19.18 20.98 18.29 20.8C15.35 20.13 12.61 18.72 10.33 16.66C8.19 14.73 6.49 12.35 5.34 9.66C5.07 9.02 4.85 8.35 4.68 7.66C4.5 6.77 4.43 5.86 4.47 4.95C4.5 4.39 4.96 3.95 5.52 3.95H8.52C8.99 3.94 9.41 4.26 9.52 4.72C9.63 5.23 9.79 5.73 10.01 6.2C10.17 6.53 10.08 6.92 9.79 7.16L8.79 8.01C10.34 11.12 12.88 13.66 16 15.21L16.85 14.21C17.09 13.92 17.48 13.83 17.81 13.99C18.28 14.21 18.78 14.37 19.29 14.48C19.75 14.59 20.07 15.01 20.06 15.48V16.92H22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            },
            {
              href: 'mailto:ottobonmarketing@gmail.com',
              label: 'Email',
              value: 'ottobonmarketing@gmail.com',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M22 7L13.03 12.7C12.71 12.9 12.36 13 12 13C11.64 13 11.29 12.9 10.97 12.7L2 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
            },

            {
              href: null,
              label: 'Location',
              value: 'Visakhapatnam, India',
              icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
            }
          ].map((c, i) => (
            c.href ? (
              <a href={c.href} className="contact-item reveal reveal-d1" key={i} target={c.href.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                <div className="contact-item__icon">{c.icon}</div>
                <div>
                  <span className="contact-item__label">{c.label}</span>
                  <span className="contact-item__val">{c.value}</span>
                </div>
              </a>
            ) : (
              <div className="contact-item reveal reveal-d1" key={i}>
                <div className="contact-item__icon">{c.icon}</div>
                <div>
                  <span className="contact-item__label">{c.label}</span>
                  <span className="contact-item__val">{c.value}</span>
                </div>
              </div>
            )
          ))}
        </div>

        {/* Action */}
        <div className="cta__action reveal reveal-d2">
          <div className="btn btn--primary" style={{ pointerEvents: 'none', cursor: 'default' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 16.92V19.92C22 20.48 21.56 20.94 21 20.97C20.09 21.04 19.18 20.98 18.29 20.8C15.35 20.13 12.61 18.72 10.33 16.66C8.19 14.73 6.49 12.35 5.34 9.66C5.07 9.02 4.85 8.35 4.68 7.66C4.5 6.77 4.43 5.86 4.47 4.95C4.5 4.39 4.96 3.95 5.52 3.95H8.52C8.99 3.94 9.41 4.26 9.52 4.72C9.63 5.23 9.79 5.73 10.01 6.2C10.17 6.53 10.08 6.92 9.79 7.16L8.79 8.01C10.34 11.12 12.88 13.66 16 15.21L16.85 14.21C17.09 13.92 17.48 13.83 17.81 13.99C18.28 14.21 18.78 14.37 19.29 14.48C19.75 14.59 20.07 15.01 20.06 15.48V16.92H22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></svg>
            Contact us for more details
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
