(function () {
'use strict';

angular.module('MenuApp')
.controller('MainMenuDataListController', MainMenuDataListController);

MainMenuDataListController.$inject = ['MenuDataListService', 'items'];
function MainMenuDataListController(MenuDataListService, items) {
  var mainList = this;
  mainList.items = items;  
}

})();
