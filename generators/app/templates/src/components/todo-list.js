const html = require('choo/html')
const todo = require('./todo-item')

module.exports = (todos = [], send) => html`
  <ul>
    ${
      todos.map(item =>
        todo(item, () =>
          send('todoDemo:toggle', {id: item.id}
          )
        )
      )
    }
  </ul>
`
