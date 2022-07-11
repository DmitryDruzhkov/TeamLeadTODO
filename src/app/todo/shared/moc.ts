import { TodoItem } from './interfaces';

export const todoItemsMock: TodoItem[] = [
  {
    id: 0,
    description: 'задача 1',
    complited: false,
    subtasks: [],
  }
]

export const closedTodoItemsMock: TodoItem[] = [
  {
    id: 1,
    description: 'задача 2',
    complited: true,
    subtasks: [],
  }
]
