import React from 'react';
import {
  Star,
  Heart,
  Brain,
  Dumbbell,
  Apple,
  Users
} from 'lucide-react';

const timelineData = [
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

export default function JourneyTimeline() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        <div className="space-y-12">
          {timelineData.map((event, index) => {
            const Icon = event.icon;
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Content card */}
                <div
                  className={`w-5/12 bg-white shadow-md rounded-lg p-6 relative z-10`}
                >
                  <div className="flex items-center mb-2">
                    <Icon className="w-6 h-6 text-blue-500 mr-2" />
                    <h3 className="text-lg font-semibold">{event.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-2">{event.description}</p>
                  <span className="text-sm text-gray-400">
                    Impact: {event.impact}
                  </span>
                </div>

                {/* Date bubble */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md z-20">
                  {event.date}
                </div>

                {/* Dot on line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-blue-500 rounded-full z-30"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
                }
