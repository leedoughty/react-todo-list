import React, { useState } from 'react';

function Todo({ todo, index }) {
  return(
    <div className="todo">
      { todo.text }
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for dinner',
      isCompleted: false
    },
    {
      text: 'Build cool todo app',
      isCompleted: false
    }
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}/>
        ))}
      </div>
    </div>
  )
}

export default App;
