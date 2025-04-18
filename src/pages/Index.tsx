
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import QuizQuestion from "@/components/QuizQuestion";
import QuizStart from "@/components/QuizStart";
import QuizResults from "@/components/QuizResults";
import PresentationPage from "@/components/PresentationPage";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState<number>(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState<Array<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
  }>>([]);
  const [userName, setUserName] = useState<string>(() => {
    return localStorage.getItem('userName') || '';
  });
  const [showTopics, setShowTopics] = useState(false);

  const showResultsFromState = location.state?.showResults;
  const showTopicsFromState = location.state?.showTopics;

  // Definimos resetQuiz ANTES de usarlo en el renderizado condicional
  const resetQuiz = () => {
    setQuizCompleted(false);
    setSelectedTopic("");
    setScore(0);
    setWrongAnswers(0);
    setIncorrectAnswers([]);
    setShowTopics(true);
  };

  useEffect(() => {
    if (showTopicsFromState) {
      setQuizStarted(false);
      setShowTopics(true);
      window.history.replaceState({}, '');
    }
  }, [showTopicsFromState]);

  if (showResultsFromState && quizCompleted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
        <QuizResults 
          score={score} 
          totalQuestions={10} 
          wrongAnswers={wrongAnswers} 
          topic={selectedTopic}
          userName={userName}
          onRestart={resetQuiz}
          incorrectAnswers={incorrectAnswers}
        />
      </div>
    );
  }

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    localStorage.setItem('userName', name);
    window.location.href = '/topics'; // Redirige a la pantalla de temas
  };

  const handleStart = (data: { topic: string; }) => {
    setSelectedTopic(data.topic);
    setQuizStarted(true);
  };

  const handleFinish = (finalScore: number, totalWrong: number, wrongAnswersList: Array<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
  }>) => {
    setScore(finalScore);
    setWrongAnswers(totalWrong);
    setIncorrectAnswers(wrongAnswersList);
    setQuizCompleted(true);
    setQuizStarted(false);

    const highScores = JSON.parse(localStorage.getItem('highScores') || '{}');
    if (!highScores[selectedTopic] || highScores[selectedTopic] < finalScore) {
      highScores[selectedTopic] = finalScore;
      localStorage.setItem('highScores', JSON.stringify(highScores));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-pink-50 dark:from-slate-900 dark:to-slate-800">
      
      {!showTopics ? (
        <PresentationPage onNameSubmit={handleNameSubmit} initialName={userName} />
      ) : quizStarted ? (
        <QuizQuestion 
          topic={selectedTopic} 
          onFinish={handleFinish}
          userName={userName}
        />
      ) : (
        <QuizStart 
          onStart={handleStart} 
          userName={userName}
        />
      )}
    </div>
  );
};

export default Index;
