import { useState, useEffect, useCallback } from 'react';
import { X, Book, Video, Code, ArrowLeft, MapPin, Clock, CheckCircle, FileText, ExternalLink, Search, Filter, TrendingUp, Award, Calendar, Plus, Edit2, Target, Play, Pause, RotateCcw, Save, Trash2 } from 'lucide-react';

// Study session timer component
const StudyTimer = ({ skill, onSessionComplete, darkMode }) => {
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState(0);
  const [sessionType, setSessionType] = useState('study');

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  const reset = () => {
    setTime(0);
    setIsActive(false);
  };

  const complete = () => {
    if (time > 0) {
      onSessionComplete({
        skill,
        duration: time,
        type: sessionType,
        timestamp: new Date().toISOString()
      });
      reset();
    }
  };

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className={`p-6 rounded-lg border transition-colors duration-300 ${
      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-6">
        <h4 className={`font-semibold text-lg transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>Study Timer - {skill}</h4>
        <select
          value={sessionType}
          onChange={(e) => setSessionType(e.target.value)}
          className={`px-3 py-2 rounded border text-sm transition-colors duration-300 ${
            darkMode 
              ? 'bg-gray-600 text-white border-gray-500' 
              : 'bg-gray-100 text-gray-800 border-gray-300'
          }`}
        >
          <option value="study">Study</option>
          <option value="practice">Practice</option>
          <option value="review">Review</option>
        </select>
      </div>
      
      <div className="text-center mb-6">
        <div className={`text-5xl font-mono font-bold mb-4 transition-colors duration-300 ${
          darkMode ? 'text-green-400' : 'text-green-600'
        }`}>
          {formatTime(time)}
        </div>
        <p className={`text-sm transition-colors duration-300 ${
          darkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Session Type: {sessionType.charAt(0).toUpperCase() + sessionType.slice(1)}
        </p>
      </div>

      <div className="flex justify-center space-x-3">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-300 ${
            isActive 
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          {isActive ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          <span>{isActive ? 'Pause' : 'Start'}</span>
        </button>
        <button
          onClick={reset}
          className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-300 ${
            darkMode 
              ? 'bg-gray-600 hover:bg-gray-500 text-white' 
              : 'bg-gray-300 hover:bg-gray-400 text-gray-800'
          }`}
        >
          <RotateCcw className="w-4 h-4" />
          <span>Reset</span>
        </button>
        <button
          onClick={complete}
          disabled={time === 0}
          className={`px-6 py-3 rounded-lg font-medium flex items-center space-x-2 transition-colors duration-300 ${
            time > 0
              ? 'bg-blue-500 hover:bg-blue-600 text-white'
              : darkMode 
                ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
          }`}
        >
          <Save className="w-4 h-4" />
          <span>Complete</span>
        </button>
      </div>
    </div>
  );
};

