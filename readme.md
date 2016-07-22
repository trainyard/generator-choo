# generator-choo

A yeoman generator for choo.

## Quick Start

Because we haven't officially reuleased yet, installation is done via github.  To install, clone the repo then use `npm link` - the current version should be working.  More thorough instructions below:

### Installation

Use git clone to download the repo, the following command will download and unpack it in a directory called `generator-choo`
```
git clone https://github.com/trainyard/generator-choo
```
Next, install the generator's dependencies and then run npm link:
```
cd generator-choo ; npm install && npm link -g
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

There are a number of build scripts that are not complete yet, but will be available soon. Specifically around testing and deploying, along with scaffolding out different parts.

Stay tuned!!!!

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)
