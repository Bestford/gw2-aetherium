// Define all Angular controllers

angular
  .module('Gw2Aetherium.controllers', [])

  // Main and only controller
  .controller('Main', function mainController($scope) {

    // Define scope variables. Undefined variables prevent hoisiting
    $scope.current;
    $scope.target;
    $scope.rate = '60';

    // ngPattern Regex used to prevent use of floats by the user
    $scope.numberValidation = /^\d*$/;

    // Maximum Aetherium capacity. Change this if a future update adds a new capacity upgrade
    $scope.max = 3000;

    $scope.calculate = function calculate() {

      // Determine how much more Aetherium is needed
      var difference = $scope.target - $scope.current;
      if (difference < 0) difference = 0;

      // Calculate how long until the Aetherium has generated
      var seconds = difference * parseInt($scope.rate);

      alert(difference + ' Aetherium to go. That is ' + seconds + ' seconds.');
    };
  });
