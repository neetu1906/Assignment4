(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuDatalist/templates/item-detail-template.html',
  bindings: {
    items: '<'
  }
});

})();
