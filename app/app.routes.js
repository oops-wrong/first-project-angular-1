(function() {
  'use strict';

  angular
    .module('testShopApp')
    .config(config);

  config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

  function config($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    var states = [
      {
        name: 'catalog',
        url: '/',
        template: '<catalog products="$resolve.products"></catalog>',
        resolve: {
          products: productsPrep
        }
      },
      {
        name: 'product',
        url: '/catalog/{productId}',
        template: '<product></product>'
      },
      {
        name: 'checkout',
        url: '/checkout',
        template: '<checkout></checkout>'
      }
    ];

    states.forEach(function (state) {
      $stateProvider.state(state);
    });
  }

  productsPrep.$inject = ['product'];

  function productsPrep(product) {
    return product.getQuery().$promise;
  }
}());