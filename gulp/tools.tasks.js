/**
 * Created by francescocorvino on 14/07/17.
 */
var gulp = require('gulp');
var runSequence = require('run-sequence').use(gulp);
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var merge = require('gulp-merge-json');

gulp.task('generate:events',function(cb){
    var options = {
        fileName: 'eventi.json',
        concatArrays: true,
        edit: function(parsedJson, file){
            console.log("file: ", parsedJson);
            var ret = {};
            ret.eventi = [parsedJson];
            return ret;
        },
        startObj: { eventi: 'defaultValue' }
    };
    gulp.src("src/mock/evento/*.json")
        .pipe(merge(options))
        .pipe(gulp.dest("src/mock/"))
        .on('end',cb);
});

gulp.task('inject:eventi',function(){

    gulp.src('./www/js/app.js')
        .pipe(inject(gulp.src(['./src/mock/eventi.json']), {
            starttag: '/* inject:eventi */',
            endtag: '/* endinject:eventi */',
            transform: function (filePath, file) {
                // return file contents as string
                var string = file.contents.toString('utf8')
                var ret = "var json = " + string + "; eventi = json.eventi;";
                return ret;
            }
        }))
        .pipe(gulp.dest('app.js'));

})