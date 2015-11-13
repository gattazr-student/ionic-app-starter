/**
 * @module SearchService
 */
(function (module) {
  'use strict';

  var API_URL = 'http://www.omdbapi.com/?type=series&callback=JSON_CALLBACK&s=';

  function SearchService($http) {
    var service = this;

    service.getShows = function (aSeriesName) {
      return $http.jsonp(API_URL+aSeriesName).then(function (response) {
        return response.data.Search;
      });
    };
  }
  //
  module.service('searchService', [
    '$http',
    SearchService
  ]);

}(angular.module('app.search')));
