var app = angular.module('app',['ngRoute','ngResource']);
console.log('app is ready');

app.constant('baseUrl', '../../public/api');


app.config(function($routeProvider){
    $routeProvider.when('/home', {
        templateUrl: '../../public/views/home/view-home.html',
        controller : ''
    });
    $routeProvider.when('/carousel-example-generic', {
        templateUrl: '../../public/views/home/view-home.html',
        controller : ''
    });
    $routeProvider.when('/', {
        templateUrl: '../../public/views/home/view-home.html',
        controller : ''
    });
    $routeProvider.when('/students', {
        templateUrl: '../../public/views/students/view-students-01.html',
        controller : 'ctrl-students'
    });

    $routeProvider.when('/students/:id', {
        templateUrl: '../../public/views/students/view-student-details.html',
        controller : 'ctrl-students-details'
    });
    $routeProvider.when('/projects', {
        templateUrl: '../../public/views/projects/view-projects.html',
        controller : 'ctrl-projects'
    });
    $routeProvider.when('/projects/:id', {
        templateUrl: '../../public/views/projects/view-projects-details.html',
        controller : 'ctrl-project'
    });
    $routeProvider.when('/register', {
            templateUrl: '../../public/views/register/view-register.html',
            controller : 'ctrl-register'
        });
        //.otherwise({redirectTo: '/home'})

});