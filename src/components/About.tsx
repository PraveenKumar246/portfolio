import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: '3+', value: 'Years Experience' },
    { label: '15+', value: 'Projects Completed' },
    { label: '10+', value: 'Happy Clients' },
    { label: '95%', value: 'Code Quality' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-br from-white via-orange-50 to-pink-50 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Passionate developer crafting seamless digital experiences</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a Senior Frontend Engineer with a passion for building beautiful, performant web applications. With 3+ years of experience, I've worked with leading companies to deliver scalable solutions using modern technologies.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              My expertise spans React.js, Next.js, TypeScript, and Tailwind CSS. I specialize in creating responsive, accessible interfaces that users love, while ensuring clean, maintainable code architecture.
            </p>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When I'm not coding, I enjoy mentoring junior developers, contributing to open-source projects, and staying updated with the latest web technologies.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <span className="text-gray-700">Based in Bangalore, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🎓</span>
                <span className="text-gray-700">B.E (ECE) from Jansons Institute of Technology</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💡</span>
                <span className="text-gray-700">Always learning new technologies</span>
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
                whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(249, 115, 22, 0.2)' }}
                className="p-8 bg-white rounded-xl border-2 border-orange-200 text-center group cursor-pointer"
              >
                <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.label}</p>
                <p className="text-gray-600 font-medium group-hover:text-primary-600 transition">{stat.value}</p>
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
