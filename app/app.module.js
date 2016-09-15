(function () {
  'use strict';

  angular
    .module('testShopApp', [
      'basket',
      'catalog',
      'checkout',
      'core.order',
      'core.page',
      'core.product',
      'core.utils',
      'ngAnimate',
      'ngDialog',
      'ngResource',
      'product',
      'ui.router',
      'zoomImg'
    ]);
}());