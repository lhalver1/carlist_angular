var myApp = angular.module('myApp', ['ngMaterial' , 'ngRoute']);

myApp.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'partials/home.html',
            controller  : 'homeController'
        })
        .when('/carDetails/:listIndex', {
            templateUrl : 'partials/carDetails.html',
            controller  : 'carDetailsController'
        })
});

myApp.factory('Service', function(){
    
    var carList = [
        { "make":"Honda", "model": "Civic Type R", "year": 2017, "img": "civic_type_r" },
        { "make":"Honda", "model": "Civic", "year": 2014, "img": "civic" },
        { "make":"Toyota", "model": "GT86", "year": 2014, "img": "gt86" },
        { "make":"Mitsubishi", "model": "Lancer EVO", "year": 2006, "img": "evo" },
        { "make":"Subaru", "model": "WRX", "year": 2006, "img": "wrx" },
        { "make":"Ford", "model": "Focus RS", "year": 2017, "img": "focus_rs" },
        { "make":"Acura", "model": "Integra Type R", "year": 1997, "img": "integra_type_r" },
        { "make":"Toyota", "model": "Supra", "year": 1998, "img": "supra" },
        { "make":"Nissan", "model": "GTR", "year": 1999, "img": "gtr" }
    ];
    
    return {
        getCarList: function(){
            return carList;
        } 
    }               
});