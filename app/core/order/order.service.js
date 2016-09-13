(function () {
  'use strict';

  angular
    .module('core.order')
    .factory('order', order);

  order.$inject = ['$rootScope'];

  function order($rootScope) {
    var list = [];

    return {
      addToList: addToList,
      createOrderItem: createOrderItem,
      getItemById: getItemById,
      getList: getList,
      removeFromList: removeFromList,
      updateOrderItem: updateOrderItem
    };

    ////////////////

    /**
     * Add to cart list an order item.
     * @param {Object} item
     * @returns {boolean}
     */
    function addToList(item) {
      if (angular.isObject(item) && item.id) {
        list.push(item);

        $rootScope.$emit('order.add', {
          id: item.id
        });
        $rootScope.$emit('order.change');

        return true;
      }

      return false;
    }

    /**
     * Create new order item.
     * @param {Object} data
     * @returns {Object} - {id: <string>, count: <number>}
     */
    function createOrderItem(data) {
      var defaultOptions = {
        count: 1
      };
      var newItem = {};

      if (!angular.isObject(data) || !data.id) {
        return null;
      }

      angular.extend(newItem, defaultOptions, data);

      return newItem;
    }

    /**
     * Get order item by product id.
     * @param {string} id
     * @returns {Object}
     */
    function getItemById(id) {
      var item = null;

      list.some(function (elem) {
        if (!angular.isObject(elem)) {
          return true;
        }

        if (elem.id === id) {
          item = elem;

          return true;
        }
      });

      return item;
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
     * @param {string} id - Product id
     */
    function removeFromList(id) {
      var result = false;
      var item = getItemById(id);
      var index;

      // Remove item from list
      if (angular.isObject(item)) {
        index = list.indexOf(item);

        if (~index) {
          list.splice(index, 1);
          result = true;

          $rootScope.$emit('order.remove', {
            id: id
          });
          $rootScope.$emit('order.change');
        }
      }

      return result;
    }

    /**
     * Update data in order item.
     * @param {Object} data
     * @returns {boolean}
     */
    function updateOrderItem(data) {
      var result = false;
      var id;
      var item;

      if (angular.isObject(data) || !data.id) {
        id = data.id;
        item = getItemById(id);

        if (angular.isObject(item)) {
          angular.merge(item, data);

          $rootScope.$emit('order.update', data);
          $rootScope.$emit('order.change');
        }
      }

      return result;
    }
  }
}());