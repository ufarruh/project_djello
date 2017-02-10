var App = angular.module("App", ['ui.router', 'restangular', 'ui.bootstrap', 'Devise']);


App.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');

  RestangularProvider.setRequestSuffix('.json');


}]);

App.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

  //$urlRouterProvider.otherwise('/board');

  $stateProvider
    .state('board', {
      url: '/board',
      templateUrl: 'templates/boards.html',
      controller: 'BoardsCtrl'
    })

    .state('board.show', {
      url: '/:id',
      views: {
        '@' : {
          templateUrl: 'templates/show.html',
          controller: 'BoardsCtrl'
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
