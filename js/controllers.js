// Define all Angular controllers

angular
  .module('Gw2Aetherium.controllers', [])

  // Main and only controller
  .controller('Main', function mainController($scope) {

    // Define scope variables. Undefined variables prevent hoisiting
    $scope.current;
    $scope.target;
    $scope.date;
    $scope.dateDisplay;
    $scope.targetCountdown;
    $scope.rate = '60';

    // ngPattern Regex used to prevent use of floats by the user
    $scope.numberValidation = /^\d*$/;

    // Maximum Aetherium capacity. Change this if a future update adds a new capacity upgrade
    $scope.max = 3000;

    /**
     * Calculate when the target Aetherium will be generated based on the current and mining rate
     * Displays as both the datetime and an expression of how long until that datetime
     */
    $scope.calculate = function calculate() {

      // Determine how much more Aetherium is needed
      var difference = $scope.target - $scope.current;
      if (difference < 0) difference = 0;

      // Calculate how long until the Aetherium has generated
      var seconds = difference * parseInt($scope.rate);

      // The format to use when displaying the target datetime
      var format = 'dddd Do MMMM YYYY, HH:mm';

      // Display the target datetime and countdown
      $scope.date          = moment().add(seconds, 'seconds');
      $scope.dateDisplay   = $scope.date.format(format);
      $scope.dateCountdown = $scope.date.countdown().toString();
    };
  });
