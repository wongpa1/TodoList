import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDone() {
    this.props.onMarkDone(this.props.todo.key);
  }

  render() {
    const todo = this.props.todo;

    return <div>{todo.content}</div>;
  }
}

export default Todo;
