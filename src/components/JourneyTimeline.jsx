import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle, 
  Clock, 
  Target, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Star,
  TrendingUp,
  Award,
  Heart,
  Brain,
  Dumbbell,
  Apple,
  Users
} from 'lucide-react';

const journeyEvents = [
  // Past Events (Completed)
  {
    id: 1,
    date: '2024-01-15',
    title: 'Started Daily Meditation',
    type: 'mental',
    status: 'completed',
    description: 'Began with 5-minute daily sessions',
    icon: Brain,
    impact: 'Reduced stress levels by 30%'
  },
  {
    id: 2,
    date: '2024-02-01',
    title: 'Nutrition Plan Implementation',
    type: 'nutrition',
    status: 'completed',
    description: 'Started tracking macros and meal prep',
    icon: Apple,
    impact: 'Lost 5 lbs and increased energy'
  },
  {
    id: 3,
    date: '2024-03-10',
    title: 'Gym Membership & Workout Routine',
    type: 'physical',
    status: 'completed',
    description: '3x weekly strength training sessions',
    icon: Dumbbell,
    impact: 'Increased strength by 25%'
  },
  {
    id: 4,
    date: '2024-04-20',
    title: 'Sleep Schedule Optimization',
    type: 'sleep',
    status: 'completed',
    description: 'Fixed bedtime routine and sleep hygiene',
    icon: Heart,
    impact: 'Improved sleep quality score to 8.5/10'
  },
  // Current/Ongoing
  {
    id: 5,
    date: '2024-06-01',
    title: 'Social Wellness Initiative',
    type: 'social',
    status: 'current',
    description: 'Weekly friend meetups and community activities',
    icon: Users,
    impact: 'Building stronger connections'
  },
  {
    id: 6,
    date: '2024-07-15',
    title: 'Advanced Mindfulness Course',
    type: 'mental',
    status: 'current',
    description: '8-week structured mindfulness program',
    icon: Brain,
    impact: 'Enhanced emotional regulation'
  },
  // Future Goals
  {
    id: 7,
    date: '2024-09-01',
    title: 'Marathon Training Program',
    type: 'physical',
    status: 'planned',
    description: '16-week marathon preparation plan',
    icon: Dumbbell,
    impact: 'Target: Complete first marathon'
  },
  {
    id: 8,
    date: '2024-10-15',
    title: 'Nutrition Certification',
    type: 'nutrition',
    status: 'planned',
    description: 'Professional nutrition coaching certification',
    icon: Apple,
    impact: 'Help others with their nutrition journey'
  },
  {
    id: 9,
    date: '2024-12-31',
    title: 'Annual Wellness Review',
    type: 'all',
    status: 'planned',
    description: 'Comprehensive health and wellness assessment',
    icon: Star,
    impact: 'Set goals for next year'
  }
];

const pillarColors = {
  physical: { bg: 'bg-green-100 dark:bg-green-900/20', border: 'border-green-300', text: 'text-green-700 dark:text-green-300' },
  mental: { bg: 'bg-purple-100 dark:bg-purple-900/20', border: 'border-purple-300', text: 'text-purple-700 dark:text-purple-300' },
  nutrition: { bg: 'bg-orange-100 dark:bg-orange-900/20', border: 'border-orange-300', text: 'text-orange-700 dark:text-orange-300' },
  sleep: { bg: 'bg-indigo-100 dark:bg-indigo-900/20', border: 'border-indigo-300', text: 'text-indigo-700 dark:text-indigo-300' },
  social: { bg: 'bg-teal-100 dark:bg-teal-900/20', border: 'border-teal-300', text: 'text-teal-700 dark:text-teal-300' },
  all: { bg: 'bg-pink-100 dark:bg-pink-900/20', border: 'border-pink-300', text: 'text-pink-700 dark:text-pink-300' }
};

const statusConfig = {
  completed: { icon: CheckCircle, color: 'text-green-500', label: 'Completed' },
  current: { icon: Clock, color: 'text-blue-500', label: 'In Progress' },
  planned: { icon: Target, color: 'text-gray-500', label: 'Planned' }
};

