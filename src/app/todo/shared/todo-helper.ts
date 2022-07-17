import { TodoItem } from './interfaces';

export const createTask = (description: string): TodoItem => {
  return {
    id: new Date().getTime(),
    description,
    complited: false,
    subtasks: [],
    type: {
      name: '',
      color: ''
    },
  };
}