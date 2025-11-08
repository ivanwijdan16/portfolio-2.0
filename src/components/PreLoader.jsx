import LiquidEther from "./LiquidEther/LiquidEther";
import { useState, useEffect } from "react";
import CountUp from "./CountUp/CountUp";

const LIQUID_COLORS = ["#1e3a8a", "#1e40af", "#2563eb", "#3b82f6"];

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [countDone, setCountDone] = useState(false);
  const [fadeText, setFadeText] = useState(false);
  const [fadeScreen, setFadeScreen] = useState(false);

  useEffect(() => {
    if (countDone) {
      // Fade teks
      const fadeTextTimer = setTimeout(() => setFadeText(true), 500);

      // Fade seluruh screen
      const fadeScreenTimer = setTimeout(() => setFadeScreen(true), 800);

      // Unmount preloader setelah animasi fade selesai
      const hideTimer = setTimeout(() => setLoading(false), 1800);

      return () => {
        clearTimeout(fadeTextTimer);
        clearTimeout(fadeScreenTimer);
        clearTimeout(hideTimer);
      };
    }
  }, [countDone]);

  return (
    loading && (
      <div className={`w-screen h-screen fixed flex items-center justify-center bg-gradient-to-br from-[#0a0f1e] via-[#0f1629] to-[#1a1f3e] z-[10000] overflow-hidden transition-opacity duration-1000 ${fadeScreen ? "opacity-0" : "opacity-100"}`}>
        <LiquidEther colors={LIQUID_COLORS} mouseForce={25} cursorSize={120} autoDemo={true} autoSpeed={0.6} autoIntensity={2.5} resolution={0.6} dt={0.016} />
        <div className={`absolute text-white text-6xl font-bold transition-all duration-1000 ${fadeText ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"}`}>
          <CountUp from={0} to={100} separator="," direction="up" duration={1} className="count-up-text" onEnd={() => setCountDone(true)} />
        </div>
      </div>
    )
  );
};

export default PreLoader;
