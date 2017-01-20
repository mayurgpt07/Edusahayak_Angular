(function() {
    console.log('Entered in routes');
    angular.module('admin', ['ngRoute'])
        .config(routing);

    routing.$inject = ['$routeProvider', '$httpProvider'];

    function routing($routeProvider, $httpProvider) {
        $routeProvider.
        when('/admin', {
            templateUrl: '/html/login.html',
            controller: 'LoginController',
            controllerAs: 'Login'
        }).
        when('/admin/students', {
            templateUrl: '/html/Student.html',
            controller: 'StudentsController',
            controllerAs: 'Students'
        }).
        when('/admin/students/addStudent', {
            templateUrl: '/html/add.html',
            controller: 'StudentsAddController',
            controllerAs: 'StudentsAdd'
        }).
        when('/admin/students/viewStudent',{
        	templateUrl: '/html/view.html',
        	controller: 'StudentViewController',
        	controllerAs: 'StudentsView'
        }).
        when('/admin/students/updateStudent', {
            templateUrl: '/html/update.html',
            controller: 'StudentUpdateController',
            controllerAs: 'StudentsUpdate'
        }).
        when('/admin/feestructure', {
            templateUrl: '/html/FeeStructure.html',
            controller: 'FeeStructureController',
            controllerAs: 'FeeStructure'
        });
    }
})();