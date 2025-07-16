import { Clock, CheckCircle, XCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Activity } from "./types";
import { recentActivityStyles } from "./styles";
import { Card, Icon, Text } from "@/components/atoms";

export const RecentActivity = () => {
  const { t } = useTranslation();

  const activities: Activity[] = [
    {
      id: 1,
      type: "success",
      text: t("recentActivity.completedExercise"),
      time: t("recentActivity.hoursAgo", { count: 2 }),
    },
    {
      id: 2,
      type: "error",
      text: t("recentActivity.finishedTopic"),
      time: t("recentActivity.daysAgo", { count: 1 }),
    },
    {
      id: 3,
      type: "success",
      text: t("recentActivity.achievedMilestone"),
      time: t("recentActivity.daysAgo", { count: 2 }),
    },
  ];

  return (
    <Card className={recentActivityStyles.base}>
      <Text variant="h4" className={recentActivityStyles.title}>
        {t("recentActivity.title")}
      </Text>

      <div className={recentActivityStyles.activitiesContainer}>
        {activities.map((activity) => (
          <div key={activity.id} className={recentActivityStyles.activityItem}>
            {activity.type === "success" ? (
              <Icon
                icon={CheckCircle}
                className={recentActivityStyles.activityIcon.success}
                size={16}
              />
            ) : (
              <Icon
                icon={XCircle}
                className={recentActivityStyles.activityIcon.error}
                size={16}
              />
            )}
            <div className={recentActivityStyles.activityContent}>
              <Text size="sm" className={recentActivityStyles.activityText}>
                {activity.text}
              </Text>
              <div className={recentActivityStyles.timeInfo}>
                <Icon
                  icon={Clock}
                  size={12}
                  className={recentActivityStyles.timeIcon}
                />
                <Text size="xs">{activity.time}</Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
