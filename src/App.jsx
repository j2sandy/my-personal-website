import { useState } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearningPage from './pages/LearningPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import WellnessPage from './pages/WellnessPage'; // This page now has tabs for pillars
import { useTheme } from './hooks/useTheme';
import { navigationItems } from './data/navigation';

export default function PersonalWebsite() {
  const [currentPage, setCurrentPage] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  const renderPage = () => {
    const pageProps = { darkMode };

    switch (currentPage) {
      case 'home':
        return <HomePage {...pageProps} onPageChange={setCurrentPage} />;
      case 'learning':
        return <LearningPage {...pageProps} />;
      case 'projects':
        return <ProjectsPage {...pageProps} />;
      case 'blog':
        return <BlogPage {...pageProps} />;
      case 'wellness':
        return <WellnessPage {...pageProps} />;  // WellnessPage internally handles tabs
      default:
        return <HomePage {...pageProps} onPageChange={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation
        navigation={navigationItems}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <div className="pt-16">{renderPage()}</div>

      <Footer darkMode={darkMode} />
    </div>
  );
}
