import React, { Component } from "react";

export default class index extends Component {
  render() {
    const { name, isDo } = this.props;
    return (
      <div>
        <li>
          <input type="checkbox" defaultChecked={isDo} />
          <span>{name}</span>
        </li>
      </div>
    );
  }
}
