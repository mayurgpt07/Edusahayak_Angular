(function() {
    angular.module('admin').
    controller('StudentViewController', StudentViewController);

    StudentViewController.$inject = ['$scope', '$filter', '$routeParams', 'StudentService'];

    function StudentViewController($scope, $filter, $routeParams, StudentService) {
        var vm = this;
        console.log($routeParams.studentId);
        vm.studentId = $routeParams.studentId;
        vm.test = "View Test";
        vm.itstudent_feePaidtillDate = undefined;
        vm.dateOfBirth = undefined;
        console.log(vm.test);
        vm.data = {
            student: {},
            institute_Student: {}
        };

        StudentService.getStudentById(vm.studentId).then(function(result) {
            console.log(result);
            vm.data.student = result.student[0];
            vm.data.institute_Student = result.institute_Student[0];
            vm.dateOfBirth = convertDate(vm.data.student.dateOfBirth);
            vm.itstudent_feePaidtillDate = convertDate(vm.data.institute_Student.itstudent_feePaidtillDate);
            console.log(vm.data.student.firstname);
        });

        function convertDate(date) {
            var dateOfBirth = $filter('date')(new Date(date), 'EEE MMM dd yyyy 00:00:00 Z');
            var dob = dateOfBirth.split('+');

            dob[1] = 'GMT+' + dob[1] + ' (IST)';

            dob = dob[0] + dob[1];
            // console.log(dob);
            return new Date(dob);
        }
    }
})();