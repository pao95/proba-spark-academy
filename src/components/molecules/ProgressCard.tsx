
import { TrendingUp, Award, Target } from 'lucide-react';

export const ProgressCard = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-800 mb-4">Overall Progress</h3>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <TrendingUp className="text-green-500" size={16} />
            <span className="text-sm text-gray-600">Topics Completed</span>
          </div>
          <span className="font-semibold text-gray-800">12/20</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Award className="text-yellow-500" size={16} />
            <span className="text-sm text-gray-600">Exercises Solved</span>
          </div>
          <span className="font-semibold text-gray-800">156</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Target className="text-blue-500" size={16} />
            <span className="text-sm text-gray-600">Success Rate</span>
          </div>
          <span className="font-semibold text-gray-800">87%</span>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full" style={{ width: '60%' }}></div>
        </div>
        <span className="text-sm text-gray-600 mt-2 block">60% of curriculum completed</span>
      </div>
    </div>
  );
};
