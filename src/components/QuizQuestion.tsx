import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Header from './Header';
import Footer from './Footer';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle } from "lucide-react";
import { Question } from '../data/types';
import { topicCategoryMap } from '../data/topicCategoryMap';
import { useNavigate } from 'react-router-dom';

interface QuizQuestionProps {
  topic: string;
  category?: string;
  topicName?: string;
  userName: string;
  onFinish: (score: number, wrongAnswers: number, incorrectAnswers: Array<{ question: string; userAnswer: string; correctAnswer: string }>) => void;
}

const QuizQuestion = ({ topic, category, topicName = topic, userName, onFinish }: QuizQuestionProps) => {
  const resolvedCategory = category || topicCategoryMap[topic];
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState<Array<{ question: string; userAnswer: string; correctAnswer: string }>>([]);

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const loadedQuestions: Question[] = await import(`../data/topics/${resolvedCategory}/${topic}.json`)
          .then(module => module.default.questions);
        setQuestions(loadedQuestions);
      } catch (error) {
        console.error("Error al cargar las preguntas:", error);
      }
    };
    loadQuestions();
  }, [resolvedCategory, topic]);

  const handleAnswer = (index: number) => {
    setSelectedOption(index);

    const isCorrect = index === questions[currentQuestion].correctAnswer;

    if (!isCorrect) {
      setIncorrectAnswers([
        ...incorrectAnswers,
        {
          question: questions[currentQuestion].text,
          userAnswer: questions[currentQuestion].options[index].text,
          correctAnswer: questions[currentQuestion].options[questions[currentQuestion].correctAnswer].text,
        },
      ]);
    } else {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      onFinish(score, questions.length - score, incorrectAnswers);
      navigate('/summary', {
        state: {
          userName,
          totalCorrectAnswers: score,
          totalTestsTaken: 1,
          incorrectAnswers,
        },
      });
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (questions.length === 0) {
    return <div>Cargando preguntas...</div>;
  }

  const question = questions[currentQuestion];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 animate-gradient">
      <Header userName={userName} topicName={`¿Cuánto sabes de ${topicName}?`} />
      <div className="flex flex-col items-center justify-center flex-1 mt-16 px-4">
        <div className="w-full max-w-2xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl text-white">{question.text}</h2>
          </div>
          <div className="flex items-center justify-between w-full">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="p-2 text-white  bg-gray-700 rounded-full"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex flex-col gap-4 w-full">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`relative  text-lg rounded-lg shadow-md transition-all answer-box ${
                    selectedOption !== null
                      ? index === question.correctAnswer
                        ? 'correct-answer'
                        : index === selectedOption
                        ? 'incorrect-answer animate-fall'
                        : 'bg-white text-gray-800'
                      : 'bg-white text-gray-800'
                  }`}
                >
                  <Button
                    onClick={() => handleAnswer(index)}
                    disabled={selectedOption !== null}
                    className="w-full h-full p-4 text-center break-words bg-white text-gray-800 hover:bg-gray-200"
                  >
                    {option.text}
                  </Button>
                 
                </div>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={currentQuestion === questions.length - 1}
              className="p-2 text-white bg-gray-700 rounded-full hover:bg-gray-600  ml-4"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          <div className="w-full bg-gray-300 rounded-full h-6 mt-6 relative">
            <div
              className="bg-blue-500 h-6 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
            <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-800 font-bold">
              {score} / {questions.length}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QuizQuestion;
