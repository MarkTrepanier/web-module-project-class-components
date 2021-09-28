import React from "react";

const Todo = props =>{
    
    const handleClick=()=>{
        console.log(props.id)
        //props.handleToggle(props.key)
    }
    return(
    <li key={props.id} id={props.id} onClick={handleClick}>{props.task}</li>
    )
}

export default Todo;