const html = require('choo/html')
const links = [
  {
    label: 'All',
    action: 'SHOW_ALL'
  },
  {
    label: 'Active',
    action: 'SHOW_ACTIVE'
  },
  {
    label: 'Completed',
    action: 'SHOW_COMPLETED'
  }
]

module.exports = (state, prev, send) => html`
<div>
  <span>Show:</span>
  ${links.map(link => {
    if (link.action === state.todoDemo.visibility) {
      return html`<span>${link.label}</span>`
    }
    return html`
      <span>
      <a href="#" onclick=${e => {
        e.preventDefault()
        send('todoDemo:visibilityFilter', { visibility: link.action })
      }}>${link.label}</a>
      </span>
    `
  })}
</div>`

