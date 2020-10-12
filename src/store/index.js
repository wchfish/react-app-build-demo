import { makeObservable, observable, computed, action } from "mobx"

import Todo from './Todo'
import TodoList from './TodoList'

const initTodosData = [
  {
    title: '分析应用的代码及逻辑的组织与结构',
    status: 'todo',
  },
  {
    title: '完成todolist的展示及交互逻辑',
    status: 'doing',
  },
  {
    title: '使用mobx作为应用的状态管理库',
    status: 'complete',
  },
]

const initTodoList = () => {
  const todos = initTodosData.map((item) => {
    return new Todo(item)
  })
  return new TodoList({todos})
}

const todoList = initTodoList()

const state = {
  todoList
}

export default state
