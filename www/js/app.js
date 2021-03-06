// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider,$urlRouterProvider, $ionicProvider){
  $stateProvider

  .state('tab',{
    url:'/tab',
    abstract: true,
    templateUrl: 'templates/tab.html'
  })

  .state('tab.home',{
    url:'/home',
    views{
      'tab-home':{
        templateUrl:'templates/home.html'
      }
    }
  })

  .state('tab.coche',{
    url:'/coche',
    views{
      'tab-coche':{
        templateUrl:'templates/coche.html',
        controller:'CocheCtrl'
      }
    }
  })

  .state('tab.comunidad',{
    url:'/comunidad',
    views{
      'tab-comunidad':{
        templateUrl:'templates/comunidad.html',
        controller:'ComunidadCtrl'
      }
    }
  })

  .state('tab.user',{
    url:'/user/:id',
    views{
      'tab-user':{
        templateUrl:'templates/user.html',
        controller:'UserCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('tab-home');
})