// Progress update modal
const ProgressUpdateModal = ({ item, onUpdate, onClose, darkMode }) => {
  const [completion, setCompletion] = useState(item.completion);
  const [hoursToAdd, setHoursToAdd] = useState(0);

  const handleSave = () => {
    onUpdate({
      ...item,
      completion: Math.min(100, Math.max(0, completion)),
      completedHours: item.completedHours + hoursToAdd,
      lastUpdated: new Date().toISOString()
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`max-w-md w-full rounded-lg p-6 transition-colors duration-300 ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        <h3 className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>Update Progress: {item.title}</h3>
        
        <div className="space-y-4">
          <div>
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Completion Percentage
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={completion}
              onChange={(e) => setCompletion(parseInt(e.target.value))}
              className="w-full"
            />
            <div className="text-center mt-1">
              <span className={`text-lg font-semibold transition-colors duration-300 ${
                darkMode ? 'text-green-400' : 'text-green-600'
              }`}>{completion}%</span>
            </div>
          </div>

          <div>
            <label className={`block text-sm font-medium mb-2 transition-colors duration-300 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Hours to Add
            </label>
            <input
              type="number"
              step="0.5"
              min="0"
              value={hoursToAdd}
              onChange={(e) => setHoursToAdd(parseFloat(e.target.value) || 0)}
              className={`w-full px-3 py-2 rounded border transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white' 
                  : 'bg-white border-gray-300 text-gray-800'
              }`}
            />
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-6">
          <button
            onClick={onClose}
            className={`px-4 py-2 rounded font-medium transition-colors duration-300 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
            }`}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded font-medium transition-colors duration-300"
          >
            Save Progress
          </button>
        </div>
      </div>
    </div>
  );
};

// Daily progress chart
const DailyProgressChart = ({ data, darkMode }) => {
  const maxHours = Math.max(...data.map(d => d.hours), 1);
  
  return (
    <div className={`p-4 rounded-lg border transition-colors duration-300 ${
      darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
    }`}>
      <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>Daily Study Hours (Last 7 Days)</h4>
      <div className="flex items-end space-x-2 h-32">
        {data.slice(-7).map((day, index) => (
          <div key={index} className="flex-1 flex flex-col items-center">
            <div
              className="w-full bg-green-500 rounded-t transition-all duration-300 hover:bg-green-400"
              style={{ height: `${(day.hours / maxHours) * 100}%`, minHeight: '4px' }}
            />
            <div className={`text-xs mt-2 transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {new Date(day.date).toLocaleDateString('en', { weekday: 'short' })}
            </div>
            <div className={`text-xs font-medium transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>
              {day.hours}h
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ProgressBar = ({ completion, darkMode, size = "default", animated = false }) => {
  const heights = {
    small: "h-1",
    default: "h-2", 
    large: "h-3"
  };
  
  return (
    <div className={`w-full bg-gray-200 rounded-full ${heights[size]} ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
      <div 
        className={`bg-gradient-to-r from-green-500 to-emerald-500 rounded-full transition-all duration-500 ease-out ${
          animated ? 'animate-pulse' : ''
        }`}
        style={{ width: `${completion}%`, height: '100%' }}
      ></div>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, color = "green", darkMode, trend = null }) => (
  <div className={`p-4 rounded-lg transition-colors duration-300 ${
    darkMode ? 'bg-gray-700' : 'bg-gray-50'
  }`}>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className={`p-2 rounded-lg bg-${color}-500 bg-opacity-20`}>
          <Icon className={`w-5 h-5 text-${color}-500`} />
        </div>
        <div>
          <p className={`text-sm transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>{label}</p>
          <p className={`font-semibold transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>{value}</p>
        </div>
      </div>
      {trend && (
        <div className={`text-xs font-medium ${
          trend > 0 ? 'text-green-500' : trend < 0 ? 'text-red-500' : 'text-gray-500'
        }`}>
          {trend > 0 ? '↗' : trend < 0 ? '↘' : '→'} {Math.abs(trend)}%
        </div>
      )}
    </div>
  </div>
);

const SkillDetailView = ({ skill, data, darkMode, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);
  const [learningData, setLearningData] = useState(initialLearningData);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'timer', label: 'Study Timer', icon: Clock },
    { id: 'path', label: 'Learning Path', icon: MapPin },
    { id: 'books', label: 'Books', icon: Book },
    { id: 'courses', label: 'Courses', icon: Video },
    { id: 'practice', label: 'Practice', icon: Code },
    { id: 'notes', label: 'My Notes', icon: FileText }
  ];

  const handleSessionComplete = (session) => {
    alert(`Study session completed!\nSkill: ${session.skill}\nDuration: ${Math.floor(session.duration / 60)} minutes\nType: ${session.type}`);
  };

  const handleUpdateProgress = (updatedItem) => {
    alert(`Progress updated for: ${updatedItem.title}\nCompletion: ${updatedItem.completion}%`);
    setEditingItem(null);
  };

  const calculateOverallStats = () => {
    const pathProgress = data.learningPath?.reduce((acc, item) => acc + item.completion, 0) / (data.learningPath?.length || 1);
    const totalHours = data.learningPath?.reduce((acc, item) => acc + item.completedHours, 0) || 0;
    const estimatedHours = data.learningPath?.reduce((acc, item) => acc + item.estimatedHours, 0) || 0;
    const completedItems = [
      ...(data.books || []),
      ...(data.courses || []), 
      ...(data.practice || [])
    ].filter(item => item.completion === 100).length;
    
    const weeklyHours = data.dailyProgress?.slice(-7).reduce((acc, day) => acc + day.hours, 0) || 0;
    const previousWeeklyHours = data.dailyProgress?.slice(-14, -7).reduce((acc, day) => acc + day.hours, 0) || 0;
    const weeklyTrend = previousWeeklyHours > 0 ? ((weeklyHours - previousWeeklyHours) / previousWeeklyHours * 100) : 0;
    
    return { pathProgress, totalHours, estimatedHours, completedItems, weeklyHours, weeklyTrend };
  };

  const renderOverview = () => {
    const stats = calculateOverallStats();
    
    return (
      <div className="space-y-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatCard 
            icon={TrendingUp}
            label="Overall Progress"
            value={`${Math.round(stats.pathProgress)}%`}
            color="green"
            darkMode={darkMode}
          />
          <StatCard 
            icon={Clock}
            label="Hours Completed" 
            value={`${stats.totalHours}h`}
            color="blue"
            darkMode={darkMode}
          />
          <StatCard 
            icon={Award}
            label="Items Completed"
            value={stats.completedItems}
            color="purple"
            darkMode={darkMode}
          />
          <StatCard 
            icon={Calendar}
            label="Weekly Hours"
            value={`${stats.weeklyHours}h`}
            color="orange"
            darkMode={darkMode}
            trend={Math.round(stats.weeklyTrend)}
          />
        </div>

        {/* Daily Progress Chart */}
        {data.dailyProgress && (
          <DailyProgressChart data={data.dailyProgress} darkMode={darkMode} />
        )}

        {/* Phase Progress */}
        <div className={`p-6 rounded-lg border transition-colors duration-300 ${
          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
        }`}>
          <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>Learning Phase Progress</h4>
          
          {['Fundamentals', 'Intermediate', 'Advanced'].map((phase) => {
            const phaseItems = data.learningPath?.filter(item => item.phase === phase) || [];
            const phaseProgress = phaseItems.length > 0 
              ? phaseItems.reduce((acc, item) => acc + item.completion, 0) / phaseItems.length 
              : 0;
            const colors = {
              'Fundamentals': 'green',
              'Intermediate': 'blue', 
              'Advanced': 'purple'
            };
            
            return (
              <div key={phase} className="mb-4 last:mb-0">
                <div className="flex justify-between items-center mb-2">
                  <span className={`font-medium transition-colors duration-300 ${
                    darkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>{phase}</span>
                  <span className={`text-sm font-medium text-${colors[phase]}-500`}>
                    {Math.round(phaseProgress)}%
                  </span>
                </div>
                <ProgressBar completion={phaseProgress} darkMode={darkMode} />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (activeTab === 'overview') {
      return renderOverview();
    }

    if (activeTab === 'timer') {
      return (
        <div className="space-y-6">
          <StudyTimer 
            skill={skill} 
            onSessionComplete={handleSessionComplete}
            darkMode={darkMode}
          />
        </div>
      );
    }

    if (activeTab === 'path') {
      return (
        <div className="space-y-6">
          {['Fundamentals', 'Intermediate', 'Advanced'].map((phase) => {
            const phaseItems = data.learningPath?.filter(item => item.phase === phase) || [];
            const phaseColors = {
              'Fundamentals': 'green',
              'Intermediate': 'blue',
              'Advanced': 'purple'
            };
            const color = phaseColors[phase];
            
            if (phaseItems.length === 0) return null;
            
            return (
              <div key={phase} className="space-y-3">
                <h5 className={`font-semibold text-lg flex items-center transition-colors duration-300 ${
                  darkMode ? `text-${color}-400` : `text-${color}-700`
                }`}>
                  <div className={`w-3 h-3 rounded-full mr-3 bg-${color}-500`}></div>
                  {phase}
                </h5>
                
                {phaseItems.map((item, index) => (
                  <div key={index} className={`ml-6 p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
                    darkMode ? 'bg-gray-700 border-gray-600 hover:bg-gray-650' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <div className="flex items-center mb-1">
                          {item.completion === 100 ? (
                            <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
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
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setEditingItem(item)}
                          className={`p-1 rounded transition-colors duration-300 ${
                            darkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                          }`}
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <span className={`text-sm font-medium ml-4 transition-colors duration-300 ${
                          item.completion === 100 
                            ? 'text-green-500' 
              : darkMode ? `text-${color}-400` : `text-${color}-600`
                        }`}>
                          {item.completion}%
                        </span>
                      </div>
                    </div>
                    <ProgressBar completion={item.completion} darkMode={darkMode} />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      );
    }

    if (activeTab === 'notes') {
      const filteredNotes = data.notes?.filter(note => 
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      ) || [];

      return (
        <div className="space-y-4">
          <div className="relative">
            <Search className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-lg border transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
          </div>

          {filteredNotes.map((note, index) => (
            <div key={index} className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
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
          ))}

          {filteredNotes.length === 0 && (
            <div className={`text-center py-8 transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <FileText className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No notes found</p>
              <p className="text-sm mt-1">Try adjusting your search terms</p>
            </div>
          )}
        </div>
      );
    }

    const items = data[activeTab] || [];
    
    return (
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className={`p-4 rounded-lg border transition-all duration-300 hover:shadow-md ${
            darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
          }`}>
            <div className="flex justify-between items-start mb-3">
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
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setEditingItem(item)}
                  className={`p-1 rounded transition-colors duration-300 ${
                    darkMode ? 'hover:bg-gray-600 text-gray-400' : 'hover:bg-gray-200 text-gray-600'
                  }`}
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <span className={`text-sm font-medium transition-colors duration-300 ${
                  darkMode ? 'text-green-400' : 'text-green-600'
                }`}>
                  {item.completion}%
                </span>
              </div>
            </div>
            <ProgressBar completion={item.completion} darkMode={darkMode} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`max-w-5xl w-full max-h-[90vh] overflow-hidden rounded-xl shadow-2xl transition-colors duration-300 ${
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
              <h2 className={`text-3xl font-bold transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>{skill}</h2>
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
          <div className="flex space-x-6 px-6 overflow-x-auto">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-3 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-300 ${
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
        <div className="p-6 max-h-[65vh] overflow-y-auto">
          {renderContent()}
        </div>
      </div>

      {/* Progress Update Modal */}
      {editingItem && (
        <ProgressUpdateModal
          item={editingItem}
          onUpdate={handleUpdateProgress}
          onClose={() => setEditingItem(null)}
          darkMode={darkMode}
        />
      )}
    </div>
  );
};

export default function LearningPage({ darkMode = false }) {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [filterActive, setFilterActive] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50'
    }`}>
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h1 className={`text-5xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>Learning Journey</h1>
          <p className={`text-lg transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Track your progress across skills and technologies</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Current Focus Section */}
          <div className={`rounded-xl shadow-xl p-8 mb-8 backdrop-blur-sm transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/80'
          }`}>
            <h2 className={`text-3xl font-semibold mb-2 transition-colors duration-300 ${
              darkMode ? 'text-white' : 'text-gray-800'
            }`}>🎯 Current Focus</h2>
            <p className={`text-sm mb-6 transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>Your active learning priorities</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {initialLearningData.currentFocus.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSkill(item.skill)}
                  className={`border-l-4 pl-6 text-left p-6 rounded-r-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] group ${
                    index === 0 ? 'border-green-500' : 'border-blue-500'
                  } ${
                    darkMode 
                      ? 'hover:bg-gray-700/50 bg-gray-750/50' 
                      : 'hover:bg-gray-50 bg-white/50'
                  }`}
                >
                  <h3 className={`font-semibold text-lg mb-2 transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    {item.title}
                    <span className="ml-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </h3>
                  <p className={`transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>{item.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <p className={`text-sm font-medium transition-colors duration-300 ${
                      index === 0 ? 'text-green-500' : 'text-blue-500'
                    }`}>
                      Focus on {item.skill}
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <span className={`transition-colors duration-300 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        🔥 {item.streak} days
                      </span>
                      <span className={`transition-colors duration-300 ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        🎯 {item.dailyGoal}h/day
                      </span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className={`rounded-xl shadow-xl p-8 backdrop-blur-sm transition-colors duration-300 ${
            darkMode ? 'bg-gray-800/80 border border-gray-700' : 'bg-white/80'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className={`text-3xl font-semibold mb-2 transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>🛠️ Skills & Technologies</h2>
                <p className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>Click on any skill to view detailed progress</p>
              </div>
              <button
                onClick={() => setFilterActive(!filterActive)}
                className={`p-2 rounded-lg transition-colors duration-300 ${
                  filterActive 
                    ? 'bg-green-500 text-white' 
                    : darkMode 
                      ? 'hover:bg-gray-700 text-gray-400' 
                      : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                <Filter className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {initialLearningData.skills.map((skill) => {
                const hasDetails = initialLearningData.skillDetails[skill];
                return (
                  <button
                    key={skill}
                    onClick={() => hasDetails && setSelectedSkill(skill)}
                    className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 group ${
                      hasDetails
                        ? darkMode 
                          ? 'bg-green-900/80 text-green-300 border border-green-700 hover:bg-green-800 cursor-pointer hover:shadow-lg' 
                          : 'bg-green-100 text-green-800 hover:bg-green-200 cursor-pointer hover:shadow-lg'
                        : darkMode
                          ? 'bg-gray-700/50 text-gray-400 border border-gray-600'
                          : 'bg-gray-100 text-gray-600'
                    }`}
                    disabled={!hasDetails}
                  >
                    {skill}
                    {hasDetails && (
                      <span className="ml-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Skill Detail Modal */}
      {selectedSkill && initialLearningData.skillDetails[selectedSkill] && (
        <SkillDetailView
          skill={selectedSkill}
          data={initialLearningData.skillDetails[selectedSkill]}
          darkMode={darkMode}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </div>
  );
}
