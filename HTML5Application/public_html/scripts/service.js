/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
angular.module('myApp')
        .service('logService',function(){
   return {
       log:function(msg){
           console.log(msg);
       }
   }         
});

