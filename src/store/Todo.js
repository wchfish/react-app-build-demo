import { makeObservable, observable, computed, action } from "mobx"

// deprecate
// const TODO_STATUS = {
//   todo: 'todo',
//   doing: 'doing',
//   complete: 'complete',
// }

// 任务状态
const TODO_STATUS = {
  todo: {
    status: 'todo',
    desc: '代办',
  },
  doing: {
    status: 'doing',
    desc: '进行中',
  },
  complete: {
    status: 'complete',
    desc: '完成',
  },
}

let id = 0

class Todo {
  id
  @observable title = ""
  @observable status = TODO_STATUS.todo.status
  @observable isSelect = false

  constructor(options) {
    makeObservable(this)
    const { title, status } = options
    title && (this.title = title)
    status && (this.status = status)
    this.id = id++
  }

  @computed
  get statusText() {
    return TODO_STATUS[this.status].desc
  }

  @action
  setStatus(status) {
    this.status = status
  }

  @action
  toggleSelect() {
    this.isSelect = !this.isSelect
  }
}

export default Todo
export {
  Todo,
  TODO_STATUS,
}
