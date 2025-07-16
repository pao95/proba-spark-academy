import { BookOpen } from "lucide-react";
import { TheoryBlockProps } from "./types";
import { theoryBlockStyles } from "./styles";
import { Card, Icon, Text } from "@/components/atoms";

export const TheoryBlock = ({ title, content }: TheoryBlockProps) => {
  return (
    <Card className={theoryBlockStyles.base}>
      <div className={theoryBlockStyles.header}>
        <Icon icon={BookOpen} className={theoryBlockStyles.icon} size={20} />
        <Text variant="h3" className={theoryBlockStyles.title}>
          {title}
        </Text>
      </div>
      <Text className={theoryBlockStyles.content}>{content}</Text>
    </Card>
  );
};
