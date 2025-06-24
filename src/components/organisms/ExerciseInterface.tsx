
import { useState } from 'react';
import { ExerciseItem } from '@/components/molecules/ExerciseItem';
import { CustomExerciseInput } from '@/components/molecules/CustomExerciseInput';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const ExerciseInterface = () => {
  const [selectedUnit, setSelectedUnit] = useState('unit-1');
  const [selectedTopic, setSelectedTopic] = useState('random-variables');
  const [currentExercise, setCurrentExercise] = useState(0);
  
  const units = [
    {
      id: 'unit-1',
      title: 'Introduction to Probability',
      topics: [
        { id: 'random-variables', title: 'Random Variables' },
        { id: 'discrete-variables', title: 'Discrete Random Variables' },
        { id: 'probability-mass', title: 'Probability Mass Functions' },
        { id: 'expected-value', title: 'Expected Value and Variance' },
      ]
    },
    {
      id: 'unit-2',
      title: 'Common Probability Distributions',
      topics: [
        { id: 'continuous-variables', title: 'Continuous Random Variables' },
        { id: 'probability-density', title: 'Probability Density Functions' },
        { id: 'cumulative-distribution', title: 'Cumulative Distribution Functions' },
        { id: 'normal-distribution', title: 'Normal Distribution' },
      ]
    },
    {
      id: 'unit-3',
      title: 'Statistical Inference',
      topics: [
        { id: 'confidence-intervals', title: 'Confidence Intervals' },
        { id: 'hypothesis-testing', title: 'Hypothesis Testing' },
        { id: 'statistical-significance', title: 'Statistical Significance' },
        { id: 'p-values', title: 'P-values and Critical Values' },
      ]
    },
  ];

  const getExercisesForTopic = (topicId: string) => {
    switch (topicId) {
      case 'random-variables':
        return [
          {
            id: 1,
            type: 'multiple-choice' as const,
            question: 'What is the expected value of a fair six-sided die?',
            options: ['2.5', '3.5', '4.0', '4.5'],
            correctAnswer: 1,
            explanation: 'The expected value is (1+2+3+4+5+6)/6 = 21/6 = 3.5'
          },
          {
            id: 2,
            type: 'true-false' as const,
            question: 'A random variable must always take positive values.',
            correctAnswer: false,
            explanation: 'Random variables can take any real values, including negative numbers and zero.'
          }
        ];
      case 'discrete-variables':
        return [
          {
            id: 3,
            type: 'multiple-choice' as const,
            question: 'Which of the following is an example of a discrete random variable?',
            options: ['Height of a person', 'Number of students in a class', 'Temperature', 'Weight'],
            correctAnswer: 1,
            explanation: 'Number of students is countable and takes distinct integer values, making it discrete.'
          }
        ];
      default:
        return [
          {
            id: 99,
            type: 'multiple-choice' as const,
            question: 'This is a placeholder exercise for the selected topic.',
            options: ['Option A', 'Option B', 'Option C', 'Option D'],
            correctAnswer: 0,
            explanation: 'More exercises will be available for this topic soon.'
          }
        ];
    }
  };

  const currentExercises = getExercisesForTopic(selectedTopic);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Exercises</h1>
        <p className="text-gray-600 mt-2">Practice problems organized by units and topics</p>
      </div>
      
      <Tabs defaultValue="practice" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="practice">Practice Exercises</TabsTrigger>
          <TabsTrigger value="custom">Custom Problem</TabsTrigger>
        </TabsList>
        
        <TabsContent value="practice" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                <h3 className="font-semibold text-gray-800 mb-4">Units & Topics</h3>
                <Accordion type="single" value={selectedUnit} onValueChange={setSelectedUnit}>
                  {units.map((unit) => (
                    <AccordionItem key={unit.id} value={unit.id}>
                      <AccordionTrigger className="text-sm font-medium text-gray-700 hover:no-underline">
                        {unit.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <nav className="space-y-1 ml-2">
                          {unit.topics.map((topic) => (
                            <button
                              key={topic.id}
                              onClick={() => {
                                setSelectedTopic(topic.id);
                                setCurrentExercise(0);
                              }}
                              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                                selectedTopic === topic.id
                                  ? 'bg-blue-50 text-blue-600 font-medium'
                                  : 'text-gray-600 hover:bg-gray-50'
                              }`}
                            >
                              {topic.title}
                            </button>
                          ))}
                        </nav>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold text-gray-800">
                    Exercise {currentExercise + 1} of {currentExercises.length}
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
                      onClick={() => setCurrentExercise(Math.min(currentExercises.length - 1, currentExercise + 1))}
                      disabled={currentExercise === currentExercises.length - 1}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 hover:bg-blue-700 transition-colors"
                    >
                      Next
                    </button>
                  </div>
                </div>
                
                <ExerciseItem exercise={currentExercises[currentExercise]} />
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="custom">
          <CustomExerciseInput />
        </TabsContent>
      </Tabs>
    </div>
  );
};
