(function(){
	'use strict';
	
	angular.module('admin')
	.controller('FeeStructureController', FeeStructureController);

	FeeStructureController.$inject = ['$scope'];

	function FeeStructureController($scope){
		var vm = this;
		console.log('feeStructureController');
	}
})();