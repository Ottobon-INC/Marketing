import { useEffect, useRef } from 'react';
import './GBPEducation.css';

function GBPEducation() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal');
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gbp-edu section-padding" id="gbp-edu" ref={sectionRef}>
      <div className="container">
        <div className="gbp-edu__header reveal">
          <span className="pill pill--green">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{marginRight: 6}}>
              <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2.5" />
            </svg>
            Search Strategy Insight
          </span>
          <h2 className="section-title">
            Why Your <span className="text-teal">Google Business Profile</span><br/>
            Outranks Your Website
          </h2>
          <p className="section-sub">
            In local search, your website has no inherent value without a mature Google Business Profile (GBP). Here is why your GBP is your most critical digital asset.
          </p>
        </div>

        <div className="gbp-edu__grid">
          {/* Left Column: The Problem */}
          <div className="gbp-edu__card reveal reveal-d1">
            <div className="gbp-edu__icon-wrapper bg-red">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
                <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M4 8L20 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <h3>The Website Myth</h3>
            <p>
              Many institutions believe that building a new, expensive website will automatically generate traffic and admissions. However, Google does not inherently trust new domains. Without history and maturity, a new website is invisible to local students searching for colleges or schools nearby.
            </p>
          </div>

          {/* Right Column: The Solution */}
          <div className="gbp-edu__card reveal reveal-d2">
            <div className="gbp-edu__icon-wrapper bg-green">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <h3>The Power of GBP Maturity</h3>
            <p>
              Your Google Business Profile dictates how you rank in local search. If you have been running your institution for 10 years, Google trusts your established GBP. This maturity allows you to change websites anytime, as the trust and traffic will naturally spin off to the new link via your GBP. 
            </p>
            <div className="gbp-edu__highlight">
              <strong>Rule of Thumb:</strong> You can change domains overnight, but if you lose your GBP, you lose all your digital maturity.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default GBPEducation;
