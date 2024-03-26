import { TodoCreate, ToDoDisplay, ThemeBtn } from "./components"
import { useState, useEffect } from "react"
import { ThemeContextProvider } from "./contexts/ThemeContext"
import { TodoContextProvider } from "./contexts/TodoContext"

export default function App() {
  const [themeMode, setThemeMode] = useState('light')
  const lightMode = () => setThemeMode('light')
  const darkMode = () => setThemeMode('dark')
  const [todos, setTodos] = useState([])
  const createTodo = (id, content) => setTodos(prev => [...prev, { id, content, isChecked: false }])
  const checkTodo = (id, isChecked) => setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, isChecked } : todo))
  const editTodo = (id, content) => setTodos(prev => prev.map(todo => todo.id === id ? { ...todo, content } : todo))
  const deleteTodo = (id) => setTodos(prev => prev.filter(todo => todo.id !== id))
  const moveUp = (id) => {
    const idx = todos.findIndex(todo => todo.id === id)
    if (idx === 0) return
    const todo = todos.at(idx)
    const newTodos = todos.filter(todo => todo.id !== id)
    newTodos.splice(idx - 1, 0, todo)
    setTodos(newTodos)
  }

  useEffect(() => {
    const root = document.querySelector('html')
    root.classList.remove('dark', 'light')
    root.classList.add(themeMode)
  }, [themeMode])

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length) setTodos(todos)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <ThemeContextProvider value={{ themeMode, darkMode, lightMode }}>
      <TodoContextProvider value={{ todos, createTodo, checkTodo, editTodo, deleteTodo, moveUp }}>
        <div className="transition duration-500 w-full min-h-screen bg-neutral-200 dark:bg-neutral-800 flex justify-center">
          <div className="w-3/4 my-20">
            <TodoCreate />
            <div className="mb-5 w-full">
              <ul className="py-5 dark:text-neutral-200 list-outside list-decimal flex flex-col gap-5">
                {todos.map(todo => (
                  <div key={todo.id} className={`select-none flex items-center justify-between p-5 rounded-xl transition duration-500
                  ${todo.isChecked ? 'bg-green-300 dark:bg-green-800' : 'bg-red-300 dark:bg-red-800'} gap-10`}
                  >
                    <ToDoDisplay todo={todo} />
                  </div>
                ))}
              </ul>
            </div>
            <ThemeBtn />
          </div>
        </div>
      </TodoContextProvider>
    </ThemeContextProvider>
  )
}
