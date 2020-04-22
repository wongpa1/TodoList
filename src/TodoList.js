import React, { Component } from "react";
import Todo from "./Todo";

class TodoList extends Component {

  render() {
    const todos = this.props.todos;

    return (
      <div>
        {todos.map((todo, index) => (
          <Todo index={index} todo={todo} onMarkDone={this.props.onMarkDone} />
        ))}
      </div>
    );
  }
}

export default TodoList;
