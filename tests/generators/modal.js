'use strict'

const test = require('tape')

const { resolve: resolvePath } = require('path')
const { run } = require('yeoman-test')
const { file: fileExists, fileContent } = require('yeoman-assert')

test('choo:model', tap => run(resolvePath(__dirname, '../../generators/model'))
  .withArguments(['model-test'])
  .on('end', () => {
    const expectedPath = 'src/models/model-test.js'

    tap.doesNotThrow(() =>
      fileExists(expectedPath), `Expected ${expectedPath} to exist.`)
    tap.doesNotThrow(() =>
      fileContent(expectedPath, "namespace: 'model-test'"), 'Expected file to contain namespace')
    tap.end()
  })
)
