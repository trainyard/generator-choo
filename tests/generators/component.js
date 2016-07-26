'use strict'

const test = require('tape')

const { resolve: resolvePath } = require('path')
const { run } = require('yeoman-test')
const { file: fileExists, fileContent } = require('yeoman-assert')

test('choo:component', tap => run(resolvePath(__dirname, '../../generators/component'))
  .withArguments(['component-test'])
  .on('end', () => {
    const expectedPath = 'src/components/component-test.js'

    tap.doesNotThrow(() =>
      fileExists(expectedPath), `Expected ${expectedPath} to exist.`)
    tap.doesNotThrow(() =>
      fileContent(expectedPath, '/* Component: component-test */'), 'Expected file to contain name in heading')
    tap.end()
  })
)
