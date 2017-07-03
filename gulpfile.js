var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var del = require('del');

/**
 * Abilitazione cartella gulp per le configurazioni di gulp
 */
require('require-dir')('./gulp', { recurse : true } );
var config = require( './gulp/config' );
var paths = config.paths;

gulp.task('default', ['build']);

gulp.task('build', function(cb){
    runSequence(
        'build:js:compact',
        'build:templates:module',
        'build:sass',
        'build:static',
        'build:js:libs',
        'build:index',
        cb);
});

gulp.task('clear',function(cb){
    var build_dirs = ['www/*'];
    return del(build_dirs);
});

gulp.task('watch', function(){
    console.log("passo dal watch di prod");
    runSequence('build','watch:change');
});

gulp.task('serve:before',['clear','watch']);

