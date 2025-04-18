import React from 'react';
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  userName: string;
  topicName?: string;
}

const Header = ({ userName, topicName }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header className="w-full p-4 shadow-md bg-transparent fixed top-0 z-10">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <Brain
          className="w-8 h-8 cursor-pointer text-white"
          onClick={() => navigate('/')}
        />
        <h1 className="text-lg text-white text-center flex-1">{topicName}</h1>
        <div
          className="text-right cursor-pointer text-white"
          onClick={() => navigate('/summary')}
        >
          {userName}
        </div>
      </div>
    </header>
  );
};

export default Header;
