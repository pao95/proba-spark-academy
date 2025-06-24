
import { Award, Star, Target, TrendingUp } from 'lucide-react';

export const AchievementCard = () => {
  const achievements = [
    { icon: Award, title: 'First Steps', description: 'Completed your first topic', earned: true },
    { icon: Star, title: 'Perfect Score', description: 'Got 100% on 5 exercises', earned: true },
    { icon: Target, title: 'Consistent Learner', description: 'Studied for 7 days straight', earned: false },
    { icon: TrendingUp, title: 'Progress Master', description: 'Reached 50% completion', earned: true },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Achievements</h2>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`flex items-center space-x-3 p-3 rounded-lg ${
              achievement.earned ? 'bg-yellow-50 border border-yellow-200' : 'bg-gray-50 border border-gray-200'
            }`}
          >
            <div className={`p-2 rounded-lg ${
              achievement.earned ? 'bg-yellow-100' : 'bg-gray-100'
            }`}>
              <achievement.icon
                className={achievement.earned ? 'text-yellow-600' : 'text-gray-400'}
                size={20}
              />
            </div>
            <div className="flex-1">
              <h3 className={`font-medium ${achievement.earned ? 'text-yellow-800' : 'text-gray-500'}`}>
                {achievement.title}
              </h3>
              <p className={`text-sm ${achievement.earned ? 'text-yellow-600' : 'text-gray-400'}`}>
                {achievement.description}
              </p>
            </div>
            {achievement.earned && (
              <div className="text-yellow-600">
                <Star size={16} fill="currentColor" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
