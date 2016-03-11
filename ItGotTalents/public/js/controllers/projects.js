app.controller('projects',function($scope, projects){

    console.log('projects controller is ready !!!');



    projects.getProjects(function(data){
        $scope.projects = data;
        console.log(data);
    });

});

