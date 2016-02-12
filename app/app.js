'use strict';

var app = angular.module('shopApp',['ui.router']);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
  
  $urlRouterProvider.otherwise('/');


  $stateProvider
  .state('shop',{
    url:'/',
    templateUrl:'site/partials/home.html',
    controller:'songControl as ctrl',
  })
  .state('cart',{
    url:'/cart',
    templateUrl:'site/partials/cart.html',
    controller:'CartCtrl as ctrl',
  })
  .state('auth',{
    url:'/auth',
    templateUrl:'site/partials/auth.html',
    controller:'AuthCtrl as ctrl',
  })
  .state('add_product',{
    url:'/add_product',
    templateUrl:'site/partials/add_prdt.html',
    controller:'AddPrdt as ctrl',
  })
  .state('edit_product',{
    url:'/edit_product',
    templateUrl:'site/partials/edit_prdt.html',
    controller:'EditPrdt as ctrl',
  })
    .state(aboutus,{
    url:'/about_us',
    templateUrl:'site/partials/aboutus.html',
    controller:'songControl as ctrl',
  })
    .state('contact',{
    url:'/contact',
    templateUrl:'site/partials/contact.html',
    controller:'songControl as ctrl',
  })
  .state('product_management',{
    url:'/product_management',
    templateUrl:'site/partials/prdt_mgmt.html',
    controller:'PrdtMgmt as ctrl',
    //TODO #2 Resolve Products before admin page load
  });

  $httpProvider.interceptors.push(function(){
       return {
           request: function(config) {
               return config;
           },
           response: function(response) {
               var auth_token = response.headers('authentication');
               if(localStorage.authToken == undefined && auth_token != null){
                localStorage.authToken = auth_token;
               }
               return response;
           }
       }
   });
});

	//$urlRouterProvider.otherwise('/');

	// $stateProvider
	// .state('shop',{
	// 	url:'/',
	// 	templateUrl:'',
	// 	controller:'',
	// });

  //   $routeProvider
  //   .when('/',{
  //     templateUrl:'index.html',
  //     controller:'songControl as ctrl'
  //   })
  //   .when('/movie/:movieId',{
  //     templateUrl:'movieDetails.html',
  //     controller:'MovieDetailsCtrl as ctrl'
  //   })
  //   .otherwise({
  //     redirectTo:'/'
  //   });
  // })

// 	$httpProvider.interceptors.push(function(){
//        return {
//            request: function(config) {
//                return config;
//            },
//            response: function(response) {
//                var auth_token = response.headers('authentication');
//                if(localStorage.authToken == undefined && auth_token != null){
//                	localStorage.authToken = auth_token;
//                }
//                return response;
//            }
//        }
//    });
// });

