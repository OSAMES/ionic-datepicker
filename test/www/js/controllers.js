angular.module('starter.controllers', [])

// Controleur general de l'application
  .controller('mainController', ['$scope', 'ionicDatePicker',
    function ($scope, ionicDatePicker) {

    $scope.openDatePickerStandard = function() {
      var ipObj1 = {
        callback: function (val) {  //Mandatory
          $scope.datepicker1 = new Date(val);
        },
        mondayFirst: false,          //Optional
        closeOnSelect: false,       //Optional
        templateType: 'popup'       //Optional
      };

      ionicDatePicker.openDatePicker(ipObj1);
    };

      $scope.openDatePickerWeek = function() {
        var ipObj1 = {
          callback: function (val) {  //Mandatory
            $scope.datepicker2 = new Date(val);
          },
          mondayFirst: false,          //Optional
          closeOnSelect: false,       //Optional
          templateType: 'popup',       //Optional
          selectMode: 'week'
        };

        ionicDatePicker.openDatePicker(ipObj1);
      };

    }]);
