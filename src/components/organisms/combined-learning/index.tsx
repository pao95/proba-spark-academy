import { useState, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { TheoryBlock } from "@/components/molecules/theory-block";
import { FormulaBlock } from "@/components/molecules/formula-block";
import { ExampleBlock } from "@/components/molecules/example-block";
import { ExerciseItem } from "@/components/molecules/exercise-item";
import { CustomExerciseInput } from "@/components/molecules/custom-exercise-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/atoms";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms";
import { CombinedLearningProps, Unit, Exercise } from "./types";
import { combinedLearningStyles } from "./styles";

export const CombinedLearning: React.FC<CombinedLearningProps> = ({
  unitId,
  initialSubunitId,
  onBack,
}) => {
  const { t } = useTranslation();
  const [selectedSubunit, setSelectedSubunit] = useState(
    initialSubunitId || ""
  );
  const [currentExercise, setCurrentExercise] = useState(0);

  const units: Unit[] = [
    {
      id: "unit-1",
      title: "Introduction to Probability",
      topics: [
        { id: "random-variables", title: "Random Variables" },
        { id: "discrete-variables", title: "Discrete Random Variables" },
        { id: "probability-mass", title: "Probability Mass Functions" },
        { id: "expected-value", title: "Expected Value and Variance" },
      ],
    },
    {
      id: "unit-2",
      title: "Common Probability Distributions",
      topics: [
        { id: "continuous-variables", title: "Continuous Random Variables" },
        { id: "probability-density", title: "Probability Density Functions" },
        {
          id: "cumulative-distribution",
          title: "Cumulative Distribution Functions",
        },
        { id: "normal-distribution", title: "Normal Distribution" },
      ],
    },
    {
      id: "unit-3",
      title: "Statistical Inference",
      topics: [
        { id: "confidence-intervals", title: "Confidence Intervals" },
        { id: "hypothesis-testing", title: "Hypothesis Testing" },
        { id: "statistical-significance", title: "Statistical Significance" },
        { id: "p-values", title: "P-values and Critical Values" },
      ],
    },
  ];

  const currentUnit = useMemo(() => {
    return units.find((unit) => unit.id === unitId);
  }, [unitId]);

  const getContentForTopic = (topicId: string) => {
    switch (topicId) {
      case "random-variables":
        return (
          <div className={combinedLearningStyles.contentContainer}>
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
      case "discrete-variables":
        return (
          <div className={combinedLearningStyles.contentContainer}>
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
          <div className={combinedLearningStyles.contentContainer}>
            <TheoryBlock
              title={`Topic: ${topicId}`}
              content="Content for this topic will be available soon. This is a placeholder for the selected subtopic."
            />
          </div>
        );
    }
  };

  const getExercisesForTopic = (topicId: string): Exercise[] => {
    switch (topicId) {
      case "random-variables":
        return [
          {
            id: 1,
            type: "multiple-choice",
            question: "What is the expected value of a fair six-sided die?",
            options: ["2.5", "3.5", "4.0", "4.5"],
            correctAnswer: 1,
            explanation: "The expected value is (1+2+3+4+5+6)/6 = 21/6 = 3.5",
          },
          {
            id: 2,
            type: "true-false",
            question: "A random variable must always take positive values.",
            correctAnswer: false,
            explanation:
              "Random variables can take any real values, including negative numbers and zero.",
          },
        ];
      case "discrete-variables":
        return [
          {
            id: 3,
            type: "multiple-choice",
            question:
              "Which of the following is an example of a discrete random variable?",
            options: [
              "Height of a person",
              "Number of students in a class",
              "Temperature",
              "Weight",
            ],
            correctAnswer: 1,
            explanation:
              "Number of students is countable and takes distinct integer values, making it discrete.",
          },
        ];
      default:
        return [
          {
            id: 99,
            type: "multiple-choice",
            question: "This is a placeholder exercise for the selected topic.",
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: 0,
            explanation:
              "More exercises will be available for this topic soon.",
          },
        ];
    }
  };

  const currentExercises = useMemo(() => {
    return getExercisesForTopic(selectedSubunit);
  }, [selectedSubunit]);

  if (!currentUnit) {
    return (
      <div className={combinedLearningStyles.errorContainer}>
        <p>Unit not found</p>
      </div>
    );
  }

  return (
    <div className={combinedLearningStyles.container}>
      <div className={combinedLearningStyles.header}>
        <button onClick={onBack} className={combinedLearningStyles.backButton}>
          ← {t("general.back")}
        </button>
        <h1 className={combinedLearningStyles.title}>{currentUnit.title}</h1>
        <p className={combinedLearningStyles.subtitle}>
          {t("curriculumGrid.units")} • {currentUnit.title}
        </p>
      </div>

      <Tabs defaultValue="theory" className="w-full">
        <TabsList className={combinedLearningStyles.tabsList}>
          <TabsTrigger
            value="theory"
            className={combinedLearningStyles.tabsTrigger}
          >
            {t("theoryContent.theory")}
          </TabsTrigger>
          <TabsTrigger
            value="practice"
            className={combinedLearningStyles.tabsTrigger}
          >
            {t("theoryContent.practice")}
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="theory"
          className={combinedLearningStyles.tabsContent}
        >
          <div className={combinedLearningStyles.grid}>
            <div className={combinedLearningStyles.sidebar}>
              <div className={combinedLearningStyles.sidebarCard}>
                <h3 className={combinedLearningStyles.sidebarTitle}>
                  {currentUnit.title}
                </h3>
                <nav className={combinedLearningStyles.topicNav}>
                  {currentUnit.topics.map((topic) => (
                    <button
                      key={topic.id}
                      onClick={() => setSelectedSubunit(topic.id)}
                      className={`${combinedLearningStyles.topicButton.base} ${
                        selectedSubunit === topic.id
                          ? combinedLearningStyles.topicButton.active
                          : combinedLearningStyles.topicButton.inactive
                      }`}
                    >
                      {topic.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            <div className={combinedLearningStyles.content}>
              <div className={combinedLearningStyles.contentCard}>
                {getContentForTopic(selectedSubunit)}
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent
          value="practice"
          className={combinedLearningStyles.tabsContent}
        >
          <Tabs defaultValue="exercises" className="w-full">
            <TabsList className={combinedLearningStyles.practiceTabsList}>
              <TabsTrigger
                value="exercises"
                className={combinedLearningStyles.tabsTrigger}
              >
                {t("exerciseInterface.practice")}
              </TabsTrigger>
              <TabsTrigger
                value="custom"
                className={combinedLearningStyles.tabsTrigger}
              >
                {t("exerciseInterface.custom")}
              </TabsTrigger>
            </TabsList>

            <TabsContent
              value="exercises"
              className={combinedLearningStyles.tabsContent}
            >
              <div className={combinedLearningStyles.grid}>
                <div className={combinedLearningStyles.sidebar}>
                  <div className={combinedLearningStyles.sidebarCard}>
                    <h3 className={combinedLearningStyles.sidebarTitle}>
                      {currentUnit.title}
                    </h3>
                    <nav className={combinedLearningStyles.topicNav}>
                      {currentUnit.topics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => {
                            setSelectedSubunit(topic.id);
                            setCurrentExercise(0);
                          }}
                          className={`${
                            combinedLearningStyles.topicButton.base
                          } ${
                            selectedSubunit === topic.id
                              ? combinedLearningStyles.topicButton.active
                              : combinedLearningStyles.topicButton.inactive
                          }`}
                        >
                          {topic.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>

                <div className={combinedLearningStyles.content}>
                  <div className={combinedLearningStyles.contentCard}>
                    <div className={combinedLearningStyles.exerciseHeader}>
                      <h2 className={combinedLearningStyles.exerciseTitle}>
                        {t("exerciseInterface.question")} {currentExercise + 1}{" "}
                        {t("general.of")} {currentExercises.length}
                      </h2>
                      <div className={combinedLearningStyles.navigationButtons}>
                        <button
                          onClick={() =>
                            setCurrentExercise(
                              Math.max(0, currentExercise - 1)
                            )
                          }
                          disabled={currentExercise === 0}
                          className={`${combinedLearningStyles.navButton.base} ${combinedLearningStyles.navButton.previous}`}
                        >
                          {t("exerciseInterface.previousQuestion")}
                        </button>
                        <button
                          onClick={() =>
                            setCurrentExercise(
                              Math.min(
                                currentExercises.length - 1,
                                currentExercise + 1
                              )
                            )
                          }
                          disabled={
                            currentExercise === currentExercises.length - 1
                          }
                          className={`${combinedLearningStyles.navButton.base} ${combinedLearningStyles.navButton.next}`}
                        >
                          {t("exerciseInterface.nextQuestion")}
                        </button>
                      </div>
                    </div>

                    <ExerciseItem exercise={currentExercises[currentExercise]} />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="custom">
              <CustomExerciseInput />
            </TabsContent>
          </Tabs>
        </TabsContent>
      </Tabs>
    </div>
  );
}; 