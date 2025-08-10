// pages/WellnessPage.jsx
import React from 'react';
import { Heart, ChevronRight, Sparkles } from 'lucide-react';
import { wellnessPillars } from '../data/wellnessData';

export default function WellnessPage({ darkMode }) {
  return (
    <div className={`min-h-screen py-12 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <div className="relative">
              <Heart className="w-12 h-12 text-pink-500" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-2 -right-2 animate-pulse" />
            </div>
          </div>
          <h1 className={`text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover the five essential pillars of wellness that create a foundation for a healthy, balanced, and fulfilling life. 
            Each pillar represents a crucial aspect of your overall well-being.
          </p>
        </div>

        {/* Wellness Pillars Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wellnessPillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`group relative overflow-hidden rounded-2xl border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                pillar.bgColor
              } ${pillar.borderColor} ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Icon and Title */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${pillar.color}`}>
                    <pillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {pillar.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className={`text-sm mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {pillar.description}
                </p>

                {/* Features List */}
                <div className="mb-6">
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ChevronRight className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                  <div className="text-center">
                    <div className={`text-2xl font-bold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                      {pillar.stats.value}
                    </div>
                    <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {pillar.stats.label}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className={`mt-16 text-center p-8 rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <h2 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Start Your Wellness Journey Today
          </h2>
          <p className={`text-lg mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Balance all five pillars to achieve optimal health and well-being
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg">
            Explore Wellness Resources
          </button>
        </div>
      </div>
    </div>
  );
}
