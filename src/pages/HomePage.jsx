import { useState, useEffect } from 'react';
import { navigationItems, getPageDescription } from '../data/navigation';
import { fetchDailyShloka } from '../services/shlokaService';

export default function HomePage({ darkMode, onPageChange }) {
  const [shloka, setShloka] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadShloka() {
      const result = await fetchDailyShloka();
      setShloka(result);
      setLoading(false);
    }
    loadShloka();
  }, []);

  return (
    <div className={`min-h-screen flex flex-col justify-between transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>

      <div className="container mx-auto px-6 py-20 flex-grow">
        {/* Main Content */}
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
            <span className="text-4xl font-bold text-white">NS</span>
          </div>
          <h1 className={`text-5xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>Nitin Shandilya</h1>
          <p className={`text-xl mb-8 transition-colors duration-300 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>Creative Developer & Lifelong Learner</p>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-700'
          }`}>
            Welcome to my digital space! I'm passionate about technology, continuous learning, 
            and building meaningful projects. This is where I share my journey, insights, and 
            the things that inspire me every day.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {navigationItems.slice(1).map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => onPageChange(item.id)}
                  className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105 ${
                    darkMode 
                      ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' 
                      : 'bg-white hover:bg-gray-50'
                  }`}
                >
                  <Icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>{item.name}</h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {getPageDescription(item.id)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* === SHLOKA SECTION ABOVE FOOTER === */}
      {!loading && shloka && (
        <div className={`py-10 px-4 text-center ${
          darkMode ? 'bg-gray-900 text-gray-200' : 'bg-white text-gray-800'
        }`}>
          <div className="max-w-3xl mx-auto">
            <img 
              src={shloka.imageUrl}
              alt="Sanskrit-themed visual"
              className="w-full h-64 object-cover rounded-lg shadow mb-6 mx-auto"
            />
            <p className="text-2xl italic font-serif mb-2">“{shloka.text}”</p>
            <p className="text-md text-gray-500">{shloka.translation}</p>
          </div>
        </div>
      )}

      {/* === FOOTER (can be added below here if needed) === */}
    </div>
  );
            }
