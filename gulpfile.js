var gulp = require('gulp');
var gutil = require('gulp-util');
var minimist = require('minimist');

/**
 * Abilitazione cartella gulp per le configurazioni di gulp
 */
require('require-dir')('./gulp', { recurse : true } );
var config = require( './gulp/config' );
var paths = config.paths;

gulp.task('default', ['build']);

gulp.task('build', function(){

});

gulp.task('watch', ['build'], function(){

});

gulp.task('serve:before',['watch']);

