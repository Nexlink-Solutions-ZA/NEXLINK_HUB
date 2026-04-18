import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

const projects = [
  {
    title: "EcoFlow Modernization",
    category: "Corporate",
    image: "https://picsum.photos/seed/ecoflow/800/600",
    description: "Transformed a 2012 legacy site into a high-converting lead machine.",
  },
  {
    title: "Urban Ledger",
    category: "Fintech",
    image: "https://picsum.photos/seed/ledger/800/600",
    description: "Brand new digital presence for a fast-growing financial startup.",
  },
  {
    title: "Zenith Architecture",
    category: "Portfolio",
    image: "https://picsum.photos/seed/zenith/800/600",
    description: "Modern, minimal architectural showcase with zero load delay.",
  },
];

export function Portfolio() {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (index: number) => {
    setFavorites((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="portfolio" className="py-32 w-full max-w-[1400px] mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div className="max-w-2xl">
          <span className="text-purple-700 font-medium text-sm tracking-tight mb-4 block dark:text-purple-500 uppercase">
            Featured Projects
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-neutral-900 dark:text-white leading-[1.1]">
            Recent Modernizations
          </h2>
        </div>
        <p className="text-xl text-neutral-600 max-w-sm dark:text-neutral-400">
          See how we turn outdated blueprints into modern digital landmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white dark:bg-neutral-950 border border-black/5 dark:border-white/5 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Favorite Nudge Animation */}
              <motion.button
                onClick={() => toggleFavorite(index)}
                aria-label={favorites.includes(index) ? `Remove ${project.title} from favorites` : `Add ${project.title} to favorites`}
                animate={favorites.includes(index) ? { scale: [1, 1.2, 1] } : { 
                  y: [0, -4, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={favorites.includes(index) ? { duration: 0.3 } : {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md border transition-colors duration-300 ${
                  favorites.includes(index) 
                    ? "bg-purple-600 border-purple-600 text-white" 
                    : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                }`}
              >
                <Icon 
                  icon={favorites.includes(index) ? "solar:heart-bold" : "solar:heart-linear"} 
                  width="24" 
                  height="24" 
                />
              </motion.button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-purple-600 dark:text-purple-500">
                  {project.category}
                </span>
              </div>
              <h3 className="text-2xl font-medium text-neutral-900 dark:text-white mb-3 tracking-tight">
                {project.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
