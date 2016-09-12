(function() {
  'use strict';

  angular
    .module('checkout')
    .component('checkout', {
      templateUrl: 'checkout/checkout.template.html',
      controller: checkoutController,
      controllerAs: 'vm'
    });

  checkoutController.$inject = [];

  function checkoutController() {
    var vm = this;
  }
}());