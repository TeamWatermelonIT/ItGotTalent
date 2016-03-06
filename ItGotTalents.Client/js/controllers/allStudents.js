app.controller('allStudents',function($scope,allStudentsData, $log){

    console.log('allStudents controller is ready !!!');

    allStudentsData.getAll().$promise.then(function(data){
        $scope.allStudent = data;
        console.log(data);
    },function(error){
        $log.error(error);
    });



    //
    //allStudentsData.getAllStudents(function(data){
    //    $scope.allStudent = data;
    //    console.log($scope.allStudent);
    //});
    //


});