"use client";

import { motion, AnimatePresence } from "motion/react";
import { ThemeSwitcher } from "./ui/ThemeSwitcher";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { ModernButton } from "./ui/ModernButton";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for sticky header appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-white/70 dark:bg-black/70 backdrop-blur-[15px] border-b border-black/[0.08] dark:border-white/[0.08] py-4 shadow-sm" 
            : "bg-transparent py-4 lg:py-10"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between w-full">
          {/* Logo - Fixed Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link
              to="/"
              aria-label="Nexlink Studio Home"
              className="w-12 h-12 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-full flex items-center justify-center border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300 group"
            >
              <span className="text-lg font-medium tracking-tighter text-neutral-900 dark:text-white group-hover:scale-110 transition-transform">
                NS
              </span>
            </Link>
          </motion.div>

          {/* Dynamic Island - Desktop Center */}
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              scale: isScrolled ? 0.95 : 1,
            }}
            transition={{ delay: 1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`hidden lg:flex items-center transition-all duration-500 gap-6 px-8 py-3.5 rounded-full border shadow-2xl relative ${
              isScrolled 
                ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-2xl border-black/5 dark:border-white/5 shadow-black/10" 
                : "bg-white/50 backdrop-blur-md border-black/10 dark:bg-white/5 dark:border-white/10 shadow-black/5"
            }`}
          >
            <Link to="/about" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition duration-200 hover-weight">About</Link>
            <div className="w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
            <Link to="/features" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition duration-200 hover-weight">Features</Link>
            <div className="w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
            <Link to="/audit" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition duration-200 hover-weight">Audit</Link>
            <div className="w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
            <Link to="/integrations" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition duration-200 hover-weight">Integrations</Link>
            <div className="w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
            <Link to="/pricing" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition duration-200 hover-weight">Pricing</Link>
            <div className="w-1 h-1 bg-black/10 dark:bg-white/10 rounded-full" />
            <Link to="/changelog" className="text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition duration-200 hover-weight">Updates</Link>
          </motion.nav>

          {/* Right Actions - Fixed Right */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex items-center gap-3"
          >
            <ModernButton
              to="/contact"
              type="link"
              className="hidden md:flex !px-6 !py-3 !text-sm tracking-tight"
              variant="secondary"
              ariaLabel="Go to contact page"
            >
              CONTACT US
            </ModernButton>
            <ThemeSwitcher />
            
            {/* Hamburger Icon */}
            <button
              className="lg:hidden w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-black/10 dark:bg-white/5 dark:border-white/10 text-neutral-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10 transition duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"} absolute`}>
                <Icon icon="solar:hamburger-menu-linear" width="24" height="24" />
              </div>
              <div className={`transform transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMobileMenuOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"} absolute`}>
                <Icon icon="solar:close-circle-linear" width="24" height="24" />
              </div>
            </button>
          </motion.div>
        </div>
      </header>

      {/* Mobile Menu Backdrop & Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(4px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-neutral-900/40 dark:bg-black/80 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 25, 
                stiffness: 200,
                mass: 0.8
              }}
              className="fixed top-0 right-0 h-[100dvh] w-[85vw] sm:w-[350px] bg-white dark:bg-[#0a0a0a] border-l border-black/5 dark:border-white/5 z-50 flex flex-col shadow-2xl"
            >
              {/* Top Explicit Close Area */}
              <div className="flex justify-between items-center p-6 border-b border-black/5 dark:border-white/5">
                <motion.span 
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400"
                >
                  Navigation
                </motion.span>
                <motion.button 
                  initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close mobile menu"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-600 dark:text-neutral-400 transition-colors duration-300"
                >
                  <Icon icon="solar:arrow-right-linear" width="22" height="22" />
                </motion.button>
              </div>

              {/* Links Area with Staggered Fade Effect */}
              <div className="px-8 py-10 flex-1 overflow-y-auto no-scrollbar">
                <motion.nav 
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
                    },
                    closed: {
                      transition: { staggerChildren: 0.05, staggerDirection: -1 }
                    }
                  }}
                  className="flex flex-col gap-8"
                >
                  {[
                    { label: "About", to: "/about" },
                    { label: "Features", to: "/features" },
                    { label: "Audit", to: "/audit" },
                    { label: "Integrations", to: "/integrations" },
                    { label: "Pricing", to: "/pricing" },
                    { label: "Contact", to: "/contact" }
                  ].map((link, i) => (
                    <motion.div
                      key={link.label}
                      variants={{
                        open: { opacity: 1, y: 0, filter: "blur(0px)" },
                        closed: { opacity: 0, y: 20, filter: "blur(10px)" }
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        to={link.to}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-2xl font-medium text-neutral-900 dark:text-white hover:text-purple-700 dark:hover:text-purple-600 transition-colors"
                      >
                        {link.label}
                      </Link>
                      {i < 4 && <div className="w-full h-px bg-black/5 dark:bg-white/5 mt-8" />}
                    </motion.div>
                  ))}
                </motion.nav>
              </div>

              {/* Glowing Contact Bottom Area */}
              <motion.div 
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="p-6 border-t border-black/5 dark:border-white/5 bg-neutral-50/50 dark:bg-black/50"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Contact Nexlink Studio"
                  className="w-full flex items-center justify-center py-4 rounded-xl text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-500/20 transition duration-300"
                >
                  Contact us
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
