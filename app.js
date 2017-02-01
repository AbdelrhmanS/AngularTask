

var app = angular.module('task', ['ui.router', 'oc.lazyLoad']);

app.config(['$ocLazyLoadProvider', '$stateProvider', '$urlRouterProvider', 
	function($ocLazyLoadProvider, $stateProvider, $urlRouterProvider ) {
	$urlRouterProvider.otherwise("/state1");
	
	//Config/states of UI Router
	$stateProvider
	.state('state1', {
		url: "/state1",
		views : {
			"" : {
				controller:'Ctrl1',
				templateUrl:"views/view1.html"
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('controllers/Controller1.js'); // Resolve promise and load before view 
			}]
		}
	})
	.state('state2', {
		url: "/state2",
		views : {
			"" : {
				controller:'Ctrl2',
				templateUrl:"views/view2.html"
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('controllers/Controller2.js'); // Resolve promise and load before view 
			}]
		}
	});
}]);