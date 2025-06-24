
import { useState } from 'react';
import { ExerciseItem } from '@/components/molecules/ExerciseItem';
import { CustomExerciseInput } from '@/components/molecules/CustomExerciseInput';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const ExerciseInterface = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  
  const exercises = [
    {
      id: 1,
      type: 'multiple-choice' as const,
      question: 'What is the mean of the dataset: 4, 6, 8, 10, 12?',
      options: ['6', '8', '10', '12'],
      correctAnswer: 1,
      explanation: 'To find the mean, add all values (4+6+8+10+12=40) and divide by the number of values (5). So 40/5 = 8.'
    },
    {
      id: 2,
      type: 'true-false' as const,
      question: 'The median is always equal to the mean in a normal distribution.',
      correctAnswer: true,
      explanation: 'In a perfectly normal distribution, the mean, median, and mode are all equal due to the symmetrical nature of the distribution.'
    },
    {
      id: 3,
      type: 'open-ended' as const,
      question: 'Explain the difference between population and sample variance. Include the formulas and when to use each.',
      correctAnswer: 'Population variance uses n in denominator, sample variance uses n-1',
      explanation: 'Population variance (σ²) uses n in the denominator when you have data for the entire population. Sample variance (s²) uses n-1 in the denominator (Bessel\'s correction) to provide an unbiased estimate of population variance when working with a sample.'
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Exercises</h1>
        <p className="text-gray-600 mt-2">Practice problems to test your understanding</p>
      </div>
      
      <Tabs defaultValue="practice" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="practice">Practice Exercises</TabsTrigger>
          <TabsTrigger value="custom">Custom Problem</TabsTrigger>
        </TabsList>
        
        <TabsContent value="practice" className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Exercise {currentExercise + 1} of {exercises.length}
              </h2>
              <div className="flex space-x-2">
                <button
                  onClick={() => setCurrentExercise(Math.max(0, currentExercise - 1))}
                  disabled={currentExercise === 0}
                  className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg disabled:opacity-50 hover:bg-gray-200 transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setCurrentExercise(Math.min(exercises.length - 1, currentExercise + 1))}
                  disabled={currentExercise === exercises.length - 1}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-blue-700 transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
            
            <ExerciseItem exercise={exercises[currentExercise]} />
          </div>
        </TabsContent>
        
        <TabsContent value="custom">
          <CustomExerciseInput />
        </TabsContent>
      </Tabs>
    </div>
  );
};
