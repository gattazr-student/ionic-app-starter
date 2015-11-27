/**
 * @module SearchController
 */
(function (module) {
  'use strict';

  function SearchController($scope, showService, artService) {
    $scope.shows = [];
    $scope.search = {string : ''};

    var controller = this;
    controller.searchShow = function(){
      showService.searchShow($scope.search.string).then(function (shows) {
        $scope.shows = shows;

        /* Fetching art for every found show */
        _.each(shows, function(aShow, aI){
          artService.getShowArt(aShow.id).then(function (aResult){
              shows[aI].art = aResult ?
                              aResult.tvthumb[0].url :
                              "http://img2.wikia.nocookie.net/__cb20130511180903/legendmarielu/images/b/b4/No_image_available.jpg";
          });
        })
      })
    };
  }

  module.controller('searchController', [
    '$scope',
    'showService',
    'artService',
    SearchController
  ]);

}(angular.module('app.search')));
