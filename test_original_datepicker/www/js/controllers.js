angular.module('starter.controllers', [])

// Controleur general de l'application
  .controller('mainController', ['$scope', 'ionicDatePicker',
    function ($scope, ionicDatePicker) {

    $scope.options = {
      start : "sunday",
      style: "modal",
      range: "day"
    };

    $scope.openDatePicker = function() {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          $scope.datepicker1 = new Date(val);
        },
        mondayFirst: $scope.options.start == "monday",          //Optional
        closeOnSelect: false,       //Optional
        templateType: $scope.options.style,       //Optional
        selectMode: $scope.options.range
      };

      ionicDatePicker.openDatePicker(ipObj1);
    };
    }]);
