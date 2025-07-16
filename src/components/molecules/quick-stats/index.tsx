import { BookOpen, Target, TrendingUp, Award } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Stat } from "./types";
import { quickStatsStyles } from "./styles";
import { Card, Icon, Text } from "@/components/atoms";

export const QuickStats = () => {
  const { t } = useTranslation();

  const stats: Stat[] = [
    {
      icon: BookOpen,
      label: t("quickStats.totalTopics"),
      value: "12",
      color: "bg-blue-500",
    },
    {
      icon: Target,
      label: t("quickStats.completedTopics"),
      value: "156",
      color: "bg-green-500",
    },
    {
      icon: TrendingUp,
      label: t("quickStats.currentStreak"),
      value: "87%",
      color: "bg-yellow-500",
    },
    {
      icon: Award,
      label: t("quickStats.averageAccuracy"),
      value: "8",
      color: "bg-purple-500",
    },
  ];

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index} variant="default" padding="md">
          <div className={quickStatsStyles.container}>
            <div className={quickStatsStyles.content}>
              <Text size="sm">{stat.label}</Text>
              <Text variant="h5">{stat.value}</Text>
            </div>
            <div className={`${quickStatsStyles.iconContainer} ${stat.color}`}>
              <Icon icon={stat.icon} size={24} />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
