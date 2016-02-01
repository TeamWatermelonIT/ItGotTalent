var app = angular.module('gotTalents',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider.when('/index.html', {
            templateUrl: 'SubPages/home.html',
            controller : 'home'
        })
        $routeProvider.when('/projects', {
            templateUrl: 'SubPages/projects.html',
            controller : 'projects'
        })
        $routeProvider.when('/students', {
            templateUrl: 'SubPages/students.html',
            controller : 'students'
        })
        $routeProvider.when('/companies', {
            templateUrl: 'SubPages/companies.html',
            controller : 'companies'
        })
        $routeProvider.when('/register', {
            templateUrl: 'SubPages/register.html',
            controller : 'register'
        })
    });