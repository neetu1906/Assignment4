(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider)
{
  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuDataList/templates/home.template.html'
  })


  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuDataList/templates/main-menuDatalist.template.html',
    controller: 'MainMenuDataListController as categories',
    // url: '/main-list',
    // templateUrl: 'src/menuDataList/templates/main-menuDatalist.template.html',
    // controller: 'MainMenuDataListController as mainList',
    resolve:
    {
      items:['MenuDataListService', function (MenuDataListService)
       {
          return MenuDataListService.getAllCategories();
       }]
    }
  })

  .state('itemDetail', {
    url: '/item-detail/{itemId}',
    templateUrl: 'src/menuDataList/templates/item-detail.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      item: ['$stateParams', 'MenuDataListService',
            function ($stateParams, MenuDataListService) {
              return MenuDataListService.getItemsForCategory()
                .then(function (items) {
                  return items[$stateParams.itemId];
                });
            }]
    }
  });

}



})();
