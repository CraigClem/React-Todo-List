import React from 'react'

//? {text} is deconstructed from the todo object which is passed down from the todo list component where I mapped over the todos array of objects.

//? Todo props recieved from todoList component.

function Todo({ text, todo, setTodos, id, filteredTodos, date }) {

  //? filter throug the todos and return all todos that do not match the elmement(el) id clicked on.

  const DeleteHandler = () => {
    setTodos(filteredTodos.filter((el) => el.id !== todo.id))
  }

  //? map ober the todos to access a single todo. If the el id and todo id are the same then retun the todo object with the completed key opposite to what id was set to. Otherwise just return the todos array of objects (el). 

  const CompleteHandler = () => {
    setTodos(filteredTodos.map((el) => {
      if (el.id === todo.id) {
        return {
          ...todo, completed: !todo.completed
        }
      }
      return el;
    }))
  }


  return (
    <div className="todo">
      {/* //?conditionally render the class of li using a ternary expression so that linethroigh is applied if completed === true*/}
      <li
        className={`todo-item ${todo.completed ? 'completed' : ""}  `}
        key={id}>
        {text}
        {date}
        <br />
        <hr />
      </li>
      <button className="check-btn" onClick={CompleteHandler}> ✅ </button>
      <button className="trash-btn" onClick={DeleteHandler}> 🗑 </button>
    </div>
  )
}

export default Todo;