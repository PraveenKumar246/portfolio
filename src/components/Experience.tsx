import { motion } from 'framer-motion';
import { experience } from '@/lib/portfolio-data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-transparent relative transition-colors duration-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">Experience</h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">Journey through my professional growth</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              {/* Timeline line */}
              {idx !== experience.length - 1 && (
                <div className="absolute left-0 top-24 w-0.5 h-32 bg-gradient-to-b from-primary-500 to-vibrant-pink" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-vibrant-pink rounded-full border-4 border-white dark:border-[#050505] shadow-lg transition-colors duration-300" />

              {/* Content Card */}
              <div className="ml-16 p-8 bg-white dark:bg-zinc-900/30 rounded-xl border border-slate-200 dark:border-zinc-800/80 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 transition-colors">{exp.position}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold transition-colors">{exp.company}</p>
                  </div>
                  <p className="text-slate-600 dark:text-zinc-400 font-medium mt-2 md:mt-0 transition-colors">{exp.duration}</p>
                </div>

                <p className="text-slate-700 dark:text-zinc-300 mb-4 transition-colors">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <span className="text-primary-500 dark:text-primary-400 font-bold mt-1">✓</span>
                      <p className="text-slate-700 dark:text-zinc-300 transition-colors">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
