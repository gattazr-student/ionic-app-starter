/**
 * @module app.search
 */
 (function (module) {
   'use strict';


   function config($stateProvider) {
     $stateProvider.state('search', {
       url: '/search',
       views: {
         '': {
           templateUrl: 'modules/app.search/search.html',
           controller: 'searchController as controller'
         }
       }
     });
   }

   module.config(['$stateProvider', config]);

 }(angular.module('app.search', ['app.show', 'fp.utils'])));
