import React from 'react'
import { observer, inject } from 'mobx-react'

const Todo = inject('store')(
  observer((props) => {
    const { store } = props
    const { todo } = store
    const { title, finished } = todo

    const toggle = () => {
      todo.toggle()
    }

    return (
      <div className="todo-wrapper">
        <div className="title">{title}</div>
        <div className="finish-state">{finished ? 'complete' : 'undo'}</div>
        <button type="button" onClick={toggle}>改变任务状态</button>
      </div>
    )
  })
)

export default Todo
