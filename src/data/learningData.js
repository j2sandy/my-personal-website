export const learningData = {
  currentFocus: [
    {
      title: "Introduction to AI & ML",
      skill: "AI & ML",
      description: "Understanding core concepts of AI & ML",
      dailyGoal: 2,
      streak: 0
    },
    {
      title: "Advanced DSA", 
      skill: "DSA",
      description: "Learning advanced DSA",
      dailyGoal: 1,
      streak: 0
    }
  ],
  
  skills: [
    "React", 
    "JavaScript", 
    "Python", 
    "System Design", 
    "Java", 
    "TypeScript", 
    "AI & ML", 
    "DSA",
    "Databases",
    "Operating Systems",
    "Cloud Computing",
    "Observability",
    "Computer Networks",
    "General CS",
    "Clean Coding"
  ],
  
  skillDetails: {
    "AI & ML": {
      learningPath: [
        {
          id: 1,
          title: "Introductory AI",
          description: "Learn basics of AI",
          phase: "Fundamentals",
          completion: 10,
          estimatedHours: 240,
          completedHours: 24,
          lastUpdated: new Date().toISOString()
        }
      ],
      
      books: [
        {
          id: 1,
          title: "Hands on LLM",
          author: "Jay Alammar and Maarten Grootendorst",
          completion: 0,
          url: "https://www.amazon.in/Hands-Large-Language-Models-Understanding/dp/935542552X",
          timeSpent: 0,
          lastRead: new Date().toISOString()
        },
        {
          id: 2,
          title: "NLP with transformers",
          author: "Lewis Tunstall",
          completion: 0,
          url: "https://www.amazon.in/Natural-Language-Processing-Transformers-Revised/dp/1098136799",
          timeSpent: 0,
          lastRead: new Date().toISOString()
        },
        {
          id: 3,
          title: "LLM Engineers Handbook",
          author: "Paul Iusztin",
          completion: 0,
          url: "https://www.amazon.in/LLM-Engineers-Handbook-engineering-production-ebook/dp/B0D1WR77BZ",
          timeSpent: 0,
          lastRead: new Date().toISOString()
        }
      ],
      
      courses: [
        {
          id: 1,
          title: "AI for Eveyone",
          platform: "Coursera",
          completion: 25,
          url: "https://www.coursera.org/learn/ai-for-everyone",
          timeSpent: 6,
          lastAccessed: new Date().toISOString()
        }
      ],
      
      practice: [
        {
          id: 1,
          title: "Practice Quiz and Assignments",
          type: "Project",
          completion: 0,
          timeSpent: 0,
          lastWorked: new Date().toISOString()
        }
      ],
      
      notes: [
        {
          id: 1,
          title: "Supervised Learning",
          content: "Key insights on React.memo, useMemo, and useCallback. Remember that premature optimization can hurt readability. Focus on identifying actual performance bottlenecks first.",
          createdAt: "2025-08-06",
          updatedAt: new Date().toISOString(),
          tags: ["ai", "supervised learning"]
        }
      ],
    }
  },
  
  goals: [
    {
      id: 1,
      title: "Complete Introductory AI",
      skill: "AI & ML",
      targetDate: "2025-08-16",
      progress: 25,
      type: "course",
      description: "Finish the introductory AI"
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
