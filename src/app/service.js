/**
 * Created by francescocorvino on 03/07/17.
 */
angular.module('locomotivejazz.service', [])

.service('EventiServizio',function(){
    var servizio = {};

    servizio.getEventi = function(){
        var servizi = [
            { luogo: '', id: 1 , data: new Date()},
            { luogo: 'Chill', id: 2 , data: new Date()},
            { luogo: 'Dubstep', id: 3 },
            { luogo: 'Indie', id: 4 },
            { luogo: 'Rap', id: 5 },
            { luogo: 'Cowbell', id: 6 }
        ];
        return servizi;
    };

    return servizio;
});
