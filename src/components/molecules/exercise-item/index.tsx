import { useState } from "react";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { ExerciseItemProps } from "./types";
import { exerciseItemStyles } from "./styles";
import {
  Card,
  Button,
  Icon,
  Text,
  Textarea,
  RadioButton,
} from "@/components/atoms";

export const ExerciseItem = ({ exercise }: ExerciseItemProps) => {
  const { t } = useTranslation();
  const [selectedAnswer, setSelectedAnswer] = useState<
    number | boolean | string | null
  >(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  const isCorrect = () => {
    if (exercise.type === "multiple-choice") {
      return selectedAnswer === exercise.correctAnswer;
    } else if (exercise.type === "true-false") {
      return selectedAnswer === exercise.correctAnswer;
    } else {
      return userAnswer
        .toLowerCase()
        .includes(exercise.correctAnswer.toString().toLowerCase());
    }
  };

  const renderQuestion = () => {
    switch (exercise.type) {
      case "multiple-choice":
        return (
          <div className={exerciseItemStyles.optionsContainer}>
            {exercise.options?.map((option, index) => (
              <div
                key={index}
                className={`${exerciseItemStyles.optionLabel.base} ${
                  selectedAnswer === index
                    ? exerciseItemStyles.optionLabel.selected
                    : exerciseItemStyles.optionLabel.unselected
                }`}
              >
                <RadioButton
                  name="answer"
                  value={index}
                  checked={selectedAnswer === index}
                  onChange={setSelectedAnswer}
                  className={exerciseItemStyles.radioInput}
                  label={<Text>{option}</Text>}
                />
              </div>
            ))}
          </div>
        );

      case "true-false":
        return (
          <div className={exerciseItemStyles.optionsContainer}>
            {[true, false].map((option) => (
              <div
                key={option.toString()}
                className={`${exerciseItemStyles.optionLabel.base} ${
                  selectedAnswer === option
                    ? exerciseItemStyles.optionLabel.selected
                    : exerciseItemStyles.optionLabel.unselected
                }`}
              >
                <RadioButton
                  name="answer"
                  value={option.toString()}
                  checked={selectedAnswer === option}
                  onChange={(value) => setSelectedAnswer(value === "true")}
                  className={exerciseItemStyles.radioInput}
                  label={
                    <Text>{option ? t("general.yes") : t("general.no")}</Text>
                  }
                />
              </div>
            ))}
          </div>
        );

      case "open-ended":
        return (
          <Textarea
            value={userAnswer}
            onChange={setUserAnswer}
            placeholder={t("exerciseInterface.answer")}
            className={exerciseItemStyles.textarea}
          />
        );

      default:
        return null;
    }
  };

  return (
    <Card variant="default" padding="lg">
      <div className={exerciseItemStyles.questionContainer}>
        <Text variant="h4">{exercise.question}</Text>
        {renderQuestion()}
      </div>

      {!showFeedback && (
        <Button
          onClick={handleSubmit}
          disabled={
            (exercise.type === "multiple-choice" && selectedAnswer === null) ||
            (exercise.type === "true-false" && selectedAnswer === null) ||
            (exercise.type === "open-ended" && !userAnswer.trim())
          }
          className={exerciseItemStyles.submitButton}
        >
          {t("exerciseInterface.submitAnswer")}
        </Button>
      )}

      {showFeedback && (
        <div
          className={`${exerciseItemStyles.feedbackContainer.base} ${
            isCorrect()
              ? exerciseItemStyles.feedbackContainer.correct
              : exerciseItemStyles.feedbackContainer.incorrect
          }`}
        >
          <div className={exerciseItemStyles.feedbackHeader}>
            {isCorrect() ? (
              <>
                <Icon
                  icon={CheckCircle}
                  className={exerciseItemStyles.feedbackIcon.correct}
                  size={20}
                />
                <Text className={exerciseItemStyles.feedbackTitle.correct}>
                  {t("exerciseInterface.correct")}
                </Text>
              </>
            ) : (
              <>
                <Icon
                  icon={XCircle}
                  className={exerciseItemStyles.feedbackIcon.incorrect}
                  size={20}
                />
                <Text className={exerciseItemStyles.feedbackTitle.incorrect}>
                  {t("exerciseInterface.incorrect")}
                </Text>
              </>
            )}
          </div>
          <div className={exerciseItemStyles.feedbackContent}>
            <Icon
              icon={AlertCircle}
              className={`${
                isCorrect()
                  ? exerciseItemStyles.feedbackIcon.correct
                  : exerciseItemStyles.feedbackIcon.incorrect
              } mt-0.5`}
              size={16}
            />
            <Text
              className={
                isCorrect()
                  ? exerciseItemStyles.feedbackExplanation.correct
                  : exerciseItemStyles.feedbackExplanation.incorrect
              }
            >
              {exercise.explanation}
            </Text>
          </div>
        </div>
      )}

      {showFeedback && (
        <Button
          variant="outline"
          onClick={() => {
            setSelectedAnswer(null);
            setUserAnswer("");
            setShowFeedback(false);
          }}
          className={exerciseItemStyles.resetButton}
        >
          {t("exerciseInterface.tryAgain")}
        </Button>
      )}
    </Card>
  );
};
