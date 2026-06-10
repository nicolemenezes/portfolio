import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconTable,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconSearch,
  IconWorld,
  IconCommand,
  IconCaretLeftFilled,
  IconCaretDownFilled,
} from "@tabler/icons-react";

export const MacbookScroll = ({ src, showGradient, title, badge }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleX = useTransform(scrollYProgress, [0, 0.3], [1.2, isMobile ? 1 : 1.5]);
  const scaleY = useTransform(scrollYProgress, [0, 0.3], [0.6, isMobile ? 1 : 1.5]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[200vh] shrink-0 scale-[0.35] transform flex-col items-center justify-start py-0 [perspective:800px] sm:scale-50 md:scale-100 md:py-80"
    >
      <motion.h2
        style={{ translateY: textTransform, opacity: textOpacity }}
        className="mb-20 text-center text-2xl sm:text-3xl font-bold text-[#ECDFCC] px-4"
      >
        {title}
      </motion.h2>

      <Lid src={src} scaleX={scaleX} scaleY={scaleY} rotate={rotate} translate={translate} />

      <div className="relative -z-10 h-[22rem] w-[32rem] overflow-hidden rounded-2xl bg-[#3C3D37]">
        <div className="relative h-10 w-full">
          <div className="absolute inset-x-0 mx-auto h-4 w-[80%] bg-[#181C14]" />
        </div>
        <div className="relative flex">
          <div className="mx-auto h-full w-[10%] overflow-hidden"><SpeakerGrid /></div>
          <div className="mx-auto h-full w-[80%]"><Keypad /></div>
          <div className="mx-auto h-full w-[10%] overflow-hidden"><SpeakerGrid /></div>
        </div>
        <Trackpad />
        <div className="absolute inset-x-0 bottom-0 mx-auto h-2 w-20 rounded-tl-3xl rounded-tr-3xl bg-gradient-to-t from-[#3C3D37] to-[#181C14]" />
        {showGradient && (
          <div className="absolute inset-x-0 bottom-0 z-50 h-40 w-full bg-gradient-to-t from-[#181C14] via-[#181C14] to-transparent" />
        )}
        {badge && <div className="absolute bottom-4 left-4">{badge}</div>}
      </div>
    </div>
  );
};

export const Lid = ({ scaleX, scaleY, rotate, translate, src }) => (
  <div className="relative [perspective:800px]">
    <div
      style={{
        transform: "perspective(800px) rotateX(-25deg) translateZ(0px)",
        transformOrigin: "bottom",
        transformStyle: "preserve-3d",
      }}
      className="relative h-[12rem] w-[32rem] rounded-2xl bg-[#181C14] p-2"
    >
      <div
        style={{ boxShadow: "0px 2px 0px 2px #3C3D37 inset" }}
        className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#181C14]"
      >
        <AceternityLogo />
      </div>
    </div>
    <motion.div
      style={{
        scaleX,
        scaleY,
        rotateX: rotate,
        translateY: translate,
        transformStyle: "preserve-3d",
        transformOrigin: "top",
      }}
      className="absolute inset-0 h-96 w-[32rem] rounded-2xl bg-[#181C14] p-2"
    >
      <div className="absolute inset-0 rounded-lg bg-[#3C3D37]" />
      <img
        src={src}
        alt="Project preview"
        className="absolute inset-0 h-full w-full rounded-lg object-cover object-left-top"
      />
    </motion.div>
  </div>
);

export const Trackpad = () => (
  <div
    className="mx-auto my-1 h-32 w-[40%] rounded-xl"
    style={{ boxShadow: "0px 0px 1px 1px #00000020 inset" }}
  />
);

export const KBtn = ({ className, children, childrenClassName, backlit = true }) => (
  <div className={cn("[transform:translateZ(0)] rounded-[4px] p-[0.5px] [will-change:transform]", backlit && "bg-white/[0.2] shadow-xl shadow-white")}>
    <div
      className={cn("flex h-6 w-6 items-center justify-center rounded-[3.5px] bg-[#0A090D]", className)}
      style={{ boxShadow: "0px -0.5px 2px 0 #0D0D0F inset, -0.5px 0px 2px 0 #0D0D0F inset" }}
    >
      <div className={cn("flex w-full flex-col items-center justify-center text-[5px] text-neutral-200", childrenClassName, backlit && "text-white")}>
        {children}
      </div>
    </div>
  </div>
);

export const SpeakerGrid = () => (
  <div
    className="mt-2 flex h-40 gap-[2px] px-[0.5px]"
    style={{
      backgroundImage: "radial-gradient(circle, #08080A 0.5px, transparent 0.5px)",
      backgroundSize: "3px 3px",
    }}
  />
);

export const OptionKey = ({ className }) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className={className}>
    <rect stroke="currentColor" strokeWidth={2} x="18" y="5" width="10" height="2" />
    <polygon stroke="currentColor" strokeWidth={2} points="10.6,5 4,5 4,7 9.4,7 18.4,27 28,27 28,25 19.6,25" />
  </svg>
);

export const Keypad = () => (
  <div className="mx-1 h-full [transform:translateZ(0)] rounded-md bg-[#181C14] p-1 [will-change:transform]">
    {/* Keep the full keyboard rows from the Aceternity source — same JSX, just no TS types */}
    {/* ... paste remaining Keypad rows from the original macbook-scroll.tsx ... */}
  </div>
);

const AceternityLogo = () => (
  <svg width="66" height="65" viewBox="0 0 66 65" fill="none" className="h-3 w-3 text-[#ECDFCC]">
    <path d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696" stroke="currentColor" strokeWidth="15" strokeMiterlimit="3.86874" strokeLinecap="round" />
  </svg>
);