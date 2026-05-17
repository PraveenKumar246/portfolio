import { motion } from 'framer-motion';
import { testimonials } from '@/lib/portfolio-data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What People Say</h2>
          <p className="text-gray-600 text-lg">Testimonials from clients and colleagues</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="p-8 bg-white rounded-xl border-2 border-orange-200 hover:border-primary-500 hover:shadow-2xl transition duration-300 relative"
            >
              {/* Quote Mark */}
              <div className="text-6xl text-primary-200 mb-4">"</div>

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">{testimonial.text}</p>

              {/* Author */}
              <div className="flex items-center space-x-4 border-t border-orange-100 pt-4">
                <div className="text-4xl">{testimonial.image}</div>
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-primary-600 font-semibold">{testimonial.company}</p>
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
