import React, { Component } from "react";
import { INIT_TODOS } from "./constants/constants";
import TodoList from "./TodoList";

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.onMarkDone = this.onMarkDone.bind(this);

    this.state = {
      todos: INIT_TODOS,
    };
  }

  onMarkDone(id) {}

  render() {
    return (
      <div>
        <TodoList onMarkDone={this.onMarkDone} todos={this.state.todos}/>
      </div>
    );
  }
}

export default TodoContainer;
