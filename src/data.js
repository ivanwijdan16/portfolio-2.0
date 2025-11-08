import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import ToolsHTML from "/assets/tools/html.png";
import ToolsCSS from "/assets/tools/css.png";
import ToolsJS from "/assets/tools/js.png";
import ToolsBootstrap from "/assets/tools/bootstrap.png";
import ToolsPHP from "/assets/tools/php.png";
import ToolsLaravel from "/assets/tools/laravel.png";
import ToolsCanva from "/assets/tools/canva.png";
import ToolsPhotoshop from "/assets/tools/photoshop.png";
import ToolsAI from "/assets/tools/ai.png";
import ToolsCorelDraw from "/assets/tools/coreldraw.png";
import ToolsFigma from "/assets/tools/figma.png";
import ToolsCapcut from "/assets/tools/capcut.png";
import ToolsOBS from "/assets/tools/OBS.png";
import ToolsMySQL from "/assets/tools/mysql.png";
import ToolsJira from "/assets/tools/jira.png";
import ToolsPostman from "/assets/tools/postman.png";
import ToolsCypress from "/assets/tools/cypress.png";
import ToolsGithub from "/assets/tools/github.png";

export const listTools = [
  {
    id: 1,
    gambar: ToolsHTML,
    nama: "HTML",
    ket: "Markup Language",
    dad: "0",
  },
  {
    id: 2,
    gambar: ToolsCSS,
    nama: "CSS",
    ket: "Style Sheet",
    dad: "50",
  },
  {
    id: 3,
    gambar: ToolsJS,
    nama: "Javascript",
    ket: "Programming Language",
    dad: "100",
  },
  {
    id: 4,
    gambar: ToolsBootstrap,
    nama: "Bootstrap",
    ket: "CSS Framework",
    dad: "150",
  },
  {
    id: 5,
    gambar: ToolsPHP,
    nama: "PHP",
    ket: "Programming Language",
    dad: "200",
  },
  {
    id: 6,
    gambar: ToolsLaravel,
    nama: "Laravel",
    ket: "PHP Framework",
    dad: "250",
  },
  {
    id: 7,
    gambar: ToolsCanva,
    nama: "Canva",
    ket: "Design Tool",
    dad: "300",
  },
  {
    id: 8,
    gambar: ToolsPhotoshop,
    nama: "Adobe Photoshop",
    ket: "Design Tool",
    dad: "350",
  },
  {
    id: 9,
    gambar: ToolsAI,
    nama: "Adobe Illustrator",
    ket: "Design Tool",
    dad: "400",
  },
  {
    id: 10,
    gambar: ToolsCorelDraw,
    nama: "Corel Draw",
    ket: "Design Tool",
    dad: "450",
  },
  {
    id: 11,
    gambar: ToolsFigma,
    nama: "Figma",
    ket: "Design Tool",
    dad: "500",
  },
  {
    id: 12,
    gambar: ToolsCapcut,
    nama: "Capcut",
    ket: "Video Editor",
    dad: "550",
  },
  {
    id: 13,
    gambar: ToolsOBS,
    nama: "OBS",
    ket: "Streaming Software",
    dad: "600",
  },
  {
    id: 14,
    gambar: ToolsMySQL,
    nama: "MySQL",
    ket: "Database",
    dad: "650",
  },
  {
    id: 15,
    gambar: ToolsJira,
    nama: "Jira",
    ket: "Project Management",
    dad: "700",
  },
  {
    id: 16,
    gambar: ToolsPostman,
    nama: "Postman",
    ket: "API Testing",
    dad: "750",
  },
  {
    id: 17,
    gambar: ToolsCypress,
    nama: "Cypress",
    ket: "Testing Framework",
    dad: "800",
  },
  {
    id: 18,
    gambar: ToolsGithub,
    nama: "GitHub",
    ket: "Version Control",
    dad: "850",
  },
];

// QA Projects Images
import QA1 from "/assets/proyek/QA1.png";
import QA2 from "/assets/proyek/QA2.png";
import QA3 from "/assets/proyek/QA3.png";
import QA4 from "/assets/proyek/QA4.png";
import QA5 from "/assets/proyek/QA5.png";
import QA6 from "/assets/proyek/QA6.png";

// Web Development Projects Images
import WD1 from "/assets/proyek/WD1.png";
import WD2 from "/assets/proyek/WD2.png";
import WD3 from "/assets/proyek/WD3.png";
import WD4 from "/assets/proyek/WD4.png";
import WD5 from "/assets/proyek/WD5.png";
import WD6 from "/assets/proyek/WD6.png";

