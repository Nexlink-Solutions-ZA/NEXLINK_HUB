"use client";

import { motion, useInView } from "motion/react";
import { Icon } from "@iconify/react";
import { ModernButton } from "./ui/ModernButton";
import { useState, useEffect, useRef } from "react";

export function Services() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  const [step, setStep] = useState(0);
  const [isHoveringAudit, setIsHoveringAudit] = useState(false);

  // Workflow timer logic (10-second cycle)
  useEffect(() => {
    if (!isInView) return;

    const runCycle = () => {
      setStep(0); // Highlight Tab
      
      const t1 = setTimeout(() => {
        setStep(1); // Move Cursor & Click
        setIsHoveringAudit(true);
        setTimeout(() => setIsHoveringAudit(false), 400);
      }, 2000);

      const t2 = setTimeout(() => {
        setStep(2); // Pulse Card & Progress Bar
      }, 4000);

      const t3 = setTimeout(() => {
        setStep(3); // Completion Glow & Checklist
      }, 7000);

      return [t1, t2, t3];
    };

    runCycle();
    const interval = setInterval(runCycle, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [isInView]);

  return (
    <section
      id="services"
      ref={containerRef}
      className="w-full relative py-32 border-t border-black/5 dark:border-white/5 content-visibility-auto"
    >
      <div className="max-w-[1400px] mx-auto px-6 overflow-hidden lg:overflow-visible">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-purple-700 font-medium text-sm uppercase tracking-[0.3em] mb-4 block dark:text-purple-500">
            THE MODERNIZATION PROCESS
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 mb-6 dark:text-white leading-[1.05]">
            From outdated to
            <br />
            outstanding.
          </h2>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="w-full bg-white/20 backdrop-blur-3xl border border-black/5 rounded-[2.5rem] p-4 lg:p-6 shadow-2xl overflow-hidden dark:bg-neutral-950/40 dark:border-white/5 relative"
        >
          
          {/* Ghost Cursor Simulation */}
          <motion.div
            animate={{
              x: step === 0 ? "20vw" : step === 1 ? "75vw" : "40vw",
              y: step === 0 ? "100px" : step === 1 ? "80px" : "300px",
              scale: isHoveringAudit ? 0.8 : 1,
              opacity: step === 3 ? 0 : 1
            }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute z-50 pointer-events-none hidden lg:flex items-center justify-center"
          >
            <div className="w-6 h-6 bg-purple-500/30 rounded-full border border-purple-500 flex items-center justify-center animate-pulse-soft">
              <Icon icon="solar:cursor-linear" width="16" height="16" className="text-purple-600 drop-shadow-lg" />
            </div>
          </motion.div>

          <div className="w-full bg-white/40 border border-black/5 rounded-[2rem] h-[520px] lg:h-[760px] flex overflow-hidden relative dark:bg-[#050505]/60 dark:border-white/5 shadow-inner">
            {/* Sidebar with staggered Reveal */}
            <div className="w-16 lg:w-64 border-r border-black/5 bg-white/30 hidden md:flex flex-col justify-between py-8 dark:border-white/10 dark:bg-black/20">
              <div className="px-6 flex flex-col gap-12">
                <motion.span 
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 }}
                  className="text-neutral-950 font-bold tracking-tighter text-2xl hidden lg:block dark:text-white"
                >
                  NS STUDIO
                </motion.span>
                <nav className="flex flex-col gap-4">
                  {[
                    { icon: "solar:home-smile-linear", label: "Modernization", active: step >= 0 },
                    { icon: "solar:folder-with-files-linear", label: "Legacy Sites" },
                    { icon: "solar:chat-round-dots-linear", label: "Consultation" }
                  ].map((link, i) => (
                    <motion.div
                      key={link.label}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: link.active ? 1 : 0.4, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`w-full h-12 rounded-xl flex items-center px-4 gap-4 transition-all duration-500 ${link.active ? "bg-purple-600 text-white shadow-xl shadow-purple-500/30" : "bg-transparent text-neutral-400"}`}
                    >
                      <Icon icon={link.icon} width="22" height="22" />
                      <span className="text-sm font-semibold hidden lg:block">
                        {link.label}
                      </span>
                    </motion.div>
                  ))}
                </nav>
              </div>
            </div>
 
            {/* Main Content Area */}
            <div className="flex-1 p-8 lg:p-14 flex flex-col overflow-y-auto no-scrollbar relative">
              {/* Top Header */}
              <div className="flex justify-between items-center mb-16">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <h3 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-3 dark:text-white leading-none">
                    Workflow
                  </h3>
                  <p className="text-base text-neutral-500 font-medium">
                    Status: <span className="text-purple-600 dark:text-purple-400 font-bold uppercase tracking-widest">{step === 2 ? "Thinking..." : step === 3 ? "Complete" : "Ready"}</span>
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 15 }}
                >
                  <ModernButton
                    variant={step >= 1 ? "primary" : "secondary"}
                    className="!px-8 !py-4 !text-base !rounded-2xl shadow-xl shadow-purple-500/10"
                  >
                    Audit Website
                  </ModernButton>
                </motion.div>
              </div>
 
              {/* Process Cards - Staggered & Elastic */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {[
                  { label: "Analyze", title: "Audit Legacy", active: step === 2, complete: step > 2 },
                  { label: "Rebuild", title: "High-End Design", active: false, complete: step >= 2, opacity: step >= 2 ? 1 : 0.4 },
                  { label: "Deploy", title: "Fast Launch", active: step === 3, complete: false, opacity: step >= 3 ? 1 : 0.3 }
                ].map((card, i) => (
                  <motion.div 
                    key={card.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={isInView ? { 
                      opacity: card.opacity ?? 1, 
                      y: 0, 
                      scale: card.active ? 1.05 : 1,
                      boxShadow: card.active ? "0 0 40px rgba(75, 49, 240, 0.2)" : "0 0 0px transparent"
                    } : {}}
                    transition={{ 
                      delay: 0.9 + i * 0.15, 
                      type: "spring", 
                      stiffness: 150, 
                      damping: 15,
                      mass: 0.8
                    }}
                    className={`bg-white border-[3px] rounded-[2rem] p-8 transition-all duration-700 relative overflow-hidden dark:bg-black/40 ${card.active ? "border-purple-600 shadow-2xl" : "border-black/5 dark:border-white/5"}`}
                  >
                    {card.active && (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-radial from-purple-500/10 via-transparent to-transparent animate-pulse-soft"
                      />
                    )}
                    <div className="relative z-10">
                      <span className="text-neutral-400 text-[10px] mb-4 block uppercase tracking-[0.2em] font-bold">
                        {card.label}
                      </span>
                      <h4 className={`text-2xl font-bold tracking-tight transition-colors duration-500 ${card.active || card.complete ? "text-purple-600 dark:text-purple-400" : "text-neutral-900 dark:text-white"}`}>
                        {card.title}
                      </h4>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Status Section */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.4, duration: 1 }}
                className="bg-white/50 border border-black/5 rounded-[2.5rem] p-10 flex-1 dark:bg-white/[0.03] dark:border-white/5 relative overflow-hidden flex flex-col shadow-inner"
              >
                <div className="flex justify-between items-center mb-10">
                  <h4 className="text-2xl font-bold dark:text-white">Active Simulation</h4>
                  <div className="flex gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/30" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                    <div className="w-3 h-3 rounded-full bg-green-500/30" />
                  </div>
                </div>

                <div className="space-y-8">
                  {[
                    { label: "Modernizing UI Core", done: step === 3, active: step === 2 },
                    { label: "Optimizing Web Vitals", done: false, active: false }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-6">
                      <motion.div 
                        animate={item.done ? { backgroundColor: "#3419e0", scale: [1, 1.2, 1] } : item.active ? { borderColor: "#3419e0" } : {}}
                        className={`w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all duration-500 ${item.done ? "border-purple-600" : "border-black/10 dark:border-white/10"}`}
                      >
                        {item.done && <Icon icon="solar:check-read-linear" width="20" height="20" className="text-white" />}
                        {item.active && <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />}
                      </motion.div>
                      <span className={`text-xl transition-all duration-500 ${item.done ? "text-neutral-900 dark:text-white font-bold" : "text-neutral-400 opacity-60"}`}>{item.label}</span>
                    </div>
                  ))}
                </div>

                {/* Progress Bar Area - Sycned Glow */}
                <div className="mt-auto pt-12">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-neutral-400 uppercase tracking-widest font-bold">Optimization Progress</span>
                    <span className="text-purple-600 font-black">{step === 2 ? "84%" : step === 3 ? "100%" : "0%"}</span>
                  </div>
                  <div className="w-full h-4 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden p-1 shadow-inner">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={step >= 2 ? { width: "100%" } : { width: 0 }}
                      transition={{ 
                        duration: step === 2 ? 3 : 0.5, 
                        ease: [0.16, 1, 0.3, 1]
                      }}
                      className="h-full bg-purple-600 rounded-full shadow-[0_0_25px_rgba(52,25,224,0.6)] relative"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine opacity-30" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
