/**
 * @module ServiceAppConfig
 */
(function (module) {
  'use strict';

  function ServiceAppConfig() {
    var service = this;

    var CONFIG = {
      'API_SERIES_BASE' : 'http://series-ortiz.rhcloud.com/',
      'API_POSTERS_BASE' : 'http://webservice.fanart.tv/v3/'
    };

    service.getConfigValue = function (aKeyName) {
      return CONFIG[aKeyName];
    };
  }

  module.service('serviceAppConfig', [
    ServiceAppConfig
  ]);

}(angular.module('app.config')));
