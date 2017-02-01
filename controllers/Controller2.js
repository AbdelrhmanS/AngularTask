

angular.module('task').controller("Ctrl2",function(DTOptionsBuilder, DTColumnBuilder, $http, $q) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromFnPromise(function() {
        var defer = $q.defer();
        $http.get('http://l-lin.github.io/angular-datatables/archives/data.json').then(function(result) {
            defer.resolve(result.data);
        });
        return defer.promise;
    }).withPaginationType('full_numbers')
    .withBootstrap()
    .withBootstrapOptions({
            TableTools: {
                classes: {
                    container: 'btn-group',
                    buttons: {
                        normal: 'btn btn-danger'
                    }
                }
            },
            ColVis: {
                classes: {
                    masterButton: 'btn btn-primary'
                }
            },
            pagination: {
                classes: {
                    ul: 'pagination '
                }
            }
        });

    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID').withClass('text-danger'),
        DTColumnBuilder.newColumn('firstName').withTitle('First name'),
        DTColumnBuilder.newColumn('lastName').withTitle('Last name')
    ];
	console.log('Controller1');
});