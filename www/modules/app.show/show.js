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
      aResult.show.art = "http://img2.wikia.nocookie.net/__cb20130511180903/legendmarielu/images/b/b4/No_image_available.jpg";

      if(aResult.art){
        if(aResult.art.showbackground){
          aResult.show.art = aResult.art.showbackground[0].url;
        }else if(aResult.art.hdtvlogo){
          aResult.show.art = aResult.art.hdtvlogo[0].url;
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
