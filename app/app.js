'use strict';

angular.module("NotesApp", ["ngRoute"]).config($routeProvider => {
  $routeProvider
  .when("/", {
    templateUrl: "",
    controller: ""
  })
  .when("/register", {
    templateUrl: "",
    controller: ""
  })
  .when("/login", {
    templateUrl: "",
    controller: ""
  })
  .when("/notes", {
    templateUrl: "",
    controller: ""
  })
  .when("/new", {
    templateUrl: "",
    controller: ""
  });
});