app.controller('allStudents',function($scope,allStudentsData, $log){

    console.log('allStudents controller is ready !!!');


    allStudentsData.getStudents(function(data){
        $scope.student = data;
        console.log(data);
    });


    //allStudentsData.getAll().$promise.then(function(data){
    //    console.log(data);
    //
    //    $scope.student = data;
    //
    //},function(error){
    //    console.log('tuk');
    //
    //    console.log(error);
    //    $log.error(error);
    //});


});