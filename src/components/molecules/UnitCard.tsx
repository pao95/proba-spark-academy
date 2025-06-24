
import { Clock, BarChart, CheckCircle, Lock } from 'lucide-react';

interface Unit {
  id: number;
  title: string;
  description: string;
  topics: string[];
  progress: number;
  difficulty: string;
  estimatedTime: string;
}

interface UnitCardProps {
  unit: Unit;
}

export const UnitCard = ({ unit }: UnitCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const isUnlocked = unit.progress > 0 || unit.id === 1;

  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow ${!isUnlocked ? 'opacity-60' : 'cursor-pointer'}`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-semibold text-lg text-gray-800">{unit.title}</h3>
        {!isUnlocked && <Lock className="text-gray-400" size={20} />}
      </div>
      
      <p className="text-gray-600 text-sm mb-4">{unit.description}</p>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(unit.difficulty)}`}>
            {unit.difficulty}
          </span>
          <div className="flex items-center text-gray-500">
            <Clock size={14} className="mr-1" />
            {unit.estimatedTime}
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Progress</span>
            <span className="text-sm font-medium text-gray-800">{unit.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${unit.progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500 mb-2">Topics covered:</p>
          <div className="flex flex-wrap gap-1">
            {unit.topics.slice(0, 3).map((topic, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {topic}
              </span>
            ))}
            {unit.topics.length > 3 && (
              <span className="text-xs text-gray-500">+{unit.topics.length - 3} more</span>
            )}
          </div>
        </div>
      </div>
      
      {isUnlocked && (
        <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
          {unit.progress > 0 ? 'Continue Learning' : 'Start Learning'}
        </button>
      )}
    </div>
  );
};
