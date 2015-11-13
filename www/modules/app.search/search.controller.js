/**
 * @module SearchController
 */
(function (module) {
  'use strict';

  function SearchController($scope, searchService) {
  }

  module.controller('searchController', [
    '$scope',
    'searchService',
    SearchController
  ]);

}(angular.module('app.search')));
