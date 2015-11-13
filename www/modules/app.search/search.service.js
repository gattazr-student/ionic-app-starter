/**
 * @module SearchService
 */
(function (module) {
  'use strict';

  function SearchService($http) {
  }
  //
  module.service('searchService', [
    '$http',
    SearchService
  ]);

}(angular.module('app.search')));
