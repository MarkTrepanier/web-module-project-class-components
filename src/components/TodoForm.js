import React from "react";
import Todo from "./Todo";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = e => {
        this.setState({
            input:e.target.value
        });
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.handleAddTodo(this.state.input);
    }


    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges} type='text' placeholder='new todo' name='todo'/>
                <button>clear completed</button>
            </form>
        );
    }
}

export default TodoForm;