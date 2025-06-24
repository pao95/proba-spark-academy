
import { useState } from 'react';
import { TheoryBlock } from '@/components/molecules/TheoryBlock';
import { FormulaBlock } from '@/components/molecules/FormulaBlock';
import { ExampleBlock } from '@/components/molecules/ExampleBlock';

export const TheoryContent = () => {
  const [selectedTopic, setSelectedTopic] = useState('descriptive-stats');
  
  const topics = [
    { id: 'descriptive-stats', title: 'Descriptive Statistics' },
    { id: 'probability', title: 'Probability Theory' },
    { id: 'distributions', title: 'Probability Distributions' },
    { id: 'hypothesis', title: 'Hypothesis Testing' },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
          <h3 className="font-semibold text-gray-800 mb-4">Topics</h3>
          <nav className="space-y-2">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopic(topic.id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                  selectedTopic === topic.id
                    ? 'bg-blue-50 text-blue-600 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {topic.title}
              </button>
            ))}
          </nav>
        </div>
      </div>
      
      <div className="lg:col-span-3 space-y-6">
        <TheoryBlock 
          title="Mean (Average)"
          content="The mean is the sum of all values divided by the number of values. It represents the central tendency of a dataset and is one of the most commonly used measures of central tendency."
        />
        
        <FormulaBlock 
          title="Formula for Mean"
          formula="μ = (Σx) / n"
          explanation="Where μ is the mean, Σx is the sum of all values, and n is the number of values."
        />
        
        <ExampleBlock 
          title="Example: Calculating Mean"
          problem="Calculate the mean of the following dataset: 5, 8, 12, 15, 10"
          solution="Step 1: Add all values: 5 + 8 + 12 + 15 + 10 = 50\nStep 2: Count the values: n = 5\nStep 3: Divide sum by count: μ = 50 / 5 = 10\n\nTherefore, the mean is 10."
        />
        
        <TheoryBlock 
          title="Standard Deviation"
          content="Standard deviation measures the amount of variation or dispersion in a dataset. A low standard deviation indicates that values tend to be close to the mean, while a high standard deviation indicates that values are spread out over a wider range."
        />
        
        <FormulaBlock 
          title="Formula for Standard Deviation"
          formula="σ = √[(Σ(x - μ)²) / n]"
          explanation="Where σ is the standard deviation, x is each value, μ is the mean, and n is the number of values."
        />
      </div>
    </div>
  );
};
