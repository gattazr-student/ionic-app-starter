/**
 * @module SearchService
 */
(function (module) {
  'use strict';

  function SearchService($http, serviceAppConfig) {
    var service = this;

    service.getShows = function (aSeriesName) {
      var wBaseAPI = serviceAppConfig.getConfigValue('API_SERIES_BASE');

      var wCall = wBaseAPI + 'series?s=thetvdb&callback=JSON_CALLBACK&name='+aSeriesName;
      return $http.jsonp(wCall).then(function (aResponse) {
        return aResponse.data;
      });
    };
  }

  module.service('searchService', [
    '$http',
    'serviceAppConfig',
    SearchService
  ]);

}(angular.module('app.search')));
