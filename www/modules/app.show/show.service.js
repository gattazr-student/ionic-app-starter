/**
 * @module ShowService
 */
(function (module) {
  'use strict';

  function ShowService($http, serviceAppConfig) {
    var service = this;

    /**
     * Get resources using JSONP.
     * @private
     * @function jsonp
     * @param {String} aUrl - String to append to API_SERIES_BASE.
     * @param {Object} [aParams] - Params to pass in the query string.
     * @return {Promise}
     */
    function jsonp(aUrl, aParams) {
      var wBaseAPI = serviceAppConfig.getConfigValue('API_SERIES_BASE');
      var wParams = _.extend({ callback: 'JSON_CALLBACK', s: 'thetvdb' }, aParams);
      var wPromise = $http.jsonp(wBaseAPI + aUrl, { params: wParams });
      return wPromise.then(function (aResponse) { return aResponse.data; });
    }

    /**
     * Return an array of all the show matching the given show name
     * @function searchShow
     * @param {String} aShowName - name of the show to search.
     * @return json array of shows
     */
    service.searchShow = function (aShowName) {
      var wCall = 'series';

      return jsonp(wCall, { name: aShowName });
    };

    /**
     * Get a show identified by the given id.
     * @function getShow
     * @param {String} aShowID - id of the show to get.
     * @return json of the show
     */
    service.getShow = function (aShowId) {
      var wCall = 'series/{%0}/info'
                    .replace("{%0}", aShowId);

      return jsonp(wCall);
    };

    /**
     * Get a TV show season episodes given its ID and the season number.
     * @method getSeason
     * @param {String} showId - id of the show
     * @param {Number} seasonNumber - number of the season to get
     * @return json describing a season of a show
     */
    service.getShowSeason = function (aShowId, aSeasonNumber) {
        var wCall = 'series/{%0}/season/{%1}'
                      .replace("{%0}", aShowId)
                      .replace("{%1}", aSeasonNumber);

        return jsonp(wCall);
      };
  }

  module.service('showService', [
    '$http',
    'serviceAppConfig',
    ShowService
  ]);

}(angular.module('app.show')));
