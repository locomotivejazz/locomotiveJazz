var gulp = require('gulp');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');
var runSequence = require('run-sequence').use(gulp);

var paths = {
    www: "./www/",
    indexTemplate: './src/index.html',
    allSources: ["./src/**/*", "!./src/lib/*"],
    allVendor: ["./src/lib/*"],
    javascript: [
        'src/**/*.js',
        '!./src/lib/**'
    ],
    css: [
        'src/**/*.css',
        '!./src/lib/**'
    ],
    templates:[
        'src/**/*.html',
        '!src/index.html',
        '!./src/lib/**'
    ]
};

gulp.task("watch:change:dev",function(done){
    gulp.watch(['./src/**/*.js'], ["build:js:change:dev"]);
    gulp.watch(["./src/index.html"], ["build:index:change:dev"]);
    gulp.watch(["./src/**/*.html", "!./src/index.html"], ["build:html:change:dev"]);
    gulp.watch(["./src/**/*.css"],["build:css:change:dev"]);
    done();
});

gulp.task("build:js:change:dev",function(cb){
    runSequence(
        'build:jssources:copy:dev',
        ['build:index:dev','common:labels:build','common:environment'],
        cb);
});

gulp.task("build:index:change:dev",['build:index:dev']);

gulp.task("build:html:change:dev",function(cb){
    gulp.src(paths.templates)
        .pipe(gulp.dest(paths.www))
        .on('end',cb);
});

gulp.task("build:css:change:dev",function(cb){
    runSequence(
        'build:csssources:copy:dev',
        'build:index:dev',
        cb);
});