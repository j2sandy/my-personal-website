import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation({ navigation, darkMode, toggleDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 shadow-md ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo / Brand */}
        <Link to="/" className="text-lg font-bold">
          My Personal Website
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navigation.map((item) => (
            <div key={item.id} className="relative group">
              <Link
                to={item.href}
                className={`flex items-center space-x-1 hover:text-blue-500 ${
                  location.pathname === item.href ? 'font-semibold' : ''
                }`}
              >
                <item.icon size={18} />
                <span>{item.name}</span>
                {item.subpages && <ChevronDown size={14} />}
              </Link>

              {/* Dropdown for Wellness */}
              {item.subpages && (
                <div className="absolute left-0 mt-2 hidden group-hover:block bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                  {item.subpages.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {sub.name}
                    </Link>
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
                onClick={() => item.subpages ? toggleDropdown(item.id) : setMobileMenuOpen(false)}
              >
                <Link
                  to={item.href}
                  className="flex items-center space-x-2"
                >
                  <item.icon size={18} />
                  <span>{item.name}</span>
                </Link>
                {item.subpages && <ChevronDown size={14} />}
              </div>

              {/* Mobile Submenu */}
              {item.subpages && openDropdown === item.id && (
                <div className="pl-6">
                  {item.subpages.map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.href}
                      className="block py-1"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {sub.name}
                    </Link>
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
                    
