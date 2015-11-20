/**
 * @module app.show.season
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
    $stateProvider.state('show.season', {
      url: '/season/{seasonID}',
      views: {
        '@': {
          templateUrl: templateUtils.getUrlFromModule(module),
          controller: 'seasonController as controller'
        }
      }
    });
  }

  module.config(['$stateProvider', 'templateUtilsProvider', config]);

}(angular.module('app.show.season', ['fp.utils'])));
