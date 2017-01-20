(function(){
	angular.module('admin').
	controller('StudentViewController', StudentViewController);

	StudentViewController.$inject = ['$scope', 'StudentService'];

	function StudentViewController($scope, StudentService){
		var vm = this;
		vm.test = "View Test";
		console.log(vm.test);
		vm.data = {
            student: {},
            institute_Student: {}
        };
        
        StudentService.getStudentById().then(function(result){
        	console.log(result);
        	vm.data = result;
        	console.log(vm.data.student[0].firstname);
        });
	}
})();