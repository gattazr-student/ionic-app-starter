/**
 * @module app.show.season
 */
(function (module) {
  'use strict';

  function seasonResolver(seasonService, $stateParams){
    return seasonService.getSeason($stateParams.showID, $stateParams.seasonID);
  }

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
      },
      resolve:{
        season: [ 'seasonService', '$stateParams', seasonResolver ]
      }
    });
  }

  module.config([
    '$stateProvider',
    'templateUtilsProvider',
    config
  ]);

}(angular.module('app.show.season', [
    'app.config',
    'fp.utils'
])));
