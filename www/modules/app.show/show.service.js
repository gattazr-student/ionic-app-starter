/**
 * @module ShowService
 */
(function (module) {
  'use strict';

  var API_URL = 'http://series-ortiz.rhcloud.com/series/{%0}/info?s=thetvdb&callback=JSON_CALLBACK';

  function ShowService($http) {
    var service = this;

    service.getShow = function (aSerieID) {
      var call = API_URL.replace("{%0}", aSerieID);
      return $http.jsonp(call).then(function (response) {
        return response.data;
      });
    };
  }

  module.service('showService', [
    '$http',
    ShowService
  ]);

}(angular.module('app.show')));
