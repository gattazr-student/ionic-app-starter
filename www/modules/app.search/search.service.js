/**
 * @module SearchService
 */
(function (module) {
  'use strict';

  var API_URL = 'http://series-ortiz.rhcloud.com/series?s=thetvdb&callback=JSON_CALLBACK&name=';

  function SearchService($http) {
    var service = this;

    service.getShows = function (aSeriesName) {
      return $http.jsonp(API_URL+aSeriesName).then(function (response) {
        return response.data;
      });
    };
  }

  module.service('searchService', [
    '$http',
    SearchService
  ]);

}(angular.module('app.search')));
