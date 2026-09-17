import React from "react";
import BlogHeader from "../components/BlogHeader";
import Navbar from "../components/Navbar";
import BlogList from "../components/BlogList";
import WhatsappBanner from "../components/WhatsappBanner";
import Footer from "../components/Footer";

const BlogMain = () => {
  return (
    <>
      <Navbar />
      <BlogHeader />
      <BlogList />
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default BlogMain;
