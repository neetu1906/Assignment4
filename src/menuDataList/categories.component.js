(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/menuDatalist/templates/MenuAppList.template.html',
  bindings: {
    items: '<'
  }
});

})();
