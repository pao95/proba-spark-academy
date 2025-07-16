import { Lightbulb } from "lucide-react";
import { ExampleBlockProps } from "./types";
import { exampleBlockStyles } from "./styles";
import { Card, Icon, Text } from "@/components/atoms";

export const ExampleBlock = ({
  title,
  problem,
  solution,
}: ExampleBlockProps) => {
  return (
    <Card className={exampleBlockStyles.base}>
      <div className={exampleBlockStyles.header}>
        <Icon icon={Lightbulb} className={exampleBlockStyles.icon} size={20} />
        <Text variant="h4" className={exampleBlockStyles.title}>
          {title}
        </Text>
      </div>
      <div className={exampleBlockStyles.content}>
        <div className={exampleBlockStyles.section}>
          <Text variant="h5" className={exampleBlockStyles.sectionTitle}>
            Problem:
          </Text>
          <Text className={exampleBlockStyles.problemText}>{problem}</Text>
        </div>
        <div className={exampleBlockStyles.section}>
          <Text variant="h5" className={exampleBlockStyles.sectionTitle}>
            Solution:
          </Text>
          <pre className={exampleBlockStyles.solutionText}>{solution}</pre>
        </div>
      </div>
    </Card>
  );
};
