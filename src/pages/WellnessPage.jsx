import { Heart } from 'lucide-react';
import { wellnessData } from '../data/wellnessData';

export default function WellnessPage({ darkMode }) {
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-pink-50 to-rose-100'
    }`}>
      <div className="container mx-auto px-6 py-20">
        <h1 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>Wellness Journey</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Physical Health */}
            <div className={`rounded-lg shadow-lg p-8 transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <h2 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>Physical Health</h2>
              <div className="space-y-4">
                {wellnessData.physical.goals.map((goal, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{goal.label}</span>
                    <span className={`font-semibold transition-colors duration-300 ${
                      darkMode ? 'text-pink-400' : 'text-pink-600'
                    }`}>{goal.target}</span>
                  </div>
                ))}
                <div className="mt-6">
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>Current Activities</h3>
                  <div className="flex flex-wrap gap-2">
                    {wellnessData.physical.activities.map((activity) => (
                      <span key={activity} className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-pink-900 text-pink-300 border border-pink-700' 
                          : 'bg-pink-100 text-pink-800'
                      }`}>
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Mental Wellness */}
            <div className={`rounded-lg shadow-lg p-8 transition-colors duration-300 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <h2 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>Mental Wellness</h2>
              <div className="space-y-4">
                {wellnessData.mental.goals.map((goal, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className={`transition-colors duration-300 ${
                      darkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>{goal.label}</span>
                    <span className={`font-semibold transition-colors duration-300 ${
                      darkMode ? 'text-pink-400' : 'text-pink-600'
                    }`}>{goal.target}</span>
                  </div>
                ))}
                <div className="mt-6">
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>Practices</h3>
                  <div className="flex flex-wrap gap-2">
                    {wellnessData.mental.practices.map((practice) => (
                      <span key={practice} className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                        darkMode 
                          ? 'bg-rose-900 text-rose-300 border border-rose-700' 
                          : 'bg-rose-100 text-rose-800'
                      }`}>
                        {practice}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Goals & Reflections */}
          <div className={`rounded-lg shadow-lg p-8 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <h2 className={`text-2xl font-semibold mb-6 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>Wellness Goals & Reflections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {wellnessData.goals.map((goal, index) => (
                <div key={index} className="text-center">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300 ${
                    darkMode ? 'bg-pink-900 border border-pink-700' : 'bg-pink-100'
                  }`}>
                    {goal.icon === 'heart' ? (
                      <Heart className={`w-8 h-8 transition-colors duration-300 ${
                        darkMode ? 'text-pink-400' : 'text-pink-600'
                      }`} />
                    ) : (
                      <span className="text-2xl">{goal.icon}</span>
                    )}
                  </div>
                  <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>{goal.title}</h3>
                  <p className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{goal.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
