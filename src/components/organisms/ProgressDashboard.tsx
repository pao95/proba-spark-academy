
import { ProgressChart } from '@/components/molecules/ProgressChart';
import { AchievementCard } from '@/components/molecules/AchievementCard';
import { MistakeAnalysis } from '@/components/molecules/MistakeAnalysis';
import { LearningRecommendations } from '@/components/molecules/LearningRecommendations';

export const ProgressDashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Your Progress</h1>
        <p className="text-gray-600 mt-2">Track your learning journey and achievements</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProgressChart />
          <MistakeAnalysis />
        </div>
        
        <div className="space-y-6">
          <AchievementCard />
          <LearningRecommendations />
        </div>
      </div>
    </div>
  );
};
