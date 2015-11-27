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
        _.each(shows, function(aShow, aI){
          artService.getShowArt(aShow.id).then(function (aResult){
            if(aResult){
              shows[aI].art = aResult;
            }
          });
        })
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
