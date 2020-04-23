import React, { Component } from "react";
import Todo from "./Todo";
import "antd/dist/antd.css";
import { Input, Space, List, Button } from "antd";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(index) {
    this.props.deleteTodoList(index);
  }

  render() {
    const { Search } = Input;
    const todos = this.props.todos;
    return (
      <div>
        <Space direction="vertical">
          <List
            size="large"
            header={
              <div>
                <h1>TODO LIST</h1>
              </div>
            }
            bordered
            dataSource={todos}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <Button onClick={this.onClick} type="primary">
                    delete
                  </Button>,
                ]}
              >
                <Todo
                  key={item.id}
                  index={index}
                  todo={item}
                  onMarkDone={this.props.onMarkDone}
                />
              </List.Item>
            )}
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
                todos.length == 0 ? 0 : parseInt(todos[todos.length - 1].id);
                this.props.addTodoList(newId, value);
              }
            }}
          />
        </Space>
      </div>
    );
  }
}

export default TodoList;
