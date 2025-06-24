
import { UnitCard } from '@/components/molecules/UnitCard';

export const CurriculumGrid = () => {
  const units = [
    {
      id: 1,
      title: 'Descriptive Statistics',
      description: 'Learn to describe and summarize data using measures of central tendency and variability',
      topics: ['Mean, Median, Mode', 'Standard Deviation', 'Variance', 'Data Visualization'],
      progress: 90,
      difficulty: 'Beginner',
      estimatedTime: '2 weeks'
    },
    {
      id: 2,
      title: 'Probability Theory',
      description: 'Fundamental concepts of probability and random events',
      topics: ['Basic Probability', 'Conditional Probability', 'Bayes Theorem', 'Random Variables'],
      progress: 65,
      difficulty: 'Intermediate',
      estimatedTime: '3 weeks'
    },
    {
      id: 3,
      title: 'Probability Distributions',
      description: 'Common probability distributions and their applications',
      topics: ['Normal Distribution', 'Binomial Distribution', 'Poisson Distribution', 'Exponential Distribution'],
      progress: 45,
      difficulty: 'Intermediate',
      estimatedTime: '4 weeks'
    },
    {
      id: 4,
      title: 'Hypothesis Testing',
      description: 'Statistical inference and hypothesis testing methods',
      topics: ['t-tests', 'Chi-square tests', 'ANOVA', 'p-values'],
      progress: 20,
      difficulty: 'Advanced',
      estimatedTime: '3 weeks'
    },
    {
      id: 5,
      title: 'Regression Analysis',
      description: 'Linear and multiple regression analysis techniques',
      topics: ['Simple Linear Regression', 'Multiple Regression', 'Model Validation', 'Assumptions'],
      progress: 0,
      difficulty: 'Advanced',
      estimatedTime: '4 weeks'
    },
    {
      id: 6,
      title: 'Statistical Quality Control',
      description: 'Applied statistics for quality control and process improvement',
      topics: ['Control Charts', 'Process Capability', 'Six Sigma', 'Statistical Process Control'],
      progress: 0,
      difficulty: 'Advanced',
      estimatedTime: '3 weeks'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {units.map((unit) => (
        <UnitCard key={unit.id} unit={unit} />
      ))}
    </div>
  );
};
