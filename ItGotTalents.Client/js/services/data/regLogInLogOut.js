app.factory('regLoginLogout',function($resource, autenthication){

    function registerUser(user){
        $resource('some url ... ' + 'user/register')
            .save(user)
            .$promise
            .then(function(data){
                autenthication.saveUser(data)
            })
    }

    function loginUser(){

    }

    function logoutUser(){

    }



    return{
        register: registerUser,
        login: loginUser,
        logout: logoutUser
    }

});