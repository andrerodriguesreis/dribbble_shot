'use strict';

angular.module('dribbble.shot', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  // Adiciona a rota dos detalhes do shot
  $routeProvider.when('/shot', {
    templateUrl: 'shot/shot.html',
    controller: 'shotCtrl'
  });
}])

.controller('shotCtrl', ['$scope','dribbbleService','$routeParams',function($scope, dribbbleService, $routeParams) {
    // Recupera o parâmetro da url
    var id = $routeParams.id;
    // Variável para verificar se o usuário já deu like na shot
    $scope.liked = false;

    // Função para carregar os dados da view
    var init = function () {
        // Busca o Shot por id
        getShotByID(id).then(function(resp){
            // Popula o binding da tela com os dados do shot
            $scope.shot = resp.data;
        });
        // verificar se o usuário já deu like
        checkLiked(id).then(function(resp){
            // caso a resposta seja positiva e tenha data de criação, o usuário já fez like anteriormente.
            if(resp.data && resp.data.created_at){
               $scope.liked = true;
            }
            console.info(resp);
        },function(){
            $scope.liked = false;
        });
    }
    // Função para fazer ou desfazer o like
    $scope.likeShotClick = function(checked){
        $scope.liked = checked;
        // Caso o usuário deu like
        if(checked){
          // chama método para dar like
          likeShot(id).then(function(resp){
              console.info(resp);
          });
        } else {
          // chama o método para desfazer o like
          unlikeShot(id).then(function(resp){
              console.info(resp);
          });
        }
    }

    /**
     * Métodos da camada de serviço
     */
    var likeShot = function(id){
        return dribbbleService.likeShot(id);
    }

    var unlikeShot = function(id){
        return dribbbleService.unlikeShot(id);
    }

    var getShotByID = function(id) {
        return dribbbleService.getShotByID(id);
    }
    var checkLiked = function(id) {
        return dribbbleService.checkLiked(id);
    }

    init();
}]);