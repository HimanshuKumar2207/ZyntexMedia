import {
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaJava,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiFigma,
  SiAdobexd,
  SiMysql,
  SiAndroidstudio,
  SiGoogleads,
  SiFirebase,
  SiJira,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import {
  TbCircleLetterCFilled,
  TbBrandReactNative,
  TbSeo,
} from "react-icons/tb";
import { FaFlutter, FaSwift, FaMeta } from "react-icons/fa6";
import Title from "./Title";

const Skills = () => {
  const expertise = [
    { id: 1, name: "React.js", icon: <FaReact />, color: "text-sky-400" },
    { id: 2, name: "Next.js", icon: <SiNextdotjs />, color: "text-black" },
    { id: 3, name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
    { id: 4, name: "Bootstrap", icon: <FaBootstrap />, color: "text-purple-600" },
    { id: 5, name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    { id: 6, name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
    { id: 7, name: "Express.js", icon: <SiExpress />, color: "text-gray-800" },
    { id: 8, name: "MongoDB", icon: <SiMongodb />, color: "text-green-700" },
    { id: 9, name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
    { id: 10, name: "REST API Development", icon: <FaNodeJs />, color: "text-gray-700" },
    { id: 11, name: "React Native", icon: <TbBrandReactNative />, color: "text-sky-500" },
    { id: 12, name: "Flutter", icon: <FaFlutter />, color: "text-blue-400" },
    { id: 13, name: "Android Studio", icon: <SiAndroidstudio />, color: "text-green-500" },
    { id: 14, name: "Swift (iOS)", icon: <FaSwift />, color: "text-orange-500" },
    { id: 15, name: "AWS", icon: <FaAws />, color: "text-yellow-500" },
    { id: 16, name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
    { id: 18, name: "SEO Optimization", icon: <TbSeo />, color: "text-green-600" },
    { id: 19, name: "Google Ads", icon: <SiGoogleads />, color: "text-blue-500" },
    { id: 20, name: "Meta Ads", icon: <FaMeta />, color: "text-blue-700" },
    { id: 21, name: "Java", icon: <FaJava />, color: "text-red-600" },
    { id: 22, name: "C Language", icon: <TbCircleLetterCFilled />, color: "text-blue-800" },
    { id: 23, name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
  ];

  const tools = [
    { id: 1, name: "Git & GitHub", icon: <FaGithub />, color: "text-black" },
    { id: 2, name: "Postman", icon: <SiPostman />, color: "text-orange-500" },
    { id: 3, name: "VS Code", icon: <VscVscode />, color: "text-blue-600" },
    { id: 4, name: "Figma", icon: <SiFigma />, color: "text-pink-500" },
    { id: 5, name: "Adobe XD", icon: <SiAdobexd />, color: "text-pink-700" },
    { id: 6, name: "Jira", icon: <SiJira />, color: "text-blue-500" },
    { id: 7, name: "Firebase Console", icon: <SiFirebase />, color: "text-yellow-400" },
    { id: 31, name: "Slack", icon: <FaSlack />, color: "text-purple-500" },
  ];

  return (
    <div className="w-full bg-white/15 mt-[-250px] sm:mt-0 sm:py-20 sm:pb-24 px-4 sm:px-6 lg:px-20 relative overflow-hidden py-10">

      <div className="relative z-10 max-w-7xl mx-auto">
        <Title
          heading1="Our Expertise & Technologies"
          heading2="ZyntexMedia delivers enterprise-grade, scalable, and growth-focused digital solutions."
        />

        {/* About Section */}
        <div className="w-full mb-12 sm:mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 bg-opacity-80 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-2xl border border-white border-opacity-30 text-center">
            <p className="text-white text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              At{" "}
              <span className="font-bold text-orange-500">ZyntexMedia</span>,
              We craft innovative digital experiences that seamlessly blend
              creativity, technology, and strategy. From mobile apps and
              enterprise platforms to digital marketing, we deliver solutions
              that drive growth, engagement, and impact. Our mission is to help
              brands evolve faster, scale smarter, and achieve lasting success
              in the digital era.
            </p>
            <blockquote className="italic text-lg sm:text-xl font-semibold text-black border-l-4 border-orange-500 pl-3 sm:pl-4">
              "Innovation is not just building technology — it’s building the
              future."
            </blockquote>
          </div>
        </div>

        {/* Technologies Grid */}
        <div className="mb-12 sm:mb-16">
          <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-xl border border-white border-opacity-30">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center sm:text-left">
              Our Technical Expertise
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {expertise.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className={`text-3xl sm:text-4xl mb-2 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div>
          <div className="bg-white bg-opacity-80 backdrop-blur-lg p-6 sm:p-8 rounded-3xl shadow-xl border border-white border-opacity-30">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 sm:mb-8 text-center sm:text-left">
              Development & Collaboration Tools
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
              {tools.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col items-center p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:-translate-y-1"
                >
                  <div className={`text-3xl sm:text-4xl mb-2 ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-gray-800 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Background Orb */}
        <div className="absolute -right-10 sm:-right-20 -bottom-10 sm:-bottom-20 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-gradient-to-r from-orange-100 to-orange-200 opacity-20 filter blur-3xl -z-10" />
      </div>
    </div>
  );
};

export default Skills;
