import { makeObservable, observable, action, computed } from 'mobx'
import Todo, { TODO_STATUS } from './Todo'

const VISIBLE_STATUS = {
  ...TODO_STATUS,
  all: {
    status: 'all',
    desc: '全部',
  },
}

class TodoList {
  // todo任务列表
  @observable todos = []
  @observable visibleStatus = VISIBLE_STATUS.all.status
  
  constructor(options) {
    makeObservable(this)
    const { todos } = options
    if (todos && todos.length > 0) {
      this.todos = todos
    }
  }

  @computed
  get visibleStatusText() {
    return VISIBLE_STATUS[this.visibleStatus].desc
  }

  @computed
  get visibleTodos() {
    if (this.todos && this.todos.length > 0) {
      if (this.visibleStatus === VISIBLE_STATUS.all.status) {
        return this.todos
      } else {
        return this.todos.filter(todo => {
          return todo.status === this.visibleStatus
        }) || []
      }
    } else {
      return []
    }
  }

  // 是否全部选中
  @computed
  get isSelectAll() {
    if (this.visibleTodos && this.visibleTodos.length > 0) {
      return this.visibleTodos.every((todo) => {
        return todo.isSelect
      })
    } else {
      return false
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

  // 清空当前可见的代办
  @action
  clearVisible() {
    if (this.visibleStatus === VISIBLE_STATUS.all.status) {
      this.todos = []
    } else {
      this.todos = this.todos.filter(todo => todo.status !== this.visibleStatus)
    }
  }

  // 清空所有代办
  @action
  clear() {
    this.todos = []
  }

  @action
  selectAllVisible(isSelect) {
    if (this.visibleTodos && this.visibleTodos.length > 0) {
      this.visibleTodos.forEach(todo => {
        todo.isSelect = isSelect
      })
    }
  }

  // 设置所有待办项的选中状态
  @action
  selectAll(isSelect) {
    this.todos.forEach(todo => {
      todo.isSelect = isSelect
    })
  }

  // 设置可见的任务状态
  setVisibleStatus(status) {
    this.visibleStatus = status
  }
}

export default TodoList
export {
  TodoList,
  VISIBLE_STATUS,
}
