import { makeObservable, observable, computed, action } from "mobx"

class Todo {
  id = Math.random()
  @observable title = ""
  @observable finished = false
  // finished = false

  constructor(options) {
    makeObservable(this)
    const { title, finished } = options
    title && (this.title = title)
    finished && (this.finished = finished)
  }

  @computed
  get statusText() {
    return this.finished ? '已完成 done' : '未完成 todo'
  }

  @action
  toggle() {
    this.finished = !this.finished
  }
}

export default Todo
