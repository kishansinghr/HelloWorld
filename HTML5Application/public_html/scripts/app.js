/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myapp = angular.module('myApp',[]);
        
myapp.controller('MainController',['logService','AlertService','$scope',function(logService,alertService,$scope){

    $scope.message = "hello world";     
    $scope.onclick = function(){
        console.log("clicked")
    };
    $scope.showAlert = function(alrt){
        alertService.showAlert(alrt);
    };
    $scope.logMessage = function(msg){
        logService.log(msg);
    }
}]);