import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TheoryBlock } from "@/components/molecules/theory-block";
import { FormulaBlock } from "@/components/molecules/formula-block";
import { ExampleBlock } from "@/components/molecules/example-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms";
import { Unit } from "./types";
import { theoryContentStyles } from "./styles";

export const TheoryContent = () => {
  const { t } = useTranslation();
  const [selectedUnit, setSelectedUnit] = useState("unit-1");
  const [selectedTopic, setSelectedTopic] = useState("random-variables");

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

  const getContentForTopic = (topicId: string) => {
    switch (topicId) {
      case "random-variables":
        return (
          <div className={theoryContentStyles.contentContainer}>
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
          <div className={theoryContentStyles.contentContainer}>
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
          <div className={theoryContentStyles.contentContainer}>
            <TheoryBlock
              title={`Topic: ${topicId}`}
              content="Content for this topic will be available soon. This is a placeholder for the selected subtopic."
            />
          </div>
        );
    }
  };

  return (
    <div className={theoryContentStyles.container}>
      <div className={theoryContentStyles.header}>
        <h1 className={theoryContentStyles.title}>
          {t("theoryContent.theory")}
        </h1>
        <p className={theoryContentStyles.subtitle}>
          {t("theoryContent.theory")}
        </p>
      </div>

      <div className={theoryContentStyles.grid}>
        <div className={theoryContentStyles.sidebar}>
          <div className={theoryContentStyles.sidebarCard}>
            <h3 className={theoryContentStyles.sidebarTitle}>
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
                    className={theoryContentStyles.accordionTrigger}
                  >
                    {unit.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <nav className={theoryContentStyles.topicNav}>
                      {unit.topics.map((topic) => (
                        <button
                          key={topic.id}
                          onClick={() => setSelectedTopic(topic.id)}
                          className={`${theoryContentStyles.topicButton.base} ${
                            selectedTopic === topic.id
                              ? theoryContentStyles.topicButton.active
                              : theoryContentStyles.topicButton.inactive
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

        <div className={theoryContentStyles.content}>
          <div className={theoryContentStyles.contentCard}>
            {getContentForTopic(selectedTopic)}
          </div>
        </div>
      </div>
    </div>
  );
};
