import { createLState } from "lstate"
import { counterStore } from "./simple-sample"

export interface Todo {
  _id: string
  description: string
  done: boolean
}

export const todoStore = createLState({
  id: '_id',
  items: [] as Todo[],
  reducers: ({ upsert, update, setter }) => ({
    add(description: string) {
      upsert({
        _id: crypto.randomUUID(),
        description,
        done: false
      })
    },
    toggle(id: string) {
      update(id, (old) => ({ ...old, done: !old.done }))
    },
    async reset() {
      const todos = await loadTodo()
      setter(todos)
    },
  })
})

async function loadTodo() {
  const initial: Todo[] = [
    {
      _id: '1',
      description: 'Sample todo item',
      done: false,
    },
    {
      _id: '2',
      description: 'Sample completed item',
      done: true,
    }
  ]
  return Promise.resolve(initial)
}