

angular.module('task').controller("Ctrl1",

function($scope) {
    var vm = this;
    vm.persons = $scope.persons;
	console.log('Controller1');
	console.log( vm.persons);

});