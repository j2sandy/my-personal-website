import { useState } from 'react';
import { X, Save, Link, FileText, Clock, Tag } from 'lucide-react';

export default function BlogPostForm({ darkMode, onSubmit, onClose }) {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    externalLink: '',
    readTime: '',
    tags: '',
    platform: ''
  });

  const [isExternal, setIsExternal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const post = {
      title: formData.title,
      excerpt: formData.excerpt,
      readTime: formData.readTime || 'Quick read',
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      ...(isExternal 
        ? { 
            externalLink: formData.externalLink,
            platform: formData.platform 
          }
        : { 
            content: formData.content 
          })
    };

    onSubmit(post);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}>
        {/* Header */}
        <div className={`flex items-center justify-between p-6 border-b ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}>
          <h2 className={`text-2xl font-semibold ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>
            {isExternal ? 'Add External Blog Link' : 'Write New Blog Post'}
          </h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition-colors duration-300 ${
              darkMode 
                ? 'hover:bg-gray-700 text-gray-400 hover:text-white' 
                : 'hover:bg-gray-100 text-gray-600 hover:text-gray-800'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Post Type Toggle */}
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setIsExternal(false)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                !isExternal
                  ? darkMode
                    ? 'bg-orange-600 text-white'
                    : 'bg-orange-500 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Write Post</span>
            </button>
            <button
              type="button"
              onClick={() => setIsExternal(true)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-300 ${
                isExternal
                  ? darkMode
                    ? 'bg-orange-600 text-white'
                    : 'bg-orange-500 text-white'
                  : darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <Link className="w-4 h-4" />
              <span>External Link</span>
            </button>
          </div>

          {/* Title */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
              } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
              placeholder="Enter your blog post title"
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className={`block text-sm font-medium mb-2 ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Excerpt *
            </label>
            <textarea
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              required
              rows={3}
              className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500' 
                  : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
              } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
              placeholder="Brief description of your post"
            />
          </div>

          {/* External Link or Content */}
          {isExternal ? (
            <>
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  External Link *
                </label>
                <input
                  type="url"
                  name="externalLink"
                  value={formData.externalLink}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500' 
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                  } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
                  placeholder="https://medium.com/@your-post"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Platform
                </label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-orange-500' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-orange-500'
                  } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
                >
                  <option value="">Select platform</option>
                  <option value="Medium">Medium</option>
                  <option value="Dev.to">Dev.to</option>
                  <option value="Hashnode">Hashnode</option>
                  <option value="Substack">Substack</option>
                  <option value="Personal Blog">Personal Blog</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </>
          ) : (
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Content
              </label>
              <textarea
                name="content"
                value={formData.content}
                onChange={handleInputChange}
                rows={8}
                className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
                placeholder="Write your blog post content here..."
              />
            </div>
          )}

          {/* Read Time and Tags Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <Clock className="w-4 h-4 inline mr-1" />
                Read Time
              </label>
              <input
                type="text"
                name="readTime"
                value={formData.readTime}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
                placeholder="5 min read"
              />
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                <Tag className="w-4 h-4 inline mr-1" />
                Tags
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleInputChange}
                className={`w-full px-3 py-2 rounded-lg border transition-colors duration-300 ${
                  darkMode 
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-orange-500' 
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-orange-500'
                } focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50`}
                placeholder="React, JavaScript, Tutorial"
              />
              <p className={`text-xs mt-1 ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Separate tags with commas
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
                darkMode 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                  : 'bg-orange-500 hover:bg-orange-600 text-white'
              }`}
            >
              <Save className="w-4 h-4" />
              <span>{isExternal ? 'Add Link' : 'Publish Post'}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
