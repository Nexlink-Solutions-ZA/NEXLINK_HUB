import { PageLayout } from "../components/PageLayout";
import { ModernButton } from "../components/ui/ModernButton";

export function ContactPage() {
  return (
    <PageLayout 
      title="Get in Touch" 
      subtitle="Have a project in mind? We'd love to hear from you. Let's build something extraordinary together."
    >
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-900 dark:text-white ml-1">Name</label>
                <input 
                  type="text" 
                  className="w-full px-5 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-purple-500 transition-all outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-neutral-900 dark:text-white ml-1">Email</label>
                <input 
                  type="email" 
                  className="w-full px-5 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-purple-500 transition-all outline-none"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-900 dark:text-white ml-1">Subject</label>
              <select className="w-full px-5 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-purple-500 transition-all outline-none appearance-none">
                <option>New Project Proposal</option>
                <option>Technical Support</option>
                <option>Partnership Inquiry</option>
                <option>Other</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-900 dark:text-white ml-1">Message</label>
              <textarea 
                rows={5}
                className="w-full px-5 py-4 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border-none focus:ring-2 focus:ring-purple-500 transition-all outline-none resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <ModernButton className="w-full !py-4 text-sm tracking-widest" variant="primary">
              SEND MESSAGE
            </ModernButton>
          </form>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">Contact Info</h3>
            <div className="space-y-4">
              <p className="text-neutral-600 dark:text-neutral-400">
                <span className="font-medium text-neutral-900 dark:text-white block mb-1">Email</span>
                contact@nexlinkstudio.co.za
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                <span className="font-medium text-neutral-900 dark:text-white block mb-1">Office</span>
                Sandton, Johannesburg<br />South Africa
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">Follow Us</h3>
            <div className="flex gap-4">
              {['Twitter', 'LinkedIn', 'Dribbble', 'GitHub'].map(social => (
                <a key={social} href="#" className="w-12 h-12 rounded-full border border-black/5 dark:border-white/10 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-neutral-400 rounded-sm" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
