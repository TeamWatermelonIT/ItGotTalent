app.factory('allStudentsData',function($resource, baseUrl, $http, $log){

    console.log('allStudentsData');


    return{
        getStudents: function(successCB){
            $http({method: 'GET', url: baseUrl + '/students'})
                .success(function(data,status,headers,config){
                    successCB(data);
                })
                .error(function(data,status,headers,config){
                    console.log(status + ' !')
                })
        }
    };



    //var resource = $resource('http://localhost/ItGotTalents/ItGotTalents/public/api/students');
    //
    //function getAllStudents(){
    //    return resource.get();
    //}
    //
    //
    //function getAdById(id) {
    //    return resource.get({id: id});
    //}
    //
    //return {
    //    getAll : getAllStudents,
    //    getById: getAdById
    //};

});


