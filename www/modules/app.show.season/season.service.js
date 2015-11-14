/**
 * @module SeasonService
 */
(function (module) {
  'use strict';

  var API_URL = 'http://series-ortiz.rhcloud.com/series/{%0}/season/{%1}?s=thetvdb&callback=JSON_CALLBACK';

  function SeasonService($http) {
    var service = this;

    service.getSeason = function (aSerieID, aSeasonId) {
      var call = API_URL.replace("{%0}", aSerieID)
                        .replace("{%1}", aSeasonId);
      return $http.jsonp(call).then(function (response) {
        return response.data;
      });
    };
  }

  module.service('seasonService', [
    '$http',
    SeasonService
  ]);

}(angular.module('app.show.season')));
