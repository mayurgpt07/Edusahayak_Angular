(function(){
	angular.module('admin').
	controller('StudentUpdateController', StudentUpdateController);

	StudentUpdateController.$inject = ['$scope', '$filter', 'StudentService'];

	function StudentUpdateController($scope, $filter, StudentService){
		var vm = this;
		vm.test = 'in update';
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

		StudentService.getStudentById().then(function(result){
			console.log(result.student[0].dateOfBirth);
			vm.data = result;
			vm.dateOfBirth = convertDate(result.student[0].dateOfBirth);
			vm.itstudent_feePaidtillDate = convertDate(result.institute_Student[0].itstudent_feePaidtillDate);

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
			vm.data.institute_Student[0].itstudent_feePaidtillDate = $filter('date')(new Date(date), 'yyyy-MM-dd');
			console.log(vm.data.institute_Student[0].itstudent_feePaidtillDate);
		}

		function dateForBirth(date){
			console.log(date);
			vm.data.student[0].dateOfBirth = $filter('date')(new Date(date), 'yyyy-MM-dd');
			console.log(vm.data.student[0].dateOfBirth);
		}

		function updateStudent(){
			console.log(vm.data);
		}


	}
})();



// 'EEE MMM dd yyyy 00:00:00 Z'