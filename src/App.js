import React from 'react';
import Todo from './components/Todo';
import Todolist from './components/TodoList';
import TodoForm from './components/TodoForm';

const todos = [
  {
    task:'raise bottom border',
    id: '01',
    completed:false
  },
  {
    task:'create tabs',
    id: '02',
    completed:false
  },
  {
    task:'design screen',
    id: '03',
    completed:false
  },
  {
    task:'change theme colors',
    id: '04',
    completed:false
  },
  {
    task:'anim border',
    id: '05',
    completed:false
  },
];

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos:todos
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  handleAddTodo=(task)=>{
    const newTodo={
      task:task,
      id: Date.now(),
      completed:false
    }

    this.setState({
      ...this.state,
      todos:[...this.state.todos, newTodo]
    })
  }

  handleToggle=(id)=>{
    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo=>{
        if(todo.id === id) {
          return ({
            ...todo,
            completed: !todo.completed
          });
        }
        else{
          return todo;
        }
      })
    });
  }

  handleClearing = ()=>{
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo =>{
        return(!todo.completed)
      })
    });
  }

  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>

        <Todolist handleToggle={this.handleToggle} todos={this.state.todos}/>

        <TodoForm handleAddTodo={this.handleAddTodo} handleClearing={this.handleClearing}/>
      </div>
    );
  }
}

export default App;
