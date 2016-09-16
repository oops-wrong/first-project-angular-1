(function () {
  'use strict';

  angular
    .module('core.product')
    .factory('product', productFactory);

  productFactory.$inject = ['$resource'];

  function productFactory($resource) {
    var products = [];
    var productDetails = [];

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
     * Get result of $resource.query() and remember result to product list if no productId getting.
     * @param {string} productId
     * @returns {*|{isArray, method, params}|{method, isArray}}
     */
    function getQuery(productId) {
      var resource;
      var query;

      if (productId) {
        resource = getResourceOfDetails();
        query = resource.get({productId: productId});
      } else {
        resource = getResource();
        query = resource.query();
        query.$promise.then(addProducts);
      }

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
     * Get instance of $resource service with products list data.
     * @returns {Object}
     */
    function getResource() {
      return $resource('assets/phones/phones.json', {}, {
        query: {
          isArray: true,
          method: 'GET'
        }
      });
    }

    /**
     * Get instance of $resource service with a product data.
     * @returns {Object}
     */
    function getResourceOfDetails() {
      return $resource('assets/phones/:productId.json', {}, {
        query: {
          isArray: true,
          method: 'GET'
        }
      });
    }
  }
}());