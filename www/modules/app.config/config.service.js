/**
 * @module ServiceAppConfig
 */
(function (module) {
  'use strict';

  function ServiceAppConfig() {
    var service = this;

    var CONFIG = {
      'API_SHOW_BASE' : 'http://series-ortiz.rhcloud.com/',
      'API_ART_BASE' : 'http://webservice.fanart.tv/v3/tv/',
      'API_ART_KEY' : 'MY_PRIVATE_KEY'
    };

    service.getConfigValue = function (aKeyName) {
      return CONFIG[aKeyName];
    };
  }

  module.service('serviceAppConfig', [
    ServiceAppConfig
  ]);

}(angular.module('app.config')));
