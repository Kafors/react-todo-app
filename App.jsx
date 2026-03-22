import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"

function App() {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  const API = "http://localhost:3000/todos"

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(data => setTodos(data))
  }, [])

  const addTodo = async () => {
    if (!newTodo.trim()) return

    const res = await fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: newTodo })
    })

    const data = await res.json()
    setTodos([...todos, data])
    setNewTodo("")
  }

  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, {
      method: "DELETE"
    })

    setTodos(todos.filter(t => t.id !== id))
  }

  const editTodo = async (id, newText) => {
    const res = await fetch(`${API}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title: newText })
    })

    const updated = await res.json()

    setTodos(todos.map(t => t.id === id ? updated : t))
  }

  return (
    <div className="app">

      <h1>Todo API App</h1>

      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Нова задача..."
      />

      <button onClick={addTodo}>Додати</button>

      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />

    </div>
  )
}

export default App
