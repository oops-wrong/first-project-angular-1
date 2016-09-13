(function () {
  'use strict';

  angular
    .module('core.order')
    .factory('orderProduct', orderProduct);

  orderProduct.$inject = ['order', 'product', 'utils'];

  function orderProduct(order, product, utils) {
    return {
      getAmount: getAmount,
      getDeclCountText: getDeclCountText,
      getListLength: getListLength
    };

    ////////////////

    /**
     * Get amount of
     * @returns {number}
     */
    function getAmount() {
      var amount = 0;
      var list = order.getList();
      var productItem;

      list.forEach(function (elem) {
        productItem = product.getProduct(elem.id);

        if (angular.isObject(product) && angular.isNumber(productItem.cost)) {
          amount += productItem.cost;
        }
      });

      return amount;
    }

    /**
     * Get count word with declination.
     * @param {number} count
     * @returns {string}
     */
    function getDeclCountText(count) {
      return utils.declOfNum(count, ['позиция', 'позиции', 'позиций']);
    }

    /**
     * Get length of order list.
     * @returns {number}
     */
    function getListLength() {
      return order.getList().length;
    }
  }
}());