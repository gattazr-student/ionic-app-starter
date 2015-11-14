/**
 * @module ShowController
 */
(function (module) {
  'use strict';

  function SeasonController($scope, $stateParams, seasonService) {
    var controller = this;

    $scope.season = {};
    seasonService.getSeason($stateParams.showID, $stateParams.seasonID).then(function (season) {
      $scope.season = season;
    });
  }

  module.controller('seasonController', [
    '$scope',
    '$stateParams',
    'seasonService',
    SeasonController
  ]);

}(angular.module('app.show')));
