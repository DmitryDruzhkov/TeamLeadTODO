import { TodoStates } from './constants';
import { TodoItem } from './interfaces';

export const createTask = (description: string): TodoItem => {
  return {
    id: new Date().getTime(),
    description,
    state: TodoStates.IN_PROGRESS,
    subtasks: [],
    type: {
      name: '',
      color: ''
    },
  };
}