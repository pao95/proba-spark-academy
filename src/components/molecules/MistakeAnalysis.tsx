
import { AlertTriangle, TrendingDown } from 'lucide-react';

export const MistakeAnalysis = () => {
  const commonMistakes = [
    { concept: 'Probability Rules', errors: 8, improvement: '+15%' },
    { concept: 'Normal Distribution', errors: 5, improvement: '+10%' },
    { concept: 'Hypothesis Testing', errors: 12, improvement: '-5%' },
    { concept: 'Confidence Intervals', errors: 3, improvement: '+25%' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center space-x-2">
        <AlertTriangle className="text-orange-500" size={20} />
        <span>Common Mistakes Analysis</span>
      </h2>
      
      <div className="space-y-4">
        {commonMistakes.map((mistake, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div>
              <h3 className="font-medium text-orange-800">{mistake.concept}</h3>
              <p className="text-sm text-orange-600">{mistake.errors} errors in past week</p>
            </div>
            <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
              mistake.improvement.startsWith('+') 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              <TrendingDown 
                size={12} 
                className={mistake.improvement.startsWith('+') ? 'rotate-180' : ''} 
              />
              <span>{mistake.improvement}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="font-medium text-blue-800 mb-2">Recommendation</h4>
        <p className="text-sm text-blue-700">
          Focus on reviewing Hypothesis Testing concepts. Consider revisiting the theory section 
          and practicing more exercises in this area.
        </p>
      </div>
    </div>
  );
};
