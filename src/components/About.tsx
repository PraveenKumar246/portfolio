import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: '3+', value: 'Years Experience' },
    { label: '15+', value: 'Projects Completed' },
    { label: '10+', value: 'Happy Clients' },
    { label: '95%', value: 'Code Quality' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50/50 dark:bg-black/20 border-t border-b border-slate-200/50 dark:border-zinc-900/80 relative transition-colors duration-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">About Me</h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">Passionate developer crafting seamless digital experiences</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-slate-700 dark:text-zinc-300 mb-6 leading-relaxed">
              I'm a Senior Frontend Engineer with a passion for building beautiful, performant web applications. With 3+ years of experience, I've worked with leading companies to deliver scalable solutions using modern technologies.
            </p>

            <p className="text-lg text-slate-700 dark:text-zinc-300 mb-6 leading-relaxed">
              My expertise spans React.js, Next.js, TypeScript, and Tailwind CSS. I specialize in creating responsive, accessible interfaces that users love, while ensuring clean, maintainable code architecture.
            </p>

            <p className="text-lg text-slate-700 dark:text-zinc-300 mb-8 leading-relaxed">
              When I'm not coding, I enjoy mentoring junior developers, contributing to open-source projects, and staying updated with the latest web technologies.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <span className="text-slate-700 dark:text-zinc-300">Based in Bangalore, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎓</span>
                <span className="text-slate-700 dark:text-zinc-300">B.E (ECE) from Jansons Institute of Technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💡</span>
                <span className="text-slate-700 dark:text-zinc-300">Always learning new technologies</span>
              </div>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-white dark:bg-zinc-900/30 rounded-xl border border-slate-200 dark:border-zinc-800/80 text-center group cursor-pointer hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-300"
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.label}</p>
                <p className="text-slate-600 dark:text-zinc-400 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-400 transition">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Download Resume */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="/resume.pdf"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-vibrant-pink text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transform hover:scale-105 transition duration-300"
          >
            📄 Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
