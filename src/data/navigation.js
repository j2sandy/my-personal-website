import { Home, Book, Code, Edit, Heart } from 'lucide-react';

export const navigationItems = [
  { id: 'home', name: 'Home', icon: Home, href: '/' },
  { id: 'learning', name: 'Learning', icon: Book, href: '/learning' },
  { id: 'projects', name: 'Projects', icon: Code, href: '/projects' },
  { id: 'blog', name: 'Blog', icon: Edit, href: '/blog' },
  { 
    id: 'wellness', 
    name: 'Wellness', 
    icon: Heart, 
    href: '/wellness',
    subpages: [
      { name: 'Sleep', href: '/wellness/sleep' },
      { name: 'Nutrition', href: '/wellness/nutrition' },
      { name: 'Fitness', href: '/wellness/fitness' },
      { name: 'Mindfulness', href: '/wellness/mindfulness' }
    ]
  },
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
