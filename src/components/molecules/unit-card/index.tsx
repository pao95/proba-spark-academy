import { Clock, Lock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { UnitCardProps } from "./types";
import { unitCardStyles } from "./styles";
import {
  Card,
  Button,
  Badge,
  Icon,
  Text,
  ProgressBar,
} from "@/components/atoms";

export const UnitCard = ({ unit }: UnitCardProps) => {
  const { t } = useTranslation();

  const getDifficultyVariant = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "success";
      case "Intermediate":
        return "warning";
      case "Advanced":
        return "error";
      default:
        return "default";
    }
  };

  const isUnlocked = unit.progress > 0 || unit.id === 1;

  return (
    <Card
      className={isUnlocked ? unitCardStyles.unlocked : unitCardStyles.locked}
    >
      <div className="flex items-start justify-between mb-4">
        <Text variant="h5" className={unitCardStyles.title}>
          {unit.title}
        </Text>
        {!isUnlocked && (
          <Icon icon={Lock} className="text-gray-400" size={20} />
        )}
      </div>

      <Text className={unitCardStyles.description}>{unit.description}</Text>

      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <Badge variant={getDifficultyVariant(unit.difficulty) as any}>
            {t(`unitCard.${unit.difficulty.toLowerCase()}`)}
          </Badge>
          <div className={unitCardStyles.timeInfo}>
            <Icon icon={Clock} size={14} className={unitCardStyles.timeIcon} />
            <Text size="sm">{unit.estimatedTime}</Text>
          </div>
        </div>

        <div className={unitCardStyles.progressContainer}>
          <div className="flex items-center justify-between">
            <Text size="sm" className={unitCardStyles.progressLabel}>
              {t("general.progress")}
            </Text>
            <Text size="sm" className={unitCardStyles.progressValue}>
              {unit.progress}%
            </Text>
          </div>
          <ProgressBar
            value={unit.progress}
            size="sm"
            className={unitCardStyles.progressBar.container}
          />
        </div>

        <div className={unitCardStyles.topicsSection}>
          <Text size="sm" className={unitCardStyles.topicsLabel}>
            {t("unitCard.topicsCovered")}
          </Text>
          <div className={unitCardStyles.topicsContainer}>
            {unit.topics.slice(0, 3).map((topic, index) => (
              <Badge
                key={index}
                variant="secondary"
                size="sm"
                className={unitCardStyles.topicTag}
              >
                {topic}
              </Badge>
            ))}
            {unit.topics.length > 3 && (
              <Text size="sm" className={unitCardStyles.moreTopics}>
                +{unit.topics.length - 3} {t("unitCard.moreTopics")}
              </Text>
            )}
          </div>
        </div>
      </div>

      {isUnlocked && (
        <Button
          variant="primary"
          size="sm"
          className={unitCardStyles.actionButton}
        >
          {unit.progress > 0
            ? t("unitCard.continueLearning")
            : t("unitCard.startLearning")}
        </Button>
      )}
    </Card>
  );
};
