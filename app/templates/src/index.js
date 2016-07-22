const sf = require('sheetify')
const choo = require('choo')

sf('normalize.css', { global: true })
sf('./styles/main.css', { global: true })

const app = choo()
app.model(require('./models/todos'))
app.router(require('./routes'))

const tree = app.start()

document.body.appendChild(tree)
