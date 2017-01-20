function openModal() {
    $(document).ready(function() {
        $('#memberModal').modal('show');
    });
}


(function(){
	'use strict';

	angular.module('admin')
	.controller('LoginController', LoginController);

	LoginController.$inject = ['$scope'];

	function LoginController($scope){
		var vm = this;
		console.log('Entered in the login');
		openModal();
	}

})();