

var app = angular.module('task', ['ui.router', 'oc.lazyLoad' , 'datatables' ,'ngResource' ,'datatables.bootstrap' ,'ngAnimate', 'anim-in-out']);
app.run(initDT);
function initDT(DTDefaultOptions) {
    DTDefaultOptions.setLoadingTemplate('<img class="center-block" src="loading.gif">');
}
app.run(function($rootScope){
	$rootScope.persons=JSON.parse(localStorage.getItem('items')) || [];
})
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
	})
	.state('state3', {
		url: "/state3",
		views : {
			"" : {
				controller:'Ctrl3',
				templateUrl:"views/view3.html"
			}
		},
		resolve: {
			loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
				return $ocLazyLoad.load('controllers/Controller3.js'); // Resolve promise and load before view 
			}]
		}
	});
}]);