# generator-choo

A [Yeoman](http://yeoman.io/) generator for [Choo](https://github.com/yoshuawuyts/choo).

## Quick Start

Because we haven't officially released yet, installation is done via github.  To install, clone the repo then use `npm link` (explained below) - the current version should be working.  More thorough instructions below:

### Installation

Make sure you have [Yeoman](http://yeoman.io/) and [Link](https://docs.npmjs.com/cli/link) installed globally.

```
npm install link yo -g
```

Use git clone to pull down the repo, the following command will download and unpack it in a directory called `generator-choo`
```
git clone https://github.com/trainyard/generator-choo
```
Next, `cd` into the directory, install the generator's dependencies, and then run `npm link`:
```
cd generator-choo; npm install && npm link
```
Awesome, you are now ready to use it!

### Usage

To use, make a new directory, hop into it and then run `yo choo`

```
mkdir my-choo-app && cd my-choo-app && yo choo
```

Follow the prompts to victory!!! Once the process is complete your app should be ready, you can use the following commands:

 - `npm start` -- Starts up a dev server with live reloading
 - `npm run build:prod` -- Builds a production ready index.html and bundle.js that you can serve remotely.
 - `npm run lint` -- Lints your code.

There are a number of build scripts that are not complete yet, but will be available soon, specifically around testing and deploying, along with scaffolding out different parts.

Stay tuned!!!!

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)
