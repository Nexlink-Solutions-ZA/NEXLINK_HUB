import { PageLayout } from "../components/PageLayout";
import { WebsiteAuditTool } from "../components/WebsiteAuditTool";
import { motion } from "motion/react";

export function AuditPage() {
  return (
    <PageLayout 
      title="Performance Audit" 
      subtitle="Analyze, Optimize, Modernize"
    >
      <div className="w-full">
        {/* Intro Section */}
        <section className="py-20 bg-neutral-50 dark:bg-neutral-900/40 border-y border-black/5 dark:border-white/5 overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-purple-600 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Analysis Engine</span>
              <h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 mb-8 dark:text-white leading-[1.05]">
                Measure your digital <br />
                <span className="text-neutral-400">vital signs.</span>
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-10 max-w-lg leading-relaxed">
                Most websites lose 40% of their visitors due to sub-optimal performance. Discover the technical gaps holding your business back in seconds.
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
               whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
               className="relative"
            >
               <div className="absolute inset-0 bg-purple-600/20 blur-[120px] rounded-full -z-10" />
               <div className="bg-white/40 backdrop-blur-3xl border border-black/5 rounded-[3rem] p-12 dark:bg-neutral-900/40 dark:border-white/5 shadow-2xl">
                  <div className="space-y-8">
                     {[
                        { label: "Core Web Vitals", value: 98 },
                        { label: "Technical SEO", value: 92 },
                        { label: "Visual Stability", value: 100 }
                     ].map((item) => (
                        <div key={item.label}>
                           <div className="flex justify-between text-sm mb-3">
                              <span className="font-bold uppercase tracking-widest text-neutral-400">{item.label}</span>
                              <span className="font-mono text-purple-600">{item.value}%</span>
                           </div>
                           <div className="h-2 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                 initial={{ width: 0 }}
                                 whileInView={{ width: `${item.value}%` }}
                                 transition={{ duration: 1.5, delay: 0.5 }}
                                 className="h-full bg-purple-600 shadow-[0_0_10px_rgba(75,49,240,0.4)]"
                              />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </motion.div>
          </div>
        </section>

        {/* Audit Tool Section */}
        <section className="py-32">
          <WebsiteAuditTool />
        </section>

        {/* Trust Section */}
        <section className="py-32 border-t border-black/5 dark:border-white/5">
           <div className="max-w-[1400px] mx-auto px-6 text-center">
              <h2 className="text-3xl font-medium mb-16 dark:text-white">Why Perform an Audit?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                 {[
                    { 
                      title: "UX Conversion", 
                      desc: "For every 100ms of latency reduced, conversion rates increase by up to 1%. Performance is a direct revenue driver.",
                      icon: "solar:chat-round-money-linear"
                    },
                    { 
                      title: "Search Ranking", 
                      desc: "Google prioritizes 'Page Experience'. Lower scores directly correlate with lower search engine placement.",
                      icon: "solar:square-academic-cap-linear"
                    },
                    { 
                      title: "Device Inclusivity", 
                      desc: "Ensure your digital product performs flawlessly on low-power mobile devices and high-latency networks.",
                      icon: "solar:globus-linear"
                    }
                 ].map((card) => (
                    <div key={card.title} className="p-8 group hover:bg-neutral-50 dark:hover:bg-white/5 rounded-[2rem] transition-all duration-500 border border-transparent hover:border-black/5 dark:hover:border-white/5">
                       <div className="w-14 h-14 bg-purple-600/10 rounded-2xl flex items-center justify-center text-purple-600 mb-8 transition-transform group-hover:scale-110 group-hover:rotate-3">
                          <Icon icon={card.icon} width="28" height="28" />
                       </div>
                       <h3 className="text-2xl font-bold mb-4 dark:text-white">{card.title}</h3>
                       <p className="text-neutral-500 leading-relaxed font-normal">{card.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </section>
      </div>
    </PageLayout>
  );
}

// Add this to the resource exports if needed, or keep local.
import { Icon } from "@iconify/react";
