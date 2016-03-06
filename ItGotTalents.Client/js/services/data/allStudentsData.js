app.factory('allStudentsData',function($resource, $http, $log){


    var resource = $resource('dataJSON/students/:id.json', {id:'@id'});


    function getAllStudent() {
        return resource.get({id:'allStudents'});
    }

    function getAdById(id) {
        return resource.get({id: id});
    }

    return {
        getAll: getAllStudent,
        getById: getAdById,

    };

});


