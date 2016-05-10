angular.module('pirates')
  .controller('PiratesController', ['$scope','PiratesService', function($scope, PiratesService) {
    $scope.view = {};

    $scope.getPirates = PiratesService.all().then(function(data) {
      $scope.pirates = data.data;
    });

    $scope.createPirate = function(pirate) {
      PiratesService.create(pirate);
    }

  }])
