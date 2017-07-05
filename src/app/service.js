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
              titolo: ">>Palazzo Baronale"
          },
          programma: [
              {
                  ore: "ore 11:00",
                  descrizione: "conferenza La Musica nasce dalle Periferie  <p> in collaborazione con Università del Salento </p>"
              },
              {
                  ore: "ore 20:30",
                  descrizione: "<p>Consegna premio</p>" +
                                "<p><b>Ricerca e innovazione 2017-Città di Monteroni</b> </p>" +
                                   "<p>Riconoscimento alle eccellenze dell'Università del Salento</p>"
              },
              {
                  ore: "ore 21:30/INGRESSO LIBERO",
                  descrizione: "<h4><b>DANILO REA</b></h4>"+
                                "Piano solo"
              },
              {
                  ore: "dalle ore 23:00 in poi",
                  descrizione: "<b>AFTER CONCERT</b>"+
                                "<p>presso CANTINA APPOLONIO</p>"+
                                "<p>Jam session live</p>"
              },
          ]
      },
      {
          image:'img/evento2.png',
          id: 2,
          titolo: "LA MUSICA NASCE DALLE PERIFERIE",
          data: "22 LUGLIO",
          luogo: "LECCE",
          luogoMaps: {
              lat: 343,
              log: 3434,
              titolo: ">>Piazza Sant'Oronzo - Mosaico della Lupa"
          },
          programma: [
              {
                  ore: "ore 19:00/INGRESSO LIBERO",
                  descrizione: "<p> sonorizzazione restauro <i>de La Lupa</i>  </p>"+
                               "<p> con <b>DINO RUBINO</b> piano solo  </p>"
              },
              {
                  luogo:">>Basilica di Santa Croce",
                  ore: "ore 19:30/INGRESSO LIBERO",
                  descrizione: "<p> sonorizzazione restauro Basilica di Santa Croce </p>"+
                                "<p> con <b>PAOLO FRESU</b> solo  </p>"

              },
              {
                  luogo:">>Rettorato Università del Salento",
                  ore: "ore 22:00",
                  descrizione: "<h4 class='red-text'><b>PAOLO FRESU</b></h4>"+
                               "<h4 class='red-text'><b>'AROUND TUK'</b></h4>"+
                               "<h5><b>PAOLO FRESU</b></h5>"+
                               "<p>tromba-flicorno-elettronica</p>"+
                               "<h5><b>RAFFAELE CASARANO</b></h5>"+
                               "<p>sax contralto,soprano,elettronica</p>"+
                               "<h5><b>DINO RUBINO</b></h5>"+
                               "<p>piano e tromba</p>"+
                               "<h5><b>MIRKO SIGNORILE</b></h5>"+
                               "<p>piano</p>"+
                               "<h5><b>MARCO BARDOSCIA</b></h5>"+
                               "<p>contrabbasso</p>"+
                               "<h5><b>ENRICO MORELLO</b></h5>"+
                               "<p>batteria</p>"

              },
              {
                  descrizione: "PREVENDITE SU BOOKINGSHOW.IT"
              }

          ]
      },
      {
          image:'img/evento3.png',
          id: 3,
          titolo: "FROM STATION TO STATION VINTAGE EDITION 2017",
          data: "23 LUGLIO",
          luogo: "da BARI a MATERA",
          luogoMaps: {
              lat: 343,
              log: 3434,
              titolo: ""
          },
          programma: [
              {
                  ore: "ore 17:00",
                  descrizione: "<p> inaugurazione e viaggio di una Locomotiva a vapore del 1932 da Bari a Matera  </p>"+
                               "<p> From Station to Station da Bari a Matera  </p>"+
                               "<p> “Binario Sonoro Puglia - Basilicata” </p>"+
                               "<p> partenza dalla stazione di Bari Centrale</p>"+
                               "<p> <b>MIRKO SIGNORILE</b> piano solo </p>"
              },
              {
                  titolo:"<p> TRILOGIA </p>"+
                  "<p>TRAMONTO LOCOMOTIVE 2017</p>",
                  ore: "ore 17:30/Partenza TRENO",
                  descrizione: "<p> prima sosta Grumo Appula </p>"+
                                "<p> seconda sosta (degustazione) Altamura  </p>"

              },
              {
                  luogo:"",
                  ore: "ore 21:30/Arrivo a Matera Villa Longo",
                  descrizione: "<p>POSTI DISPONIBILI n° 121, seconda classe € 20</p>"+
                               "<p>In vendita su <b> www.rotaiedipuglia.it</b></p>"+
                               "<p>info: Luigi Mighali 3471225188</p>"
              },
              {
                  ore: "ore 21:30/Arrivo a Matera, Stazione Villa Longo",
                  descrizione: "<p> passeggiata sonora tra i Sassi  </p>"+
                               "<p> con <b> ‘LOCOMOTIVE ORCHESTRA’</b>  </p>"+
                               "<p> e la partecipazione speciale </p>"+
                               "<p>dell’attrice <b>STEFANIA ROCCA</b></p>"
              },
              {
                  ore: "",
                  luogo: ">>Casa Cava/INGRESSO LIBERO",
                  descrizione: "<p> LIVE JAM SESSION  </p>"+
                               "<p> <i>Un evento Ferrovie Appulo Lucane e con la collaborazione</i> </p>"+
                               "<p> <i>di Gezziamoci Festival Ass. Onyx jazz e Ass. Biagio Mattatelli</i> </p>"
              },
              {
                  ore: "",
                  descrizione: "<p class='green-text'> Ritorno a Bari con gli autobus  </p>"+
                               "<p class='green-text'> delle Ferrovie Appulo Lucane </p>"
              },
              {
                  descrizione: "PREVENDITE SU BOOKINGSHOW.IT"
              }

          ]
      },
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
