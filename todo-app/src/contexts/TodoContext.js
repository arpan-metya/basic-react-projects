import { createContext, useContext } from 'react';

export const TodoContext = createContext({
  todos: [],
  createTodo: () => { },
  checkTodo: () => { },
  editTodo: () => { },
  deleteTodo: () => { },
  moveUp: () => { }
})

export const TodoContextProvider = TodoContext.Provider

export default function useTodo() {
  return useContext(TodoContext)
}