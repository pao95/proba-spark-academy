import { useState } from "react";
import { Upload, Send, Loader } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CustomExerciseInputProps } from "./types";
import { customExerciseInputStyles } from "./styles";
import {
  Card,
  Button,
  Icon,
  Text,
  Textarea,
  FileInput,
} from "@/components/atoms";

export const CustomExerciseInput = ({
  onSolutionGenerated,
}: CustomExerciseInputProps) => {
  const { t } = useTranslation();
  const [problemText, setProblemText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [solution, setSolution] = useState("");

  const handleTextSubmit = async () => {
    if (!problemText.trim()) return;

    setIsLoading(true);
    // Simulate API call to OpenAI
    setTimeout(() => {
      const newSolution = `AI Solution for: "${problemText}"\n\nStep 1: Identify the problem type\nThis appears to be a probability/statistics problem.\n\nStep 2: Apply relevant formulas\n[Mathematical solution would appear here]\n\nStep 3: Calculate the result\n[Detailed calculations would appear here]\n\nStep 4: Interpret the result\n[Explanation of what the result means in context]`;
      setSolution(newSolution);
      onSolutionGenerated?.(newSolution);
      setIsLoading(false);
    }, 2000);
  };

  const handleImageUpload = (files: FileList | null) => {
    const file = files?.[0];
    if (file) {
      // Simulate image processing
      console.log("Processing image:", file.name);
      setIsLoading(true);
      setTimeout(() => {
        const newSolution = `AI Solution from uploaded image:\n\nStep 1: Image analysis\nExtracted problem: [Problem text from image]\n\nStep 2: Problem identification\n[Type of statistical problem identified]\n\nStep 3: Solution approach\n[Methodology and formulas to use]\n\nStep 4: Detailed solution\n[Step-by-step solution process]\n\nStep 5: Final answer and interpretation\n[Final result with explanation]`;
        setSolution(newSolution);
        onSolutionGenerated?.(newSolution);
        setIsLoading(false);
      }, 3000);
    }
  };

  return (
    <div className={customExerciseInputStyles.container}>
      <Card variant="default" padding="lg">
        <Text variant="h3">{t("exerciseInterface.question")}</Text>
        <Text>{t("exerciseInterface.explanation")}</Text>

        <div className={customExerciseInputStyles.grid}>
          <div className={customExerciseInputStyles.section}>
            <Text
              variant="h4"
              className={customExerciseInputStyles.sectionTitle}
            >
              {t("exerciseInterface.question")}
            </Text>
            <Textarea
              value={problemText}
              onChange={setProblemText}
              placeholder={t("exerciseInterface.question")}
              className={customExerciseInputStyles.textarea}
            />
            <Button
              onClick={handleTextSubmit}
              disabled={!problemText.trim() || isLoading}
              className={customExerciseInputStyles.submitButton.base}
            >
              {isLoading ? (
                <Icon
                  icon={Loader}
                  className={customExerciseInputStyles.submitButton.icon}
                  size={18}
                />
              ) : (
                <Icon icon={Send} size={18} />
              )}
              <Text>
                {isLoading
                  ? t("general.loading")
                  : t("exerciseInterface.submitAnswer")}
              </Text>
            </Button>
          </div>

          <div className={customExerciseInputStyles.section}>
            <Text
              variant="h4"
              className={customExerciseInputStyles.sectionTitle}
            >
              {t("general.upload")}
            </Text>
            <div className={customExerciseInputStyles.uploadArea}>
              <Icon
                icon={Upload}
                className={customExerciseInputStyles.uploadIcon}
                size={48}
              />
              <Text className={customExerciseInputStyles.uploadText}>
                {t("general.upload")}
              </Text>
              <FileInput
                accept="image/*"
                onChange={handleImageUpload}
                className={customExerciseInputStyles.fileInput}
                id="image-upload"
              />
              <label
                htmlFor="image-upload"
                className={customExerciseInputStyles.uploadButton}
              >
                <Text>{t("general.select")}</Text>
              </label>
            </div>
          </div>
        </div>
      </Card>

      {solution && (
        <Card variant="default" padding="lg">
          <Text variant="h4">{t("exerciseInterface.solution")}</Text>
          <div className={customExerciseInputStyles.solutionContainer}>
            <pre className={customExerciseInputStyles.solutionText}>
              {solution}
            </pre>
          </div>
        </Card>
      )}
    </div>
  );
};
