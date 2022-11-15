import React, { Component } from "react";
import propTypes from "prop-types";
import "./index.css";
export default class index extends Component {
  // 初始状态
  state = {
    isMouse: false,
  };

  // 对props限制
  static propTypes = {
    deleteTodo: propTypes.func.isRequired,
    checkedChange: propTypes.func.isRequired,
  };

  //悬浮事件
  mouse = (isMouse) => {
    return () => {
      this.setState({ isMouse: isMouse });
    };
  };
  // 删除
  handleDelete = (id) => {
    return () => {
      this.props.deleteTodo(id);
    };
  };

  // 选中事件
  handleChecked = (id) => {
    return (event) => {
      this.props.checkedChange(id, event.target.checked);
    };
  };

  render() {
    const { id, name, isDo } = this.props;
    const { isMouse } = this.state;
    return (
      <div>
        <li
          style={{ background: isMouse ? "skyBlue" : "#fff" }}
          onMouseEnter={this.mouse(true)}
          onMouseLeave={this.mouse(false)}
        >
          <div>
            <input
              type="checkbox"
              checked={isDo}
              onChange={this.handleChecked(id)}
            />
            <span>{name}</span>
          </div>
          <button
            style={{ display: isMouse ? "block" : "none" }}
            onClick={this.handleDelete(id)}
          >
            删除
          </button>
        </li>
      </div>
    );
  }
}
