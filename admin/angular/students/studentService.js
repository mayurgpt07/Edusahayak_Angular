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
            updateStudent: updateStudent,
            filterStudent: filterStudent
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

        function getStudentById(studentId){
        	return $http.get('http://localhost:8080/EduSahayak/admin/students/getStudentById?studentId='+studentId).
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

        function deleteStudent(studentId){
            return $http.delete('http://localhost:8080/EduSahayak/admin/students/delete?studentId='+studentId).
            then(function success(response){
                console.log(response);
            }, function error(err){
                console.log(err);
            });
        }

        function updateStudent(data){
            console.log(data);
            return $http.patch('http://localhost:8080/EduSahayak/admin/students/update?studentId=18', data).
            then(function success(response){
                console.log(response);
            }, function error(err){
                console.log(err);
            });
        }

        // var standard = new Array("MAyur", "MAnsi");

        function filterStudent(data){
            return $http.post('http://localhost:8080/EduSahayak/admin/students/filterStud',data).
            then(function success(response){
                console.log(response);
            }, function error(err){
                console.log(err);
            });
        }


        return studentService;	
    }

})();