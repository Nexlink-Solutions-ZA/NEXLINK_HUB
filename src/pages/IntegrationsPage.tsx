import { PageLayout } from "../components/PageLayout";
import { Icon } from "@iconify/react";

export function IntegrationsPage() {
  const integrations = [
    { name: "Stripe", icon: "logos:stripe", description: "Seamless payment processing for your digital products." },
    { name: "Slack", icon: "logos:slack-icon", description: "Get real-time notifications about your studio performance." },
    { name: "Figma", icon: "logos:figma", description: "Import your designs directly into our automated workflow." },
    { name: "GitHub", icon: "logos:github-icon", description: "Continuous deployment and source control integration." },
    { name: "Discord", icon: "logos:discord-icon", description: "Connect with your community through our Discord bot." },
    { name: "Notion", icon: "logos:notion-icon", description: "Sync your project documentation automatically." }
  ];

  return (
    <PageLayout 
      title="Integrations" 
      subtitle="Nexlink Studio works with the tools you already love and use every day."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((item, i) => (
          <div key={i} className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/20 hover:border-purple-500/30 transition-colors group">
            <div className="w-12 h-12 mb-6 flex items-center justify-center bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform">
              <Icon icon={item.icon} width="24" height="24" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">{item.name}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
