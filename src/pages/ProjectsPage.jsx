import { projectsData } from '../data/projectsData';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsPage({ darkMode }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return darkMode ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800';
      case 'In Progress':
        return darkMode ? 'bg-blue-900 text-blue-300' : 'bg-blue-100 text-blue-800';
      case 'Planning':
        return darkMode ? 'bg-yellow-900 text-yellow-300' : 'bg-yellow-100 text-yellow-800';
      default:
        return darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-purple-50 to-pink-100'
    }`}>
      <div className="container mx-auto px-6 py-20">
        <h1 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>My Projects</h1>
        
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div key={index} className={`rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>{project.title}</h3>
                <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(project.status)}`}>
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className={`mb-4 transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{project.description}</p>

              {/* Date */}
              {project.date && (
                <p className={`text-sm mb-4 transition-colors duration-300 ${
                  darkMode ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {project.date}
                </p>
              )}

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span key={tech} className={`px-2 py-1 rounded text-sm transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-purple-900 text-purple-300 border border-purple-700' 
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        darkMode
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
              }
