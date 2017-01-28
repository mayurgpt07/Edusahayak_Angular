(function(){
	angular.module('admin').
	controller('StudentUpdateController', StudentUpdateController);

	StudentUpdateController.$inject = ['$scope', '$filter', '$routeParams', 'StudentService'];

	function StudentUpdateController($scope, $filter, $routeParams, StudentService){
		var vm = this;
		// vm.test = 'in update';
		console.log($routeParams.studentId);
		vm.studentId = $routeParams.studentId;
		vm.data = {
            student: {},
            institute_Student: {}
        };
        vm.updateStudent = updateStudent;
        vm.dateForFees = dateForFees;
        vm.dateForBirth = dateForBirth;
        vm.dateOfBirth = undefined;
        vm.itstudent_feePaidtillDate = undefined;
		console.log(vm.test);
		$scope.$watch(function(){
			return vm.dateOfBirth;
		}, function(){
			console.log(vm.dateOfBirth);
		});

		StudentService.getStudentById(vm.studentId).then(function(result){
			console.log(result.student[0].dateOfBirth);
			vm.data.student = result.student[0];
			vm.data.institute_Student = result.institute_Student[0];
			vm.test = vm.data.institute_Student.feestructure;
			console.log(vm.data.institute_Student.feestructure.feeStructure_id);
			vm.dateOfBirth = convertDate(vm.data.student.dateOfBirth);
			vm.itstudent_feePaidtillDate = convertDate(vm.data.institute_Student.itstudent_feePaidtillDate);

		});

		function convertDate(date){
			var dateOfBirth = $filter('date')(new Date(date), 'EEE MMM dd yyyy 00:00:00 Z');
			var dob = dateOfBirth.split('+');
			
			dob[1] = 'GMT+'+dob[1]+' (IST)';
			
			dob = dob[0] + dob[1];
			// console.log(dob);
			return new Date(dob);
		}

		function dateForFees(date){
			console.log(date);
			vm.data.institute_Student.itstudent_feePaidtillDate = $filter('date')(new Date(date), 'yyyy-MM-dd');
			console.log(vm.data.institute_Student.itstudent_feePaidtillDate);
		}

		function dateForBirth(date){
			console.log(date);
			vm.data.student.dateOfBirth = $filter('date')(new Date(date), 'yyyy-MM-dd');
			console.log(vm.data.student.dateOfBirth);
		}

		function updateStudent(){
			console.log(vm.data.institute_Student.feestructure.feeStructure_id);
			StudentService.filterStudent();
		}


	}
})();



// 'EEE MMM dd yyyy 00:00:00 Z'