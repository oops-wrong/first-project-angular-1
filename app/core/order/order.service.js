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

    function addToCart(item) {
      list.push(item);
    }

    function getList() {
      return list;
    }

    function removeItem(id) {
      delete list[id];
    }
  }
}());