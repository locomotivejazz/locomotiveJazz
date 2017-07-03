angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('HomeCtrl', function($scope, $state,EventiServizio ) {
  $scope.vaiDettaglioEvento = function(evento){
    console.log("Ho ricevuto il click su: ", evento);
    $state.go("app.evento",{eventoId: evento.id})
  };

  $scope.eventi = EventiServizio.getEventi();
})

.controller('PlaylistCtrl', function($scope, $stateParams, EventiServizio) {

        $scope.eventi = EventiServizio.getEventi();
});
