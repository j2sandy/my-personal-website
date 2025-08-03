
import { Home, Book, Code, Edit, Heart } from 'lucide-react';

export const navigationItems = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'learning', name: 'Learning', icon: Book },
  { id: 'projects', name: 'Projects', icon: Code },
  { id: 'blog', name: 'Blog', icon: Edit },
  { id: 'wellness', name: 'Wellness', icon: Heart },
];

export const getPageDescription = (pageId) => {
  const descriptions = {
    learning: 'My learning journey and resources',
    projects: 'Things I\'ve built and created',
    blog: 'Thoughts, ideas, and reflections',
    wellness: 'Health, mindfulness, and balance'
  };
  return descriptions[pageId] || '';
};
