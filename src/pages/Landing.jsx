import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";
import GallerySection from "../components/landing/GallerySection";
import HeroSection from "../components/landing/HeroSection";
import InfoSection from "../components/landing/InfoSection";
import ProductsSection from "../components/landing/ProductsSection";
import SmartCitySection from "../components/landing/SmartCitySection";
import TrafficDataTypes from "../components/landing/TrafficDataTypes";

const Landing = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <InfoSection />
      <TrafficDataTypes />
      <ProductsSection />
      <SmartCitySection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Landing;
