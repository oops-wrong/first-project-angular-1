(function() {
  'use strict';

  angular
    .module('checkout')
    .component('checkout', {
      templateUrl: 'checkout/checkout.template.html',
      controller: checkoutController,
      controllerAs: 'vm'
    });

  checkoutController.$inject = ['page'];

  function checkoutController(page) {
    var vm = this;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Checkout');
    }
  }
}());