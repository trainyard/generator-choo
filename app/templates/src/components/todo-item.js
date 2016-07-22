const html = require('choo/html')

module.exports = ({ done, text }, onClick) => {
  const style = done ? 'text-decoration: line-through' : 'text-decoration: none'
  return html`
  <li onclick=${onClick} style=${style}>
    <span>${text}</span>
  </li>`
}