export default function JourneyTimeline({ darkMode = false }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Calendar functions
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const getEventsForDate = (dateStr) => {
    return journeyEvents.filter(event => event.date === dateStr);
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-24"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateStr = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const events = getEventsForDate(dateStr);
      const hasEvents = events.length > 0;

      days.push(
        <div
          key={day}
          className={`h-24 p-2 border border-gray-200 dark:border-gray-700 relative cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 ${
            hasEvents ? 'bg-blue-50 dark:bg-blue-900/20' : ''
          }`}
          onClick={() => hasEvents && setSelectedEvent(events[0])}
        >
          <div className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {day}
          </div>
          {hasEvents && (
            <div className="mt-1">
              {events.slice(0, 2).map((event, idx) => (
                <div
                  key={idx}
                  className={`text-xs px-1 py-0.5 rounded mb-1 ${pillarColors[event.type].bg} ${pillarColors[event.type].text}`}
                >
                  {event.title.substring(0, 15)}...
                </div>
              ))}
              {events.length > 2 && (
                <div className="text-xs text-gray-500">+{events.length - 2} more</div>
              )}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const getProgressStats = () => {
    const completed = journeyEvents.filter(e => e.status === 'completed').length;
    const current = journeyEvents.filter(e => e.status === 'current').length;
    const planned = journeyEvents.filter(e => e.status === 'planned').length;
    return { completed, current, planned };
  };

  const stats = getProgressStats();

  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              My Wellness Journey
            </span>
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Track your progress from past achievements to future goals
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center">
              <CheckCircle className="w-8 h-8 text-green-500 mr-3" />
              <div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stats.completed}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Completed Goals
                </div>
              </div>
            </div>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center">
              <Clock className="w-8 h-8 text-blue-500 mr-3" />
              <div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stats.current}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  In Progress
                </div>
              </div>
            </div>
          </div>
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center">
              <Target className="w-8 h-8 text-purple-500 mr-3" />
              <div>
                <div className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {stats.planned}
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Future Goals
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar View */}
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <div className="flex items-center justify-between mb-6">
              <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Journey Calendar
              </h2>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevMonth}
                  className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className={`text-lg font-medium px-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </div>
                <button
                  onClick={nextMonth}
                  className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className={`p-2 text-center text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1">
              {renderCalendar()}
            </div>
          </div>

          {/* Timeline View */}
          <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Timeline View
            </h2>
            <div className="space-y-4 overflow-y-auto" style={{ height: '480px' }}>
              {journeyEvents.map((event, index) => {
                const StatusIcon = statusConfig[event.status].icon;
                const EventIcon = event.icon;
                return (
                  <div
                    key={event.id}
                    className={`relative flex items-start p-4 rounded-lg cursor-pointer transition-all duration-200 hover:scale-102 ${
                      pillarColors[event.type].bg
                    } border ${pillarColors[event.type].border}`}
                    onClick={() => setSelectedEvent(event)}
                  >
                    <div className="flex-shrink-0 mr-4">
                      <div className={`p-2 rounded-full bg-white dark:bg-gray-700 shadow-sm`}>
                        <EventIcon className={`w-5 h-5 ${pillarColors[event.type].text}`} />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {event.title}
                        </h3>
                        <StatusIcon className={`w-4 h-4 ${statusConfig[event.status].color}`} />
                      </div>
                      <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-1`}>
                        {formatDate(event.date)}
                      </p>
                      <p className={`text-sm ${pillarColors[event.type].text}`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`max-w-md w-full rounded-xl p-6 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-full ${pillarColors[selectedEvent.type].bg}`}>
                  <selectedEvent.icon className={`w-6 h-6 ${pillarColors[selectedEvent.type].text}`} />
                </div>
                <button
                  onClick={() => setSelectedEvent(null)}
                  className={`p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700`}
                >
                  ✕
                </button>
              </div>
              
              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {selectedEvent.title}
              </h3>
              
              <div className="flex items-center mb-3">
                <MapPin className="w-4 h-4 text-gray-400 mr-1" />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {formatDate(selectedEvent.date)}
                </span>
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${statusConfig[selectedEvent.status].color} bg-gray-100 dark:bg-gray-700`}>
                  {statusConfig[selectedEvent.status].label}
                </span>
              </div>
              
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                {selectedEvent.description}
              </p>
              
              <div className={`p-3 rounded-lg ${pillarColors[selectedEvent.type].bg}`}>
                <div className="flex items-center">
                  <TrendingUp className={`w-4 h-4 mr-2 ${pillarColors[selectedEvent.type].text}`} />
                  <span className={`text-sm font-medium ${pillarColors[selectedEvent.type].text}`}>
                    Impact: {selectedEvent.impact}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
    }
