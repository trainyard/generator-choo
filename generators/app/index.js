'use strict'
const yeoman = require('yeoman-generator')
const kebab = require('lodash.kebabcase')

module.exports = yeoman.Base.extend({
  prompting: function () {
    return this.prompt([{
      name: 'projectName',
      message: 'What do you want to name your project?',
      default: this.appname.replace(/\s/g, '-'),
      filter: x => kebab(x)
    }, {
      name: 'projectDescription',
      message: 'A brief description of your app?',
      default: ''
    }, {
      name: 'githubUsername',
      message: 'What is your GitHub username?',
      store: true,
      validate: x => x.length > 0 ? true : 'You have to provide a username'
    }]).then(props =>
      this.config.set({
        template: Object.assign({}, props, {
          name: this.user.git.name(),
          email: this.user.git.email()
        })
      })
    )
  },
  writing: function () {
    const mv = (from, to) => {
      this.fs.move(this.destinationPath(from), this.destinationPath(to))
    }

    this.fs.copyTpl([
      `${this.templatePath()}/**`
    ], this.destinationPath(), this.config.get('template'))
    mv('editorconfig', '.editorconfig')
    mv('gitignore', '.gitignore')
    mv('_package.json', 'package.json')
  },
  install: function () {
    this.spawnCommandSync('git', ['init'])
    this.installDependencies({ bower: false })
  }
})
