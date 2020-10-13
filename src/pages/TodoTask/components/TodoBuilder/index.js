import React, { useState } from 'react'
import { observer, inject } from 'mobx-react'
import Todo from '../../../../store/Todo'

import './index.scss'

const TodoBuilder = inject('store')(
  observer(props => {
    const [ todoTitle, setTodoTitle ] = useState('')

    const { store } = props || {}
    const { todoList } = store || {}

    // 用户输入
    const onChange = (e) => {
      const value = e.target.value
      setTodoTitle(value)
    }

    // 取消
    const cancel = () => {
      setTodoTitle('')
    }

    // 新增
    const add = () => {
      const todo = new Todo({
        title: todoTitle,
      })
      todoList.addItem(todo)
      setTodoTitle('')
    }

    return (
      <div className="todo-builder-wrapper">
        <input
          value={todoTitle}
          onChange={onChange}
        />
        <button type="button" onClick={add}>新增</button>
        <button type="button" onClick={cancel}>取消</button>
      </div>
    )
  })
)

export default TodoBuilder
