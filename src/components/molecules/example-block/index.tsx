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
    <Card variant="default" padding="lg">
      <div className={exampleBlockStyles.header}>
        <Icon icon={Lightbulb} size={20} />
        <Text variant="h4">{title}</Text>
      </div>
      <div className={exampleBlockStyles.content}>
        <div className={exampleBlockStyles.section}>
          <Text variant="h5">Problem:</Text>
          <Text>{problem}</Text>
        </div>
        <div className={exampleBlockStyles.section}>
          <Text variant="h5">Solution:</Text>
          <pre className={exampleBlockStyles.solutionText}>{solution}</pre>
        </div>
      </div>
    </Card>
  );
};
