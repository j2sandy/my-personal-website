import React from 'react'
import { motion } from 'framer-motion'
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

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

export default function JourneyTimeline() {
  return (
    <div className="relative w-full max-w-5xl mx-auto px-4 py-16">
      {/* Vertical line in the center */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

      <div className="space-y-12">
        {timelineData.map((event, index) => {
          const Icon = event.icon;
          const isLeft = index % 2 === 0;

          return (
            <motion.div
              key={event.id}
              className={`relative flex items-center w-full ${
                isLeft ? "justify-start" : "justify-end"
              }`}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariant}
            >
              {/* Content box */}
              <div
                className={`bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 w-5/12 relative ${
                  isLeft ? "text-right" : "text-left"
                }`}
              >
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="mt-2 text-gray-700 dark:text-gray-300">
                  {event.description}
                </p>
                <p className="mt-1 text-sm text-gray-500 italic">
                  {event.impact}
                </p>

                {/* Arrow pointer */}
                <div
                  className={`absolute top-6 ${
                    isLeft
                      ? "-right-3 border-l-[12px] border-l-white dark:border-l-gray-800 border-y-[12px] border-y-transparent"
                      : "-left-3 border-r-[12px] border-r-white dark:border-r-gray-800 border-y-[12px] border-y-transparent"
                  }`}
                ></div>
              </div>

              {/* Icon in the center line */}
              <span className="absolute left-1/2 transform -translate-x-1/2 bg-blue-500 text-white rounded-full p-3 shadow-lg z-10">
                <Icon size={20} />
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
                           }
