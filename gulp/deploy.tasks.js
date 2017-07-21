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



gulp.task('deploy:prod:android',['build'],function(cb){
    var date = new Date();
    var dateStr = date.getDate()  + (date.getMonth() + 1) + date.getFullYear();
    var fileApk = "./platforms/android/build/outputs/apk/",
        nameApk = "android-release-unsigned.apk",
        outputFile = "LocomotiveJazz_1.1_" + dateStr + ".apk";

    var androidBuild = "ionic build android --release";
    /*
    var apkJarsign = "jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 " +
        "-keystore keystore/links.keystore -storepass Links2016 \"" + fileApk + nameApk + "\" paskey";
        */
    var apkJarsign = "jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 " +
        "-keystore keystore/LinksBGStore.keystore -storepass Links2016 \"" + fileApk + nameApk + "\" LinksBGStore";
    var apkZipalign = "./zipalign -f -v 4 \"" + fileApk + nameApk +  "\" " +
        "\"" + outputFile +"\"";




    exec.execSync(androidBuild);
    exec.execSync(apkJarsign);
    exec.execSync(apkZipalign);

    gulp.src(outputFile )
        .pipe(gulp.dest("build/prod/",{overwrite:true}))
        .on('end',cb);
});
