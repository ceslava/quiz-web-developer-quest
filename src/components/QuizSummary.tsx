import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const QuizSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { userName, totalCorrectAnswers, totalTestsTaken, incorrectAnswers } = location.state || {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Resumen del Test</h1>
      <p className="text-lg mb-2">Usuario: <strong>{userName}</strong></p>
      <p className="text-lg mb-2">Respuestas correctas: <strong>{totalCorrectAnswers}</strong></p>
      <p className="text-lg mb-6">Tests realizados: <strong>{totalTestsTaken}</strong></p>
      <h2 className="text-2xl font-semibold mb-4">Preguntas falladas:</h2>
      <ul className="w-full max-w-2xl text-left">
        {incorrectAnswers?.map((answer, index) => (
          <li key={index} className="mb-4 p-4 bg-red-500 rounded-lg shadow-md">
            <p><strong>Pregunta:</strong> {answer.question}</p>
            <p><strong>Tu respuesta:</strong> {answer.userAnswer}</p>
            <p><strong>Respuesta correcta:</strong> {answer.correctAnswer}</p>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-4">
        <button
          onClick={() => navigate('/')}
          className="px-4 py-2 bg-blue-500 rounded-lg shadow-md hover:bg-blue-600"
        >
          Elegir otro tema
        </button>
        <button
          onClick={() => navigator.share({ text: `¡He acertado ${totalCorrectAnswers} respuestas en Trivia!` })}
          className="px-4 py-2 bg-green-500 rounded-lg shadow-md hover:bg-green-600"
        >
          Compartir
        </button>
      </div>
    </div>
  );
};

export default QuizSummary;