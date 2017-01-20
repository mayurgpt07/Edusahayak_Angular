(function() {
    'use strict';

    angular.module('admin').
    controller('StudentsAddController', StudentsAddController);

    StudentsAddController.$inject = ['$scope', '$filter', 'StudentService'];

    function StudentsAddController($scope, $filter, StudentService) {
        var vm = this;
        vm.data = {
            student: {},
            institute_Student: {}
        };
        vm.addCurrentStudent = addCurrentStudent;
        $scope.$watch(function() {
            return vm.data.student.dateOfBirth;
        }, function() {
            console.log(vm.data.student.dateOfBirth);
        });

        function addCurrentStudent() {
            vm.data.student.dateOfBirth = $filter('date')(new Date(vm.dateOfBirth), 'yyyy-MM-dd');
            vm.data.institute_Student.itstudent_feePaidtillDate = $filter('date')(new Date(vm.itstudent_feePaidtillDate), 'yyyy-MM-dd');
            // console.log(vm.data.student.dateOfBirth);
            StudentService.addStudent(vm.data);
        }
    }
})();