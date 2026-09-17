import React from "react";
import {
  Cloud,
  GitBranch,
  ShieldCheck,
  Server,
  CheckCircle2,
  Search,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsappBanner from "./WhatsappBanner";

function Pill({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs sm:text-sm text-sky-700">
      <CheckCircle2
        className="w-4 h-4 text-sky-600 shrink-0"
        aria-hidden="true"
      />
      {children}
    </span>
  );
}

const DevOpsDeployment = () => {
  const onPrimaryCta = () => {
    window.open(
      "https://wa.me/917479867857?text=Hi! I’d like a free consultation on DevOps solutions.",
      "_blank"
    );
  };

  return (
    <>
      <Navbar />
      <div className="text-gray-900">
        {/* Hero Section */}

        <header className="bg-gradient-to-br from-sky-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-16 sm:pt-24 pb-12">
            <div className="max-w-3xl animate-fadeIn">
              <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs sm:text-sm font-medium text-sky-600">
                <Search className="w-4 h-4" /> DevOps & Deployment Services
              </span>
              <h1 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
                Empowering Growth with Scalable <br />  DevOps Solutions
              </h1>
              <p className="mt-3 text-sm sm:text-base lg:text-lg text-gray-600">
                Accelerating software delivery, automating workflows, and
                ensuring secure, reliable deployments with next-gen DevOps
                practices.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-3">
                <Pill>Cloud</Pill>
                <Pill>Automation</Pill>
                <Pill>CI/CD</Pill>
                <Pill>Monitoring</Pill>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={onPrimaryCta}
                  className="inline-flex items-center justify-center rounded-2xl bg-sky-600 px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-white shadow hover:bg-sky-500 transition"
                >
                  Start a DevOps Project
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-2xl border border-gray-300 bg-white px-4 sm:px-5 py-2.5 sm:py-3 font-semibold text-gray-700 hover:bg-gray-50 transition"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Services Section */}
        <section
          id="services"
          className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white"
        >
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900">
            Our DevOps Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: (
                  <Cloud className="h-10 w-10 sm:h-12 sm:w-12 text-sky-600" />
                ),
                title: "Cloud Infrastructure",
                desc: "Deploy and manage scalable environments on AWS, Azure, and GCP.",
              },
              {
                icon: (
                  <GitBranch className="h-10 w-10 sm:h-12 sm:w-12 text-sky-600" />
                ),
                title: "CI/CD Pipelines",
                desc: "Automated build, test, and deployment for faster, reliable releases.",
              },
              {
                icon: (
                  <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12 text-sky-600" />
                ),
                title: "Security & Compliance",
                desc: "Shift-left security with compliance checks, monitoring, and risk control.",
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl shadow-lg bg-gray-50 hover:shadow-xl transition text-center sm:text-left"
              >
                <div className="mb-4 flex justify-center sm:justify-start">
                  {card.icon}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900">
            Our DevOps Process
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                step: "1. Assessment",
                desc: "Analyzing infrastructure & identifying bottlenecks.",
              },
              {
                step: "2. Automation",
                desc: "Implementing CI/CD, IaC, and automated workflows.",
              },
              {
                step: "3. Deployment",
                desc: "Seamless rollouts with zero downtime strategies.",
              },
              {
                step: "4. Monitoring",
                desc: "Proactive alerts & real-time infrastructure monitoring.",
              },
              {
                step: "5. Scaling",
                desc: "Optimizing workloads with horizontal & vertical scaling.",
              },
              {
                step: "6. Optimization",
                desc: "Feedback loops for performance and cost efficiency.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white shadow hover:shadow-lg transition text-center sm:text-left"
              >
                <h3 className="text-base sm:text-lg font-semibold mb-2 text-sky-700">
                  {item.step}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900">
            Tools & Technologies
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto text-center">
            {[
              "Docker",
              "Kubernetes",
              "Terraform",
              "Jenkins",
              "GitHub Actions",
              "Ansible",
              "Prometheus",
              "Grafana",
            ].map((tool, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-6 bg-gray-50 text-gray-900 rounded-2xl shadow hover:shadow-lg transition"
              >
                <Server className="h-8 w-8 sm:h-10 sm:w-10 mx-auto mb-2 sm:mb-3 text-sky-600" />
                <p className="text-sm sm:text-base font-semibold">{tool}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 sm:mb-16 text-gray-900">
            Impact of Our DevOps Solutions
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto text-center">
            {[
              { stat: "70%", desc: "Faster Deployment Time" },
              { stat: "60%", desc: "Reduced Infrastructure Costs" },
              { stat: "90%", desc: "Improved Reliability" },
              { stat: "95%", desc: "Fewer Deployment Failures" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-2xl bg-white text-gray-900 shadow hover:shadow-lg transition"
              >
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-1 sm:mb-2 text-sky-600">
                  {item.stat}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base opacity-80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
      <WhatsappBanner />
      <Footer />
    </>
  );
};

export default DevOpsDeployment;
