import { motion, useScroll, useTransform } from "motion/react";

export function Background() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 5000], [0, -500]);
  const y2 = useTransform(scrollY, [0, 5000], [0, 500]);
  
  return (
    <>
      {/* High-end cinematic grain filter overlay */}
      <div className="grain-overlay" />

      {/* Dynamic Flowing Gradient Background Layer */}
      <motion.div 
        style={{ y: y1 }}
        className="fixed inset-0 pointer-events-none -z-[30] opacity-30 dark:opacity-20 animate-background-flow bg-[length:200%_100%] bg-gradient-to-r from-neutral-50 via-purple-100/50 to-neutral-50 dark:from-black dark:via-[#3419e0]/10 dark:to-black" 
      />

      {/* Primary animated glow */}
      <motion.div 
        style={{ y: y2 }}
        className="fixed top-[-15%] right-[-15%] w-[90vw] h-[90vw] bg-radial from-[#3419e0]/30 via-[#3419e0]/10 to-transparent rounded-full blur-[160px] pointer-events-none -z-20 animate-float opacity-50" 
      />

      {/* Dynamic drifting gradients */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[150%] h-[150%] transform -rotate-[15deg]">
          <div className="absolute top-[10%] left-[20%] w-[45vw] h-[65vh] bg-gradient-to-br from-[#3419e0]/20 via-purple-600/30 to-transparent blur-[140px] rounded-[100%] animate-gradient-shift" />
          <div className="absolute bottom-[20%] right-[30%] w-[55vw] h-[55vh] bg-gradient-to-tr from-purple-800/20 via-[#3419e0]/40 to-transparent blur-[140px] rounded-[100%] animate-gradient-shift" style={{ animationDirection: 'reverse' }} />
          
          {/* Drifting streaks */}
          <div className="absolute top-[5%] right-[15%] w-[1px] h-[150%] bg-gradient-to-b from-transparent via-[#3419e0]/40 to-transparent blur-[4px] animate-float opacity-50 transform rotate-[10deg]" />
          <div className="absolute top-[-5%] right-[25%] w-[2px] h-[150%] bg-gradient-to-b from-transparent via-purple-500/30 to-transparent blur-[8px] animate-float-reverse opacity-40 transform rotate-[-5deg]" />
        </div>
      </div>
    </>
  );
}
