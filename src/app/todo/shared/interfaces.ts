export interface TodoItem {
  id: number;
  description: string;
  complited: boolean;
  subtasks: TodoItem[]
}