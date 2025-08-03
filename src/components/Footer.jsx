import { Github, Linkedin, Mail } from 'lucide-react';

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
      url: 'https://linkedin.com/in/nitin-shandilya-2b6003a3/',
      icon: Linkedin,
      hoverColor: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      url: 'mailto:nitinbinay734@gmail.com',
      icon: Mail,
      hoverColor: 'hover:text-green-400'
    }
  ];

  return (
    <footer className={`py-8 transition-colors duration-300 border-t ${
      darkMode 
        ? 'bg-gray-900 text-white border-gray-700' 
        : 'bg-white text-gray-800 border-gray-200'
    }`}>
      <div className="container mx-auto px-6 text-center">
        <p className="mb-6">© 2025 Nitin Shandilya. Built with React and Tailwind CSS.</p>
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
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
        
        {/* Call to Action */}
        <p className={`text-sm ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Open to collaboration and interesting projects
        </p>
      </div>
    </footer>
  );
}
