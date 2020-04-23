import React, { Component } from "react";
import { INIT_TODOS } from "./constants/constants";
import TodoList from "./TodoList";
import update from "immutability-helper";
import "antd/dist/antd.css";
import { Input, Space } from "antd";

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.onMarkDone = this.onMarkDone.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
    this.deleteTodoList = this.deleteTodoList.bind(this);

    this.state = {
      todos: INIT_TODOS,
    };
  }

  onMarkDone(index) {
    const todolist = this.state.todos;
    const todo = todolist[index];
    const updatedtodos = update(todolist, {
      [index]: { $merge: { status: !todo.status } },
    });

    this.setState({
      todos: updatedtodos,
    });
  }

  addTodoList(id, content) {
    const newTodo = { id: id, content: content, state: false };
    const clonedtodos = this.state.todos.slice();
    clonedtodos.push(newTodo);
    this.setState({
      todos: clonedtodos,
    });
  }

  deleteTodoList(index) {
    const clonedTodos = this.state.todos.slice();
    clonedTodos.splice(index, 1);
    this.setState({
      todos: clonedTodos,
    });
  }

  render() {
    const { Search } = Input;
    const todos = this.state.todos;
    return (
      <div>
        <Space direction="vertical">
          <TodoList
            deleteTodoList={this.deleteTodoList}
            onMarkDone={this.onMarkDone}
            todos={todos}
          />
          <Search
            type="text"
            name="newContent"
            enterButton="Add to TodoList"
            placeholder="input content here..."
            size="large"
            onSearch={(value) => {
              if (value.length != 0) {
                const newId =
                  todos.length == 0
                    ? 0
                    : parseInt(todos[todos.length - 1].id) + 1;
                this.addTodoList(newId, value);
              }
            }}
          />
        </Space>
      </div>
    );
  }
}

export default TodoContainer;
