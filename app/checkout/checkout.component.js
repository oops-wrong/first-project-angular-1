(function() {
  'use strict';

  angular
    .module('checkout')
    .component('checkout', {
      templateUrl: 'checkout/checkout.template.html',
      controller: CheckoutController,
      controllerAs: 'vm'
    });

  CheckoutController.$inject = ['$rootScope', 'order', 'page', 'product'];

  function CheckoutController($rootScope, order, page, product) {
    var vm = this;

    vm.addCount = addCount;
    vm.items = [];
    vm.removeItem = removeItem;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Checkout');
      generateItemsList();
      initInputCounts();

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
      var result;

      if (!inputVal) {
        inputVal = 0;
      }

      result = inputVal + value;

      $input.val(normalizeCountValue(result));
      $input.trigger('change');
    }

    /**
     * Generate list of checkout items.
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
     * Set change event to count inputs.
     */
    function initInputCounts() {
      $(function () {
        var $inputs = $('.input-number');

        $inputs.on('keyup', function () {
          var $input = $(this);

          $input.val(normalizeCountValue($input.val()));
          $input.trigger('change');
        });
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