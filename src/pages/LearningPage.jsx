
import { learningData } from '../data/learningData';

export default function LearningPage({ darkMode }) {
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-green-50 to-emerald-100'
    }`}>
      <div className="container mx-auto px-6 py-20">
        <h1 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>Learning Journey</h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Current Focus Section */}
          <div className={`rounded-lg shadow-lg p-8 mb-8 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>Current Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningData.currentFocus.map((item, index) => (
                <div key={index} className={`border-l-4 pl-4 ${
                  index === 0 ? 'border-green-500' : 'border-blue-500'
                }`}>
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>{item.title}</h3>
                  <p className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className={`rounded-lg shadow-lg p-8 mb-8 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {learningData.skills.map((skill) => (
                <span key={skill} className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-green-900 text-green-300 border border-green-700' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Learning Resources Section */}
          <div className={`rounded-lg shadow-lg p-8 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
          }`}>
            <h2 className={`text-2xl font-semibold mb-4 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>Learning Resources</h2>
            <div className="space-y-4">
              {learningData.resources.map((resource, index) => (
                <div key={index} className={`${
                  index < learningData.resources.length - 1 
                    ? `border-b pb-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}` 
                    : ''
                }`}>
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>{resource.category}</h3>
                  <p className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{resource.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
