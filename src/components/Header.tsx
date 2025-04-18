
import React from 'react';
import { Brain, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  userName?: string;
  topic?: string;
  showBackToTopics?: boolean;
}

const Header = ({ userName, topic, showBackToTopics = true }: HeaderProps) => {
  const navigate = useNavigate();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { showTopics: true } });
  };

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <div className="flex justify-between items-center">
        {showBackToTopics ? (
          <button
            onClick={handleLogoClick}
            className="p-2 hover:bg-purple-100 dark:hover:bg-purple-900/20 rounded-full transition-colors"
          >
            <Brain className="w-8 h-8 text-purple-500" />
          </button>
        ) : (
          <div className="w-8" /> 
        )}

        {topic && (
          <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
            <span className="font-medium text-slate-700 dark:text-slate-200">
              {topic}
            </span>
          </div>
        )}
        
        {userName && (
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-purple-500" />
            <button
              onClick={() => navigate('/', { state: { showResults: true } })}
              className="font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
            >
              {userName}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
