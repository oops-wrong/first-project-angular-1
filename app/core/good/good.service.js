(function () {
  'use strict';

  angular
    .module('core.phone')
    .factory('Good', goodFactory);

  goodFactory.$inject = ['$resource'];

  function goodFactory($resource) {
    return $resource('phones/:phoneId.json', {}, {
      query: {
        isArray: true,
        method: 'GET',
        params: {phoneId: 'phones'}
      }
    });
  }
}());