#!/usr/bin/env node
var budo = require('budo')
var path = require('path')
var es2040 = require('es2040')
var sheetify = require('sheetify/transform')
var inspect = require('util').inspect;

budo('./src/index.js', {
  browserifyArgs: [
    '-t', 'sheetify/transform',
    '-g', 'es2040'
  ],
  debug: true,
  //dir: path.join(__dirname, '../', 'static'),
  host: 'localhost',
  live: true,
  open: true,
  port: 3000,
  pushState: true,
  stream: process.stdout,
}).on('connect', function(ev) {
  console.log(inspect(ev, {depth: 10, colors: true}))
})
