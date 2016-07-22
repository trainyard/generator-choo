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
    'src/styles/main.css',
    'static/index.html',
  ])
})
