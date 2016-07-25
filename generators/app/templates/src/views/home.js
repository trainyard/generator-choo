const html = require('choo/html')
const header = require('../components/site-header')
const footer = require('../components/site-footer')

const links = [{
  label: 'Generator Docs',
  href: 'https://github.com/trainyard/generator-choo',
  info: 'How to use this generator'
}, {
  label: 'Choo Documentation',
  href: 'https://github.com/yoshuawuyts/choo',
  info: 'The choo repo has some great documentation'
}, {
  label: 'Awesome Choo',
  href: 'https://github.com/YerkoPalma/awesome-choo',
  info: 'A list of awesome things for choo'
}]
module.exports = (state, prev, send) => html`
  <main>
    ${header()}
    <section class="container color-white well center-text">
      <h3>Congrats!</h3>
      <div><img src="//yeoman.io/static/yeoman-character-sticker.51cef7e007.png"/></div>
      <p><em>You did it!! Now to make something <strong>amazing</strong></em></p>
      <p>🚂🚋🚋🚋</p>
    </section>
    <section class="content container">
      <div class="row">
        <div class="col-half">
          <div class="color-white well panel">
              <h3>Some Tips:</h3>
              <p>
                <ol>
                <li>You can see how this demo works by viewing the <code>src</code> folder.</li>
                <li>You can see how state management works by viewing the <a href="/todos">todos</a> section of this site.</li>
                <li>You can remove the demo at any time using <code>npm run remove-demo</code> command.</li>
                </ol>
              </p>
          </div>
        </div>
        <div class="col-half">
          <div class="color-white well panel">
              <h3>More Choo!</h3>
              <p>Check out these helpful links</p>
              <p>
              <ul>
                ${links.map(({label, href, info}) => html`
                <li>
                  <a href=${href}>
                    ${label}
                  </a> - <em>${info}</em>
                </li>`)}
              </ul>
              </p>
          </div>
        </div>
      </div>
    </section>
    ${footer()}
  </main>
`
