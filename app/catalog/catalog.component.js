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

  CatalogController.$inject = ['page'];

  function CatalogController(page) {
    var vm = this;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Catalog of products');
    }
  }
}());