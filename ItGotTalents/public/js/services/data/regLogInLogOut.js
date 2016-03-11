app.factory('regLoginLogout',function($http, baseUrl, $resource, autenthication){



    return{
        saveStudent: function(successCB){
            $http({method: 'PUT', url: baseUrl + '/user'})
                .success(function(data,status,headers,config){
                    successCB(data);
                })
                .error(function(data,status,headers,config){
                    console.log(status + ' !')
                })
        }
    };






});