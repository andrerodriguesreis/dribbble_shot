'use strict';

angular.module('dribbble.version.version-directive', [])
// diretiva para retornar a versão da aplicação angular seed
.directive('appVersion', ['version', function(version) {
  return function(scope, elm, attrs) {
    elm.text(version);
  };
}]);
