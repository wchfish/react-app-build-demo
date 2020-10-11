import { makeObservable, observable, computed, action } from "mobx"

import Todo from './Todo'

const todo = new Todo({
  title: '使用mobx',
})

const state = {
  todo
}

export default state
