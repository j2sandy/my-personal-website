import { blogData } from '../data/blogData';

export default function BlogPage({ darkMode }) {
  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-orange-50 to-red-100'
    }`}>
      <div className="container mx-auto px-6 py-20">
        <h1 className={`text-4xl font-bold mb-8 text-center transition-colors duration-300 ${
          darkMode ? 'text-white' : 'text-gray-800'
        }`}>Blog</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {blogData.map((post, index) => (
            <div key={index} className={`rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
              darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <span className={`font-medium transition-colors duration-300 ${
                  darkMode ? 'text-orange-400' : 'text-orange-600'
                }`}>{post.date}</span>
                <span className={`text-sm transition-colors duration-300 ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>{post.readTime}</span>
              </div>
              <h2 className={`text-2xl font-semibold mb-4 hover:text-orange-600 transition-colors duration-300 ${
                darkMode ? 'text-white' : 'text-gray-800'
              }`}>
                {post.title}
              </h2>
              <p className={`mb-4 leading-relaxed transition-colors duration-300 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className={`px-3 py-1 rounded-full text-sm transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-orange-900 text-orange-300 border border-orange-700' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
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
}
