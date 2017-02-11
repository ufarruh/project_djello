App.controller('ListsCtrl', ['$scope', 'Restangular', '$stateParams', '$location',
                              function($scope, Restangular, $stateParams, $location){

  $scope.listForm = {}

  $scope.lists = Restangular.one('boards', $stateParams.id).all('lists').getList().$object;
  $scope.boardId = $stateParams.id;
  

  $scope.createList = function(board){
    Restangular.one('boards', $stateParams.id).all("lists").post({
      list: { title: $scope.listForm.title }
    }).then(function(response){
        $location.path('/boards/' + $stateParams.id)
        $scope.listForm = {}
        $scope.lists = Restangular.one('boards', $stateParams.id).all('lists').getList().$object;
    });
  };


  $scope.deleteList = function(list){
    Restangular.one('boards', $stateParams.id).one('lists', list.id).remove();
    $scope.lists = Restangular.one('boards', $stateParams.id).all('lists').getList().$object;
    $location.path('/boards/' + $stateParams.id);
  };

}]);
