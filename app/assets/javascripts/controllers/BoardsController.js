App.controller('BoardsCtrl', ['$scope', 'Restangular', function($scope, Restangular){


  $scope.boards = Restangular.all('boards').getList().$object;
  
}]);
