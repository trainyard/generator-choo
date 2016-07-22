module.exports = {
  namespace: 'todoDemo',
  state: {
    todos: [{
      id: 1,
      text: 'Learn Choo',
      done: false
    }],
    visibility: 'SHOW_ALL'
  },
  subscriptions: [],
  reducers: {
    add: (action, state) => {
      console.log(action, state)
      return {
        todos: state.todos.concat({
          id: state.todos.length + 1,
          text: action.text,
          done: false
        })
      }
    },
    toggle: (action, state) => ({
      todos: state.todos.map(todo =>
        todo.id === action.id ? Object.assign({}, todo, { done: !todo.done }) : todo
      )
    }),
    visibilityFilter: ({visibility}) => ({
      visibility
    })
  }
}
