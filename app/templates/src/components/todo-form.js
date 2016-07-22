const html = require('choo/html')

module.exports = (state, prev, send) => html`
  <form onsubmit=${e => {
    e.preventDefault()
    const input = document.getElementById('addTodo')

    if (!input.value.trim()) {
      return
    }
    send('todoDemo:add', {text: input.value})
    input.value = ''
  }}>
    <input id="addTodo" type="text" placeholder="add a todo">
    <button type="submit">Add Todo</button>
  </form>
`
