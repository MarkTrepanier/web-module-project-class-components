import React from "react";
import Todo from './Todo'
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
const Todolist = props=>{

    return(
        <div classNametodList>
            {props.todos.map(todo => (
                <Todo task ={todo.task} id = {todo.id}/>
            ))}
        </div>
    )
}

export default Todolist;