(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['item']
function ItemDetailController(item) {
  var itemDetail = this;
  itemDetail.id = item.id;
  itemDetail.short_name = item.short_name;
  itemDetail.name = item.name;
  itemDetail.description = item.description;
  itemDetail.large_portion_name = item.large_portion_name;
  itemDetail.price_large = item.price_large;
  itemDetail.price_small = item.price_small;
  itemDetail.small_portion_name = item.small_portion_name;

}

})();
