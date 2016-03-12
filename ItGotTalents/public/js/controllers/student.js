app.controller('student',function($scope, $routeParams,getCurrentStudent){

    console.log('student controller is ready ! ! !');
    console.log($routeParams.id);


     getCurrentStudent.getStudent($routeParams.id).$promise.then(function(data){
         $scope.student = data;
         var monthNames = [
             "January", "February", "March",
             "April", "May", "June", "July",
             "August", "September", "October",
             "November", "December"
         ];

         var date = new Date($scope.student.dateOfBirth);
         var day = date.getDate();
         var monthIndex = date.getMonth();
         var year = date.getFullYear();


         $scope.student.dateOfBirth = day + ' ' + monthNames[monthIndex] + ' ' + year;

         console.log($scope.student.dateOfBirth)
    });



    $scope.showProjects = false;
    $scope.text = 'Show';

    $scope.showMyProjects = showMyProjects;




    function showMyProjects(){

        if(!$scope.showProjects){
            $scope.text = 'Hide';
            $scope.showProjects = true;
        }else{
            $scope.text = 'Show';
            $scope.showProjects = false
        }
    }

});