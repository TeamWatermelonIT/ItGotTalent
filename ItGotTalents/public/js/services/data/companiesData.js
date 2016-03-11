app.factory('companiesData',function($resource, $http, $log){


    var resource = $resource('dataJSON/students/:id.json', {id:'@id'});

    function getAllCompanies(id){
        return resource.get({id: id});
    }


    function getCompanyById(id) {
        return resource.get({id: id});
    }

    return {
        getAll: getAllStudents,
        getById: getAdById

    };

});


