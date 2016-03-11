var app = angular.module('app',['ngRoute','ngResource']);
console.log('app is ready');

app.constant('baseUrl', 'http://localhost/ItGotTalents/ItGotTalents/public/api');


app.config(function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: '../../public/templates/home/home.html',
        controller : ''
    });
    $routeProvider.when('/', {
        templateUrl: '../../public/templates/home/home.html',
        controller : ''
    });
    $routeProvider.when('/students', {
        templateUrl: '../../public/templates/students/students.html',
        controller : 'allStudents'
    });

    $routeProvider.when('/students/:id', {
        templateUrl: '../../public/templates/students/currentStudent.html',
        controller : 'student'
    });
    $routeProvider.when('/projects', {
        templateUrl: '../../public/templates/projects/projects.html',
        controller : 'projects'
    });
    $routeProvider.when('/projects/:id', {
        templateUrl: '../../public/templates/projects/currentProject.html',
        controller : 'currentProject'
    });
    $routeProvider.when('/companies', {
        templateUrl: '../../public/templates/companies/companies.html',
        controller : 'companies'
    });
    $routeProvider.when('/register', {
            templateUrl: '../../public/templates/register/register.html',
            controller : 'register'
        })
        //.otherwise({redirectTo: '/home'})

});