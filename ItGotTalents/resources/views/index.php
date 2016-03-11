<?php
?>
<html ng-app="app">
<head>
    <link rel="stylesheet" href="/css/vendor.css">
    <link rel="stylesheet" href="/css/app.css">
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
<style>
    .smallText{
        font-size: 12px;
        display: inline-block;
        margin-left: 5px;
    }

    input.ng-invalid.ng-dirty.form-validation{
         background-color: pink;
    }
    input.ng-valid.ng-dirty.form-validation{
        background-color: greenyellow;
    }
</style>
</head>
<body ng-app="app">

<md-button class="md-raised md-primary">Welcome to Angular Material</md-button>


<div class="container">

    <ng-view>

    </ng-view>

</div>



<script src="../../public/js/lib/jquery.js"></script>
<script src="../../public/js/lib/bootstrap.min.js"></script>
<script src="../../public/js/lib/angular-1.4.9/angular.js"></script>
<script src="../../public/js/lib/angular-1.4.9/angular-resource.js"></script>
<script src="../../public/js/lib/angular-1.4.9/angular-route.js"></script>
<script src="../../public/js/app.js"></script>
<script src="../../public/js/controllers/allStudents.js"></script>
<script src="../../public/js/controllers/student.js"></script>
<script src="../../public/js/controllers/projects.js"></script>
<script src="../../public/js/controllers/currentProject.js"></script>
<script src="../../public/js/controllers/register.js"></script>
<script src="../../public/js/services/data/allStudentsData.js"></script>
<script src="../../public/js/services/data/currentStudent.js"></script>
<script src="../../public/js/services/data/regLogInLogOut.js"></script>
<script src="../../public/js/services/authentication.js"></script>
<script src="../../public/js/services/data/projects.js"></script>


<script src="/js/vendor.js"></script>
<script src="/js/app.js"></script>
</body>
</html>
