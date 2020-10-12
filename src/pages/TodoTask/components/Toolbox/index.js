import React from 'react'
import { inject } from 'mobx-react'

const Toolbox = inject('store')(
  (props) => {
    const { store } = props
    const { todoList } = store
    const { todos } = todoList

    const remove = () => {
      const deleteTodos = todos.filter(todo => {
        const { isSelect } = todo
        return isSelect
      })
      deleteTodos.forEach(todo => {
        const { id } = todo
        todoList.removeItemById(id)
      });
    }

    const clear = () => {
      todoList.clear() 
    }

    return (
      <div className="toolbox">
        <button type="button" onClick={remove}>删除</button>
        <button type="button" onClick={clear}>清空</button>
      </div>
    )
  }
)

export default Toolbox
