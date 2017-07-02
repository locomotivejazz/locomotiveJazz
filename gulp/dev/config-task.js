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
    ]
};

gulp.task('build:dev',['build:sources:copy:dev','build:vendor:copy:dev', 'build:index:dev'], function(cb){
    // attende il completamento del copy per configurare l'environment e le labels
    runSequence(['common:labels:build','common:environment'],'dev:replace',cb);
});

gulp.task('build:device:dev',['build:dev']);

gulp.task('build:sources:copy:dev',function(cb){
    gulp.src(paths.allSources)
        .pipe(gulp.dest(paths.www))
        .on('end',cb);
});

gulp.task('build:jssources:copy:dev',function(cb){
    gulp.src(paths.javascript)
        .pipe(gulp.dest(paths.www))
        .on('end',cb);
});

gulp.task('build:vendor:copy:dev',function(cb){
    gulp.src(paths.allVendor,{base: 'src' })
        .pipe(gulp.dest(paths.www))
        .on('end',cb);
});

gulp.task("build:sourcescss:copy:dev",function(cb){
    gulp.src(paths.css)
        .pipe(gulp.dest(paths.www))
        .on('end',cb);
});

/**
 * Inject librerie e moduli js
 */
gulp.task('build:index:dev',function(cb){
    gulp.src(paths.indexTemplate)
        .pipe(inject(
            gulp.src(paths.javascript)
                .pipe(angularFilesort())
            , {relative: true}))
        .pipe(inject(
            gulp.src(paths.css), {relative: true}))
        .pipe(gulp.dest(paths.www))
        .on('end',cb);
});