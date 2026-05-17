export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t-2 border-primary-500">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-vibrant-pink rounded-lg flex items-center justify-center text-white font-bold">
                PK
              </div>
              <span className="text-xl font-bold text-white">Praveen Kumar</span>
            </div>
            <p className="text-gray-400">Frontend Engineer & Web Developer</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-primary-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/PraveenKumar246"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition text-lg"
                title="GitHub"
              >
                🐙
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-vibrant-blue transition text-lg"
                title="LinkedIn"
              >
                🔗
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-vibrant-blue transition text-lg"
                title="Twitter"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Praveen Kumar Ballam. All rights reserved.</p>
          <p>Crafted with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
