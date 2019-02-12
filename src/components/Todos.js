import React, { Component } from 'react';
import Todoitem from './components/Todoitem';


class Todos extends Component {
  render() {
        return this.props.todos.map((todo)=>(
          <h3>{todo.title}</h3>
  
        ));
  }
}

export default Todos;
