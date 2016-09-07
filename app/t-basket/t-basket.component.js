(function() {
  'use strict';

  angular
    .module('tBasket')
    .component('tBasket', {
      templateUrl: 't-basket/t-basket.template.html',
      controller: tBasketController,
      controllerAs: 'basket'
    });

  tBasketController.$inject = [];

  function tBasketController() {
    var vm = this;
  }
}());