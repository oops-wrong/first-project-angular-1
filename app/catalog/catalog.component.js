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
    vm.isAdded = isAdded;
    vm.removeFromCart = removeFromCart;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Catalog of products');
    }

    /**
     * Add to cart product item handler.
     * @param {string} productId
     */
    function addToCart(productId) {
      var newItem = order.createOrderItem({id: productId});

      order.addToList(newItem);
    }

    /**
     * Check product for the presence in order list.
     * @param {string} id
     * @returns {boolean}
     */
    function isAdded(id) {
      return angular.isObject(order.getItemById(id));
    }

    /**
     * Remove from cart product item handler.
     * @param {Object} $event
     * @param {string} productId
     */
    function removeFromCart($event, productId) {
      order.removeFromList(productId);
    }
  }
}());