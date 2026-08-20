import { useEffect, useRef } from 'react';
import './Journey.css';

const steps = [
  {
    num: 1,
    title: 'Be Found Online',
    desc: 'Ensure your institution appears when students search for programs.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
  },
  {
    num: 2,
    title: 'Build Your Presence',
    desc: 'Create a professional website that showcases your programs, faculty & facilities.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 21H16M12 17V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
  },
  {
    num: 3,
    title: 'Engage & Connect',
    desc: 'Use social media to engage students, parents & prospects.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17 21V19C17 16.79 15.21 15 13 15H5C2.79 15 1 16.79 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M23 21V19C22.99 17.14 21.73 15.56 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
  },
  {
    num: 4,
    title: 'Convert Interest',
    desc: 'Answer queries instantly and convert interest into applications.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
  },
  {
    num: 5,
    title: 'Nurture & Support',
    desc: 'Share updates, reminders & important information effortlessly.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20.84 4.61C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.61L12 5.67L10.94 4.61C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.1917 3.5783 3.16 4.61C2.1283 5.6417 1.54871 7.04097 1.54871 8.5C1.54871 9.95903 2.1283 11.3583 3.16 12.39L12 21.23L20.84 12.39C21.351 11.8792 21.7564 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.5C22.4518 7.77752 22.3095 7.0621 22.0329 6.39464C21.7564 5.72718 21.351 5.12075 20.84 4.61Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>
  },
  {
    num: 6,
    title: 'Grow & Sustain',
    desc: 'Strengthen reputation, drive admissions & build long-term relationships.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M23 6L13.5 15.5L8.5 10.5L1 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M17 6H23V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
  }
];

function Journey() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="journey section" id="journey" ref={ref}>
      <div className="container">
        <div className="journey__header reveal">
          <span className="section-eyebrow">The Institution Journey</span>
          <h2 className="journey__title">
            We Make Every Step{' '}
            <span className="journey__title--italic">Count</span>
          </h2>
          <p className="journey__sub">
            From discovery to long-term growth — here's how we take your institution 
            from invisible to irresistible.
          </p>
        </div>

        <div className="journey__grid">
          {steps.map((s, i) => (
            <div className={`step reveal reveal-d${i + 1}`} key={s.num}>
              <div className="step__connector">
                <div className="step__badge">{s.num}</div>
                {i < steps.length - 1 && <div className="step__line" />}
              </div>
              <div className="step__icon">{s.icon}</div>
              <h4 className="step__title">{s.title}</h4>
              <p className="step__desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="journey__outcomes reveal">
          <div className="outcome"><span className="outcome__icon">📈</span><span className="outcome__label">Increase<br/>Admissions</span></div>
          <div className="outcome"><span className="outcome__icon">🏛️</span><span className="outcome__label">Build Trust &amp;<br/>Reputation</span></div>
          <div className="outcome"><span className="outcome__icon">🎓</span><span className="outcome__label">Engage<br/>Students</span></div>
          <div className="outcome"><span className="outcome__icon">🌱</span><span className="outcome__label">Grow Your<br/>Institution</span></div>
        </div>

        <div className="journey__footer reveal">
          <p className="journey__quote">
            <span className="journey__quote-mark">"</span>
            We help educational institutions grow digitally so they can focus on 
            what matters most — <strong>shaping futures</strong>.
            <span className="journey__quote-mark">"</span>
          </p>
          <div className="pill pill--orange">
            <span className="pill__dot"></span>
            Better Engagement. Higher Admissions. Stronger Institutions.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Journey;
