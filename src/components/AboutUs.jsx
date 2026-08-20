import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <header className="about__header">
          <div className="pill pill--blue fade-up">
            <span className="pill__dot" />
            Ecosystem
          </div>
          <h2 className="section-title fade-up">
            We’re Building a Better Digital Journey for<br/>
            <span className="text-gold">Students</span> & <span className="text-teal">Institutions</span>
          </h2>
          <p className="section-sub fade-up">
            Ottobon Academy is built to bridge the gap between students and the institutions that shape their future. We help Gen Z learners discover the right skills, learn through a structured digital learning platform, and make better-informed education decisions.
          </p>
        </header>

        <div className="ecosystem">
          {/* Connector Line for Desktop */}
          <div className="ecosystem__line"></div>

          {/* Student Card */}
          <div className="ecosystem__card ecosystem__card--student fade-up">
            <div className="ecosystem__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 10V15M22 10L12 5L2 10L12 15L22 10ZM6 12V17C6 17 8.68629 19 12 19C15.3137 19 18 17 18 17V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="ecosystem__card-title">Learn. Discover. Choose Better.</h3>
            <p className="ecosystem__card-desc">
              Our learning platform gives students a structured environment to build skills, explore courses, and learn at their own pace. We have a framework to upskill you with our platform, helping you grow and stay ahead in your learning journey.
            </p>
            <div className="ecosystem__flow">
              <span className="ecosystem__node ecosystem__node--student">Learn</span>
              <span className="ecosystem__node-line"></span>
              <span className="ecosystem__node ecosystem__node--student">Discover</span>
              <span className="ecosystem__node-line"></span>
              <span className="ecosystem__node ecosystem__node--student">Choose</span>
            </div>
          </div>

          {/* Central Hub */}
          <div className="ecosystem__hub fade-up">
            <div className="ecosystem__hub-ring"></div>
            <div className="ecosystem__hub-ring ecosystem__hub-ring--delay"></div>
            <div className="ecosystem__hub-content">
              <div className="ecosystem__hub-logo">
                <img src="/ottobon-logo.png" alt="Ottobon" className="ecosystem__hub-logo-img" />
              </div>
              <span className="ecosystem__hub-text">OTTOBON<br/>ACADEMY</span>
            </div>
          </div>

          {/* Mobile Connector */}
          <div className="ecosystem__mobile-line"></div>

          {/* College Card */}
          <div className="ecosystem__card ecosystem__card--college fade-up">
            <div className="ecosystem__card-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 22V4C6 3.44772 6.44772 3 7 3H17C17.5523 3 18 3.44772 18 4V22M6 22H4M6 22H18M18 22H20M10 6H14M10 10H14M10 14H14M10 18H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3 className="ecosystem__card-title">Be Discoverable. Be Digital.</h3>
            <p className="ecosystem__card-desc">
              Great colleges don't always have a strong digital presence. We help educational institutions build and improve their digital profiles—making their courses, programs, campus information, achievements, and opportunities easier for students to discover and understand.
            </p>
            <div className="ecosystem__flow">
              <span className="ecosystem__node ecosystem__node--college">Build</span>
              <span className="ecosystem__node-line"></span>
              <span className="ecosystem__node ecosystem__node--college">Improve</span>
              <span className="ecosystem__node-line"></span>
              <span className="ecosystem__node ecosystem__node--college text-nowrap">Get Discovered</span>
            </div>
          </div>
        </div>

        {/* Goal Banner */}
        <div className="goal-banner fade-up">
          <span className="goal-banner__badge">Our Goal</span>
          <p className="goal-banner__text">
            To create a digital ecosystem where <strong className="text-gold">students can find the right opportunities</strong> and <strong className="text-teal">institutions can be found for the right reasons</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
