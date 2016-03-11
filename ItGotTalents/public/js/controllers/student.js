app.controller('student',function($scope, $routeParams,getCurrentStudent){

    console.log('student controller is ready ! ! !');
    console.log($routeParams.id);


    $scope.student = getCurrentStudent.getStudent($routeParams.id);
    console.log($scope.student);



    var showProjects = false;


    function showMyProjects(){

        if(!showProjects){
            showProjects = true;
        }else{
            showProjects = false
        }

    }

});