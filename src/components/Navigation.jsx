import { Menu, X, Moon, Sun, FileText } from 'lucide-react';

export default function Navigation({
  navigation,
  currentPage,
  setCurrentPage,
  mobileMenuOpen,
  setMobileMenuOpen,
  darkMode,
  toggleDarkMode
}) {
  return (
    <nav className={`shadow-lg fixed top-0 w-full z-50 transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 border-b border-gray-700' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className={`text-2xl font-bold transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>NS</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    currentPage === item.id
                      ? darkMode 
                        ? 'text-blue-400 bg-blue-900' 
                        : 'text-blue-600 bg-blue-50'
                      : darkMode
                        ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </button>
              );
            })}
            
            {/* Resume Button */}
            <a
              href="https://j2sandy.github.io/my-personal-website/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                darkMode
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Resume</span>
            </a>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors duration-300 ${
                darkMode
                  ? 'text-yellow-400 hover:bg-gray-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Mobile Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2 rounded-md transition-colors duration-300 ${
                darkMode
                  ? 'text-blue-400 hover:text-blue-300 hover:bg-gray-800'
                  : 'text-blue-600 hover:text-blue-700 hover:bg-gray-100'
              }`}
              aria-label="Download Resume"
            >
              <FileText className="w-5 h-5" />
            </a>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-md transition-colors duration-300 ${
                darkMode
                  ? 'text-yellow-400 hover:bg-gray-800'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors duration-300 ${
                darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 border-t transition-colors duration-300 ${
              darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
            }`}>
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
                      currentPage === item.id
                        ? darkMode 
                          ? 'text-blue-400 bg-blue-900' 
                          : 'text-blue-600 bg-blue-50'
                        : darkMode
                          ? 'text-gray-300 hover:text-blue-400 hover:bg-gray-800'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </button>
                );
              })}

              {/* Mobile Resume Button - Full Width */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-center space-x-2 w-full px-3 py-3 mt-4 rounded-md text-base font-medium transition-colors duration-300 ${
                  darkMode
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <FileText className="w-5 h-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
