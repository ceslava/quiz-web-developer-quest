
import { useState, useEffect } from "react";
import { Heart, Moon, Sun, Search } from "lucide-react";
import QuizQuestion from "@/components/QuizQuestion";
import QuizStart from "@/components/QuizStart";
import { Button } from "@/components/ui/button";
import QuizResults from "@/components/QuizResults";
import { Input } from "@/components/ui/input";

const Index = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('userName') || '';
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set initial dark mode preference and load user data
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleStart = (data: { topic: string; name?: string }) => {
    if (data.name) {
      setUserName(data.name);
      localStorage.setItem('userName', data.name);
    }
    setSelectedTopic(data.topic);
    setQuizStarted(true);
  };

  const handleFinish = (finalScore: number, totalWrong: number) => {
    setScore(finalScore);
    setWrongAnswers(totalWrong);
    setQuizCompleted(true);
    setQuizStarted(false);

    // Save high score if it's better than previous
    const highScores = JSON.parse(localStorage.getItem('highScores') || '{}');
    if (!highScores[selectedTopic] || highScores[selectedTopic] < finalScore) {
      highScores[selectedTopic] = finalScore;
      localStorage.setItem('highScores', JSON.stringify(highScores));
    }
  };

  const resetQuiz = () => {
    setQuizCompleted(false);
    setSelectedTopic("");
    setScore(0);
    setWrongAnswers(0);
  };

  const baseClasses = `min-h-screen transition-colors duration-300 ${
    isDarkMode 
      ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white" 
      : "bg-gradient-to-br from-slate-50 to-blue-100"
  }`;

  const renderHeader = () => (
    <header className="p-4 flex justify-between items-center">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
          <Heart className={`${isDarkMode ? "text-red-400" : "text-red-500"} fill-current`} size={24} />
          <span>
            {quizStarted 
              ? `¡Adelante${userName ? `, ${userName}` : ''}! ${selectedTopic}` 
              : '¡Demuestra tus conocimientos!'}
          </span>
        </h1>
        {userName && !quizStarted && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            ¡Bienvenido de nuevo, {userName}!
          </p>
        )}
      </div>
      <Button variant="ghost" size="icon" onClick={toggleDarkMode} className="rounded-full">
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </Button>
    </header>
  );

  if (quizCompleted) {
    return (
      <div className={`${baseClasses} flex flex-col`}>
        {renderHeader()}
        <QuizResults 
          score={score} 
          totalQuestions={10} 
          wrongAnswers={wrongAnswers} 
          topic={selectedTopic}
          userName={userName}
          onRestart={resetQuiz} 
        />

        <footer className="mt-auto p-4 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
            Hecho con <Heart className="text-red-500 fill-red-500" size={16} /> por 
            <a 
              href="https://ceslava.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${isDarkMode ? "text-blue-300" : "text-blue-600"} hover:underline ml-1`}
            >
              Cristian Eslava
            </a>
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className={`${baseClasses} flex flex-col`}>
      {renderHeader()}
      {quizStarted ? (
        <QuizQuestion 
          topic={selectedTopic} 
          onFinish={handleFinish} 
          isDarkMode={isDarkMode}
          userName={userName}
        />
      ) : (
        <QuizStart 
          onStart={handleStart} 
          isDarkMode={isDarkMode} 
          userName={userName}
        />
      )}
      <footer className="mt-auto p-4 text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-gray-400">
          Hecho con <Heart className="text-red-500 fill-red-500" size={16} /> por 
          <a 
            href="https://ceslava.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${isDarkMode ? "text-blue-300" : "text-blue-600"} hover:underline ml-1`}
          >
            Cristian Eslava
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;
