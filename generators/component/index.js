module.exports = require('yeoman-generator').Base.extend({
  do: require('../generate')({
    category: 'components',
    templateFileName: '_component.js'
  })
})
