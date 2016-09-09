(function() {
  'use strict';

  angular
    .module('basket')
    .component('basket', {
      templateUrl: 'basket/basket.template.html',
      controller: basketController,
      controllerAs: 'basket'
    });

  basketController.$inject = [];

  function basketController() {
    var vm = this;
  }
}());