import { PageLayout } from "../components/PageLayout";

export function ChangelogPage() {
  return (
    <PageLayout 
      title="Changelog" 
      subtitle="Stay up to date with the latest improvements and features we've added to the platform."
    >
      <div className="space-y-12">
        {[
          { date: "April 18, 2024", version: "v2.4.0", updates: ["Implemented Spatial Elegance design system", "Added automated liveness modules", "Improved mobile navigation performance"] },
          { date: "March 22, 2024", version: "v2.3.5", updates: ["Bug fixes for sticky navbar transitions", "Optimized glassmorphism effects for older devices"] }
        ].map((item, i) => (
          <div key={i} className="flex flex-col md:flex-row gap-8 border-b border-black/5 dark:border-white/5 pb-12">
            <div className="md:w-48 shrink-0">
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400 uppercase tracking-widest">{item.date}</span>
              <div className="text-xl font-semibold mt-1 text-neutral-900 dark:text-white">{item.version}</div>
            </div>
            <ul className="space-y-3">
              {item.updates.map((update, j) => (
                <li key={j} className="text-neutral-600 dark:text-neutral-400 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 mt-2.5" />
                  {update}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
