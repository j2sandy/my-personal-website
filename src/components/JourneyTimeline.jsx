import React, { useState } from 'react';
import {
  CheckCircle, 
  Clock, 
  Target,
  MapPin,
  Star,
  TrendingUp,
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
    date: '2023-08-01',
    title: 'Started Cycling and Weight Training',
    type: 'physical',
    status: 'ongoing',
    description: 'Started cycling and weight training to improve physical fitness',
    icon: Dumbbell,
    impact: 'Weight control, increased strength, and endurance'
  },
  {
    id: 2,
    date: '2023-09-01',
    title: 'Started tracking health data',
    type: 'physical',
    status: 'ongoing',
    description: 'Gained insights into health metrics like heart rate, sleep, and activity levels',
    icon: Heart,
    impact: 'Motivation to maintain healthy habits and track progress'
  },
  {
    id: 3,
    date: '2024-04-01',
    title: 'Read Deep Nutrition Book',
    type: 'nutrition',
    status: 'completed',
    description: 'Gained insights on ancestral diets and modern nutrition',
    icon: Apple,
    impact: 'Improved digestion, energy levels, and overall health'
  },
  // Current/Ongoing
  {
    id: 4,
    date: '2024-05-01',
    title: 'Inner Engineering Program',
    type: 'mental',
    status: 'completed',
    description: '8-week program for mental clarity and emotional balance',
    icon: Brain,
    impact: 'Improved focus, better sleep and inner peace'
  },
  // Future Goals
  {
    id: 5,
    date: '2025-12-31',
    title: 'Certification in Nutrition',
    type: 'nutrition',
    status: 'planned',
    description: 'Complete certification to deepen understanding of nutrition science',
    icon: Star,
    impact: 'Target: Complete first certification in wellneess'
  },
  {
    id: 6,
    date: '2025-12-31',
    title: 'Create website to share wellness tips',
    type: 'social',
    status: 'planned',
    description: 'Build a platform to share wellness tips and connect with others',
    icon: Users,
    impact: 'Target: Create a community for sharing wellness knowledge'
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

function CurvedArrow({ darkMode }) {
  // Animate stroke dashoffset for "draw" effect
  const [dashoffset, setDashoffset] = useState(24);

  useEffect(() => {
    let timeout = setTimeout(() => setDashoffset(0), 100); // start anim after mount
    return () => clearTimeout(timeout);
  }, []);

  return (
    <svg
      width="24"
      height="48"
      viewBox="0 0 24 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mt-1"
    >
      <path
        d="M12 0 C12 12, 12 36, 12 44"
        stroke={darkMode ? "#94a3b8" : "#6b7280"} // gray-400 dark:gray-500
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="24"
        strokeDashoffset={dashoffset}
        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
      />
      <path
        d="M6 40 L12 44 L18 40"
        fill="none"
        stroke={darkMode ? "#94a3b8" : "#6b7280"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="16"
        strokeDashoffset={dashoffset}
        style={{ transition: 'stroke-dashoffset 1.5s ease-out 1.5s' }}
      />
    </svg>
  );
}

export default function JourneyTimeline({ darkMode = false }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

  return (
    <div className={`min-h-screen p-6 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto">
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

        {/* Timeline container */}
        <div className="relative border-l-4 border-gray-300 dark:border-gray-700 pl-10">
          {journeyEvents.map((event, index) => {
            const StatusIcon = statusConfig[event.status].icon;
            const EventIcon = event.icon;
            const isLast = index === journeyEvents.length - 1;

            return (
              <div key={event.id} className="mb-14 relative">
                {/* Icon circle on timeline */}
                <div
                  className={`absolute left-[-30px] top-4 w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-4 border-gray-300 dark:border-gray-700 flex items-center justify-center shadow`}
                >
                  <EventIcon className={`w-6 h-6 ${pillarColors[event.type].text}`} />
                </div>

                {/* Connector curved arrow */}
                {!isLast && (
                  <div className="absolute left-[-22px] top-[48px]">
                    <CurvedArrow darkMode={darkMode} />
                  </div>
                )}

                {/* Event card */}
                <div
                  className={`p-5 rounded-lg cursor-pointer transition-shadow duration-200 hover:shadow-lg ${
                    pillarColors[event.type].bg
                  } border ${pillarColors[event.type].border}`}
                  onClick={() => setSelectedEvent(event)}
                >
                  <div className="flex justify-between items-center mb-1">
                    <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {event.title}
                    </h3>
                    <StatusIcon className={`w-5 h-5 ${statusConfig[event.status].color}`} />
                  </div>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
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
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                {selectedEvent.title}
              </h3>

              <div className="flex items-center mb-3 space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {formatDate(selectedEvent.date)}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs ${statusConfig[selectedEvent.status].color} bg-gray-100 dark:bg-gray-700`}>
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
