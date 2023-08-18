import { useState } from "react";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Todo 1", completed: false },
    { id: 2, text: "Todo 2", completed: false },
  ]);
  const [newTodoText, setNewTodoText] = useState("");

  // const toggleComplete = (id) => {};

  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
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
            onChange={(e) => setNewTodoText(e.target.value)}
            placeholder="New Todo ..."
          />
          <button onClick={addTodo}>Add Todo</button>
        </div>
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
