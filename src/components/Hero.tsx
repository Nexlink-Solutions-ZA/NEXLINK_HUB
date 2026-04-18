"use client";

import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { ModernButton } from "./ui/ModernButton";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <main className="w-full relative z-10 py-[120px] min-h-screen flex flex-col justify-center px-[8%] lg:px-[12%] xl:px-[15%]">
      {/* Top Row: Golden Ratio inspired split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-16 items-center w-full max-w-[1600px] mx-auto mb-24">
        {/* Left: Headline & CTAs (approx 62%) */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col justify-center"
        >
          <div className="max-w-[720px]">
            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-neutral-900 leading-[1.05] mb-10 dark:text-white"
            >
              Modernize your 
              <br />
              digital presence
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-neutral-600 mb-14 max-w-[540px] dark:text-neutral-400 leading-relaxed font-normal"
            >
              We turn outdated websites into high-performing digital landmarks. 
              Strategic design meets automated liveness to launch what your business truly needs.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <ModernButton 
                to="/features" 
                variant="primary"
                ariaLabel="Browse available website designs"
              >
                Browse Designs
                <Icon icon="solar:arrow-right-linear" width="20" height="20" />
              </ModernButton>
              <ModernButton 
                to="/pricing" 
                variant="secondary"
                ariaLabel="Start your website project"
              >
                Start Your Website
              </ModernButton>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Column: Visual Card UI (approx 38%) */}
        <motion.div 
          initial={{ opacity: 0, x: 40, y: 10 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full flex lg:justify-end items-center h-full"
        >
          {/* Continuous Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-purple-600/10 blur-[130px] rounded-full animate-pulse-soft pointer-events-none z-0 hidden dark:block will-change-opacity" />

          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/40 backdrop-blur-2xl border border-black/5 rounded-[3rem] p-8 pb-0 w-full max-w-[420px] relative overflow-hidden shadow-2xl shadow-purple-900/10 mb-0 dark:bg-neutral-900/30 dark:border-white/5 dark:shadow-purple-900 group z-10 will-change-transform"
          >
            {/* Phone Mockup inside Card */}
            <div className="w-full bg-neutral-50 border-[6px] border-neutral-100 rounded-t-[2.5rem] pt-5 px-5 h-[360px] relative mt-4 shadow-inner dark:bg-black dark:border-neutral-900 overflow-hidden group/phone">
              
              {/* Shine Sweep Layer */}
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent animate-shine" />
              </div>

              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-100 rounded-full flex items-center justify-between px-3 border border-black/5 dark:bg-[#0a0a0a] dark:border-white/5 z-40">
                <span className="text-[10px] text-neutral-900 font-bold dark:text-white">12:48</span>
                <div className="flex gap-1 items-center">
                  <div className="w-1 h-1 rounded-full bg-neutral-900 dark:bg-white" />
                  <div className="w-3 h-1.5 bg-neutral-900/20 rounded-sm dark:bg-white/20" />
                </div>
              </div>

              {/* Simulated Internal Scroll Content */}
              <div className="mt-12 relative z-10 h-full overflow-hidden">
                <motion.div 
                  className="space-y-4 animate-inner-scroll"
                >
                  {[
                    { label: "Design Audit", status: "Complete", color: "bg-green-500" },
                    { label: "UX Research", status: "Complete", color: "bg-green-500" },
                    { label: "Visual System", status: "In Progress", color: "bg-blue-500" },
                    { label: "Development", status: "Pending", color: "bg-neutral-300" },
                    { label: "SEO Setup", status: "Pending", color: "bg-neutral-300" }
                  ].map((item, i) => (
                    <div key={i} className="bg-white dark:bg-neutral-900 p-4 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">{item.label}</span>
                        <div className={`w-1.5 h-1.5 rounded-full ${item.color}`} />
                      </div>
                      <div className="h-2 bg-neutral-100 dark:bg-neutral-800 rounded-full w-full overflow-hidden">
                        <div className={`h-full ${item.color} w-3/4 opacity-20`} />
                      </div>
                    </div>
                  ))}
                </motion.div>
                
                {/* Overlay Chat Pop-up */}
                <div className="absolute bottom-6 left-0 right-0 flex flex-col gap-3 pointer-events-none">
                  <div className="bg-purple-600 text-white rounded-2xl rounded-bl-sm p-4 w-[90%] shadow-xl shadow-purple-500/20 animate-chat-bounce [animation-delay:2s]">
                    <p className="text-sm font-medium leading-relaxed">
                      We just finished the "Living Mockup" module. Ready for review!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Row: Minimalist Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-t border-black/5 pt-12 pb-8 mt-auto dark:border-white/5 max-w-[1600px] mx-auto"
      >
        <div className="max-w-xl mb-8 md:mb-0">
          <p className="text-neutral-500 text-sm uppercase tracking-[0.2em] font-bold mb-4">Core Principles</p>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-neutral-900 dark:text-white">Spatial Elegance</span>
              <span className="text-neutral-500 text-sm">Design with depth</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-medium text-neutral-900 dark:text-white">Automated Liveness</span>
              <span className="text-neutral-500 text-sm">Dynamic interaction</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-10">
          <div className="h-10 w-[1px] bg-black/10 dark:bg-white/10 hidden xl:block" />
          <div className="flex flex-col items-end">
            <span className="text-neutral-900 font-medium text-xl dark:text-white leading-tight">Launch in days,</span>
            <span className="text-neutral-500 text-base">not months.</span>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
