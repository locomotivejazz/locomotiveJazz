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
        {
            image:'img/event1.png',
            id: 4,
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
            image:'img/event1.png',
            id: 5,
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
            image:'img/event1.png',
            id: 6,
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
            image:'img/event1.png',
            id: 7,
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
            image:'img/event1.png',
            id: 8,
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
            image:'img/event1.png',
            id: 9,
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
            image:'img/event1.png',
            id: 10,
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
            image:'img/event1.png',
            id: 11,
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
        { luogo: '2.2',   id: 4 ,  image:'img/evento2.png'    },
        { luogo: '3.3',   id: 5 ,  image:'img/evento3.png'    },
        { luogo: '4.4',   id: 6 ,  image:'img/event1.png'     },
        { luogo: '5.5',   id: 7 ,  image:'img/event1.png'     },
        { luogo: '6.6',   id: 8 ,  image:'img/event1.png'     },
        { luogo: '7.7',   id: 9 ,  image:'img/evento2.png'    },
        { luogo: '8.8',   id: 10 ,  image:'img/evento2.png'   },
        { luogo: '9.9',   id: 11,  image:'img/evento2.png'    },
        { luogo: '10.10', id: 12 ,  image:'img/evento2.png'   },
        { luogo: '11.11', id: 13,  image:'img/evento2.png'    },
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
