import { SET_TODO_INPUT, ADD_TODO, DELE_TODO, EDIT_TODO } from './constants';

export const setTodoInput = (payload) => ({
  type: SET_TODO_INPUT,
  payload
});

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload
});

export const deleTodo = (payload) => ({
  type: DELE_TODO,
  payload
});

export const editTodo = (payload) => ({
  type: EDIT_TODO,
  payload
});
