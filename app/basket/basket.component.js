(function() {
  'use strict';

  angular
    .module('basket')
    .component('basket', {
      templateUrl: 'basket/basket.template.html',
      controller: BasketController,
      controllerAs: 'vm'
    });

  BasketController.$inject = [];

  function BasketController() {
    var vm = this;
  }
}());