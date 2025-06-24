
import { Lightbulb } from 'lucide-react';

interface ExampleBlockProps {
  title: string;
  problem: string;
  solution: string;
}

export const ExampleBlock = ({ title, problem, solution }: ExampleBlockProps) => {
  return (
    <div className="bg-green-50 rounded-lg border border-green-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Lightbulb className="text-green-600" size={20} />
        <h3 className="text-lg font-semibold text-green-800">{title}</h3>
      </div>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium text-green-800 mb-2">Problem:</h4>
          <p className="text-green-700">{problem}</p>
        </div>
        <div>
          <h4 className="font-medium text-green-800 mb-2">Solution:</h4>
          <pre className="text-green-700 whitespace-pre-wrap font-sans">{solution}</pre>
        </div>
      </div>
    </div>
  );
};
