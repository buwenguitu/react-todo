import React, { Component } from 'react'
import Item from '../Item'
export default class index extends Component {
  render() {
    const { todos, deleteTodo } = this.props
    return (
      <div>
        <ul>
          {todos.map((_) => {
            return <Item key={_.id} {..._} deleteTodo={deleteTodo} />
          })}
        </ul>
      </div>
    )
  }
}
