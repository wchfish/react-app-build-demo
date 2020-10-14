import React from 'react'
import TodoBuilder from './components/TodoBuilder'
import VisibleFilterBar from './components/VisibleFilterBar'
import TodoList from './components/TodoList'
import Toolbox from './components/Toolbox'

const TodoTask = (props) => {
  return (
    <div className="todo-task-page">
      <h2>代办任务</h2>
      {/* <Todo todo={appState.todo} /> */}
      <TodoBuilder />
      <VisibleFilterBar />
      <TodoList />
      <Toolbox />
    </div>
  )
}

export default TodoTask
