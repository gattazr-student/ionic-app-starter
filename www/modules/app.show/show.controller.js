/**
 * @module ShowController
 */
(function (module) {
  'use strict';

  function ShowController($scope, show) {
    var controller = this;

    $scope.show = show;
  }

  module.controller('showController', [
    '$scope',
    'show',
    ShowController
  ]);

}(angular.module('app.show')));
