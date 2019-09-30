import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';


const todoData = [
  {
    name: 'Study Class Components',
    id: 0,
    completed: false
  },
  {
    name: 'Watch Netflix',
    id: 1,
    completed: false
  },
  {
    name: 'Win some bread',
    id: 2,
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      name: 'Mike',
      todo: todoData
    };
  }

  toggleItem = id => {
    console.log(id);
    
    this.setState({
      todo: this.state.todo.map(item => {
        if(item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      name: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    })
  }

  clear = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todo={this.state.todo} toggleItem={this.toggleItem} clear={this.clear}/>
        <TodoForm addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
