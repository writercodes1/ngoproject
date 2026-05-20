import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { DonationSection } from "./components/DonationSection";
import { VolunteerForm } from "./components/VolunteerForm";
import { ImpactShowcase } from "./components/ImpactShowcase";
import { Testimonials } from "./components/Testimonials";
import { Campaigns } from "./components/Campaigns";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <DonationSection />
        <VolunteerForm />
        <ImpactShowcase />
        <Testimonials />
        <Campaigns />
      </main>
      <Footer />
    </div>
  );
}
