import { makeObservable, observable, computed, action } from "mobx"

// 任务状态
const TODO_STATUS = {
  todo: 'todo',
  doing: 'doing',
  complete: 'complete',
}

let id = 0

class Todo {
  id
  @observable title = ""
  @observable status = TODO_STATUS.todo
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
    let text = ''
    switch (this.status) {
      case TODO_STATUS.todo:
        text = '代办'
        break
      case TODO_STATUS.doing:
        text = '进行中'
        break
      case TODO_STATUS.complete:
        text = '完成'
        break
      default:
        break
    }
    return text
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
