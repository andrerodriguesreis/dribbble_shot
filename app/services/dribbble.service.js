'use strict';

var services = angular.module('dribbble.services', []);
// Serviço para utilizar a API dribbble. Documentação em http://developer.dribbble.com/v1/
services.factory('dribbbleService', function ($http) {
    // Retorna a chave o usuário. Pode ser alterado para retornar do arquivo de configuração da aplicação
    function getApiKey (){
        return 'e368662f7ff1cb2b40410e9a14c31674221eec46e495f2917d5a7463a3895748';
    }
    return {
      // Chamada para listar os shots
      getShots: function() {
         return $http({method: 'GET', url: 'https://api.dribbble.com/v1/shots?access_token=' + getApiKey() });
      }, 
      // Chamada http para retornar os detalhes do shot
      getShotByID: function(id) {
          return $http({method: 'GET', url: 'https://api.dribbble.com/v1/shots/'+ id +'?access_token=' + getApiKey() });
      },
      // Método para verificar se o usuário deu like no shot
      checkLiked: function(id) {
          return $http({method: 'GET', url: 'https://api.dribbble.com/v1/shots/'+ id +'/like?access_token=' + getApiKey() })
          .success(function(data) {
                return data;
            }).error(function (error, status) {
                return null;
            });
      },
      // Método para fazer o like no shot (Observação: retorno de erro 403 para o usuário informado)
      likeShot: function(id){
          return $http({method: 'POST', url: 'https://api.dribbble.com/v1/shots/'+ id +'/like?access_token=' + getApiKey() })
          .success(function(data) {
                return data;
            }).error(function (error, status) {
                return null;
            });
      },
      // Método para remover o like no shot (Observação: retorno de erro 403 para o usuário informado)
      unlikeShot: function(id){
          return $http({method: 'DELETE', url: 'https://api.dribbble.com/v1/shots/'+ id +'/like?access_token=' + getApiKey() })
          .success(function(data) {
                return data;
            }).error(function (error, status) {
                return null;
            });
      }
    }

})