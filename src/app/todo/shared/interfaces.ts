export interface TodoType {
  name: string;
  color: string; 
}

export interface TodoItem {
  id: number;
  description: string;
  complited: boolean;
  subtasks: TodoItem[];
  type: TodoType;
}