var app = angular.module('app')
  .controller('titleController', function($scope, cartService) {
    $scope.items = cartService.items;
  });
