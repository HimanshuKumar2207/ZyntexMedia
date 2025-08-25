import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Specialties from "../components/Specialties";
import Services from "../components/Services";
import WhatsappBanner from "../components/WhatsappBanner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Specialties />
      <Services />
      <FAQ />
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default Home;
