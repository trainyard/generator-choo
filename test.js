import path from 'path'
import test from 'ava'
import helpers from 'yeoman-test'
import assert from 'yeoman-assert'
import pify from 'pify'

let generator

test.beforeEach(async () => {
  await pify(helpers.testDirectory)(path.join(__dirname, 'temp'))
  generator = helpers.createGenerator('choo:app', ['../app'], null, { skipInstall: true })
})

test.serial('generates expected files', async () => {
  helpers.mockPrompt(generator, {
    projectName: 'test',
    githubUsername: 'test',
    projectDescription: ''
  })

  await pify(generator.run.bind(generator))()

  assert.file([
    '.editorconfig',
    '.git',
    '.gitignore',
    'license',
    'package.json',
    'readme.md',
    'src/index.js',
    'src/routes.js',
    'src/components/site-footer.js',
    'src/components/site-header.js',
    'src/components/todo-filter.js',
    'src/components/todo-form.js',
    'src/components/todo-item.js',
    'src/components/todo-list.js',
    'src/models/todos.js',
    'src/styles/main.css',
    'src/views/about.js',
    'src/views/home.js',
    'src/views/todos.js',
    'static/index.html'
  ])
})
