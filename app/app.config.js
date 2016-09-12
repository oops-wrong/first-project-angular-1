(function() {
  'use strict';

  angular
    .module('testShopApp')
    .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
      var catalogState = {
        name: 'catalog',
        url: '/',
        template: '<catalog></catalog>'
      };

      var productState = {
        name: 'product',
        url: '/{productId}',
        template: '<product></product>'
      };

      var basketState = {
        name: 'basket',
        url: '/basket',
        template: '<basket></basket>'
      };

      $stateProvider.state(catalogState);
      $stateProvider.state(productState);
      $stateProvider.state(basketState);
    }
}());