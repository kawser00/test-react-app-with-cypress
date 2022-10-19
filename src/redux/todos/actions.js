import { ADD_TODO, TOGGLED, DELETE_TODO, ALL_COMPLETED, CLEAR_COMPLETED } from "./actionTypes";

export const addTodo = (todoText) => {
  return {
    type: ADD_TODO,
    payload: todoText
  }
}

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId
  }
}

export const deleteTodo = (todoId) => {
  return {
    type: DELETE_TODO,
    payload: todoId
  }
}

export const allCompleted = () => {
  return {
    type: ALL_COMPLETED
  }
}

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  }
}