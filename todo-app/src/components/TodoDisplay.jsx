import { useState, useId } from "react";
import useTodo from "../contexts/TodoContext";

function ToDoDisplay({ todo }) {
  const id = useId()
  const { checkTodo, editTodo, deleteTodo, moveUp } = useTodo()
  const [isEditMode, setIsEditMode] = useState({ input: false, button: todo.isChecked })
  const [todoContent, setTodoContent] = useState(todo.content)
  const handleEdit = () => {
    editTodo(todo.id, todoContent)
    setIsEditMode(prev => ({ ...prev, input: false }))
  }
  const handleCheck = (e) => {
    checkTodo(todo.id, e.target.checked)
    setIsEditMode(prev => ({ ...prev, button: e.target.checked }))
  }

  return (
    <>

      <div className="flex-1 flex gap-7 items-center">
        <label htmlFor={id} className="mt-2 inline-flex cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <input type="checkbox" name="isChecked" id={id}
            onChange={handleCheck} checked={todo.isChecked} className="sr-only" />
        </label>

        <li className="text-xl w-full" style={todo.isChecked ? { textDecoration: 'line-through', opacity: '0.5' } : {}}>
          {isEditMode.input ?
            <input type="text" autoFocus onBlur={handleEdit} onChange={(e) => setTodoContent(e.target.value)}
              value={todoContent} className="bg-transparent text-2xl outline-none  p-2 w-full" /> :
            <p className="text-2xl break-all">{todo.content}</p>
          }
        </li>
      </div >

      <div className="flex gap-2">
        <button onClick={() => setIsEditMode(prev => ({ ...prev, input: !prev.input }))}
          disabled={isEditMode.button} style={todo.isChecked ? { opacity: 0.5 } : {}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
          </svg>
        </button>

        <button onClick={() => deleteTodo(todo.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
          </svg>
        </button>

        <button onClick={() => moveUp(todo.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>
    </>
  )
}

export default ToDoDisplay;