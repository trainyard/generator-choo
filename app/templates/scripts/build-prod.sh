#!/usr/bin/env bash

# Clean distribution directory.
rm -rf dist && mkdir dist && mkdir dist/js
# Copy static files to distribution.
cp -r static/* dist

# Duplicate index.html as 200.html for Surge pushState routing.
cp static/index.html dist/200.html

# Bundle the main js file.
NODE_ENV=production browserify -d -e src/index.js -o dist/js/main.js \
  -t envify \
  -t sheetify/transform \
  -g unassertify \
  -g es2040 \
  -g uglifyify | uglifyjs

echo 'Built dist directory'