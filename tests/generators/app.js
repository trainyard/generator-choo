'use strict'

const test = require('tape')

const { resolve: resolvePath } = require('path')
const { run } = require('yeoman-test')
const { file: filesExist, fileContent } = require('yeoman-assert')

test('choo:app', tap => run(resolvePath(__dirname, '../../generators/app'))
  .withPrompts({ projectName: 'test', githubUsername: 'test' })
  .on('end', () => {
    tap.doesNotThrow(() => {
      filesExist([
        '.editorconfig',
        '.git',
        '.gitignore',
        'license',
        'package.json',
        'readme.md',
        'scripts/build-prod.sh',
        'scripts/dev-server.sh',
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
    }, 'expected files should exist.')
    tap.doesNotThrow(() =>
      fileContent('src/components/site-header.js', '<h1>test</h1>'), 'Expected file to contain name in heading')

    tap.end()
  })
)
