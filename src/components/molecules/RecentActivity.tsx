
import { Clock, CheckCircle, XCircle } from 'lucide-react';

export const RecentActivity = () => {
  const activities = [
    { id: 1, type: 'success', text: 'Completed Normal Distribution exercises', time: '2 hours ago' },
    { id: 2, type: 'error', text: 'Failed Chi-Square Test', time: '1 day ago' },
    { id: 3, type: 'success', text: 'Mastered Descriptive Statistics', time: '2 days ago' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-800 mb-4">Recent Activity</h3>
      
      <div className="space-y-3">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            {activity.type === 'success' ? (
              <CheckCircle className="text-green-500 mt-0.5" size={16} />
            ) : (
              <XCircle className="text-red-500 mt-0.5" size={16} />
            )}
            <div className="flex-1">
              <p className="text-sm text-gray-800">{activity.text}</p>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <Clock size={12} className="mr-1" />
                {activity.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
