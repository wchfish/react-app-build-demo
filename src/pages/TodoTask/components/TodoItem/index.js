import React from 'react'
import { observer } from 'mobx-react'

import './index.scss'

const TodoItem = observer(
  (props) => {
    const { todo } = props
    const { title, isSelect, statusText } = todo

    const changeSelect = () => {
      todo.toggleSelect()
    }

    const wrapperClass = isSelect ? 'todo-wrapper todo-wrapper-selected' : 'todo-wrapper'
  
    return (
      <div className={wrapperClass} onClick={changeSelect}>
        <div className="title">{title}</div>
        <div className="finish-state">{statusText}</div>
      </div>
    )
  }
)

export default TodoItem
