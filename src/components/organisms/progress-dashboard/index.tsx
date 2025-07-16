import { useTranslation } from "react-i18next";
import { ProgressChart } from "@/components/molecules/progress-chart";
import { AchievementCard } from "@/components/molecules/achievement-card";
import { MistakeAnalysis } from "@/components/molecules/mistake-analysis";
import { LearningRecommendations } from "@/components/molecules/learning-recommendations";
import { progressDashboardStyles } from "./styles";

export const ProgressDashboard = () => {
  const { t } = useTranslation();

  return (
    <div className={progressDashboardStyles.container}>
      <div className={progressDashboardStyles.header}>
        <h1 className={progressDashboardStyles.title}>
          {t("progressDashboard.overallProgress")}
        </h1>
        <p className={progressDashboardStyles.subtitle}>
          {t("progressDashboard.overallProgress")}
        </p>
      </div>

      <div className={progressDashboardStyles.grid}>
        <div className={progressDashboardStyles.leftColumn}>
          <ProgressChart />
          <MistakeAnalysis />
        </div>

        <div className={progressDashboardStyles.rightColumn}>
          <AchievementCard />
          <LearningRecommendations />
        </div>
      </div>
    </div>
  );
};
