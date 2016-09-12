(function() {
  'use strict';

  angular
    .module('product')
    .component('product', {
      templateUrl: 'product/product.template.html',
      controller: ProductController,
      controllerAs: 'vm'
    });

  ProductController.$inject = ['page', '$stateParams'];

  function ProductController(page, $stateParams) {
    var vm = this;

    vm.productId = $stateParams.productId;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Page of product');
    }
  }
}());