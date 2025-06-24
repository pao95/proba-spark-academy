
import { useState } from 'react';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface Exercise {
  id: number;
  type: 'multiple-choice' | 'true-false' | 'open-ended';
  question: string;
  options?: string[];
  correctAnswer: number | boolean | string;
  explanation: string;
}

interface ExerciseItemProps {
  exercise: Exercise;
}

export const ExerciseItem = ({ exercise }: ExerciseItemProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | boolean | string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  const isCorrect = () => {
    if (exercise.type === 'multiple-choice') {
      return selectedAnswer === exercise.correctAnswer;
    } else if (exercise.type === 'true-false') {
      return selectedAnswer === exercise.correctAnswer;
    } else {
      return userAnswer.toLowerCase().includes(exercise.correctAnswer.toString().toLowerCase());
    }
  };

  const renderQuestion = () => {
    switch (exercise.type) {
      case 'multiple-choice':
        return (
          <div className="space-y-3">
            {exercise.options?.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedAnswer === index
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={() => setSelectedAnswer(index)}
                  className="mr-3"
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        );
      
      case 'true-false':
        return (
          <div className="space-y-3">
            {[true, false].map((option) => (
              <label
                key={option.toString()}
                className={`flex items-center p-3 border rounded-lg cursor-pointer transition-colors ${
                  selectedAnswer === option
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option.toString()}
                  checked={selectedAnswer === option}
                  onChange={() => setSelectedAnswer(option)}
                  className="mr-3"
                />
                <span>{option ? 'True' : 'False'}</span>
              </label>
            ))}
          </div>
        );
      
      case 'open-ended':
        return (
          <textarea
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px] resize-vertical"
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-800 mb-4">{exercise.question}</h3>
        {renderQuestion()}
      </div>
      
      {!showFeedback && (
        <button
          onClick={handleSubmit}
          disabled={
            (exercise.type === 'multiple-choice' && selectedAnswer === null) ||
            (exercise.type === 'true-false' && selectedAnswer === null) ||
            (exercise.type === 'open-ended' && !userAnswer.trim())
          }
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Submit Answer
        </button>
      )}
      
      {showFeedback && (
        <div className={`p-4 rounded-lg border ${isCorrect() ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
          <div className="flex items-center space-x-2 mb-2">
            {isCorrect() ? (
              <>
                <CheckCircle className="text-green-600" size={20} />
                <span className="font-medium text-green-800">Correct!</span>
              </>
            ) : (
              <>
                <XCircle className="text-red-600" size={20} />
                <span className="font-medium text-red-800">Incorrect</span>
              </>
            )}
          </div>
          <div className="flex items-start space-x-2">
            <AlertCircle className={`${isCorrect() ? 'text-green-600' : 'text-red-600'} mt-0.5`} size={16} />
            <p className={`text-sm ${isCorrect() ? 'text-green-700' : 'text-red-700'}`}>
              {exercise.explanation}
            </p>
          </div>
        </div>
      )}
      
      {showFeedback && (
        <button
          onClick={() => {
            setSelectedAnswer(null);
            setUserAnswer('');
            setShowFeedback(false);
          }}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          Try Another Problem
        </button>
      )}
    </div>
  );
};
