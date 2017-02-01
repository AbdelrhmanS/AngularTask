

angular.module('task').controller("Ctrl1",

function($resource) {
    var vm = this;
    $resource('http://l-lin.github.io/angular-datatables/archives/data.json').query().$promise.then(function(persons) {
        vm.persons = persons;
    });
	console.log('Controller1');

});