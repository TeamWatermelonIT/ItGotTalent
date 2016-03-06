var app = angular.module('app',['ngRoute','ngResource']);


app.config(function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: 'Views/home/home.html',
        controller : ''
    });
    $routeProvider.when('/', {
        templateUrl: 'Views/home/home.html',
        controller : ''
    });
    $routeProvider.when('/students', {
        templateUrl: 'Views/students/students.html',
        controller : 'allStudents'
    });

    $routeProvider.when('/students/student/:id', {
        templateUrl: 'Views/students/currentStudent.html',
        controller : 'student'
    });
    $routeProvider.when('/projects', {
        templateUrl: 'Views/projects/projects.html',
        controller : 'projects'
    });
    $routeProvider.when('/companies', {
        templateUrl: 'Views/companies/companies.html',
        controller : 'companies'
    });
    $routeProvider.when('/register', {
            templateUrl: 'Views/register/register.html',
            controller : 'register'
        })
        .otherwise({redirectTo: '/home'})

});