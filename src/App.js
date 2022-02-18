import React, { useState, useEffect } from 'react'

import './Styles.css';

import Input from '../src/components/Input.js';
import ToDoList from '../src/components/TodoList'

function App() {

  //? set the input text in state starting with an empty string
  const [inputText, setInputText] = useState("")
  //? set todos in state, which is an empty array of objects
  const [todos, setTodos] = useState([])
  //? setStatus of select dropdown in state so that i can filter based on the the options value which is delared in input.js
  const [status, setStatus] = useState('all')
  //? create state for filtering options based on the values attached the the select options
  const [filteredTodos, setFilteredTodos] = useState([])

  //? useEffect to get todos saved in local storge on first mount and render as setTodos state.

  useEffect(() => {
    getLocalTodos()
  }, [])

  //? useEffect to run filter function and update state when todos change and the status - all, complete, uncompleted.

  //?Linter Error caused by calling a function filterhandler in use effect instead of writing the function in the useEffect block. 

  useEffect(() => {
    filterHandler()
    saveLocalTodos()
  }, [todos, status])

  //? creating a function to handle the select drop down and filter according to the status - option-value. 

  // const filterHandler = () => {
  //   switch (status) {
  //     case 'complete':
  //       setFilteredTodos(todos.filter(todo => todo.completed === true))
  //       break;
  //     case 'uncompleted':
  //       setFilteredTodos(todos.filter(todo => todo.completed === false))
  //       break;
  //     default:
  //       setFilteredTodos(todos)
  //       break;
  //   }
  // }

  //? if statement as an alterative to the switch statement above for practice. needs work on the completed filter functionality... 
  //? set filtered todso in state as an empty array. 
  //? add the conditions to check against and then return the filtered todos based on the 'status' and boolean completed.

  const filterHandler = () => {

    if (status === 'uncompleted') {
      setFilteredTodos(todos.filter(todo => todo.completed === false))
    }
    if (status === 'complete') {
      setFilteredTodos(todos.filter(todo => todo.completed === true))
    }
    if (status === 'all') {
      setFilteredTodos(todos)
    }
  }

  //? save the todo to local storage for access after page refresh.

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  //? get the todos save in local storgae. 
  //? check to see if todos are already in localstorage, if not then set todos to an empty array and stringify for storage. 
  //? if there are todos then parse them from json and setTodos in state. 

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal)
    }

  }

  return (
    <div className="App">
      <header>
        <h1 className="main--title">Todo List</h1>
      </header>
      <main>
        <Input
          setInputText={setInputText}
          inputText={inputText}
          setTodos={setTodos}
          todos={todos}
          setStatus={setStatus}
          status={status}
        />

        <ToDoList
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />
      </main>
    </div>
  );
}

export default App;


//? App is the parent component
//? Input is a child of App
//? ToDoList is a child of App
//? Todo is a child of ToDoList

