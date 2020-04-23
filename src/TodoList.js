import React, { Component } from "react";
import Todo from "./Todo";
import "antd/dist/antd.css";
import {Space, List, Button } from "antd";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(index) {
    this.props.deleteTodoList(index);
  }

  render() {
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
            dataSource={this.props.todos}
            renderItem={(item, index) => (
              <List.Item
                actions={[
                  <Button
                    onClick={(event) => this.onClick(index)}
                    type="primary"
                  >
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
        </Space>
      </div>
    );
  }
}

export default TodoList;
