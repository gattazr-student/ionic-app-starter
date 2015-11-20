/**
 * @module ShowService
 */
(function (module) {
  'use strict';

  function ShowService($http, serviceAppConfig) {
    var service = this;

    service.getShow = function (aSerieID) {
      var wBaseAPI = serviceAppConfig.getConfigValue('API_SERIES_BASE');

      var wCall = wBaseAPI + 'series/{%0}/info?s=thetvdb&callback=JSON_CALLBACK';
      var wCall = wCall.replace("{%0}", aSerieID);
      return $http.jsonp(wCall).then(function (aResponse) {
        return aResponse.data;
      });
    };
  }

  module.service('showService', [
    '$http',
    'serviceAppConfig',
    ShowService
  ]);

}(angular.module('app.show')));
