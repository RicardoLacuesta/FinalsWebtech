angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('recipes', {
    url: '/page5',
    templateUrl: 'templates/recipes.html',
    controller: 'recipesCtrl'
  })

  .state('chickenRecipes', {
    url: '/page6',
    templateUrl: 'templates/chickenRecipes.html',
    controller: 'chickenRecipesCtrl'
  })

  .state('beefRecipes', {
    url: '/page7',
    templateUrl: 'templates/beefRecipes.html',
    controller: 'beefRecipesCtrl'
  })

  .state('porkRecipes', {
    url: '/page8',
    templateUrl: 'templates/porkRecipes.html',
    controller: 'porkRecipesCtrl'
  })

  .state('seafoodRecipes', {
    url: '/page9',
    templateUrl: 'templates/seafoodRecipes.html',
    controller: 'seafoodRecipesCtrl'
  })

  .state('desserts', {
    url: '/page10',
    templateUrl: 'templates/desserts.html',
    controller: 'dessertsCtrl'
  })

  .state('bakedTeriyakiChicken', {
    url: '/page12',
    templateUrl: 'templates/bakedTeriyakiChicken.html',
    controller: 'bakedTeriyakiChickenCtrl'
  })

  .state('asianGlazedChickenThighs', {
    url: '/page13',
    templateUrl: 'templates/asianGlazedChickenThighs.html',
    controller: 'asianGlazedChickenThighsCtrl'
  })

  .state('appleButterPorkLoin', {
    url: '/page11',
    templateUrl: 'templates/appleButterPorkLoin.html',
    controller: 'appleButterPorkLoinCtrl'
  })

  .state('herbedPorkAndApples', {
    url: '/page14',
    templateUrl: 'templates/herbedPorkAndApples.html',
    controller: 'herbedPorkAndApplesCtrl'
  })

  .state('beefStewVI', {
    url: '/page15',
    templateUrl: 'templates/beefStewVI.html',
    controller: 'beefStewVICtrl'
  })

  .state('slowCookerBeefPotRoast', {
    url: '/page16',
    templateUrl: 'templates/slowCookerBeefPotRoast.html',
    controller: 'slowCookerBeefPotRoastCtrl'
  })

$urlRouterProvider.otherwise('/page5')

  

});