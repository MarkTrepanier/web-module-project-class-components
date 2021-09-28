import React from "react";
import Todo from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const Todolist = props=>{

    return(
        <ul className='todoList'>
            {props.todos.map(todo => (
                <Todo task={todo.task} key={todo.id} completed={todo.completed} handleToggle={props.handleToggle}/>
            ))}
        </ul>
    )
}

export default Todolist;