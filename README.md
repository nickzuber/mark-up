
[markup](https://github.com/nickzuber/markup)
========

Create & share TeX snippets with rich math typesetting and markdown support.

[![Build Status](https://travis-ci.org/nickzuber/markup.svg?branch=master)]()
[![Deps Status](https://david-dm.org/nickzuber/markup/status.svg)]()
[![License](https://img.shields.io/badge/license-MIT%20Licence-blue.svg)]()

Overview
--------

Blah.

Contributing
-----

```
$ git clone git@github.com:nickzuber/markup.git
$ cd markup
$ npm install
```

If npm is giving you a hard time for whatever reason, try removing the lock file and reinstalling dependencies.

```
$ rm package-lock.json
$ npm install
```

And if _that_ doesn't work, try using npm version 5.0.2

```
$ npm i -g npm@5.0.2
```

#### Building

Once everything is installed, build the app with

```
$ npm run build:app
```

#### Developing

You generally want to build the css and app at the same time. We use hot loading with webpack. 

```
$ npm run build:sass & npm run dev &
```

Code will recompile as you save it in real time (woo!)

License
-------

This software is free to use under the MIT License. See [this reference](https://opensource.org/licenses/MIT) for license text and copyright information.