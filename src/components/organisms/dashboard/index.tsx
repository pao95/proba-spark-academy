import { useTranslation } from "react-i18next";
import { ProgressCard } from "@/components/molecules/progress-card";
import { TopicCard } from "@/components/molecules/topic-card";
import { RecentActivity } from "@/components/molecules/recent-activity";
import { QuickStats } from "@/components/molecules/quick-stats";
import { Topic } from "./types";
import { dashboardStyles } from "./styles";

export const Dashboard = () => {
  const { t } = useTranslation();

  const recentTopics: Topic[] = [
    {
      id: 1,
      title: "Probability Distributions",
      progress: 75,
      lastStudied: "2 days ago",
    },
    {
      id: 2,
      title: "Hypothesis Testing",
      progress: 45,
      lastStudied: "1 week ago",
    },
    {
      id: 3,
      title: "Descriptive Statistics",
      progress: 90,
      lastStudied: "3 days ago",
    },
  ];

  return (
    <div className={dashboardStyles.base}>
      <div className={dashboardStyles.statsGrid}>
        <QuickStats />
      </div>

      <div className={dashboardStyles.mainGrid}>
        <div className={dashboardStyles.leftColumn}>
          <h2 className={dashboardStyles.sectionTitle}>
            {t("dashboard.continueLearning")}
          </h2>
          <div className={dashboardStyles.topicsContainer}>
            {recentTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </div>

        <div className={dashboardStyles.rightColumn}>
          <h2 className={dashboardStyles.sectionTitle}>
            {t("dashboard.yourProgress")}
          </h2>
          <ProgressCard />
          <div className={dashboardStyles.progressSection}>
            <RecentActivity />
          </div>
        </div>
      </div>
    </div>
  );
};
