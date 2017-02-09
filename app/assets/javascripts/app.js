var App = angular.module("App", ['ui.router', 'restangular']);


App.config(['RestangularProvider', function(RestangularProvider){
  RestangularProvider.setBaseUrl('/api/v1');

  RestangularProvider.setRequestSuffix('.json');


}]);


App.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

  // $urlRouterProvider.otherwise('/board');

  $stateProvider
    .state('board', {
      url: '/board',
      templateUrl: 'templates/board.html',
      controller: 'BoardsCtrl'
    })

    .state('board.show', {
      url: '/:id',
      views: {
        '@' : {
          templateUrl: 'templates/show.html',
          controller: 'BoardsCtrl's
        }
      }
    })
}]);
