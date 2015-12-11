/**
 * @module app.show.season
 */
(function (module) {
  'use strict';

  function seasonResolver(showService, artService, $stateParams, $q){
    var promises = {
      show: showService.getShowSeason($stateParams.showID, $stateParams.seasonID),
      art: artService.getShowArt($stateParams.showID)
    }
    return $q.all(promises).then(function(aResult){
      aResult.show.art = "";

      var wI = 0;
      if(aResult.art && aResult.art.showbackground){
        var wSize = aResult.art.showbackground.length;
        while(wI < wSize && aResult.art.showbackground[wI].season != $stateParams.seasonID){
          wI++;
        }
        if(wI < wSize){
          aResult.show.art = aResult.art.showbackground[wI].url;
        }
      }
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
    $stateProvider.state('show.season', {
      url: '/season/{seasonID}',
      views: {
        '@': {
          templateUrl: templateUtils.getUrlFromModule(module),
          controller: 'seasonController as controller'
        }
      },
      resolve:{
        season: [ 'showService', 'artService', '$stateParams', '$q', seasonResolver ]
      }
    });
  }

  module.config([
    '$stateProvider',
    'templateUtilsProvider',
    config
  ]);

}(angular.module('app.show.season', [
    'app.show',
    'app.config',
    'fp.utils'
])));
