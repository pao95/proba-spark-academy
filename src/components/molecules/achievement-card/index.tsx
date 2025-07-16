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
    <Card className={achievementCardStyles.base}>
      <Text variant="h3" className={achievementCardStyles.title}>
        {t("achievementCard.achievement")}
      </Text>
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
              <Icon
                icon={achievement.icon}
                className={
                  achievement.earned
                    ? achievementCardStyles.icon.earned
                    : achievementCardStyles.icon.locked
                }
                size={20}
              />
            </div>
            <div className={achievementCardStyles.content}>
              <Text
                variant="h5"
                className={
                  achievement.earned
                    ? achievementCardStyles.achievementTitle.earned
                    : achievementCardStyles.achievementTitle.locked
                }
              >
                {achievement.title}
              </Text>
              <Text
                size="sm"
                className={
                  achievement.earned
                    ? achievementCardStyles.achievementDescription.earned
                    : achievementCardStyles.achievementDescription.locked
                }
              >
                {achievement.description}
              </Text>
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
