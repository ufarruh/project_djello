App.controller('CardCtrl', ['$scope', 'Restangular', function($scope, Restangular){

  $scope.cards = Restangular.all('cards').getList().$object;
  $scope.cardForm = {};


  $scope.createCard = function(){
    Restangular.all('cards').post({
      card: {
        description: $scope.cardForm.description,
        list_id: 
      }
    }).then(function(response){
      console.log(response);
      $scope.cardForm = {};
      $scope.cards = Restangular.all('cards').getList().$object;
    });
  };

}]);
