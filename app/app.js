'use strict';

var app = angular.module('shopApp',['ui.router']);

app.config(function($stateProvider, $httpProvider,$urlRouterProvider){
  
  $urlRouterProvider.otherwise('/');


  $stateProvider
  .state('shop',{
    url:'/',
    templateUrl:'site/partials/home.html',
    controller:'prdtCtrl as ctrl',
    resolve: {
      products:function(productSrv){
        return productSrv.getProducts();
      }
    }
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
  .state('admin',{
    url:'/admin',
    templateUrl:'site/partials/prdt_mgmtNav.html',
    controller:'prdtCtrl as ctrl',
    resolve: {
      products:function(productSrv){
        return productSrv.getProducts();
      }
    }

  })
  .state('admin.product_management',{
    url:'/dashboard',
    templateUrl:'site/partials/prdt_mgmt.html',
    resolve: {
      products:function(productSrv){
        return productSrv.getProducts();
      }
    }
  })
  .state('admin.add_product',{
    url:'/add_product',
    templateUrl:'site/partials/add_prdt.html',
    controller:'AddPrdt as ctrl',
  })
    .state('admin.edit_product',{
    url:'/edit_product',
    templateUrl:'site/partials/edit_prdt.html',
    controller:'EditPrdt as ctrl',
  })
    .state('about_us',{
    url:'/about_us',
    templateUrl:'site/partials/aboutus.html',
    controller:'songCtrl as ctrl',
  })
    .state('contact_us',{
    url:'/contact_us',
    templateUrl:'site/partials/contact.html',
    controller:'songCtrl as ctrl',
  })
    .state('vinyl',{
    url:'/vinyl',
    templateUrl:'site/partials/vinyl.html',
    controller:'songCtrl as ctrl',
        products:function(productSrv){
        return productSrv.getProducts();
      }
    })

  })

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

