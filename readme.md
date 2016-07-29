# generator-choo
[![npm version](https://badge.fury.io/js/generator-choo.svg)](https://img.shields.io/npm/v/generator-choo) [![Build Status](https://travis-ci.org/trainyard/generator-choo.svg?branch=master)](https://travis-ci.org/trainyard/generator-choo) ![MIT Licensed](https://img.shields.io/npm/l/generator-choo.svg) [![Coverage Status](https://coveralls.io/repos/github/MattMcFarland/generator-choo/badge.svg?branch=master)](https://coveralls.io/github/MattMcFarland/generator-choo?branch=master)

A [Yeoman](http://yeoman.io/) generator for [Choo](https://github.com/yoshuawuyts/choo).

### Installation

Make sure you have [Yeoman](http://yeoman.io/) installed globally, then install the generator.

```
npm install -g yo
npm install -g generator-choo
```

Awesome, you are now ready to use it!

### Usage

To use, make a new directory, hop into it and then run `yo choo`

```
mkdir my-choo-app && cd my-choo-app && yo choo
```

Follow the prompts to victory!!! Once the process is complete your app should be ready, you can use the following commands:

### NPM Scripts

 - `npm start` -- Starts up a dev server with live reloading
 - `npm run build:prod` -- Builds a production ready index.html and bundle.js that you can serve remotely.
 - `npm run lint` -- Lints your code.
 - `npm run deploy` -- Deploy

### Scaffolding

- `yo choo` -- Create a new choo app
- `yo choo:view` -- Create a new view that is also wired up to the router
- `yo choo:model` -- Create a new choo model.
- `yo choo:component` -- Create a new choo component
- `yo choo:element` -- Create a new choo element

### Architecture Generated
Here's the architecture of the generated app.

```
dist/           <- Production ready, and auto-generated when you run build:prod
src/            <- Source directory that is built
   components   <- stateless (mostly) ui components that may be complex
   elements     <- stateless elements (like components) but smaller
   models       <- choo models
   styles       <- css files
   views        <- whole views or pages
   index.js     <- main app/entry file
   routes.js    <- router uses this, routes auto-added with yo choo:view
static/         <- available files that will be in dev server and production server
package.json    <- npm package
readme.md       <- your readme file
.gitignore      <- gitignore
```

### Similar Projects

- [generator-choo-webpack](https://github.com/danneu/generator-choo-webpack) - the minimal choo + webpack yeoman project generator


### FYI

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

