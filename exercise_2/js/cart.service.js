var app = angular.module('app')
  .service('cartService', function() {
    this.items = [];
    this.addItem = ( item ) => {
      this.items.push( item );
    }
  });
