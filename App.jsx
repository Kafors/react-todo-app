import TodoList from "./components/TodoList"

function App() {

  const todos = [
    { id: 1, text: "Вивчити React" },
    { id: 2, text: "Зробити практичну роботу" },
    { id: 3, text: "Завантажити код на GitHub" }
  ]

  return (
    <div className="app">
      <h1>Мій список задач</h1>
      <TodoList todos={todos} />
    </div>
  )
}

export default App