import React, { Component } from "react";
import Todo from "./Todo";
import "antd/dist/antd.css";
import { Form, Input, Button, Space } from "antd";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);

    this.state = {
      newId: 0,
      newContent: null,
    };
  }

  onClick() {
    this.props.addTodoList(this.state.newId, this.state.newContent);
  }

  onSubmit(event) {
    event.preventDefault();
  }

  onChange(event) {
    const value = event.target.value;
    const lastTodo = this.props.todos[this.props.todos.length - 1];
    this.setState({
      newContent: value,
      newId: parseInt(lastTodo.id) + 1,
    });
  }

  render() {
    const todos = this.props.todos;

    return (
      <div>
        {todos.map((todo, index) => (
          <Todo key={todo.id} index={index} todo={todo} onMarkDone={this.props.onMarkDone} />
        ))}
        <Space />
        <Form onSubmit={this.onSubmit}>
          <fieldset>
            <Input
              type="text"
              name="newContent"
              placeholder="input content here..."
              onChange={this.onChange}
              value={this.state.newContent}
            />
            <Button onClick={this.onClick}>Add to TodoList</Button>
          </fieldset>
        </Form>
      </div>
    );
  }
}

export default TodoList;
