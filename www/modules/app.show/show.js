/**
 * @module app.show
 */
 (function (module) {
   'use strict';


   function config($stateProvider) {
     $stateProvider.state('show', {
       url: '/show/{showID}',
       views: {
         '': {
           templateUrl: 'modules/app.show/show.html',
           controller: 'showController as controller'
         }
       }
     });
   }

   module.config(['$stateProvider', config]);

 }(angular.module('app.show', ['fp.utils'])));
