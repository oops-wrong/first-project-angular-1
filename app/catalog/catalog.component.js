(function() {
  'use strict';

  angular
    .module('catalog')
    .component('catalog', {
      templateUrl: 'catalog/catalog.template.html',
      controller: CatalogController,
      controllerAs: 'vm',
      bindings: {
        products: '<'
      }
    });

  CatalogController.$inject = ['order', 'page'];

  function CatalogController(order, page) {
    var vm = this;

    vm.addToCart = addToCart;
    vm.removeFromCart = removeFromCart;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Catalog of products');
    }

    /**
     * Add to cart product item handler.
     * @param {Object} $event
     * @param {string} productId
     */
    function addToCart($event, productId) {
      var $btn = $($event.target);
      var $product = $btn.closest('.product-item');
      var newItem = order.createOrderItem({id: productId});

      order.addToList(newItem);
      $product.addClass('added');
    }

    /**
     * Remove from cart product item handler.
     * @param {Object} $event
     * @param {string} productId
     */
    function removeFromCart($event, productId) {
      var $btn = $($event.target);
      var $product = $btn.closest('.product-item');

      order.removeFromList(productId);
      $product.removeClass('added');
    }
  }
}());