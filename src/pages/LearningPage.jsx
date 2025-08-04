import { useState } from 'react';
import { X, Book, Video, Code, ArrowLeft, MapPin, Clock, CheckCircle, FileText, ExternalLink } from 'lucide-react';
import { learningData } from '../data/learningData';

const ProgressBar = ({ completion, darkMode }) => (
  <div className={`w-full bg-gray-200 rounded-full h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
    <div 
      className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-300"
      style={{ width: `${completion}%` }}
    ></div>
  </div>
);

const SkillDetailView = ({ skill, data, darkMode, onClose }) => {
  const [activeTab, setActiveTab] = useState('path');

  const tabs = [
    { id: 'path', label: 'Learning Path', icon: MapPin },
    { id: 'books', label: 'Books', icon: Book },
    { id: 'courses', label: 'Courses', icon: Video },
    { id: 'practice', label: 'Practice', icon: Code },
    { id: 'notes', label: 'My Notes', icon: FileText }
  ];

  const renderContent = () => {
    if (activeTab === 'path') {
      return (
        <div className="space-y-6">
          {/* Learning Path Overview */}
          <div className={`p-4 rounded-lg border transition-colors duration-300 ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-blue-50 border-blue-200'
          }`}>
            <h4 className={`font-semibold mb-2 transition-colors duration-300 ${
              darkMode ? 'text-blue-400' : 'text-blue-800'
            }`}>Learning Path Overview</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className={`block transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Total Progress</span>
                <span className={`font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {Math.round(data.learningPath.reduce((acc, item) => acc + item.completion, 0) / data.learningPath.length)}%
                </span>
              </div>
              <div>
                <span className={`block transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Completed Hours</span>
                <span className={`font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {data.learningPath.reduce((acc, item) => acc + item.completedHours, 0)}h
                </span>
              </div>
              <div>
                <span className={`block transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Estimated Total</span>
                <span className={`font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {data.learningPath.reduce((acc, item) => acc + item.estimatedHours, 0)}h
                </span>
              </div>
            </div>
          </div>

          {/* Learning Path Steps */}
          <div className="space-y-4">
            {['Fundamentals', 'Intermediate', 'Advanced'].map((phase) => {
              const phaseItems = data.learningPath.filter(item => item.phase === phase);
              const phaseColors = {
                'Fundamentals': 'green',
                'Intermediate': 'blue',
                'Advanced': 'purple'
              };
              const color = phaseColors[phase];
              
              return (
                <div key={phase} className="space-y-3">
                  <h5 className={`font-semibold text-lg flex items-center transition-colors duration-300 ${
                    darkMode ? `text-${color}-400` : `text-${color}-700`
                  }`}>
                    <div className={`w-3 h-3 rounded-full mr-3 bg-${color}-500`}></div>
                    {phase}
                  </h5>
                  
                  {phaseItems.map((item, index) => (
                    <div key={index} className={`ml-6 p-4 rounded-lg border transition-colors duration-300 ${
                      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <div className="flex items-center mb-1">
                            {item.completion === 100 ? (
                              <CheckCircle className={`w-5 h-5 mr-2 text-green-500`} />
                            ) : (
                              <div className={`w-5 h-5 mr-2 rounded-full border-2 ${
                                item.completion > 0 
                                  ? `border-${color}-500 bg-${color}-500` 
                                  : darkMode ? 'border-gray-500' : 'border-gray-300'
                              }`}>
                                {item.completion > 0 && item.completion < 100 && (
                                  <div className={`w-full h-full rounded-full bg-${color}-500 opacity-50`}></div>
                                )}
                              </div>
                            )}
                            <h6 className={`font-semibold transition-colors duration-300 ${
                              darkMode ? 'text-white' : 'text-gray-800'
                            }`}>{item.title}</h6>
                          </div>
                          <p className={`text-sm mb-2 transition-colors duration-300 ${
                            darkMode ? 'text-gray-400' : 'text-gray-600'
                          }`}>{item.description}</p>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center">
                              <Clock className={`w-4 h-4 mr-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                              <span className={`transition-colors duration-300 ${
                                darkMode ? 'text-gray-400' : 'text-gray-600'
                              }`}>
                                {item.completedHours}h / {item.estimatedHours}h
                              </span>
                            </div>
                          </div>
                        </div>
                        <span className={`text-sm font-medium ml-4 transition-colors duration-300 ${
                          item.completion === 100 
                            ? 'text-green-500' 
                            : darkMode ? `text-${color}-400` : `text-${color}-600`
                        }`}>
                          {item.completion}%
                        </span>
                      </div>
                      <ProgressBar completion={item.completion} darkMode={darkMode} />
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      );
    }

    if (activeTab === 'notes') {
      return (
        <div className="space-y-4">
          {data.notes?.map((note, index) => (
            <div key={index} className={`p-4 rounded-lg border transition-colors duration-300 ${
              darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex justify-between items-start mb-2">
                <h4 className={`font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>{note.title}</h4>
                <span className={`text-xs transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {new Date(note.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p className={`text-sm mb-3 leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>{note.content}</p>
              <div className="flex flex-wrap gap-2">
                {note.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className={`px-2 py-1 text-xs rounded-full transition-colors duration-300 ${
                      darkMode 
                        ? 'bg-blue-900 text-blue-300 border border-blue-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )) || (
            <div className={`text-center py-8 transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No notes yet for {skill}</p>
              <p className="text-sm mt-1">Start taking notes to track your learning insights!</p>
            </div>
          )}
        </div>
      );
    }

    const items = data[activeTab] || [];
    
    return (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className={`p-4 rounded-lg border transition-colors duration-300 ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex justify-between items-start mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h4 className={`font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>{item.title}</h4>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1 rounded transition-colors duration-300 hover:bg-opacity-80 ${
                        darkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-200 text-gray-500'
                      }`}
                      title="Open external link"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {item.author && (
                  <p className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>by {item.author}</p>
                )}
                {item.platform && (
                  <p className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>on {item.platform}</p>
                )}
                {item.type && (
                  <p className={`text-sm transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{item.type}</p>
                )}
              </div>
              <span className={`text-sm font-medium transition-colors duration-300 ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}>
                {item.completion}%
              </span>
            </div>
            <ProgressBar completion={item.completion} darkMode={darkMode} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-lg shadow-xl transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`p-6 border-b transition-colors duration-300 ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors duration-300 hover:bg-opacity-80 ${
                  darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                }`}
              >
                <ArrowLeft className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
              </button>
              <h2 className={`text-2xl font-bold transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>{skill} Learning Progress</h2>
            </div>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors duration-300 hover:bg-opacity-80 ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
              }`}
            >
              <X className={`w-5 h-5 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className={`border-b transition-colors duration-300 ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <div className="flex space-x-8 px-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-300 ${
                    activeTab === tab.id
                      ? 'border-green-500 text-green-500'
                      : `border-transparent ${
                          darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                        }`
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default function LearningPage({ darkMode }) {
  const [selectedSkill, setSelectedSkill] = useState(null);

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
            <p className={`text-sm mb-4 transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Click on any focus area to view detailed learning progress</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {learningData.currentFocus.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSkill(item.skill)}
                  className={`border-l-4 pl-4 text-left p-4 rounded-r-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                    index === 0 ? 'border-green-500' : 'border-blue-500'
                  } ${
                    darkMode 
                      ? 'hover:bg-gray-700 bg-gray-750' 
                      : 'hover:bg-gray-50 bg-transparent'
                  }`}
                >
                  <h3 className={`font-semibold transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {item.title}
                    <span className="ml-2 text-sm">→</span>
                  </h3>
                  <p className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{item.description}</p>
                  <p className={`text-xs mt-2 font-medium transition-colors duration-300 ${
                    index === 0 ? 'text-green-500' : 'text-blue-500'
                  }`}>
                    Focus on {item.skill}
                  </p>
                </button>
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
            <p className={`text-sm mb-4 transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Click on any skill to view detailed learning progress</p>
            <div className="flex flex-wrap gap-3">
              {learningData.skills.map((skill) => (
                <button
                  key={skill}
                  onClick={() => setSelectedSkill(skill)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    learningData.skillDetails[skill]
                      ? darkMode 
                        ? 'bg-green-900 text-green-300 border border-green-700 hover:bg-green-800 cursor-pointer' 
                        : 'bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer'
                      : darkMode
                        ? 'bg-gray-700 text-gray-400 border border-gray-600'
                        : 'bg-gray-100 text-gray-600'
                  }`}
                  disabled={!learningData.skillDetails[skill]}
                >
                  {skill}
                  {learningData.skillDetails[skill] && (
                    <span className="ml-1 text-xs">→</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && learningData.skillDetails[selectedSkill] && (
        <SkillDetailView
          skill={selectedSkill}
          data={learningData.skillDetails[selectedSkill]}
          darkMode={darkMode}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  );
        }
