import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import Navbar from './components/Navbar';

function App() {
  const [inputText, setInputtext] = useState('');
  const[todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const[fillteTodos, SetFilteredTodos]= useState([]);


  useEffect(()=>{
    filterHadler()
  },[todos, status])

  const filterHadler=()=>{
    switch(status){
      case "Completed":
        SetFilteredTodos(todos.filter((todo)=> todo.completed === true));
        break;
      case "unCompleted":
          SetFilteredTodos(todos.filter((todo)=> todo.completed === false));
          break;
      default:
        SetFilteredTodos(todos);    
    }
  }

  return (
    
    <div>
       <Navbar/>
      <h1> TODO List</h1>
      <Form todos={todos} setTodos={setTodos} setInputtext={setInputtext} 
      setStatus = {setStatus} inputText={inputText}/>
      <TodoList
       todos ={todos}
       setTodos={setTodos}
       fillteTodos={fillteTodos}
        />   
    </div>
    
  );
}

export default App;
