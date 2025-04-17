
import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface Option {
  text: string;
  isCorrect: boolean;
}

const QuizQuestion = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const { toast } = useToast();

  const question = "¿Cuál de las siguientes tecnologías se utiliza principalmente para estilizar páginas web?";
  
  const options: Option[] = [
    { text: "HTML", isCorrect: false },
    { text: "CSS", isCorrect: true },
    { text: "JavaScript", isCorrect: false },
    { text: "Python", isCorrect: false }
  ];

  const handleOptionClick = (index: number, isCorrect: boolean) => {
    setSelectedOption(index);
    toast({
      title: isCorrect ? "¡Correcto!" : "Incorrecto",
      description: isCorrect 
        ? "¡Muy bien! CSS es el lenguaje utilizado para estilizar páginas web." 
        : "No es correcto. CSS es la respuesta correcta.",
      variant: isCorrect ? "default" : "destructive",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 p-4">
      <Card className="w-full max-w-2xl p-6 space-y-6 bg-white shadow-lg">
        <h2 className="text-2xl font-bold text-slate-800 text-center">
          {question}
        </h2>
        <div className="grid gap-4">
          {options.map((option, index) => (
            <Button
              key={index}
              variant={selectedOption === index 
                ? (option.isCorrect ? "default" : "destructive")
                : "outline"
              }
              className={`w-full p-4 text-left justify-start text-lg transition-all ${
                selectedOption === index && option.isCorrect
                  ? "bg-green-500 text-white hover:bg-green-600"
                  : ""
              }`}
              onClick={() => handleOptionClick(index, option.isCorrect)}
              disabled={selectedOption !== null}
            >
              {option.text}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default QuizQuestion;
