import { useEffect, useRef } from 'react';
import './Features.css';

const services = [
  {
    number: '01',
    title: 'GOOGLE',
    subtitle: 'BUSINESS PROFILE',
    desc: 'Improve local visibility, attract nearby students & build trust with a verified presence on Google Maps and Search.',
    cls: 'blue',
    features: [
      { name: 'Profile Setup & Verification', detail: 'Get your institution officially verified on Google Maps.' },
      { name: 'Review Management', detail: 'Build trust with a solid 5-star reputation strategy.' },
      { name: 'Local Search Ranking', detail: 'Rank higher when students search for colleges nearby.' },
      { name: 'Weekly Updates & Posts', detail: 'Keep your profile active with regular campus updates.' }
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    number: '02',
    title: 'WEBSITE',
    subtitle: 'DEVELOPMENT',
    desc: 'Modern, mobile-friendly websites that highlight programs, faculty, admissions & campus life — your digital storefront.',
    cls: 'navy',
    features: [
      { name: 'Custom Responsive Design', detail: 'A fast, beautiful website that works on all devices.' },
      { name: 'Admission Portals', detail: 'Streamlined online application processes.' },
      { name: 'SEO-Ready Architecture', detail: 'Built from the ground up for maximum search visibility.' },
      { name: 'Secure Hosting', detail: 'Reliable, 99.9% uptime with daily backups.' }
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '03',
    title: 'SEO',
    subtitle: 'OPTIMIZATION',
    desc: 'Rank higher when students search for programs. Hyper-local keyword strategy, technical SEO, and content optimization.',
    cls: 'teal',
    features: [
      { name: 'Hyper-local Keywords', detail: 'Target the exact search terms students use in your area.' },
      { name: 'Technical SEO Audits', detail: 'Fix underlying issues that prevent top rankings.' },
      { name: 'Content Strategy', detail: 'Engaging, optimized content that answers student queries.' },
      { name: 'Competitor Analysis', detail: 'Stay ahead of other institutions in search results.' }
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M8 11H14M11 8V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    number: '04',
    title: 'SOCIAL',
    subtitle: 'MEDIA',
    desc: 'Engaging content & campaigns to build your brand, engage students & showcase achievements across Instagram & Facebook.',
    cls: 'orange',
    features: [
      { name: 'Campaign Strategy', detail: 'Data-driven campaigns to boost enrollments.' },
      { name: 'Engaging Creatives', detail: 'High-quality graphics and videos for your audience.' },
      { name: 'Student Engagement', detail: 'Interactive stories, polls, and community management.' },
      { name: 'Analytics & Reporting', detail: 'Transparent tracking of your ROI and reach.' }
    ],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="18" cy="6" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
];

function Features() {
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
    <section className="services section" id="services" ref={sectionRef}>
      <div className="container">
        <div className="services__header reveal">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="services__title">
            Under Our Complete{' '}
            <span className="services__title--italic">Digital Front Office</span>
          </h2>
          <p className="services__sub">
            A fully integrated system designed to help educational institutions 
            attract, convert, and retain students.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, idx) => (
            <div className={`flip-card reveal reveal-d${idx + 1} service-card--${s.cls}`} key={s.number}>
              <div className="flip-card__inner">
                {/* Front */}
                <div className="flip-card__front">
                  <div className="service-card__icon">{s.icon}</div>
                  <span className="service-card__num">{s.number}</span>
                  <h3 className="service-card__title">
                    {s.title}
                    <span className="service-card__sub">{s.subtitle}</span>
                  </h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <span className="flip-card__hint">Hover to see features →</span>
                </div>
                {/* Back */}
                <div className="flip-card__back">
                  <h4 className="flip-card__back-title">Key Features</h4>
                  <ul className="flip-card__features">
                    {s.features.map((f, i) => (
                      <li key={i} className="flip-card__feature">
                        <span className="flip-card__feature-name">{f.name}</span>
                        <span className="flip-card__feature-detail">{f.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        

        <div className="services__tagline reveal">
          <span className="services__dash">—</span>
          All Digital. All Integrated. All for Growth.
          <span className="services__dash">—</span>
        </div>
        <p className="services__motto reveal">
          <em>Simple. Integrated. Effective.</em>
        </p>
      </div>
    </section>
  );
}

export default Features;
