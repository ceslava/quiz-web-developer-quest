
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Trophy, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Footer from './Footer';

const QuizSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [highScores, setHighScores] = useState<Record<string, number>>({});
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Recuperar datos del localStorage
    const storedHighScores = JSON.parse(localStorage.getItem('highScores') || '{}');
    const storedUserName = localStorage.getItem('userName') || '';
    
    setHighScores(storedHighScores);
    setUserName(storedUserName);
  }, []);

  const handleShareResults = () => {
    const totalScore = Object.values(highScores).reduce((sum, score) => sum + score, 0);
    const completedTopics = Object.keys(highScores).length;
    
    const shareText = `¡He completado ${completedTopics} temas en Quiz con una puntuación total de ${totalScore} puntos! ¿Puedes superarme?`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Mis resultados en Quiz',
        text: shareText,
        url: window.location.origin,
      }).catch(err => console.error('Error al compartir:', err));
    } else {
      // Fallback para navegadores que no soportan Web Share API
      navigator.clipboard.writeText(shareText)
        .then(() => alert('Texto copiado al portapapeles'))
        .catch(err => console.error('Error al copiar al portapapeles:', err));
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
      <header className="w-full p-4 shadow-md bg-transparent z-10">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <Button variant="ghost" size="icon" onClick={() => navigate('/')} className="text-white">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h1 className="text-xl font-bold text-white">Resumen</h1>
          <div className="w-8"></div> {/* Espaciador para equilibrar el header */}
        </div>
      </header>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-grow flex items-center justify-center p-4 pt-8 pb-16"
      >
        <Card className="w-full max-w-md p-6 bg-white/10 backdrop-blur-sm text-white border-none shadow-xl">
          <div className="text-center mb-6">
            <div className="inline-flex p-3 rounded-full bg-yellow-500/20 mb-4">
              <Trophy className="w-8 h-8 text-yellow-400" />
            </div>
            <h2 className="text-2xl font-bold">
              {userName ? `Progreso de ${userName}` : 'Tu progreso'}
            </h2>
          </div>
          
          <div className="space-y-2 mb-6">
            <div className="flex justify-between items-center">
              <span>Total de temas completados:</span>
              <span className="font-bold">{Object.keys(highScores).length}</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Puntuación total:</span>
              <span className="font-bold">{Object.values(highScores).reduce((sum, score) => sum + score, 0)}</span>
            </div>
          </div>
          
          {Object.keys(highScores).length > 0 ? (
            <div className="space-y-4">
              <h3 className="font-semibold border-b border-white/20 pb-2">Tus mejores puntuaciones:</h3>
              <div className="max-h-60 overflow-y-auto space-y-2 pr-2">
                {Object.entries(highScores)
                  .sort(([,a], [,b]) => b - a)
                  .map(([topicId, score]) => {
                    // Obtener un nombre más amigable para el tema
                    const topicName = topicId
                      .split('-')
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                      .join(' ');
                    
                    return (
                      <div key={topicId} className="flex justify-between items-center bg-white/5 p-3 rounded-lg">
                        <span>{topicName}</span>
                        <span className="font-bold bg-purple-500/20 px-2 py-1 rounded">{score}/10</span>
                      </div>
                    );
                  })
                }
              </div>
            </div>
          ) : (
            <div className="text-center py-6 bg-white/5 rounded-lg">
              <p>No has completado ningún tema todavía</p>
            </div>
          )}
          
          <div className="mt-6 space-y-3">
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              onClick={() => navigate('/')}
            >
              Volver a los temas
            </Button>
            
            <Button
              variant="outline"
              className="w-full text-white border-white/30 hover:bg-white/10"
              onClick={handleShareResults}
            >
              <Share2 className="w-4 h-4 mr-2" />
              Compartir resultados
            </Button>
          </div>
        </Card>
      </motion.div>
      
      <Footer />
    </div>
  );
};

export default QuizSummary;
