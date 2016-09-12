(function() {
  'use strict';

  angular
    .module('checkout')
    .component('checkout', {
      templateUrl: 'checkout/checkout.template.html',
      controller: CheckoutController,
      controllerAs: 'vm'
    });

  CheckoutController.$inject = ['page'];

  function CheckoutController(page) {
    var vm = this;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Checkout');
    }
  }
}());