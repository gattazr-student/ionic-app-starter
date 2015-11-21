/**
 * @module SearchController
 */
(function (module) {
  'use strict';

  function SearchController($scope, showService, artService) {
    $scope.shows = [];
    $scope.search = {string : ''};

    var controller = this;
    controller.searchShow = function(){
      showService.searchShow($scope.search.string).then(function (shows) {
        $scope.shows = shows;

        /* Fetching art for every found show */
        for (var wI = 0, wLen = shows.length; wI < wLen; wI++) {
          var wArt = artService.getShowArt(shows[wI].id);
          console.log(wI+': ' + JSON.stringify(wArt));
          if(wArt){
            shows[wI].art = wArt;
          }
        }
      })
    };
  }

  module.controller('searchController', [
    '$scope',
    'showService',
    'artService',
    SearchController
  ]);

}(angular.module('app.search')));
