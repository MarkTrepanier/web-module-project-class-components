import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='App'>
        <h2>Welcome to your Todo App!</h2>
        <div className='todoList'>
          <h3 className='todo'>list item</h3>
          <h3 className='todo'>list item</h3>
          <h3 className='todo'>list item</h3>
        </div>
        <div className='todoForm'>
          <button>add todo</button>
          <button>clear completed</button>
        </div>
      </div>
    );
  }
}

export default App;
