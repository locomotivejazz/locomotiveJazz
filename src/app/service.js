/**
 * Created by francescocorvino on 03/07/17.
 */
angular.module('locomotivejazz.service', [])

.service('EventiServizio',function(){
    var servizio = {};
    var servizi = [
      {
          image:'img/event1.png',
          id: 1,
          titolo: "La musica nasce dalle periferie",
          data: "14 Luglio",
          luogo: "Monteroni di Lecce",
          luogoMaps: {
              lat: 343,
              log: 3434,
              titolo: "Palazzo Baronale"
          },
          programma: [
              {
                  ore: "11:00",
                  descrizione: "conferenza <i>\"La Musica nasce dalle Periferie\"</i><br/> in collaborazione con Università del Salento"
              },
              {
                  ore: "20:30",
                  descrizione: "conferenza \"La Musica nasce dalle Periferie\"<br/> in collaborazione con Università del Salento"
              },
          ]
      },
      {
          image:'img/evento2.png',
          id: 2,
          titolo: "La musica nasce dalle periferie",
          data: "22 Luglio",
          luogo: "Monteroni di Lecce",
          luogoMaps: {
              lat: 343,
              log: 3434,
              titolo: "Palazzo Baronale"
          },
          programma: [
              {
                  ore: "11:00",
                  descrizione: "conferenza <i>\"La Musica nasce dalle Periferie\"</i><br/> in collaborazione con Università del Salento"
              },
              {
                  ore: "20:30",
                  descrizione: "conferenza \"La Musica nasce dalle Periferie\"<br/> in collaborazione con Università del Salento"
              },
          ]
      },
        {
            image:'img/evento3.png',
            id: 3,
            titolo: "La musica nasce dalle periferie",
            data: "22 agosto",
            luogo: "Monteroni di Lecce",
            luogoMaps: {
                lat: 343,
                log: 3434,
                titolo: "Palazzo Baronale"
            },
            programma: [
                {
                    ore: "11:00",
                    descrizione: "conferenza <i>\"La Musica nasce dalle Periferie\"</i><br/> in collaborazione con Università del Salento"
                },
                {
                    ore: "20:30",
                    descrizione: "conferenza \"La Musica nasce dalle Periferie\"<br/> in collaborazione con Università del Salento"
                },
            ]
        },
        { luogo: '2.2', id: 4 , data: new Date() ,   image:'img/evento2.png' , isEventoInEvidenza: false },
        { luogo: '3.3', id: 5 , data: new Date() ,   image:'img/evento3.png', isEventoInEvidenza: false  },
        { luogo: '4.4', id: 6 , data: new Date() ,   image:'img/event1.png' , isEventoInEvidenza: true  },
        { luogo: '5.5', id: 7 },
        { luogo: '6.6', id: 8 }
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
