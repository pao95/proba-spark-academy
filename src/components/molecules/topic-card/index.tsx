import { ChevronRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TopicCardProps } from "./types";
import { topicCardStyles } from "./styles";
import { Card, Icon, Text, ProgressBar } from "@/components/atoms";

export const TopicCard = ({ topic }: TopicCardProps) => {
  const { t } = useTranslation();

  return (
    <Card variant="default" padding="md">
      <div className={topicCardStyles.container}>
        <div className={topicCardStyles.content}>
          <Text variant="h5">{topic.title}</Text>
          <div className={topicCardStyles.timeInfo}>
            <Icon icon={Clock} size={14} />
            <Text size="sm">
              {t("topicCard.lastStudied")} {topic.lastStudied}
            </Text>
          </div>
          <ProgressBar value={topic.progress} size="sm" />
          <Text size="sm">
            {topic.progress}% {t("general.complete")}
          </Text>
        </div>
        <Icon icon={ChevronRight} size={20} />
      </div>
    </Card>
  );
};
