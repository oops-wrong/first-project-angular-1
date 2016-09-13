(function () {
  'use strict';

  angular
    .module('core.utils')
    .factory('utils', utils);

  utils.$inject = [];

  function utils() {
    return {
      declOfNum: declOfNum
    };

    ////////////////

    /**
     * Get declined russian word.
     * @returns {string}
     */
    function declOfNum(number, titles) {
      var cases = [2, 0, 1, 1, 1, 2];
      return titles[(number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5]];
    }
  }
}());