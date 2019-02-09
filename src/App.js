import React, { useState } from 'react';

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
      </div>
    </div>
  )
}

export default App;
