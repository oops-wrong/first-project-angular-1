(function () {
  'use strict';

  angular
    .module('core.page')
    .controller('PageController', PageController);

  PageController.$inject = ['page'];

  function PageController(page) {
    var vm = this;

    vm.getTitle = page.getTitle;
  }
}());