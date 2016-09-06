var app = angular.module('app')
  .controller('cartController', function($scope, cartService) {
    $scope.items = cartService.items;
    $scope.addCat = () => {
      cartService.addItem({name: 'Cat', price: "4.5"})
    };
    $scope.addSheep = () => {
      cartService.addItem({name: 'Sheep', price: "19.75"})
    };
  });

