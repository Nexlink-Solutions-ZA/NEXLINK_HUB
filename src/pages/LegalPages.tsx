import { PageLayout } from "../components/PageLayout";

export function TermsPage() {
  return (
    <PageLayout title="Terms of Service" subtitle="Last updated: October 24, 2024">
      <div className="prose prose-neutral dark:prose-invert max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            By accessing or using Nexlink Studio's services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our site.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Permission is granted to temporarily download one copy of the materials (information or software) on Nexlink Studio's website for personal, non-commercial transitory viewing only.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            The materials on Nexlink Studio's website are provided on an 'as is' basis. Nexlink Studio makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}

export function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy" subtitle="Last updated: October 24, 2024">
      <div className="prose prose-neutral dark:prose-invert max-w-4xl">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            We collect information from you when you register on our site, place an order, subscribe to our newsletter or fill out a form.
          </p>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">2. Protection of Information</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            We implement a variety of security measures to maintain the safety of your personal information when you place an order or enter, submit, or access your personal information.
          </p>
        </section>
      </div>
    </PageLayout>
  );
}
