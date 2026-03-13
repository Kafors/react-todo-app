function TodoItem({ todo, deleteTodo }) {

  return (
    <li className="todo-item">

      {todo.text}

      <button
        className="delete-btn"
        onClick={() => deleteTodo(todo.id)}
      >
        Видалити
      </button>

    </li>
  )
}

export default TodoItem