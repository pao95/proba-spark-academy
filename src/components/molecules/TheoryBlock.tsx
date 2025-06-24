
import { BookOpen } from 'lucide-react';

interface TheoryBlockProps {
  title: string;
  content: string;
}

export const TheoryBlock = ({ title, content }: TheoryBlockProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <BookOpen className="text-blue-600" size={20} />
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-700 leading-relaxed">{content}</p>
    </div>
  );
};
