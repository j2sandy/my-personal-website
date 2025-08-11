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
  return (
    <div className="relative w-full py-12 bg-white">
      {/* Vertical line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-300 transform -translate-x-1/2"></div>

      <div className="max-w-5xl mx-auto">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          const Icon = event.icon;
          const dateFormatted = new Date(event.date).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          });

          return (
            <div key={event.id} className="relative mb-16 flex items-center">
              {/* Left side */}
              <div
                className={`w-1/2 pr-8 text-right ${isLeft ? '' : 'order-2 pl-8 text-left'}`}
              >
                {isLeft && (
                  <div className="text-lg font-semibold text-gray-500">{dateFormatted}</div>
                )}
                {!isLeft && (
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center gap-2 font-bold text-gray-800">
                      {Icon && <Icon className="w-5 h-5 text-blue-500" />}
                      {event.title}
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">{event.description}</p>
                  </div>
                )}
              </div>

              {/* Dot */}
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>

              {/* Right side */}
              <div
                className={`w-1/2 pl-8 text-left ${isLeft ? '' : 'order-1 pr-8 text-right'}`}
              >
                {!isLeft && (
                  <div className="text-lg font-semibold text-gray-500">{dateFormatted}</div>
                )}
                {isLeft && (
                  <div className="bg-white rounded-lg shadow-md p-4">
                    <div className="flex items-center gap-2 font-bold text-gray-800">
                      {Icon && <Icon className="w-5 h-5 text-blue-500" />}
                      {event.title}
                    </div>
                    <p className="text-gray-600 mt-1 text-sm">{event.description}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
