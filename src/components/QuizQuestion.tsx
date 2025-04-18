import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { quizQuestions, topicMapping } from "@/data/quizQuestions";
import { motion } from "framer-motion";
import Header from './Header';

interface QuizQuestionProps {
  topic: string;
  onFinish: (score: number, wrongAnswers: number, incorrectAnswers: Array<{question: string, userAnswer: string, correctAnswer: string}>) => void;
  userName?: string;
}

const QuizQuestion = ({ topic, onFinish, userName }: QuizQuestionProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [incorrectAnswers, setIncorrectAnswers] = useState<Array<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
  }>>([]);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const topicKey = topicMapping[topic] || null;
  
  if (!topicKey || !quizQuestions[topicKey] || quizQuestions[topicKey].length === 0) {
    return (
      <div className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">¡Tema no disponible!</h2>
          <p className="mb-6">Lo sentimos, este tema aún no está disponible.</p>
          <Button onClick={() => onFinish(0, 0, [])}>Volver</Button>
        </Card>
      </div>
    );
  }

  const questions = quizQuestions[topicKey];
  const question = questions[currentQuestion];
  
  const handleOptionClick = (index: number, isCorrectOption: boolean) => {
    setSelectedOption(index);
    setIsCorrect(isCorrectOption);
    setShowFeedback(true);

    if (isCorrectOption) {
      setScore(score + 1);
    } else {
      setIncorrectAnswers([
        ...incorrectAnswers,
        {
          question: question.text,
          userAnswer: question.options[index].text,
          correctAnswer: question.options.find(opt => opt.isCorrect)?.text || ''
        }
      ]);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setShowFeedback(false);
      } else {
        const finalScore = score + (isCorrectOption ? 1 : 0);
        const wrongAnswers = questions.length - finalScore;
        onFinish(finalScore, wrongAnswers, incorrectAnswers);
      }
    }, 1500);
  };

  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="flex-grow flex flex-col items-center bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 min-h-screen">
      <Header userName={userName} topic={topic} />
      
      <div className="w-full max-w-2xl p-4">
        <Progress value={progress} className="w-full h-2" />
        <div className="flex justify-between items-center mt-2 text-sm text-slate-600 dark:text-slate-300">
          <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
          <span>Puntuación: {score}/{currentQuestion}</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-6"
        >
          <Card className="w-full p-6 space-y-6 shadow-lg bg-white/90 dark:bg-slate-800/90 backdrop-blur">
            {question.image && (
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={question.image}
                  alt="Pregunta"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            
            <h2 className="text-2xl font-bold text-center text-slate-800 dark:text-white">
              {question.text}
            </h2>
            
            <div className="grid gap-4">
              {question.options.map((option, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button
                    variant={selectedOption === index 
                      ? (option.isCorrect ? "default" : "destructive")
                      : "outline"
                    }
                    className={`w-full p-4 text-left justify-start text-lg transition-all ${
                      selectedOption === index && option.isCorrect
                        ? "bg-green-500 hover:bg-green-600 text-white"
                        : selectedOption === index
                        ? "bg-red-500 hover:bg-red-600 text-white"
                        : "hover:bg-slate-100 dark:hover:bg-slate-700"
                    }`}
                    onClick={() => handleOptionClick(index, option.isCorrect)}
                    disabled={selectedOption !== null}
                  >
                    {option.image ? (
                      <div className="flex items-center gap-3">
                        <img src={option.image} alt="" className="w-12 h-12 object-cover rounded" />
                        <span>{option.text}</span>
                      </div>
                    ) : (
                      option.text
                    )}
                  </Button>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default QuizQuestion;
