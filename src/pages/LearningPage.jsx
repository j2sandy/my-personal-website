import { useState } from 'react';
import { X, Book, Video, Code, ArrowLeft, MapPin, Clock, CheckCircle, FileText, ExternalLink, Search, Filter, TrendingUp, Award, Calendar, Edit2 } from 'lucide-react';

// Import learning data (in a real app, this would be from a separate file)
const learningData = {
  currentFocus: [
    {
      title: "Advanced React Patterns",
      skill: "React",
      description: "Mastering hooks, context, and performance optimization",
      dailyGoal: 2,
      streak: 5
    },
    {
      title: "System Design Fundamentals", 
      skill: "System Design",
      description: "Learning scalable architecture patterns",
      dailyGoal: 1.5,
      streak: 3
    }
  ],
  skills: ["React", "JavaScript", "Python", "System Design", "Node.js", "TypeScript", "CSS", "PostgreSQL"],
  skillDetails: {
    "React": {
      learningPath: [
        {
          id: 1,
          title: "React Fundamentals",
          description: "Components, JSX, and basic state management",
          phase: "Fundamentals",
          completion: 100,
          estimatedHours: 20,
          completedHours: 20,
          lastUpdated: new Date().toISOString()
        },
        {
          id: 2,
          title: "Advanced Hooks",
          description: "Custom hooks, useReducer, and performance hooks",
          phase: "Intermediate", 
          completion: 75,
          estimatedHours: 15,
          completedHours: 11,
          lastUpdated: new Date().toISOString()
        },
        {
          id: 3,
          title: "State Management",
          description: "Context API, Redux, and Zustand patterns",
          phase: "Advanced",
          completion: 30,
          estimatedHours: 25,
          completedHours: 8,
          lastUpdated: new Date().toISOString()
        }
      ],
      books: [
        {
          id: 1,
          title: "React Up & Running",
          author: "Stoyan Stefanov",
          completion: 85,
          url: "https://example.com",
          timeSpent: 12,
          lastRead: new Date().toISOString()
        },
        {
          id: 2,
          title: "Learning React",
          author: "Alex Banks & Eve Porcello",
          completion: 60,
          url: "https://example.com",
          timeSpent: 8,
          lastRead: new Date().toISOString()
        }
      ],
      courses: [
        {
          id: 1,
          title: "Complete React Developer Course",
          platform: "Udemy",
          completion: 70,
          url: "https://example.com",
          timeSpent: 25,
          lastAccessed: new Date().toISOString()
        },
        {
          id: 2,
          title: "React - The Complete Guide",
          platform: "Udemy",
          completion: 45,
          url: "https://example.com",
          timeSpent: 18,
          lastAccessed: new Date().toISOString()
        }
      ],
      practice: [
        {
          id: 1,
          title: "Personal Portfolio",
          type: "Project",
          completion: 90,
          timeSpent: 40,
          lastWorked: new Date().toISOString()
        },
        {
          id: 2,
          title: "E-commerce App",
          type: "Project",
          completion: 65,
          timeSpent: 30,
          lastWorked: new Date().toISOString()
        },
        {
          id: 3,
          title: "React Testing Suite",
          type: "Practice",
          completion: 40,
          timeSpent: 15,
          lastWorked: new Date().toISOString()
        }
      ],
      notes: [
        {
          id: 1,
          title: "React Rendering Optimization",
          content: "Key insights on React.memo, useMemo, and useCallback. Remember that premature optimization can hurt readability. Focus on identifying actual performance bottlenecks first.",
          createdAt: "2024-01-15",
          updatedAt: new Date().toISOString(),
          tags: ["performance", "optimization", "hooks"]
        },
        {
          id: 2,
          title: "Custom Hooks Best Practices",
          content: "Custom hooks should start with 'use' and can call other hooks. They're great for sharing stateful logic between components without prop drilling.",
          createdAt: "2024-01-20",
          updatedAt: new Date().toISOString(),
          tags: ["hooks", "best-practices", "reusability"]
        },
        {
          id: 3,
          title: "Context API vs Redux",
          content: "Context API is great for simple state sharing, but Redux provides better dev tools, middleware support, and predictable state updates for complex applications.",
          createdAt: "2024-01-25",
          updatedAt: new Date().toISOString(),
          tags: ["context", "redux", "state-management"]
        }
      ]
    },
    "JavaScript": {
      learningPath: [
        {
          id: 1,
          title: "ES6+ Features",
          description: "Modern JavaScript syntax and features",
          phase: "Fundamentals",
          completion: 90,
          estimatedHours: 15,
          completedHours: 13,
          lastUpdated: new Date().toISOString()
        },
        {
          id: 2,
          title: "Async Programming",
          description: "Promises, async/await, and event loop",
          phase: "Intermediate",
          completion: 80,
          estimatedHours: 12,
          completedHours: 10,
          lastUpdated: new Date().toISOString()
        },
        {
          id: 3,
          title: "Advanced Patterns",
          description: "Design patterns and architectural concepts",
          phase: "Advanced",
          completion: 50,
          estimatedHours: 20,
          completedHours: 10,
          lastUpdated: new Date().toISOString()
        }
      ],
      books: [
        {
          id: 1,
          title: "JavaScript: The Good Parts",
          author: "Douglas Crockford",
          completion: 100,
          url: "https://example.com"
        },
        {
          id: 2,
          title: "You Don't Know JS",
          author: "Kyle Simpson",
          completion: 75,
          url: "https://example.com"
        }
      ],
      courses: [
        {
          id: 1,
          title: "JavaScript: The Advanced Concepts",
          platform: "Udemy",
          completion: 85,
          url: "https://example.com"
        }
      ],
      practice: [
        {
          id: 1,
          title: "Algorithm Challenges",
          type: "Practice",
          completion: 70
        },
        {
          id: 2,
          title: "DOM Manipulation Projects",
          type: "Project",
          completion: 95
        }
      ],
      notes: [
        {
          id: 1,
          title: "JavaScript Event Loop",
          content: "The event loop is what allows JavaScript to perform non-blocking I/O operations despite being single-threaded.",
          createdAt: "2024-01-10",
          updatedAt: new Date().toISOString(),
          tags: ["event-loop", "async", "concurrency"]
        }
      ]
    }
  }
};

