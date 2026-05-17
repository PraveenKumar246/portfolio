import { motion } from 'framer-motion';
import { experience } from '@/lib/portfolio-data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience</h2>
          <p className="text-gray-600 text-lg">Journey through my professional growth</p>
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
              <div className="absolute left-0 top-0 w-6 h-6 bg-gradient-to-br from-primary-500 to-vibrant-pink rounded-full border-4 border-white shadow-lg" />

              {/* Content Card */}
              <div className="ml-16 p-8 bg-white rounded-xl border-2 border-orange-200 hover:border-primary-500 hover:shadow-xl transition duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{exp.position}</h3>
                    <p className="text-primary-600 font-semibold">{exp.company}</p>
                  </div>
                  <p className="text-gray-600 font-medium mt-2 md:mt-0">{exp.duration}</p>
                </div>

                <p className="text-gray-700 mb-4">{exp.description}</p>

                {/* Achievements */}
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <span className="text-primary-500 font-bold mt-1">✓</span>
                      <p className="text-gray-700">{achievement}</p>
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
