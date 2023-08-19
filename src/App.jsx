import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");
  const [emptyTodoError, setEmptyTodoError] = useState(false);

  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  const deleteTodo = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this todo?"
    );
    if (confirmDelete) {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }
  };

  const addTodo = () => {
    if (newTodoText.trim() !== "") {
      const newTodo = {
        id: todos.length + 1,
        text: newTodoText,
        completed: false,
      };
      setTodos((prev) => [...prev, newTodo]);
      setNewTodoText("");
      setEmptyTodoError(false);
    } else {
      setEmptyTodoError(true);
      setTimeout(() => {
        setEmptyTodoError(false);
      }, 2000);
    }
  };

  return (
    <div className="container">
      <div className="todo">
        <h1>CRUD Todo App</h1>
        <div className="add">
          <input
            type="text"
            value={newTodoText}
            onChange={(e) => {
              setNewTodoText(e.target.value);
              setEmptyTodoError(false);
            }}
            placeholder="New Todo ..."
          />
          <button onClick={addTodo} className="btn">
            Add Todo
          </button>
        </div>
        {emptyTodoError && (
          <p className="error">You cannot add an empty todo !</p>
        )}
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
