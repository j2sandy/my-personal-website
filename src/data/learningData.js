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
      roadmapUrl: "https://roadmap.sh/ai-data-scientist",
      notionUrl: "https://www.notion.so/AI-ML-2486b4d3ddf08086a50af4629633315c",
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
        },
        {
          id: 2,
          title: "Intro to ML",
          platform: "Youtube",
          completion: 0,
          url: "https://www.youtube.com/watch?v=Bl4Feh_Mjvo&list=PLoROMvodv4rNyWOpJg_Yh4NSqI4Z4vOYy",
          timeSpent: 0,
          lastAccessed: new Date().toISOString()
        },
        {
          id: 3,
          title: "Advacnced ML",
          platform: "Youtube",
          completion: 0,
          url: "https://www.youtube.com/playlist?list=PL3FW7Lu3i5JvHM8ljYj-zLfQRF3EO8sYv",
          timeSpent: 0,
          lastAccessed: new Date().toISOString()
        }
      ],
      
      practice: [
        {
          id: 1,
          title: "Data Science Projects",
          type: "Project",
          completion: 0,
          timeSpent: 0,
          url: "https://platform.stratascratch.com/data-projects",
          lastWorked: new Date().toISOString()
        }
      ],
      otherReferences: [
        {
          id: 1,
          title: "AI/ML Roadmap",
          type: "Roadmap",
          completion: 0,
          timeSpent: 0,
          url: "https://ayoushasaservice.com/ai-journey",
          lastWorked: new Date().toISOString()
        }
      ]
    },
    "DSA": {
      roadmapUrl: "https://roadmap.sh/datastructures-and-algorithms",
      notionUrl: "https://www.notion.so/DSA-1046b4d3ddf080bdab16cadec7061419",
      books : [
        {
        id: 1,
        title: "Cracking the coding interview",
        author: "Gayle Laakmann McDowell",
        completion: 50,
        timeSpent: 100,
        lastRead: new Date().toISOString()
        },
        {
          id: 2,
          title: "Coding Interview Patterns",
          author: "Alex Xu",
          completion: 90,
          timeSpent: 240,
          lastRead: new Date().toISOString()
        },
        {
          id: 2,
          title: "Introduction to Algorithms",
          author: "Cormen",
          completion: 20,
          timeSpent: 240,
          lastRead: new Date().toISOString()
        }
      ],
      courses: [
        {
          id: 1,
          title: "Algorithms Part 1",
          platform: "Coursera",
          completion: 5,
          url: "https://www.coursera.org/learn/algorithms-part1/",
          timeSpent: 1,
          lastAccessed: new Date().toISOString()
        },
        {
          id: 2,
          title: "Algorithms Part 2",
          platform: "Coursera",
          completion: 0,
          url: "https://www.coursera.org/learn/algorithms-part2/",
          timeSpent: 0,
          lastAccessed: new Date().toISOString()
        }
      ],
      practice: [
        {
          id: 1,
          title: "LeetCode Problems",
          type: "Problem Solving",
          completion: 5,
          timeSpent: 300,
          url : "https://leetcode.com/problemset/",
          lastWorked: new Date().toISOString()
        },
        {
          id: 2,
          title: "Strivers A2Z DSA",
          type: "Problem Solving",
          completion: 0,
          timeSpent: 0,
          url : "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
          lastWorked: new Date().toISOString()
        },
        {
          id: 3,
          title: "ByteByteGo",
          type: "Problem Solving",
          completion: 50,
          timeSpent: 240,
          url : "https://bytebytego.com/courses/coding-patterns",
          lastWorked: new Date().toISOString()
        }
      ]
    },
    "Java": {
      roadmapUrl: "https://roadmap.sh/java",
      notionUrl: "https://www.notion.so/Java-1046b4d3ddf080d8b580e8cc2a928249",
      books : [
        {
        id: 1,
        title: "Head First Java",
        author: "O Rielly",
        completion: 50,
        timeSpent: 240,
        lastRead: new Date().toISOString()
        },
        {
          id: 2,
          title: "Concurrency in Java",
          author: "Brian Goetz",
          completion: 10,
          timeSpent: 10,
          lastRead: new Date().toISOString()
        }
      ],
      courses: [
        {
          id: 1,
          title: "Know Your Java Web",
          platform: "Website",
          completion: 5,
          url: "https://dev.java/learn/",
          timeSpent: 1,
          lastAccessed: new Date().toISOString()
        },
        {
          id: 2,
          title: "Know Your Java Video",
          platform: "Youtube",
          completion: 100,
          url: "https://www.youtube.com/watch?v=q2T9NlROLqw",
          timeSpent: 2,
          lastAccessed: new Date().toISOString()
        },
        {
          id: 3,
          title: "Java Programming and Software Engineering Fundamentals",
          platform: "Youtube",
          completion: 50,
          url: "https://www.youtube.com/@Java.Brains",
          timeSpent: 300,
          lastAccessed: new Date().toISOString()
        }
      ],
      practice: [
        {
          id: 1,
          title: "Practice Java Streams",
          type: "Coding",
          completion: 80,
          timeSpent: 10,
          url : "https://stackify.com/streams-guide-java-8/",
          lastWorked: new Date().toISOString()
        },
        {
          id: 2,
          title: "Placeholder for Java Practice",
          type: "Coding",
          completion: 0,
          timeSpent: 0,
          url : "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2",
          lastWorked: new Date().toISOString()
        }
      ]
    }
  },
  
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
  
