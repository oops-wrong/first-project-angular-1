(function() {
  'use strict';

  angular
    .module('product')
    .component('product', {
      templateUrl: 'product/product.template.html',
      controller: productController,
      controllerAs: 'vm'
    });

  productController.$inject = ['page', '$stateParams'];

  function productController(page, $stateParams) {
    var vm = this;

    vm.productId = $stateParams.productId;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Page of product');
    }
  }
}());