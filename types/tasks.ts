export interface Subtask {
  name: string;
  status: "pending" | "inprogress" | "completed";
  completedPercentage: number;
  timeLeft: number;
}

export interface Task {
  name: string;
  subText?: string;
  status: "pending" | "inprogress" | "completed";
  tasks?: Subtask[];
  completedPercentage?: number;
  timeLeft?: number;
}
