import { TrendingUp, Award, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { progressCardStyles } from "./styles";
import { Card, Icon, Text, ProgressBar } from "@/components/atoms";

export const ProgressCard = () => {
  const { t } = useTranslation();

  return (
    <Card className={progressCardStyles.base}>
      <Text variant="h4" className={progressCardStyles.title}>
        {t("progressCard.overallProgress")}
      </Text>

      <div className={progressCardStyles.statsContainer}>
        <div className={progressCardStyles.statItem}>
          <div className={progressCardStyles.statLeft}>
            <Icon
              icon={TrendingUp}
              className={progressCardStyles.statIcon.trending}
              size={16}
            />
            <Text size="sm" className={progressCardStyles.statLabel}>
              {t("progressCard.completedTopics")}
            </Text>
          </div>
          <Text size="sm" className={progressCardStyles.statValue}>
            12/20
          </Text>
        </div>

        <div className={progressCardStyles.statItem}>
          <div className={progressCardStyles.statLeft}>
            <Icon
              icon={Award}
              className={progressCardStyles.statIcon.award}
              size={16}
            />
            <Text size="sm" className={progressCardStyles.statLabel}>
              {t("progressCard.streakDays")}
            </Text>
          </div>
          <Text size="sm" className={progressCardStyles.statValue}>
            156
          </Text>
        </div>

        <div className={progressCardStyles.statItem}>
          <div className={progressCardStyles.statLeft}>
            <Icon
              icon={Target}
              className={progressCardStyles.statIcon.target}
              size={16}
            />
            <Text size="sm" className={progressCardStyles.statLabel}>
              {t("progressCard.accuracy")}
            </Text>
          </div>
          <Text size="sm" className={progressCardStyles.statValue}>
            87%
          </Text>
        </div>
      </div>

      <div className={progressCardStyles.progressSection}>
        <ProgressBar
          value={60}
          size="sm"
          className={progressCardStyles.progressBar.container}
        />
        <Text size="sm" className={progressCardStyles.progressText}>
          60% {t("general.complete")}
        </Text>
      </div>
    </Card>
  );
};
