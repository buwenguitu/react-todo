import React, { Component } from "react";
import propTypes from "prop-types";
import Item from "../Item";
export default class index extends Component {
  // 对props限制
  static propTypes = {
    checkedChange: propTypes.func.isRequired,
    todos: propTypes.array.isRequired,
    deleteTodo: propTypes.func.isRequired,
  };

  render() {
    const { todos, deleteTodo, checkedChange } = this.props;
    return (
      <div>
        <ul>
          {todos.map((_) => {
            return (
              <Item
                key={_.id}
                {..._}
                deleteTodo={deleteTodo}
                checkedChange={checkedChange}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
