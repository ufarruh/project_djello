App.controller('BoardsCtrl', ['$scope', 'Restangular', '$stateParams', function($scope, Restangular, $stateParams){


  $scope.boards = Restangular.all('boards').getList().$object;
  $scope.boardForm = {};
  $scope.board = Restangular.one('boards', $stateParams.id).get().$object;

  $scope.create = function(){
    Restangular.all('boards').post({
      board: {
        title: $scope.boardForm.title,
        user_id: 2
      }
    }).then(function(response){
      console.log(response);
      $scope.boardForm = {};
      $scope.boards.push(response);
    });
  };


  $scope.deleteBoard = function(board){
    Restangular.one('boards', board.id).remove();
  };

}]);
