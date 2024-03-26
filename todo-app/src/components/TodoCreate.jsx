import { useState } from "react";
import useTodo from "../contexts/TodoContext";
import { v4 as uuid } from "uuid";

function TodoCreate() {
  const { createTodo } = useTodo()
  const [todo, setTodo] = useState('')
  const handleChange = (e) => setTodo(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    createTodo(uuid(), todo)
    setTodo('')
  }

  return (
    <div className="w-full mb-5">
      <form className="w-full flex" onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} className="flex-1 min-w-20 rounded-s-lg py-2 px-3 text-xl dark:text-white dark:bg-neutral-700" />
        <button className="py-2 px-3 bg-blue-600 text-white rounded-e-lg">Add</button>
      </form>
    </div>
  );
}

export default TodoCreate;