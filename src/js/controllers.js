angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('HomeCtrl', function($scope, $state) {
  $scope.vaiDettaglioEvento = function(evento){
    console.log("Ho ricevuto il click su: ", evento);
    $state.go("app.evento",{eventoId: evento.id})
  };

  $scope.eventi = [
    { luogo: '', id: 1 , data: new Date()},
    { luogo: 'Chill', id: 2 , data: new Date()},
    { luogo: 'Dubstep', id: 3 },
    { luogo: 'Indie', id: 4 },
    { luogo: 'Rap', id: 5 },
    { luogo: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
