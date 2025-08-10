import { useState, useEffect } from 'react';
import { navigationItems, getPageDescription } from '../data/navigationItems';
import { fetchShloka } from '../services/shlokaService';
import TypewriterText from './TypewriterText';

export default function HomePage({ darkMode, onPageChange }) {
  const [shlokaData, setShlokaData] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const loadShloka = async () => {
    const data = await fetchShloka();
    setShlokaData(data);
    setShowExplanation(false);
  };

  useEffect(() => {
    loadShloka();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-blue-50 to-indigo-100'
    }`}>
      <div className="container mx-auto px-6 py-20 text-center">
        <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center shadow-xl">
          <span className="text-4xl font-bold text-white">NS</span>
        </div>
        <h1 className={`text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Nitin Shandilya</h1>
        <p className={`text-xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          Experienced Full Stack Engineer, Newbie into Wellness and Mindful Living
        </p>
        <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-700'}`}>
          Welcome to my digital space! I'm passionate about technology, continuous learning, 
          and building meaningful projects. This is where I share my journey, insights, and 
          the things that inspire me every day.
        </p>

        {/* Navigation Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {navigationItems.slice(1).map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group transform hover:scale-105 ${
                  darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-white hover:bg-gray-50'
                }`}
              >
                <Icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className={`font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-800'}`}>{item.name}</h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  {getPageDescription(item.id)}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Shloka Section */}
      <div className={`py-12 px-6 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
        <h2 className={`text-2xl font-bold mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>Shloka of the Day</h2>

        {shlokaData && (
          <div className="max-w-4xl mx-auto text-center">
            <div className={`mb-4 text-lg ${darkMode ? 'text-purple-300' : 'text-purple-700'}`}>
              Chapter {shlokaData.Chapter}, Verse {shlokaData["Verse No"]}
            </div>

            <div className={`mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              <TypewriterText text={shlokaData.Shloka} />
            </div>

            <div className={`italic mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              {shlokaData["English Translation"]}
            </div>

            <div className="flex justify-center gap-4">
              <button 
                onClick={loadShloka}
                className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                New Shloka
              </button>
              {shlokaData.Explanation && (
                <button 
                  onClick={() => setShowExplanation(prev => !prev)}
                  className="px-4 py-2 rounded border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition"
                >
                  {showExplanation ? "Hide" : "Show"} Explanation
                </button>
              )}
            </div>

            {showExplanation && (
              <div className={`mt-6 max-w-3xl mx-auto text-sm leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                {shlokaData.Explanation}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
