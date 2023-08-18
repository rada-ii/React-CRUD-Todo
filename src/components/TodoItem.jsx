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

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleUpdate}>Update</button>
        </div>
      ) : (
        <div className="one-todo">
          <p className="txt">{text}</p>
          <div className="btns">
            <button onClick={handleEditClick}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
