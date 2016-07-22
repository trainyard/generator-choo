#!/usr/bin/env bash
rm -rf dist && mkdir dist && mkdir dist/js
cp static/index.html dist/index.html
NODE_ENV=production browserify -d -e src/index.js -o dist/js/main.js \
  -t envify \
  -t sheetify/transform \
  -g yo-yoify \
  -g unassertify \
  -g es2040 \
  -g uglifyify | uglifyjs
