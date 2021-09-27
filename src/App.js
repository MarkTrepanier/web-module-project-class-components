import React from 'react';
import Todolist from './components/TodoList';

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
  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>

        <Todolist todos={this.state.todos}/>

        <div className='todoForm'>
          <button>add todo</button>
          <button>clear completed</button>
        </div>
      </div>
    );
  }
}

export default App;
