(function() {
  'use strict';

  angular
    .module('product')
    .component('product', {
      templateUrl: 'product/product.template.html',
      controller: productController,
      controllerAs: 'vm'
    });

  productController.$inject = ['$stateParams'];

  function productController($stateParams) {
    var vm = this;

    vm.productId = $stateParams.productId;
  }
}());