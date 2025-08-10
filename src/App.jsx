import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import { navigation } from './data/navigationItems';

// Import your page components
import HomePage from './pages/HomePage';
import LearningPage from './pages/LearningPage';
import WellnessPage from './pages/WellnessPage';
import CalendarPage from './pages/Calendar';
import Meditation from './pages/wellness/Meditation';
import Fitness from './pages/wellness/Fitness';
import Nutrition from './pages/wellness/Nutrition';
import MentalHealth from './pages/wellness/MentalHealth';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <Router>
      <div className={darkMode ? 'dark bg-gray-900 text-white min-h-screen' : 'bg-white text-gray-900 min-h-screen'}>
        
        {/* Navigation */}
        <Navigation
          navigation={navigation}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

        {/* Main Content */}
        <div className="pt-16 px-4 max-w-7xl mx-auto">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/wellness" element={<Wellness />} />
            <Route path="/calendar" element={<CalendarPage />} />

            {/* Wellness Subpages */}
            <Route path="/wellness/meditation" element={<Meditation />} />
            <Route path="/wellness/fitness" element={<Fitness />} />
            <Route path="/wellness/nutrition" element={<Nutrition />} />
            <Route path="/wellness/mental-health" element={<MentalHealth />} />

            {/* 404 Fallback */}
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
