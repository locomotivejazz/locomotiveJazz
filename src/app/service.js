/**
 * Created by francescocorvino on 03/07/17.
 */
angular.module('locomotivejazz.service', [])

.service('EventiServizio',function(){
    var servizio = {};
    var servizi = [
        { luogo: '1.1', id: 1 , data: new Date() ,  image:'img/event1.png' , isEventoInEvidenza: true  },
        { luogo: '2.2', id: 2 , data: new Date() ,   image:'img/evento2.png' , isEventoInEvidenza: false },
        { luogo: '3.3', id: 3 , data: new Date() ,   image:'img/evento3.png', isEventoInEvidenza: false  },
        { luogo: '4.4', id: 4 , data: new Date() ,   image:'img/event1.png' , isEventoInEvidenza: true  },
        { luogo: '5.5', id: 5 },
        { luogo: '6.6', id: 6 }
    ];

    servizio.getEventi = function(){

        return servizi;
    };

    servizio.getEvento = function(idEvento){
        for(var i=0;i<servizi.length; i++){
            if(servizi[i].id == idEvento){
                return servizi[i];
            }
        }
    };


    return servizio;
});
