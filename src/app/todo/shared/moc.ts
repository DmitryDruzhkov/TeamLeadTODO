import { TodoStates } from './constants';
import { TodoItem } from './interfaces';

export const todoItemsMock: TodoItem[] = [
  {
    id: 0,
    description: 'задача 1',
    state: TodoStates.IN_PROGRESS,
    subtasks: [],
    type: {
      name: 'Команда',
      color: 'red',
    },
  },
  {
    id: 0,
    description: 'задача 4',
    state: TodoStates.COMPLITED,
    complitedDay: new Date().setHours(0, 0, 0, 0),
    subtasks: [],
    type: {
      name: 'Команда',
      color: 'red',
    },
  },
  {
    id: 1,
    description: 'задача 2',
    state: TodoStates.COMPLITED,
    complitedDay: new Date(new Date().setHours(0, 0, 0, 0)).setDate(new Date().getDate() - 1),
    subtasks: [],
    type: {
      name: 'Проект',
      color: 'blue'
    },
  },
  {
    id: 3,
    description: 'задача 3',
    state: TodoStates.BACKLOG,
    subtasks: [],
    type: {
      name: 'Личное',
      color: 'green'
    },
  }
]

export const historyTodoItemsMock: TodoItem[] = [
  {
    id: 1,
    description: 'задача 2',
    state: TodoStates.COMPLITED,
    complitedDay: new Date(new Date().setHours(0, 0, 0, 0)).setDate(new Date().getDate() - 1),
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
    description: 'задача 3',
    state: TodoStates.BACKLOG,
    subtasks: [],
    type: {
      name: 'Личное',
      color: 'green'
    },
  }
]