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

    handleClick=()=>{
        this.props.handleClearing();
    }

    render(){

        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChanges} type='text' placeholder='new todo' name='todo'/>
                    <input type='submit'/>
                </form>
                <button onClick={this.handleClick}>clear completed</button>
            </div>
        );
    }
}

export default TodoForm;