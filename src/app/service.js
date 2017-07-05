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
                  descrizione: "<h4><b>PAOLO FRESU</b></h4>"+
                               "<h4><b>'AROUND TUK'</b></h4>"+
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
