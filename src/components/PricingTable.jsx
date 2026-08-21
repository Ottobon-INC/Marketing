import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PricingTable.css';

const availableServices = [
  'Google Business Profile',
  'Website Development',
  'SEO Optimization',
  'Social Media Management'
];

function PricingTable() {
  const ref = useRef(null);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (service) => {
    setSelectedServices(prev =>
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    if (selectedServices.length === 0) {
      alert('Please select at least one service.');
      return;
    }

    setIsSubmitting(true);

    // Using Web3Forms to send email without a backend
    const submissionData = new FormData();
    // TODO: Replace with your actual Web3Forms access key
    submissionData.append("access_key", "25df8ad3-466d-4b5b-bb79-0f9cb42b5220");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("phone", formData.phone);
    submissionData.append("services_selected", selectedServices.join(', '));
    submissionData.append("subject", "New Custom Service Request from Ottobon Proposal");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });
      const data = await response.json();

      if (data.success) {
        if (window.fbq) {
          window.fbq('track', 'Lead');
        }
        alert("Request submitted successfully! We will get back to you soon.");
        setIsModalOpen(false);
        setSelectedServices([]);
        setFormData({ name: '', email: '', phone: '' });
      } else {
        // If the access key is missing/invalid, fallback to mailto for now
        console.error("Web3Forms error:", data);
        alert("Please set up the Web3Forms access key. Falling back to email client...");
        const subject = encodeURIComponent('Custom Service Request');
        const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nSelected Services:\n${selectedServices.map(s => `- ${s}`).join('\n')}`);
        window.location.href = `mailto:info@ottobon.com?subject=${subject}&body=${body}`;
      }
    } catch (error) {
      alert("Error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => e.isIntersecting && e.target.classList.add('visible'));
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="pricing section" id="pricing" ref={ref}>
      <div className="container">
        <div className="pricing__header reveal">
          <span className="pill pill--teal">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Try Before You Decide
          </span>
          <h2 className="pricing__title">
            Start with{' '}
            <span className="pricing__title--italic">Confidence</span>
          </h2>
          <p className="pricing__sub">
            Experience our complete Digital Front Office with flexible, transparent pricing.
            No hidden fees. No lock-in contracts.
          </p>
        </div>

        <div className="pricing__grid">


          {/* Plan 1 */}
          <div className="plan plan--highlight reveal reveal-d1">
            <div className="plan__badge plan__badge--blue">Recommended</div>
            <h3 className="plan__title">Comprehensive Bundle</h3>
            <p className="plan__desc">
              Pay a fixed monthly fee and get full access to all 4 core digital services.
            </p>
            <ul className="plan__features">
              {[
                'Google Business Profile Optimization',
                'Website Development & Management',
                'Comprehensive SEO Strategy',
                'Social Media Management'
              ].map((f, i) => (
                <li key={i}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <div className="plan__cta">
              <button className="btn btn--primary" onClick={() => navigate('/get-started')}>
                Get Bundle Pricing
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none"><path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>
          </div>

          {/* Plan 2 */}
          <div className="plan reveal reveal-d2">
            <div className="plan__badge plan__badge--teal">Flexible</div>
            <h3 className="plan__title">Individual Services</h3>
            <p className="plan__desc">
              Choose only the specific services you need and build your own plan.
            </p>
            <ul className="plan__features">
              {[
                'Select services tailored to your needs',
                'Flexible pricing per individual service',
                'Easily add or remove services anytime',
                'Ideal for targeted marketing goals'
              ].map((f, i) => (
                <li key={i}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" /></svg>
                  {f}
                </li>
              ))}
            </ul>
            <div className="plan__cta">
              <button className="btn btn--ghost" onClick={() => setIsModalOpen(true)}>Select Services</button>
            </div>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="trust reveal reveal-d3">
          <div className="trust__item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            No Lock-in Contracts
          </div>
          <div className="trust__div" />
          <div className="trust__item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" /><path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            100% Transparent Pricing
          </div>
          <div className="trust__div" />
          <div className="trust__item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
            Pilot Program Available
          </div>
        </div>

        {/* Service Selection Modal */}
        {isModalOpen && (
          <div className="pricing-modal-overlay" onClick={() => setIsModalOpen(false)}>
            <div className="pricing-modal" onClick={e => e.stopPropagation()}>
              <div className="pricing-modal__header">
                <h3>Select Individual Services</h3>
                <button className="pricing-modal__close" onClick={() => setIsModalOpen(false)}>&times;</button>
              </div>
              <form onSubmit={handleModalSubmit} className="pricing-modal__form">
                <p className="pricing-modal__desc">Enter your details and select the services you need.</p>

                <div className="pricing-modal__inputs">
                  <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" className="pricing-modal__input" required />
                  <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email Address" className="pricing-modal__input" required />
                  <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number (Optional)" className="pricing-modal__input" />
                </div>

                <div className="pricing-modal__options">
                  {availableServices.map((service, idx) => (
                    <label key={idx} className="pricing-modal__option">
                      <input
                        type="checkbox"
                        checked={selectedServices.includes(service)}
                        onChange={() => toggleService(service)}
                      />
                      <span className="pricing-modal__checkbox"></span>
                      <span className="pricing-modal__text">{service}</span>
                    </label>
                  ))}
                </div>
                <div className="pricing-modal__footer">
                  <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PricingTable;
