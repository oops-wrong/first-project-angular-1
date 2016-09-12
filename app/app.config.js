(function() {
  'use strict';

  angular
    .module('testShopApp')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    var states = [
      {
        name: 'catalog',
        url: '/',
        template: '<catalog></catalog>'
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
}());