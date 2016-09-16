(function() {
  'use strict';

  angular
    .module('testShopApp')
    .config(config)
    .run(run);

  /////////////////////////////////////////////////////////////
  // CONFIG
  /////////////////////////////////////////////////////////////

  config.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

  function config($locationProvider, $stateProvider, $urlRouterProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    var states = [
      {
        name: 'catalog',
        resolve: {
          products: productsPrep
        },
        template: '<catalog products="$resolve.products"></catalog>',
        url: '/'
      },
      {
        name: 'catalogAlias',
        redirectTo: 'catalog',
        url: '/catalog'
      },
      {
        isDialog: true,
        name: 'product',
        onEnter: ['$state', 'ngDialog', function($state, ngDialog) {
          ngDialog.open({
            plain: true,
            // template: '<checkout></checkout>'
            template: '<product></product>'
          }).closePromise.finally(function() {
            $state.go('^');
          });
        }],
        parent: 'catalog',
        url: 'catalog/{productId}'
      },
      {
        name: 'checkout',
        template: '<checkout></checkout>',
        url: '/checkout'
      }
    ];

    states.forEach(function (state) {
      $stateProvider.state(state);
    });
  }

  productsPrep.$inject = ['product'];

  /**
   * Get resource promise with products list.
   * @param {Object} product
   * @returns {*|Function}
   */
  function productsPrep(product) {
    return product.getQuery().$promise;
  }

  /////////////////////////////////////////////////////////////
  // RUN
  /////////////////////////////////////////////////////////////

  run.$inject = ['$rootScope', '$state', 'ngDialog'];

  function run($rootScope, $state, ngDialog) {
    $rootScope.$on('$stateChangeError', console.error.bind(console));

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {

      // Define "redirectTo" field for state objects
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params, {location: 'replace'})
      }

      // Close all dialogs if no-dialog state
      if (!to.isDialog) {
        ngDialog.closeAll();
      }
    });
  }
}());