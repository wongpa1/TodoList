import 'antd/dist/antd.css';
import { List } from "antd";
import React, { Component } from "react";
import TodoListApi from "./TodoListApi";


class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: [],
    };
  }

  componentDidMount() {
    TodoListApi.getTodoList().then((response) => {
      console.log(response);
      this.setState({ todoList: response.data });
    });
  }

  render() {
    return (
      <div>
        <List>
        dataSource={this.state.todoList}
        renderItem={item => (
      <List.Item>
          {item}
      </List.Item>)};
        </List>
      </div>
    );
  }
}

export default List;
