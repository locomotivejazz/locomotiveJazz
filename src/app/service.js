/**
 * Created by francescocorvino on 03/07/17.
 */
angular.module('locomotivejazz.service', [])

.service('EventiServizio',function(){
    var servizio = {};
    var eventi = [];

    /* inject:eventi */
    /* endinject:eventi */

    servizio.getEventi = function(){
        return eventi;
    };

    servizio.getEvento = function(idEvento){
        for(var i=0;i<eventi.length; i++){
            if(eventi[i].id == idEvento){
                return eventi[i];
            }
        }
    };

    servizio.getProssimiEventi = function(n){
        var dataCorrente = (new Date()).getTime();
        var pEventi = [];
        c = 0;
        for(var i=0;i<eventi.length; i++){
            if(parseInt(eventi[i].dataEstesa) > dataCorrente){
               pEventi.push(eventi[i]);
               c++;
            }
            if(n) if(c>=n){
                break;
            }
        }
        return pEventi;
    };


    return servizio;
});
