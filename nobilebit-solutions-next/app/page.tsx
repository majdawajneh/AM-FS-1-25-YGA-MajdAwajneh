import NavBar from "@/components/NavBar";
import LandingPage from "@/components/sections/Landing";
import Features from "@/components/sections/Features";
import Gallery from "@/components/sections/Gallery";
import Stuff from "@/components/sections/Stuff";
import Team from "@/components/sections/Team";
import Techs from "@/components/sections/Techs";
import Pricing from "@/components/sections/Pricing";
import OurClients from "@/components/sections/OurClients";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/Footer";
import ClientEffects from "@/components/ClientEffects";

export default function Home() {
  return (
    <div>
      <ClientEffects />
      <NavBar />
      <LandingPage />
      <Features />
      <Gallery />
      <Stuff />
      <Team />
      <Techs />
      <Pricing />
      <OurClients />
      <FAQ />
      <Footer />
    </div>
  );
}

