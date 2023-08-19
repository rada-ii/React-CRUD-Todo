import { useState } from "react";

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    if (text.trim() !== "") {
      updateTodo(todo.id, text);
      setIsEditing(false);
    }
  };

  return (
    <div className="one-todo">
      {isEditing ? (
        <>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="update"
          />
          <button onClick={handleUpdate} className="btn">
            Update
          </button>
        </>
      ) : (
        <>
          <p className="txt">{text}</p>
          <div className="btns">
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
