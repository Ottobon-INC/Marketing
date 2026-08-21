import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Features from '../components/Features';
import Journey from '../components/Journey';
import GBPEducation from '../components/GBPEducation';
import PricingTable from '../components/PricingTable';

function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <Features />
      <Journey />
      <GBPEducation />
      <PricingTable />
    </main>
  );
}

export default Home;
