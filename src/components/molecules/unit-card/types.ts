export interface Unit {
  id: number;
  title: string;
  description: string;
  topics: string[];
  progress: number;
  difficulty: string;
  estimatedTime: string;
}

export interface UnitCardProps {
  unit: Unit;
}
