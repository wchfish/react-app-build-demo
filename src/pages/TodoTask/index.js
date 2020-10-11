import React from 'react'
// import appState from '../../store'
import Todo from './components/Todo'


const TodoTask = (props) => {
  return (
    <div className="todo-task-page">
      <h2>代办任务</h2>
      {/* <Todo todo={appState.todo} /> */}
      <Todo />
    </div>
  )
}

export default TodoTask
