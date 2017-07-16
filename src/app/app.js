// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('locomotivejazz', ['ionic', 'starter.controllers','locomotivejazz.service','locomotivejazz.common'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

      .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('app.info', {
      url: '/info',
      views: {
        'menuContent': {
          templateUrl: 'templates/info.html'
        }
      }
    })

    .state('app.eventi', {
        url: '/eventi',
        views: {
          'menuContent': {
            templateUrl: 'templates/eventi.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('app.prossimieventi', {
          url: '/prossimieventi',
          views: {
              'menuContent': {
                  templateUrl: 'templates/prossimieventi.html',
                  controller: 'HomeCtrl'
              }
          }
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('app.test', {
        url: '/test',
        views: {
          'menuContent' : {
            templateUrl: 'templates/test.html'
          }
        }
      })
  .state('app.contatti', {
    url: '/contatti',
    views: {
      'menuContent' : {
        templateUrl: 'templates/contatti.html'
      }
    }
  })
    .state('app.evento', {
      url: '/evento/:eventoId',
      cache:false,
      views: {
        'menuContent': {
          templateUrl: 'templates/evento.html',
          controller: 'DettaglioEventoCtrl'
        }
      }

    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
