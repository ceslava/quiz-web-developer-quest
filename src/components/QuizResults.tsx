
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card"; 
import { Share2, Twitter, Facebook, Trophy } from "lucide-react";

interface QuizResultsProps {
  score: number;
  totalQuestions: number;
  wrongAnswers: number;
  topic: string;
  onRestart: () => void;
}

const QuizResults = ({ score, totalQuestions, wrongAnswers, topic, onRestart }: QuizResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  const getMessageByScore = () => {
    if (percentage >= 90) return "¡Excelente! ¡Eres un experto!";
    if (percentage >= 70) return "¡Muy bien! Tienes buenos conocimientos.";
    if (percentage >= 50) return "¡No está mal! Pero puedes mejorar.";
    return "¡Sigue intentándolo! Hay que practicar más.";
  };
  
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
              <div className="rounded-full bg-amber-100 p-4 dark:bg-amber-800">
                <Trophy className="h-12 w-12 text-amber-500" />
              </div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold mb-2">¡Quiz Completado!</h2>
          <p className="text-lg font-medium mb-4">{getMessageByScore()}</p>
          
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
            
            <p className="text-gray-500 dark:text-gray-400">
              Respuestas incorrectas: {wrongAnswers}
            </p>
          </div>
          
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
        </Card>
      </motion.div>
    </div>
  );
};

export default QuizResults;
