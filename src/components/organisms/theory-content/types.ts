export interface Topic {
  id: string;
  title: string;
}

export interface Unit {
  id: string;
  title: string;
  topics: Topic[];
}
