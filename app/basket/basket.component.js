(function() {
  'use strict';

  angular
    .module('basket')
    .component('basket', {
      templateUrl: 'basket/basket.template.html',
      controller: BasketController,
      controllerAs: 'vm'
    });

  BasketController.$inject = ['$rootScope', 'orderProduct'];

  function BasketController($rootScope, orderProduct) {
    var vm = this;

    vm.amount = 0;
    vm.count = 0;
    vm.countText = '';

    activate();

    ////////////////

    function activate() {
      $rootScope.$on('order.change', orderChanged);
    }

    /**
     * Order changed event handler.
     */
    function orderChanged() {
      vm.amount = orderProduct.getAmount();
      vm.count = orderProduct.getListLength();
      vm.countText = orderProduct.getDeclCountText(vm.count);
    }
  }
}());