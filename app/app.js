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
  .state('admin',{
    url:'/admin',
    templateUrl:'site/partials/admin.html',
    controller:'AdminCtrl as ctrl',
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

