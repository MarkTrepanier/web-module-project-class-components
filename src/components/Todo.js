import React from "react";

const Todo = props =>{
    
    const handleClick=()=>{
        console.log('clicking '+ props.task + ' id:' + props.id +'. Completed:' + props.completed)
        props.handleToggle(props.id)
    }
    return(
        props.completed ? <li style={{textDecorationLine: 'line-through', listStyleType:'none'}}  id={props.id} onClick={handleClick}>{props.task}</li> : <li  style={{ listStyleType:'none'}}id={props.id} onClick={handleClick}>{props.task}</li>
    )
}

export default Todo;