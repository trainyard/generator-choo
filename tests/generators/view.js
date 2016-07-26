'use strict'

const test = require('tape')

const { copyRecursive } = require('fs.extra')
const { resolve: resolvePath } = require('path')
const { run } = require('yeoman-test')
const { file: fileExists, fileContent } = require('yeoman-assert')

test('choo:view', tap => run(resolvePath(__dirname, '../../generators/view'))
  .inTmpDir(function (dir) {
    const copyFrom = resolvePath(__dirname, '../../generators/app/templates')
    const copyTo = resolvePath(dir)

    copyRecursive(copyFrom, copyTo, this.async())
  })
  .withArguments(['view-test'])
  .on('error', msg => {
    console.log('fail', msg)
    tap.fail(msg)
    tap.end()
  })
  .on('end', () => {
    const expectedPath = 'src/views/view-test.js'

    tap.doesNotThrow(() =>
      fileExists(expectedPath), `Expected ${expectedPath} to exist.`)
    tap.doesNotThrow(() =>
      fileContent(expectedPath, '<h1>view-test</h1>'), 'Expected file to contain name in heading')
    const injection = "route('/view-test', require('./views/view-test'))"

    tap.doesNotThrow(() =>
      fileContent('src/routes.js', ''), `Expected routes.js to contain ${injection}`)
    tap.end()
  })
)
