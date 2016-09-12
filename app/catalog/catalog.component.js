(function() {
  'use strict';

  angular
    .module('catalog')
    .component('catalog', {
      templateUrl: 'catalog/catalog.template.html',
      controller: catalogController,
      controllerAs: 'vm'
    });

  catalogController.$inject = ['page'];

  function catalogController(page) {
    var vm = this;

    activate();

    ////////////////

    function activate() {
      page.setTitle('Catalog of products');
    }
  }
}());