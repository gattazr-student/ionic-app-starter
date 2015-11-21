/**
 * @module SearchController
 */
(function (module) {
  'use strict';

  function SearchController($scope, showService) {
    $scope.shows = [];
    $scope.search = {string : ''};

    var controller = this;
    controller.searchShow = function(){
      showService.searchShow($scope.search.string).then(function (shows) {
        $scope.shows = shows;
      })
    };
  }

  module.controller('searchController', [
    '$scope',
    'showService',
    SearchController
  ]);

}(angular.module('app.search')));
