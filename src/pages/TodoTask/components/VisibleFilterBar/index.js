import React from 'react'
import { inject, observer } from 'mobx-react'
import { VISIBLE_STATUS } from '../../../../store/TodoList'

import "./index.scss"

const VisibleFilterBar = inject('store')(
  observer(
    (props) => {
      const { store } = props
      const { todoList } = store
      const { visibleStatus, visibleStatusText } = todoList

      const selectVisibleFilter = (status) => {
        todoList.setVisibleStatus(status)
      }

      return (
        <div className="visible-filter-bar">
          {
            Object.keys(VISIBLE_STATUS).map((key, index) => {
              const status = VISIBLE_STATUS[key]
              return (
                <button
                  type="button"
                  className={status === visibleStatus ? 'btn btn-active' : 'btn'}
                  onClick={() => { selectVisibleFilter(status) }}
                >
                  {key}
                </button>
              )
            })
          }
        </div>
      )
    }
  )
)

export default VisibleFilterBar
