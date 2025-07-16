export interface Topic {
  id: string;
  title: string;
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}

export interface Exercise {
  id: number;
  type: "multiple-choice" | "true-false" | "open-ended";
  question: string;
  options?: string[];
  correctAnswer: number | boolean | string;
  explanation: string;
}
