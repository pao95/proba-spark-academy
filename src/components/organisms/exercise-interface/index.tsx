import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ExerciseItem } from "@/components/molecules/exercise-item";
import { CustomExerciseInput } from "@/components/molecules/custom-exercise-input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/atoms";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms";
import { Unit, Exercise } from "./types";
import { exerciseInterfaceStyles } from "./styles";

export const ExerciseInterface = () => {
  const { t } = useTranslation();
  const [selectedUnit, setSelectedUnit] = useState("unit-1");
  const [selectedTopic, setSelectedTopic] = useState("random-variables");
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

  const currentExercises = getExercisesForTopic(selectedTopic);

  return (
    <div className={exerciseInterfaceStyles.container}>
      <div className={exerciseInterfaceStyles.header}>
        <h1 className={exerciseInterfaceStyles.title}>
          {t("sidebar.exercises")}
        </h1>
        <p className={exerciseInterfaceStyles.subtitle}>
          {t("sidebar.exercises")}
        </p>
      </div>

      <Tabs defaultValue="practice" className="w-full">
        <TabsList className={exerciseInterfaceStyles.tabsList}>
          <TabsTrigger
            value="practice"
            className={exerciseInterfaceStyles.tabsTrigger}
          >
            {t("exerciseInterface.practice")}
          </TabsTrigger>
          <TabsTrigger
            value="custom"
            className={exerciseInterfaceStyles.tabsTrigger}
          >
            {t("exerciseInterface.custom")}
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="practice"
          className={exerciseInterfaceStyles.tabsContent}
        >
          <div className={exerciseInterfaceStyles.grid}>
            <div className={exerciseInterfaceStyles.sidebar}>
              <div className={exerciseInterfaceStyles.sidebarCard}>
                <h3 className={exerciseInterfaceStyles.sidebarTitle}>
                  {t("curriculumGrid.units")} & {t("curriculumGrid.topics")}
                </h3>
                <Accordion
                  type="single"
                  value={selectedUnit}
                  onValueChange={(value) =>
                    setSelectedUnit(
                      typeof value === "string" ? value : value[0] || ""
                    )
                  }
                >
                  {units.map((unit) => (
                    <AccordionItem key={unit.id} value={unit.id}>
                      <AccordionTrigger
                        className={exerciseInterfaceStyles.accordionTrigger}
                      >
                        {unit.title}
                      </AccordionTrigger>
                      <AccordionContent>
                        <nav className={exerciseInterfaceStyles.topicNav}>
                          {unit.topics.map((topic) => (
                            <button
                              key={topic.id}
                              onClick={() => {
                                setSelectedTopic(topic.id);
                                setCurrentExercise(0);
                              }}
                              className={`${
                                exerciseInterfaceStyles.topicButton.base
                              } ${
                                selectedTopic === topic.id
                                  ? exerciseInterfaceStyles.topicButton.active
                                  : exerciseInterfaceStyles.topicButton.inactive
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

            <div className={exerciseInterfaceStyles.content}>
              <div className={exerciseInterfaceStyles.contentCard}>
                <div className={exerciseInterfaceStyles.exerciseHeader}>
                  <h2 className={exerciseInterfaceStyles.exerciseTitle}>
                    {t("exerciseInterface.question")} {currentExercise + 1}{" "}
                    {t("general.of")} {currentExercises.length}
                  </h2>
                  <div className={exerciseInterfaceStyles.navigationButtons}>
                    <button
                      onClick={() =>
                        setCurrentExercise(Math.max(0, currentExercise - 1))
                      }
                      disabled={currentExercise === 0}
                      className={`${exerciseInterfaceStyles.navButton.base} ${exerciseInterfaceStyles.navButton.previous}`}
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
                      disabled={currentExercise === currentExercises.length - 1}
                      className={`${exerciseInterfaceStyles.navButton.base} ${exerciseInterfaceStyles.navButton.next}`}
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
    </div>
  );
};
