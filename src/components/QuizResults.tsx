import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; 
import { Share2, Twitter, Facebook, Trophy, Star, Award, ThumbsDown } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  wrongAnswers: number;
  topic: string;
  userName?: string;
  onRestart: () => void;
  incorrectAnswers?: Array<{
    question: string;
    userAnswer: string;
    correctAnswer: string;
  }>;
}

const QuizResults = ({ 
  score, 
  totalQuestions, 
  wrongAnswers, 
  topic, 
  userName, 
  onRestart,
  incorrectAnswers = []
}: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const highScores = JSON.parse(localStorage.getItem('highScores') || '{}');
  
  const getResultIcon = () => {
    if (percentage >= 90) return <Trophy className="h-12 w-12 text-amber-500" />;
    if (percentage >= 70) return <Star className="h-12 w-12 text-purple-500" />;
    if (percentage >= 50) return <Award className="h-12 w-12 text-blue-500" />;
    return <ThumbsDown className="h-12 w-12 text-red-500" />;
  };

  const getMessageAndColor = () => {
    if (percentage >= 90) return { 
      message: "¡Excelente! ¡Eres un experto!", 
      bgColor: "bg-amber-100 dark:bg-amber-800" 
    };
    if (percentage >= 70) return { 
      message: "¡Muy bien! Tienes buenos conocimientos.", 
      bgColor: "bg-purple-100 dark:bg-purple-800" 
    };
    if (percentage >= 50) return { 
      message: "¡No está mal! Pero puedes mejorar.", 
      bgColor: "bg-blue-100 dark:bg-blue-800" 
    };
    return { 
      message: "¡Sigue intentándolo! Hay que practicar más.", 
      bgColor: "bg-red-100 dark:bg-red-800" 
    };
  };
  
  const { message, bgColor } = getMessageAndColor();
  const shareText = `He obtenido ${score}/${totalQuestions} (${percentage}%) en el quiz de ${topic}. ¡Inténtalo tú también!`;
  
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`, '_blank');
  };
  
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(shareText)}`, '_blank');
  };

  return (
    <div className="flex-grow flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full max-w-md p-8 text-center space-y-6">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className={`rounded-full ${bgColor} p-4`}>
                {getResultIcon()}
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">
            {userName ? `¡${message} ${userName}!` : message}
          </h2>
          
          <div className="space-y-4">
            <div className="flex justify-center items-center gap-3">
              <div className="text-5xl font-bold text-primary">{score}</div>
              <div className="text-xl text-gray-500 dark:text-gray-400">/ {totalQuestions}</div>
            </div>
            
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-4 w-full">
              <motion.div 
                className="bg-primary h-4 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, delay: 0.2 }}
              />
            </div>
          </div>

          {incorrectAnswers.length > 0 && (
            <div className="mt-6 space-y-4 text-left">
              <h3 className="font-semibold text-lg">Respuestas incorrectas:</h3>
              {incorrectAnswers.map((item, index) => (
                <div key={index} className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg space-y-2">
                  <p className="font-medium">{item.question}</p>
                  <p className="text-red-600 dark:text-red-400">Tu respuesta: {item.userAnswer}</p>
                  <p className="text-green-600 dark:text-green-400">Respuesta correcta: {item.correctAnswer}</p>
                </div>
              ))}
            </div>
          )}
          
          {Object.keys(highScores).length > 0 && (
            <div className="mt-6 border-t border-gray-200 dark:border-gray-700 pt-4">
              <h3 className="text-lg font-semibold mb-3">Tus mejores puntuaciones:</h3>
              <div className="space-y-2">
                {Object.entries(highScores)
                  .sort(([,a], [,b]) => Number(b) - Number(a))
                  .map(([topicName, topScore]) => (
                    <div key={topicName} className="flex justify-between items-center">
                      <span className="capitalize">{topicName}</span>
                      <span className="font-semibold">{String(topScore)}/10</span>
                    </div>
                  ))
                }
              </div>
            </div>
          )}
          
          <div className="pt-4 border-t border-gray-200 dark:border-gray-700 mt-4">
            <p className="font-medium mb-3">Comparte tu resultado:</p>
            <div className="flex justify-center gap-3">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={shareOnTwitter}
                className="rounded-full"
              >
                <Twitter size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={shareOnFacebook}
                className="rounded-full"
              >
                <Facebook size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Resultado de Quiz',
                      text: shareText,
                      url: window.location.href,
                    });
                  }
                }}
                className="rounded-full"
              >
                <Share2 size={18} />
              </Button>
            </div>
          </div>
          
          <Button onClick={onRestart} className="w-full mt-6">
            Intentar otro tema
          </Button>

          <footer className="fixed bottom-4 left-0 right-0 text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Hecho con ❤️ por <a href="https://ceslava.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">ceslava</a>
            </p>
          </footer>
        </Card>
      </motion.div>
    </div>
  );
};

export default QuizResults;
