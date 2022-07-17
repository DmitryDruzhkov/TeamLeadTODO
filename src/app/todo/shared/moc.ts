import { TodoItem } from './interfaces';

export const todoItemsMock: TodoItem[] = [
  {
    id: 0,
    description: 'задача 1',
    complited: false,
    subtasks: [],
    type: {
      name: 'Команда',
      color: 'red',
    },
  }
]

export const historyTodoItemsMock: TodoItem[] = [
  {
    id: 1,
    description: 'задача 2',
    complited: true,
    subtasks: [],
    type: {
      name: 'Проект',
      color: 'blue'
    },
  }
]

export const backlogTodoItemsMock: TodoItem[] = [
  {
    id: 3,
    description: 'задача 2',
    complited: true,
    subtasks: [],
    type: {
      name: 'Личное',
      color: 'green'
    },
  }
]