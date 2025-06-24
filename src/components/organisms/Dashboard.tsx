
import { ProgressCard } from '@/components/molecules/ProgressCard';
import { TopicCard } from '@/components/molecules/TopicCard';
import { RecentActivity } from '@/components/molecules/RecentActivity';
import { QuickStats } from '@/components/molecules/QuickStats';

export const Dashboard = () => {
  const recentTopics = [
    { id: 1, title: 'Probability Distributions', progress: 75, lastStudied: '2 days ago' },
    { id: 2, title: 'Hypothesis Testing', progress: 45, lastStudied: '1 week ago' },
    { id: 3, title: 'Descriptive Statistics', progress: 90, lastStudied: '3 days ago' },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <QuickStats />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Continue Learning</h2>
          <div className="space-y-4">
            {recentTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">Your Progress</h2>
          <ProgressCard />
          <div className="mt-6">
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};
