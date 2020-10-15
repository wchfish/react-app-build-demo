import React from 'react'
import { observer } from 'mobx-react'
import { TODO_STATUS as STATUS } from '../../../../store/Todo'

import './index.scss'

// const statusTextMap = {
//   [STATUS.todo]: '代办',
//   [STATUS.doing]: '进行中',
//   [STATUS.complete]: '完成',
// }

const TodoItem = observer(
  (props) => {
    const { todo } = props
    const { title, isSelect, status, statusText } = todo

    const changeSelect = () => {
      todo.toggleSelect()
    }

    const setStatus = (status) => {
      todo.setStatus(status)
    }

    const wrapperClass = isSelect ? 'todo-wrapper todo-wrapper-selected' : 'todo-wrapper'
  
    return (
      <div className={wrapperClass} onClick={changeSelect}>
        <div className="title">{title}</div>
        <div className="status">状态：{statusText}</div>
        <div className="btn-group">
          {
            Object.keys(STATUS).map((key, index) => {
              const btnStatus = STATUS[key].status
              const btnClass = btnStatus === status ? `status-btn status-btn-active` : 'status-btn'
              return (
                <button key={index} className={btnClass} type="button" onClick={(e) => {
                  e.stopPropagation()
                  setStatus(btnStatus)
                }}>
                  {STATUS[key].desc}
                </button>
              )
            })
          }
        </div>
      </div>
    )
  }
)

export default TodoItem
