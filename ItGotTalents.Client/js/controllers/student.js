app.controller('student',function($scope, $routeParams, allStudentsData){

    console.log('student controller is ready ! ! !');
    console.log($routeParams);
    $scope.student = allStudentsData.getById($routeParams.id);
    console.log($scope.student)
});