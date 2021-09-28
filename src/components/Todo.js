import React from "react";

const Todo = props =>{
    
    const handleClick=()=>{
        console.log(props.id)
        console.log(props.completed)
        props.handleToggle(props.id)
        console.log(props.completed)
    }
    return(
    <li id={props.id} onClick={handleClick}>{props.task}</li>
    )
}

export default Todo;