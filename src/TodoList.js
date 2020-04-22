import React, { Component } from "react";
import Todo from "./Todo";
import "antd/dist/antd.css";
import { Input } from "antd";

class TodoList extends Component {

  render() {
    const { Search } = Input;
    const todos = this.props.todos;
    const lastTodo = todos[todos.length - 1];

    return (
      <div>
        {todos.map((todo, index) => (
          <Todo
            key={todo.id}
            index={index}
            todo={todo}
            onMarkDone={this.props.onMarkDone}
          />
        ))}
        <br />
        <Search
          type="text"
          name="newContent"
          enterButton="Add to TodoList"
          placeholder="input content here..."
          size="large"
          onSearch={(value) => {
            this.props.addTodoList(parseInt(lastTodo.id) + 1,value);
          }}
        />
      </div>
    );
  }
}

export default TodoList;
