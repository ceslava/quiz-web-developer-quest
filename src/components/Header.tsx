
import React from 'react';
import { Brain, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  userName: string;
  topicName?: string;
}

const Header = ({ userName, topicName }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-full p-4 shadow-md bg-transparent z-10">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => navigate('/')}
        >
          <Brain className="w-8 h-8 text-white" />
        </div>
        
        {topicName && (
          <h1 className="text-lg text-white text-center flex-1 font-semibold flex items-center justify-center gap-2">
            {topicName}
          </h1>
        )}
        
        {userName && (
          <div
            className="flex items-center gap-2 cursor-pointer text-white"
            onClick={() => navigate('/summary')}
          >
            <Trophy className="w-5 h-5" />
            <span>{userName}</span>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
