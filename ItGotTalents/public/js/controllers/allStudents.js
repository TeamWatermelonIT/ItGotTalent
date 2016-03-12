app.controller('allStudents',function($scope,allStudentsData, $log){

    console.log('allStudents controller is ready !!!');


    allStudentsData.getStudents(function(data){
        $scope.student = data;
        //console.log(data);
    });

});