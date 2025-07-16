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
    <Card className={mistakeAnalysisStyles.base}>
      <div className={mistakeAnalysisStyles.title}>
        <Icon
          icon={AlertTriangle}
          className={mistakeAnalysisStyles.titleIcon}
          size={20}
        />
        <Text variant="h3">{t("mistakeAnalysis.title")}</Text>
      </div>

      <div className={mistakeAnalysisStyles.mistakesContainer}>
        {commonMistakes.map((mistake, index) => (
          <div key={index} className={mistakeAnalysisStyles.mistakeItem}>
            <div className={mistakeAnalysisStyles.mistakeContent}>
              <Text
                variant="h5"
                className={mistakeAnalysisStyles.mistakeConcept}
              >
                {mistake.concept}
              </Text>
              <Text className={mistakeAnalysisStyles.mistakeErrors}>
                {mistake.errors} {t("mistakeAnalysis.commonMistakes")}
              </Text>
            </div>
            <Badge
              variant={
                mistake.improvement.startsWith("+") ? "success" : "error"
              }
              size="sm"
              className={mistakeAnalysisStyles.improvementBadge.base}
            >
              <Icon
                icon={TrendingDown}
                size={12}
                className={
                  mistake.improvement.startsWith("+") ? "rotate-180" : ""
                }
              />
              <Text size="sm">{mistake.improvement}</Text>
            </Badge>
          </div>
        ))}
      </div>

      <div className={mistakeAnalysisStyles.recommendationSection}>
        <Text
          variant="h5"
          className={mistakeAnalysisStyles.recommendationTitle}
        >
          {t("mistakeAnalysis.improvementAreas")}
        </Text>
        <Text className={mistakeAnalysisStyles.recommendationText}>
          {t("mistakeAnalysis.practiceMore")}
        </Text>
      </div>
    </Card>
  );
};
