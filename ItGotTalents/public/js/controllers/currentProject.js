app.controller('currentProject',function($scope, $routeParams, projects){

    console.log('projects controller is ready !!!');

    var id = $routeParams.id;
    console.log(id);

    projects.getProjectById(id,function(data){
        $scope.project = data;
        console.log(data);
    });

});

