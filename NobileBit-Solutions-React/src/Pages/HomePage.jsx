// src/pages/HomePage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Landing from '../components/Home/Landing';
import Features from '../components/Home/Features';
import Gallery from '../components/Home/Gallery';
import Stuff from '../components/Home/Stuff';
import Team from '../components/Home/Team';
import Techs from '../components/Home/Techs';
import Pricing from '../components/Home/Pricing';
import OurClients from '../components/Home/OurClients';
import FAQ from '../components/Home/FAQ';
import Footer from '../components/Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Landing />
      <Features />
      <Gallery />
      <Stuff />
      <Team />
      <Techs />
      <Pricing />
      <OurClients />
      <FAQ />
      <Footer />
    </>
  );
}

export default HomePage;