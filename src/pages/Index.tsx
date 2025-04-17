
import { useState } from "react";
import { Heart } from "lucide-react";
import QuizQuestion from "@/components/QuizQuestion";
import QuizStart from "@/components/QuizStart";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("");
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleStart = (data: { topic: string }) => {
    setSelectedTopic(data.topic);
    setQuizStarted(true);
  };

  const handleFinish = () => {
    setQuizCompleted(true);
    setQuizStarted(false);
  };

  if (quizCompleted) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4">
        <div className="text-center flex-grow flex items-center justify-center flex-col">
          <h2 className="text-2xl font-bold mb-4">¡Gracias por participar!</h2>
          <Button onClick={() => {
            setQuizCompleted(false);
            setSelectedTopic("");
          }}>
            Intentar otro quiz
          </Button>
        </div>
        <footer className="mt-auto p-4 text-center">
          <p className="flex items-center justify-center gap-2 text-sm text-gray-600">
            Hecho con <Heart className="text-red-500 fill-red-500" size={16} /> por 
            <a 
              href="https://ceslava.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:underline ml-1"
            >
              Cristian Eslava
            </a>
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="p-4 text-center">
        <h1 className="text-3xl font-bold text-slate-800 flex items-center justify-center gap-2">
          <Heart className="text-red-500 fill-red-500" size={24} />
          Cuánto sabes de...
        </h1>
      </header>
      {quizStarted ? (
        <QuizQuestion topic={selectedTopic} onFinish={handleFinish} />
      ) : (
        <QuizStart onStart={handleStart} />
      )}
      <footer className="mt-auto p-4 text-center">
        <p className="flex items-center justify-center gap-2 text-sm text-gray-600">
          Hecho con <Heart className="text-red-500 fill-red-500" size={16} /> por 
          <a 
            href="https://ceslava.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:underline ml-1"
          >
            Cristian Eslava
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Index;

