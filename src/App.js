import React, { useState, useEffect } from 'react'
import "./App.css";
import Form from './components/Form'
import TodoList from './components/TodoList'


function App() {
  const [inputText, setinputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("")
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(() => {
    filterHander();
  }, [todos, status]);

  const filterHander = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))

      default:
        setFilteredTodos(todos);
        break;
    }
  }


  return (
    <div className="App">
      <header>
        <h1> no pain no gain!</h1>
      </header>
      <Form todos={todos} setTodos={setTodos} setinputText={setinputText} inputText={inputText}
        setStatus={setStatus}

      />
      <TodoList todos={todos} setTodos={setTodos} inputText={inputText}
        filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
