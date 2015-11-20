/**
 * @module SeasonService
 */
(function (module) {
  'use strict';

  function SeasonService($http, serviceAppConfig) {
    var service = this;

    service.getSeason = function (aSerieID, aSeasonId) {
      var baseAPI = serviceAppConfig.getConfigValue('API_SERIES_BASE');

      var wCall = baseAPI+'series/{%0}/season/{%1}?s=thetvdb&callback=JSON_CALLBACK';
      wCall = wCall.replace("{%0}", aSerieID)
                   .replace("{%1}", aSeasonId);
      return $http.jsonp(wCall).then(function (aResponse) {
        return aResponse.data;
      });
    };
  }

  module.service('seasonService', [
    '$http',
    'serviceAppConfig',
    SeasonService
  ]);

}(angular.module('app.show.season')));
