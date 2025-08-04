export const learningData = {
  currentFocus: [
    {
      title: "Full Stack Development",
      description: "Building end-to-end web applications with modern technologies",
      skill: "React" // Maps to skill detail
    },
    {
      title: "System Design",
      description: "Learning scalable architecture patterns and best practices",
      skill: "Node.js" // Maps to skill detail
    }
  ],
  skills: [
    "React", "Node.js", "Python", "JavaScript", "TypeScript", "MongoDB", 
    "PostgreSQL", "Docker", "AWS", "GraphQL", "Next.js", "Express.js"
  ],
  skillDetails: {
    "React": {
      books: [
        { title: "Learning React", author: "Alex Banks", completion: 85 },
        { title: "React Patterns", author: "Michael Chan", completion: 60 },
        { title: "Advanced React", author: "Nadia Makarevich", completion: 30 }
      ],
      courses: [
        { 
          title: "React - The Complete Guide", 
          platform: "Udemy", 
          completion: 90,
          url: "https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
        },
        { 
          title: "Advanced React Patterns", 
          platform: "Frontend Masters", 
          completion: 70,
          url: "https://frontendmasters.com/courses/advanced-react-patterns/"
        },
        { 
          title: "React Performance", 
          platform: "Egghead", 
          completion: 45,
          url: "https://egghead.io/courses/react-performance"
        }
      ],
      practice: [
        { 
          title: "Todo App with Hooks", 
          type: "Project", 
          completion: 100,
          url: "https://github.com/yourusername/react-todo-hooks"
        },
        { 
          title: "E-commerce Dashboard", 
          type: "Project", 
          completion: 80,
          url: "https://github.com/yourusername/ecommerce-dashboard"
        },
        { 
          title: "Real-time Chat App", 
          type: "Project", 
          completion: 55,
          url: "https://github.com/yourusername/react-chat-app"
        }
      ],
      learningPath: [
        { 
          phase: "Fundamentals", 
          title: "React Basics & JSX", 
          completion: 100,
          description: "Understanding components, props, and state",
          estimatedHours: 20,
          completedHours: 20
        },
        { 
          phase: "Fundamentals", 
          title: "Hooks & State Management", 
          completion: 90,
          description: "useState, useEffect, and custom hooks",
          estimatedHours: 25,
          completedHours: 23
        },
        { 
          phase: "Intermediate", 
          title: "Context API & Global State", 
          completion: 75,
          description: "Managing application-wide state",
          estimatedHours: 15,
          completedHours: 11
        },
        { 
          phase: "Intermediate", 
          title: "React Router & Navigation", 
          completion: 60,
          description: "Client-side routing and navigation",
          estimatedHours: 12,
          completedHours: 7
        },
        { 
          phase: "Advanced", 
          title: "Performance Optimization", 
          completion: 30,
          description: "React.memo, useMemo, useCallback",
          estimatedHours: 18,
          completedHours: 5
        },
        { 
          phase: "Advanced", 
          title: "Testing & Debugging", 
          completion: 15,
          description: "Jest, React Testing Library",
          estimatedHours: 20,
          completedHours: 3
        }
      ],
      notes: [
        {
          title: "Component Lifecycle & Effects",
          content: "Remember that useEffect with empty dependency array [] runs only once after mount. Use cleanup functions for subscriptions and timers.",
          tags: ["hooks", "lifecycle", "useEffect"],
          createdAt: "2024-01-15"
        },
        {
          title: "State Management Best Practices",
          content: "Keep state as close to where it's used as possible. Use useCallback for event handlers passed to child components to prevent unnecessary re-renders.",
          tags: ["state", "performance", "optimization"],
          createdAt: "2024-01-18"
        },
        {
          title: "React Performance Tips",
          content: "React.memo() for preventing unnecessary re-renders, useMemo() for expensive calculations, and useCallback() for function references.",
          tags: ["performance", "memo", "optimization"],
          createdAt: "2024-01-22"
        }
      ]
    },
    "Node.js": {
      books: [
        { title: "Node.js Design Patterns", author: "Mario Casciaro", completion: 75 },
        { title: "Learning Node.js", author: "Marc Wandschneider", completion: 90 },
        { title: "Node.js in Action", author: "Mike Cantelon", completion: 40 }
      ],
      courses: [
        { 
          title: "Node.js: The Complete Guide", 
          platform: "Udemy", 
          completion: 85,
          url: "https://www.udemy.com/course/nodejs-the-complete-guide/"
        },
        { 
          title: "API Design in Node.js", 
          platform: "Pluralsight", 
          completion: 65,
          url: "https://www.pluralsight.com/courses/nodejs-api-design"
        },
        { 
          title: "Node.js Microservices", 
          platform: "LinkedIn Learning", 
          completion: 30,
          url: "https://www.linkedin.com/learning/node-js-microservices"
        }
      ],
      practice: [
        { 
          title: "REST API with Express", 
          type: "Project", 
          completion: 100,
          url: "https://github.com/yourusername/express-rest-api"
        },
        { 
          title: "GraphQL Server", 
          type: "Project", 
          completion: 70,
          url: "https://github.com/yourusername/graphql-server"
        },
        { 
          title: "Microservices Architecture", 
          type: "Project", 
          completion: 40,
          url: "https://github.com/yourusername/nodejs-microservices"
        }
      ],
      learningPath: [
        { 
          phase: "Fundamentals", 
          title: "Node.js Core Concepts", 
          completion: 100,
          description: "Event loop, modules, and file system",
          estimatedHours: 18,
          completedHours: 18
        },
        { 
          phase: "Fundamentals", 
          title: "Express.js Framework", 
          completion: 95,
          description: "Building web servers and APIs",
          estimatedHours: 22,
          completedHours: 21
        },
        { 
          phase: "Intermediate", 
          title: "Database Integration", 
          completion: 80,
          description: "MongoDB, PostgreSQL with Node.js",
          estimatedHours: 20,
          completedHours: 16
        },
        { 
          phase: "Intermediate", 
          title: "Authentication & Security", 
          completion: 65,
          description: "JWT, OAuth, security best practices",
          estimatedHours: 16,
          completedHours: 10
        },
        { 
          phase: "Advanced", 
          title: "Microservices Architecture", 
          completion: 40,
          description: "Service communication and deployment",
          estimatedHours: 25,
          completedHours: 10
        },
        { 
          phase: "Advanced", 
          title: "Performance & Scaling", 
          completion: 20,
          description: "Clustering, caching, and optimization",
          estimatedHours: 20,
          completedHours: 4
        }
      ],
      notes: [
        {
          title: "Event Loop Understanding",
          content: "Node.js is single-threaded but uses event-driven, non-blocking I/O. The event loop has phases: timers, pending callbacks, idle/prepare, poll, check, close callbacks.",
          tags: ["event-loop", "async", "fundamentals"],
          createdAt: "2024-01-10"
        },
        {
          title: "Express Middleware Pattern",
          content: "Middleware functions execute sequentially. Always call next() unless you're ending the request cycle. Order matters - error handling middleware should be last.",
          tags: ["express", "middleware", "patterns"],
          createdAt: "2024-01-14"
        },
        {
          title: "Database Connection Pooling",
          content: "Use connection pooling for better performance. For PostgreSQL with pg library, set pool size based on CPU cores and expected load.",
          tags: ["database", "performance", "postgresql"],
          createdAt: "2024-01-20"
        }
      ]
    },
    "Python": {
      books: [
        { title: "Automate the Boring Stuff", author: "Al Sweigart", completion: 95 },
        { title: "Python Tricks", author: "Dan Bader", completion: 60 },
        { title: "Effective Python", author: "Brett Slatkin", completion: 25 }
      ],
      courses: [
        { 
          title: "Python for Everybody", 
          platform: "Coursera", 
          completion: 100,
          url: "https://www.coursera.org/specializations/python"
        },
        { 
          title: "Advanced Python", 
          platform: "Real Python", 
          completion: 50,
          url: "https://realpython.com/courses/advanced-python/"
        },
        { 
          title: "Python Web Development", 
          platform: "Udemy", 
          completion: 35,
          url: "https://www.udemy.com/course/python-web-development/"
        }
      ],
      practice: [
        { 
          title: "Web Scraper", 
          type: "Project", 
          completion: 100,
          url: "https://github.com/yourusername/python-web-scraper"
        },
        { 
          title: "Data Analysis Tool", 
          type: "Project", 
          completion: 75,
          url: "https://github.com/yourusername/data-analysis-tool"
        },
        { 
          title: "Django Blog", 
          type: "Project", 
          completion: 50,
          url: "https://github.com/yourusername/django-blog"
        }
      ],
      learningPath: [
        { 
          phase: "Fundamentals", 
          title: "Python Syntax & Basics", 
          completion: 100,
          description: "Variables, data types, control structures",
          estimatedHours: 15,
          completedHours: 15
        },
        { 
          phase: "Fundamentals", 
          title: "Object-Oriented Programming", 
          completion: 85,
          description: "Classes, inheritance, and polymorphism",
          estimatedHours: 20,
          completedHours: 17
        },
        { 
          phase: "Intermediate", 
          title: "Web Development with Django", 
          completion: 60,
          description: "MVC pattern, templates, and ORM",
          estimatedHours: 30,
          completedHours: 18
        },
        { 
          phase: "Intermediate", 
          title: "Data Science Libraries", 
          completion: 45,
          description: "NumPy, Pandas, Matplotlib",
          estimatedHours: 25,
          completedHours: 11
        },
        { 
          phase: "Advanced", 
          title: "Machine Learning Basics", 
          completion: 25,
          description: "Scikit-learn, algorithms, and models",
          estimatedHours: 35,
          completedHours: 9
        },
        { 
          phase: "Advanced", 
          title: "API Development & Deployment", 
          completion: 10,
          description: "FastAPI, Docker, cloud deployment",
          estimatedHours: 28,
          completedHours: 3
        }
      ],
      notes: [
        {
          title: "Python List Comprehensions",
          content: "List comprehensions are more Pythonic and often faster than loops: [x**2 for x in range(10) if x % 2 == 0]. Use generator expressions for memory efficiency.",
          tags: ["syntax", "comprehensions", "performance"],
          createdAt: "2024-01-08"
        },
        {
          title: "Django ORM Tips",
          content: "Use select_related() for ForeignKey, prefetch_related() for ManyToMany. Always use .exists() instead of len() for checking queryset existence.",
          tags: ["django", "orm", "optimization"],
          createdAt: "2024-01-16"
        },
        {
          title: "Python Virtual Environments",
          content: "Always use virtual environments: python -m venv env, then source env/bin/activate. Use requirements.txt for dependency management: pip freeze > requirements.txt",
          tags: ["environment", "dependencies", "best-practices"],
          createdAt: "2024-01-12"
        }
      ]
    }
  }
};
