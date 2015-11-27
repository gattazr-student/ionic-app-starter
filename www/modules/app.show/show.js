/**
 * @module app.show
 */
(function (module) {
  'use strict';

  function showResolver(showService, artService, $stateParams, $q){
    var promises = {
      show: showService.getShow($stateParams.showID),
      art: artService.getShowArt($stateParams.showID)
    }
    return $q.all(promises).then(function(aResult){
            aResult.show.art = aResult.art;
            return aResult.show;
      });
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
        show: [ 'showService', 'artService', '$stateParams', '$q', showResolver ]
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
