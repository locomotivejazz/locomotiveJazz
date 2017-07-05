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
          titolo: "LA MUSICA NASCE DALLE PERIFERIE",
          data: "14 LUGLIO",
          luogo: "MONTERONI DI LECCE",
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
              }
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
              }
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
            }
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
            }
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
            }
        ]
    },
    {
        image:'img/event1.png',
        id: 6,
        titolo: "LA MUSICA NASCE DALLE PERIFERIE",
        data: "27 LUGLIO",
        luogo: "ACAYA-VERNOLE (LE)",
        luogoMaps: {
            lat: 343,
            log: 3434,
            titolo: "Castello di Acaya"
        },
        programma: [
            {
                ore: "20:30/INGRESSO LIBERO",
                descrizione: "<p>PURPLE WHALES – JIMI HENDRIX               </p>"+
                             "<p>SIMONE GRAZIANO Fender Rhodes, piano, synth</p>"+
                             "<p>ALESSANDRO LANZONI Fender Rhodes, piano    </p>"+
                             "<p>NAOMI BERRILL voce, violoncello            </p>"+
                             "<p>FRANCESCO BIGONI sax tenore                </p>"+
                             "<p>STEFANO TAMBORRINO batteria                </p>"+
                             "<p>DIMITRI GRECHI ESPINOZA sax                </p>"
            },
            {
                ore: "23:30",
                descrizione: "FEDERICO ZAMPAGLIONE ospite speciale",
                titolo: "NOTTE LOCOMOTIVE 2017",
                luogo: "PARCO NATURALE DELLE CESINE VERNOLE (LE)",
                luogoMaps: {
                    lat: 343,
                    log: 3434,
                    titolo: "strada bianca"
                }
            }
        ]
    },
    {
        image:'img/event1.png',
        id: 7,
        titolo: "",
        data: "28 LUGLIO",
        luogo: "TRICASE (LE)",
        luogoMaps: {
            lat: 343,
            log: 3434,
            titolo: "Masseria Abbracciavento, C.da Cupole"
        },
        programma: [
            {
                ore: "22:00/INGRESSO LIBERO",
                descrizione: "<p>letture a cura del prof. GIGI MANGIA</p>"+
                             "<p>‘DA QUESTA PARTE DEL MARE’</p>"+
                             "<p>(letture tratte dal libro di GianMaria Testa)</p>"+
                             "<p>jam session live, dj set, aspettando l’Alba Locomotive</p>",
                titolo: "ALBA LOCOMOTIVE 2017",
                luogo: "",
                luogoMaps: {
                    lat: 343,
                    log: 3434,
                    titolo: "marina serra"
                }
            },
            {

                ore: "4:00 (nella notte tra il 28 e il 29 luglio)",
                descrizione: "<p>NOA & BAND </p>" +
                "<p>“LOVE MEDICINE” </p>"+
                    "<p>NOA voce e percussioni </p>"+
                "<p>GIL DOR chitarra e dir. musicale </p>"+
                    "<p>ADAM BEN-EZRA contrabbasso </p>"+
                "<p>GADI SERI percussioni </p>"
            }
        ]
    },
    {
        image:'img/event1.png',
        id: 8,
        titolo: "dreher night",
        data: "29 LUGLIO",
        luogo: "LECCE",
        luogoMaps: {
            lat: 343,
            log: 3434,
            titolo: "Anfiteatro Romano"
        },
        programma: [
                {
                    ore: "21:00",
                    descrizione: "<p>OPEN STAGE LUCA BANDIRALI & GUESTS</p><p> 'Street Selecta Part 1'  </p>",
                    titolo: "ALBA LOCOMOTIVE 2017",
                    luogo: "",
                    luogoMaps: {
                        lat: 343,
                        log: 3434,
                        titolo: "marina serra"
                    }
                },
                {

                    ore: "4:00 (nella notte tra il 28 e il 29 luglio)",
                    descrizione: "<p>NOA & BAND </p>"+
                                 "<p>“LOVE MEDICINE” </p>"+
                                 "<p>NOA voce e percussioni </p>"+
                                 "<p>GIL DOR chitarra e dir. musicale </p>"+
                                 "<p>ADAM BEN-EZRA contrabbasso </p>"+
                                 "<p>GADI SERI percussioni </p>"
                }
            ]
        }
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
