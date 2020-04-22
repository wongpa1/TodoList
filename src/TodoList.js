import React, { Component } from "react";
import Todo from "./Todo";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      newContent: null,
    };
  }

  onSubmit(event) {
    event.preventDefault();
  }
  onChange(event) {
    const value = event.target.value;
    this.setState({
      newContent: value,
    });
  }

  render() {
    const todos = this.props.todos;

    return (
      <div>
        {todos.map((todo, index) => (
          <Todo index={index} todo={todo} onMarkDone={this.props.onMarkDone} />
        ))}
        <Form onSubmit={this.onSubmit}>
          <fieldset>
            <Input
              type="text"
              name="newContent"
              placeholder="input content here..."
              onChange={this.onChange}
              value={this.state.newContent}
            />
            <Button>Add to TodoList</Button>
          </fieldset>
        </Form>
      </div>
    );
  }
}

export default TodoList;
