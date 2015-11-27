/**
 * @module ArtService
 */
(function (module) {
  'use strict';

  function ArtService($http, serviceAppConfig) {
    var service = this;

    /**
     * Get resources using GET.
     * @private
     * @function get
     * @param {String} aUrl - String to append to API_ART_BASE.
     * @param {Object} [aParams] - Params to pass in the query string.
     * @return {Promise}
     */
    function get(aUrl, aParams) {
      var wBaseAPI = serviceAppConfig.getConfigValue('API_ART_BASE');
      var wKEYAPI = serviceAppConfig.getConfigValue('API_ART_KEY');

      var wParams = _.extend({ api_key: wKEYAPI, callback: '' }, aParams);
      var wPromise = $http.get(wBaseAPI + aUrl, { params: wParams });
      return wPromise.then(function (aResponse) { return aResponse.data; })
                     .catch(function(aResult){ return '' });
    }

    /**
     * Get arts for a given show
     * @method getShowArt
     * @param {String} showId - id of the show
     * @return json
     */
    service.getShowArt = function (aShowId) {
      var wCall = aShowId;

      return get(wCall);
    };

  }

  module.service('artService', [
    '$http',
    'serviceAppConfig',
    ArtService
  ]);

}(angular.module('app.show')));
