// src/data/wellnessData.js
export const wellnessData = [
  {
    id: "sleep",
    title: "Sleep",
    intro: "Quality sleep is the foundation of overall well-being. It impacts mood, energy, focus, and physical health.",
    journeyEvents: [
      { date: "2025-01-10", title: "Started tracking sleep with Oura Ring" },
      { date: "2025-02-05", title: "Implemented consistent bedtime routine" },
      { date: "2025-03-15", title: "Noticed improved focus after 7+ hrs sleep" }
    ],
    actionableSteps: [
      "Maintain consistent sleep and wake times",
      "Avoid screens at least 1 hour before bed",
      "Optimize bedroom for darkness and cool temperature"
    ],
    readingCatalog: {
      planned: ["Why We Sleep - Matthew Walker"],
      current: ["The Sleep Revolution - Arianna Huffington"],
      finished: ["Sleep Smarter - Shawn Stevenson"]
    }
  },
  {
    id: "nutrition",
    title: "Nutrition",
    intro: "Food is fuel for both body and mind. A balanced diet supports long-term health and mental clarity.",
    journeyEvents: [
      { date: "2025-01-20", title: "Began mindful eating practice" },
      { date: "2025-02-15", title: "Shifted to whole-food based diet" },
      { date: "2025-03-10", title: "Reduced processed sugar intake" }
    ],
    actionableSteps: [
      "Prioritize whole, unprocessed foods",
      "Hydrate adequately throughout the day",
      "Eat more plants and lean proteins"
    ],
    readingCatalog: {
      planned: ["How Not to Die - Michael Greger"],
      current: ["The Blue Zones Solution - Dan Buettner"],
      finished: ["Food Rules - Michael Pollan"]
    }
  },
  {
    id: "activity",
    title: "Activity",
    intro: "Movement keeps the body strong and the mind sharp. Regular exercise boosts energy and mood.",
    journeyEvents: [
      { date: "2025-01-05", title: "Started daily 10k steps goal" },
      { date: "2025-02-12", title: "Joined a weekend hiking group" },
      { date: "2025-03-22", title: "Incorporated strength training twice a week" }
    ],
    actionableSteps: [
      "Aim for at least 150 minutes of moderate activity per week",
      "Incorporate strength and flexibility training",
      "Break long sitting periods with movement"
    ],
    readingCatalog: {
      planned: ["Spark - John Ratey"],
      current: ["The Joy of Movement - Kelly McGonigal"],
      finished: ["Born to Run - Christopher McDougall"]
    }
  },
  {
    id: "meditation",
    title: "Meditation",
    intro: "A practice of stillness and awareness, meditation cultivates inner calm and focus.",
    journeyEvents: [
      { date: "2025-01-15", title: "Started 5-minute daily meditation" },
      { date: "2025-02-28", title: "Attended a mindfulness retreat" },
      { date: "2025-03-18", title: "Reached 60 consecutive days of meditation" }
    ],
    actionableSteps: [
      "Start with short daily sessions",
      "Experiment with guided and silent meditation",
      "Use mindfulness in daily activities"
    ],
    readingCatalog: {
      planned: ["Wherever You Go, There You Are - Jon Kabat-Zinn"],
      current: ["The Miracle of Mindfulness - Thich Nhat Hanh"],
      finished: ["10% Happier - Dan Harris"]
    }
  },
  {
    id: "fasting",
    title: "Fasting",
    intro: "Fasting helps reset metabolic health, improves discipline, and promotes cellular repair.",
    journeyEvents: [
      { date: "2025-01-08", title: "Started intermittent fasting (16:8)" },
      { date: "2025-02-20", title: "Completed first 24-hour fast" },
      { date: "2025-03-12", title: "Incorporated weekly fasting routine" }
    ],
    actionableSteps: [
      "Start with 12-hour fasting window",
      "Stay hydrated during fasting periods",
      "Listen to your body and adjust duration"
    ],
    readingCatalog: {
      planned: ["The Complete Guide to Fasting - Jason Fung"],
      current: ["Fast. Feast. Repeat. - Gin Stephens"],
      finished: ["Delay, Don't Deny - Gin Stephens"]
    }
  }
];
