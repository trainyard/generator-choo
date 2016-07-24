#!/usr/bin/env node

var budo = require('budo')
var inspect = require('util').inspect

budo('./src/index.js', {
  browserifyArgs: [
    '-t', 'sheetify/transform',
    '-g', 'es2040'
  ],
  debug: true,
  host: 'localhost',
  live: true,
  open: true,
  port: 3000,
  pushState: true,
  stream: process.stdout
}).on('connect', (ev) => {
  console.log(inspect(ev, {depth: 10, colors: true}))
})
