App.controller('BoardsCtrl', ['$scope', 'Restangular', '$stateParams', 'Auth', '$location',
                              function($scope, Restangular, $stateParams, Auth, $location){


  $scope.boardForm = {};
  $scope.board = Restangular.one('boards', $stateParams.id).get().$object;
  $scope.boards = Restangular.all('boards').getList().$object;

  $scope.listForm = {};

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
    console.log($scope.boards);
    $location.path('/boards');
  };

}]);
