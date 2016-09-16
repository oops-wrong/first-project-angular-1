(function() {
  'use strict';

  angular
    .module('checkout')
    .component('checkout', {
      templateUrl: 'checkout/checkout.template.html',
      controller: CheckoutController,
      controllerAs: 'vm'
    });

  CheckoutController.$inject = ['$rootScope', 'order', 'orderProduct', 'page', 'product'];

  function CheckoutController($rootScope, order, orderProduct, page, product) {
    var vm = this;

    vm.addCount = addCount;
    vm.amount = 0;
    vm.items = [];
    vm.changeInput = changeInput;
    vm.removeItem = removeItem;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Checkout');
      generateItemsList();
      orderChanged();

      $rootScope.$on('order.add', orderListChanged);
      $rootScope.$on('order.remove', orderListChanged);
      $rootScope.$on('order.change', orderChanged);
    }

    /**
     * Add value to count input.
     * @param {Object} $event
     * @param {number} value
     */
    function addCount($event, value) {
      var $btn = $($event.target);
      var $container = $btn.closest('.count-group');
      var $input = $container.find('.input-number');
      var inputVal = $input.val() * 1;
      var count;

      if (!inputVal) {
        inputVal = 0;
      }

      count = inputVal + value;
      count = normalizeCountValue(count);

      $input.val(count);
      $input.trigger('change');
    }

    /**
     * Change input handler.
     * @param orderInfo
     */
    function changeInput(orderInfo) {
      var count = normalizeCountValue(orderInfo.count);
      var id = orderInfo.id;

      orderInfo.count = count;

      order.updateOrderItem({
        id: id,
        count: count
      });
    }

    /**
     * Generate list of checkout items combining product and order items.
     */
    function generateItemsList() {
      var orderList = order.getList();
      var productItem;
      vm.items = [];

      orderList.forEach(function (elem) {
        var checkoutItem;
        productItem = product.getProduct(elem.id);

        if (angular.isObject(productItem)) {
          checkoutItem = angular.copy(productItem);
          checkoutItem['orderInfo'] = elem;
          vm.items.push(checkoutItem);
        }
      });
    }

    /**
     * Get normal value of count input
     * @param {number} value
     * @returns {number}
     */
    function normalizeCountValue(value) {
      value *= 1;

      if (!value) {
        value = 0;
      }

      switch (true) {
        case value < 1:
          value = 1;
          break;

        case value > 99:
          value = 99;
          break;
      }

      return value;
    }

    /**
     * Order changed event handler.
     */
    function orderChanged() {
      vm.amount = orderProduct.getAmount();
    }

    /**
     * Order list changed (add or remove) event handler.
     */
    function orderListChanged() {
      generateItemsList();
    }

    /**
     * Remove item from order.
     * @param {string} id
     */
    function removeItem(id) {
      order.removeFromList(id);
    }
  }
}());