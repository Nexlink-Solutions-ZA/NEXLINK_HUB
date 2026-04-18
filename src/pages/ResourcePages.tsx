import { PageLayout } from "../components/PageLayout";

export function DocumentationPage() {
  return (
    <PageLayout title="Documentation" subtitle="Everything you need to know about Nexlink Studio.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {['Getting Started', 'Design System', 'Automated Workflows', 'Integrations', 'API Reference', 'Best Practices'].map((title, i) => (
          <div key={i} className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/5 dark:bg-black/20 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer">
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">Learn how to {title.toLowerCase()} effectively with our comprehensive guides.</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export function BlogPage() {
  return (
    <PageLayout title="Insights & News" subtitle="Articles from the team at Nexlink Studio on design, tech, and modernization.">
      <div className="grid md:grid-cols-2 gap-12">
        {[
          { title: "Building the Modern Digital Landmark", date: "April 15, 2024", category: "Design" },
          { title: "Automated Liveness: The Future of Web", date: "April 10, 2024", category: "Technology" },
          { title: "Strategic Design for SaaS Success", date: "April 5, 2024", category: "Business" },
          { title: "The Power of Spatial Elegance", date: "March 28, 2024", category: "UX" }
        ].map((item, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-video w-full bg-neutral-100 dark:bg-neutral-900 rounded-3xl mb-6 overflow-hidden relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-transparent group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-widest">{item.category} — {item.date}</span>
            <h3 className="text-2xl font-semibold mt-3 group-hover:text-purple-600 transition-colors">{item.title}</h3>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}

export function CommunityPage() {
  return (
    <PageLayout title="Community" subtitle="Join thousands of designers and developers building the future.">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-10 rounded-3xl bg-neutral-900 text-white flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Join our Discord</h3>
          <p className="text-neutral-400 mb-8">Get instant help, share your work, and connect with fellow creators.</p>
          <button className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-neutral-200 transition-colors">Launch Discord</button>
        </div>
        <div className="p-10 rounded-3xl bg-purple-600 text-white flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full mb-6" />
          <h3 className="text-2xl font-semibold mb-4">Developer Forum</h3>
          <p className="text-neutral-100/70 mb-8">Discuss technical challenges and explore advanced studio implementations.</p>
          <button className="px-8 py-3 bg-white text-purple-600 rounded-full font-medium hover:bg-neutral-200 transition-colors">Browse Forum</button>
        </div>
      </div>
    </PageLayout>
  );
}

export function HelpCenterPage() {
  return (
    <PageLayout title="Help Center" subtitle="We're here to help you build better products.">
      <div className="max-w-3xl mx-auto">
        <div className="relative mb-12">
          <input 
            type="text" 
            placeholder="Search for help..." 
            className="w-full px-8 py-5 rounded-3xl bg-neutral-100 dark:bg-neutral-900 border-none shadow-sm focus:ring-2 focus:ring-purple-500 transition-all outline-none"
          />
        </div>
        
        <div className="space-y-6">
          {[
            "How do I set up a new project?",
            "What integrations are supported?",
            "How does billing work?",
            "Can I export my designs?",
            "How do I manage my team?",
            "Where can I find my API keys?"
          ].map((q, i) => (
            <div key={i} className="p-6 rounded-2xl border border-black/5 dark:border-white/5 hover:bg-neutral-50 dark:hover:bg-neutral-900/50 transition-colors cursor-pointer flex items-center justify-between">
              <span className="font-medium">{q}</span>
              <div className="w-6 h-6 rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center font-bold">→</div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
