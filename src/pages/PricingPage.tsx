import { PageLayout } from "../components/PageLayout";
import { Pricing } from "../components/Pricing";
import { FAQ } from "../components/FAQ";

export function PricingPage() {
  return (
    <PageLayout 
      title="Simple, Transparent Pricing" 
      subtitle="Choose the plan that's right for your business. No hidden fees, no surprises."
    >
      <div className="-mt-32">
        <Pricing />
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-semibold tracking-tight text-center mb-16 text-neutral-900 dark:text-white">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </div>
    </PageLayout>
  );
}
