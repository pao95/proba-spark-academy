import { BookOpen, Target, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Recommendation } from "./types";
import { learningRecommendationsStyles } from "./styles";
import { Card, Icon, Text, Badge } from "@/components/atoms";

export const LearningRecommendations = () => {
  const { t } = useTranslation();

  const recommendations: Recommendation[] = [
    {
      icon: BookOpen,
      title: t("learningRecommendations.suggestedTopics"),
      description: t("learningRecommendations.basedOnProgress"),
      priority: "High",
      estimatedTime: "30 min",
    },
    {
      icon: Target,
      title: t("learningRecommendations.practiceExercises"),
      description: t("learningRecommendations.basedOnProgress"),
      priority: "Medium",
      estimatedTime: "45 min",
    },
    {
      icon: Clock,
      title: t("learningRecommendations.suggestedTopics"),
      description: t("learningRecommendations.basedOnProgress"),
      priority: "Low",
      estimatedTime: "15 min",
    },
  ];

  const getPriorityVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "error";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "default";
    }
  };

  return (
    <Card variant="default" padding="lg">
      <Text variant="h3">{t("learningRecommendations.title")}</Text>

      <div className={learningRecommendationsStyles.recommendationsContainer}>
        {recommendations.map((rec, index) => (
          <div
            key={index}
            className={learningRecommendationsStyles.recommendationItem}
          >
            <div
              className={learningRecommendationsStyles.recommendationContent}
            >
              <div className={learningRecommendationsStyles.iconContainer}>
                <Icon icon={rec.icon} size={16} />
              </div>
              <div className={learningRecommendationsStyles.content}>
                <div className={learningRecommendationsStyles.header}>
                  <Text variant="h5">{rec.title}</Text>
                  <Badge
                    variant={getPriorityVariant(rec.priority) as any}
                    size="sm"
                  >
                    {rec.priority}
                  </Badge>
                </div>
                <Text>{rec.description}</Text>
                <div className={learningRecommendationsStyles.timeInfo}>
                  <Icon icon={Clock} size={12} />
                  <Text size="sm">{rec.estimatedTime}</Text>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
