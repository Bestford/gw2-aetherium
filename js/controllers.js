// Define all Angular controllers

angular
  .module('Gw2Aetherium.controllers', [])

  // Main and only controller
  .controller('Main', function mainController($scope) {

    // Define scope variables. Undefined variables prevent hoisiting
    $scope.current;
    $scope.target;

    // ngPattern Regex used to prevent use of floats by the user
    $scope.numberValidation = /^\d*$/;

    // Maximum Aetherium capacity. Change this if a future update adds a new capacity upgrade
    $scope.max = 3000;
  });
