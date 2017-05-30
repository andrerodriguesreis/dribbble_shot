'use strict';

angular.module('dribbble.shotsList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  // Adiciona a rota de listagem 
  $routeProvider.when('/shotsList', {
    templateUrl: 'shotsList/shotsList.html',
    controller: 'shotsListCtrl'
  });
}])
// Controle da listagem de shots
.controller('shotsListCtrl', ['$scope','dribbbleService',function($scope, dribbbleService) {
    // Inicializar as variáveis do escopo
    $scope.list = {};
    $scope.hasValue = false;
    $scope.imgSize = 'normal';
    $scope.list.shots = [];

    // Função inicial para chamar o método que lista os shots
    var init = function () {
        getShots().then(function(resp){
            // carrega a lista de shots no escopo
            $scope.list.shots = resp.data;
            // Caso a lista de shots possua elementos, exibe o html
            if($scope.list.shots.lenght > 0) {
                $scope.hasValue = true;
            }
        });
    }

    // função para alterar o tamanho das imagens dos shots na listagem de shots
    $scope.changeImgSize = function(size){
        $scope.imgSize = size;
    }

    /**
     * Método da camada de serviço
     */
    var getShots = function() {
        return dribbbleService.getShots();
    }

    // função inicial
    init();

}]);