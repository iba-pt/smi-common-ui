(function () {
   'use strict';
   angular.module('iba-smi.smi-common-ui', [])
   .factory('VersionResource', ['$http',
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
   }])
   .directive('smiAppLogo', ['VersionResource', function(VersionResource) {
      return {
         restrict: 'E',
         templateUrl: 'bower_components/smi-common-ui/directives/applogo.html',
         scope: {
            appName: '@'
         },
         link: function(scope, element, attrs, transclude) {
            VersionResource.getAppVersion().then(function successCallback(data) {
               scope.appVersion = data;
            });
         },
         controller: function($scope, $element, $attrs, $transclude) {
            $scope.getAppInitial = function(pos) {
               return $scope.appName.split(" ")[pos].charAt(0);
            }
            $scope.getAppString = function(pos) {
               var part = $scope.appName.split(" ")[pos]
               return part.substr(1); 
            }
         }
      }
   }]);
}());