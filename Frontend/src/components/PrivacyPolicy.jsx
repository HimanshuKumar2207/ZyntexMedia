import React from "react";
import WhatsappBanner from "../components/WhatsappBanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

// Reusable Section Component
const Section = ({ title, content }) => (
  <div className="mb-6">
    <h2 className="text-2xl font-semibold mb-2 text-gray-900">{title}</h2>
    <div className="text-gray-700 text-lg">{content}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      {/* Main Content */}
      <div className="bg-white text-gray-800 px-6 md:px-16 py-14 sm:pt-16 sm:pb-0  leading-relaxed">
        <div>
          {/* Page Title */}
          <h1 className="text-4xl md:text-4xl font-extrabold mb-6 text-gray-900">
            Privacy Policy
          </h1>

          <p className="mb-7 text-base">
            <strong>Zyntex Media</strong> built the application as a free
            application. This SERVICE is provided by Zyntex Media at no cost and
            is intended for use as is. This page is used to inform visitors
            regarding our policies with the collection, use, and disclosure of
            Personal Information if anyone decides to use our Service. If you
            choose to use our Service, then you agree to the collection and use
            of information in relation to this policy. The Personal Information
            that we collect is used for providing and improving the Service. We
            will not use or share your information with anyone except as
            described in this Privacy Policy.
          </p>

          {/* Sections */}
          <Section
            title="Information Collection and Use"
            content={
              <>
                <p className="mb-5 text-base">
                  For a better experience, while using our Service, we may
                  require you to provide us with certain personally identifiable
                  information, including but not limited to:
                </p>
                <ul className="list-disc pl-6 mb-5 space-y-2 text-base">
                  <li>Name</li>
                  <li>Contact Number</li>
                  <li>Email ID</li>
                  <li>Address</li>
                </ul>
                <p className="mb-5 text-base">
                  The information that we request will be retained on your
                  device and is not collected by us in any way.
                </p>
                <p className="mb-5 text-base">
                  The app does use third-party services that may collect
                  information used to identify you.
                </p>
                <p className="mb-3">Third-party services used by the app:</p>
                <ul className="list-disc pl-6 space-y-2 text-base font-bold">
                  <li>Google Play</li>
                  <li>Facebook</li>
                </ul>
              </>
            }
          />

          <Section
            title="Log Data"
            content={
              <p className="text-base">
                Whenever you use our Service, in the case of an error in the
                app, we collect data and information (through third-party
                products) on your phone called Log Data. This Log Data may
                include details such as your device Internet Protocol (“IP”)
                address, device name, operating system version, configuration of
                the app, the time and date of your use of the Service, and other
                statistics.
              </p>
            }
          />

          <Section
            title="Cookies"
            content={
              <p className="text-base">
                Cookies are files with a small amount of data that are commonly
                used as anonymous unique identifiers. These are sent to your
                browser from the websites you visit and are stored on your
                device's internal memory. The Service does not use these cookies
                explicitly, but may use third-party code and libraries that use
                cookies to improve services. You may choose to refuse cookies,
                but some portions of the Service may not be usable.
              </p>
            }
          />

          <Section
            title="Service Providers"
            content={
              <div className="text-base space-y-3">
                <p>
                  We may employ third-party companies and individuals due to the
                  following reasons:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>To facilitate our Service</li>
                  <li>To provide the Service on our behalf</li>
                  <li>To perform Service-related services</li>
                  <li>To assist us in analyzing how our Service is used</li>
                </ul>
                <p>
                  These third parties have access to your Personal Information
                  only to perform the tasks assigned to them on our behalf. They
                  are obligated not to disclose or use the information for any
                  other purpose.
                </p>
              </div>
            }
          />

          <Section
            title="Security"
            content={
              <p className="text-base">
                We value your trust in providing us with your Personal
                Information, and we strive to use commercially acceptable means
                of protecting it. However, no method of transmission over the
                internet or method of electronic storage is 100% secure and
                reliable, and we cannot guarantee absolute security.
              </p>
            }
          />

          <Section
            title="Links to Other Sites"
            content={
              <p className="text-base">
                This Service may contain links to other websites. If you click a
                third-party link, you will be directed to that site. We strongly
                advise you to review the Privacy Policy of those websites. We
                have no control over and assume no responsibility for the
                content, privacy policies, or practices of any third-party sites
                or services.
              </p>
            }
          />

          <Section
            title="Children’s Privacy"
            content={
              <p className="text-base">
                Our Services do not address anyone under the age of 13. We do
                not knowingly collect personally identifiable information from
                children under 13. If we discover a child has provided us with
                personal information, we immediately delete it from our servers.
                If you are a parent/guardian and become aware your child has
                provided us with personal information, please contact us so we
                can take necessary actions.
              </p>
            }
          />

          <Section
            title="Changes to This Privacy Policy"
            content={
              <p className="text-base">
                We may update our Privacy Policy from time to time. Please
                review this page periodically for any changes. We will notify
                you of updates by posting the revised Privacy Policy here. This
                policy is effective as of.
              </p>
            }
          />

          <Section
            title="Contact Us"
            content={
              <p className="text-base">
                If you have any questions or suggestions about our Privacy
                Policy, do not hesitate to contact us at:{" "}
                <a
                  href="mailto:zyntexmedia@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  zyntexmedia@gmail.com
                </a>
              </p>
            }
          />

          <Section
            title="Changes to Terms and Conditions"
            content={
              <p className="text-base">
                We may update our Terms and Conditions from time to time. Please
                review this page periodically for any updates. Any changes will
                be posted here.
              </p>
            }
          />

          <p className="text-sm text-gray-500 mt-12 text-center">
            🔹 This privacy policy page was originally generated using
            privacypolicytemplate.net and modified by Techvers Media.
          </p>
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/"
            className="inline-block px-5 sm:px-6 py-2 sm:py-3 bg-blue-600 text-white text-sm sm:text-base rounded-md hover:bg-blue-700 transition"
          >
            Back to Home
          </Link>
        </div>
      </div>

      {/* WhatsApp Banner + Footer */}
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
