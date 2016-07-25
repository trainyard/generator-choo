const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')
const todoList = require('../components/todo-list')
const todoFilter = require('../components/todo-filter')
const todoForm = require('../components/todo-form')

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.done)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.done)
  }
}

module.exports = (state, prev, send) => html`
  <main>
    ${header()}    
    <section class="container color-white well center-text">
      <header>
      <h3>Todos</h3>
        <p><em>Based on the <a href="http://redux.js.org/docs/basics/ExampleTodoList.html">Redux Example Implementation</a></em></p>
      </header>
      <div>
        ${todoForm(state, prev, send)}
        ${todoList(getVisibleTodos(state.todoDemo.todos, state.todoDemo.visibility), send)}
        ${todoFilter(state, prev, send)}
      </div>
    </section>
     ${footer()}
  </main>
`
