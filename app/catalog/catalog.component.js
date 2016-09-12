(function() {
  'use strict';

  angular
    .module('catalog')
    .component('catalog', {
      templateUrl: 'catalog/catalog.template.html',
      controller: catalogController,
      controllerAs: 'vm'
    });

  catalogController.$inject = [];

  function catalogController() {
    var vm = this;
  }
}());