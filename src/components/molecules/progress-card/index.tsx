import { TrendingUp, Award, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { progressCardStyles } from "./styles";
import { Card, Icon, Text, ProgressBar } from "@/components/atoms";

export const ProgressCard = () => {
  const { t } = useTranslation();

  return (
    <Card variant="default" padding="lg">
      <Text variant="h4">{t("progressCard.overallProgress")}</Text>

      <div className={progressCardStyles.statsContainer}>
        <div className={progressCardStyles.statItem}>
          <div className={progressCardStyles.statLeft}>
            <Icon icon={TrendingUp} size={16} />
            <Text size="sm">{t("progressCard.completedTopics")}</Text>
          </div>
          <Text size="sm">12/20</Text>
        </div>

        <div className={progressCardStyles.statItem}>
          <div className={progressCardStyles.statLeft}>
            <Icon icon={Award} size={16} />
            <Text size="sm">{t("progressCard.streakDays")}</Text>
          </div>
          <Text size="sm">156</Text>
        </div>

        <div className={progressCardStyles.statItem}>
          <div className={progressCardStyles.statLeft}>
            <Icon icon={Target} size={16} />
            <Text size="sm">{t("progressCard.accuracy")}</Text>
          </div>
          <Text size="sm">87%</Text>
        </div>
      </div>

      <div className={progressCardStyles.progressSection}>
        <ProgressBar value={60} size="sm" />
        <Text size="sm">60% {t("general.complete")}</Text>
      </div>
    </Card>
  );
};
