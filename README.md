# gulp-symfony
Split [Gulp](http://gulpjs.com/) tasks into multiple *.js files (e.g., among [Bundles](http://symfony.com/doc/current/bundles.html)).

[![Latest Version][latest-version-image]][latest-version-url]
[![Downloads][downloads-image]][downloads-url]
[![License][license-image]][license-url]

Preview
-----
```js
const gulp = require('gulp'),
    symfony = require('gulp-symfony');

symfony(gulp);

// or pass custom options
symfony(gulp, {
    bundles: 'src/*',
    filename: 'gulptasks.js',
    namespace: (bundle, task) => {
        // return task
    }
});
```

Documentation
-------
To view installation and usage instructions, visit this [Wiki](https://github.com/vaibhavpandeyvpz/gulp-symfony/wiki).

License
-------
See [LICENSE.md][license-url] file.

[latest-version-image]: https://img.shields.io/github/release/vaibhavpandeyvpz/gulp-symfony.svg?style=flat-square
[latest-version-url]: https://github.com/vaibhavpandeyvpz/gulp-symfony/releases
[downloads-image]: https://img.shields.io/npm/dt/gulp-symfony.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/gulp-symfony
[license-image]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[license-url]: LICENSE.md
