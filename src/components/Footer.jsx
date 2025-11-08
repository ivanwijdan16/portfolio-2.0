import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";

const Footer = () => {
  const items = [
    { icon: <VscHome size={18} />, label: "Home", onClick: () => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscAccount size={18} />, label: "About Me", onClick: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
    { icon: <VscArchive size={18} />, label: "Project", onClick: () => document.getElementById("project")?.scrollIntoView({ behavior: "smooth" }) },
  ];

  return (
    <div className="mt-32 pb-8 relative z-10">
      {/* Grid container untuk desktop, flex untuk mobile */}
      <div className="w-full flex flex-col md:grid md:grid-cols-3 items-center gap-6">
        {/* Judul - kiri di desktop, atas di mobile */}
        <div className="order-1 md:order-none flex justify-start">
          <h1 className="text-2xl font-bold">Portfolio</h1>
        </div>

        {/* Social Media Icons - tengah (center aligned) */}
        <div className="flex items-center justify-center gap-5 order-2 md:order-none">
          {/* X (Twitter) */}
          <a
            href="https://x.com/0xdvaN"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm border-2 border-blue-500/30 hover:border-blue-400/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group"
            aria-label="X (Twitter)"
          >
            <i className="ri-twitter-x-fill text-2xl text-gray-300 group-hover:text-white transition-colors"></i>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/ivanwijdan/"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm border-2 border-blue-500/30 hover:border-pink-400/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(236,72,153,0.4)] transition-all duration-300 group"
            aria-label="Instagram"
          >
            <i className="ri-instagram-fill text-2xl text-gray-300 group-hover:text-pink-400 transition-colors"></i>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@xzesoxee"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm border-2 border-blue-500/30 hover:border-red-400/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(239,68,68,0.4)] transition-all duration-300 group"
            aria-label="YouTube"
          >
            <i className="ri-youtube-fill text-2xl text-gray-300 group-hover:text-red-400 transition-colors"></i>
          </a>

          {/* Facebook */}
          <a
            href="https://web.facebook.com/ivanwijdan.boediardjo"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-950/40 to-transparent backdrop-blur-sm border-2 border-blue-500/30 hover:border-blue-500/60 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 group"
            aria-label="Facebook"
          >
            <i className="ri-facebook-fill text-2xl text-gray-300 group-hover:text-blue-400 transition-colors"></i>
          </a>
        </div>

        {/* Dock - kanan di desktop, bawah di mobile */}
        <div className="order-3 md:order-none flex justify-end mt-15 md:mt-0">
          <Dock items={items} panelHeight={30} baseItemSize={60} magnification={100} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
