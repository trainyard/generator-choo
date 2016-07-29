# generator-choo
[![npm version](https://badge.fury.io/js/generator-choo.svg)](https://badge.fury.io/js/generator-choo) [![Build Status](https://travis-ci.org/trainyard/generator-choo.svg?branch=master)](https://travis-ci.org/trainyard/generator-choo) ![MIT Licensed](https://img.shields.io/npm/l/generator-choo.svg)
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

### Similar Projects
- [generator-choo-webpack](https://github.com/danneu/generator-choo-webpack) - the minimal choo + webpack yeoman project generator

There are a number of build scripts that are not complete yet, but will be available soon, specifically around testing and deploying, along with scaffolding out different parts.

Stay tuned!!!!

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

