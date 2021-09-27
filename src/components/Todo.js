import React from "react";

const Todo = props =>{
    return(<h3 key={props.id}>{props.task}</h3>)
}

export default Todo;