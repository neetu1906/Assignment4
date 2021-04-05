(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataListService', MenuDataListService)
.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");


MenuDataListService.$inject = ['$q','$http','ApiBasePath']
function MenuDataListService($q,$http,ApiBasePath) {
  var service = this;
  var menuItems=[];


  service.getAllCategories = function () {
    var deferred = $q.defer();
    var promise = $http({
         method:"GET",
         url:(ApiBasePath + "/categories.json")
       });

       promise.then(function(response){
           menuItems.categories = response.data;
           deferred.resolve(menuItems.categories);
         })
         .catch(function(error){
             console.log("Something went terribly wrong.");
         });

    return deferred.promise;
  };


  service.getItemsForCategory = function (categoryShortName) {
    var deferred = $q.defer();
    var promise = $http({
      method:"GET",
      url:(ApiBasePath + "/menu_items.json"),
      params:{
        category : categoryShortName
      }
    });

       promise.then(function(response){
           menuItems.menu_items = response.data.menu_items;
           deferred.resolve(menuItems.menu_items);
         })
         .catch(function(error){
             console.log("Something went terribly wrong.");
         });

    return deferred.promise;
  };
}

})();
