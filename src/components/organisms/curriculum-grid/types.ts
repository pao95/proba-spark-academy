export interface Topic {
  id: string;
  title: string;
  description: string;
  duration: number;
  type: "theory" | "exercise" | "assessment";
  isCompleted: boolean;
  isLocked: boolean;
}

export interface Unit {
  id: number;
  title: string;
  description: string;
  progress: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  topics: Topic[];
}
