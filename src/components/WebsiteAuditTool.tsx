"use client";

import { useState, useEffect, useRef, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icon } from "@iconify/react";
import { ModernButton } from "./ui/ModernButton";

interface AuditMetrics {
  performance: number;
  seo: number;
  mobile: number;
  accessibility: number;
}

interface AuditResult {
  url: string;
  timestamp: string;
  metrics: AuditMetrics;
  suggestions: string[];
}

export function WebsiteAuditTool() {
  const [url, setUrl] = useState("");
  const [isAuditing, setIsAuditing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [result, setResult] = useState<AuditResult | null>(null);

  const steps = [
    "Initializing Audit Engine...",
    "Analyzing Technical SEO Parameters...",
    "Measuring Core Web Vitals...",
    "Testing Mobile Responsiveness...",
    "Generating Improvement Roadmap..."
  ];

  const handleAudit = (e: FormEvent) => {
    e.preventDefault();
    if (!url || isAuditing) return;

    setIsAuditing(true);
    setResult(null);
    setProgress(0);
    setCurrentStep(0);

    // Simulated Audit Logic
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Finalize result
        setTimeout(() => {
          const mockResult: AuditResult = {
            url,
            timestamp: new Date().toLocaleString(),
            metrics: {
              performance: Math.floor(Math.random() * (98 - 65) + 65),
              seo: Math.floor(Math.random() * (100 - 80) + 80),
              mobile: Math.floor(Math.random() * (95 - 70) + 70),
              accessibility: Math.floor(Math.random() * (90 - 60) + 60),
            },
            suggestions: [
              "Implement Modern Image Formats (WebP/AVIF)",
              "Optimize Render-Blocking Resources",
              "Minimize Main-Thread Work",
              "Improve Layout Stability (CLS)"
            ]
          };
          setResult(mockResult);
          setIsAuditing(false);
        }, 800);
      }
      setProgress(currentProgress);
      setCurrentStep(Math.min(Math.floor((currentProgress / 100) * steps.length), steps.length - 1));
    }, 400);
  };

  const downloadAuditReport = () => {
    if (!result) return;
    const data = JSON.stringify(result, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `nexlink_audit_${result.url.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${Date.now()}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-6 audit-result-container">
      {/* Search Input Area */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center audit-input-area"
      >
        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 mb-6 dark:text-white">
          Studio Audit Tool
        </h2>
        <p className="text-neutral-500 text-lg mb-10 max-w-2xl mx-auto font-normal">
          Enter your website URL to receive a high-fidelity performance analysis and modernization roadmap.
        </p>

        <form onSubmit={handleAudit} className="relative max-w-2xl mx-auto group">
          <div className="relative">
            <input
              type="url"
              placeholder="https://yourwebsite.com"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full bg-white dark:bg-neutral-900 border-2 border-black/5 dark:border-white/5 rounded-[2rem] px-8 py-6 text-xl outline-none focus:border-purple-600 dark:focus:border-purple-500 transition-all duration-500 shadow-xl shadow-purple-900/[0.02] placeholder:text-neutral-400 font-medium"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <ModernButton 
                onClick={() => {}} 
                variant="primary" 
                className="!px-8 !py-3.5 !text-base scale-95 hover:scale-100"
              >
                {isAuditing ? "Auditing..." : "Start Audit"}
              </ModernButton>
            </div>
          </div>
          {/* Ambient Glow on focus */}
          <div className="absolute -inset-1 bg-purple-600/20 blur-xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-700 -z-10 rounded-[2.5rem]" />
        </form>
      </motion.div>

      <AnimatePresence mode="wait">
        {isAuditing && (
          <motion.div
            key="auditing-state"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white/40 backdrop-blur-3xl border border-black/5 rounded-[3rem] p-12 dark:bg-neutral-900/30 dark:border-white/5 relative overflow-hidden"
          >
            {/* Analyzing Grid Visual */}
            <div className="absolute inset-0 z-0 opacity-10">
               <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #4b31f0 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 mb-8 relative">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="48"
                    cy="48"
                    r="44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-neutral-100 dark:text-neutral-800"
                  />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="44"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                    className="text-purple-600"
                    initial={{ strokeDasharray: "276 276", strokeDashoffset: 276 }}
                    animate={{ strokeDashoffset: 276 - (276 * progress) / 100 }}
                    transition={{ ease: "linear" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center font-bold text-xl text-purple-600">
                  {Math.round(progress)}%
                </div>
              </div>

              <motion.p 
                key={currentStep}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-medium text-neutral-900 dark:text-white mb-2"
              >
                {steps[currentStep]}
              </motion.p>
              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <div 
                    key={i} 
                    className={`h-1.5 rounded-full transition-all duration-500 ${i <= currentStep ? 'w-8 bg-purple-600' : 'w-4 bg-neutral-200 dark:bg-neutral-800'}`} 
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {result && !isAuditing && (
          <motion.div
            key="result-state"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-10"
          >
            {/* Headline Result */}
            <div className="flex flex-col md:flex-row justify-between items-baseline md:items-center gap-6 border-b border-black/5 dark:border-white/5 pb-8">
               <div className="flex-1">
                  <h3 className="text-2xl font-bold dark:text-white mb-1">Audit Result</h3>
                  <p className="text-neutral-500 font-mono text-sm break-all">{result.url}</p>
               </div>
               <div className="flex flex-wrap items-center gap-4 w-full md:w-auto no-print">
                  <span className="text-neutral-400 text-sm font-medium mr-auto md:mr-0">Analysis Completed: {result.timestamp}</span>
                  <div className="flex items-center gap-3">
                    <ModernButton 
                      onClick={downloadAuditReport} 
                      variant="secondary" 
                      className="!px-6 !py-2.5 !text-sm group flex items-center gap-2"
                    >
                      <Icon icon="solar:download-minimalistic-linear" width="18" height="18" className="group-hover:translate-y-0.5 transition-transform" />
                      JSON
                    </ModernButton>
                    <ModernButton 
                      onClick={() => window.print()} 
                      variant="secondary" 
                      className="!px-6 !py-2.5 !text-sm group flex items-center gap-2"
                    >
                      <Icon icon="solar:printer-minimalistic-linear" width="18" height="18" className="group-hover:scale-110 transition-transform" />
                      Print
                    </ModernButton>
                  </div>
               </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Performance", value: result.metrics.performance, icon: "solar:bolt-circle-linear", color: "text-emerald-500" },
                { label: "SEO Score", value: result.metrics.seo, icon: "solar:document-text-linear", color: "text-blue-500" },
                { label: "Mobile Readiness", value: result.metrics.mobile, icon: "solar:smartphone-linear", color: "text-purple-500" },
                { label: "Accessibility", value: result.metrics.accessibility, icon: "solar:users-group-rounded-linear", color: "text-amber-500" }
              ].map((metric) => (
                <div 
                  key={metric.label}
                  className="bg-white/40 backdrop-blur-xl border border-black/5 rounded-[2.5rem] p-8 dark:bg-neutral-900/30 dark:border-white/5 group hover:border-purple-500/30 transition-all duration-500 shadow-sm"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-neutral-50 dark:bg-black/40 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                      <Icon icon={metric.icon} width="24" height="24" />
                    </div>
                    <span className={`text-3xl font-black ${metric.value > 85 ? 'text-emerald-500' : metric.value > 70 ? 'text-amber-500' : 'text-rose-500'}`}>
                      {metric.value}
                    </span>
                  </div>
                  <h4 className="text-neutral-900 font-bold text-lg mb-1 dark:text-white">{metric.label}</h4>
                  <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full mt-4 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full bg-current ${metric.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Suggestions & Roadmap */}
            <div className="bg-neutral-900 dark:bg-white rounded-[3rem] p-12 text-white dark:text-black shadow-2xl overflow-hidden relative group">
              {/* Decorative background glow */}
              <div className="absolute top-0 right-0 w-[50%] h-full bg-purple-600/20 blur-[100px] -z-0 translate-x-1/2 pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-purple-400 font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Roadmap</span>
                  <h3 className="text-4xl font-medium mb-8 tracking-tight">Modernization Opportunities</h3>
                  <div className="space-y-6">
                    {result.suggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-white/10 dark:bg-black/10 flex items-center justify-center shrink-0">
                          <span className="text-xs font-bold">{index + 1}</span>
                        </div>
                        <p className="text-lg opacity-80">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center bg-white/10 dark:bg-black/5 backdrop-blur-xl rounded-[2rem] p-10 border border-white/10 dark:border-black/10">
                  <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-purple-600/40">
                    <Icon icon="solar:magic-stick-3-linear" width="32" height="32" className="text-white" />
                  </div>
                  <h4 className="text-2xl font-medium mb-4">Ready to Modernize?</h4>
                  <p className="opacity-70 mb-8 max-w-[280px] mx-auto">Our team can implement these optimizations in under 72 hours.</p>
                  <ModernButton to="/contact" variant="primary" className="!bg-purple-600 !text-white dark:!bg-purple-600 dark:!text-white w-full">
                    Start Modernization
                  </ModernButton>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
