(function () {
  'use strict';

  angular
    .module('zoomImg')
    .directive('zoomImg', zoomImg);

  zoomImg.$inject = [];

  function zoomImg() {
    return {
      link: link,
      restrict: 'A',
      scope: {}
    };

    function link(scope, element) {
      var $element = $(element);
      var $images;
      
      $(function () {
        if (typeof $element.zoom === 'function') {
          $images = $element.find('img');

          $images.each(function () {
            var $image = $(this);

            $image.parent().zoom({
              on: 'grab'
            });
          });
        } else {
          console.error('Plugin "Zoom" does not included.');
        }
      });
    }
  }
}());