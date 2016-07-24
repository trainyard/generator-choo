module.exports = require('yeoman-generator').Base.extend({
  do: require('../generate')({
    category: 'elements',
    templateFileName: '_element.js'
  })
})
