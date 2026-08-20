import { useEffect, useRef } from 'react';
import './Justification.css';

const reasons = [
  {
    id: 'A',
    title: 'An Entire Agency Team vs. One Junior Employee',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M23 21V19C23 17.14 21.73 15.56 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 3.13C17.73 3.56 19 5.14 19 7C19 8.86 17.73 10.44 16 10.87" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    color: '#6C63FF',
    comparison: {
      left: {
        label: 'In-House Hire',
        points: [
          'Single junior employee: ₹20K–25K wages',
          'Cannot do full-stack: website, SEO, reels & influencer work',
          'No algorithmic knowledge for map pack SEO',
          'Zero negotiation leverage with influencers',
        ],
      },
      right: {
        label: 'Ottobon Agency',
        points: [
          'Same ₹25K budget — complete team',
          'Graphic designers + web devs + SEO strategists',
          'Influencer managers with proven frameworks',
          'Seamless multi-skill execution at scale',
        ],
      },
    },
  },
  {
    id: 'B',
    title: 'Market Realities & The Value Gap',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2V22M17 5H9.5C8.57 5 7.68 5.37 7.02 6.02C6.37 6.68 6 7.57 6 8.5C6 9.43 6.37 10.32 7.02 10.98C7.68 11.63 8.57 12 9.5 12H14.5C15.43 12 16.32 12.37 16.98 13.02C17.63 13.68 18 14.57 18 15.5C18 16.43 17.63 17.32 16.98 17.98C16.32 18.63 15.43 19 14.5 19H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#00D4AA',
    content: 'Mid-tier digital marketing retainers providing full execution usually range between ₹25,000 and ₹50,000 per month. Agencies charging ₹8,000–₹12,000 are typically "post mills" — slapping generic stock images without any localized strategy. Ottobon provides premium enterprise marketing tactics at a local business cost.',
  },
  {
    id: 'C',
    title: 'Complete Risk Reversal',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#FF6B9D',
    content: 'We are not asking you to pay a single rupee upfront. Through our 3 Months Free Trial, we invest our own resources first — absorbing costs for competitor research, setting up your core web architecture, audit maps, and drafting initial content plans. The ₹25,000 fee activates only after we\'ve validated our methods and brought visible traction to your brand.',
  },
  {
    id: 'D',
    title: 'The Premium Execution Guarantee',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    color: '#F59E0B',
    content: 'Sourcing creators with real local impact takes continuous testing, manual filtering, and strategic management. Transitioning web and search engines to hyper-local "problem language" requires deliberate, skilled technical time. A ₹25,000 retainer ensures our agency gives your business the high-level focus, infrastructure, and deep strategy to outrank your competitors.',
  },
];

function Justification() {
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

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="justification section" id="why-us" ref={sectionRef}>
      <div className="container">
        <div className="justification-header reveal">
          <span className="section-label">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Strategic Justification
          </span>
          <h2 className="section-title">
            Why This <span className="gradient-text">Price</span>?
          </h2>
          <p className="section-subtitle">
            ₹25,000 is not a cost — it's a <strong>business multiplier</strong>. Here is the strict 
            financial and operational logic.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, idx) => (
            <div
              className={`reason-card glass-card reveal reveal-delay-${idx + 1}`}
              key={reason.id}
              style={{ '--reason-color': reason.color }}
            >
              <div className="reason-header">
                <div className="reason-icon" style={{ color: reason.color, borderColor: `${reason.color}40` }}>
                  {reason.icon}
                </div>
                <div className="reason-meta">
                  <span className="reason-id" style={{ color: reason.color }}>Reason {reason.id}</span>
                  <h3 className="reason-title">{reason.title}</h3>
                </div>
              </div>

              {reason.comparison ? (
                <div className="reason-comparison">
                  <div className="comparison-side comparison-left">
                    <span className="comparison-label bad">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      {reason.comparison.left.label}
                    </span>
                    <ul>
                      {reason.comparison.left.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="comparison-divider">
                    <span>VS</span>
                  </div>
                  <div className="comparison-side comparison-right">
                    <span className="comparison-label good">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {reason.comparison.right.label}
                    </span>
                    <ul>
                      {reason.comparison.right.points.map((p, i) => (
                        <li key={i}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <p className="reason-content">{reason.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Justification;
