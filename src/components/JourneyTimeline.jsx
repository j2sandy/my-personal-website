import React from 'react';
import { timelineData } from '../data/timelineData';

export default function JourneyTimeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Journey So Far !!!!!!!
        </h2>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
        
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div key={item.id} className="relative mb-12">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-8 z-10">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              </div>

              <div className={`flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                {/* Content Card */}
                <div className={`w-5/12 ${isEven ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 relative">
                    {/* Date in top right corner of card */}
                    <div className="absolute top-4 right-4 text-center">
                      {(() => {
                        const [year, month, day] = item.date.split('-');
                        const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                           'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                        const monthName = monthNames[parseInt(month) - 1];
                        
                        return (
                          <>
                            <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                              {monthName}
                            </div>
                            <div className="text-2xl font-bold text-gray-900 dark:text-white">
                              {day}
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {year}
                            </div>
                          </>
                        );
                      })()}
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-center mb-4 pr-16">
                      <div className={`p-2 rounded-full mr-3 ${
                        item.type === 'physical' ? 'bg-blue-100 dark:bg-blue-900' :
                        item.type === 'learning' ? 'bg-green-100 dark:bg-green-900' :
                        item.type === 'wellness' ? 'bg-pink-100 dark:bg-pink-900' :
                        'bg-yellow-100 dark:bg-yellow-900'
                      }`}>
                        <Icon size={20} className={`${
                          item.type === 'physical' ? 'text-blue-600 dark:text-blue-300' :
                          item.type === 'learning' ? 'text-green-600 dark:text-green-300' :
                          item.type === 'wellness' ? 'text-pink-600 dark:text-pink-300' :
                          'text-yellow-600 dark:text-yellow-300'
                        }`} />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Status Badge */}
                    {item.status && (
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-2 ${
                        item.status === 'ongoing' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                        item.status === 'completed' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                        item.status === 'paused' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                        'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </div>
                    )}
                    
                    {/* Impact */}
                    {item.impact && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 italic">
                        <span className="font-medium not-italic">Impact:</span> {item.impact}
                      </p>
                    )}

                    {/* Arrow pointing to timeline */}
                    <div className={`absolute top-8 ${isEven ? 'right-0 translate-x-full' : 'left-0 -translate-x-full'}`}>
                      <div className={`w-0 h-0 ${isEven ? 
                        'border-l-8 border-l-white dark:border-l-gray-800 border-y-8 border-y-transparent' :
                        'border-r-8 border-r-white dark:border-r-gray-800 border-y-8 border-y-transparent'
                      }`}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
