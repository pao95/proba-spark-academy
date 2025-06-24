
import { Calculator } from 'lucide-react';

interface FormulaBlockProps {
  title: string;
  formula: string;
  explanation: string;
}

export const FormulaBlock = ({ title, formula, explanation }: FormulaBlockProps) => {
  return (
    <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
      <div className="flex items-center space-x-2 mb-4">
        <Calculator className="text-blue-600" size={20} />
        <h3 className="text-lg font-semibold text-blue-800">{title}</h3>
      </div>
      <div className="bg-white rounded-lg p-4 mb-4 border border-blue-200">
        <code className="text-lg font-mono text-blue-800">{formula}</code>
      </div>
      <p className="text-blue-700">{explanation}</p>
    </div>
  );
};
