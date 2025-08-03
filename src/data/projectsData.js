export const projectsData = [
  {
    title: "Weather Dashboard",
    description: "A React app that displays weather information with beautiful animations and forecasts. Features current conditions, 7-day forecast, and location-based weather updates.",
    tech: ["React", "OpenWeather API", "Tailwind CSS", "Chart.js"],
    status: "Completed",
    date: "November 2024",
    githubUrl: "https://github.com/j2sandy/weather-dashboard",
    liveUrl: "https://j2sandy.github.io/weather-dashboard",
    highlights: ["Real-time weather data", "Responsive design", "Interactive charts"]
  },
  {
    title: "Task Management App",
    description: "Full-stack application for managing tasks with user authentication and real-time updates. Features drag-and-drop functionality, team collaboration, and deadline reminders.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io", "React"],
    status: "In Progress",
    date: "Expected: January 2025",
    githubUrl: "https://github.com/j2sandy/task-manager",
    highlights: ["Real-time collaboration", "JWT authentication", "WebSocket integration"]
  },
  {
    title: "Personal Finance Tracker",
    description: "Track expenses, set budgets, and visualize spending patterns with interactive charts. Includes category-based expense tracking and financial goal setting.",
    tech: ["Python", "Flask", "Chart.js", "SQLite", "Bootstrap"],
    status: "Planning",
    date: "Expected: March 2025",
    githubUrl: "https://github.com/j2sandy/finance-tracker",
    highlights: ["Expense categorization", "Budget alerts", "Data visualization"]
  },
  {
    title: "Recipe Finder",
    description: "Discover recipes based on ingredients you have, with nutritional information. Features ingredient substitution suggestions and meal planning capabilities.",
    tech: ["Vue.js", "Spoonacular API", "Firebase", "Vuetify"],
    status: "Completed",
    date: "October 2024",
    githubUrl: "https://github.com/j2sandy/recipe-finder",
    liveUrl: "https://recipe-finder-js.netlify.app",
    highlights: ["Ingredient-based search", "Nutritional analysis", "Meal planning"]
  },
  {
    title: "Habit Tracker",
    description: "Simple and elegant habit tracking with streak counters and progress visualization. Cross-platform mobile app with offline support and custom habit categories.",
    tech: ["React Native", "AsyncStorage", "Expo", "React Navigation"],
    status: "In Progress",
    date: "Expected: February 2025",
    githubUrl: "https://github.com/j2sandy/habit-tracker",
    highlights: ["Cross-platform", "Offline support", "Streak tracking"]
  },
  {
    title: "Portfolio Website",
    description: "This very website! Built with React and modern web technologies. Features dark mode, responsive design, and smooth animations for an engaging user experience.",
    tech: ["React", "Tailwind CSS", "Lucide Icons", "GitHub Pages"],
    status: "Completed",
    date: "December 2024",
    githubUrl: "https://github.com/j2sandy/portfolio",
    liveUrl: "https://j2sandy.github.io/portfolio",
    highlights: ["Dark mode", "Responsive design", "Modern animations"]
  }
];

// Optional: Add project categories for filtering
export const projectCategories = [
  "All",
  "Web Development", 
  "Mobile Development",
  "Full Stack",
  "API Integration",
  "Data Visualization"
];

// Optional: Add project filters
export const getProjectsByStatus = (status) => {
  return projectsData.filter(project => project.status === status);
};

export const getProjectsByTech = (tech) => {
  return projectsData.filter(project => 
    project.tech.some(t => t.toLowerCase().includes(tech.toLowerCase()))
  );
};
