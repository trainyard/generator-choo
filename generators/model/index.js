module.exports = require('yeoman-generator').Base.extend({
  do: require('../generate')({
    category: 'models',
    templateFileName: '_model.js'
  })
})
