import { motion } from 'framer-motion';
import { projects } from '@/lib/portfolio-data';

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="group bg-white dark:bg-zinc-900/30 rounded-xl border border-slate-200 dark:border-zinc-800/80 overflow-hidden hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-300"
    >
      {/* Image/Icon */}
      <div className="h-48 bg-gradient-to-br from-slate-100 via-slate-50 to-zinc-100 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/50 dark:border-zinc-800/50 flex items-center justify-center text-7xl group-hover:scale-105 transition duration-300">
        {project.image}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">{project.title}</h3>
        <p className="text-slate-600 dark:text-zinc-400 text-sm mb-4 line-clamp-2 transition-colors">{project.description}</p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-primary-50 dark:bg-primary-950/20 text-primary-700 dark:text-primary-400 border border-primary-100/50 dark:border-primary-900/30 rounded-full text-xs font-semibold transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-3">
          {project.link !== '#' && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 bg-gradient-to-r from-primary-500 to-vibrant-pink text-white rounded-lg text-center font-semibold hover:shadow-lg transition"
            >
              Live Demo
            </a>
          )}
          {project.github !== '#' && (
            <a
              href={`https://github.com/${project.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-4 py-2 border border-primary-500 text-primary-600 dark:text-primary-400 rounded-lg text-center font-semibold hover:bg-primary-50 dark:hover:bg-primary-950/20 transition duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-50/50 dark:bg-black/20 border-t border-b border-slate-200/50 dark:border-zinc-900/80 relative transition-colors duration-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">Featured Projects</h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">Check out some of my recent work</p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="my-16 text-center"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">More Projects</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx + 3} />
              ))}
            </div>
          </>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-slate-600 dark:text-zinc-400 mb-6">Want to see more?</p>
          <a
            href="https://github.com/PraveenKumar246"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-slate-900 dark:bg-zinc-800 hover:bg-slate-800 dark:hover:bg-zinc-700 text-white rounded-lg font-semibold transform hover:scale-105 transition duration-300"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
