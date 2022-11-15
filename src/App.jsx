import React, { Component } from "react";
import { nanoid } from "nanoid";
import Header from "./Header";
import List from "./List";

import "./App.css";

export default class App extends Component {
  // 初始化数据
  state = {
    todos: [
      { id: 1, name: "吃饭", isDo: true },
      { id: 2, name: "睡觉", isDo: true },
      { id: 3, name: "打豆豆", isDo: false },
    ],
  };

  // 修改todos
  addTodo = (data) => {
    const { todos } = this.state;
    const todoObj = { id: nanoid(), name: data, isDo: false };
    this.setState({ todos: [todoObj, ...todos] });
  };

  // 删除todo
  deleteTodo = (id) => {
    console.log('i11111111d: ', id);
    this.setState({
      todos: this.state.todos.filter((_) => {
        return _.id !== id
      })
    })
  }

  render() {
    const { todos } = this.state;
    return (
      <div className="warp">
        <Header addTodo={this.addTodo} />
        <List todos={todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
