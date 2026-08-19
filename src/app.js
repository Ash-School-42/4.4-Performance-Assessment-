import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, input]);
      setInput("");
    }
  };

  const removeTodo = (indexToRemove) => {
    setTodos(
      todos.filter((todo, index) => index !== indexToRemove)
    );
  };

  return (
    <div>
      <h1>Todo List</h1>

      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="Enter a todo"
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTodo(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;