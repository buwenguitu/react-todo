import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  // 全选
  handleCheckedAll = (event) => {
    this.props.checkedAll(event.target.checked);
  };

  //   清除已完成任务
  handleClear = () => {
    this.props.clearDo();
  };

  render() {
    const { todos } = this.props;
    // 总数
    const total = todos.length;
    // 选中条数 使用reduce累加
    const checkedCount = todos.reduce(
      (pre, todo) => pre + (todo.isDo ? 1 : 0),
      0
    );

    return (
      <div className="footer-warp">
        <div>
          <input
            type="checkbox"
            checked={checkedCount === total && total !== 0}
            onChange={this.handleCheckedAll}
          />
          选中{checkedCount}条/共计{total}条
        </div>
        <button onClick={this.handleClear}>清除已完成任务</button>
      </div>
    );
  }
}
