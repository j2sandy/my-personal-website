// pages/WellnessPage.jsx
import React, { useState } from 'react';
import { Heart, ChevronRight, Sparkles, X, TrendingUp, Calendar, Target, BookOpen, ArrowRight } from 'lucide-react';
import { wellnessPillars } from '../data/wellnessData';
import { knowledgeCatalogData } from '../data/knowledgeData';
import JourneyTimeline from '../components/JourneyTimeline';

export default function WellnessPage({ darkMode }) {
  const [selectedPillar, setSelectedPillar] = useState(null);
  const [showKnowledgeCatalog, setShowKnowledgeCatalog] = useState(false);

  const closeModal = () => {
    setSelectedPillar(null);
    setShowKnowledgeCatalog(false);
  };

  const openKnowledgeCatalog = () => {
    setShowKnowledgeCatalog(true);
  };

  // Get knowledge data for selected pillar
  const getKnowledgeData = (pillarId) => {
    return knowledgeCatalogData[pillarId] || {};
  };

  return (
    <div className={`min-h-screen py-12 px-4 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-3">
            <div className="relative">
              <Heart className="w-10 h-10 text-pink-500" />
              <Sparkles className="w-5 h-5 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>
          <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Wellness Journey
            </span>
          </h1>
          <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Discover the five essential pillars of wellness for a balanced, fulfilling life.
          </p>
        </div>

        {/* Wellness Pillars Grid - Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {wellnessPillars.map((pillar, index) => (
            <div
              key={pillar.id}
              onClick={() => setSelectedPillar(pillar)}
              className={`group relative overflow-hidden rounded-xl border-2 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                pillar.bgColor
              } ${pillar.borderColor} ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
            >
              {/* Compact Card Content */}
              <div className="p-4">
                {/* Icon and Title */}
                <div className="text-center mb-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${pillar.color} mx-auto w-fit`}>
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-lg font-bold mt-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {pillar.title}
                  </h3>
                </div>

                {/* Brief Description */}
                <p className={`text-xs text-center mb-3 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {pillar.description.substring(0, 80)}...
                </p>

                {/* Stats */}
                <div className={`p-2 rounded-lg border text-center ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                  <div className={`text-lg font-bold bg-gradient-to-r ${pillar.color} bg-clip-text text-transparent`}>
                    {pillar.stats.value}
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {pillar.stats.label}
                  </div>
                </div>

                {/* Click indicator */}
                <div className="text-center mt-2">
                  <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    Click for details
                  </span>
                </div>
              </div>

              {/* Hover Effect Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* My Journey Section */}
        <div className="mt-16">
          <JourneyTimeline darkMode={darkMode} />
        </div>

        {/* Knowledge Catalog Modal */}
        {selectedPillar && showKnowledgeCatalog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-60 p-4">
            <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
              {/* Knowledge Header */}
              <div className={`sticky top-0 p-6 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} flex items-center justify-between`}>
                <div className="flex items-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedPillar.color} mr-4`}>
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedPillar.title} Knowledge Catalog
                    </h2>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Research-based insights and curated resources
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Knowledge Content */}
              <div className="p-6">
                {(() => {
                  const knowledge = getKnowledgeData(selectedPillar.id);
                  return (
                    <>
                      {/* Key Insights */}
                      <div className="mb-8">
                        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          🧠 Key Insights
                        </h3>
                        <div className={`p-4 rounded-xl ${selectedPillar.bgColor} border ${selectedPillar.borderColor}`}>
                          <p className={`text-base italic leading-relaxed ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                            "{knowledge.insights}"
                          </p>
                        </div>
                      </div>

                      {/* Key Learnings */}
                      <div className="mb-8">
                        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          📚 Evidence-Based Learnings
                        </h3>
                        <div className="grid gap-3">
                          {knowledge.keyLearnings?.map((learning, idx) => (
                            <div key={idx} className={`flex items-start p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'} border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                              <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${selectedPillar.color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                                <span className="text-white text-sm font-bold">{idx + 1}</span>
                              </div>
                              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                                {learning}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Resource Library */}
                      <div className="mb-6">
                        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          📖 Resource Library
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {knowledge.resources?.map((resource, idx) => (
                            <div key={idx} className={`p-4 rounded-lg border-2 border-dashed ${darkMode ? 'border-gray-600 bg-gray-700' : 'border-gray-300 bg-gray-50'} hover:border-solid transition-all duration-200`}>
                              <div className="flex items-center justify-between">
                                <div>
                                  <h4 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {resource.title}
                                  </h4>
                                  <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${selectedPillar.color} text-white mt-1 inline-block`}>
                                    {resource.type}
                                  </span>
                                </div>
                                <BookOpen className="w-5 h-5 text-gray-400" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="text-center">
                        <button 
                          onClick={() => setShowKnowledgeCatalog(false)}
                          className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl hover:scale-105 transition-transform duration-200 shadow-lg"
                        >
                          Back to {selectedPillar.title} Overview
                        </button>
                      </div>
                    </>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {/* Detailed Pillar Modal */}
        {selectedPillar && !showKnowledgeCatalog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
              {/* Modal Header */}
              <div className={`sticky top-0 p-6 border-b ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'} flex items-center justify-between`}>
                <div className="flex items-center">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${selectedPillar.color} mr-4`}>
                    <selectedPillar.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {selectedPillar.title}
                    </h2>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Detailed Overview
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className={`p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Description */}
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    About This Pillar
                  </h3>
                  <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {selectedPillar.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Key Areas of Focus
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedPillar.features.map((feature, idx) => (
                      <div key={idx} className={`flex items-center p-3 rounded-lg ${selectedPillar.bgColor}`}>
                        <ChevronRight className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Goals & Stats */}
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Current Goal
                  </h3>
                  <div className={`p-4 rounded-xl border ${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'}`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Target className="w-5 h-5 text-blue-500 mr-2" />
                        <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {selectedPillar.stats.label}
                        </span>
                      </div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${selectedPillar.color} bg-clip-text text-transparent`}>
                        {selectedPillar.stats.value}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Benefits & Impact
                  </h3>
                  <div className={`p-4 rounded-xl ${selectedPillar.bgColor} border ${selectedPillar.borderColor}`}>
                    <div className="flex items-center">
                      <TrendingUp className={`w-5 h-5 mr-3 ${selectedPillar.color.includes('green') ? 'text-green-600' : selectedPillar.color.includes('purple') ? 'text-purple-600' : selectedPillar.color.includes('orange') ? 'text-orange-600' : selectedPillar.color.includes('indigo') ? 'text-indigo-600' : 'text-teal-600'}`} />
                      <div>
                        <p className={`font-medium ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                          Improved Overall Well-being
                        </p>
                        <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          Consistent focus on this pillar leads to measurable improvements in health and quality of life.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Knowledge Catalog */}
                <div>
                  <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    Knowledge Catalog
                  </h3>
                  <div 
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 hover:scale-[1.02] ${darkMode ? 'border-blue-600 bg-blue-900/20 hover:bg-blue-900/30' : 'border-blue-300 bg-blue-50 hover:bg-blue-100'}`}
                    onClick={openKnowledgeCatalog}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-blue-500 mr-3" />
                        <div>
                          <p className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            Explore Key Learnings & Resources
                          </p>
                          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            Discover research-backed insights and curated knowledge
                          </p>
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
