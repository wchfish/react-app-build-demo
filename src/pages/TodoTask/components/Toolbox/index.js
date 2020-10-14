import React from 'react'
import { inject, observer } from 'mobx-react'

import './index.scss'

const Toolbox = inject('store')(
  observer(
    (props) => {
      const { store } = props
      const { todoList } = store
      const { visibleTodos, isSelectAll } = todoList
  
      // 删除
      const remove = () => {
        const deleteTodos = visibleTodos.filter(todo => {
          const { isSelect } = todo
          return isSelect
        })
        deleteTodos.forEach(todo => {
          const { id } = todo
          todoList.removeItemById(id)
        });
      }
  
      // 清空
      const clear = () => {
        todoList.clearVisible()
      }
  
      // 全选
      const toggleSelectAll = () => {
        todoList.selectAllVisible(!isSelectAll)
      }
  
      return (
        <div className="todo-toolbox">
          <button className={isSelectAll ? 'btn btn-active' : 'btn'} type="button" onClick={toggleSelectAll}>全选</button>
          <button className="btn btn-right" type="button" onClick={remove}>删除</button>
          <button className="btn" type="button" onClick={clear}>清空</button>
        </div>
      )
    }
  )
)

export default Toolbox
