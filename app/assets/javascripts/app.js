var App = angular.module("App", ['ui.router', 'restangular', 'ui.bootstrap', 'Devise']);


App.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');

  RestangularProvider.setRequestSuffix('.json');


}]);

App.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

  $stateProvider
    .state('boards', {
      url: '/boards',
      templateUrl: 'templates/boards.html',
      controller: 'BoardsCtrl'
    })

    .state('boards.show', {
      url: '/:id',
      views: {
        '@' : {
          templateUrl: 'templates/show.html',
          controller: 'BoardsCtrl'
        },
        'lists@boards.show' : {
          templateUrl: 'templates/_lists.html',
          controller: 'ListsCtrl'
        },
        'listForm@boards.show' : {
          templateUrl: 'templates/_listForm.html',
          controller: 'ListsCtrl'
        },
        'card@boards.show' : {
          templateUrl: 'templates/_card.html',
          controller: 'CardCtrl'
        }
      }
    })
}]);

App.config(
  ["$httpProvider",
  function($httpProvider) {
    var token = $('meta[name=csrf-token]')
      .attr('content');
    $httpProvider
      .defaults
      .headers
      .common['X-CSRF-Token'] = token;
  }]);
