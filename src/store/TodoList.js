import { makeObservable, observable, action } from 'mobx'
import Todo from './Todo'

class TodoList {
  // todo任务列表
  @observable todos = []
  
  constructor(options) {
    makeObservable(this)
    const { todos } = options
    if (todos && todos.length > 0) {
      this.todos = todos
    }
  }

  // 增加任务项
  @action
  addItem(item) {
    if (item) {
      this.todos.push(item)
    }
  }

  // 根据索引值删除任务项
  @action
  removeItemByIndex(index) {
    this.todos.splice(index, 1)
  }

  // 根据id删除任务项
  @action
  removeItemById(id) {
    this.todos = this.todos.filter((item) => {
      return item.id !== id
    })
  }

  // 清空
  @action
  clear() {
    this.todos = []
  }
}

export default TodoList
