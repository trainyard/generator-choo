const html = require('choo/html')

module.exports = ({ done, text }, onClick) => html`
  <li onclick=${onClick} style=${done ? 'text-decoration: line-through' : 'text-decoration: none'}>
    <span>${text}</span>
  </li>
`
