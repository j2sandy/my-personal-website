import { useState } from 'react';
import { Menu, X, ChevronDown, Sun, Moon, Sparkles } from 'lucide-react';

export default function Navigation({ 
  navigation, 
  currentPage, 
  setCurrentPage, 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  darkMode, 
  toggleDarkMode 
}) {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b ${darkMode ? 'bg-gray-900/90 border-gray-700 text-white' : 'bg-white/90 border-gray-200 text-gray-900'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo / Brand */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center space-x-2 text-lg font-bold hover:text-blue-500 transition-colors duration-200"
        >
          <div className="relative">
            <Sparkles className="w-7 h-7 text-blue-500" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
          </div>
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-extrabold">
            My Personal Website
          </span>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${
                  currentPage === item.id ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-semibold' : 'hover:text-blue-500'
                }`}
              >
                {item.icon && <item.icon size={18} />}
                <span>{item.name}</span>
                {item.subpages && <ChevronDown size={14} />}
              </button>

              {/* Dropdown for Wellness */}
              {item.subpages && (
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 min-w-[180px]">
                  {item.subpages.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => handleNavClick(sub.id)}
                      className="block w-full text-left px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700 first:rounded-t-xl last:rounded-b-xl transition-colors duration-200"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200 group"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-12 transition-transform duration-200" />
            ) : (
              <Moon className="w-5 h-5 text-blue-500 group-hover:-rotate-12 transition-transform duration-200" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden px-4 pb-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
          {navigation.map((item) => (
            <div key={item.id} className="border-b border-gray-200 dark:border-gray-700">
              <div
                className="flex items-center justify-between py-2 cursor-pointer"
                onClick={() => item.subpages ? toggleDropdown(item.id) : handleNavClick(item.id)}
              >
                <button
                  onClick={() => !item.subpages && handleNavClick(item.id)}
                  className={`flex items-center space-x-2 ${
                    currentPage === item.id ? 'font-semibold text-blue-500' : ''
                  }`}
                >
                  {item.icon && <item.icon size={18} />}
                  <span>{item.name}</span>
                </button>
                {item.subpages && <ChevronDown size={14} />}
              </div>

              {/* Mobile Submenu */}
              {item.subpages && openDropdown === item.id && (
                <div className="pl-6">
                  {item.subpages.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => handleNavClick(sub.id)}
                      className="block w-full text-left py-1 hover:text-blue-500"
                    >
                      {sub.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="mt-4 w-full flex items-center justify-center space-x-2 px-3 py-2 border rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            {darkMode ? (
              <>
                <Sun className="w-5 h-5 text-yellow-500" />
                <span>Light Mode</span>
              </>
            ) : (
              <>
                <Moon className="w-5 h-5 text-blue-500" />
                <span>Dark Mode</span>
              </>
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
