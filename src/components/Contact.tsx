import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: '📧',
      label: 'Email',
      value: 'praveenkumar.ballam@gmail.com',
      link: 'mailto:praveenkumar.ballam@gmail.com',
    },
    {
      icon: '📱',
      label: 'Phone',
      value: '+91 9390476841',
      link: 'tel:+919390476841',
    },
    {
      icon: '📍',
      label: 'Location',
      value: 'Bangalore, India',
      link: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-transparent relative transition-colors duration-300">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white transition-colors">Let's Work Together</h2>
          <p className="text-slate-600 dark:text-zinc-400 text-lg">Have a project in mind? I'd love to hear about it</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, idx) => (
            <motion.a
              key={idx}
              href={info.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 bg-white dark:bg-zinc-900/30 rounded-xl border border-slate-200 dark:border-zinc-800/80 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/5 dark:hover:shadow-primary-500/10 transition-all duration-300 text-center"
            >
              <div className="text-5xl mb-4">{info.icon}</div>
              <h3 className="font-bold text-slate-900 dark:text-white mb-2 transition-colors">{info.label}</h3>
              <p className="text-primary-600 dark:text-primary-400 font-medium transition-colors">{info.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto p-8 bg-white dark:bg-zinc-900/30 rounded-xl border border-slate-200 dark:border-zinc-800/80 transition-colors duration-300"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-zinc-200 mb-2 transition-colors">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-950/40 transition duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-900 dark:text-zinc-200 mb-2 transition-colors">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-950/40 transition duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-zinc-200 mb-2 transition-colors">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-950/40 transition duration-300"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-900 dark:text-zinc-200 mb-2 transition-colors">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-slate-50 dark:bg-zinc-900/30 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-950/40 transition duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full px-8 py-4 bg-gradient-to-r from-primary-500 to-vibrant-pink text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-primary-500/50 transition duration-300"
            >
              Send Message
            </motion.button>

            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-300 dark:border-green-800/30 rounded-lg text-green-700 dark:text-green-400 text-center font-semibold transition-colors duration-300"
              >
                ✓ Message sent! I'll get back to you soon.
              </motion.div>
            )}
          </form>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-zinc-400 mb-6 transition-colors">Connect with me on social media</p>
          <div className="flex items-center justify-center gap-6">
            {[
              { icon: '🐙', link: 'https://github.com/PraveenKumar246', label: 'GitHub' },
              { icon: '🔗', link: 'https://linkedin.com', label: 'LinkedIn' },
              { icon: '𝕏', link: 'https://twitter.com', label: 'Twitter' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="p-4 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:border-primary-500 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-950/30 hover:scale-110 transition duration-300 text-2xl"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