// Progress Update Modal Component
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

          {item.completedHours !== undefined && (
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
          )}
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

// Progress Bar Component
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

// Stat Card Component
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

// Skill Detail View Component
const SkillDetailView = ({ skill, data, darkMode, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [editingItem, setEditingItem] = useState(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'path', label: 'Learning Path', icon: MapPin },
    { id: 'books', label: 'Books', icon: Book },
    { id: 'courses', label: 'Courses', icon: Video },
    { id: 'practice', label: 'Practice', icon: Code },
    { id: 'notes', label: 'My Notes', icon: FileText }
  ];

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
    
    return { pathProgress, totalHours, estimatedHours, completedItems };
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
            label="Est. Remaining"
            value={`${stats.estimatedHours - stats.totalHours}h`}
            color="orange"
            darkMode={darkMode}
          />
        </div>

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

        {/* Recent Activity */}
        <div className={`p-6 rounded-lg border transition-colors duration-300 ${
          darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'
        }`}>
          <h4 className={`font-semibold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>Recent Activity</h4>
          <div className="space-y-3">
            {data.notes?.slice(0, 3).map((note, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FileText className={`w-4 h-4 mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <div className="flex-1">
                  <p className={`text-sm font-medium transition-colors duration-300 ${
                    darkMode ? 'text-white' : 'text-gray-800'
                  }`}>{note.title}</p>
                  <p className={`text-xs transition-colors duration-300 ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {new Date(note.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )) || (
              <p className={`text-sm transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>No recent activity</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (activeTab === 'overview') {
      return renderOverview();
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
         
