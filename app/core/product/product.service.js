(function () {
  'use strict';

  angular
    .module('core.product')
    .factory('product', productFactory);

  productFactory.$inject = ['$resource'];

  function productFactory($resource) {
    var products = [];

    return {
      getQuery: getQuery,
      getProducts: getProducts,
      getProduct: getProduct
    };

    ////////////////

    /**
     * Cache products list.
     * @param {Array} newProducts
     */
    function addProducts(newProducts) {
      products = newProducts;
    }

    /**
     * Get result of $resource.query() and remember result to product list.
     * @returns {*|{isArray, method, params}|{method, isArray}}
     */
    function getQuery() {
      var resource = getResource();
      var query = resource.query();

      query.$promise.then(addProducts);

      return query;
    }

    /**
     * Get list of cached products;
     * @returns {Array}
     */
    function getProducts() {
      return products;
    }

    /**
     * Get cached product.
     * @param id
     * @returns {Object}
     */
    function getProduct(id) {
      var product = null;

      products.some(function (elem) {
        if (elem.id === id) {
          product = elem;

          return true;
        }
      });

      return product;
    }

    /**
     * Get instance of $resource service.
     * @returns {Object}
     */
    function getResource() {
      return $resource('assets/phones/:phoneId.json', {}, {
        query: {
          isArray: true,
          method: 'GET',
          params: {
            phoneId: 'phones'
          }
        }
      });
    }
  }
}());