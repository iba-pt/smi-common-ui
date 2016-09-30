/**
 * Service to access to REST version services.
 */
(function () {
   'use strict';
   angular.module('smiZeppelinFacadeApp').factory('VersionResource', ['$http',
   function($http) {
      var versionService= {
         getAppVersion: function() {
            var promise = $http.get('rest/version/app').then(function (response) {
               return response.data;
            });
            return promise;
         }
      }
      return versionService;
   }]);
}());
