gulp-yuicompressor
=============

> ⚠️ This module is deprecated. please use gulp-uglify instead.

## Install

```
npm install --save-dev gulp-yuicompressor
```

## Examples
```js
var gulp = require('gulp');
var compress = require('gulp-yuicompressor');

gulp.task('mini', function () {
	gulp.src('asset/**/*.js')
		.pipe(compress({
			type: 'js'
		}))
		.pipe(gulp.dest('dest'));
});
```
