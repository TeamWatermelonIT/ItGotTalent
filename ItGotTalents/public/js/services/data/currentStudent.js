app.factory('getCurrentStudent',function($resource, baseUrl, $http, $log){

    console.log(' getCurrentStudent is ready' );

    var resource = $resource(baseUrl + '/students/:id' + {id:'@id'});




    function getStudentByID(id){
        return resource.get({id : id});
    }

    return{
        getStudent : getStudentByID
    }


});