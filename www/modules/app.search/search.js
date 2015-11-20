/**
 * @module app.search
 */
(function (module) {
  'use strict';

  /**
   * Define the module's configuration.
   * @private
   * @function config
   * @param {Object} $stateProvider - UI Router $stateProvider service.
   * @param {Object} templateUtils - Some template utilities.
   */
  function config($stateProvider, templateUtils) {
    $stateProvider.state('search', {
      url: '/search',
      views: {
        '': {
          templateUrl: templateUtils.getUrlFromModule(module),
          controller: 'searchController as controller'
        }
      }
    });
  }

  module.config([
    '$stateProvider',
    'templateUtilsProvider',
    config
  ]);

}(angular.module('app.search', [
  'app.show',
  'app.config',
  'fp.utils'
])));
