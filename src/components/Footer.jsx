
export default function Footer({ darkMode }) {
    return (
      <footer className={`py-8 transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white border-t border-gray-700' : 'bg-gray-800 text-white'
      }`}>
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">© 2025 Nitin Shandilya. Built with React and Tailwind CSS.</p>
          <div className="flex justify-center space-x-6">
            <button className="hover:text-blue-400 transition-colors duration-300">GitHub</button>
            <button className="hover:text-blue-400 transition-colors duration-300">LinkedIn</button>
            <button className="hover:text-blue-400 transition-colors duration-300">Twitter</button>
            <button className="hover:text-blue-400 transition-colors duration-300">Email</button>
          </div>
        </div>
      </footer>
    );
  }
