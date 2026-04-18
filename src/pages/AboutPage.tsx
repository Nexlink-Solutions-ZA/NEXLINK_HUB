import { PageLayout } from "../components/PageLayout";
import { About } from "../components/About";

export function AboutPage() {
  return (
    <PageLayout 
      title="About Nexlink Studio" 
      subtitle="We're on a mission to modernize the digital landscape, one brand at a time."
    >
      <div className="-mt-32">
        <About />
      </div>
      
      <div className="mt-20 prose prose-neutral dark:prose-invert max-w-4xl">
        <h2 className="text-3xl font-semibold tracking-tight mb-6">Our Philosophy</h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
          At Nexlink Studio, we believe that software should be "Alive". It shouldn't just be a static representation of your business; it should be a dynamic, breathing extension of your brand that evolves with your customers.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-16">
          <div className="p-8 rounded-3xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-black/5 dark:border-white/5">
            <h3 className="text-xl font-semibold mb-3">Spatial Elegance</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              We design with depth, layering elements to create a sense of scale and hierarchy that feels natural and intuitive.
            </p>
          </div>
          <div className="p-8 rounded-3xl bg-neutral-100/50 dark:bg-neutral-900/50 border border-black/5 dark:border-white/5">
            <h3 className="text-xl font-semibold mb-3">Automated Liveness</h3>
            <p className="text-neutral-600 dark:text-neutral-400">
              Your digital presence should never feel stale. We implement automated workflows that keep your content fresh and your users engaged.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
