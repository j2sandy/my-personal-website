import { useState } from 'react';
import { X, ArrowLeft, ExternalLink, FileText } from 'lucide-react';
import { learningData } from './learningData';

const StatCard = ({ title, value, darkMode }) => (
  <div className={`p-4 rounded-lg shadow-md ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
    <div className="text-sm font-medium mb-1">{title}</div>
    <div className="text-xl font-bold">{value}</div>
  </div>
);

const LearningPage = ({ darkMode }) => {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [activeTab, setActiveTab] = useState('overview');

  const renderOverview = (data) => (
    <div>
      <p className="mb-6">{data.overview}</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <StatCard title="Daily Goal" value={`${data.stats.dailyGoal} sessions`} darkMode={darkMode} />
        <StatCard title="Current Streak" value={`${data.stats.streak} days`} darkMode={darkMode} />
        <StatCard title="Overall Progress" value={`${data.stats.progress}%`} darkMode={darkMode} />
      </div>
    </div>
  );

  const renderLearningPath = (data) => (
    <div className="text-right mb-6">
      {data.roadmapUrl ? (
        <a
          href={data.roadmapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center px-4 py-2 rounded-md font-medium text-sm transition-colors duration-300 ${
            darkMode
              ? 'bg-green-700 text-white hover:bg-green-600'
              : 'bg-green-100 text-green-800 hover:bg-green-200'
          }`}
        >
          View Official Roadmap
          <ExternalLink className="w-4 h-4 ml-2" />
        </a>
      ) : (
        <p className="text-sm italic text-gray-500">No official roadmap available.</p>
      )}
    </div>
  );

  const renderNotes = (data) => (
    <ul className="space-y-2">
      {data.myNotes.map((note, index) => (
        <li key={index}>
          <a
            href={note.notionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block px-4 py-2 rounded-md transition-colors duration-300 ${
              darkMode
                ? 'bg-gray-700 hover:bg-gray-600 text-white'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
            }`}
          >
            <FileText className="inline-block w-4 h-4 mr-2" />
            {note.title}
          </a>
        </li>
      ))}
    </ul>
  );

  const SkillDetailView = () => {
    if (!selectedSkill) return null;
    const data = learningData.skillDetails[selectedSkill];

    return (
      <div className={`fixed inset-0 z-50 p-4 sm:p-8 overflow-y-auto ${darkMode ? 'bg-black bg-opacity-80' : 'bg-white bg-opacity-95'}`}>
        <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{selectedSkill}</h2>
            <button onClick={() => setSelectedSkill(null)} className="hover:text-red-500">
              <X />
            </button>
          </div>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2 rounded-md font-medium transition ${
                activeTab === 'overview'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('path')}
              className={`px-4 py-2 rounded-md font-medium transition ${
                activeTab === 'path'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              Learning Path
            </button>
            <button
              onClick={() => setActiveTab('notes')}
              className={`px-4 py-2 rounded-md font-medium transition ${
                activeTab === 'notes'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              My Notes
            </button>
          </div>
          {activeTab === 'overview' && renderOverview(data)}
          {activeTab === 'path' && renderLearningPath(data)}
          {activeTab === 'notes' && renderNotes(data)}
        </div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-6`}>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">My Learning Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {learningData.currentFocus.map((item, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg shadow-md transition-all duration-300 cursor-pointer hover:shadow-xl ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white'
              }`}
              onClick={() => {
                setSelectedSkill(item.skill);
                setActiveTab('overview');
              }}
            >
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">{item.title}</h2>
                <ArrowLeft className="w-5 h-5" />
              </div>
              <p className="text-sm mb-2">{item.description}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Streak: {item.streak} days</p>
            </div>
          ))}
        </div>
        {SkillDetailView()}
      </div>
    </div>
  );
};

export default LearningPage;
