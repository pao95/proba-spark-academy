
import { useState } from 'react';
import { TheoryBlock } from '@/components/molecules/TheoryBlock';
import { FormulaBlock } from '@/components/molecules/FormulaBlock';
import { ExampleBlock } from '@/components/molecules/ExampleBlock';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const TheoryContent = () => {
  const [selectedUnit, setSelectedUnit] = useState('unit-1');
  const [selectedTopic, setSelectedTopic] = useState('random-variables');
  
  const units = [
    {
      id: 'unit-1',
      title: 'Introduction to Probability',
      topics: [
        { id: 'random-variables', title: 'Random Variables' },
        { id: 'discrete-variables', title: 'Discrete Random Variables' },
        { id: 'probability-mass', title: 'Probability Mass Functions' },
        { id: 'expected-value', title: 'Expected Value and Variance' },
      ]
    },
    {
      id: 'unit-2',
      title: 'Common Probability Distributions',
      topics: [
        { id: 'continuous-variables', title: 'Continuous Random Variables' },
        { id: 'probability-density', title: 'Probability Density Functions' },
        { id: 'cumulative-distribution', title: 'Cumulative Distribution Functions' },
        { id: 'normal-distribution', title: 'Normal Distribution' },
      ]
    },
    {
      id: 'unit-3',
      title: 'Statistical Inference',
      topics: [
        { id: 'confidence-intervals', title: 'Confidence Intervals' },
        { id: 'hypothesis-testing', title: 'Hypothesis Testing' },
        { id: 'statistical-significance', title: 'Statistical Significance' },
        { id: 'p-values', title: 'P-values and Critical Values' },
      ]
    },
  ];

  const getContentForTopic = (topicId: string) => {
    switch (topicId) {
      case 'random-variables':
        return (
          <div className="space-y-6">
            <TheoryBlock 
              title="Random Variables"
              content="A random variable is a function that assigns numerical values to the outcomes of a random phenomenon. Random variables can be discrete (taking countable values) or continuous (taking any value in an interval)."
            />
            
            <FormulaBlock 
              title="Expected Value of a Random Variable"
              formula="E[X] = Σ x · P(X = x)"
              explanation="For discrete random variables, the expected value is the sum of each possible value multiplied by its probability."
            />
            
            <ExampleBlock 
              title="Example: Dice Roll Random Variable"
              problem="Let X be the outcome of rolling a fair six-sided die. Find E[X]."
              solution="E[X] = 1·(1/6) + 2·(1/6) + 3·(1/6) + 4·(1/6) + 5·(1/6) + 6·(1/6)\nE[X] = (1+2+3+4+5+6)/6 = 21/6 = 3.5"
            />
          </div>
        );
      case 'discrete-variables':
        return (
          <div className="space-y-6">
            <TheoryBlock 
              title="Discrete Random Variables"
              content="Discrete random variables take on a countable number of distinct values. Examples include the number of heads in coin flips, the number of customers arriving at a store, or the score on a test."
            />
            
            <FormulaBlock 
              title="Variance of Discrete Random Variable"
              formula="Var(X) = E[X²] - (E[X])²"
              explanation="The variance measures the spread of the distribution around its mean."
            />
          </div>
        );
      default:
        return (
          <div className="space-y-6">
            <TheoryBlock 
              title={`Topic: ${topicId}`}
              content="Content for this topic will be available soon. This is a placeholder for the selected subtopic."
            />
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">Theory</h1>
        <p className="text-gray-600 mt-2">Explore probability and statistics concepts organized by units</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <h3 className="font-semibold text-gray-800 mb-4">Units & Topics</h3>
            <Accordion type="single" value={selectedUnit} onValueChange={setSelectedUnit}>
              {units.map((unit) => (
                <AccordionItem key={unit.id} value={unit.id}>
                  <AccordionTrigger className="text-sm font-medium text-gray-700 hover:no-underline">
                    {unit.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <nav className="space-y-1 ml-2">
                      {unit.topics.map((topic) => (
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
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        <div className="lg:col-span-3">
          {getContentForTopic(selectedTopic)}
        </div>
      </div>
    </div>
  );
};
