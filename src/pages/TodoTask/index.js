import React from 'react'
import Toolbox from './components/Toolbox'
import TodoList from './components/TodoList'

const TodoTask = (props) => {
  return (
    <div className="todo-task-page">
      <h2>代办任务</h2>
      {/* <Todo todo={appState.todo} /> */}
      <Toolbox />
      <TodoList />
    </div>
  )
}

export default TodoTask
