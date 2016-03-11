app.factory('authentication',function(){

    // TO DO

    var key = 'user';


    function saveUserData(data){
        localStorage.setItem(key, angular.toJson(data));
    }

    function getUserData(){
        return  angular.fromJson(localStorage.getItem(key));
    }

    function getHeaders(){
        // TO DO
    }


    return {
        saveUser : saveUserData,
        getUser : getUserData
    }

});