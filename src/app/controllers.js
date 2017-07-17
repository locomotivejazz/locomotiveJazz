angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, socialService, $timeout) {

    $scope.actions = socialService;
})

.controller('HomeCtrl', function($scope, $state, $filter, EventiServizio, socialService ) {
  $scope.vaiDettaglioEvento = function(evento){
    console.log("Ho ricevuto il click su: ", evento);
    $state.go("app.evento",{eventoId: evento.id});
  };

  $scope.servizi = socialService;

  $scope.isEventoFree = function(evento){
      if(evento){
          if(evento.booking){
              if(evento.booking.lenght>0) return false;
          }
          return true;
      }
      return false;
  }

  $scope.eventi = EventiServizio.getEventi();

  $scope.prossimiEventi = EventiServizio.getProssimiEventi();
})

.controller('DettaglioEventoCtrl', function($scope, $stateParams, EventiServizio, socialService) {
    var idEvento = $stateParams.eventoId;

    console.log("Parametro dell'evento:", idEvento);

    $scope.evento = EventiServizio.getEvento(idEvento);

    $scope.servizi = socialService;

    console.log("Ritorna l'evento", $scope.evento);
});
