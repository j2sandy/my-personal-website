import React from 'react';
import { timelineData } from '../data/timelineData';

export default function JourneyTimeline() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          Our Company Milestone
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          WOW...!!! WHAT A JOURNEY SO FAR...!!!
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300 dark:bg-gray-600"></div>
        
        {timelineData.map((item, index) => {
          const Icon = item.icon;
          const isEven = index % 2 === 0;
          
          return (
            <div key={item.id} className="relative mb-8">
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              </div>

              <div className={`flex items-start ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Content Side */}
                <div className={`w-5/12 ${isEven ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                    {/* Icon and Title */}
                    <div className={`flex items-center mb-3 ${isEven ? 'justify-end' : 'justify-start'}`}>
                      <div className={`flex items-center ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`p-2 rounded-full ${
                          item.type === 'physical' ? 'bg-blue-100 dark:bg-blue-900' :
                          item.type === 'learning' ? 'bg-green-100 dark:bg-green-900' :
                          item.type === 'wellness' ? 'bg-pink-100 dark:bg-pink-900' :
                          'bg-yellow-100 dark:bg-yellow-900'
                        } ${isEven ? 'ml-3' : 'mr-3'}`}>
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
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-2/12"></div>

                {/* Date Side */}
                <div className={`w-5/12 ${isEven ? 'pl-8' : 'pr-8'} flex ${isEven ? 'justify-start' : 'justify-end'}`}>
                  <div className="text-center">
                    {/* Extract month and day from date string (YYYY-MM-DD format) */}
                    {(() => {
                      const [year, month, day] = item.date.split('-');
                      const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                                         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
                      const monthName = monthNames[parseInt(month) - 1];
                      
                      return (
                        <>
                          <div className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1">
                            {monthName}
                          </div>
                          <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                            {day}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {year}
                          </div>
                        </>
                      );
                    })()}
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
