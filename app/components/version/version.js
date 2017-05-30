'use strict';
// Retorna a versão da aplicação angular seed
angular.module('dribbble.version', [
  'dribbble.version.interpolate-filter',
  'dribbble.version.version-directive'
])

.value('version', '0.1');
