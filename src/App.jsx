import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import Journey from './components/Journey';
import GBPEducation from './components/GBPEducation';
import PricingTable from './components/PricingTable';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <Features />
      <Journey />
      <GBPEducation />
      <PricingTable />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
