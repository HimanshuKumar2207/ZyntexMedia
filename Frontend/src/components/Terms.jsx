import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import WhatsappBanner from "./WhatsappBanner";
import Footer from "./Footer";

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 text-gray-800 min-h-screen py-12 sm:py-16 sm:pb-20 px-4 sm:px-10 md:px-16">
        <div className="">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600 mb-10 sm:mb-8 text-base sm:text-lg leading-relaxed text-justify">
            Welcome to <span className="font-semibold">ZyntexMedia</span>. By
            accessing or using our website, digital platforms, and professional
            services, you agree to comply with the following Terms & Conditions.
            These terms govern your relationship with us and ensure a secure,
            transparent, and professional experience. Please review them
            carefully before continuing to use our services.
          </p>

          {/* Section Template */}
          {[
            {
              title: "1. Use of Our Services",
              text: "Our services are intended for both individual and organizational use. By using ZyntexMedia offerings, you agree not to misuse the platform, attempt unauthorized access, exploit vulnerabilities, or engage in any activity that may harm our systems or reputation. Users must comply with applicable laws and regulations, and avoid using our services for fraudulent, abusive, or malicious purposes. We reserve the right to monitor activity to ensure compliance and maintain the integrity of our ecosystem.",
            },
            {
              title: "2. Intellectual Property",
              text: "All content, including text, images, logos, branding elements, designs, and digital assets, are the exclusive property of TechversMedia unless otherwise credited. Unauthorized use, reproduction, resale, or distribution of our intellectual property without prior written consent is strictly prohibited. Clients may only use delivered assets for agreed purposes under a service agreement. Any breach of these rights may result in legal action to protect our brand identity and proprietary resources.",
            },
            {
              title: "3. Payments & Subscriptions",
              text: "When engaging with our paid services, clients are required to provide accurate billing details and authorize payments through approved channels. Fees once paid are non-refundable unless explicitly stated in a written agreement or as mandated by law. Subscriptions and recurring services must be canceled in advance to avoid automatic renewal. TechversMedia reserves the right to update pricing or payment terms, with notice provided prior to any changes taking effect.",
            },
            {
              title: "4. Limitation of Liability",
              text: "While we strive to deliver high-quality, secure, and reliable services, TechversMedia shall not be held liable for indirect, incidental, or consequential damages arising from website use, downtime, data loss, cyberattacks, or third-party integrations. Our responsibility is limited to the extent permitted by law, and users assume the risks associated with the use of digital services. In no event shall our total liability exceed the amount paid by the client for the specific service in question.",
            },
            {
              title: "5. Third-Party Links",
              text: "Our website may feature links to external websites, resources, or third-party applications for user convenience. These external sites are not controlled or endorsed by TechversMedia, and we are not responsible for their security, privacy policies, or content. Users are encouraged to review third-party terms independently before engaging. Any reliance on third-party platforms is at the user’s discretion and risk.",
            },
            {
              title: "6. Termination of Services",
              text: "TechversMedia reserves the right to suspend, restrict, or permanently terminate access to services if a user violates these terms, engages in harmful activity, or fails to make due payments. Termination may occur without prior notice in cases of unlawful behavior or threats to system integrity. Clients remain responsible for outstanding balances at the time of termination.",
            },
            {
              title: "7. Changes to These Terms",
              text: "ZyntexMedia may update or modify these Terms & Conditions at any time to reflect changes in our services, legal requirements, or business practices. Updated terms will be effective immediately upon posting on this page. Continued use of our services after changes indicates acceptance of the revised terms. We encourage users to review this page periodically to stay informed.",
            },
            {
              title: "8. Governing Law & Jurisdiction",
              text: "These Terms & Conditions shall be governed by and construed in accordance with the laws of India. Any disputes or claims arising from these terms will fall under the exclusive jurisdiction of the courts in India. Users agree to resolve issues amicably before pursuing legal remedies.",
            },
          ].map((section, idx) => (
            <div key={idx} className="mb-8 sm:mb-10">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
                {section.text}
              </p>
            </div>
          ))}

          {/* Contact Info */}
          <div className="mt-12 bg-white p-5 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">
              Contact Us
            </h2>
            <p className="text-gray-700 mb-3 text-sm sm:text-base leading-relaxed">
              If you have any questions, concerns, or requests regarding these
              Terms & Conditions, please contact us through the following
              channels:
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              Email:{" "}
              <a
                href="mailto:zyntexmedia@gmail.com"
                className="text-blue-600 hover:underline"
              >
                zyntexMedia@gmail.com
              </a>
            </p>
          </div>

          {/* Back to Home */}
          <div className="mt-10 text-center">
            <Link
              to="/"
              className="inline-block px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-md hover:bg-blue-700 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default Terms;
