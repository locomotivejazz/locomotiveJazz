/**
 * Created by francescocorvino on 03/07/17.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var rename = require('gulp-rename');

var angularFilesort = require('gulp-angular-filesort');
var templateCache = require('gulp-angular-templatecache');
var mainBowerFiles = require('main-bower-files');
var jshint = require('gulp-jshint');

var sass = require('gulp-sass');



var paths = {
    sources: 'src',
    dest: 'www'
};
paths.javascript = paths.sources + '/app/**/*.js';
paths.html = paths.sources + '/app/**/*.html';
paths.css = paths.sources + '/css/**/*.css';
paths.sass = paths.sources + '/scss/ionic.app.scss';
paths.static = [
    paths.sources + '/img/**/*.*',
    paths.sources + '/fonts/**/*.*',
    paths.sources + '/lib/ionic/fonts/*.*'
];

paths.nameapp = 'locomotivejazz';
paths.indexTemplate = paths.sources + "/index.html";
paths.destjs = paths.dest + '/js/';
paths.destcss = paths.dest+ '/css';
paths.destvendor = paths.dest + '/vendor';

gulp.task('build:js:compact',function(cb){
    gulp.src(paths.javascript)
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(angularFilesort())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(paths.destjs))
        .on('end',cb);
});

gulp.task('build:js:libs',function(cb){
    var files = mainBowerFiles();
    console.log("Bower files: ", files);
    gulp.src(files)
        .pipe(gulp.dest(paths.destvendor))
        .on('end',cb);
});

gulp.task('build:templates:module',function(cb){
    gulp.src([paths.html,"!" + paths.sources + "/index.html"])
        .pipe(templateCache('app.templates.js', {
            module:'bg.templates',
            standalone: true,
            root: '',//Indica la path da filtrare per cercare il file nella template cache
            templateHeader: "'use strict';\nangular.module('<%= module %>'<%= standalone %>).run(['$templateCache', function($templateCache) {",
            templateBody: "\n$templateCache.put('<%= url %>', '<%= contents %>');",
            templateFooter: "}]); angular.module('"+paths.nameapp+ "').requires.push('<%= module %>');"
        }))
        .pipe(gulp.dest(paths.destjs))
        .on('end',cb);
});

gulp.task('build:sass',['build:css'],function(cb){
    gulp.src(paths.sass)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest(paths.destcss))
        .on('end', cb);

});

gulp.task('build:css',function(cb){
    gulp.src(paths.css)
        .pipe(gulp.dest(paths.destcss))
        .on('end',cb);
});

gulp.task('build:static',function(cb){
    gulp.src(paths.static,{relative: true, base: paths.sources})
        .pipe(gulp.dest(paths.dest))
        .on('end',cb);
});

gulp.task('build:index',function(cb){
    var opt = {ignorePath:"../" + paths.dest,relative: true};
    gulp.src(paths.indexTemplate)
        .pipe(inject(
            gulp.src(paths.destjs + "*.js")
                .pipe(angularFilesort()), opt))
        .pipe(inject(
            gulp.src([paths.destvendor + '/**/*.js', paths.destvendor + '/**/*.css']).pipe(angularFilesort()),
            {
                starttag: '<!-- bower:{{ext}} -->',
                endtag: '<!-- endbower -->',
                ignorePath:"../" + paths.dest,
                relative:true
            }
        ))
        .pipe(inject(
            gulp.src(paths.destcss + "**/*.css"), opt))
        .pipe(gulp.dest(paths.dest))
        .on('end',cb);
});

gulp.task("watch:change",function(done){
    console.log("passo dal watch di prod");
    gulp.watch(paths.javascript, ["build:js:compact"]);
    gulp.watch(paths.indexTemplate, ['build:index']);
    gulp.watch(paths.html , ['build:templates:module']);
    gulp.watch([paths.sass,paths.css],['build:sass']);
    gulp.watch(paths.static,['build:static']);
    done();
});


gulp.task("build:vendor:change", function(){
    console.log("Aggiornate le librerie ");
});