import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer({ darkMode }) {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/j2sandy',
      icon: Github,
      hoverColor: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/nitinshandilya',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/nitinshandilya',
      icon: Twitter,
      hoverColor: 'hover:text-sky-400'
    },
    {
      name: 'Email',
      url: 'mailto:nitin.shandilya@example.com',
      icon: Mail,
      hoverColor: 'hover:text-green-400'
    }
  ];

  return (
    <footer className={`py-8 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-white border-t border-gray-700' : 'bg-gray-800 text-white'
    }`}>
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">© 2025 Nitin Shandilya. Built with React and Tailwind CSS.</p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.url}
                target={link.name === 'Email' ? '_self' : '_blank'}
                rel={link.name === 'Email' ? '' : 'noopener noreferrer'}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${link.hoverColor}`}
                aria-label={`Visit ${link.name}`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{link.name}</span>
              </a>
            );
          })}
        </div>
        
        {/* Additional Contact Info */}
        <div className={`mt-6 pt-4 border-t ${
          darkMode ? 'border-gray-700' : 'border-gray-600'
        }`}>
          <p className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-300'
          }`}>
            Open to collaboration and interesting projects
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a
              href="https://nitinshandilya.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Portfolio
            </a>
            <span className={`text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>•</span>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Resume
            </a>
            <span className={`text-sm ${darkMode ? 'text-gray-600' : 'text-gray-500'}`}>•</span>
            <a
              href="tel:+1234567890"
              className="text-sm hover:text-blue-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
