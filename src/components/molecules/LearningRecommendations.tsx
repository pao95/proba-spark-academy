
import { BookOpen, Target, Clock } from 'lucide-react';

export const LearningRecommendations = () => {
  const recommendations = [
    {
      icon: BookOpen,
      title: 'Review Chi-Square Tests',
      description: 'Based on recent mistakes',
      priority: 'High',
      estimatedTime: '30 min'
    },
    {
      icon: Target,
      title: 'Practice ANOVA',
      description: 'Next topic in curriculum',
      priority: 'Medium',
      estimatedTime: '45 min'
    },
    {
      icon: Clock,
      title: 'Daily Review Session',
      description: 'Maintain learning streak',
      priority: 'Low',
      estimatedTime: '15 min'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Learning Recommendations</h2>
      
      <div className="space-y-4">
        {recommendations.map((rec, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
            <div className="flex items-start space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <rec.icon className="text-blue-600" size={16} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-800">{rec.title}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(rec.priority)}`}>
                    {rec.priority}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{rec.description}</p>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock size={12} className="mr-1" />
                  <span>{rec.estimatedTime}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
