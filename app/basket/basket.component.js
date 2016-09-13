(function() {
  'use strict';

  angular
    .module('basket')
    .component('basket', {
      templateUrl: 'basket/basket.template.html',
      controller: BasketController,
      controllerAs: 'vm'
    });

  BasketController.$inject = ['order', 'utils'];

  function BasketController(order, utils) {
    var vm = this;

    vm.count = 0;
    vm.amount = 0;
    vm.countText = '';

    activate();

    ////////////////

    function activate() {
    }
  }
}());