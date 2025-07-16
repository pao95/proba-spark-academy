import { AlertTriangle, TrendingDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Mistake } from "./types";
import { mistakeAnalysisStyles } from "./styles";
import { Card, Icon, Text, Badge } from "@/components/atoms";

export const MistakeAnalysis = () => {
  const { t } = useTranslation();

  const commonMistakes: Mistake[] = [
    { concept: "Probability Rules", errors: 8, improvement: "+15%" },
    { concept: "Normal Distribution", errors: 5, improvement: "+10%" },
    { concept: "Hypothesis Testing", errors: 12, improvement: "-5%" },
    { concept: "Confidence Intervals", errors: 3, improvement: "+25%" },
  ];

  return (
    <Card variant="default" padding="lg">
      <div className={mistakeAnalysisStyles.title}>
        <Icon icon={AlertTriangle} size={20} />
        <Text variant="h3">{t("mistakeAnalysis.title")}</Text>
      </div>

      <div className={mistakeAnalysisStyles.mistakesContainer}>
        {commonMistakes.map((mistake, index) => (
          <div key={index} className={mistakeAnalysisStyles.mistakeItem}>
            <div className={mistakeAnalysisStyles.mistakeContent}>
              <Text variant="h5">{mistake.concept}</Text>
              <Text>
                {mistake.errors} {t("mistakeAnalysis.commonMistakes")}
              </Text>
            </div>
            <Badge
              variant={
                mistake.improvement.startsWith("+") ? "success" : "error"
              }
              size="sm"
            >
              <Icon icon={TrendingDown} size={12} />
              <Text size="sm">{mistake.improvement}</Text>
            </Badge>
          </div>
        ))}
      </div>

      <div className={mistakeAnalysisStyles.recommendationSection}>
        <Text variant="h5">{t("mistakeAnalysis.improvementAreas")}</Text>
        <Text>{t("mistakeAnalysis.practiceMore")}</Text>
      </div>
    </Card>
  );
};
