/**
 * @module ShowController
 */
(function (module) {
  'use strict';

  function SeasonController($scope, season) {
    var controller = this;

    $scope.season = season;
  }

  module.controller('seasonController', [
    '$scope',
    'season',
    SeasonController
  ]);

}(angular.module('app.show')));
