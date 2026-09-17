import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { Routes, Route } from "react-router-dom";
import "quill/dist/quill.snow.css";
import { Toaster } from "react-hot-toast";

import { useAppContext } from "./context/AppContext";

// ================= PUBLIC PAGES =================
import Home from "./Pages/Home";
import About from "./Pages/About";
import Expertise from "./Pages/Expertise";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

// ================= PUBLIC SERVICE PAGES =================
import WebDev from "./components/WebDev";
import AppDev from "./components/AppDev";
import UiUxDesign from "./components/UiUxDesign";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Terms from "./components/Terms";

// ================= AUTH =================
import Login from "./components/Admin/Login";

// ================= PROJECT ADMIN =================
import ProjectLayout from "./Pages/Project Admin/ProjectLayout";
import AddProject from "./Pages/Project Admin/AddProject";
import ListProject from "./Pages/Project Admin/ListProject";

// ================= LEAD ADMIN =================
import LeadLayout from "./components/Admin/LeadLayout";
import Inquiries from "./Pages/LeadAdmin/Inquiries";

// ================= OTHER COMPONENTS =================
import ScrollToTop from "./components/ScrollToTop";
import Marketing from "./components/Marketing";

const App = () => {
  const { token } = useAppContext();

  return (
    <>
      <ScrollToTop />

      <Routes>
        {/* =====================================================
            PUBLIC ROUTES
        ===================================================== */}

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/expertise" element={<Expertise />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/contact" element={<Contact />} />

        {/* =====================================================
            SERVICE ROUTES
        ===================================================== */}

        <Route path="/webdev" element={<WebDev />} />

        <Route path="/appdev" element={<AppDev />} />

        <Route path="/uiux" element={<UiUxDesign />} />

        <Route path="digital" element={<Marketing />} />

        <Route path="/privacy" element={<PrivacyPolicy />} />

        <Route path="/terms" element={<Terms />} />

        {/* =====================================================
            PROJECT ADMIN
        ===================================================== */}

        <Route
          path="/project-admin"
          element={token ? <ProjectLayout /> : <Login adminType="project" />}
        >
          {/* /project-admin */}
          <Route index element={<AddProject />} />

          {/* /project-admin/listProject */}
          <Route path="listProject" element={<ListProject />} />
        </Route>

        {/* =====================================================
            LEAD ADMIN
        ===================================================== */}

        <Route
          path="/lead-admin"
          element={token ? <LeadLayout /> : <Login adminType="lead" />}
        >
          {/* /lead-admin */}
          <Route index element={<Inquiries />} />
        </Route>

        {/* =====================================================
            404
        ===================================================== */}

        <Route
          path="*"
          element={
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>

                <p className="mt-3 text-gray-500">Page not found</p>

                <a
                  href="/"
                  className="inline-block mt-6 px-5 py-2.5 rounded-lg bg-gray-900 text-white hover:bg-gray-700 transition"
                >
                  Go Home
                </a>
              </div>
            </div>
          }
        />
      </Routes>

      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};

export default App;
