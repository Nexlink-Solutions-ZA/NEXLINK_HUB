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
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  };

  const phoneProjectVariants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <main className="w-full relative z-10 pt-[160px] pb-[120px] min-h-screen flex flex-col justify-center px-[8%] lg:px-[12%] xl:px-[15%] overflow-hidden">
      {/* Dynamic Flowing Background - Drifting light blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: ["10%", "-10%"],
            y: ["5%", "-5%"],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-600/10 blur-[120px] rounded-full animate-drift"
        />
        <motion.div 
          animate={{ 
            x: ["-10%", "10%"],
            y: ["-5%", "5%"],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full animate-drift"
        />
      </div>

      {/* Top Row: Golden Ratio inspired split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 lg:gap-32 items-center w-full max-w-[1600px] mx-auto mb-32 relative">
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
              className="text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight text-neutral-900 leading-[1.05] mb-12 dark:text-white"
            >
              Modernize your 
              <br />
              digital presence
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl text-neutral-600 mb-16 max-w-[540px] dark:text-neutral-400 leading-relaxed font-normal opacity-80"
            >
              We turn outdated websites into high-performing digital landmarks. 
              Strategic design meets automated liveness to launch what your business truly needs.
            </motion.p>
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap items-center gap-8"
            >
              <ModernButton 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} 
                variant="primary"
                ariaLabel="Browse our modern design portfolio"
                className="group"
              >
                Browse Designs
                <Icon 
                  icon="solar:gallery-linear" 
                  width="20" 
                  height="20" 
                  className="group-hover:animate-float-wiggle transition-transform" 
                />
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
          initial={{ opacity: 0, x: 60, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative w-full flex lg:justify-end items-center h-full"
        >
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="bg-white/40 backdrop-blur-3xl border border-black/5 rounded-[3.5rem] p-10 pb-0 w-full max-w-[440px] md:max-w-full lg:max-w-[440px] mx-auto lg:mx-0 relative overflow-hidden shadow-2xl shadow-purple-900/10 dark:bg-neutral-900/30 dark:border-white/5 dark:shadow-purple-900 [width:85%] lg:w-full group z-10 will-change-transform"
          >
            {/* Phone Mockup inside Card */}
            <div className="w-full bg-neutral-50 border-[6px] border-neutral-100 rounded-t-[3rem] pt-6 px-6 h-[400px] relative mt-4 shadow-inner dark:bg-black dark:border-neutral-900 overflow-hidden group/phone">
              
              {/* Shine Sweep Layer (Glass Reflection) */}
              <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
                <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent animate-glass-sweep" />
              </div>

              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-7 bg-neutral-100 rounded-full flex items-center justify-between px-4 border border-black/5 dark:bg-[#0a0a0a] dark:border-white/5 z-40">
                <span className="text-[10px] text-neutral-900 font-bold dark:text-white opacity-60">12:48</span>
                <div className="flex gap-1.5 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  <div className="w-4 h-1.5 bg-neutral-900/10 rounded-sm dark:bg-white/10" />
                </div>
              </div>

              {/* Simulated Internal Scroll Content */}
              <div className="mt-14 relative z-10 h-full overflow-hidden">
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: { transition: { staggerChildren: 0.15, delayChildren: 1.2 } }
                  }}
                  className="space-y-5"
                >
                  {[
                    { label: "Design Audit", status: "Complete", color: "bg-purple-500", progress: "w-full" },
                    { label: "UX Research", status: "Complete", color: "bg-purple-500", progress: "w-full" },
                    { label: "Visual System", status: "In Progress", color: "bg-indigo-500", progress: "w-[75%]" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={phoneProjectVariants}
                      className="bg-white dark:bg-neutral-900 p-5 rounded-2xl border border-black/5 dark:border-white/5 shadow-sm"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-[10px] uppercase tracking-[0.15em] font-bold text-neutral-400">{item.label}</span>
                        <div className={`w-2 h-2 rounded-full ${item.color}`} />
                      </div>
                      <div className="h-2.5 bg-neutral-100 dark:bg-neutral-800 rounded-full w-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: item.progress.includes('full') ? '100%' : item.progress.replace('w-[', '').replace('%]', '%') }}
                          transition={{ duration: 1, delay: 1.4 + (i * 0.15), ease: "easeOut" }}
                          className={`h-full ${item.color}`} 
                        />
                      </div>
                    </motion.div>
                  ))}
                  <motion.button
                    variants={phoneProjectVariants}
                    whileHover={{ 
                      scale: 1.03, 
                      boxShadow: "0 0 30px rgba(147, 51, 234, 0.6)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ 
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                    className="w-full py-4 mt-4 rounded-2xl bg-purple-600 text-white text-[11px] font-bold uppercase tracking-[0.25em] pointer-events-auto transition-shadow shadow-2xl shadow-purple-600/30 active:scale-95"
                  >
                    Review Designs
                  </motion.button>
                </motion.div>
                
                {/* Overlay Chat Pop-up with Elastic Bounce */}
                <motion.div 
                   initial={{ opacity: 0, scale: 0.7, y: 40 }}
                   whileInView={{ opacity: 1, scale: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ 
                     delay: 2.2, 
                     type: "spring", 
                     stiffness: 260, 
                     damping: 20 
                   }}
                   className="absolute bottom-10 left-0 right-0 flex flex-col gap-3 pointer-events-none z-50 px-4"
                >
                  <div className="bg-purple-600 text-white rounded-[2rem] rounded-bl-sm p-6 w-full shadow-2xl shadow-purple-600/40">
                    <p className="text-sm font-medium leading-relaxed">
                      We just finished the "Living Mockup" module. Ready for review!
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-[#050505] dark:via-[#050505]/80 dark:to-transparent z-20 pointer-events-none" />

      {/* Bottom Row: Minimalist Stats */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex flex-col md:flex-row justify-between items-start md:items-end border-t border-black/5 pt-16 pb-12 mt-auto dark:border-white/5 max-w-[1600px] mx-auto relative z-30"
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
