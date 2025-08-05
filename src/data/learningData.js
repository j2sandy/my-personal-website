export const learningData = {
  currentFocus: [
    {
      title: "Advanced React Patterns",
      skill: "React",
      description: "Mastering hooks, context, and performance optimization",
      dailyGoal: 2,
      streak: 5
    },
    {
      title: "System Design Fundamentals", 
      skill: "System Design",
      description: "Learning scalable architecture patterns",
      dailyGoal: 1.5,
      streak: 3
    }
  ],
  
  skills: [
    "React", 
    "JavaScript", 
    "Python", 
    "System Design", 
    "Node.js", 
    "TypeScript", 
    "CSS", 
    "PostgreSQL"
  ],
  
  skillDetails: {
    "React": {
      learningPath: [
        {
          id: 1,
          title: "React Fundamentals",
          description: "Components, JSX, and basic state management",
          phase: "Fundamentals",
          completion: 100,
          estimatedHours: 20,
          completedHours: 20,
          lastUpdated: new Date().toISOString()
        },
        {
          id: 2,
          title: "Advanced Hooks",
          description: "Custom hooks, useReducer, and performance hooks",
          phase: "Intermediate", 
          completion: 75,
          estimatedHours: 15,
          completedHours: 11,
          lastUpdated: new Date().toISOString()
        },
        {
          id: 3,
          title: "State Management",
          description: "Context API, Redux, and Zustand patterns",
          phase: "Advanced",
          completion: 30,
          estimatedHours: 25,
          completedHours: 8,
          lastUpdated: new Date().toISOString()
        }
      ],
      
      books: [
        {
          id: 1,
          title: "React Up & Running",
          author: "Stoyan Stefanov",
          completion: 85,
          url: null,
          timeSpent: 12,
          lastRead: new Date().toISOString()
        },
        {
          id: 2,
          title: "Learning React",
          author: "Alex Banks & Eve Porcello",
          completion: 60,
          url: null,
          timeSpent: 8,
          lastRead: new Date().toISOString()
        }
      ],
      
      courses: [
        {
          id: 1,
          title: "Complete React Developer Course",
          platform: "Udemy",
          completion: 70,
          url: null,
          timeSpent: 25,
          lastAccessed: new Date().toISOString()
        },
        {
          id: 2,
          title: "React - The Complete Guide",
          platform: "Udemy",
          completion: 45,
          url: null,
          timeSpent: 18,
          lastAccessed: new Date().toISOString()
        }
      ],
      
      practice: [
        {
          id: 1,
          title: "Personal Portfolio",
          type: "Project",
          completion: 90,
          timeSpent: 40,
          lastWorked: new Date().toISOString()
        },
        {
          id: 2,
          title: "E-commerce App",
          type: "Project",
          completion: 65,
          timeSpent: 30,
          lastWorked: new Date().toISOString()
        },
        {
          id: 3,
          title: "React Testing Suite",
          type: "Practice",
          completion: 40,
          timeSpent: 15,
          lastWorked: new Date().toISOString()
        }
      ],
      
      notes: [
        {
          id: 1,
          title: "React Rendering Optimization",
          content: "Key insights on React.memo, useMemo, and useCallback. Remember that premature optimization can hurt readability. Focus on identifying actual performance bottlenecks first.",
          createdAt: "2024-01-15",
          updatedAt: new Date().toISOString(),
          tags: ["performance", "optimization", "hooks"]
        },
        {
          id: 2,
          title: "Custom Hooks Best Practices",
          content: "Custom hooks should start with 'use' and can call other hooks. They're great for sharing stateful logic between components without prop drilling.",
          createdAt: "2024-01-20",
          updatedAt: new Date().toISOString(),
          tags: ["hooks", "best-practices", "reusability"]
        },
        {
          id: 3,
          title: "Context API vs Redux",
          content: "Context API is great for simple state sharing, but Redux provides better dev tools, middleware support, and predictable state updates for complex applications.",
          createdAt: "2024-01-25",
          updatedAt: new Date().toISOString(),
          tags: ["context", "redux", "state-management"]
        }
      ],
      
      dailyProgress: [
        { date: '2025-01-01', hours: 2.5, focus: 'hooks' },
        { date: '2025-01-02', hours: 1.8, focus: 'state management' },
        { date: '2025-01-03', hours: 3.2, focus: 'performance' },
        { date: '2025-01-04', hours: 2.1, focus: 'testing' },
        { date: '2025-01-05', hours: 1.5, focus: 'optimization' },
        { date: '2025-01-06', hours: 2.8, focus: 'hooks' },
        { date: '2025-01-07', hours: 2.3, focus: 'components' }
      ]
    },
    
    "JavaScript": {
      learningPath: [
        {
          id: 1,
          title: "ES6+ Features",
          description: "Modern JavaScript syntax and features",
          phase: "Fundamentals",
          completion: 90,
          estimatedHours: 15,
          completedHours: 13,
          lastUpdated: new Date().toISOString()
        },
        {
          id: 2,
          title: "Async Programming",
          description: "Promises, async/await, and event loop",
          phase: "Intermediate",
          completion: 80,
          estimatedHours: 12,
          completedHours: 10,
          lastUpdated: new Date().toISOString()
        },
        {
          id: 3,
          title: "Advanced Patterns",
          description: "Design patterns and architectural concepts",
          phase: "Advanced",
          completion: 50,
          estimatedHours: 20,
          completedHours: 10,
          lastUpdated: new Date().toISOString()
        }
      ],
      
      books: [
        {
          id: 1,
          title: "You Don't Know JS",
          author: "Kyle Simpson",
          completion: 75,
          url: null,
          timeSpent: 20,
          lastRead: new Date().toISOString()
        }
      ],
      
      courses: [
        {
          id: 1,
          title: "JavaScript: The Advanced Concepts",
          platform: "Udemy",
          completion: 85,
          timeSpent: 30,
          lastAccessed: new Date().toISOString()
        }
      ],
      
      practice: [
        {
          id: 1,
          title: "Algorithm Challenges",
          type: "Practice",
          completion: 70,
          timeSpent: 25,
          lastWorked: new Date().toISOString()
        },
        {
          id: 2,
          title: "DOM Manipulation Projects",
          type: "Project",
          completion: 95,
          timeSpent: 18,
          lastWorked: new Date().toISOString()
        }
      ],
      
      notes: [
        {
          id: 1,
          title: "JavaScript Event Loop",
          content: "The event loop is what allows JavaScript to perform non-blocking I/O operations despite being single-threaded. Understanding this is crucial for async programming.",
          createdAt: "2024-01-10",
          updatedAt: new Date().toISOString(),
          tags: ["event-loop", "async", "concurrency"]
        },
        {
          id: 2,
          title: "Closures and Scope",
          content: "Closures are a fundamental concept in JavaScript. They allow functions to access variables from their outer scope even after the outer function has returned.",
          createdAt: "2024-01-12",
          updatedAt: new Date().toISOString(),
          tags: ["closures", "scope", "fundamentals"]
        }
      ],
      
      dailyProgress: [
        { date: '2025-01-01', hours: 1.5, focus: 'async programming' },
        { date: '2025-01-02', hours: 2.0, focus: 'closures' },
        { date: '2025-01-03', hours: 1.8, focus: 'algorithms' },
        { date: '2025-01-04', hours: 2.2, focus: 'design patterns' },
        { date: '2025-01-05', hours: 1.3, focus: 'es6 features' },
        { date: '2025-01-06', hours: 2.5, focus: 'async programming' },
        { date: '2025-01-07', hours: 1.9, focus: 'dom manipulation' }
      ]
    }
  },
  
  goals: [
    {
      id: 1,
      title: "Complete React Advanced Course",
      skill: "React",
      targetDate: "2025-03-01",
      progress: 75,
      type: "course",
      description: "Finish the advanced React patterns course and implement learnings in a project"
    },
    {
      id: 2,
      title: "Build 3 Full-Stack Projects",
      skill: "JavaScript",
      targetDate: "2025-04-15",
      progress: 33,
      type: "project",
      description: "Create three comprehensive full-stack applications using modern JavaScript technologies"
    },
    {
      id: 3,
      title: "Master System Design Fundamentals",
      skill: "System Design",
      targetDate: "2025-05-01",
      progress: 15,
      type: "study",
      description: "Complete system design course and practice with real-world architecture scenarios"
    }
  ],
  
  // Helper functions for data manipulation
  getTotalStudyHours: function() {
    let total = 0;
    Object.values(this.skillDetails).forEach(skill => {
      if (skill.learningPath) {
        total += skill.learningPath.reduce((sum, item) => sum + item.completedHours, 0);
      }
    });
    return total;
  },
  
  getSkillProgress: function(skillName) {
    const skill = this.skillDetails[skillName];
    if (!skill || !skill.learningPath) return 0;
    
    const avgProgress = skill.learningPath.reduce((sum, item) => sum + item.completion, 0) / skill.learningPath.length;
    return Math.round(avgProgress);
  },
  
  getActiveStreak: function() {
    // Calculate current learning streak across all skills
    const today = new Date();
    let streak = 0;
    
    // This is a simplified calculation - in a real app, you'd track daily activity
    Object.values(this.skillDetails).forEach(skill => {
      if (skill.dailyProgress && skill.dailyProgress.length > 0) {
        const lastActivity = new Date(skill.dailyProgress[skill.dailyProgress.length - 1].date);
        const daysDiff = Math.floor((today - lastActivity) / (1000 * 60 * 60 * 24));
        if (daysDiff <= 1) {
          streak = Math.max(streak, 7); // Simplified: assume 7-day streak if recent activity
        }
      }
    });
    
    return streak;
  },
  
  getWeeklyHours: function(skillName = null) {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    
    let weeklyHours = 0;
    
    if (skillName && this.skillDetails[skillName]) {
      const skill = this.skillDetails[skillName];
      if (skill.dailyProgress) {
        weeklyHours = skill.dailyProgress
          .filter(day => new Date(day.date) >= sevenDaysAgo)
          .reduce((sum, day) => sum + day.hours, 0);
      }
    } else {
      // Calculate across all skills
      Object.values(this.skillDetails).forEach(skill => {
        if (skill.dailyProgress) {
          weeklyHours += skill.dailyProgress
            .filter(day => new Date(day.date) >= sevenDaysAgo)
            .reduce((sum, day) => sum + day.hours, 0);
        }
      });
    }
    
    return weeklyHours;
  }
};

export default learningData;
