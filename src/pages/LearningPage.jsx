import React, { useState } from 'react';
import learningData from '../data/learningData';
import { Book, Video, Code, StickyNote, ExternalLink } from 'lucide-react';

const SkillCard = ({ skillName, details }) => {
  const [activeTab, setActiveTab] = useState('path');

  const renderLearningPath = () => (
    <div className="mb-4">
      {details.roadmapUrl && (
        <a
          href={details.roadmapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-blue-500 hover:underline"
        >
          View Official Roadmap <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      )}
    </div>
  );

  const renderBooks = () => (
    <ul className="space-y-2">
      {details.books?.map(book => (
        <li key={book.id} className="border p-2 rounded-md">
          <a href={book.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {book.title}
          </a> by {book.author}
        </li>
      ))}
    </ul>
  );

  const renderCourses = () => (
    <ul className="space-y-2">
      {details.courses?.map(course => (
        <li key={course.id} className="border p-2 rounded-md">
          <a href={course.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {course.title}
          </a> on {course.platform}
        </li>
      ))}
    </ul>
  );

  const renderPractice = () => (
    <ul className="space-y-2">
      {details.practice?.map(task => (
        <li key={task.id} className="border p-2 rounded-md">
          {task.title} ({task.type})
        </li>
      ))}
    </ul>
  );

  const renderNotes = () => (
    <ul className="space-y-2">
      {details.notes?.map(note => (
        <li key={note.id} className="border p-2 rounded-md">
          <div className="font-semibold">{note.title}</div>
          {note.notionUrl ? (
            <a
              href={note.notionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View in Notion <ExternalLink className="inline-block h-4 w-4 ml-1" />
            </a>
          ) : (
            <p className="text-sm text-gray-700">{note.content}</p>
          )}
        </li>
      ))}
    </ul>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'path':
        return renderLearningPath();
      case 'books':
        return renderBooks();
      case 'courses':
        return renderCourses();
      case 'practice':
        return renderPractice();
      case 'notes':
        return renderNotes();
      default:
        return null;
    }
  };

  return (
    <div className="border rounded-lg p-4 shadow-md mb-8 bg-white dark:bg-gray-800">
      <h2 className="text-xl font-semibold mb-2">{skillName}</h2>
      <div className="flex space-x-4 mb-4 border-b pb-2">
        <button onClick={() => setActiveTab('path')} className={activeTab === 'path' ? 'font-bold' : ''}>Learning Path</button>
        <button onClick={() => setActiveTab('books')} className={activeTab === 'books' ? 'font-bold' : ''}>
          <Book className="inline w-4 h-4 mr-1" />Books
        </button>
        <button onClick={() => setActiveTab('courses')} className={activeTab === 'courses' ? 'font-bold' : ''}>
          <Video className="inline w-4 h-4 mr-1" />Courses
        </button>
        <button onClick={() => setActiveTab('practice')} className={activeTab === 'practice' ? 'font-bold' : ''}>
          <Code className="inline w-4 h-4 mr-1" />Practice
        </button>
        <button onClick={() => setActiveTab('notes')} className={activeTab === 'notes' ? 'font-bold' : ''}>
          <StickyNote className="inline w-4 h-4 mr-1" />My Notes
        </button>
      </div>
      <div>{renderTabContent()}</div>
    </div>
  );
};

const LearningPage = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">Skill Dashboard</h1>
      {learningData.skills.map(skill => {
        const details = learningData.skillDetails[skill];
        return details ? <SkillCard key={skill} skillName={skill} details={details} /> : null;
      })}
    </div>
  );
};

export default LearningPage;
