import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const section = document.getElementById('timeline-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div id="timeline-section" className="relative w-full flex justify-center py-16">
      {/* Animated vertical wavy line */}
      <svg
        className="absolute top-0 bottom-0"
        width="4"
        height="100%"
        viewBox="0 0 4 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M2,0 Q3,25 2,50 Q1,75 2,100"
          fill="transparent"
          stroke="#4f46e5"
          strokeWidth="4"
          strokeLinecap="round"
          animate={{
            d: [
              'M2,0 Q3,25 2,50 Q1,75 2,100',
              'M2,0 Q1,25 2,50 Q3,75 2,100',
              'M2,0 Q3,25 2,50 Q1,75 2,100'
            ]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        />
      </svg>

      <div className="flex flex-col gap-16">
        {timelineData.map((event) => {
          const Icon = event.icon;
          return (
            <motion.div
              key={event.id}
              className="relative flex gap-6 items-start"
              initial={{ opacity: 0, x: -50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: event.id * 0.2 }}
            >
              {/* Timeline marker */}
              <div className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg">
                <Icon size={20} />
              </div>

              {/* Content */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md max-w-lg">
                <div className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                  {new Date(event.date).toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                  })}
                </div>
                <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
                {event.impact && (
                  <p className="mt-2 text-indigo-600 dark:text-indigo-400 text-sm font-medium">
                    Impact: {event.impact}
                  </p>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
