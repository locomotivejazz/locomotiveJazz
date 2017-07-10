/**
 * Created by francescocorvino on 10/07/17.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);

var exec = require('child_process');

gulp.task('deploy:android',['build'],function(cb){
    var androidBuild = "ionic build android --release";
    var fileApk = "./platforms/android/build/outputs/apk/";
    exec.execSync(androidBuild);

    gulp.src(fileApk + "*.apk")
        .pipe(gulp.dest("build/android/",{overwrite:true}))
        .on('end',cb);
});