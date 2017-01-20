(function() {
    angular.module('admin')
        .factory('StudentService', StudentService);

    StudentService.$inject = ['$http'];

    function StudentService($http) {
        var studentService = {
            getAllStudents: getAllStudents,
            getStudentById: getStudentById,
            addStudent: addStudent,
            deleteStudent: deleteStudent,
            updateStudent: updateStudent
        };

        function getAllStudents() {
            return $http.get('http://localhost:8080/EduSahayak/admin/students/allStudents?instituteId=1').
            then(function success(response) {
                console.log(response);
                return response.data;
            }, function error(err) {
                console.log(err);
            });
        }

        function getStudentById(){
        	return $http.get('http://localhost:8080/EduSahayak/admin/students/getStudentById?studentId=1').
        	then(function success(response){
        		console.log(response);
        		return response.data;
        	}, function error(err){
        		console.log(err);
        	});
        }

        function addStudent(data) {
            return $http.post('http://localhost:8080/EduSahayak/admin/students/add?instituteId=1',data).
            then(function success(response){
                console.log(response);
            }, function error(err){
                console.log(err);
            });
        }

        function deleteStudent(){
            return $http.delete('http://localhost:8080/EduSahayak/admin/students/delete?studentId=18').
            then(function success(response){
                console.log(response);
            }, function error(err){
                console.log(err);
            });
        }

        function updateStudent(data){
            return $http.patch('', data).
            then(function success(response){
                console.log(response);
            }, function error(err){
                console.log(err);
            });
        }


        return studentService;	
    }

})();