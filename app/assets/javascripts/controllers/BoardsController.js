App.controller('BoardsCtrl', ['$scope', 'Restangular', '$stateParams', 'Auth',
                              function($scope, Restangular, $stateParams, Auth){


  $scope.boardForm = {};
  $scope.board = Restangular.one('boards', $stateParams.id).get().$object;
  $scope.boards = Restangular.all('boards').getList().$object;


  Auth.currentUser()
    .then(function(user){
      $scope.currentUser = user;
    });


  $scope.create = function(){
    Restangular.all('boards').post({
      board: {
        title: $scope.boardForm.title,
        user_id: $scope.currentUser.id
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