// Poster untuk Graphic Designer
import PosterKajian from "/assets/poster/Poster Kajian.jpg";
import PosterLomba from "/assets/poster/Poster Lomba.jpg";
import PosterOpenRecruitment from "/assets/poster/Poster Open Recruitment.jpg";
import PosterSeminar from "/assets/poster/Poster Seminar.jpg";
import Poster3 from "/assets/poster/download (3).jpg";
import Poster4 from "/assets/poster/download (4).jpg";
import Poster5 from "/assets/poster/download (5).jpg";
import Poster6 from "/assets/poster/download (6).jpg";

export const listProyek = [
  {
    id: 1,
    image: QA1,
    title: "Loket.com – Online Ticketing Test Plan",
    subtitle: "Test plan ensuring core ticketing functions of Loket.com work reliably and securely.",
    fullDescription:
      "Comprehensive test plan ensuring core ticketing functions of Loket.com work reliably and securely. This document covers test objectives, scope, test strategies, and detailed test scenarios for the online ticketing platform. The test plan includes functional testing, security testing, and performance validation to ensure a seamless user experience for ticket booking and event management.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://docs.google.com/document/d/1w7sWxGO_AR8j_OiZCL6YpOMqeWKU0nji/edit?usp=drive_link&ouid=103238856107248163745&rtpof=true&sd=true",
    dad: "100",
    role: "sqa", // Software Quality Assurance
  },
  {
    id: 2,
    image: WD1,
    title: "Parallax Shoe Store Website",
    subtitle: "Responsive shoe store website with stunning parallax scrolling effects and modern UI design",
    fullDescription:
      "A modern e-commerce website for a shoe store featuring parallax scrolling effects that create an immersive shopping experience. The website includes product displays, interactive animations, and responsive design optimized for all devices. Built with HTML, CSS, and JavaScript to showcase creative web design techniques.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://final-project3-kelompok3.vercel.app/",
    dad: "200",
    role: "wd", // Web Developer
  },
  {
    id: 3,
    image: WD2,
    title: "Tic Tac Toe Game Website",
    subtitle: "Interactive web-based Tic Tac Toe game with smooth animations and multiplayer functionality",
    fullDescription:
      "A fun and interactive Tic Tac Toe game built with JavaScript featuring smooth animations, score tracking, and player vs player gameplay. The game includes win detection algorithm, draw handling, and reset functionality with an intuitive user interface. Perfect demonstration of DOM manipulation and game logic implementation.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://wdp-12.github.io/Finalproject1_Kelompok5/",
    dad: "300",
    role: "wd", // Web Developer
  },
  {
    id: 4,
    image: WD3,
    title: "To-Do List Web Application",
    subtitle: "Simple and efficient task management application with local storage and intuitive interface",
    fullDescription:
      "A practical to-do list web application that helps users organize their daily tasks efficiently. Features include add, edit, delete tasks, mark as complete, and local storage persistence. Built with vanilla JavaScript and modern CSS, demonstrating CRUD operations and data persistence techniques.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://ivanwijdan16.github.io/assignment2-todo-list/",
    dad: "400",
    role: "wd", // Web Developer
  },
  {
    id: 19,
    image: WD4,
    title: "Fetch API Hero Database",
    subtitle: "Dynamic web application demonstrating API integration with Mobile Legends hero database",
    fullDescription:
      "A dynamic website that demonstrates proficiency in working with external APIs using JavaScript Fetch API. The application retrieves and displays Mobile Legends hero data with filtering, search functionality, and detailed hero information. Showcases asynchronous programming, API integration, and data manipulation skills.",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://hero-ml.vercel.app/",
    dad: "1900",
    role: "wd",
  },
  {
    id: 20,
    image: WD5,
    title: "Scholarship Management System",
    subtitle: "Comprehensive scholarship management system with application tracking and admin dashboard",
    fullDescription:
      "A full-stack scholarship management system that streamlines the scholarship application process for students and administrators. Features include student registration, application submission, document upload, application status tracking, and admin dashboard for managing scholarships. Built with modern web technologies to improve accessibility to educational opportunities.",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://github.com/ivanwijdan16/sibk-beasiswa",
    dad: "2000",
    role: "wd",
  },
  {
    id: 21,
    image: WD6,
    title: "Agricultural POS System",
    subtitle: "Agricultural point-of-sale system for managing farming product sales and inventory",
    fullDescription:
      "A specialized point-of-sale (POS) system designed for agricultural businesses to manage product sales, inventory tracking, and customer transactions. The system includes features for product management, sales reporting, stock monitoring, and transaction history. Developed to help farmers and agricultural businesses streamline their operations and improve business efficiency.",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(145deg, #06B6D4, #000)",
    url: "https://github.com/ivanwijdan16/LanggengTani2",
    dad: "2100",
    role: "wd",
  },
  {
    id: 5,
    image: QA2,
    title: "OrangeHRM – Test Scenario & Test Case",
    subtitle: "Test scenarios and cases validating core HR features and workflows in OrangeHRM.",
    fullDescription:
      "Comprehensive test scenarios and test cases validating core HR features and workflows in OrangeHRM. This documentation includes detailed test cases covering employee management, leave management, time tracking, recruitment, and performance evaluation modules. Each test case is structured with preconditions, test steps, expected results, and priority levels to ensure thorough validation of the HR management system.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://docs.google.com/spreadsheets/d/1qd9rLAucuoxWTQKEZKejFBWax8DqvvLPT0k0LkYu9M0/edit?usp=drive_link",
    dad: "500",
    role: "sqa", // Software Quality Assurance
  },
  {
    id: 6,
    image: QA3,
    title: "Bug Reporting",
    subtitle: "Sample bug report showcasing issue tracking, severity classification, and resolution workflow.",
    fullDescription:
      "Professional bug reporting documentation showcasing issue tracking, severity classification, and resolution workflow. This sample demonstrates best practices in defect documentation including detailed steps to reproduce, environment details, screenshots, expected vs actual results, and priority/severity assessment. The report follows industry-standard bug tracking methodologies to ensure clear communication between QA and development teams.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://docs.google.com/spreadsheets/d/1DMEHpCHz5geHQSAMqMdPapvC_gofdOsFm-Mt6OGiSHA/edit?usp=drive_link",
    dad: "600",
    role: "sqa",
  },
  {
    id: 15,
    image: QA4,
    title: "Facebook Login – Test Report",
    subtitle: "Test report summarizing validation results, defects, and outcomes for Facebook login functionality.",
    fullDescription:
      "Comprehensive test report summarizing validation results, defects, and outcomes for Facebook login functionality. This report includes detailed test execution results, identified defects with severity levels, test coverage metrics, and final recommendations. The documentation covers various login scenarios including successful authentication, error handling, security validation, and cross-browser compatibility testing.",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "https://docs.google.com/document/d/1nWa7xZDDwxB77VTHjrss6i_8pUlOtiOR/edit?usp=drive_link&ouid=103238856107248163745&rtpof=true&sd=true",
    dad: "1500",
    role: "sqa",
  },
  {
    id: 16,
    image: QA5,
    title: "API Automation Test – Postman & Dashboard Report",
    subtitle: "Automated API testing using Postman with detailed execution metrics and visual report dashboard.",
    fullDescription:
      "Advanced API automation testing using Postman with detailed execution metrics and visual report dashboard. This project showcases comprehensive API testing including request/response validation, authentication testing, data-driven testing, and integration testing. The dashboard provides real-time execution metrics, success/failure rates, response time analysis, and detailed test results visualization for efficient API quality monitoring.",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(145deg, #F59E0B, #000)",
    url: "https://drive.google.com/drive/folders/1xQaRAESkYEUzcEUXimKLIYDldPNKBtP9?usp=drive_link",
    dad: "1600",
    role: "sqa",
  },
  {
    id: 17,
    image: QA6,
    title: "OrangeHRM – Automation Test with Cypress",
    subtitle: "End-to-end automation testing for OrangeHRM modules using Cypress to validate core HR workflows.",
    fullDescription:
      "Comprehensive end-to-end automation testing for OrangeHRM modules using Cypress framework to validate core HR workflows. This project implements automated test scripts covering employee management, leave management, attendance tracking, and recruitment processes. The test suite includes page object model architecture, data-driven testing, parallel execution, and detailed reporting with screenshots and videos for failed test cases.",
    borderColor: "#EF4444",
    gradient: "linear-gradient(145deg, #EF4444, #000)",
    url: "https://github.com/ivanwijdan16/orangehrm-cypress.git",
    dad: "1700",
    role: "sqa",
  },
  // Graphic Designer Projects
  {
    id: 7,
    image: PosterKajian,
    title: "Poster Kajian Islami",
    subtitle: "Capturing the spiritual essence through compelling visual design for Islamic study events",
    fullDescription: "A thoughtfully designed poster for Islamic study events, combining traditional Islamic aesthetics with modern design principles. The poster effectively communicates event details while maintaining visual harmony and cultural sensitivity.",
    borderColor: "#A855F7",
    gradient: "linear-gradient(145deg, #A855F7, #000)",
    url: "#",
    dad: "700",
    role: "gd",
    tags: ["Graphic Design", "Poster", "Islamic Art"],
  },
  {
    id: 8,
    image: PosterLomba,
    title: "Competition Event Poster",
    subtitle: "Dynamic and energetic design to attract participants to exciting competitions",
    fullDescription: "An eye-catching poster designed to promote competition events. The design uses bold typography, vibrant colors, and strategic layout to capture attention and encourage participation.",
    borderColor: "#EC4899",
    gradient: "linear-gradient(145deg, #EC4899, #000)",
    url: "#",
    dad: "800",
    role: "gd",
    tags: ["Graphic Design", "Event Promotion"],
  },
  {
    id: 9,
    image: PosterOpenRecruitment,
    title: "Open Recruitment Campaign",
    subtitle: "Professional recruitment poster designed to attract top talent",
    fullDescription: "A clean and professional poster for organizational recruitment drives. The design emphasizes credibility, opportunity, and growth while maintaining visual appeal to attract quality candidates.",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(145deg, #8B5CF6, #000)",
    url: "#",
    dad: "900",
    role: "gd",
    tags: ["Graphic Design", "Recruitment", "Branding"],
  },
  {
    id: 10,
    image: PosterSeminar,
    title: "Seminar & Workshop Poster",
    subtitle: "Elegant design showcasing educational events with clarity and sophistication",
    fullDescription: "A sophisticated poster designed for seminars and workshops. The layout prioritizes information hierarchy while maintaining aesthetic appeal, perfect for academic and professional events.",
    borderColor: "#D946EF",
    gradient: "linear-gradient(145deg, #D946EF, #000)",
    url: "#",
    dad: "1000",
    role: "gd",
    tags: ["Graphic Design", "Education", "Event"],
  },
  {
    id: 11,
    image: Poster3,
    title: "Creative Event Poster",
    subtitle: "Artistic exploration of visual communication through innovative design",
    fullDescription: "An experimental poster design that pushes creative boundaries. The composition blends various design elements to create a unique visual experience that captures attention and sparks curiosity.",
    borderColor: "#F472B6",
    gradient: "linear-gradient(145deg, #F472B6, #000)",
    url: "#",
    dad: "1100",
    role: "gd",
    tags: ["Graphic Design", "Art Direction"],
  },
  {
    id: 12,
    image: Poster4,
    title: "Modern Visual Campaign",
    subtitle: "Contemporary design approach to community engagement and awareness",
    fullDescription: "A modern poster design focusing on clean lines, bold typography, and strategic use of negative space. The design effectively communicates the message while maintaining visual interest.",
    borderColor: "#C084FC",
    gradient: "linear-gradient(145deg, #C084FC, #000)",
    url: "#",
    dad: "1200",
    role: "gd",
    tags: ["Graphic Design", "Campaign"],
  },
  {
    id: 13,
    image: Poster5,
    title: "Social Media Visual",
    subtitle: "Engaging digital graphics optimized for social media platforms",
    fullDescription: "A versatile design created for social media marketing campaigns. The layout is optimized for various platforms while maintaining consistent branding and visual impact.",
    borderColor: "#E879F9",
    gradient: "linear-gradient(145deg, #E879F9, #000)",
    url: "#",
    dad: "1300",
    role: "gd",
    tags: ["Graphic Design", "Social Media", "Digital"],
  },
  {
    id: 14,
    image: Poster6,
    title: "Brand Identity Design",
    subtitle: "Comprehensive visual identity showcasing brand personality and values",
    fullDescription: "A cohesive brand identity design that reflects the organization's values and mission. The design system includes color schemes, typography, and visual elements that work harmoniously together.",
    borderColor: "#F0ABFC",
    gradient: "linear-gradient(145deg, #F0ABFC, #000)",
    url: "#",
    dad: "1400",
    role: "gd",
    tags: ["Graphic Design", "Branding", "Identity"],
  },
];
