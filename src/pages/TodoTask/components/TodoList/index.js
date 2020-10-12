import React from 'react'
import { observer, inject } from 'mobx-react'
import TodoItem from '../TodoItem'

const TodoList = inject('store')(
  observer((props) => {
    const { store } = props
    const { todoList } = store
    const { todos } = todoList

    return (
      <div className="todo-list-container">
        {
          todos.map((item, index) => {
            return (
              <TodoItem
                key={item.id}
                index={index}
                todo={item}
              />
            )
          })
        }
      </div>
    )
  })
)

export default TodoList
