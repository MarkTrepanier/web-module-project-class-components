import React from "react";

const Todo = props =>{
    
    const handleClick=()=>{
        props.handleToggle(props.id)
    }
    return(
    <li id={props.id} onClick={handleClick}>{props.task}</li>
    )
}

export default Todo;