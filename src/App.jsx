// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearningPage from './pages/LearningPage';
import ProjectsPage from './pages/ProjectsPage';
import BlogPage from './pages/BlogPage';
import WellnessPage from './pages/WellnessPage';
import WellnessPillarPage from './pages/WellnessPillarPage'; // new dynamic subpage
import { useTheme } from './hooks/useTheme';
import { navigationItems } from './data/navigation';

export default function PersonalWebsite() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <Router>
      <div className="min-h-screen">
        <Navigation
          navigation={navigationItems}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        <div className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage darkMode={darkMode} />} />
            <Route path="/learning" element={<LearningPage darkMode={darkMode} />} />
            <Route path="/projects" element={<ProjectsPage darkMode={darkMode} />} />
            <Route path="/blog" element={<BlogPage darkMode={darkMode} />} />
            <Route path="/wellness" element={<WellnessPage darkMode={darkMode} />} />
            <Route
              path="/wellness/:pillarId"
              element={<WellnessPillarPage darkMode={darkMode} />}
            />
          </Routes>
        </div>

        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}
