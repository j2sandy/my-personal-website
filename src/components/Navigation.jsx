import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

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
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo / Brand */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="text-lg font-bold hover:text-blue-500"
        >
          My Personal Website
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-1 hover:text-blue-500 ${
                  currentPage === item.id ? 'font-semibold text-blue-500' : ''
                }`}
              >
                {item.icon && <item.icon size={18} />}
                <span>{item.name}</span>
                {item.subpages && <ChevronDown size={14} />}
              </button>

              {/* Dropdown for Wellness */}
              {item.subpages && (
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  {item.subpages.map((sub) => (
                    <button
                      key={sub.name}
                      onClick={() => handleNavClick(sub.id)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
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
            className="px-3 py-1 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
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
            className="mt-4 w-full px-3 py-2 border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
    </nav>
  );
}
