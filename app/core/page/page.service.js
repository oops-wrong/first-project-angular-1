(function () {
  'use strict';

  angular
    .module('core.page')
    .factory('page', page);

  page.$inject = [];

  function page() {
    var title = '';

    return {
      getTitle: getTitle,
      setTitle: setTitle
    };

    ////////////////

    function getTitle() {
      return title;
    }

    function setTitle(newVal) {
      title = newVal;
    }
  }

}());

