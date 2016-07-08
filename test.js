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
    githubUsername: 'test'
  })

  await pify(generator.run.bind(generator))()

  assert.file([
    '.editorconfig',
    '.git',
    '.gitignore',
    'index.js',
    'style.css',
    'license',
    'package.json',
    'readme.md'
  ])
})
