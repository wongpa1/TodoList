import React, { Component } from "react";
import { INIT_TODOS } from "./constants/constants";
import TodoList from "./TodoList";
import update from "immutability-helper";

class TodoContainer extends Component {
  constructor(props) {
    super(props);

    this.onMarkDone = this.onMarkDone.bind(this);
    this.addTodoList = this.addTodoList.bind(this);

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

  render() {
    return (
      <div>
        <TodoList
          addTodoList={this.addTodoList}
          onMarkDone={this.onMarkDone}
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default TodoContainer;
