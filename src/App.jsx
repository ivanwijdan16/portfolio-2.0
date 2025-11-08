import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import VariableProximity from "./components/VariableProximity/VariableProximity";
import BlurText from "./components/BlurText/BlurText";
import ScrambledText from "./components/ScrambledText/ScrambledText";
import SplitText from "./components/SplitText/SplitText";
import Lanyard from "./components/Lanyard/Lanyard";
import GlassIcons from "./components/GlassIcons/GlassIcons";
import { listTools, listProyek } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import LiquidEther from "./components/LiquidEther/LiquidEther";
import ProjectGallery from "./components/ProjectGallery/ProjectGallery"; // <-- IMPORT PROJECT GALLERY
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

function App() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup
  const [activeRole, setActiveRole] = useState("gd"); // gd, sqa, atau wd
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleProjectClick = (project) => {
    // Jika project adalah QA atau Web Development, langsung redirect ke URL
    if (project.role === "sqa" || project.role === "wd") {
      window.open(project.url, "_blank");
    } else {
      setSelectedProject(project);
    }
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleFormSubmit = () => {
    // Set flag di localStorage sebelum form submit
    localStorage.setItem("contactFormSubmitted", "true");
  };

  // Filter project berdasarkan role yang aktif
  const filteredProjects = listProyek.filter((project) => project.role === activeRole);

  // -------------------------

  useEffect(() => {
    // Check jika baru saja submit form (dari localStorage)
    const formSubmitted = localStorage.getItem("contactFormSubmitted");

    if (formSubmitted === "true") {
      // Show success message
      setShowSuccessMessage(true);

      // Clear localStorage
      localStorage.removeItem("contactFormSubmitted");

      // Scroll to contact section
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);

      // Hide message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
      return;
    }

    // Handle page reload
    const isReload = performance.getEntriesByType("navigation")[0]?.type === "reload";
    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen -z-10 bg-gradient-to-br from-[#0a0f1e] via-[#0f1629] to-[#1a1f3e]">
        <LiquidEther colors={["#000000", "#0a0a0a", "#1e3a8a", "#2563eb", "#3b82f6"]} mouseForce={25} cursorSize={120} autoDemo={true} autoSpeed={0.6} autoIntensity={2.5} resolution={0.6} dt={0.016} />
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto max-w-[1600px] px-4">
          <div ref={heroRef} className="hero grid md:grid-cols-[1.5fr_1fr] items-center md:justify-items-stretch pt-24 md:pt-10 xl:gap-8 gap-6 grid-cols-1">
            <div className="animate__animated animate__fadeInUp animate__delay-3s">
              {/* <div className="flex items-center gap-3 mb-6 bg bg-zinc-800 w-fit p-4 rounded-2xl">
                <img src="./assets/faris1.png" className="w-10 rounded-md" />
                <q>Avoid or just undertake it</q>
              </div> */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 whitespace-normal md:whitespace-nowrap text-center md:text-left">
                <VariableProximity label="Hi I'm Ivan Wijdan Boediardjo" fromFontVariationSettings="'wght' 700" toFontVariationSettings="'wght' 900" containerRef={heroRef} radius={100} falloff="linear" />
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 mb-6 whitespace-normal md:whitespace-nowrap text-center md:text-left">Graphics Designer | Web Developer | Quality Assurance Engineer</p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start sm:gap-4 gap-3 w-full sm:w-auto mb-6">
                <a href="./assets/CV.pdf" download="Faris_Edrik_Prayoga_CV.pdf" className="w-full sm:w-auto text-center font-semibold bg-[#1a1a1a] p-3 sm:p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors cursor-pointer">
                  <ShinyText text="Download CV" disabled={false} speed={3} className="custom-class" />
                </a>

                <a href="#project" className="w-full sm:w-auto text-center font-semibold bg-[#1a1a1a] p-3 sm:p-4 px-6 rounded-full border border-gray-700 hover:bg-[#222] transition-colors cursor-pointer">
                  <ShinyText text="Explore My Projects" disabled={false} speed={3} className="custom-class" />
                </a>
              </div>

              {/* Social Media Icons */}
              <div className="flex items-center justify-center md:justify-start gap-4">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ivanwijdanboediardjo/"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm border-2 border-blue-500/30 hover:border-blue-400/70 hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300 group cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <i className="ri-linkedin-fill text-2xl text-gray-300 group-hover:text-blue-400 transition-colors"></i>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ivanwijdan16"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm border-2 border-blue-500/30 hover:border-gray-400/70 hover:scale-110 hover:shadow-[0_0_25px_rgba(156,163,175,0.6)] transition-all duration-300 group cursor-pointer"
                  aria-label="GitHub"
                >
                  <i className="ri-github-fill text-2xl text-gray-300 group-hover:text-white transition-colors"></i>
                </a>

                {/* Pinterest */}
                <a
                  href="https://id.pinterest.com/ivanwijdan/"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm border-2 border-blue-500/30 hover:border-red-400/70 hover:scale-110 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)] transition-all duration-300 group cursor-pointer"
                  aria-label="Pinterest"
                >
                  <i className="ri-pinterest-fill text-2xl text-gray-300 group-hover:text-red-400 transition-colors"></i>
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end md:ml-auto md:justify-self-end animate__animated animate__fadeInUp animate__delay-4s w-full">
              <div className="w-full max-w-[380px] sm:max-w-[420px] md:max-w-none mx-auto md:ml-auto md:mr-0 md:pl-16">
                <ProfileCard
                  name="Ivan"
                  title="QA Engineer"
                  handle="ivanwijdan"
                  status="Online"
                  contactText="Contact Me"
                  avatarUrl="./assets/ivan.png"
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        {/* tentang */}
        <div className="mt-15 mx-auto w-full max-w-[1600px] rounded-3xl border-[5px] border-blue-600/40 shadow-[0_0_30px_rgba(37,99,235,0.4)] bg-gradient-to-br from-[#0a0f1e] via-[#0f1629] to-[#1a1f3e] p-8" id="about">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 pt-0 px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            {/* Kolom kiri - Lanyard */}
            <div className="basis-full md:basis-5/12 pr-0 md:pr-8 overflow-hidden max-w-full flex justify-center border-b md:border-b-0 md:border-r border-blue-500/30">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>

            {/* Kolom kanan - Text */}
            <div className="basis-full md:basis-7/12 pl-0 md:pl-8 py-4">
              <div className="flex-1 text-left">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">About Me</h2>

                <BlurText
                  text="I'm Ivan Wijdan Boediardjo — a passionate developer specializing in web development, software quality assurance, and creative design. I focus on building responsive, reliable, and visually engaging digital products that deliver seamless user experiences. With over three years of experience and more than 10 completed projects, I combine technical precision with design thinking to craft scalable and impactful solutions that drive digital innovation."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="text-base md:text-lg leading-relaxed mb-10 text-gray-300"
                />

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 px-1 overflow-visible">
                  <div className="bg-gradient-to-br from-blue-950/80 to-blue-900/50 backdrop-blur-xl rounded-xl p-6 border-2 border-blue-500/40 hover:border-blue-400/60 md:hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        10<span className="text-blue-400">+</span>
                      </h1>
                      <p className="text-gray-300 text-sm">Project Finished</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-950/80 to-blue-900/50 backdrop-blur-xl rounded-xl p-6 border-2 border-blue-500/40 hover:border-blue-400/60 md:hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                        1<span className="text-blue-400">+</span>
                      </h1>
                      <p className="text-gray-300 text-sm">Years of Experience</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-950/80 to-blue-900/50 backdrop-blur-xl rounded-xl p-6 border-2 border-blue-500/40 hover:border-blue-400/60 md:hover:scale-105 transition-transform duration-300">
                    <div className="text-center">
                      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent whitespace-nowrap">
                        3.93<span className="text-blue-400">/4.00</span>
                      </h1>
                      <p className="text-gray-300 text-sm">GPA</p>
                    </div>
                  </div>
                </div>

                <ShinyText text="Working with precision, designing with purpose." disabled={false} speed={3} className="text-sm md:text-base text-blue-400" />
              </div>
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          {/* Header Section with 2 columns */}
          <div className="grid md:grid-cols-2 gap-8 mb-16" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
            {/* Left Column - Title */}
            <div>
              <p className="text-lg md:text-xl font-serif italic text-gray-400 mb-2">My Professional</p>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Technical Skills and
                <br />
                Tools
              </h1>
            </div>

            {/* Right Column - Description */}
            <div className="flex items-center">
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">With a strong foundation in web development, software testing, and creative design, I utilize modern tools and technologies to craft reliable, scalable, and visually appealing digital products.</p>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="tools-box grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
            {listTools.map((tool, index) => (
              <div key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 50} data-aos-once="true" className="flex flex-col items-center gap-4 group">
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full border-2 border-blue-500/40 bg-gradient-to-br from-blue-950/30 to-transparent backdrop-blur-sm flex items-center justify-center hover:border-blue-400/60 hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                  <img src={tool.gambar} alt={tool.nama} className="w-16 h-16 sm:w-20 sm:h-20 object-contain transition-all duration-300 group-hover:scale-110" />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-white">{tool.nama}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="project">
          <div className="text-center mb-8 max-w-5xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              Projects
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed md:leading-loose" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
              Showcasing diverse projects that highlight my expertise in design, development, and quality assurance. Combining creativity, precision, and functionality to deliver impactful digital solutions.
            </p>
          </div>

          {/* Role Tabs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 px-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            <button
              onClick={() => setActiveRole("gd")}
              className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                activeRole === "gd"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.6)] scale-105 border-2 border-blue-400/50"
                  : "bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm text-gray-300 hover:text-white border-2 border-blue-500/30 hover:border-blue-400/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              }`}
            >
              <span className="hidden sm:inline">Graphic Design</span>
              <span className="sm:hidden">GD</span>
            </button>
            <button
              onClick={() => setActiveRole("sqa")}
              className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                activeRole === "sqa"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.6)] scale-105 border-2 border-blue-400/50"
                  : "bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm text-gray-300 hover:text-white border-2 border-blue-500/30 hover:border-blue-400/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              }`}
            >
              <span className="hidden sm:inline">Quality Assurance</span>
              <span className="sm:hidden">SQA</span>
            </button>
            <button
              onClick={() => setActiveRole("wd")}
              className={`px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base cursor-pointer ${
                activeRole === "wd"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-[0_0_25px_rgba(59,130,246,0.6)] scale-105 border-2 border-blue-400/50"
                  : "bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm text-gray-300 hover:text-white border-2 border-blue-500/30 hover:border-blue-400/50 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
              }`}
            >
              <span className="hidden sm:inline">Web Development</span>
              <span className="sm:hidden">WD</span>
            </button>
          </div>

          {/* Project Display */}
          <div className="proyek-box mt-8">
            {activeRole === "gd" ? (
              // Project Gallery untuk Graphic Designer
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                <ProjectGallery items={filteredProjects} />
              </div>
            ) : (
              // Grid untuk SQA dan Web Developer
              <>
                <div className="project-grid-container" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
                  <div className="project-grid">
                    {filteredProjects.map((project, index) => (
                      <div key={project.id} className="project-grid-card" onClick={() => handleProjectClick(project)} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 100} data-aos-once="true">
                        <div className="project-card-inner">
                          <div className="project-card-image-wrapper">
                            <img src={project.image} alt={project.title} className="project-card-image" />
                            <div className="project-card-overlay"></div>
                          </div>

                          <div className="project-card-content">
                            <h3 className="project-card-title">{project.title}</h3>
                            <p className="project-card-subtitle">{project.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Button See All */}
                <div className="flex justify-center mt-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" data-aos-once="true">
                  <a href={activeRole === "wd" ? "https://github.com/ivanwijdan16?tab=repositories" : "https://drive.google.com/drive/folders/1rQjlASgT0VuwB5gsYWSuOst8HqBXzttt?usp=drive_link"} target="_blank" rel="noopener noreferrer" className="view-all-button">
                    <span className="button-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        {activeRole === "sqa" ? (
                          // Icon untuk QA (clipboard check)
                          <>
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                            <polyline points="9 14 11 16 15 12"></polyline>
                          </>
                        ) : (
                          // Icon untuk Web Dev (code)
                          <>
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                          </>
                        )}
                      </svg>
                    </span>
                    <span className="button-text">{activeRole === "sqa" ? "See All My Quality Assurance Projects" : "See All My Web Development Projects"}</span>
                    <span className="button-arrow">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </a>
                </div>
              </>
            )}
          </div>
        </div>
        {/* Proyek */}

        {/* Kontak */}
        <div className="kontak mt-32 mb-20 sm:p-10 p-4" id="contact">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl mb-3 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
              Get In Touch
            </h1>
            <p className="text-base md:text-lg text-center mb-12 text-gray-400" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-once="true">
              Have a question or want to work together? Feel free to reach out!
            </p>

            {/* Success Message */}
            {showSuccessMessage && (
              <div className="mb-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-xl border-2 border-green-500/40 rounded-2xl p-4 flex items-center gap-3 animate-[slideDown_0.5s_ease-out]" data-aos="fade-down">
                <div className="flex-shrink-0 w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">Message Sent Successfully!</p>
                  <p className="text-sm text-gray-300">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
                <button onClick={() => setShowSuccessMessage(false)} className="flex-shrink-0 text-gray-400 hover:text-white transition-colors cursor-pointer">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            )}

            {/* Contact Form */}
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">
              <form
                action="https://formsubmit.co/ivanok152@gmail.com"
                method="POST"
                onSubmit={handleFormSubmit}
                className="bg-gradient-to-br from-blue-950/30 to-transparent backdrop-blur-xl border-2 border-blue-500/40 rounded-3xl p-8 md:p-10 shadow-[0_0_30px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all duration-300"
                autoComplete="off"
              >
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 block">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Your name..."
                      className="w-full bg-[#0a0f1e]/60 backdrop-blur-sm border-2 border-blue-500/30 text-white p-3.5 rounded-xl focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 placeholder:text-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-300 block">Email Address</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="your.email@example.com"
                      className="w-full bg-[#0a0f1e]/60 backdrop-blur-sm border-2 border-blue-500/30 text-white p-3.5 rounded-xl focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 placeholder:text-gray-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-300 block">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows="6"
                      placeholder="Tell me about your project or inquiry..."
                      className="w-full bg-[#0a0f1e]/60 backdrop-blur-sm border-2 border-blue-500/30 text-white p-3.5 rounded-xl focus:outline-none focus:border-blue-500/60 focus:shadow-[0_0_20px_rgba(59,130,246,0.2)] transition-all duration-300 resize-none placeholder:text-gray-500"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#0a0f1e]/80 backdrop-blur-sm text-white font-semibold p-4 rounded-xl border-2 border-blue-500/40 hover:border-blue-400/70 hover:bg-[#0f1629]/90 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group cursor-pointer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <ShinyText text="Send Message" disabled={false} speed={3} className="custom-class relative z-10" />
                  </button>
                </div>

                {/* Hidden fields untuk FormSubmit */}
                <input type="hidden" name="_subject" value="New Contact Form Submission - Portfolio" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal isOpen={!!selectedProject} onClose={handleCloseModal} project={selectedProject} />
    </>
  );
}

export default App;
