/**
 * @module app.show
 */
(function (module) {
  'use strict';

  function showResolver(showService, $stateParams){
    return showService.getShow($stateParams.showID);
  }

  /**
   * Define the module's configuration.
   * @private
   * @function config
   * @param {Object} $stateProvider - UI Router $stateProvider service.
   * @param {Object} templateUtils - Some template utilities.
   */
  function config($stateProvider, templateUtils) {
    $stateProvider.state('show', {
      url: '/show/{showID}',
      views: {
        '': {
          templateUrl: templateUtils.getUrlFromModule(module),
          controller: 'showController as controller'
        }
      },
      resolve:{
        show: [ 'showService', '$stateParams', showResolver ]
      }
    });
  }

  module.config([
    '$stateProvider',
    'templateUtilsProvider',
    config
  ]);

}(angular.module('app.show', [
  'app.show.season',
  'app.config',
  'fp.utils'
])));
