import { ChevronRight, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TopicCardProps } from "./types";
import { topicCardStyles } from "./styles";
import { Card, Icon, Text, ProgressBar } from "@/components/atoms";

export const TopicCard = ({ topic }: TopicCardProps) => {
  const { t } = useTranslation();

  return (
    <Card className={topicCardStyles.base}>
      <div className={topicCardStyles.container}>
        <div className={topicCardStyles.content}>
          <Text variant="h5" className={topicCardStyles.title}>
            {topic.title}
          </Text>
          <div className={topicCardStyles.timeInfo}>
            <Icon icon={Clock} size={14} className={topicCardStyles.timeIcon} />
            <Text size="sm">
              {t("topicCard.lastStudied")} {topic.lastStudied}
            </Text>
          </div>
          <ProgressBar
            value={topic.progress}
            size="sm"
            className={topicCardStyles.progressBar.container}
          />
          <Text size="sm" className={topicCardStyles.progressText}>
            {topic.progress}% {t("general.complete")}
          </Text>
        </div>
        <Icon
          icon={ChevronRight}
          className={topicCardStyles.chevronIcon}
          size={20}
        />
      </div>
    </Card>
  );
};
