import { CheckCircle, Clock, Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/atoms";
import { Unit } from "./types";
import { curriculumGridStyles } from "./styles";

export const CurriculumGrid = () => {
  const { t } = useTranslation();

  const units: Unit[] = [
    {
      id: 1,
      title: "Introduction to Probability",
      description:
        "Foundation concepts of probability theory and basic calculations",
      progress: 100,
      difficulty: "Beginner",
      topics: [
        {
          id: "1-1",
          title: "Random Variables",
          description:
            "Understanding discrete and continuous random variables and their properties",
          duration: 45,
          type: "theory",
          isCompleted: true,
          isLocked: false,
        },
        {
          id: "1-2",
          title: "Discrete Random Variables",
          description: "",
          duration: 60,
          type: "theory",
          isCompleted: true,
          isLocked: false,
        },
        {
          id: "1-3",
          title: "Probability Mass Functions",
          description: "",
          duration: 45,
          type: "theory",
          isCompleted: true,
          isLocked: false,
        },
        {
          id: "1-4",
          title: "Expected Value and Variance",
          description: "",
          duration: 50,
          type: "theory",
          isCompleted: true,
          isLocked: false,
        },
      ],
    },
    {
      id: 2,
      title: "Common Probability Distributions",
      description:
        "Explore normal, binomial, Poisson, and other important distributions",
      progress: 75,
      difficulty: "Intermediate",
      topics: [
        {
          id: "2-1",
          title: "Practice: Discrete Variables",
          description: "",
          duration: 75,
          type: "exercise",
          isCompleted: true,
          isLocked: false,
        },
        {
          id: "2-2",
          title: "Continuous Random Variables",
          description: "",
          duration: 60,
          type: "theory",
          isCompleted: false,
          isLocked: false,
        },
        {
          id: "2-3",
          title: "Probability Density Functions",
          description: "",
          duration: 75,
          type: "theory",
          isCompleted: false,
          isLocked: false,
        },
        {
          id: "2-4",
          title: "Cumulative Distribution Functions",
          description: "",
          duration: 60,
          type: "theory",
          isCompleted: false,
          isLocked: false,
        },
      ],
    },
    {
      id: 3,
      title: "Statistical Inference",
      description:
        "Confidence intervals, hypothesis testing, and statistical significance",
      progress: 0,
      difficulty: "Advanced",
      topics: [
        {
          id: "3-1",
          title: "Practice: Continuous Variables",
          description: "",
          duration: 90,
          type: "exercise",
          isCompleted: false,
          isLocked: false,
        },
        {
          id: "3-2",
          title: "Unit 3 Assessment",
          description: "",
          duration: 45,
          type: "assessment",
          isCompleted: false,
          isLocked: false,
        },
      ],
    },
  ];

  const getTypeColor = (type: "theory" | "exercise" | "assessment") => {
    switch (type) {
      case "theory":
        return curriculumGridStyles.typeBadge.theory;
      case "exercise":
        return curriculumGridStyles.typeBadge.exercise;
      case "assessment":
        return curriculumGridStyles.typeBadge.assessment;
      default:
        return curriculumGridStyles.typeBadge.default;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return curriculumGridStyles.difficultyBadge.beginner;
      case "Intermediate":
        return curriculumGridStyles.difficultyBadge.intermediate;
      case "Advanced":
        return curriculumGridStyles.difficultyBadge.advanced;
      default:
        return curriculumGridStyles.difficultyBadge.default;
    }
  };

  return (
    <div className={curriculumGridStyles.container}>
      {/* Progress Overview */}
      <div className={curriculumGridStyles.progressGrid}>
        <div className={curriculumGridStyles.progressCard}>
          <div className={curriculumGridStyles.progressItem}>
            <div
              className={`${curriculumGridStyles.progressIcon.base} ${curriculumGridStyles.progressIcon.blue}`}
            >
              <span className="text-blue-600 text-sm font-medium">51%</span>
            </div>
            <div>
              <p className={curriculumGridStyles.progressText.label}>
                {t("progressDashboard.overallProgress")}
              </p>
              <p className={curriculumGridStyles.progressText.value}>51%</p>
            </div>
          </div>
        </div>

        <div className={curriculumGridStyles.progressCard}>
          <div className={curriculumGridStyles.progressItem}>
            <CheckCircle
              className={`w-8 h-8 ${curriculumGridStyles.progressIcon.green}`}
            />
            <div>
              <p className={curriculumGridStyles.progressText.label}>
                {t("general.completed")}
              </p>
              <p className={curriculumGridStyles.progressText.value}>1/4</p>
            </div>
          </div>
        </div>

        <div className={curriculumGridStyles.progressCard}>
          <div className={curriculumGridStyles.progressItem}>
            <div
              className={`${curriculumGridStyles.progressIcon.base} ${curriculumGridStyles.progressIcon.yellow}`}
            >
              <span className="text-yellow-600 text-sm font-medium">12</span>
            </div>
            <div>
              <p className={curriculumGridStyles.progressText.label}>
                {t("curriculumGrid.topics")}
              </p>
              <p className={curriculumGridStyles.progressText.value}>12/30</p>
            </div>
          </div>
        </div>

        <div className={curriculumGridStyles.progressCard}>
          <div className={curriculumGridStyles.progressItem}>
            <Clock
              className={`w-8 h-8 ${curriculumGridStyles.progressIcon.purple}`}
            />
            <div>
              <p className={curriculumGridStyles.progressText.label}>
                {t("curriculumGrid.estimatedTime")}
              </p>
              <p className={curriculumGridStyles.progressText.value}>53h</p>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Path */}
      <div className={curriculumGridStyles.learningPath}>
        <div className={curriculumGridStyles.pathHeader}>
          <h2 className={curriculumGridStyles.pathTitle}>
            {t("curriculumGrid.title")}
          </h2>
          <p className={curriculumGridStyles.pathDescription}>
            {t("curriculumGrid.title")}
          </p>
        </div>

        <Accordion type="multiple" className={curriculumGridStyles.accordion}>
          {units.map((unit, unitIndex) => (
            <AccordionItem
              key={unit.id}
              value={`unit-${unit.id}`}
              className={curriculumGridStyles.accordionItem}
            >
              <AccordionTrigger
                className={curriculumGridStyles.accordionTrigger}
              >
                <div className={curriculumGridStyles.unitHeader}>
                  <div className={curriculumGridStyles.unitContent}>
                    <div className={curriculumGridStyles.unitInfo}>
                      <div
                        className={`${curriculumGridStyles.unitIcon.base} ${
                          unit.progress === 100
                            ? curriculumGridStyles.unitIcon.completed
                            : curriculumGridStyles.unitIcon.inProgress
                        }`}
                      >
                        {unit.progress === 100 ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <span className="text-white text-sm font-medium">
                            {unitIndex + 1}
                          </span>
                        )}
                      </div>
                      <h3 className={curriculumGridStyles.unitTitle}>
                        {unit.title}
                      </h3>
                      <span
                        className={`${
                          curriculumGridStyles.difficultyBadge.base
                        } ${getDifficultyColor(unit.difficulty)}`}
                      >
                        {unit.difficulty}
                      </span>
                    </div>
                    <p className={curriculumGridStyles.unitDescription}>
                      {unit.description}
                    </p>
                    <div className={curriculumGridStyles.progressBar.container}>
                      <div className={curriculumGridStyles.progressBar.bar}>
                        <div className={curriculumGridStyles.progressBar.track}>
                          <div
                            className={`${
                              curriculumGridStyles.progressBar.fill.base
                            } ${
                              unit.progress === 100
                                ? curriculumGridStyles.progressBar.fill
                                    .completed
                                : curriculumGridStyles.progressBar.fill
                                    .inProgress
                            }`}
                            style={{ width: `${unit.progress}%` }}
                          ></div>
                        </div>
                        <span
                          className={
                            curriculumGridStyles.progressBar.percentage
                          }
                        >
                          {unit.progress}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent
                className={curriculumGridStyles.accordionContent}
              >
                <div className={curriculumGridStyles.topicsContainer}>
                  {unit.topics.map((topic, topicIndex) => (
                    <div
                      key={topic.id}
                      className={`${curriculumGridStyles.topicItem.base} ${
                        topic.isCompleted
                          ? curriculumGridStyles.topicItem.completed
                          : topic.isLocked
                          ? curriculumGridStyles.topicItem.locked
                          : curriculumGridStyles.topicItem.available
                      }`}
                    >
                      <div className={curriculumGridStyles.topicContent}>
                        <div
                          className={`${curriculumGridStyles.topicIcon.base} ${
                            topic.isCompleted
                              ? curriculumGridStyles.topicIcon.completed
                              : topic.isLocked
                              ? curriculumGridStyles.topicIcon.locked
                              : curriculumGridStyles.topicIcon.available
                          }`}
                        >
                          {topic.isCompleted ? (
                            <CheckCircle className="w-4 h-4" />
                          ) : (
                            <span>{topicIndex + 1}</span>
                          )}
                        </div>
                        <div className={curriculumGridStyles.topicInfo}>
                          <h4 className={curriculumGridStyles.topicTitle}>
                            {topic.title}
                          </h4>
                          {topic.description && (
                            <p
                              className={curriculumGridStyles.topicDescription}
                            >
                              {topic.description}
                            </p>
                          )}
                          <div className={curriculumGridStyles.topicMeta}>
                            <div className={curriculumGridStyles.topicDuration}>
                              <Clock
                                className={curriculumGridStyles.durationIcon}
                              />
                              <span
                                className={curriculumGridStyles.durationText}
                              >
                                {topic.duration} min
                              </span>
                            </div>
                            <span
                              className={`${
                                curriculumGridStyles.typeBadge.base
                              } ${getTypeColor(topic.type)}`}
                            >
                              {topic.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={curriculumGridStyles.topicActions}>
                        {topic.isCompleted ? (
                          <span
                            className={
                              curriculumGridStyles.statusBadge.completed
                            }
                          >
                            {t("general.completed")}
                          </span>
                        ) : topic.isLocked ? (
                          <span
                            className={curriculumGridStyles.statusBadge.locked}
                          >
                            {t("general.locked")}
                          </span>
                        ) : (
                          <button className={curriculumGridStyles.startButton}>
                            <Play className="w-4 h-4" />
                            <span>{t("general.start")}</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Continue Learning Section */}
      <div className={curriculumGridStyles.continueSection}>
        <div className={curriculumGridStyles.continueContent}>
          <div className={curriculumGridStyles.continueInfo}>
            <h3 className={curriculumGridStyles.continueTitle}>
              {t("curriculumGrid.title")}
            </h3>
            <p className={curriculumGridStyles.continueDescription}>
              {t("curriculumGrid.title")}
            </p>
            <div className={curriculumGridStyles.continueProgress}>
              <span className="font-medium">51% {t("general.completed")}</span>
              <span>•</span>
              <span>
                {t("curriculumGrid.next")}: Continuous Random Variables
              </span>
            </div>
          </div>
          <button className={curriculumGridStyles.continueButton}>
            {t("unitCard.continueLearning")}
          </button>
        </div>
      </div>
    </div>
  );
};
