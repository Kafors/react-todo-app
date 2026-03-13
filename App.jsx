import { useState } from "react"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Зробити практичну" },
    { id: 3, text: "Завантажити код на GitHub" }
  ])

  const [newTodo, setNewTodo] = useState("")

  const addTodo = () => {
    if(newTodo.trim() === "") return

    const newTask = {
      id: Date.now(),
      text: newTodo
    }

    setTodos([...todos, newTask])
    setNewTodo("")
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="app">

      <h1>Список задач</h1>

      <div className="input-block">
        <input
          type="text"
          placeholder="Нова задача..."
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <button onClick={addTodo}>
          Додати
        </button>
      </div>

      <TodoList todos={todos} deleteTodo={deleteTodo}/>

    </div>
  )
}

export default App