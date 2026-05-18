export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-zinc-950/20 text-slate-600 dark:text-zinc-400 py-12 border-t border-slate-200 dark:border-zinc-900 transition-colors duration-300">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-vibrant-pink rounded-lg flex items-center justify-center text-white font-bold">
                PK
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white transition-colors">Praveen Kumar</span>
            </div>
            <p className="text-slate-500 dark:text-zinc-500 transition-colors">Frontend Engineer & Web Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-4 transition-colors">Quick Links</h4>
            <ul className="space-y-2 text-slate-500 dark:text-zinc-500">
              <li>
                <a href="#about" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-slate-900 dark:text-white font-bold mb-4 transition-colors">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/PraveenKumar246"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-zinc-600 hover:text-primary-500 dark:hover:text-primary-400 hover:scale-110 transition duration-300 text-lg"
                title="GitHub"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-zinc-600 hover:text-vibrant-blue hover:scale-110 transition duration-300 text-lg"
                title="LinkedIn"
              >
                🔗
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 dark:text-zinc-600 hover:text-vibrant-blue hover:scale-110 transition duration-300 text-lg"
                title="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-zinc-800/80 my-8 transition-colors duration-300" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-zinc-500 text-sm transition-colors">
          <p>&copy; {currentYear} Praveen Kumar Ballam. All rights reserved.</p>
          <p>Crafted with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
