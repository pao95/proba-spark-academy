import { BookOpen } from "lucide-react";
import { TheoryBlockProps } from "./types";
import { theoryBlockStyles } from "./styles";
import { Card, Icon, Text } from "@/components/atoms";

export const TheoryBlock = ({ title, content }: TheoryBlockProps) => {
  return (
    <Card variant="default" padding="lg">
      <div className={theoryBlockStyles.header}>
        <Icon icon={BookOpen} size={20} />
        <Text variant="h3">{title}</Text>
      </div>
      <Text>{content}</Text>
    </Card>
  );
};
