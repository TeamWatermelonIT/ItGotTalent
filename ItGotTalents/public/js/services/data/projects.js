app.factory('projects',function($resource, $http){

    console.log('allProjects service is READY');


    return{
        getProjects: function(successCB){
            $http({method: 'GET', url: 'http://localhost/ItGotTalents/ItGotTalents/public/api/projects'})
                .success(function(data,status,headers,config){
                    successCB(data);
                })
                .error(function(data,status,headers,config){
                    console.log(status + ' !')
                })
        },
        getProjectById: function(id,successCB){
            $http({method: 'GET', url: 'http://localhost/ItGotTalents/ItGotTalents/public/api/projects/' + id})
                .success(function(data,status,headers,config){
                    successCB(data);
                })
                .error(function(data,status,headers,config){
                    console.log(status + ' !')
                })
        }
    };



});