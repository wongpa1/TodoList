import React, { Component } from "react";
import { Button, Space } from "antd";

class Todo extends Component {
  constructor(props) {
    super(props);

    this.onClickDone = this.onClickDone.bind(this);
  }

  onClickDone() {
    const { index, onMarkDone } = this.props;
    onMarkDone(index);
  }

  render() {
    const todo = this.props.todo;
    return (
      <div>
        <h3
          style={{
            textDecoration: todo.status ? "line-through" : "none",
          }}
          onClick={this.onClickDone}
        >
          {todo.content}
        </h3>
      </div>
    );
  }
}

export default Todo;
