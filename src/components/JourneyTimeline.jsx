import React from 'react';
import { timelineData } from '../data/timelineData';

export default function JourneyTimeline() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-10">Journey So Far</h2>

      <div className="relative border-l-4 border-gray-300 dark:border-gray-700">
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={item.id} className="mb-10 ml-6 relative">
              {/* Dot */}
              <span
                className={`absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full ring-4 ring-white 
                ${item.type === 'physical' ? 'bg-blue-500' :
                  item.type === 'learning' ? 'bg-green-500' :
                  item.type === 'wellness' ? 'bg-pink-500' :
                  'bg-yellow-500'}`}
              >
                <Icon size={14} className="text-white" />
              </span>

              {/* Date */}
              <div className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                {item.date}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 dark:text-gray-300">
                {item.description}
              </p>

              {/* Impact */}
              <p className="text-sm italic text-gray-500 dark:text-gray-400 mt-1">
                {item.impact}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
