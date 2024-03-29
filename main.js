var app = angular.module('app', ['ngMaterial','ngAnimate','ngRoute','angular-carousel','duScroll','ngMessages','angular-scroll-animate','chart.js']);

app.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
  $routeProvider.when("/", {
    controller: "MainCtrl",
    templateUrl: "templates/home.html"
  }).otherwise({
    controller: "MainCtrl",
    templateUrl: "templates/error.html"
  });
}]);
