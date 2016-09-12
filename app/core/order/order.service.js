(function () {
  'use strict';

  angular
    .module('core.order')
    .factory('order', order);

  order.$inject = [];

  function order() {
    var list = [];

    return {
      addToCart: addToCart,
      getList: getList,
      removeItem: removeItem
    };

    ////////////////

    /**
     * Add to card an item.
     * @param {Object} item
     */
    function addToCart(item) {
      list.push(item);
    }

    /**
     * Get list of order items.
     * @returns {Array}
     */
    function getList() {
      return list;
    }

    /**
     * Remove a product from order list.
     * @param {number} id
     */
    function removeItem(id) {
      delete list[id];
    }
  }
}());