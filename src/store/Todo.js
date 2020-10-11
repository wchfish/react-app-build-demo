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

  @action
  toggle() {
    this.finished = !this.finished
  }
}

export default Todo
