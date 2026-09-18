import Hero from "../components/Hero";
import Specialties from "../components/Specialties";
import WhatsappBanner from "../components/WhatsappBanner";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HomeProjects from "../components/HomeProject";
import Offers from "../components/Offer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Offers />
      <Specialties />
      <HomeProjects />
      <FAQ />
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default Home;
