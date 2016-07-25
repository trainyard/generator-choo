const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')

module.exports = (state, prev, send) => html`
  <main>
    ${header()}

    <section class="container color-white well center-text">
      <h3 style="margin-bottom:30px;">About</h3>

      <p>This is a simple about page to show that the routing works! :-)</p>
      <p>The source code for this page exists at <code>/src/views/about.js</code></p>
      <p>Happy Coding!</p>
      <h3>🚂🚋🚋🚋</h3>
    </section>
    <div style="margin-bottom: 200px;"></div>
    ${footer()}
  </main>
`
