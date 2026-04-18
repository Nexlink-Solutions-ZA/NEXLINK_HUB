import { PageLayout } from "../components/PageLayout";
import { Features } from "../components/Features";

export function FeaturesPage() {
  return (
    <PageLayout 
      title="Platform Features" 
      subtitle="Discover the tools and technologies we use to elevate your brand to the next level."
    >
      <div className="-mt-32">
        <Features />
      </div>
      
      <div className="mt-20 grid md:grid-cols-3 gap-8">
        {[
          {
            title: "Ultra Responsive",
            description: "Built for every screen, from mobile devices to ultra-wide displays."
          },
          {
            title: "Performance First",
            description: "Blazing fast load times with optimized assets and code splitting."
          },
          {
            title: "Secure by Design",
            description: "Bank-grade security protocols to protect your data and your users."
          }
        ].map((feature, i) => (
          <div key={i} className="p-8 rounded-3xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-white">{feature.title}</h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
