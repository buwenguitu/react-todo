import React, { Component } from "react";
import "./index.css";

export default class index extends Component {
  // 键盘事件 调用父组件方法修改todos
  handelKeyUp = (event) => {
    const { keyCode, target } = event;
    if (keyCode !== 13 || target.value === "") return;
    this.props.addTodo(target.value);
    target.value=''
  };

  render() {
    return (
      <div>
        <input type="text" className="search" onKeyUp={this.handelKeyUp} />
      </div>
    );
  }
}
