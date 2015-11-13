/**
 * @module ShowController
 */
(function (module) {
  'use strict';

  function ShowController($scope, $stateParams, showService) {
    var controller = this;

    $scope.show = {};
    showService.getShow($stateParams.showID).then(function (show) {
      $scope.show = show;
    });
  }

  module.controller('showController', [
    '$scope',
    '$stateParams',
    'showService',
    ShowController
  ]);

}(angular.module('app.show')));
