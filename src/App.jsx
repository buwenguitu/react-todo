import React, { Component } from "react";
import { nanoid } from "nanoid";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

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
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((_) => {
        return _.id !== id;
      }),
    });
  };

  // 修改单个选中效果
  checkedChange = (id, isDo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((_) => {
        if (id === _.id) return { ..._, isDo };
        else return _;
      }),
    });
  };

  // 全选
  checkedAll = (isDo) => {
    const { todos } = this.state;
    this.setState({
      todos: todos.map((_) => {
        return { ..._, isDo };
      }),
    });
  };

  // 清除已完成任务
  clearDo = () => {
    const { todos } = this.state;
    this.setState({
      todos: todos.filter((_) => {
        return !_.isDo;
      }),
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div className="warp">
        <Header addTodo={this.addTodo} />
        <List
          todos={todos}
          deleteTodo={this.deleteTodo}
          checkedChange={this.checkedChange}
        />
        <Footer
          todos={todos}
          checkedAll={this.checkedAll}
          clearDo={this.clearDo}
        />
      </div>
    );
  }
}
