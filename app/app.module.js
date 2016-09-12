(function () {
  'use strict';

  angular
    .module('testShopApp', [
      'basket',
      'catalog',
      'checkout',
      'core.product',
      'ngDialog',
      'ngResource',
      'product',
      'ui.router'
    ]);
}());