#!/usr/bin/env bash

NODE_ENV=development budo src/index.js:js/main.js --live \
  --host localhost \
  --dir static \
  --pushstate \
  --title <%= projectName %> \
  --port 3000 \
  -- -t sheetify/transform -g es2040
