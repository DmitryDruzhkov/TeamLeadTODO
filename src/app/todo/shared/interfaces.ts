import { TodoStates } from './constants';

export interface TodoType {
  name: string;
  color: string; 
}

export interface TodoItem {
  id: number;
  description: string;
  state: TodoStates;
  complitedDay?: number;
  subtasks: TodoItem[];
  type: TodoType;
}