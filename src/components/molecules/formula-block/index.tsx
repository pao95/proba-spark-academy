import { Calculator } from "lucide-react";
import { FormulaBlockProps } from "./types";
import { formulaBlockStyles } from "./styles";
import { Card, Icon, Text } from "@/components/atoms";

export const FormulaBlock = ({
  title,
  formula,
  explanation,
}: FormulaBlockProps) => {
  return (
    <Card variant="default" padding="lg">
      <div className={formulaBlockStyles.header}>
        <Icon icon={Calculator} size={20} />
        <Text variant="h4">{title}</Text>
      </div>
      <div className={formulaBlockStyles.formulaContainer}>
        <code className={formulaBlockStyles.formula}>{formula}</code>
      </div>
      <Text>{explanation}</Text>
    </Card>
  );
};
