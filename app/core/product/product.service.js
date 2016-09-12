(function () {
  'use strict';

  angular
    .module('core.product')
    .factory('product', productFactory);

  productFactory.$inject = ['$resource'];

  function productFactory($resource) {
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
}());