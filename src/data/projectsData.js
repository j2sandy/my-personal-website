export const projectsData = [
  {
    title: "Music Management App",
    description: "Full-stack application for managing songs on device, creating playslists and music recommendation.",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io", "React"],
    status: "Planning",
    date: "Expected: September 2026",
    githubUrl: "https://github.com/j2sandy/song-manager",
    highlights: ["Real-time collaboration", "JWT authentication", "WebSocket integration"]
  },
  {
    title: "RCA Zilla",
    description: "Find detailed RCA steps for technical problems, dev community driven, real production incidents, pitfalls and solution applied.",
    tech: ["React", "Spoonacular API", "Firebase", "Vuetify"],
    status: "In Progress",
    date: "October 2025",
    githubUrl: "https://github.com/j2sandy/rca-zilla",
    liveUrl: "https://recipe-finder-js.netlify.app",
    highlights: ["Ingredient-based search", "Nutritional analysis", "Meal planning"]
  },
  {
    title: "Portfolio Website",
    description: "This very website! Built with React and modern web technologies. Features dark mode, responsive design, and smooth animations for an engaging user experience.",
    tech: ["React", "Tailwind CSS", "Lucide Icons", "GitHub Pages"],
    status: "Completed",
    date: "August 2025",
    githubUrl: "https://github.com/j2sandy/my-personal-website",
    liveUrl: "https://j2sandy.github.io/my-personal-website",
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
