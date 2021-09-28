import React from "react";

const Todo = props =>{
    
    const handleClick=()=>{
        props.handleToggle(props.item.id)
    }
    return(
    <li key={props.id} onClick={handleClick}>{props.task}</li>
    )
}

export default Todo;