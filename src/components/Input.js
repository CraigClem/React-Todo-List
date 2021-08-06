import React from 'react'

//?setInputText is passed as a prop from App.js so this file can access it.

function Input({ setInputText, inputText, todos, setTodos, setStatus }) {


  //?Function to handle the users Input. 

  const InputTextHandler = (e) => {
    setInputText(e.target.value)
  }
  //? Function to hadle the submission of the todo on click.

  const SubmitTodoHandler = (e) => {
    //? e.prevent stops form submitting and clearing data
    e.preventDefault()
    //? update todo array by spreading existing todos and then add any new todos as an Object. 
    setTodos([...todos,
    {
      id: Math.floor(Math.random() * 100),
      text: inputText,
      completed: false,
      date: new Date(),
    }
    ])
    //?set the input text back to an empty string on submit.requires a value to be attached the the input set to inputText
    setInputText("");
  }

  const StatusHandler = (e) => {
    console.log(e.target.value)
    setStatus(e.target.value)
  }

  return (
    <form>
      {/*//?add a value attribute of {inputText} which is an empty string so that the UI also updates on submit*/}.
      <input
        type="text"
        className="todo-input"
        value={inputText}
        onChange={InputTextHandler}>
      </input>
      <button
        onClick={SubmitTodoHandler}
        type="submit"
        className="todo-btn">
        ➕
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={StatusHandler}>
          <option value="all">All</option>
          <option value="complete">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form >
  )
}

export default Input