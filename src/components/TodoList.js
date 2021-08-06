import React from 'react'

import Todo from '../components/Todo'

//? pass todos as a prop and then map over the todos array of objects to return a Todo compoment for each of the todos.
//? todos are passed down from the App.js Parent component.
//? props are then passed down from the ( app -> todolist -> todo )

//? Pass todo (line 23) as a prop so that i can access a single todo object and then its id - this is so that when it comes to deleting a todo I can check the elements (el) id against the todos id to filter the todo array

function ToDoList({ todos, setTodos, filteredTodos, date }) {

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <Todo
            text={todo.text}
            id={todo.id}
            setTodos={setTodos}
            todos={todos}
            todo={todo}
            filteredTodos={filteredTodos}
            date={date}
          />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList

//?Child component of App 
//? Parent component of Todo
