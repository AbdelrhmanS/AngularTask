angular.module('task').controller("Ctrl3",['$scope' ,function($scope){
	$scope.persondata={};
	$scope.addPerson = function() {
		$scope.persons.push(angular.copy($scope.persondata));
		$scope.persondata = {};
		window.localStorage['items'] = JSON.stringify($scope.persons);
		alert("Record Added go to State 1 to View all data");
	}
}]);