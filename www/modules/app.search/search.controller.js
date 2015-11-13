/**
 * @module SearchController
 */
(function (module) {
  'use strict';

  function SearchController($scope, searchService) {
    $scope.shows = [];
    $scope.search = {string : ''};

    var controller = this;
    controller.getShows = function(){
        searchService.getShows($scope.search.string).then(function (shows) {
          $scope.shows = shows;
      })
    };


    searchService.getShows('flash')
  }

  module.controller('searchController', [
    '$scope',
    'searchService',
    SearchController
  ]);

}(angular.module('app.search')));
