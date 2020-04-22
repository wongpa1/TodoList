import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDone() {
    const {index, onMarkDone} = this.props;
    onMarkDone(index);
  }

  render() {
    const todo = this.props.todo;
    return (
      <div style={{
        textDecoration: todo.status ? 'line-through' : 'none',
      }} onClick={this.onClickDone}>
        {todo.content}
      </div>
    );
  }
}

export default Todo;
