module.exports = (route) => [
  route('/', require('./views/home')),
  route('/todos', require('./views/todos')),
  route('/about', require('./views/about'))
]
