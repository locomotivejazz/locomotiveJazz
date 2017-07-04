/**
 * Created by francescocorvino on 03/07/17.
 */
angular.module('locomotivejazz.service', [])

.service('EventiServizio',function(){
    var servizio = {};

    servizio.getEventi = function(){
        var servizi = [
               { luogo: '1.1', id: 1 , data: new Date() ,  image:'img/event1.png'   },
               { luogo: '2.2', id: 2 , data: new Date() ,   image:'img/evento2.png'  },
               { luogo: '3.3', id: 3 , data: new Date() ,   image:'img/evento3.png'  },
               { luogo: '4.4', id: 4 , data: new Date() ,   image:'img/event1.png'   },
               { luogo: '5.5', id: 5 },
               { luogo: '6.6', id: 6 }
                        ];
                })
        return servizi;
    };

    return servizio;
});
