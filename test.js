'use strict';
var assert = require('assert');
var gulp = require('gulp');
var concatStream = require('concat-stream');
var compress = require('./');

describe('compress', function () {
	it('js', function (cb) {
		gulp.src('fixture/src/minify.js')
			.pipe(compress())
			.pipe(gulp.dest('fixture/dest'))
			.pipe(concatStream(function(buf){
				buf.forEach(function(item){
					assert.equal(-1, item.contents.toString().indexOf('message'));
				});

				cb();
			}));
	});

	it('css', function (cb) {
		gulp.src('fixture/src/minify.css')
			.pipe(compress({
				type: 'css'
			}))
			.pipe(gulp.dest('fixture/dest'))
			.pipe(concatStream(function(buf){
				buf.forEach(function(item){
					assert.notEqual(-1, item.contents.toString().indexOf('message'));
				});

				cb();
			}));
	});
});