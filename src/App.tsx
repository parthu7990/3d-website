import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StartSection from "./components/StartSection";
import FeaturesChess from "./components/FeaturesChess";
import FeaturesGrid from "./components/FeaturesGrid";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import CtaFooter from "./components/CtaFooter";

export default function App() {
  return (
    <div className="bg-black text-white selection:bg-white selection:text-black min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <div className="bg-black relative z-10">
          <StartSection />
          <FeaturesChess />
          <FeaturesGrid />
          <Stats />
          <Testimonials />
          <CtaFooter />
        </div>
      </main>
    </div>
  );
}
