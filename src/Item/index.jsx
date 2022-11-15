import React, { Component } from "react";
import "./index.css";
export default class index extends Component {
  state = {
    isMouse: false
  }
  //悬浮事件
  mouse = (isMouse) => {
    return () => {
      this.setState({ isMouse: isMouse })
    }
  }
  // 删除
  deleteTodo = (id) => {
    return () => {
      this.props.deleteTodo(id)
    }
  }

  // 选中事件
  checkedChange = (event)=>{
    console.log('event: ', event);

  }

  render() {
    const { id, name, isDo } = this.props;
    const { isMouse } = this.state;
    return (
      <div>
        <li style={{ background: isMouse ? 'skyBlue' : '#fff' }} onMouseEnter={this.mouse(true)} onMouseLeave={this.mouse(false)}>
          <div>
            <input type="checkbox" defaultChecked={isDo} onChange={this.checkedChange} />
            <span>{name}</span>
          </div>
          <button style={{ display: isMouse ? 'block' : 'none' }} onClick={this.deleteTodo(id)}>删除</button>
        </li>
      </div>
    );
  }
}
