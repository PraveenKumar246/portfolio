import { motion } from 'framer-motion';
import { testimonials } from '@/lib/portfolio-data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-transparent relative transition-colors duration-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">What People Say</h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">Testimonials from clients and colleagues</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-zinc-900/30 rounded-xl border border-slate-200 dark:border-zinc-800/80 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-300 relative"
            >
              {/* Quote Mark */}
              <div className="text-6xl text-primary-200 dark:text-zinc-700 mb-4 transition-colors">"</div>

              {/* Text */}
              <p className="text-slate-700 dark:text-zinc-300 mb-6 leading-relaxed italic transition-colors">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center space-x-4 border-t border-slate-100 dark:border-zinc-800/80 pt-4 transition-colors duration-300">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white transition-colors">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 transition-colors">{testimonial.position}</p>
                  <p className="text-xs text-primary-600 dark:text-primary-400 font-semibold transition-colors">{testimonial.company}</p>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex space-x-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ⭐
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
