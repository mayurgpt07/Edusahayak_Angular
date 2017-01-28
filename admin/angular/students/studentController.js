(function() {
    'use strict';

    angular.module('admin').
    controller('StudentsController', StudentsController);

    // angular.module('admin').
    // directive('deleteStudent',deleteStudent);

    // angular.module('admin').
    // controller('StudentDeleteController', StudentDeleteController);

    StudentsController.$inject = ['$scope', 'StudentService'];
    // StudentDeleteController.$inject = ['$scope', 'StudentService'];

    function StudentsController($scope, StudentService) {
        var vm = this;
        vm.data = {
            student: [],
            institute_Student: []
        };
        vm.filter = {
            sort: "Ascending",
            searchType: "EnrollmentNO",
            searchText: undefined,
            fees: "due",
            standard: []

        };
        vm.standard = undefined;
        vm.standardIndex = new Array(15);
        vm.index = undefined;
        vm.deleteData = undefined;
        vm.combinedData = undefined;
        vm.setIndex = setIndex;
        vm.deleteStudent = deleteStudent;
        vm.filterStudent = filterStudent;
        vm.getStandard = getStandard;
        vm.test = 'Test data';
        console.log('StudentsController');

        //Get All the students
        StudentService.getAllStudents().then(function(result) {
            console.log(result);
            vm.data = result;
            console.log(vm.data);

            //Combining data to work under one ng-repeat
            vm.combinedData = vm.data.student.map(function(value, index) {
                return {
                    student: value,
                    institute_Student: vm.data.institute_Student[index]
                };
            });
            for (var i = 0; i < 15; i++) {
                vm.standardIndex[i] = false;
            }
        });

        $scope.$watch(function() {
            return vm.filter.searchType;
        }, function() {
            console.log(vm.filter.searchType);
        });


        // add standards to the array
        function getStandard(standardIndex) {
            console.log(standardIndex);
            if (vm.standardIndex[standardIndex] === false) {
                vm.filter.standard.push(vm.standard);
                vm.standardIndex[standardIndex] = true;
            } else {
                console.log(vm.filter.standard.indexOf(vm.standard));
                vm.filter.standard.splice(vm.filter.standard.indexOf(vm.standard), 1);
                vm.standardIndex[standardIndex] = false;
            }
            console.log(vm.filter.standard);
        }


        //get the $index of the array of results
        function setIndex(index) {
            console.log(index);
            vm.index = index;
            vm.deleteData = {
                student: vm.data.student[index],
                institute_Student: vm.data.institute_Student[index]
            };
        }

        //delete Student on studentId
        function deleteStudent(studentId) {
            console.log(studentId);
            StudentService.deleteStudent(studentId);
        }

        function filterStudent(){
            console.log(vm.filter);
            StudentService.filterStudent(vm.filter);
        }
    }


    // function deleteStudent(){
    //     return  {
    //         restrict: 'E',
    //         transclude: true,
    //         scope : {
    //             index: '@'
    //             // 'close' : 'onClose'
    //         },
    //         templateUrl: '../../html/deleteModal.html',
    //         controller: StudentDeleteController,
    //         controllerAs: 'StudentDelete',
    //         bindToController: true
    //     };
    // }

    // function StudentDeleteController($scope, StudentService){
    //     var vm = this;
    //     console.log(vm.index);
    //     vm.testDelete = "Test Delete";
    //     console.log(vm.test);
    //     vm.func = func;
    //     function func(index){
    //         console.log(index);
    //     }
    // }
})();