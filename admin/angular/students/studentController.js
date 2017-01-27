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
        vm.index = undefined;
        vm.deleteData = undefined;
        vm.combinedData = undefined;
        vm.setIndex = setIndex;
        vm.deleteStudent = deleteStudent;
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
        });

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
            StudentService.deleteStudent();
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