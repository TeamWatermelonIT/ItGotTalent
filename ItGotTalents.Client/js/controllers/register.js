app.controller('register', function($scope){

    console.log('register controller is ready ! ! !');



    $scope.register = function register(user, newUserForm){

        $scope.flagPass = false;
        if(!newUserForm.$valid){
            return;
        }else if(user.pass1 !== user.pass2){
            $scope.flagPass = true;
            return;
        }else{
            console.log(user)
        }

    }



});