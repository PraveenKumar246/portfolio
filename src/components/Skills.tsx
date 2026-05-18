import { motion } from 'framer-motion';
import { skills } from '@/lib/portfolio-data';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-transparent relative transition-colors duration-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">Skills & Expertise</h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-zinc-900/30 rounded-xl border border-slate-200 dark:border-zinc-800/80 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-300"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-4xl">{skillGroup.icon}</span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white transition-colors">{skillGroup.category}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {skillGroup.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skillIdx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * skillIdx }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary-500 to-vibrant-pink group-hover:scale-150 transition duration-300" />
                    <span className="text-slate-700 dark:text-zinc-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition duration-300 font-medium">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-white dark:bg-zinc-900/20 rounded-xl border border-slate-200 dark:border-zinc-800/80 transition-colors duration-300"
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 transition-colors">Proficiency</h3>

          {[
            { name: 'React & Next.js', percentage: 95 },
            { name: 'TypeScript', percentage: 90 },
            { name: 'Tailwind CSS', percentage: 95 },
            { name: 'UI/UX Design', percentage: 85 },
          ].map((skill, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-slate-800 dark:text-zinc-200 transition-colors">{skill.name}</span>
                <span className="text-primary-600 dark:text-primary-400 font-bold transition-colors">{skill.percentage}%</span>
              </div>
              <div className="w-full h-3 bg-slate-100 dark:bg-zinc-800 rounded-full overflow-hidden border border-slate-200/50 dark:border-zinc-700/50 transition-colors duration-300">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  transition={{ duration: 1, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-primary-500 to-vibrant-pink rounded-full"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
