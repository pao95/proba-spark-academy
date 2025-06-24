
import { ChevronRight, Clock } from 'lucide-react';

interface Topic {
  id: number;
  title: string;
  progress: number;
  lastStudied: string;
}

interface TopicCardProps {
  topic: Topic;
}

export const TopicCard = ({ topic }: TopicCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow cursor-pointer">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 mb-2">{topic.title}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <Clock size={14} className="mr-1" />
            <span>Last studied {topic.lastStudied}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${topic.progress}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-600 mt-1">{topic.progress}% complete</span>
        </div>
        <ChevronRight className="text-gray-400 ml-4" size={20} />
      </div>
    </div>
  );
};
