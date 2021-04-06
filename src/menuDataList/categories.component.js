(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: require('src/menuDatalist/templates/MenuAppList.template.html'),
  bindings: {
    items: '<'
  }
});

})();
