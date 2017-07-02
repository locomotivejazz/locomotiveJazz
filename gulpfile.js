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

/**
 * sceglie il processo di compilazione in base ai parametri passati
 * @returns {*}
 */
function selectedBuild(){
    var commandOptions = minimist(process.argv.slice(2), config.commandOptions);
    return commandOptions.buildFor || config.commandOptions.default.env;
}

function selectTaskForBuild(){
    switch(selectedBuild()){
        case 'prod': return ['build:prod'];
            break;
        default: return ['build:dev'];
    }
}

function selectTaskForDevice(){
    switch(selectedBuild()){
        case 'prod':return ['build:device:prod'];
            break;
        default: return ['build:device:dev'];
    }
}

function selectTaskForWatch(done){
    var envString =  selectedBuild();
    console.log("inizio watch per " + envString);
    if(envString=="prod") gulp.start('watch:change:prod');
    else gulp.start("watch:change:dev");
    done();
}

gulp.task('build', selectTaskForBuild());

gulp.task('watch', ['build'], selectTaskForWatch);

gulp.task('serve:before',['watch']);

/**
 * Task entry point per le build su device
 *
 * Si veda l'hook di avvio di questo task:
 *
 * hooks/before_prepare/010_build.js
 */
gulp.task('build:device',selectTaskForDevice());

/**
 * Task da eseguire su aggiornamento delle librerie
 *
 * Ripulisce index.html e richiama l'inject di tutte le librerie
 */
gulp.task('bower:change',['clean','build']);
