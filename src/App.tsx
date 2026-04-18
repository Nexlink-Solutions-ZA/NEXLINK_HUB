/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Background } from "./components/Background";
import { UseHome } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { FeaturesPage } from "./pages/FeaturesPage";
import { PricingPage } from "./pages/PricingPage";
import { ChangelogPage } from "./pages/ChangelogPage";
import { IntegrationsPage } from "./pages/IntegrationsPage";
import { ContactPage } from "./pages/ContactPage";
import { TermsPage, PrivacyPage } from "./pages/LegalPages";
import { DocumentationPage, BlogPage, CommunityPage, HelpCenterPage } from "./pages/ResourcePages";
import { ScrollToTop } from "./components/ui/ScrollToTop";

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Router>
        <ScrollToTop />
        <div className="antialiased bg-[#fafafa] text-neutral-900 w-full min-h-screen flex flex-col relative overflow-x-hidden selection-purple selection:text-white transition-colors duration-500 dark:bg-[#050505] dark:text-white">
          <Background />
          <Navbar />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<UseHome />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/changelog" element={<ChangelogPage />} />
              <Route path="/integrations" element={<IntegrationsPage />} />
              <Route path="/documentation" element={<DocumentationPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/help-center" element={<HelpCenterPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}
