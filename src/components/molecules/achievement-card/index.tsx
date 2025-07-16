import { Award, Star, Target, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Achievement } from "./types";
import { achievementCardStyles } from "./styles";
import { Card, Icon, Text } from "@/components/atoms";

export const AchievementCard = () => {
  const { t } = useTranslation();

  const achievements: Achievement[] = [
    {
      icon: Award,
      title: t("achievementCard.achievement"),
      description: t("achievementCard.unlocked"),
      earned: true,
    },
    {
      icon: Star,
      title: t("achievementCard.achievement"),
      description: t("achievementCard.unlocked"),
      earned: true,
    },
    {
      icon: Target,
      title: t("achievementCard.achievement"),
      description: t("achievementCard.locked"),
      earned: false,
    },
    {
      icon: TrendingUp,
      title: t("achievementCard.achievement"),
      description: t("achievementCard.unlocked"),
      earned: true,
    },
  ];

  return (
    <Card variant="default" padding="lg">
      <Text variant="h3">{t("achievementCard.achievement")}</Text>
      <div className={achievementCardStyles.achievementsContainer}>
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className={`${achievementCardStyles.achievementItem.base} ${
              achievement.earned
                ? achievementCardStyles.achievementItem.earned
                : achievementCardStyles.achievementItem.locked
            }`}
          >
            <div
              className={`${achievementCardStyles.iconContainer.base} ${
                achievement.earned
                  ? achievementCardStyles.iconContainer.earned
                  : achievementCardStyles.iconContainer.locked
              }`}
            >
              <Icon icon={achievement.icon} size={20} />
            </div>
            <div className={achievementCardStyles.content}>
              <Text variant="h5">{achievement.title}</Text>
              <Text size="sm">{achievement.description}</Text>
            </div>
            {achievement.earned && (
              <div className={achievementCardStyles.starIcon}>
                <Icon icon={Star} size={16} />
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
};
