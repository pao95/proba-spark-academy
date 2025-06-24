
import { CheckCircle, Clock, Play } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Topic {
  id: string;
  title: string;
  description: string;
  duration: number;
  type: 'theory' | 'exercise' | 'assessment';
  isCompleted: boolean;
  isLocked: boolean;
}

interface Unit {
  id: number;
  title: string;
  description: string;
  progress: number;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: Topic[];
}

export const CurriculumGrid = () => {
  const units: Unit[] = [
    {
      id: 1,
      title: 'Introduction to Probability',
      description: 'Foundation concepts of probability theory and basic calculations',
      progress: 100,
      difficulty: 'Beginner',
      topics: [
        { id: '1-1', title: 'Random Variables', description: 'Understanding discrete and continuous random variables and their properties', duration: 45, type: 'theory', isCompleted: true, isLocked: false },
        { id: '1-2', title: 'Discrete Random Variables', description: '', duration: 60, type: 'theory', isCompleted: true, isLocked: false },
        { id: '1-3', title: 'Probability Mass Functions', description: '', duration: 45, type: 'theory', isCompleted: true, isLocked: false },
        { id: '1-4', title: 'Expected Value and Variance', description: '', duration: 50, type: 'theory', isCompleted: true, isLocked: false },
      ]
    },
    {
      id: 2,
      title: 'Common Probability Distributions',
      description: 'Explore normal, binomial, Poisson, and other important distributions',
      progress: 75,
      difficulty: 'Intermediate',
      topics: [
        { id: '2-1', title: 'Practice: Discrete Variables', description: '', duration: 75, type: 'exercise', isCompleted: true, isLocked: false },
        { id: '2-2', title: 'Continuous Random Variables', description: '', duration: 60, type: 'theory', isCompleted: false, isLocked: false },
        { id: '2-3', title: 'Probability Density Functions', description: '', duration: 75, type: 'theory', isCompleted: false, isLocked: false },
        { id: '2-4', title: 'Cumulative Distribution Functions', description: '', duration: 60, type: 'theory', isCompleted: false, isLocked: false },
      ]
    },
    {
      id: 3,
      title: 'Statistical Inference',
      description: 'Confidence intervals, hypothesis testing, and statistical significance',
      progress: 0,
      difficulty: 'Advanced',
      topics: [
        { id: '3-1', title: 'Practice: Continuous Variables', description: '', duration: 90, type: 'exercise', isCompleted: false, isLocked: false },
        { id: '3-2', title: 'Unit 3 Assessment', description: '', duration: 45, type: 'assessment', isCompleted: false, isLocked: false },
      ]
    }
  ];

  const getTypeColor = (type: Topic['type']) => {
    switch (type) {
      case 'theory': return 'bg-blue-100 text-blue-800';
      case 'exercise': return 'bg-green-100 text-green-800';
      case 'assessment': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-12">
      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 text-sm font-medium">51%</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Overall Progress</p>
              <p className="font-semibold text-gray-800">51%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-sm text-gray-500">Completed</p>
              <p className="font-semibold text-gray-800">1/4</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="text-yellow-600 text-sm font-medium">12</span>
            </div>
            <div>
              <p className="text-sm text-gray-500">Topics</p>
              <p className="font-semibold text-gray-800">12/30</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <div className="flex items-center space-x-2">
            <Clock className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-sm text-gray-500">Est. Time</p>
              <p className="font-semibold text-gray-800">53h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">Learning Path</h2>
          <p className="text-sm text-gray-600">Follow the structured curriculum to master probability and statistics concepts</p>
        </div>

        <Accordion type="multiple" className="space-y-4">
          {units.map((unit, unitIndex) => (
            <AccordionItem key={unit.id} value={`unit-${unit.id}`} className="bg-white rounded-lg shadow-sm border border-gray-200">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-start justify-between w-full">
                  <div className="flex-1 text-left">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${unit.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}>
                        {unit.progress === 100 ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <span className="text-white text-sm font-medium">{unitIndex + 1}</span>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">{unit.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(unit.difficulty)}`}>
                        {unit.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-3">{unit.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-32 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-300 ${unit.progress === 100 ? 'bg-green-500' : 'bg-blue-500'}`}
                            style={{ width: `${unit.progress}%` }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600">{unit.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-3">
                  {unit.topics.map((topic, topicIndex) => (
                    <div key={topic.id} className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                      topic.isCompleted 
                        ? 'bg-green-50 border-green-200' 
                        : topic.isLocked 
                          ? 'bg-gray-50 border-gray-200 opacity-60' 
                          : 'bg-gray-50 border-gray-200 hover:bg-gray-100 cursor-pointer'
                    }`}>
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium ${
                          topic.isCompleted 
                            ? 'bg-green-500 text-white' 
                            : topic.isLocked 
                              ? 'bg-gray-300 text-gray-500'
                              : 'bg-blue-500 text-white'
                        }`}>
                          {topic.isCompleted ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <span>{topicIndex + 1}</span>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800">{topic.title}</h4>
                          {topic.description && (
                            <p className="text-sm text-gray-600">{topic.description}</p>
                          )}
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-3 h-3 text-gray-400" />
                              <span className="text-xs text-gray-500">{topic.duration} min</span>
                            </div>
                            <span className={`px-2 py-0.5 rounded text-xs font-medium ${getTypeColor(topic.type)}`}>
                              {topic.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {topic.isCompleted ? (
                          <span className="text-xs text-green-600 font-medium bg-green-100 px-2 py-1 rounded">Completed</span>
                        ) : topic.isLocked ? (
                          <span className="text-xs text-gray-500 font-medium">Locked</span>
                        ) : (
                          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                            <Play className="w-4 h-4" />
                            <span>Start</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Continue Learning Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Continue Your Journey</h3>
            <p className="text-gray-600 mb-1">You're making great progress! Keep up the momentum and master the next topic.</p>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span className="font-medium">51% completed</span>
              <span>•</span>
              <span>Next: Continuous Random Variables</span>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Continue Learning
          </button>
        </div>
      </div>
    </div>
  );
};
