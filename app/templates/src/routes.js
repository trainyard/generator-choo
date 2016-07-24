module.exports = (route) => [
  route('/todos', require('./views/todos')),
  route('/about', require('./views/about')),
  route('/', require('./views/home'))
]
