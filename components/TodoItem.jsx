import { useState } from "react"

function TodoItem({ todo, deleteTodo, editTodo }) {

  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(todo.text)

  return (
    <li className="todo-item">

      {isEditing ? (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={() => {
            editTodo(todo.id, text)
            setIsEditing(false)
          }}>
            Зберегти
          </button>
        </>
      ) : (
        <>
          {todo.text}
          <button onClick={() => setIsEditing(true)}>
            Редагувати
          </button>
        </>
      )}

      <button onClick={() => deleteTodo(todo.id)}>
        Видалити
      </button>

    </li>
  )
}

export default TodoItem
