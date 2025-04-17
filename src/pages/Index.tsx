
import { useState } from "react";
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
      <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">¡Gracias por participar!</h2>
          <Button onClick={() => {
            setQuizCompleted(false);
            setSelectedTopic("");
          }}>
            Intentar otro quiz
          </Button>
        </div>
      </div>
    );
  }

  return quizStarted ? (
    <QuizQuestion topic={selectedTopic} onFinish={handleFinish} />
  ) : (
    <QuizStart onStart={handleStart} />
  );
};

export default Index;
