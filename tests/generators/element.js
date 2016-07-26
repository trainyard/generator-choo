'use strict'

const test = require('tape')

const { resolve: resolvePath } = require('path')
const { run } = require('yeoman-test')
const { file: fileExists, fileContent } = require('yeoman-assert')

test('choo:element', tap => run(resolvePath(__dirname, '../../generators/element'))
  .withArguments(['element-test'])
  .on('end', () => {
    const expectedPath = 'src/elements/element-test.js'

    tap.doesNotThrow(() =>
      fileExists(expectedPath), `Expected ${expectedPath} to exist.`)
    tap.doesNotThrow(() =>
      fileContent(expectedPath, '/* Element: element-test */'), 'Expected file to contain name in heading')
    tap.end()
  })
)
