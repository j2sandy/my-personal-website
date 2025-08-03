import { useState } from 'react';
import { Plus, ExternalLink, Edit3} from 'lucide-react';
import { blogData } from '../data/blogData';
import BlogPostForm from '../components/BlogPostForm';
import BlogCard from '../components/BlogCard';

export default function BlogPage({ darkMode }) {
  const [posts, setPosts] = useState(blogData);
  const [showForm, setShowForm] = useState(false);
  const [selectedTag, setSelectedTag] = useState('all');

  const handleAddPost = (newPost) => {
    const post = {
      ...newPost,
      id: Date.now(),
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      })
    };
    setPosts([post, ...posts]);
    setShowForm(false);
  };

  // Get all unique tags
  const allTags = ['all', ...new Set(posts.flatMap(post => post.tags))];

  // Filter posts by selected tag
  const filteredPosts = selectedTag === 'all' 
    ? posts 
    : posts.filter(post => post.tags.includes(selectedTag));

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 to-gray-800' 
        : 'bg-gradient-to-br from-orange-50 to-red-100'
    }`}>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl font-bold mb-4 transition-colors duration-300 ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>Blog</h1>
          <p className={`text-lg max-w-2xl mx-auto mb-8 transition-colors duration-300 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Thoughts, tutorials, and insights from my journey in tech and life
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              onClick={() => setShowForm(true)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                darkMode 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              <Plus className="w-5 h-5" />
              <span>Write New Post</span>
            </button>
            
            <a
              href="https://medium.com/@nitinshandilya"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border-2 ${
                darkMode 
                  ? 'border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-gray-900' 
                  : 'border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white'
              }`}
            >
              <ExternalLink className="w-5 h-5" />
              <span>View on Medium</span>
            </a>
            
            <a
              href="https://dev.to/nitinshandilya"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 border-2 ${
                darkMode 
                  ? 'border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900' 
                  : 'border-green-500 text-green-500 hover:bg-green-500 hover:text-white'
              }`}
            >
              <ExternalLink className="w-5 h-5" />
              <span>View on Dev.to</span>
            </a>
          </div>
        </div>

        {/* Tag Filter */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === tag
                    ? darkMode
                      ? 'bg-orange-600 text-white'
                      : 'bg-orange-500 text-white'
                    : darkMode
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-4xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className={`text-center py-16 ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <Edit3 className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-xl">No posts found for this tag</p>
              <p>Try selecting a different tag or write a new post!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredPosts.map((post) => (
                <BlogCard 
                  key={post.id || post.title} 
                  post={post} 
                  darkMode={darkMode} 
                />
              ))}
            </div>
          )}
        </div>

        {/* Blog Post Form Modal */}
        {showForm && (
          <BlogPostForm
            darkMode={darkMode}
            onSubmit={handleAddPost}
            onClose={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
}
