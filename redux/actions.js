import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "./actionTypes";

export const addTodo = (task) => ({
  type: ADD_TODO,
  payload: {
    task,
  },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

export const editTodo = (id, task) => ({
  type: EDIT_TODO,
  payload: {
    id,
    task,
  },
});
