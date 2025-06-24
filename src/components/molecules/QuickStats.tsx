
import { BookOpen, Target, TrendingUp, Award } from 'lucide-react';

export const QuickStats = () => {
  const stats = [
    { icon: BookOpen, label: 'Topics Studied', value: '12', color: 'bg-blue-500' },
    { icon: Target, label: 'Exercises Done', value: '156', color: 'bg-green-500' },
    { icon: TrendingUp, label: 'Success Rate', value: '87%', color: 'bg-yellow-500' },
    { icon: Award, label: 'Achievements', value: '8', color: 'bg-purple-500' },
  ];

  return (
    <>
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
            <div className={`p-3 rounded-lg ${stat.color}`}>
              <stat.icon className="text-white" size={24} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
