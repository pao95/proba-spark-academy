export interface Exercise {
  id: number;
  type: "multiple-choice" | "true-false" | "open-ended";
  question: string;
  options?: string[];
  correctAnswer: number | boolean | string;
  explanation: string;
}

export interface ExerciseItemProps {
  exercise: Exercise;
}
