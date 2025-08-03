import { Calendar, Clock, ExternalLink, Eye } from 'lucide-react';

export default function BlogCard({ post, darkMode }) {
  const handlePostClick = () => {
    if (post.externalLink) {
      window.open(post.externalLink, '_blank', 'noopener,noreferrer');
    } else if (post.content) {
      // For full posts, could open a modal or navigate to post page
      console.log('Open full post:', post.title);
    }
  };

  return (
    <article 
      className={`rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-[1.02] ${
        darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white'
      }`}
      onClick={handlePostClick}
    >
      {/* Post Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Calendar className={`w-4 h-4 ${
              darkMode ? 'text-orange-400' : 'text-orange-600'
            }`} />
            <span className={`font-medium transition-colors duration-300 ${
              darkMode ? 'text-orange-400' : 'text-orange-600'
            }`}>{post.date}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <Clock className={`w-4 h-4 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`} />
            <span className={`text-sm transition-colors duration-300 ${
              darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>{post.readTime}</span>
          </div>
        </div>

        {/* External Link Indicator */}
        {post.externalLink && (
          <div className="flex items-center space-x-1">
            <ExternalLink className={`w-4 h-4 ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`} />
            <span className={`text-sm ${
              darkMode ? 'text-blue-400' : 'text-blue-600'
            }`}>External</span>
          </div>
        )}
      </div>

      {/* Post Title */}
      <h2 className={`text-2xl font-semibold mb-4 hover:text-orange-600 transition-colors duration-300 ${
        darkMode ? 'text-white' : 'text-gray-800'
      }`}>
        {post.title}
      </h2>

      {/* Post Excerpt */}
      <p className={`mb-6 leading-relaxed transition-colors duration-300 ${
        darkMode ? 'text-gray-400' : 'text-gray-600'
      }`}>{post.excerpt}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
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

      {/* Post Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-2">
          <Eye className={`w-4 h-4 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`} />
          <span className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {post.externalLink ? 'Read on external site' : 'Read full post'}
          </span>
        </div>

        {post.platform && (
          <span className={`text-xs px-2 py-1 rounded ${
            post.platform === 'Medium' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
              : post.platform === 'Dev.to'
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300'
              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
          }`}>
            {post.platform}
          </span>
        )}
      </div>
    </article>
  );
}
