import { useState } from 'react';
import { Home, Book, Code, Edit, Heart, Menu, X } from 'lucide-react';

export default function PersonalWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'home', name: 'Home', icon: Home },
    { id: 'learning', name: 'Learning', icon: Book },
    { id: 'projects', name: 'Projects', icon: Code },
    { id: 'blog', name: 'Blog', icon: Edit },
    { id: 'wellness', name: 'Wellness', icon: Heart },
  ];

  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6 py-20">
        <div className="text-center">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">JD</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">John Doe</h1>
          <p className="text-xl text-gray-600 mb-8">Creative Developer & Lifelong Learner</p>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Welcome to my digital space! I'm passionate about technology, continuous learning, 
            and building meaningful projects. This is where I share my journey, insights, and 
            the things that inspire me every day.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {navigation.slice(1).map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                >
                  <Icon className="w-8 h-8 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-sm text-gray-600">
                    {item.id === 'learning' && 'My learning journey and resources'}
                    {item.id === 'projects' && 'Things I\'ve built and created'}
                    {item.id === 'blog' && 'Thoughts, ideas, and reflections'}
                    {item.id === 'wellness' && 'Health, mindfulness, and balance'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  const LearningPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Learning Journey</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Current Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-gray-800">Machine Learning</h3>
                <p className="text-gray-600">Exploring neural networks and deep learning fundamentals</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-gray-800">React Advanced Patterns</h3>
                <p className="text-gray-600">Diving deeper into hooks, context, and performance optimization</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Technologies</h2>
            <div className="flex flex-wrap gap-3">
              {['JavaScript', 'React', 'Node.js', 'Python', 'TypeScript', 'CSS', 'Git', 
                'Docker', 'AWS', 'MongoDB', 'PostgreSQL', 'GraphQL'].map((skill) => (
                <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Learning Resources</h2>
            <div className="space-y-4">
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-800">Books</h3>
                <p className="text-gray-600">Clean Code, System Design Interview, The Pragmatic Programmer</p>
              </div>
              <div className="border-b pb-4">
                <h3 className="font-semibold text-gray-800">Courses</h3>
                <p className="text-gray-600">CS50, FreeCodeCamp, Coursera Machine Learning</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Practice</h3>
                <p className="text-gray-600">LeetCode, HackerRank, Building personal projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectsPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Projects</h1>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Weather Dashboard",
              description: "A React app that displays weather information with beautiful animations and forecasts.",
              tech: ["React", "OpenWeather API", "Tailwind CSS"],
              status: "Completed"
            },
            {
              title: "Task Management App",
              description: "Full-stack application for managing tasks with user authentication and real-time updates.",
              tech: ["Node.js", "Express", "MongoDB", "Socket.io"],
              status: "In Progress"
            },
            {
              title: "Personal Finance Tracker",
              description: "Track expenses, set budgets, and visualize spending patterns with interactive charts.",
              tech: ["Python", "Flask", "Chart.js", "SQLite"],
              status: "Planning"
            },
            {
              title: "Recipe Finder",
              description: "Discover recipes based on ingredients you have, with nutritional information.",
              tech: ["Vue.js", "Spoonacular API", "Firebase"],
              status: "Completed"
            },
            {
              title: "Habit Tracker",
              description: "Simple and elegant habit tracking with streak counters and progress visualization.",
              tech: ["React Native", "AsyncStorage", "Expo"],
              status: "In Progress"
            },
            {
              title: "Portfolio Website",
              description: "This very website! Built with React and modern web technologies.",
              tech: ["React", "Tailwind CSS", "Lucide Icons"],
              status: "Completed"
            }
          ].map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  project.status === 'Completed' ? 'bg-green-100 text-green-800' :
                  project.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  {project.status}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Blog</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              title: "Building My First React Native App",
              date: "March 15, 2024",
              excerpt: "My journey into mobile development and the lessons learned along the way. From setup challenges to deployment victories.",
              readTime: "5 min read",
              tags: ["React Native", "Mobile Development", "Learning"]
            },
            {
              title: "The Power of Small Habits",
              date: "March 8, 2024",
              excerpt: "How I transformed my productivity by focusing on tiny, consistent changes rather than massive overhauls.",
              readTime: "3 min read",
              tags: ["Productivity", "Habits", "Personal Growth"]
            },
            {
              title: "Understanding JavaScript Closures",
              date: "February 28, 2024",
              excerpt: "A deep dive into one of JavaScript's most powerful features, with practical examples and common use cases.",
              readTime: "7 min read",
              tags: ["JavaScript", "Programming", "Tutorial"]
            },
            {
              title: "My Morning Routine for Better Focus",
              date: "February 20, 2024",
              excerpt: "The habits and practices that help me start each day with clarity and intention, boosting my overall productivity.",
              readTime: "4 min read",
              tags: ["Wellness", "Productivity", "Morning Routine"]
            }
          ].map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-orange-600 font-medium">{post.date}</span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 hover:text-orange-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const WellnessPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100">
      <div className="container mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Wellness Journey</h1>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Physical Health</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Daily Steps Goal</span>
                  <span className="font-semibold text-pink-600">10,000 steps</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Workout Frequency</span>
                  <span className="font-semibold text-pink-600">4x per week</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Sleep Target</span>
                  <span className="font-semibold text-pink-600">7-8 hours</span>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Current Activities</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Running', 'Yoga', 'Weight Training', 'Swimming'].map((activity) => (
                      <span key={activity} className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Mental Wellness</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Meditation</span>
                  <span className="font-semibold text-pink-600">15 min daily</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Journaling</span>
                  <span className="font-semibold text-pink-600">Morning pages</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700">Reading</span>
                  <span className="font-semibold text-pink-600">30 min daily</span>
                </div>
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Practices</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Mindfulness', 'Gratitude', 'Deep Breathing', 'Nature Walks'].map((practice) => (
                      <span key={practice} className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm">
                        {practice}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Wellness Goals & Reflections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-pink-600" />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Balance</h3>
                <p className="text-gray-600 text-sm">Finding harmony between work, health, and personal time</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ðŸ§˜</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Mindfulness</h3>
                <p className="text-gray-600 text-sm">Staying present and aware in daily activities</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">ðŸŒ±</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Growth</h3>
                <p className="text-gray-600 text-sm">Continuous improvement in all aspects of wellness</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'learning': return <LearningPage />;
      case 'projects': return <ProjectsPage />;
      case 'blog': return <BlogPage />;
      case 'wellness': return <WellnessPage />;
      default: return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed top-0 w-full z-50">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-800">JD</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentPage(item.id)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      currentPage === item.id
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
                {navigation.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        currentPage === item.id
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {renderPage()}
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2024 John Doe. Built with React and Tailwind CSS.</p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/j2sandy" className="hover:text-blue-400 transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
